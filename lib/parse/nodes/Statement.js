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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9TdGF0ZW1lbnQuanMiXSwibmFtZXMiOlsiU3RhdGVtZW50IiwiY29sbGVjdGlvbiIsInN0cmluZyIsImFzVmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxTOzs7Ozs7Ozs7Ozs7O0FBRUo7Ozs7O2tDQUtjQyxVLEVBQVk7O0FBRXhCLDBCQUFLO0FBQ0hBO0FBREcsT0FBTCxFQUVHQyxNQUZIOztBQUlBLFdBQUtELFVBQUwsR0FBa0I7QUFFaEJFLGVBRmdCLHFCQUVOOztBQUVSLGlCQUFPRixVQUFQO0FBRUQ7QUFOZSxPQUFsQjs7QUFVQSxhQUFPLElBQVA7QUFFRDs7Ozs7O2tCQUlZRCxTIiwiZmlsZSI6IlN0YXRlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiZW9mIGZyb20gJ2Jlb2YnO1xuaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBTdGF0ZW1lbnRcbiAqL1xuY2xhc3MgU3RhdGVtZW50IGV4dGVuZHMgTm9kZSB7XG5cbiAgLyoqXG4gICAqIHNldENvbGxlY3Rpb24gY2hhbmdlcyB0aGUgdmFsdWUgb2YgdGhlIGNvbGxlY3Rpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb2xsZWN0aW9uXG4gICAqIEByZXR1cm5zIHtGaW5kU3RhdGVtZW50fVxuICAgKi9cbiAgc2V0Q29sbGVjdGlvbihjb2xsZWN0aW9uKSB7XG5cbiAgICBiZW9mKHtcbiAgICAgIGNvbGxlY3Rpb25cbiAgICB9KS5zdHJpbmcoKTtcblxuICAgIHRoaXMuY29sbGVjdGlvbiA9IHtcblxuICAgICAgYXNWYWx1ZSgpIHtcblxuICAgICAgICByZXR1cm4gY29sbGVjdGlvbjtcblxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG5cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRlbWVudFxuXG4iXX0=