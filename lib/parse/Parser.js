'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZS9QYXJzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBSSxPQUFPO0FBRVAsZUFGTyx1QkFFSyxHQUZMLEVBRVU7O0FBRWIsZUFBTyxHQUFQO0FBRUgsS0FOTTtBQU9QLGdCQVBPLHdCQU9NLElBUE4sRUFPWTtBQUNmLGVBQU8sSUFBUDtBQUVILEtBVk07QUFXUCxtQkFYTyw2QkFXVyxDQUVqQjtBQWJNLENBQVg7O0lBZ0JNLE07Ozs7Ozs7OztBQUVGOzs7Ozs7OEJBTWEsSyxFQUFPLE8sRUFBUzs7QUFFekIsaUNBQVcsTUFBWCxDQUFrQixFQUFsQixHQUF1QixFQUF2QjtBQUNBLGlDQUFXLE1BQVgsQ0FBa0IsRUFBbEIsQ0FBcUIsSUFBckIsR0FBNEIsSUFBNUI7QUFDQSxpQ0FBVyxNQUFYLENBQWtCLEVBQWxCLENBQXFCLEdBQXJCLEdBQTRCLFFBQU8sT0FBUCx5Q0FBTyxPQUFQLE9BQW1CLFFBQXBCLEdBQWdDLE9BQWhDLEdBQTBDLGtDQUFyRTtBQUNBLG1CQUFPLHFCQUFXLEtBQVgsQ0FBaUIsS0FBakIsQ0FBUDtBQUVIOzs7Ozs7a0JBSVUsTSIsImZpbGUiOiJQYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFyc2VySW1wbCBmcm9tICcuL1BhcnNlckltcGwnO1xuaW1wb3J0IEFic3RyYWN0U3ludGF4VHJlZSBmcm9tICcuL25vZGVzL0Fic3RyYWN0U3ludGF4VHJlZSc7XG5cbmxldCBoZWxwID0ge1xuXG4gICAgcGFyc2VOdW1iZXIoc3RyKSB7XG5cbiAgICAgICAgcmV0dXJuIHN0cjtcblxuICAgIH0sXG4gICAgcGFyc2VCb29sZWFuKGJvb2wpIHtcbiAgICAgICAgcmV0dXJuIGJvb2w7XG5cbiAgICB9LFxuICAgIGVuc3VyZVRhZ3NNYXRjaCgpIHtcblxuICAgIH1cbn07XG5cbmNsYXNzIFBhcnNlciB7XG5cbiAgICAvKiogXG4gICAgICogcGFyc2UgaW5wdXQgYW5kIHJldHVybiBhbiBBU1RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXQgXG4gICAgICogQHBhcmFtIHtBYnN0cmFjdFN5bnRheFRyZWV9IHVzZXJBU1QgXG4gICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgKi9cbiAgICBzdGF0aWMgcGFyc2UoaW5wdXQsIHVzZXJBU1QpIHtcblxuICAgICAgICBQYXJzZXJJbXBsLnBhcnNlci55eSA9IHt9O1xuICAgICAgICBQYXJzZXJJbXBsLnBhcnNlci55eS5oZWxwID0gaGVscDtcbiAgICAgICAgUGFyc2VySW1wbC5wYXJzZXIueXkuYXN0ID0gKHR5cGVvZiB1c2VyQVNUID09PSAnb2JqZWN0JykgPyB1c2VyQVNUIDogbmV3IEFic3RyYWN0U3ludGF4VHJlZSgpO1xuICAgICAgICByZXR1cm4gUGFyc2VySW1wbC5wYXJzZShpbnB1dCk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFyc2VyXG4iXX0=