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
                case '$elemMatch':
                    o[field] = { $elemMatch: this.value.asValue(context) };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3QvRmlsdGVyLmpzIl0sIm5hbWVzIjpbIkZpbHRlciIsImZpZWxkIiwib3BlcmF0b3IiLCJ2YWx1ZSIsImxvY2F0aW9uIiwidHlwZSIsIm8iLCJjb250ZXh0IiwiJHJlZ2V4IiwiYXNWYWx1ZSIsInJlcGxhY2UiLCIkb3B0aW9ucyIsIiRlbGVtTWF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHTUEsTTs7O0FBR0Ysb0JBQVlDLEtBQVosRUFBbUJDLFFBQW5CLEVBQTZCQyxLQUE3QixFQUFvQ0MsUUFBcEMsRUFBOEM7QUFBQTs7QUFBQTs7QUFHMUMsY0FBS0MsSUFBTCxHQUFZLFFBQVo7QUFDQSxjQUFLSixLQUFMLEdBQWFBLEtBQWI7QUFDQSxjQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLGNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQVAwQztBQVM3Qzs7Ozs4QkFFS0UsQyxFQUFHQyxPLEVBQVM7O0FBRWQsZ0JBQUlOLFFBQVEsS0FBS0EsS0FBakI7QUFDQUssY0FBRUwsS0FBRixJQUFXSyxFQUFFTCxLQUFGLEtBQVksRUFBdkI7O0FBRUEsb0JBQVEsS0FBS0MsUUFBYjs7QUFFSSxxQkFBSyxHQUFMO0FBQ0lJLHNCQUFFTCxLQUFGLElBQVc7QUFDUE8sZ0NBQVEsS0FBS0wsS0FBTCxDQUFXTSxPQUFYLENBQW1CRixPQUFuQixFQUNSRyxPQURRLENBQ0EscUJBREEsRUFDdUIsTUFEdkIsQ0FERDtBQUdQQyxrQ0FBVTtBQUhILHFCQUFYO0FBS0E7QUFDSixxQkFBSyxZQUFMO0FBQ0lMLHNCQUFFTCxLQUFGLElBQVcsRUFBQ1csWUFBYSxLQUFLVCxLQUFMLENBQVdNLE9BQVgsQ0FBbUJGLE9BQW5CLENBQWQsRUFBWDtBQUNBO0FBQ0o7QUFDSUQsc0JBQUVMLEtBQUYsRUFBUyxLQUFLQyxRQUFkLElBQTBCLEtBQUtDLEtBQUwsQ0FBV00sT0FBWCxDQUFtQkYsT0FBbkIsQ0FBMUI7QUFDQTs7QUFkUjs7QUFrQkEsbUJBQU9ELENBQVA7QUFDSDs7Ozs7O2tCQUdVTixNIiwiZmlsZSI6IkZpbHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogRmlsdGVyXG4gKi9cbmNsYXNzIEZpbHRlciBleHRlbmRzIE5vZGUge1xuXG5cbiAgICBjb25zdHJ1Y3RvcihmaWVsZCwgb3BlcmF0b3IsIHZhbHVlLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdmaWx0ZXInO1xuICAgICAgICB0aGlzLmZpZWxkID0gZmllbGQ7XG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICBhcHBseShvLCBjb250ZXh0KSB7XG5cbiAgICAgICAgdmFyIGZpZWxkID0gdGhpcy5maWVsZDtcbiAgICAgICAgb1tmaWVsZF0gPSBvW2ZpZWxkXSB8fCB7fTtcblxuICAgICAgICBzd2l0Y2ggKHRoaXMub3BlcmF0b3IpIHtcblxuICAgICAgICAgICAgY2FzZSAnPyc6XG4gICAgICAgICAgICAgICAgb1tmaWVsZF0gPSB7XG4gICAgICAgICAgICAgICAgICAgICRyZWdleDogdGhpcy52YWx1ZS5hc1ZhbHVlKGNvbnRleHQpLlxuICAgICAgICAgICAgICAgICAgICByZXBsYWNlKC9bLiorP14ke30oKXxbXFxdXFxcXF0vZywgXCJcXFxcJCZcIiksXG4gICAgICAgICAgICAgICAgICAgICRvcHRpb25zOiAnaSdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnJGVsZW1NYXRjaCc6XG4gICAgICAgICAgICAgICAgb1tmaWVsZF0gPSB7JGVsZW1NYXRjaDogIHRoaXMudmFsdWUuYXNWYWx1ZShjb250ZXh0KX07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIG9bZmllbGRdW3RoaXMub3BlcmF0b3JdID0gdGhpcy52YWx1ZS5hc1ZhbHVlKGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbztcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlclxuIl19