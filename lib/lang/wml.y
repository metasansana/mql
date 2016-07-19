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
%%

statement
                    : find_statement EOF
                      {$$ = $1; return $$;}
                    
                    | insert_statement EOF
                      {$$ = $1; return $$;}

                    | update_statement EOF
                      {$$ = $1; return $$;}

                    | remove_statement EOF
                      {$$ = $1; return $$;}
                    ;

find_statement
                    : FROM string_literal FIND field_expression
                      where_expression? modifiers* joins*
                      {$$ = new yy.ast.FindStatement($2, $4, $5 || null, $6 || [], $7||[],  @$);}
                    ;





field_expression
                    : field_reference
                      {$$ = [$1];}
                    
                    | field_expression ',' field_reference
                      {$$ = $1.concat($3);}

                    | '*' 
                      {$$ = [];}
                    ;

field_reference
                    : field_name
                      {$$ = new yy.ast.FieldReference($1, true, @$);  }

                    | '!' field_name
                      {$$ = new yy.ast.FieldReference($2, false,  @$);}
                    ; 

field_name
                    : string_literal
                    | identifier
                    ;

where_expression
                    : WHERE expression
                      {$$ = $2;}
                    ;

expression
                    : comparison_expression
                      {$$ = $1;}

                    | '(' comparison_expression ')'
                      {$$ = $2; }

                    | logical_expression
                      {$$ = $1;}
                    ;

logical_expression
                   : comparison_expression logical_operator comparison_expression
                     {$$ = new yy.ast.LogicalExpression($1, $2, $3, @$); }

                   | logical_expression logical_operator comparison_expression
                     {$$ = new yy.ast.LogicalExpression($1, $2, $3, @$); }
                   
                   | '(' logical_expression ')' logical_operator '(' logical_expression ')'
                     {$$ = new yy.ast.LogicalExpression($2, $4, $6, @$);}
                   ;

logical_operator
                    : OR       {$$ = '$or'; }
                    | AND      {$$ = '$and';}
                    | NOR      {$$ = '$nor';}
                    ;

comparison_expression
                    : field_name comparison_operator right_value
                      {$$ = new yy.ast.ComparisonExpression($1, $2, $3, @$);           }

                    | field_name IN array_literal
                      {$$ = new yy.ast.ComparisonExpression($1, '$in', $3, @$);        }

                    | field_name NOT IN array_literal
                      {$$ = new yy.ast.ComparisonExpression($1, '$nin', $3, @$);       }

                    | field_name EXISTS 
                      {$$ = new yy.ast.ComparisonExpression($1, '$exists', true, @$);  }

                    | field_name NOT EXISTS 
                      {$$ = new yy.ast.ComparisonExpression($1, '$exists', false, @$); }
                    ;

comparison_operator
                    : '>'     {$$ = '$gt';    }
                    | '>='    {$$ = '$gte';   }
                    | '<'     {$$ = '$lt';    }
                    | '<='    {$$ = '$lte';   }
                    | '=='    {$$ = '$eq';    }
                    | '!='    {$$ = '$ne';    }
                    ;

right_value
                    : literal
                    | variable_reference
                    | context_reference
                    ;

context_reference
                    : '@' field_name
                      {$$ = new yy.ast.ContextReference($2, @$); }
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
                      {$$ = new yy.ast.SortClause($3,  @$);  }
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
                    : JOIN field_expression FROM collection_reference
                      where_expression? modifiers*
                      {$$ = new yy.ast.InnerJoinStatement($2, $4, $5||[], $6||[], @$); }

                    | LEFT JOIN field_expression FROM collection_reference
                      where_expression? modifiers*
                      {$$ = new yy.ast.LeftJoinStatement($2, $5, $6 || [], @$);        } 

                    | OUTER JOIN field_expression FROM collection_reference
                      where_experession? modifiers*
                      {$$ = new yy.ast.OuterJoinStatement($2, $5, $6 || [], @$);       }
                    ;

collection_reference
                    : (string_literal | variable_reference) 
                      {$$ = new yy.ast.CollectionReference($1, '', @$);                         }

                    | string_literal
                      AS string_literal 
                      {$$ = new yy.ast.CollectionReference($1, $3, @$);                         }

                    | variable
                      AS string_literal 
                      {$$ = new yy.ast.CollectionReference($1, $3, @$);                         }

                    | string_literal
                      AS variable 
                      {$$ = new yy.ast.CollectionReference($1, $3, @$);                         }
                    
                    | variable
                      AS variable
                      {$$ = new yy.ast.CollectionReference($1, $3, @$);                         }

                    ;

insert_statement
                    : WITH string_literal INSERT value_expression 
                      {$$ = new yy.ast.InsertStatement($2, $4, @$);           }
                    ;

update_statement
                    : WITH string_literal SET value_expression where_expression?
                      {$$ = new yy.ast.UpdateStatement($2, $4, $5, @$);       }
                    ;

remove_statement
                    : FROM string_literal where_expression? REMOVE ONE?
                      {$$ = new yy.ast.RemoveStatement($2, $3, $5||false, @$);}
                    ;

value_expression
                    : array_literal
                    | object_literal
                    | string_literal
                    | number_literal
                    | boolean_literal
                    ;
                    
variable_reference
                    : '{{' IDENTIFIER '}}' 
                      {$$ = new yy.ast.VariableReference($2,  @$);} 
                    ;

literal
                    : array_literal
                    | string_literal
                    | number_literal
                    | boolean_literal
                    ;

array_literal
                    : '[' ']' 
                      {$$ = new yy.ast.ArrayLiteral([], @$); }

                    | '[' arguments ']'
                      {$$ = new yy.ast.ArrayLiteral($2, @$); }
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

                    : identifier ':' right_value
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

identifier
                    : IDENTIFIER
                      {$$ = new yy.ast.Identifier($1, @$);}
                    ;
