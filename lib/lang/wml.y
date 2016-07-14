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
{NumberLiteral}                                 return 'NUMBER_LITERAL';
{StringLiteral}                                 return 'STRING_LITERAL';
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
                    ;

find_statement
                    : FROM collection_reference FIND field_expression
                      where_condition? modifiers?
                      {$$ = new yy.ast.FindStatement($2, $4, $5 || null, $6 || [], @$);}
                    ;

collection_reference
                    : string_literal
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
                      {$$ = new yy.ast.FieldReference($1, true, @$);}

                    | '-' field_name
                      {$$ = new yy.ast.FieldReference($2, false,  @$);}
                    ; 

field_name
                    : string_literal
                    | identifier
                    ;

where_condition
                    : WHERE expression
                      {$$ = $2;}
                    ;

expression
                    : condition
                      {$$ = $1;}

                    | '(' condition ')'
                      {$$ = $2; }

                    | logical_expression
                      {$$ = $1;}
                    ;

logical_expression
                   : condition logical_operator condition
                     {$$ = new yy.ast.LogicalExpression($1, $2, $3, @$); }

                   | logical_expression logical_operator condition
                     {$$ = new yy.ast.LogicalExpression($1, $2, $3, @$); }
                   
                   | '(' logical_expression ')' logical_operator '(' logical_expression ')'
                     {$$ = new yyy.ast.LogicalExpression($2, $4, $6, @$);}
                   ;

logical_operator
                    : OR       {$$ = '$or'; }
                    | AND      {$$ = '$and';}
                    | NOR      {$$ = '$nor';}
                    ;

condition 
                    : (comparison_condition|element_condition)
                    ;

comparison_condition
                    : field_name comparison_operator right_value
                      {$$ = new yy.ast.Condition($1, $2, $3, @$);     }

                    | field_name IN array_literal
                      {$$ = new yy.ast.Condition($1, '$in', $3, @$);   }

                    | field_name NOT IN array_literal
                      {$$ = new yy.ast.Condition($1, '$nin', $3, @$); }
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
                    ;

element_condition
                    : field_name EXISTS 
                      {$$ = new yy.ast.Condition($1, '$exists', true, @$);  }

                    | field_name NOT EXISTS 
                      {$$ = new yy.ast.Condition($1, '$exists', false, @$); }
                    ;

modifier_clause
                    : limit_clause
                    ;

limit_clause
                    : LIMIT number_literal
                      {$$ = new yy.ast.LimitClause($2, @$); }
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
