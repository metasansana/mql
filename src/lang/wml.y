/*
  smel
*/

/*
 This is the Lexer portion, the syntax here corresponds to 
 [flex](http://flex.sourceforge.net/manual)
*/

%lex

/* Definitions */
DecimalDigit [0-9]
DecimalDigits [0-9]+
NonZeroDigit [1-9]
OctalDigit [0-7]
HexDigit [0-9a-fA-F]
ExponentIndicator [eE]
SignedInteger [+-]?[0-9]+
DecimalIntegerLiteral [-]?([0]|({NonZeroDigit}{DecimalDigits}*))
ExponentPart {ExponentIndicator}{SignedInteger}
OctalIntegerLiteral [0]{OctalDigit}+
HexIntegerLiteral [0][xX]{HexDigit}+
DecimalLiteral ([-]?{DecimalIntegerLiteral}\.{DecimalDigits}*{ExponentPart}?)|(\.{DecimalDigits}{ExponentPart}?)|({DecimalIntegerLiteral}{ExponentPart}?)
NumberLiteral {DecimalLiteral}|{HexIntegerLiteral}|{OctalIntegerLiteral}
Identifier [a-zA-Z$0-9_][a-zA-Z$_0-9.-]*
LineContinuation \\(\r\n|\r|\n)
OctalEscapeSequence (?:[1-7][0-7]{0,2}|[0-7]{2,3})
HexEscapeSequence [x]{HexDigit}{2}
UnicodeEscapeSequence [u]{HexDigit}{4}
SingleEscapeCharacter [\'\"\\bfnrtv]
NonEscapeCharacter [^\'\"\\bfnrtv0-9xu]
CharacterEscapeSequence {SingleEscapeCharacter}|{NonEscapeCharacter}
EscapeSequence {CharacterEscapeSequence}|{OctalEscapeSequence}|{HexEscapeSequence}|{UnicodeEscapeSequence}
DoubleStringCharacter ([^\"\\\n\r]+)|(\\{EscapeSequence})|{LineContinuation}
SingleStringCharacter ([^\'\\\n\r]+)|(\\{EscapeSequence})|{LineContinuation}
TemplateStringCharacter ([^\`\\\n\r]+)|(\\{EscapeSequence})|{LineContinuation}
StringLiteral (\"{DoubleStringCharacter}*\")|(\'{SingleStringCharacter}*\')|(\`{TemplateStringCharacter}*\`)
Text ({DoubleStringCharacter}*)|({SingleStringCharacter}*)

/* Lexer flags */
%options flex
%%

/* Lexer rules */

/* whitespaces */
<*>\s+                                          return;

/* global lexer roles */
'from'|'FROM'                                   return 'FROM';
'find'|'FIND'                                   return 'FIND';
'as'|'AS'                                       return 'AS';
'where'|'WHERE'                                 return 'WHERE';
'on'|'ON'                                       return 'ON';
'join'|'JOIN'                                   return 'JOIN';
'full'|'FULL'                                   return 'FULL';
'outer'|'OUTER'                                 return 'OUTER';
'left'|'LEFT'                                   return 'LEFT';
'one'|'ONE'                                     return 'ONE';
'in'|'IN'                                       return 'IN';
'nin'|'NIN'                                     return 'NIN';
'true'|'false'                                  return 'BOOLEAN';
'or'|'OR'                                       return 'OR';
'and'|'AND'                                     return 'AND';
'not'|'NOT'                                     return 'NOT';
'nor'|'NOR'                                     return 'NOR';
'exists'|'EXISTS'                               return 'EXISTS';
'limit'|'LIMIT'                                 return 'LIMIT';
'sort'|'SORT'                                   return 'SORT';
'by'|'BY'                                       return 'BY';
'into'|'INTO'                                   return 'INTO';
'insert'|'INSERT'                               return 'INSERT';
'remove'|'REMOVE'                               return 'REMOVE';
'with'|'WITH'                                   return 'WITH';
'set'|'SET'                                     return 'SET';
'once'|'ONCE'                                   return 'ONCE';
{NumberLiteral}                                 return 'NUMBER_LITERAL';
{StringLiteral}                                 return 'STRING_LITERAL';
'{{'                                            return '{{';
'}}'                                            return '}}';
'*'                                             return '*';
'>'                                             return '>';
'<'                                             return '<';
'('                                             return '(';
')'                                             return ')';
'['                                             return '[';
']'                                             return ']';
';'                                             return ';';
':'                                             return ':';
'='                                             return '=';
'=='                                            return '==';
'!='                                            return '!=';
'>='                                            return '>=';
'<='                                            return '<=';
'+'                                             return '+';
'-'                                             return '-';
'*'                                             return '*';
'/'                                             return '/';
'!'                                             return '!';
','                                             return ',';
'?'                                             return '?';
'@'                                             return '@';
'{'                                             return '{';
'}'                                             return '}';
{Identifier}                                    return 'IDENTIFIER';

<*><<EOF>>                                      return 'EOF';

/lex

%ebnf
%start statement
%left NOR
%left AND
%left OR
%%

statement
                   
                    : insert_statement EOF
                      {$$ = $1; return $$;}

                    | update_statement EOF
                      {$$ = $1; return $$;}

                    | remove_statement EOF
                      {$$ = $1; return $$;}

                    | find_statement EOF
                      {$$ = $1; return $$;}
                    ;

insert_statement
                    : INTO collection INSERT object_literal
                      {$$ = new yy.ast.InsertStatement($2, $4, @$);           }
                    ;

update_statement
                    : FROM collection SET object_literal where_expression? ONCE?
                      {$$ = new yy.ast.UpdateStatement($2, $4, $5||[], $6||false,  @$);}
                    ;

remove_statement
                    : FROM collection REMOVE where_expression? ONCE?
                      {$$ = new yy.ast.RemoveStatement($2, $4||[], $5||false, @$);}
                    ;

find_statement
                    : FROM collection FIND field_select_expression
                      where_expression? modifiers* joins*
                      {$$ = new yy.ast.FindStatement($2, $4, $5 || [], $6 || [], $7||[],  @$);}
                    ;


field_select_expression

                    : field_name
                      {$$ = {_id:false};
                       $$[$1] = true;
                      }

                    | '!' field_name
                      {$$ = {_id:false};
                       $$[$2] = false;
                      }
                    
                    | field_select_expression ',' field_name
                      {$$ = $1;
                       $$[$3] = true;
                      }

                    | field_select_expression ',' '!' field_name
                      {$$ = $1;
                       $$[$4] = false;
                      }

                    | '*' 
                      {$$ = {};}
                    ;

/* Removed to reduce number of nodes needed to implement
field_reference
                    : field_name
                      {$$ = new yy.ast.FieldReference($1, true, @$);  }

                    | '!' field_name
                      {$$ = new yy.ast.FieldReference($2, false,  @$);}
                    ; 
*/

field_name
                    : STRING_LITERAL
                      {$$ = $1.substring(1, $1.length -1);}

                    | IDENTIFIER
                      {$$ = $1;}
                    ;

where_expression

                    : WHERE filters
                      {$$ = $2;}
                    ;

filters
                    : filter
                      {$$ = [$1]; }

                    | filters ',' filter
                      {$$ = $1;
                       $$.push($3);
                      }

                    | logical_filter
                      {$$ = [$1];}
                    ;

logical_filter

                    : filter AND filter
                      {$$ = new yy.ast.LogicFilter($1, $2, $3, @$);}

                    | filter OR filter
                      {$$ = new yy.ast.LogicFilter($1, $2, $3, @$);}

                    | filter NOR filter
                      {$$ = new yy.ast.LogicFilter($1, $2, $3, @$);}

                    | filter AND logical_filter
                      {$$ = new yy.ast.LogicFilter($1, $2, $3, @$);}

                    | filter OR logical_filter
                      {$$ = new yy.ast.LogicFilter($1, $2, $3, @$);}

                    | filter NOR logical_filter
                      {$$ = new yy.ast.LogicFilter($1, $2, $3, @$);}

                    | logical_filter AND filter
                      {$$ = new yy.ast.LogicFilter($1, $2, $3, @$);}

                    | logical_filter OR filter
                      {$$ = new yy.ast.LogicFilter($1, $2, $3, @$);}

                    | logical_filter NOR filter
                      {$$ = new yy.ast.LogicFilter($1, $2, $3, @$);}

                    | logical_filter AND logical_filter
                      {$$ = new yy.ast.LogicFilter($1, $2, $3); }

                    | logical_filter OR logical_filter
                      {$$ = new yy.ast.LogicFilter($1, $2, $3); }

                    | logical_filter NOR logical_filter
                      {$$ = new yy.ast.LogicFilter($1, $2, $3); }

                    | '(' logical_filter  ')'
                      {$$ = $2;}
                    ;

logical_operator
                    : OR       {$$ = '$or'; }
                    | AND      {$$ = '$and';}
                    | NOR      {$$ = '$nor';}
                    ;

filter
                    : field_name filter_operator value_expression
                      {$$ = new yy.ast.Filter($1, $2, $3, @$);           }

                    | field_name IN array_literal
                      {$$ = new yy.ast.Filter($1, '$in', $3, @$);        }

                    | field_name NOT IN array_literal
                      {$$ = new yy.ast.Filter($1, '$nin', $4, @$);       }

                    | field_name EXISTS 
                      {$$ = new yy.ast.Filter($1, '$exists',
                      new yy.ast.BooleanLiteral(true, @$));  }

                    | field_name NOT EXISTS 
                      {$$ = 
                      new yy.ast.Filter($1, '$exists',
                      new yy.ast.BooleanLiteral(false, @$)); }

                    ;

filter_operator
                    : '>'     {$$ = '$gt';    }
                    | '>='    {$$ = '$gte';   }
                    | '<'     {$$ = '$lt';    }
                    | '<='    {$$ = '$lte';   }
                    | '=='    {$$ = '$eq';    }
                    | '!='    {$$ = '$ne';    }
                    ;

modifiers
                    : (limit_clause|sort_clause)
                    ;

limit_clause
                    : LIMIT BY number_literal
                      {$$ = new yy.ast.LimitClause($2, @$);     }
                    ;

sort_clause
                    : SORT BY field_sorts
                      {$$ = new yy.ast.SortClause($3,  @$);     }
                    ;

field_sorts
                    : field_sort
                      {$$ = [$1];                               }
                    
                    | field_sorts ',' field_sort
                      {$$ = $1.concat($3);                      }
                    ;

field_sort
                    : '-' field_name
                      {$$ = new yy.ast.FieldSort($2, -1, @$);   }
                    
                    | '+' field_name
                      {$$ = new yy.ast.FieldSort($2, 1, @$);    }
                    ;

joins
                    : JOIN field_select_expression FROM collection
                      where_expression? modifiers* ON join_condition
                      {$$ = 
                      new yy.ast.InnerJoinStatement
                      ($2, $4, $4, $5||[], $6||[], $8, @$);
                      }

                    | JOIN field_select_expression FROM collection AS collection
                      where_expression? modifiers* ON join_condition
                      {$$ = 
                      new yy.ast.InnerJoinStatement
                      ($2, $4, $6, $7||[], $8||[], $10, @$);
                      }

                    | LEFT JOIN field_select_expression FROM collection
                      where_expression? modifiers* ON join_condition
                      {$$ = 
                      new yy.ast.LeftJoinStatement
                      ($3, $5, $5, $6 || [], $7 || [], $9,  @$);        
                      } 

                    | LEFT JOIN field_select_expression FROM collection
                      AS collection where_expression? modifiers* ON join_condition
                      {$$ = 
                      new yy.ast.LeftJoinStatement
                      ($3, $5, $7, $8 || [], $9 || [], $11,  @$);        
                      } 

                    | OUTER JOIN field_select_expression FROM collection
                      where_experession? modifiers* ON join_condition
                      {$$ = 
                      new yy.ast.OuterJoinStatement
                      ($3, $5, $5, $6 || [], $7 || [], $9, @$);      
                      }

                    | OUTER JOIN field_select_expression FROM collection
                      AS collection where_experession? modifiers* ON join_condition
                      {$$ = 
                      new yy.ast.OuterJoinStatement
                      ($3, $5, $7, $8 || [], $9 || [], $11,  @$);      
                      }
                    ;

join_condition
                    : (string_literal | identifier) '==' (string_literal | identifier)
                      {$$ = new yy.ast.JoinCondition($1, $3, @$);}
                    ;


collection
                    : (string_literal | identifier)
                    ;

identifier
                    : IDENTIFIER
                      {$$ = new yy.ast.Identifier($1, @$);}
                    ;

value_expression
                    : context_reference
                    | current_reference
                    | literal
                    ;
                   
current_reference
                    : '@' field_name
                      {$$ = new yy.ast.ContextReference($2, @$); }
                    ;

context_reference
                    : '{{' IDENTIFIER '}}' 
                      {$$ = new yy.ast.ContextReference($2,  @$);} 
                    ;

literal
                    : array_literal
                    | object_literal
                    | string_literal
                    | number_literal
                    | boolean_literal
                    ;

array_literal
                    : '[' ']' 
                      {$$ = new yy.ast.ArrayLiteral([], @$); }

                    | '[' value_list ']'
                      {$$ = new yy.ast.ArrayLiteral($2, @$); }
                    ;

value_list
                    : value_expression
                      {$$ = [$1];}

                    | value_list ',' value_expression
                      {$$ = $1.concat($3);}
                    ;

object_literal
                    : '{' '}'
                      {$$ = new yy.ast.ObjectLiteral([], @$); }

                    | '{' key_value_pairs '}'
                      {$$ = new yy.ast.ObjectLiteral($2, @$); }
                    ;


key_value_pairs

                    : key_value_pair 
                      {$$ = [$1]; }
          
                    | key_value_pairs ',' key_value_pair 
                      {$$ = $1.concat($3); }
                    ;

key_value_pair

                    : (identifier|string_literal) ':' value_expression
                      {$$ = {key:$1, value:$3}; }
                    ;

string_literal
                    : STRING_LITERAL {$$ = new yy.ast.StringLiteral($1, @$); }
                    ;

number_literal
                    : NUMBER_LITERAL 
                    {$$ = new yy.ast.NumberLiteral(yy.help.parseNumber($1), @$); }
                    ;

boolean_literal
                    : BOOLEAN  
                    {$$ = new yy.ast.BooleanLiteral(yy.help.parseBoolean($1), @$);}
                    ;


