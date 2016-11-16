'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * LogicFilter
 */
var LogicFilter = function (_Node) {
    _inherits(LogicFilter, _Node);

    function LogicFilter(left, operator, right, location) {
        _classCallCheck(this, LogicFilter);

        var _this = _possibleConstructorReturn(this, (LogicFilter.__proto__ || Object.getPrototypeOf(LogicFilter)).call(this));

        _this.type = 'logical-filter';
        _this.left = left;
        _this.operator = operator.toLowerCase();
        _this.right = right;
        _this.location = location;

        return _this;
    }

    _createClass(LogicFilter, [{
        key: 'apply',
        value: function apply(o, context) {

            var op = '$' + this.operator;

            o[op] = o[op] || [];
            o[op].push(this.left.apply({}, context));
            o[op].push(this.right.apply({}, context));
            return o;
        }
    }]);

    return LogicFilter;
}(_Node3.default);

exports.default = LogicFilter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9hc3QvTG9naWNGaWx0ZXIuanMiXSwibmFtZXMiOlsiTG9naWNGaWx0ZXIiLCJsZWZ0Iiwib3BlcmF0b3IiLCJyaWdodCIsImxvY2F0aW9uIiwidHlwZSIsInRvTG93ZXJDYXNlIiwibyIsImNvbnRleHQiLCJvcCIsInB1c2giLCJhcHBseSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxXOzs7QUFFRix5QkFBWUMsSUFBWixFQUFrQkMsUUFBbEIsRUFBNEJDLEtBQTVCLEVBQW1DQyxRQUFuQyxFQUE2QztBQUFBOztBQUFBOztBQUd6QyxjQUFLQyxJQUFMLEdBQVksZ0JBQVo7QUFDQSxjQUFLSixJQUFMLEdBQVlBLElBQVo7QUFDQSxjQUFLQyxRQUFMLEdBQWdCQSxTQUFTSSxXQUFULEVBQWhCO0FBQ0EsY0FBS0gsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBUHlDO0FBUzVDOzs7OzhCQUVLRyxDLEVBQUdDLE8sRUFBUzs7QUFFZCxnQkFBSUMsV0FBUyxLQUFLUCxRQUFsQjs7QUFFQUssY0FBRUUsRUFBRixJQUFRRixFQUFFRSxFQUFGLEtBQVMsRUFBakI7QUFDQUYsY0FBRUUsRUFBRixFQUFNQyxJQUFOLENBQVcsS0FBS1QsSUFBTCxDQUFVVSxLQUFWLENBQWdCLEVBQWhCLEVBQW9CSCxPQUFwQixDQUFYO0FBQ0FELGNBQUVFLEVBQUYsRUFBTUMsSUFBTixDQUFXLEtBQUtQLEtBQUwsQ0FBV1EsS0FBWCxDQUFpQixFQUFqQixFQUFxQkgsT0FBckIsQ0FBWDtBQUNBLG1CQUFPRCxDQUFQO0FBRUg7Ozs7OztrQkFLVVAsVyIsImZpbGUiOiJMb2dpY0ZpbHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogTG9naWNGaWx0ZXJcbiAqL1xuY2xhc3MgTG9naWNGaWx0ZXIgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGxlZnQsIG9wZXJhdG9yLCByaWdodCwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnbG9naWNhbC1maWx0ZXInXG4gICAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvci50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIGFwcGx5KG8sIGNvbnRleHQpIHtcblxuICAgICAgICB2YXIgb3AgPSBgJCR7dGhpcy5vcGVyYXRvcn1gO1xuXG4gICAgICAgIG9bb3BdID0gb1tvcF0gfHwgW107XG4gICAgICAgIG9bb3BdLnB1c2godGhpcy5sZWZ0LmFwcGx5KHt9LCBjb250ZXh0KSk7XG4gICAgICAgIG9bb3BdLnB1c2godGhpcy5yaWdodC5hcHBseSh7fSwgY29udGV4dCkpO1xuICAgICAgICByZXR1cm4gbztcblxuICAgIH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2ljRmlsdGVyXG4iXX0=