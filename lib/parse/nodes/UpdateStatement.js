'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * UpdateStatement 
 */

var UpdateStatement = function (_Node) {
    _inherits(UpdateStatement, _Node);

    function UpdateStatement(collection, values, where_conditions, location) {
        _classCallCheck(this, UpdateStatement);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UpdateStatement).call(this));

        _this.type = 'update-statement';
        _this.collection = collection;
        _this.values = values;
        _this.where_condition = where_conditions;
        _this.location = location;

        return _this;
    }

    return UpdateStatement;
}(_Node3.default);

exports.default = UpdateStatement;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9VcGRhdGVTdGF0ZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7O0lBR00sZTs7O0FBRUYsNkJBQVksVUFBWixFQUF3QixNQUF4QixFQUFpQyxnQkFBakMsRUFBbUQsUUFBbkQsRUFBNkQ7QUFBQTs7QUFBQTs7QUFHekQsY0FBSyxJQUFMLEdBQVksa0JBQVo7QUFDQSxjQUFLLFVBQUwsR0FBa0IsVUFBbEI7QUFDQSxjQUFLLE1BQUwsR0FBYyxNQUFkO0FBQ0EsY0FBSyxlQUFMLEdBQXVCLGdCQUF2QjtBQUNBLGNBQUssUUFBTCxHQUFnQixRQUFoQjs7QUFQeUQ7QUFTNUQ7Ozs7O2tCQUlVLGUiLCJmaWxlIjoiVXBkYXRlU3RhdGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBVcGRhdGVTdGF0ZW1lbnQgXG4gKi9cbmNsYXNzIFVwZGF0ZVN0YXRlbWVudCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IoY29sbGVjdGlvbiwgdmFsdWVzLCAgd2hlcmVfY29uZGl0aW9ucywgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAndXBkYXRlLXN0YXRlbWVudCc7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbiA9IGNvbGxlY3Rpb247XG4gICAgICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xuICAgICAgICB0aGlzLndoZXJlX2NvbmRpdGlvbiA9IHdoZXJlX2NvbmRpdGlvbnM7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBVcGRhdGVTdGF0ZW1lbnRcbiJdfQ==