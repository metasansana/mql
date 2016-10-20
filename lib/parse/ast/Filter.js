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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9hc3QvRmlsdGVyLmpzIl0sIm5hbWVzIjpbIkZpbHRlciIsImZpZWxkIiwib3BlcmF0b3IiLCJ2YWx1ZSIsImxvY2F0aW9uIiwidHlwZSIsIm8iLCJjb250ZXh0IiwiJHJlZ2V4IiwiYXNWYWx1ZSIsInJlcGxhY2UiLCIkb3B0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxNOzs7QUFHRixvQkFBWUMsS0FBWixFQUFtQkMsUUFBbkIsRUFBNkJDLEtBQTdCLEVBQW9DQyxRQUFwQyxFQUE4QztBQUFBOztBQUFBOztBQUcxQyxjQUFLQyxJQUFMLEdBQVksUUFBWjtBQUNBLGNBQUtKLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsY0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBUDBDO0FBUzdDOzs7OzhCQUVLRSxDLEVBQUdDLE8sRUFBUzs7QUFFZCxnQkFBSU4sUUFBUSxLQUFLQSxLQUFqQjtBQUNBSyxjQUFFTCxLQUFGLElBQVdLLEVBQUVMLEtBQUYsS0FBWSxFQUF2Qjs7QUFFQSxvQkFBUSxLQUFLQyxRQUFiOztBQUVJLHFCQUFLLEdBQUw7QUFDSUksc0JBQUVMLEtBQUYsSUFBVztBQUNQTyxnQ0FBUSxLQUFLTCxLQUFMLENBQVdNLE9BQVgsQ0FBbUJGLE9BQW5CLEVBQ1JHLE9BRFEsQ0FDQSxxQkFEQSxFQUN1QixNQUR2QixDQUREO0FBR1BDLGtDQUFVO0FBSEgscUJBQVg7QUFLQTtBQUNKO0FBQ0lMLHNCQUFFTCxLQUFGLEVBQVMsS0FBS0MsUUFBZCxJQUEwQixLQUFLQyxLQUFMLENBQVdNLE9BQVgsQ0FBbUJGLE9BQW5CLENBQTFCO0FBQ0E7O0FBWFI7O0FBZUEsbUJBQU9ELENBQVA7QUFDSDs7Ozs7O2tCQUdVTixNIiwiZmlsZSI6IkZpbHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogRmlsdGVyIFxuICovXG5jbGFzcyBGaWx0ZXIgZXh0ZW5kcyBOb2RlIHtcblxuXG4gICAgY29uc3RydWN0b3IoZmllbGQsIG9wZXJhdG9yLCB2YWx1ZSwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnZmlsdGVyJztcbiAgICAgICAgdGhpcy5maWVsZCA9IGZpZWxkO1xuICAgICAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgYXBwbHkobywgY29udGV4dCkge1xuXG4gICAgICAgIHZhciBmaWVsZCA9IHRoaXMuZmllbGQ7XG4gICAgICAgIG9bZmllbGRdID0gb1tmaWVsZF0gfHwge307XG5cbiAgICAgICAgc3dpdGNoICh0aGlzLm9wZXJhdG9yKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJz8nOlxuICAgICAgICAgICAgICAgIG9bZmllbGRdID0ge1xuICAgICAgICAgICAgICAgICAgICAkcmVnZXg6IHRoaXMudmFsdWUuYXNWYWx1ZShjb250ZXh0KS5cbiAgICAgICAgICAgICAgICAgICAgcmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csIFwiXFxcXCQmXCIpLFxuICAgICAgICAgICAgICAgICAgICAkb3B0aW9uczogJ2knXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgb1tmaWVsZF1bdGhpcy5vcGVyYXRvcl0gPSB0aGlzLnZhbHVlLmFzVmFsdWUoY29udGV4dCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyXG4iXX0=