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
 * LogicalExpression 
 */

var LogicalExpression = function (_Node) {
    _inherits(LogicalExpression, _Node);

    function LogicalExpression(left, operator, right, location) {
        _classCallCheck(this, LogicalExpression);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LogicalExpression).call(this));

        _this.type = 'logical-expression';
        _this.left = left;
        _this.operator = operator;
        _this.right = right;
        _this.location = location;

        return _this;
    }

    return LogicalExpression;
}(_Node3.default);

exports.default = LogicalExpression;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9Mb2dpY2FsRXhwcmVzc2lvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7SUFHTSxpQjs7O0FBRUYsK0JBQVksSUFBWixFQUFrQixRQUFsQixFQUE0QixLQUE1QixFQUFtQyxRQUFuQyxFQUE2QztBQUFBOztBQUFBOztBQUd6QyxjQUFLLElBQUwsR0FBWSxvQkFBWjtBQUNBLGNBQUssSUFBTCxHQUFZLElBQVo7QUFDQSxjQUFLLFFBQUwsR0FBZ0IsUUFBaEI7QUFDQSxjQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0EsY0FBSyxRQUFMLEdBQWdCLFFBQWhCOztBQVB5QztBQVM1Qzs7Ozs7a0JBR1UsaUIiLCJmaWxlIjoiTG9naWNhbEV4cHJlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIExvZ2ljYWxFeHByZXNzaW9uIFxuICovXG5jbGFzcyBMb2dpY2FsRXhwcmVzc2lvbiBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IobGVmdCwgb3BlcmF0b3IsIHJpZ2h0LCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdsb2dpY2FsLWV4cHJlc3Npb24nXG4gICAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IExvZ2ljYWxFeHByZXNzaW9uXG4iXX0=