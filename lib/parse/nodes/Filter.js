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
 * Filter 
 */

var Filter = function (_Node) {
    _inherits(Filter, _Node);

    function Filter(field, operator, value, location) {
        _classCallCheck(this, Filter);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Filter).call(this));

        _this.type = 'filter';
        _this.field = field;
        _this.operator = operator;
        _this.value = value;
        _this.location = location;

        return _this;
    }

    _createClass(Filter, [{
        key: 'apply',
        value: function apply(o, context) {

            var field = this.field;
            o[field] = o[field] || {};

            switch (this.operator) {

                case '?':
                    o[field] = {
                        $regex: this.value.asValue(context).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                        $options: 'i'
                    };
                    break;
                default:
                    o[field][this.operator] = this.value.asValue(context);
                    break;

            }

            return o;
        }
    }]);

    return Filter;
}(_Node3.default);

exports.default = Filter;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9GaWx0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7SUFHTSxNOzs7QUFHRixvQkFBWSxLQUFaLEVBQW1CLFFBQW5CLEVBQTZCLEtBQTdCLEVBQW9DLFFBQXBDLEVBQThDO0FBQUE7O0FBQUE7O0FBRzFDLGNBQUssSUFBTCxHQUFZLFFBQVo7QUFDQSxjQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0EsY0FBSyxRQUFMLEdBQWdCLFFBQWhCO0FBQ0EsY0FBSyxLQUFMLEdBQWEsS0FBYjtBQUNBLGNBQUssUUFBTCxHQUFnQixRQUFoQjs7QUFQMEM7QUFTN0M7Ozs7OEJBRUssQyxFQUFHLE8sRUFBUzs7QUFFZCxnQkFBSSxRQUFRLEtBQUssS0FBakI7QUFDQSxjQUFFLEtBQUYsSUFBVyxFQUFFLEtBQUYsS0FBWSxFQUF2Qjs7QUFFQSxvQkFBUSxLQUFLLFFBQWI7O0FBRUkscUJBQUssR0FBTDtBQUNJLHNCQUFFLEtBQUYsSUFBVztBQUNQLGdDQUFRLEtBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsT0FBbkIsRUFDUixPQURRLENBQ0EscUJBREEsRUFDdUIsTUFEdkIsQ0FERDtBQUdQLGtDQUFVO0FBSEgscUJBQVg7QUFLQTtBQUNKO0FBQ0ksc0JBQUUsS0FBRixFQUFTLEtBQUssUUFBZCxJQUEwQixLQUFLLEtBQUwsQ0FBVyxPQUFYLENBQW1CLE9BQW5CLENBQTFCO0FBQ0E7O0FBWFI7O0FBZUEsbUJBQU8sQ0FBUDtBQUNIOzs7Ozs7a0JBR1UsTSIsImZpbGUiOiJGaWx0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIEZpbHRlciBcbiAqL1xuY2xhc3MgRmlsdGVyIGV4dGVuZHMgTm9kZSB7XG5cblxuICAgIGNvbnN0cnVjdG9yKGZpZWxkLCBvcGVyYXRvciwgdmFsdWUsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2ZpbHRlcic7XG4gICAgICAgIHRoaXMuZmllbGQgPSBmaWVsZDtcbiAgICAgICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIGFwcGx5KG8sIGNvbnRleHQpIHtcblxuICAgICAgICB2YXIgZmllbGQgPSB0aGlzLmZpZWxkO1xuICAgICAgICBvW2ZpZWxkXSA9IG9bZmllbGRdIHx8IHt9O1xuXG4gICAgICAgIHN3aXRjaCAodGhpcy5vcGVyYXRvcikge1xuXG4gICAgICAgICAgICBjYXNlICc/JzpcbiAgICAgICAgICAgICAgICBvW2ZpZWxkXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgJHJlZ2V4OiB0aGlzLnZhbHVlLmFzVmFsdWUoY29udGV4dCkuXG4gICAgICAgICAgICAgICAgICAgIHJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCBcIlxcXFwkJlwiKSxcbiAgICAgICAgICAgICAgICAgICAgJG9wdGlvbnM6ICdpJ1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIG9bZmllbGRdW3RoaXMub3BlcmF0b3JdID0gdGhpcy52YWx1ZS5hc1ZhbHVlKGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbztcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlclxuIl19