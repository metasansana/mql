'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _beof = require('beof');

var _beof2 = _interopRequireDefault(_beof);

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Statement
 */
var Statement = function (_Node) {
  _inherits(Statement, _Node);

  function Statement() {
    _classCallCheck(this, Statement);

    return _possibleConstructorReturn(this, (Statement.__proto__ || Object.getPrototypeOf(Statement)).apply(this, arguments));
  }

  _createClass(Statement, [{
    key: 'setCollection',


    /**
     * setCollection changes the value of the collection.
     * @param {string} collection
     * @returns {FindStatement}
     */
    value: function setCollection(collection) {

      (0, _beof2.default)({
        collection: collection
      }).string();

      this.collection = {
        asValue: function asValue() {

          return collection;
        }
      };

      return this;
    }
  }]);

  return Statement;
}(_Node3.default);

exports.default = Statement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9hc3QvU3RhdGVtZW50LmpzIl0sIm5hbWVzIjpbIlN0YXRlbWVudCIsImNvbGxlY3Rpb24iLCJzdHJpbmciLCJhc1ZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHTUEsUzs7Ozs7Ozs7Ozs7OztBQUVKOzs7OztrQ0FLY0MsVSxFQUFZOztBQUV4QiwwQkFBSztBQUNIQTtBQURHLE9BQUwsRUFFR0MsTUFGSDs7QUFJQSxXQUFLRCxVQUFMLEdBQWtCO0FBRWhCRSxlQUZnQixxQkFFTjs7QUFFUixpQkFBT0YsVUFBUDtBQUVEO0FBTmUsT0FBbEI7O0FBVUEsYUFBTyxJQUFQO0FBRUQ7Ozs7OztrQkFJWUQsUyIsImZpbGUiOiJTdGF0ZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmVvZiBmcm9tICdiZW9mJztcbmltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogU3RhdGVtZW50XG4gKi9cbmNsYXNzIFN0YXRlbWVudCBleHRlbmRzIE5vZGUge1xuXG4gIC8qKlxuICAgKiBzZXRDb2xsZWN0aW9uIGNoYW5nZXMgdGhlIHZhbHVlIG9mIHRoZSBjb2xsZWN0aW9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29sbGVjdGlvblxuICAgKiBAcmV0dXJucyB7RmluZFN0YXRlbWVudH1cbiAgICovXG4gIHNldENvbGxlY3Rpb24oY29sbGVjdGlvbikge1xuXG4gICAgYmVvZih7XG4gICAgICBjb2xsZWN0aW9uXG4gICAgfSkuc3RyaW5nKCk7XG5cbiAgICB0aGlzLmNvbGxlY3Rpb24gPSB7XG5cbiAgICAgIGFzVmFsdWUoKSB7XG5cbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb247XG5cbiAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZW1lbnRcblxuIl19