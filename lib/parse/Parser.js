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
            return _ParserImpl2.default.parser.parse(input);
        }
    }]);

    return Parser;
}();

exports.default = Parser;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZS9QYXJzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBSSxPQUFPO0FBRUgsZUFGRyx1QkFFUyxHQUZULEVBRWM7O0FBRWpCLGVBQU8sR0FBUDtBQUVILEtBTk07QUFPUCxnQkFQTyx3QkFPTSxJQVBOLEVBT1k7QUFDZixlQUFPLElBQVA7QUFFSCxLQVZNO0FBV1AsbUJBWE8sNkJBV1csQ0FFakI7QUFiTSxDQUFYOztJQWdCTSxNOzs7Ozs7Ozs7QUFFRjs7Ozs7OzhCQU1hLEssRUFBTyxPLEVBQVM7O0FBRXpCLGlDQUFXLE1BQVgsQ0FBa0IsRUFBbEIsR0FBdUIsRUFBdkI7QUFDQSxpQ0FBVyxNQUFYLENBQWtCLEVBQWxCLENBQXFCLElBQXJCLEdBQTRCLElBQTVCO0FBQ0EsaUNBQVcsTUFBWCxDQUFrQixFQUFsQixDQUFxQixHQUFyQixHQUE0QixRQUFPLE9BQVAseUNBQU8sT0FBUCxPQUFtQixRQUFwQixHQUFnQyxPQUFoQyxHQUEwQyxrQ0FBckU7QUFDQSxtQkFBTyxxQkFBVyxNQUFYLENBQWtCLEtBQWxCLENBQXdCLEtBQXhCLENBQVA7QUFFSDs7Ozs7O2tCQUlVLE0iLCJmaWxlIjoiUGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhcnNlckltcGwgZnJvbSAnLi9QYXJzZXJJbXBsJztcbmltcG9ydCBBYnN0cmFjdFN5bnRheFRyZWUgZnJvbSAnLi9ub2Rlcy9BYnN0cmFjdFN5bnRheFRyZWUnO1xuXG5sZXQgaGVscCA9IHtcblxuICAgICAgICBwYXJzZU51bWJlcihzdHIpIHtcblxuICAgICAgICByZXR1cm4gc3RyO1xuXG4gICAgfSxcbiAgICBwYXJzZUJvb2xlYW4oYm9vbCkge1xuICAgICAgICByZXR1cm4gYm9vbDtcblxuICAgIH0sXG4gICAgZW5zdXJlVGFnc01hdGNoKCkge1xuXG4gICAgfVxufTtcblxuY2xhc3MgUGFyc2VyIHtcblxuICAgIC8qKiBcbiAgICAgKiBwYXJzZSBpbnB1dCBhbmQgcmV0dXJuIGFuIEFTVFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dCBcbiAgICAgKiBAcGFyYW0ge0Fic3RyYWN0U3ludGF4VHJlZX0gdXNlckFTVCBcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgICAqL1xuICAgIHN0YXRpYyBwYXJzZShpbnB1dCwgdXNlckFTVCkge1xuXG4gICAgICAgIFBhcnNlckltcGwucGFyc2VyLnl5ID0ge307XG4gICAgICAgIFBhcnNlckltcGwucGFyc2VyLnl5LmhlbHAgPSBoZWxwO1xuICAgICAgICBQYXJzZXJJbXBsLnBhcnNlci55eS5hc3QgPSAodHlwZW9mIHVzZXJBU1QgPT09ICdvYmplY3QnKSA/IHVzZXJBU1QgOiBuZXcgQWJzdHJhY3RTeW50YXhUcmVlKCk7XG4gICAgICAgIHJldHVybiBQYXJzZXJJbXBsLnBhcnNlci5wYXJzZShpbnB1dCk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFyc2VyXG4iXX0=