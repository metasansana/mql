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
 * ComparisonExpression 
 */

var ComparisonExpression = function (_Node) {
    _inherits(ComparisonExpression, _Node);

    function ComparisonExpression(left, operator, right, location) {
        _classCallCheck(this, ComparisonExpression);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ComparisonExpression).call(this));

        _this.type = 'comparison-expression';
        _this.left = left;
        _this.operator = operator;
        _this.right = right;
        _this.location = location;

        return _this;
    }

    return ComparisonExpression;
}(_Node3.default);

exports.default = ComparisonExpression;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9Db21wYXJpc29uRXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7SUFHTSxvQjs7O0FBR0Ysa0NBQVksSUFBWixFQUFrQixRQUFsQixFQUE0QixLQUE1QixFQUFtQyxRQUFuQyxFQUE2QztBQUFBOztBQUFBOztBQUd6QyxjQUFLLElBQUwsR0FBWSx1QkFBWjtBQUNBLGNBQUssSUFBTCxHQUFZLElBQVo7QUFDQSxjQUFLLFFBQUwsR0FBZ0IsUUFBaEI7QUFDQSxjQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0EsY0FBSyxRQUFMLEdBQWdCLFFBQWhCOztBQVB5QztBQVM1Qzs7Ozs7a0JBR1Usb0IiLCJmaWxlIjoiQ29tcGFyaXNvbkV4cHJlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIENvbXBhcmlzb25FeHByZXNzaW9uIFxuICovXG5jbGFzcyBDb21wYXJpc29uRXhwcmVzc2lvbiBleHRlbmRzIE5vZGUge1xuXG5cbiAgICBjb25zdHJ1Y3RvcihsZWZ0LCBvcGVyYXRvciwgcmlnaHQsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2NvbXBhcmlzb24tZXhwcmVzc2lvbic7XG4gICAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBhcmlzb25FeHByZXNzaW9uXG4iXX0=