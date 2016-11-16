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
 * SetClause
 */
var SetClause = function (_Node) {
    _inherits(SetClause, _Node);

    function SetClause(update, location) {
        _classCallCheck(this, SetClause);

        var _this = _possibleConstructorReturn(this, (SetClause.__proto__ || Object.getPrototypeOf(SetClause)).call(this));

        _this.type = 'set-clause';
        _this.update = update;
        _this.location = location;

        return _this;
    }

    _createClass(SetClause, [{
        key: 'apply',
        value: function apply(update, context) {

            update.$set = this.update.asValue(context);
            return update;
        }
    }]);

    return SetClause;
}(_Node3.default);

exports.default = SetClause;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9hc3QvU2V0Q2xhdXNlLmpzIl0sIm5hbWVzIjpbIlNldENsYXVzZSIsInVwZGF0ZSIsImxvY2F0aW9uIiwidHlwZSIsImNvbnRleHQiLCIkc2V0IiwiYXNWYWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxTOzs7QUFFRix1QkFBWUMsTUFBWixFQUFvQkMsUUFBcEIsRUFBOEI7QUFBQTs7QUFBQTs7QUFHMUIsY0FBS0MsSUFBTCxHQUFZLFlBQVo7QUFDQSxjQUFLRixNQUFMLEdBQWNBLE1BQWQ7QUFDQSxjQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjs7QUFMMEI7QUFPN0I7Ozs7OEJBRUtELE0sRUFBUUcsTyxFQUFTOztBQUVuQkgsbUJBQU9JLElBQVAsR0FBYyxLQUFLSixNQUFMLENBQVlLLE9BQVosQ0FBb0JGLE9BQXBCLENBQWQ7QUFDQSxtQkFBT0gsTUFBUDtBQUVIOzs7Ozs7a0JBSVVELFMiLCJmaWxlIjoiU2V0Q2xhdXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBTZXRDbGF1c2VcbiAqL1xuY2xhc3MgU2V0Q2xhdXNlIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcih1cGRhdGUsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ3NldC1jbGF1c2UnO1xuICAgICAgICB0aGlzLnVwZGF0ZSA9IHVwZGF0ZTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgYXBwbHkodXBkYXRlLCBjb250ZXh0KSB7XG5cbiAgICAgICAgdXBkYXRlLiRzZXQgPSB0aGlzLnVwZGF0ZS5hc1ZhbHVlKGNvbnRleHQpO1xuICAgICAgICByZXR1cm4gdXBkYXRlO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNldENsYXVzZVxuIl19