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
        _this.operator = operator;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9hc3QvTG9naWNGaWx0ZXIuanMiXSwibmFtZXMiOlsiTG9naWNGaWx0ZXIiLCJsZWZ0Iiwib3BlcmF0b3IiLCJyaWdodCIsImxvY2F0aW9uIiwidHlwZSIsIm8iLCJjb250ZXh0Iiwib3AiLCJwdXNoIiwiYXBwbHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHTUEsVzs7O0FBRUYseUJBQVlDLElBQVosRUFBa0JDLFFBQWxCLEVBQTRCQyxLQUE1QixFQUFtQ0MsUUFBbkMsRUFBNkM7QUFBQTs7QUFBQTs7QUFHekMsY0FBS0MsSUFBTCxHQUFZLGdCQUFaO0FBQ0EsY0FBS0osSUFBTCxHQUFZQSxJQUFaO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxjQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxjQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjs7QUFQeUM7QUFTNUM7Ozs7OEJBRUtFLEMsRUFBR0MsTyxFQUFTOztBQUVkLGdCQUFJQyxXQUFTLEtBQUtOLFFBQWxCOztBQUVBSSxjQUFFRSxFQUFGLElBQVFGLEVBQUVFLEVBQUYsS0FBUyxFQUFqQjtBQUNBRixjQUFFRSxFQUFGLEVBQU1DLElBQU4sQ0FBVyxLQUFLUixJQUFMLENBQVVTLEtBQVYsQ0FBZ0IsRUFBaEIsRUFBb0JILE9BQXBCLENBQVg7QUFDQUQsY0FBRUUsRUFBRixFQUFNQyxJQUFOLENBQVcsS0FBS04sS0FBTCxDQUFXTyxLQUFYLENBQWlCLEVBQWpCLEVBQXFCSCxPQUFyQixDQUFYO0FBQ0EsbUJBQU9ELENBQVA7QUFFSDs7Ozs7O2tCQUtVTixXIiwiZmlsZSI6IkxvZ2ljRmlsdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBMb2dpY0ZpbHRlciBcbiAqL1xuY2xhc3MgTG9naWNGaWx0ZXIgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGxlZnQsIG9wZXJhdG9yLCByaWdodCwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnbG9naWNhbC1maWx0ZXInXG4gICAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICBhcHBseShvLCBjb250ZXh0KSB7XG5cbiAgICAgICAgdmFyIG9wID0gYCQke3RoaXMub3BlcmF0b3J9YDtcblxuICAgICAgICBvW29wXSA9IG9bb3BdIHx8IFtdO1xuICAgICAgICBvW29wXS5wdXNoKHRoaXMubGVmdC5hcHBseSh7fSwgY29udGV4dCkpO1xuICAgICAgICBvW29wXS5wdXNoKHRoaXMucmlnaHQuYXBwbHkoe30sIGNvbnRleHQpKTtcbiAgICAgICAgcmV0dXJuIG87XG5cbiAgICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpY0ZpbHRlclxuIl19