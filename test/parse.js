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

function print(tree) {
    console.log(json(result));
}

function compare(tree, that) {

    must(tree).eql(that);

}

function makeTest(test, index) {

    if (!test.skip) {

        input = test.input;
        parse();
        return test.print ? print(result) : compare(result, test.expect);

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
        input: 'from "users" find name, email, -password where status == "active"',
        skip: true,
        expect: expects['should parse a simple where clause']
    },
    'should parse a logical where clause': {
        input: 'from "users" find email, -"password" where status == "active" or status == "locked"',
        print: true,
        expect: expects['should parse a logical where clause']
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

                    makeTest(tests[k]);

                }

            });
        });

    });

});
