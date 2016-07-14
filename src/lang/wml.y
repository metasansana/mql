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
{Identifier}                                    return 'ID';

<*><<EOF>>                                      return 'EOF';

/lex

%ebnf
%start statement
%%

statement
                    : find_statement
                    ;

find_statement
                    : FROM collection_references FIND field_selection
                      where_clause? modifier_clauses?
                      {$$ = new yy.ast.FindStatement($2, $4, $5 || [], $6 || [], @$);}
                    ;

collection_references
                    : identifier
                    ;

field_selection
                    : field_reference
                      {$$ = [$1];}
                    
                    | field_selection ',' field_reference
                      {$$ = $1.concat($3);}

                    | '*' 
                      {$$ = [];}
                    ;

field_reference
                    : field_name
                      {$$ = new yy.ast.FieldSelector($1, true);}

                    | '!' field_name
                      {$$ = new yy.ast.FieldSelector($2, false);}
                    ; 

field_name
                    : identifier
                      {$$ = null;}

                    | field_name '.' identifier
                      {$$ = $1+'.'+$3;} 
                    ;

where_clause
                    : WHERE expressions
                      {$$ = null;}
                    ;

expressions
                    : expression logical_operator? expression
                      {$$ = null; }
                    
                    | expressions logical_operator? expression
                      {$$ = null; }
                    ;

expression
                    : left_value comparison_operator right_value
                      {$$ =  null}
                    ;

left_value
                    : field_name
                      {$$ = null;}
                    ;

right_value
                    : literal
                      {$$ = null;}
                    ;

comparison_operator
                    : ('>'|'>='|'<'|'<='|'=='|'!='|'+'|'/'|'-'|'=') 
                      {$$ = null;}
                    ;

logical_operator
                    : (OR | AND | NOT | NOR)
                      {$$ = null; }
                    ;

modifier_clause
                    : limit_clause
                    ;

limit_clause
                    : LIMIT NUMBER_LITERAL
                      {$$ = null;}
                    ;

literal
                    : array_literal
                    | string_literal
                    | number_literal
                    | boolean_literal
                    ;

array_literal
                    : '[' ']' 
                      {$$ = new yy.ast.ArrayLiteral([], yy.help.location(@$, @1, @2)); }

                    | '[' arguments ']'
                      {$$ = new yy.ast.ArrayLiteral($2, yy.help.location(@$, @1, @3)); }
                    ;

string_literal
                    : STRING_LITERAL {$$ = new yy.ast.StringLiteral($1, yy.help.location(@$, @1, @1)); }
                    ;

number_literal
                    : NUMBER_LITERAL 
                    {$$ = new yy.ast.NumberLiteral(yy.help.parseNumber($1), yy.help.location(@$, @1, @1)); }
                    ;

boolean_literal
                    : BOOLEAN  
                    {$$ = new yy.ast.BooleanLiteral(yy.help.parseBoolean($1), yy.help.location(@$, @1, @1));}
                    ;

identifier
                    : IDENTIFIER
                      {$$ = null;}
                    ;
