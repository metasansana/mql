import must from 'must';
import expects from './expectations';
import Parser from '../src/parse/Parser';

var input = null;
var result = null;
var tests = null;

function parse(text) {
    result = '' + Parser.parse(text || input);
    result = JSON.parse(result);
}

function json(tree) {
    return JSON.stringify(tree);
}

function print(tree, index) {
    console.log(index);
    console.log('================================BEGIN');
    console.log(json(result));
    console.log('================================END');
}

function compare(tree, that) {

    must(tree).eql(that);

}

function makeTest(test, index) {

    if (!test.skip) {

        input = test.input;
        parse();
        return test.print ? print(result, index) : compare(result, test.expect);

    }
}

tests = {

    'should parse a simple query ': [{
        input: 'from "users" find *',
        skip: true,
        expect: expects['should parse a simple query'][0]
    }, {
        input: 'from "users" find name, email, -password, comments.0, "comments.from"',
        skip: true,
        expect: expects['should parse a simple query'][1]
    }],
    'should parse a simple query with a simple where clause': {
        input: 'from "users" find name, email, !password where status == "active"',
        print: true,
        expect: expects['should parse a simple where clause']
    },
    'should parse a logical where clause': {
        input: 'from "users" find email, !"password" where status == "active" or status == "locked"',
        skip: true,
        expect: expects['should parse a logical where clause']
    },
    'should parse variable references': {
        input: 'from {{collection}} find * where status == {{status}}',
        skip: true,
        expect: expects['should parse variable references']

    },
    'should parse a three grouped where clause': {

        input: 'from patients find * where x == 2 or (x == 23 and y == false)',
        print: true,
        expects: expects['should parse a three grouped where clause']

    },
    'should parse a complex where clause': {

        input: 'from "users" find email, status where ' +
            '(ix exists and status == "active" or status == "pending" or status == "locked") ' +
            'and (isAdmin exists and age > 33 and name != "Gatsby") ' +
            'or flagged==false limit by 27',
        print: true,
        expect: expects['should parse a complex where clause']

    },
    'should parse a continuing where clause': {

        input: 'from "users" find email, status where status == "active" and level == 1 ' +
            ' and realm == "Sando" or "limit"=="ot" and comments exists limit by 27',
        print: true,
        expect: expects['should parse a complex continuing where clause']

    },
    'should parse inner joins': {

        input: 'from "users" find id, email, !password ' +
            'where status == "active" limit by 10 ' +
            'sort by +"_id", -name, -status ' +
            'join * from "comments" where user == @id',
        skip: true,
        expect: expects['should parse inner joins']

    },
    'should parse left joins': {

        input: 'from "users" find !_id, email, !password ' +
            'where age > 2 sort by +email ' +
            'left join * from "user_likes" as "likes"',
        print: true,
        expect: expects['should parse left joins']

    },
    'should parse insert statements': {
        input: 'with "users" insert {name:"flako"}',
        skip: true,
        expect: expects['should parse insert statements']
    },
    'should parse update statements': {

        input: 'with "users" set {status:"pending"} ' +
            'where source == "web"',
        skip: true,
        expect: expects['should parse update statements']

    }

};

describe('Parser', function() {

    beforeEach(function() {

        input = null;
        result = null;

    });

    describe('parse()', function() {

        Object.keys(tests).forEach(k => {

            it(k, function() {

                if (Array.isArray(tests[k])) {

                    tests[k].forEach(makeTest);

                } else {

                    makeTest(tests[k], k);

                }

            });
        });

    });

});
