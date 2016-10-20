/* parser generated by jison 0.4.17 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var ParserImpl = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,17],$V1=[1,18],$V2=[1,19],$V3=[11,14,18,21,36,60,64,74,76,112],$V4=[1,30],$V5=[1,36],$V6=[1,37],$V7=[1,38],$V8=[1,39],$V9=[5,111],$Va=[1,44],$Vb=[1,52],$Vc=[1,53],$Vd=[1,54],$Ve=[5,30,40,41,42,44,60,64,70,74,79,84,101,104,111],$Vf=[1,74],$Vg=[5,60,64,70,79,84],$Vh=[5,30,36,60,64,70,79,84],$Vi=[5,30,36,40,41,42,44,47,49,50,51,52,53,54,55,56,60,64,70,74,79,84,101,104,111],$Vj=[30,101],$Vk=[5,30,36,40,41,42,44,60,64,70,74,79,84,101,104,111],$Vl=[30,104],$Vm=[5,60,64,70,74,79,84,111],$Vn=[5,30,60,64,70,74,79,84,111],$Vo=[1,87],$Vp=[1,88],$Vq=[1,89],$Vr=[1,90],$Vs=[1,91],$Vt=[1,92],$Vu=[5,30,40,41,42,44,60,64,70,74,79,84,111],$Vv=[33,95,96,100,103,109,110],$Vw=[5,70,79,84],$Vx=[1,133],$Vy=[1,134],$Vz=[5,30,40,42,44,60,64,70,74,79,84,111],$VA=[5,30,42,44,60,64,70,74,79,84,111],$VB=[5,60,64,70,74,79,84],$VC=[1,148],$VD=[1,149],$VE=[5,30,60,64,70,74,79,84],$VF=[60,64,74];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"statement":3,"insert_statement":4,"EOF":5,"update_statement":6,"remove_statement":7,"find_statement":8,"INTO":9,"collection":10,"INSERT":11,"value_expression":12,"FROM":13,"SET":14,"object_literal":15,"update_statement_option0":16,"update_statement_option1":17,"REMOVE":18,"remove_statement_option0":19,"remove_statement_option1":20,"FIND":21,"field_selection":22,"find_statement_option0":23,"find_statement_repetition0":24,"find_statement_repetition1":25,"field_references":26,"*":27,"context_reference":28,"field_reference":29,",":30,"field_name":31,"!":32,"STRING_LITERAL":33,"IDENTIFIER":34,"where_expression":35,"WHERE":36,"filters":37,"filter":38,"logical_filter":39,"AND":40,"OR":41,"NOR":42,"(":43,")":44,"logical_operator":45,"filter_operator":46,"IN":47,"array_literal":48,"NOT":49,"EXISTS":50,">":51,">=":52,"<":53,"<=":54,"==":55,"!=":56,"modifiers":57,"modifiers_group0":58,"limit_clause":59,"LIMIT":60,"BY":61,"number_literal":62,"sort_clause":63,"SORT":64,"field_sorts":65,"field_sort":66,"-":67,"+":68,"joins":69,"JOIN":70,"field_select_expression":71,"joins_option0":72,"joins_repetition0":73,"ON":74,"join_condition":75,"AS":76,"joins_option1":77,"joins_repetition1":78,"LEFT":79,"joins_option2":80,"joins_repetition2":81,"joins_option3":82,"joins_repetition3":83,"OUTER":84,"joins_option4":85,"joins_repetition4":86,"joins_option5":87,"joins_repetition5":88,"join_condition_group0":89,"join_condition_group1":90,"collection_group0":91,"identifier":92,"current_reference":93,"literal":94,"@":95,"{{":96,"}}":97,"string_literal":98,"boolean_literal":99,"[":100,"]":101,"value_list":102,"{":103,"}":104,"key_value_pairs":105,"key_value_pair":106,"key_value_pair_group0":107,":":108,"NUMBER_LITERAL":109,"BOOLEAN":110,"ONCE":111,"where_experession":112,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",9:"INTO",11:"INSERT",13:"FROM",14:"SET",18:"REMOVE",21:"FIND",27:"*",30:",",32:"!",33:"STRING_LITERAL",34:"IDENTIFIER",36:"WHERE",40:"AND",41:"OR",42:"NOR",43:"(",44:")",47:"IN",49:"NOT",50:"EXISTS",51:">",52:">=",53:"<",54:"<=",55:"==",56:"!=",60:"LIMIT",61:"BY",64:"SORT",67:"-",68:"+",70:"JOIN",71:"field_select_expression",74:"ON",76:"AS",79:"LEFT",84:"OUTER",95:"@",96:"{{",97:"}}",100:"[",101:"]",103:"{",104:"}",108:":",109:"NUMBER_LITERAL",110:"BOOLEAN",111:"ONCE",112:"where_experession"},
productions_: [0,[3,2],[3,2],[3,2],[3,2],[4,4],[6,6],[7,5],[8,7],[22,1],[22,1],[22,1],[22,1],[26,1],[26,3],[29,1],[29,2],[31,1],[31,1],[35,2],[35,2],[37,1],[37,3],[37,1],[39,3],[39,3],[39,3],[39,3],[39,3],[39,3],[39,3],[39,3],[39,3],[39,3],[39,3],[39,3],[39,3],[45,1],[45,1],[45,1],[38,3],[38,3],[38,4],[38,2],[38,3],[46,1],[46,1],[46,1],[46,1],[46,1],[46,1],[57,1],[59,3],[63,3],[65,1],[65,3],[66,2],[66,2],[69,8],[69,10],[69,9],[69,11],[69,9],[69,11],[75,3],[10,1],[92,1],[12,1],[12,1],[12,1],[93,2],[28,3],[94,1],[94,1],[94,1],[94,1],[94,1],[48,2],[48,3],[102,1],[102,3],[15,2],[15,3],[105,1],[105,3],[106,3],[98,1],[62,1],[99,1],[16,0],[16,1],[17,0],[17,1],[19,0],[19,1],[20,0],[20,1],[23,0],[23,1],[24,0],[24,2],[25,0],[25,2],[58,1],[58,1],[72,0],[72,1],[73,0],[73,2],[77,0],[77,1],[78,0],[78,2],[80,0],[80,1],[81,0],[81,2],[82,0],[82,1],[83,0],[83,2],[85,0],[85,1],[86,0],[86,2],[87,0],[87,1],[88,0],[88,2],[89,1],[89,1],[90,1],[90,1],[91,1],[91,1],[91,1],[107,1],[107,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1: case 2: case 3: case 4:
this.$ = $$[$0-1]; return this.$;
break;
case 5:
this.$ = new yy.ast.InsertStatement($$[$0-2], $$[$0], this._$);           
break;
case 6:
this.$ = new yy.ast.UpdateStatement($$[$0-4], $$[$0-2], $$[$0-1]||[], $$[$0]||false,  this._$);
break;
case 7:
this.$ = new yy.ast.RemoveStatement($$[$0-3], $$[$0-1]||[], $$[$0]||false, this._$);
break;
case 8:
this.$ = new yy.ast.FindStatement($$[$0-5], $$[$0-3], $$[$0-2] || [], $$[$0-1] || [], $$[$0]||[],  this._$);
break;
case 9:
this.$ = $$[$0];                                   
break;
case 10:
this.$ = [new yy.ast.AllFieldsReference(this._$)]   
break;
case 11: case 12:
this.$ = [$$[$0]];                                 
break;
case 13: case 21: case 83:
this.$ = [$$[$0]]; 
break;
case 14: case 84:
this.$ = $$[$0-2].concat($$[$0]); 
break;
case 15:
this.$ = new yy.ast.FieldReference($$[$0], true, this._$);  
break;
case 16:
this.$ = new yy.ast.FieldReference($$[$0], false,  this._$);
break;
case 17:
this.$ = $$[$0].substring(1, $$[$0].length -1);
break;
case 18:
this.$ = $$[$0];
break;
case 19:
this.$ = $$[$0];                 
break;
case 20:
this.$ = [$$[$0]];               
break;
case 22:
this.$ = $$[$0-2];
                       this.$.push($$[$0]);
                      
break;
case 23: case 79:
this.$ = [$$[$0]];
break;
case 24: case 25: case 26: case 27: case 28: case 29: case 30: case 31: case 32:
this.$ = new yy.ast.LogicFilter($$[$0-2], $$[$0-1], $$[$0], this._$);
break;
case 33: case 34: case 35:
this.$ = new yy.ast.LogicFilter($$[$0-2], $$[$0-1], $$[$0]); 
break;
case 36:
this.$ = $$[$0-1];
break;
case 37:
this.$ = '$or'; 
break;
case 38:
this.$ = '$and';
break;
case 39:
this.$ = '$nor';
break;
case 40:
this.$ = new yy.ast.Filter($$[$0-2], $$[$0-1], $$[$0], this._$);           
break;
case 41:
this.$ = new yy.ast.Filter($$[$0-2], '$in', $$[$0], this._$);        
break;
case 42:
this.$ = new yy.ast.Filter($$[$0-3], '$nin', $$[$0], this._$);       
break;
case 43:
this.$ = new yy.ast.Filter($$[$0-1], '$exists',
                      new yy.ast.BooleanLiteral(true, this._$));  
break;
case 44:
this.$ =
                      new yy.ast.Filter($$[$0-2], '$exists',
                      new yy.ast.BooleanLiteral(false, this._$)); 
break;
case 45:
this.$ = '$gt';    
break;
case 46:
this.$ = '$gte';   
break;
case 47:
this.$ = '$lt';    
break;
case 48:
this.$ = '$lte';   
break;
case 49:
this.$ = '$eq';    
break;
case 50:
this.$ = '$ne';    
break;
case 52:
this.$ = new yy.ast.LimitClause($$[$0-1], this._$);     
break;
case 53:
this.$ = new yy.ast.SortClause($$[$0],  this._$);     
break;
case 54:
this.$ = [$$[$0]];                               
break;
case 55:
this.$ = $$[$0-2].concat($$[$0]);                      
break;
case 56:
this.$ = new yy.ast.FieldSort($$[$0], -1, this._$);   
break;
case 57:
this.$ = new yy.ast.FieldSort($$[$0], 1, this._$);    
break;
case 58:
this.$ =
                      new yy.ast.InnerJoinStatement
                      ($$[$0-6], $$[$0-4], $$[$0-4], $$[$0-3]||[], $$[$0-2]||[], $$[$0], this._$);
                      
break;
case 59:
this.$ =
                      new yy.ast.InnerJoinStatement
                      ($$[$0-8], $$[$0-6], $$[$0-4], $$[$0-3]||[], $$[$0-2]||[], $$[$0], this._$);
                      
break;
case 60:
this.$ =
                      new yy.ast.LeftJoinStatement
                      ($$[$0-6], $$[$0-4], $$[$0-4], $$[$0-3] || [], $$[$0-2] || [], $$[$0],  this._$);
                      
break;
case 61:
this.$ =
                      new yy.ast.LeftJoinStatement
                      ($$[$0-8], $$[$0-6], $$[$0-4], $$[$0-3] || [], $$[$0-2] || [], $$[$0],  this._$);
                      
break;
case 62:
this.$ =
                      new yy.ast.OuterJoinStatement
                      ($$[$0-6], $$[$0-4], $$[$0-4], $$[$0-3] || [], $$[$0-2] || [], $$[$0], this._$);
                      
break;
case 63:
this.$ =
                      new yy.ast.OuterJoinStatement
                      ($$[$0-8], $$[$0-6], $$[$0-4], $$[$0-3] || [], $$[$0-2] || [], $$[$0],  this._$);
                      
break;
case 64:
this.$ = new yy.ast.JoinCondition($$[$0-2], $$[$0], this._$);
break;
case 66:
this.$ = new yy.ast.Identifier($$[$0], this._$);
break;
case 70:
this.$ = new yy.ast.ContextReference($$[$0], this._$); 
break;
case 71:
this.$ = new yy.ast.ContextReference($$[$0-1],  this._$);
break;
case 77:
this.$ = new yy.ast.ArrayLiteral([], this._$); 
break;
case 78:
this.$ = new yy.ast.ArrayLiteral($$[$0-1], this._$); 
break;
case 80:
this.$ = $$[$0-2].concat($$[$0]);
break;
case 81:
this.$ = new yy.ast.ObjectLiteral([], this._$); 
break;
case 82:
this.$ = new yy.ast.ObjectLiteral($$[$0-1], this._$); 
break;
case 85:
this.$ = {key:$$[$0-2], value:$$[$0]}; 
break;
case 86:
this.$ = new yy.ast.StringLiteral($$[$0], this._$); 
break;
case 87:
this.$ = new yy.ast.NumberLiteral(yy.help.parseNumber($$[$0]), this._$); 
break;
case 88:
this.$ = new yy.ast.BooleanLiteral(yy.help.parseBoolean($$[$0]), this._$);
break;
case 99: case 101: case 107: case 111: case 115: case 119: case 123: case 127:
this.$ = [];
break;
case 100: case 102: case 108: case 112: case 116: case 120: case 124: case 128:
$$[$0-1].push($$[$0]);
break;
}
},
table: [{3:1,4:2,6:3,7:4,8:5,9:[1,6],13:[1,7]},{1:[3]},{5:[1,8]},{5:[1,9]},{5:[1,10]},{5:[1,11]},{10:12,28:16,33:$V0,34:$V1,91:13,92:15,96:$V2,98:14},{10:20,28:16,33:$V0,34:$V1,91:13,92:15,96:$V2,98:14},{1:[2,1]},{1:[2,2]},{1:[2,3]},{1:[2,4]},{11:[1,21]},o($V3,[2,65]),o($V3,[2,133]),o($V3,[2,134]),o($V3,[2,135]),o([5,11,14,18,21,30,36,40,41,42,44,55,60,64,70,74,76,79,84,101,104,108,111,112],[2,86]),o([5,11,14,18,21,36,55,60,64,70,74,76,79,84,108,112],[2,66]),{34:[1,22]},{14:[1,23],18:[1,24],21:[1,25]},{12:26,15:32,28:27,33:$V0,48:31,62:34,93:28,94:29,95:$V4,96:$V2,98:33,99:35,100:$V5,103:$V6,109:$V7,110:$V8},{97:[1,40]},{15:41,103:$V6},o($V9,[2,93],{19:42,35:43,36:$Va}),{15:49,22:45,26:46,27:[1,47],28:48,29:50,31:51,32:$Vb,33:$Vc,34:$Vd,96:$V2,103:$V6},{5:[2,5]},o($Ve,[2,67]),o($Ve,[2,68]),o($Ve,[2,69]),{31:55,33:$Vc,34:$Vd},o($Ve,[2,72]),o($Ve,[2,73]),o($Ve,[2,74]),o($Ve,[2,75]),o($Ve,[2,76]),{12:58,15:32,28:27,33:$V0,48:31,62:34,93:28,94:29,95:$V4,96:$V2,98:33,99:35,100:$V5,101:[1,56],102:57,103:$V6,109:$V7,110:$V8},{33:$V0,34:$V1,92:63,98:64,104:[1,59],105:60,106:61,107:62},o($Ve,[2,87]),o($Ve,[2,88]),o([5,11,14,18,21,30,36,40,41,42,44,60,64,70,74,76,79,84,101,104,111,112],[2,71]),o($V9,[2,89],{16:65,35:66,36:$Va}),{5:[2,95],20:67,111:[1,68]},o($V9,[2,94]),{28:70,31:73,33:$Vc,34:$Vd,37:69,38:71,39:72,43:$Vf,96:$V2},o($Vg,[2,97],{23:75,35:77,30:[1,76],36:$Va}),o($Vh,[2,9]),o($Vh,[2,10]),o($Vh,[2,11]),o($Vh,[2,12]),o($Vh,[2,13]),o($Vh,[2,15]),{31:78,33:$Vc,34:$Vd},o($Vi,[2,17]),o($Vi,[2,18]),o($Ve,[2,70]),o($Ve,[2,77]),{30:[1,80],101:[1,79]},o($Vj,[2,79]),o($Vk,[2,81]),{30:[1,82],104:[1,81]},o($Vl,[2,83]),{108:[1,83]},{108:[2,136]},{108:[2,137]},{5:[2,91],17:84,111:[1,85]},o($V9,[2,90]),{5:[2,7]},{5:[2,96]},o($Vm,[2,19],{30:[1,86]}),o($Vm,[2,20]),o($Vn,[2,21],{40:$Vo,41:$Vp,42:$Vq}),o($Vn,[2,23],{40:$Vr,41:$Vs,42:$Vt}),{46:93,47:[1,94],49:[1,95],50:[1,96],51:[1,97],52:[1,98],53:[1,99],54:[1,100],55:[1,101],56:[1,102]},{31:73,33:$Vc,34:$Vd,38:104,39:103,43:$Vf},o($Vg,[2,99],{24:105}),{29:106,31:51,32:$Vb,33:$Vc,34:$Vd},o($Vg,[2,98]),o($Vh,[2,16]),o($Ve,[2,78]),{12:107,15:32,28:27,33:$V0,48:31,62:34,93:28,94:29,95:$V4,96:$V2,98:33,99:35,100:$V5,103:$V6,109:$V7,110:$V8},o($Vk,[2,82]),{33:$V0,34:$V1,92:63,98:64,106:108,107:62},{12:109,15:32,28:27,33:$V0,48:31,62:34,93:28,94:29,95:$V4,96:$V2,98:33,99:35,100:$V5,103:$V6,109:$V7,110:$V8},{5:[2,6]},{5:[2,92]},{31:73,33:$Vc,34:$Vd,38:110},{31:73,33:$Vc,34:$Vd,38:111,39:112,43:$Vf},{31:73,33:$Vc,34:$Vd,38:113,39:114,43:$Vf},{31:73,33:$Vc,34:$Vd,38:115,39:116,43:$Vf},{31:73,33:$Vc,34:$Vd,38:117,39:118,43:$Vf},{31:73,33:$Vc,34:$Vd,38:119,39:120,43:$Vf},{31:73,33:$Vc,34:$Vd,38:121,39:122,43:$Vf},{12:123,15:32,28:27,33:$V0,48:31,62:34,93:28,94:29,95:$V4,96:$V2,98:33,99:35,100:$V5,103:$V6,109:$V7,110:$V8},{48:124,100:$V5},{47:[1,125],50:[1,126]},o($Vu,[2,43]),o($Vv,[2,45]),o($Vv,[2,46]),o($Vv,[2,47]),o($Vv,[2,48]),o($Vv,[2,49]),o($Vv,[2,50]),{40:$Vr,41:$Vs,42:$Vt,44:[1,127]},{40:$Vo,41:$Vp,42:$Vq},o($Vw,[2,101],{25:128,57:129,58:130,59:131,63:132,60:$Vx,64:$Vy}),o($Vh,[2,14]),o($Vj,[2,80]),o($Vl,[2,84]),o($Vl,[2,85]),o($Vn,[2,22]),o($Vz,[2,24],{41:$Vp}),o($Vz,[2,27],{41:$Vs}),o($Vu,[2,25]),o($Vu,[2,28]),o($VA,[2,26],{40:$Vo,41:$Vp}),o($VA,[2,29],{40:$Vr,41:$Vs}),o($Vz,[2,30],{41:$Vp}),o($Vz,[2,33],{41:$Vs}),o($Vu,[2,31]),o($Vu,[2,34]),o($VA,[2,32],{40:$Vo,41:$Vp}),o($VA,[2,35],{40:$Vr,41:$Vs}),o($Vu,[2,40]),o($Vu,[2,41]),{48:135,100:$V5},o($Vu,[2,44]),o($Vu,[2,36]),{5:[2,8],69:136,70:[1,137],79:[1,138],84:[1,139]},o($Vg,[2,100]),o($VB,[2,51]),o($VB,[2,103]),o($VB,[2,104]),{61:[1,140]},{61:[1,141]},o($Vu,[2,42]),o($Vw,[2,102]),{71:[1,142]},{70:[1,143]},{70:[1,144]},{62:145,109:$V7},{65:146,66:147,67:$VC,68:$VD},{13:[1,150]},{71:[1,151]},{71:[1,152]},o($VB,[2,52]),o($VB,[2,53],{30:[1,153]}),o($VE,[2,54]),{31:154,33:$Vc,34:$Vd},{31:155,33:$Vc,34:$Vd},{10:156,28:16,33:$V0,34:$V1,91:13,92:15,96:$V2,98:14},{13:[1,157]},{13:[1,158]},{66:159,67:$VC,68:$VD},o($VE,[2,56]),o($VE,[2,57]),o($VF,[2,105],{72:160,35:162,36:$Va,76:[1,161]}),{10:163,28:16,33:$V0,34:$V1,91:13,92:15,96:$V2,98:14},{10:164,28:16,33:$V0,34:$V1,91:13,92:15,96:$V2,98:14},o($VE,[2,55]),o($VF,[2,107],{73:165}),{10:166,28:16,33:$V0,34:$V1,91:13,92:15,96:$V2,98:14},o($VF,[2,106]),o($VF,[2,113],{80:167,35:169,36:$Va,76:[1,168]}),o($VF,[2,121],{85:170,76:[1,171],112:[1,172]}),{57:174,58:130,59:131,60:$Vx,63:132,64:$Vy,74:[1,173]},o($VF,[2,109],{77:175,35:176,36:$Va}),o($VF,[2,115],{81:177}),{10:178,28:16,33:$V0,34:$V1,91:13,92:15,96:$V2,98:14},o($VF,[2,114]),o($VF,[2,123],{86:179}),{10:180,28:16,33:$V0,34:$V1,91:13,92:15,96:$V2,98:14},o($VF,[2,122]),{33:$V0,34:$V1,75:181,89:182,92:184,98:183},o($VF,[2,108]),o($VF,[2,111],{78:185}),o($VF,[2,110]),{57:187,58:130,59:131,60:$Vx,63:132,64:$Vy,74:[1,186]},o($VF,[2,117],{82:188,35:189,36:$Va}),{57:191,58:130,59:131,60:$Vx,63:132,64:$Vy,74:[1,190]},o($VF,[2,125],{87:192,112:[1,193]}),o($Vw,[2,58]),{55:[1,194]},{55:[2,129]},{55:[2,130]},{57:196,58:130,59:131,60:$Vx,63:132,64:$Vy,74:[1,195]},{33:$V0,34:$V1,75:197,89:182,92:184,98:183},o($VF,[2,116]),o($VF,[2,119],{83:198}),o($VF,[2,118]),{33:$V0,34:$V1,75:199,89:182,92:184,98:183},o($VF,[2,124]),o($VF,[2,127],{88:200}),o($VF,[2,126]),{33:$V0,34:$V1,90:201,92:203,98:202},{33:$V0,34:$V1,75:204,89:182,92:184,98:183},o($VF,[2,112]),o($Vw,[2,60]),{57:206,58:130,59:131,60:$Vx,63:132,64:$Vy,74:[1,205]},o($Vw,[2,62]),{57:208,58:130,59:131,60:$Vx,63:132,64:$Vy,74:[1,207]},o($Vw,[2,64]),o($Vw,[2,131]),o($Vw,[2,132]),o($Vw,[2,59]),{33:$V0,34:$V1,75:209,89:182,92:184,98:183},o($VF,[2,120]),{33:$V0,34:$V1,75:210,89:182,92:184,98:183},o($VF,[2,128]),o($Vw,[2,61]),o($Vw,[2,63])],
defaultActions: {8:[2,1],9:[2,2],10:[2,3],11:[2,4],26:[2,5],63:[2,136],64:[2,137],67:[2,7],68:[2,96],84:[2,6],85:[2,92],183:[2,129],184:[2,130]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        function _parseError (msg, hash) {
            this.message = msg;
            this.hash = hash;
        }
        _parseError.prototype = Error;

        throw new _parseError(str, hash);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"flex":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return;
break;
case 1:return 13;
break;
case 2:return 21;
break;
case 3:return 76;
break;
case 4:return 36;
break;
case 5:return 74;
break;
case 6:return 70;
break;
case 7:return 'FULL';
break;
case 8:return 84;
break;
case 9:return 79;
break;
case 10:return 'ONE';
break;
case 11:return 47;
break;
case 12:return 'NIN';
break;
case 13:return 110;
break;
case 14:return 41;
break;
case 15:return 40;
break;
case 16:return 49;
break;
case 17:return 42;
break;
case 18:return 50;
break;
case 19:return 60;
break;
case 20:return 64;
break;
case 21:return 61;
break;
case 22:return 9;
break;
case 23:return 11;
break;
case 24:return 18;
break;
case 25:return 'WITH';
break;
case 26:return 14;
break;
case 27:return 111;
break;
case 28:return 109;
break;
case 29:return 33;
break;
case 30:return 96;
break;
case 31:return 97;
break;
case 32:return 27;
break;
case 33:return 51;
break;
case 34:return 53;
break;
case 35:return 43;
break;
case 36:return 44;
break;
case 37:return 100;
break;
case 38:return 101;
break;
case 39:return ';';
break;
case 40:return 108;
break;
case 41:return '=';
break;
case 42:return 55;
break;
case 43:return 56;
break;
case 44:return 52;
break;
case 45:return 54;
break;
case 46:return 68;
break;
case 47:return 67;
break;
case 48:return 27;
break;
case 49:return '/';
break;
case 50:return 32;
break;
case 51:return 30;
break;
case 52:return '?';
break;
case 53:return 95;
break;
case 54:return 103;
break;
case 55:return 104;
break;
case 56:return 34;
break;
case 57:return 5;
break;
case 58:console.log(yy_.yytext);
break;
}
},
rules: [/^(?:\s+)/,/^(?:from|FROM)/,/^(?:find|FIND)/,/^(?:as|AS)/,/^(?:where|WHERE)/,/^(?:on|ON)/,/^(?:join|JOIN)/,/^(?:full|FULL)/,/^(?:outer|OUTER)/,/^(?:left|LEFT)/,/^(?:one|ONE)/,/^(?:in|IN)/,/^(?:nin|NIN)/,/^(?:true|false)/,/^(?:or|OR)/,/^(?:and|AND)/,/^(?:not|NOT)/,/^(?:nor|NOR)/,/^(?:exists|EXISTS)/,/^(?:limit|LIMIT)/,/^(?:sort|SORT)/,/^(?:by|BY)/,/^(?:into|INTO)/,/^(?:insert|INSERT)/,/^(?:remove|REMOVE)/,/^(?:with|WITH)/,/^(?:set|SET)/,/^(?:once|ONCE)/,/^(?:((([-]?([-]?([0]|(([1-9])([0-9]+)*)))\.([0-9]+)*(([eE])([+-]?[0-9]+))?)|(\.([0-9]+)(([eE])([+-]?[0-9]+))?)|(([-]?([0]|(([1-9])([0-9]+)*)))(([eE])([+-]?[0-9]+))?))|([0][xX]([0-9a-fA-F])+)|([0]([0-7])+)))/,/^(?:(("(([^\"\\\n\r]+)|(\\((([\'\"\\bfnrtv])|([^\'\"\\bfnrtv0-9xu]))|((?:[1-7][0-7]{0,2}|[0-7]{2,3}))|([x]([0-9a-fA-F]){2})|([u]([0-9a-fA-F]){4})))|(\\(\r\n|\r|\n)))*")|('(([^\'\\\n\r]+)|(\\((([\'\"\\bfnrtv])|([^\'\"\\bfnrtv0-9xu]))|((?:[1-7][0-7]{0,2}|[0-7]{2,3}))|([x]([0-9a-fA-F]){2})|([u]([0-9a-fA-F]){4})))|(\\(\r\n|\r|\n)))*')|(`(([^\`\\\n\r]+)|(\\((([\'\"\\bfnrtv])|([^\'\"\\bfnrtv0-9xu]))|((?:[1-7][0-7]{0,2}|[0-7]{2,3}))|([x]([0-9a-fA-F]){2})|([u]([0-9a-fA-F]){4})))|(\\(\r\n|\r|\n)))*`)))/,/^(?:\{\{)/,/^(?:\}\})/,/^(?:\*)/,/^(?:>)/,/^(?:<)/,/^(?:\()/,/^(?:\))/,/^(?:\[)/,/^(?:\])/,/^(?:;)/,/^(?::)/,/^(?:=)/,/^(?:==)/,/^(?:!=)/,/^(?:>=)/,/^(?:<=)/,/^(?:\+)/,/^(?:-)/,/^(?:\*)/,/^(?:\/)/,/^(?:!)/,/^(?:,)/,/^(?:\?)/,/^(?:@)/,/^(?:\{)/,/^(?:\})/,/^(?:([a-zA-Z$0-9_][a-zA-Z$_0-9.-]*))/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = ParserImpl;
exports.Parser = ParserImpl.Parser;
exports.parse = function () { return ParserImpl.parse.apply(ParserImpl, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}