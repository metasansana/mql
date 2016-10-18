'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ParserImpl = require('./ParserImpl');

var _ParserImpl2 = _interopRequireDefault(_ParserImpl);

var _AbstractSyntaxTree = require('./nodes/AbstractSyntaxTree');

var _AbstractSyntaxTree2 = _interopRequireDefault(_AbstractSyntaxTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var help = {
    parseNumber: function parseNumber(str) {

        return str;
    },
    parseBoolean: function parseBoolean(bool) {
        return bool;
    },
    ensureTagsMatch: function ensureTagsMatch() {}
};

var Parser = function () {
    function Parser() {
        _classCallCheck(this, Parser);
    }

    _createClass(Parser, null, [{
        key: 'parse',


        /** 
         * parse input and return an AST
         * @param {string} input 
         * @param {AbstractSyntaxTree} userAST 
         * @returns {object}
         */
        value: function parse(input, userAST) {

            _ParserImpl2.default.parser.yy = {};
            _ParserImpl2.default.parser.yy.help = help;
            _ParserImpl2.default.parser.yy.ast = (typeof userAST === 'undefined' ? 'undefined' : _typeof(userAST)) === 'object' ? userAST : new _AbstractSyntaxTree2.default();
            return _ParserImpl2.default.parse(input);
        }
    }]);

    return Parser;
}();

exports.default = Parser;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZS9QYXJzZXIuanMiXSwibmFtZXMiOlsiaGVscCIsInBhcnNlTnVtYmVyIiwic3RyIiwicGFyc2VCb29sZWFuIiwiYm9vbCIsImVuc3VyZVRhZ3NNYXRjaCIsIlBhcnNlciIsImlucHV0IiwidXNlckFTVCIsInBhcnNlciIsInl5IiwiYXN0IiwicGFyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQUlBLE9BQU87QUFFUEMsZUFGTyx1QkFFS0MsR0FGTCxFQUVVOztBQUViLGVBQU9BLEdBQVA7QUFFSCxLQU5NO0FBT1BDLGdCQVBPLHdCQU9NQyxJQVBOLEVBT1k7QUFDZixlQUFPQSxJQUFQO0FBRUgsS0FWTTtBQVdQQyxtQkFYTyw2QkFXVyxDQUVqQjtBQWJNLENBQVg7O0lBZ0JNQyxNOzs7Ozs7Ozs7QUFFRjs7Ozs7OzhCQU1hQyxLLEVBQU9DLE8sRUFBUzs7QUFFekIsaUNBQVdDLE1BQVgsQ0FBa0JDLEVBQWxCLEdBQXVCLEVBQXZCO0FBQ0EsaUNBQVdELE1BQVgsQ0FBa0JDLEVBQWxCLENBQXFCVixJQUFyQixHQUE0QkEsSUFBNUI7QUFDQSxpQ0FBV1MsTUFBWCxDQUFrQkMsRUFBbEIsQ0FBcUJDLEdBQXJCLEdBQTRCLFFBQU9ILE9BQVAseUNBQU9BLE9BQVAsT0FBbUIsUUFBcEIsR0FBZ0NBLE9BQWhDLEdBQTBDLGtDQUFyRTtBQUNBLG1CQUFPLHFCQUFXSSxLQUFYLENBQWlCTCxLQUFqQixDQUFQO0FBRUg7Ozs7OztrQkFJVUQsTSIsImZpbGUiOiJQYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFyc2VySW1wbCBmcm9tICcuL1BhcnNlckltcGwnO1xuaW1wb3J0IEFic3RyYWN0U3ludGF4VHJlZSBmcm9tICcuL25vZGVzL0Fic3RyYWN0U3ludGF4VHJlZSc7XG5cbmxldCBoZWxwID0ge1xuXG4gICAgcGFyc2VOdW1iZXIoc3RyKSB7XG5cbiAgICAgICAgcmV0dXJuIHN0cjtcblxuICAgIH0sXG4gICAgcGFyc2VCb29sZWFuKGJvb2wpIHtcbiAgICAgICAgcmV0dXJuIGJvb2w7XG5cbiAgICB9LFxuICAgIGVuc3VyZVRhZ3NNYXRjaCgpIHtcblxuICAgIH1cbn07XG5cbmNsYXNzIFBhcnNlciB7XG5cbiAgICAvKiogXG4gICAgICogcGFyc2UgaW5wdXQgYW5kIHJldHVybiBhbiBBU1RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgXG4gICAgICogQHBhcmFtIHtBYnN0cmFjdFN5bnRheFRyZWV9IHVzZXJBU1QgXG4gICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgKi9cbiAgICBzdGF0aWMgcGFyc2UoaW5wdXQsIHVzZXJBU1QpIHtcblxuICAgICAgICBQYXJzZXJJbXBsLnBhcnNlci55eSA9IHt9O1xuICAgICAgICBQYXJzZXJJbXBsLnBhcnNlci55eS5oZWxwID0gaGVscDtcbiAgICAgICAgUGFyc2VySW1wbC5wYXJzZXIueXkuYXN0ID0gKHR5cGVvZiB1c2VyQVNUID09PSAnb2JqZWN0JykgPyB1c2VyQVNUIDogbmV3IEFic3RyYWN0U3ludGF4VHJlZSgpO1xuICAgICAgICByZXR1cm4gUGFyc2VySW1wbC5wYXJzZShpbnB1dCk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFyc2VyXG4iXX0=