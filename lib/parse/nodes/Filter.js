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

        var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9GaWx0ZXIuanMiXSwibmFtZXMiOlsiRmlsdGVyIiwiZmllbGQiLCJvcGVyYXRvciIsInZhbHVlIiwibG9jYXRpb24iLCJ0eXBlIiwibyIsImNvbnRleHQiLCIkcmVnZXgiLCJhc1ZhbHVlIiwicmVwbGFjZSIsIiRvcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR01BLE07OztBQUdGLG9CQUFZQyxLQUFaLEVBQW1CQyxRQUFuQixFQUE2QkMsS0FBN0IsRUFBb0NDLFFBQXBDLEVBQThDO0FBQUE7O0FBQUE7O0FBRzFDLGNBQUtDLElBQUwsR0FBWSxRQUFaO0FBQ0EsY0FBS0osS0FBTCxHQUFhQSxLQUFiO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxjQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxjQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjs7QUFQMEM7QUFTN0M7Ozs7OEJBRUtFLEMsRUFBR0MsTyxFQUFTOztBQUVkLGdCQUFJTixRQUFRLEtBQUtBLEtBQWpCO0FBQ0FLLGNBQUVMLEtBQUYsSUFBV0ssRUFBRUwsS0FBRixLQUFZLEVBQXZCOztBQUVBLG9CQUFRLEtBQUtDLFFBQWI7O0FBRUkscUJBQUssR0FBTDtBQUNJSSxzQkFBRUwsS0FBRixJQUFXO0FBQ1BPLGdDQUFRLEtBQUtMLEtBQUwsQ0FBV00sT0FBWCxDQUFtQkYsT0FBbkIsRUFDUkcsT0FEUSxDQUNBLHFCQURBLEVBQ3VCLE1BRHZCLENBREQ7QUFHUEMsa0NBQVU7QUFISCxxQkFBWDtBQUtBO0FBQ0o7QUFDSUwsc0JBQUVMLEtBQUYsRUFBUyxLQUFLQyxRQUFkLElBQTBCLEtBQUtDLEtBQUwsQ0FBV00sT0FBWCxDQUFtQkYsT0FBbkIsQ0FBMUI7QUFDQTs7QUFYUjs7QUFlQSxtQkFBT0QsQ0FBUDtBQUNIOzs7Ozs7a0JBR1VOLE0iLCJmaWxlIjoiRmlsdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBGaWx0ZXIgXG4gKi9cbmNsYXNzIEZpbHRlciBleHRlbmRzIE5vZGUge1xuXG5cbiAgICBjb25zdHJ1Y3RvcihmaWVsZCwgb3BlcmF0b3IsIHZhbHVlLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdmaWx0ZXInO1xuICAgICAgICB0aGlzLmZpZWxkID0gZmllbGQ7XG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICBhcHBseShvLCBjb250ZXh0KSB7XG5cbiAgICAgICAgdmFyIGZpZWxkID0gdGhpcy5maWVsZDtcbiAgICAgICAgb1tmaWVsZF0gPSBvW2ZpZWxkXSB8fCB7fTtcblxuICAgICAgICBzd2l0Y2ggKHRoaXMub3BlcmF0b3IpIHtcblxuICAgICAgICAgICAgY2FzZSAnPyc6XG4gICAgICAgICAgICAgICAgb1tmaWVsZF0gPSB7XG4gICAgICAgICAgICAgICAgICAgICRyZWdleDogdGhpcy52YWx1ZS5hc1ZhbHVlKGNvbnRleHQpLlxuICAgICAgICAgICAgICAgICAgICByZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgXCJcXFxcJCZcIiksXG4gICAgICAgICAgICAgICAgICAgICRvcHRpb25zOiAnaSdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBvW2ZpZWxkXVt0aGlzLm9wZXJhdG9yXSA9IHRoaXMudmFsdWUuYXNWYWx1ZShjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG87XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJcbiJdfQ==