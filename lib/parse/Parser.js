'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ParserImpl = require('./ParserImpl');

var _ParserImpl2 = _interopRequireDefault(_ParserImpl);

var _ast = require('./ast');

var ast = _interopRequireWildcard(_ast);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

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
            _ParserImpl2.default.parser.yy.ast = (typeof userAST === 'undefined' ? 'undefined' : _typeof(userAST)) === 'object' ? userAST : ast;
            return _ParserImpl2.default.parse(input);
        }
    }]);

    return Parser;
}();

exports.default = Parser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJzZS9QYXJzZXIuanMiXSwibmFtZXMiOlsiYXN0IiwiaGVscCIsInBhcnNlTnVtYmVyIiwic3RyIiwicGFyc2VCb29sZWFuIiwiYm9vbCIsImVuc3VyZVRhZ3NNYXRjaCIsIlBhcnNlciIsImlucHV0IiwidXNlckFTVCIsInBhcnNlciIsInl5IiwicGFyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztJQUFZQSxHOzs7Ozs7OztBQUVaLElBQUlDLE9BQU87QUFFUEMsZUFGTyx1QkFFS0MsR0FGTCxFQUVVOztBQUViLGVBQU9BLEdBQVA7QUFFSCxLQU5NO0FBT1BDLGdCQVBPLHdCQU9NQyxJQVBOLEVBT1k7QUFDZixlQUFPQSxJQUFQO0FBRUgsS0FWTTtBQVdQQyxtQkFYTyw2QkFXVyxDQUVqQjtBQWJNLENBQVg7O0lBZ0JNQyxNOzs7Ozs7Ozs7QUFFRjs7Ozs7OzhCQU1hQyxLLEVBQU9DLE8sRUFBUzs7QUFFekIsaUNBQVdDLE1BQVgsQ0FBa0JDLEVBQWxCLEdBQXVCLEVBQXZCO0FBQ0EsaUNBQVdELE1BQVgsQ0FBa0JDLEVBQWxCLENBQXFCVixJQUFyQixHQUE0QkEsSUFBNUI7QUFDQSxpQ0FBV1MsTUFBWCxDQUFrQkMsRUFBbEIsQ0FBcUJYLEdBQXJCLEdBQTRCLFFBQU9TLE9BQVAseUNBQU9BLE9BQVAsT0FBbUIsUUFBcEIsR0FBZ0NBLE9BQWhDLEdBQTBDVCxHQUFyRTtBQUNBLG1CQUFPLHFCQUFXWSxLQUFYLENBQWlCSixLQUFqQixDQUFQO0FBRUg7Ozs7OztrQkFJVUQsTSIsImZpbGUiOiJQYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFyc2VySW1wbCBmcm9tICcuL1BhcnNlckltcGwnO1xuaW1wb3J0ICogYXMgYXN0IGZyb20gJy4vYXN0JztcblxubGV0IGhlbHAgPSB7XG5cbiAgICBwYXJzZU51bWJlcihzdHIpIHtcblxuICAgICAgICByZXR1cm4gc3RyO1xuXG4gICAgfSxcbiAgICBwYXJzZUJvb2xlYW4oYm9vbCkge1xuICAgICAgICByZXR1cm4gYm9vbDtcblxuICAgIH0sXG4gICAgZW5zdXJlVGFnc01hdGNoKCkge1xuXG4gICAgfVxufTtcblxuY2xhc3MgUGFyc2VyIHtcblxuICAgIC8qKlxuICAgICAqIHBhcnNlIGlucHV0IGFuZCByZXR1cm4gYW4gQVNUXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0XG4gICAgICogQHBhcmFtIHtBYnN0cmFjdFN5bnRheFRyZWV9IHVzZXJBU1RcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgICAqL1xuICAgIHN0YXRpYyBwYXJzZShpbnB1dCwgdXNlckFTVCkge1xuXG4gICAgICAgIFBhcnNlckltcGwucGFyc2VyLnl5ID0ge307XG4gICAgICAgIFBhcnNlckltcGwucGFyc2VyLnl5LmhlbHAgPSBoZWxwO1xuICAgICAgICBQYXJzZXJJbXBsLnBhcnNlci55eS5hc3QgPSAodHlwZW9mIHVzZXJBU1QgPT09ICdvYmplY3QnKSA/IHVzZXJBU1QgOiBhc3Q7XG4gICAgICAgIHJldHVybiBQYXJzZXJJbXBsLnBhcnNlKGlucHV0KTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQYXJzZXJcbiJdfQ==