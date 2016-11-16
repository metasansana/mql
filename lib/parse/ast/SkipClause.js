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
 * SkipClause
 */
var SkipClause = function (_Node) {
    _inherits(SkipClause, _Node);

    function SkipClause(value, location) {
        _classCallCheck(this, SkipClause);

        var _this = _possibleConstructorReturn(this, (SkipClause.__proto__ || Object.getPrototypeOf(SkipClause)).call(this));

        _this.type = 'limit-clause';
        _this.value = value;
        _this.location = location;

        return _this;
    }

    _createClass(SkipClause, [{
        key: 'apply',
        value: function apply(cursor, context) {

            return cursor.skip(Number(this.value));
        }
    }]);

    return SkipClause;
}(_Node3.default);

exports.default = SkipClause;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9hc3QvU2tpcENsYXVzZS5qcyJdLCJuYW1lcyI6WyJTa2lwQ2xhdXNlIiwidmFsdWUiLCJsb2NhdGlvbiIsInR5cGUiLCJjdXJzb3IiLCJjb250ZXh0Iiwic2tpcCIsIk51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxVOzs7QUFFRix3QkFBWUMsS0FBWixFQUFtQkMsUUFBbkIsRUFBNkI7QUFBQTs7QUFBQTs7QUFHekIsY0FBS0MsSUFBTCxHQUFZLGNBQVo7QUFDQSxjQUFLRixLQUFMLEdBQWFBLEtBQWI7QUFDQSxjQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjs7QUFMeUI7QUFPNUI7Ozs7OEJBRUtFLE0sRUFBUUMsTyxFQUFTOztBQUVsQixtQkFBT0QsT0FBT0UsSUFBUCxDQUFZQyxPQUFPLEtBQUtOLEtBQVosQ0FBWixDQUFQO0FBRUo7Ozs7OztrQkFJVUQsVSIsImZpbGUiOiJTa2lwQ2xhdXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBTa2lwQ2xhdXNlXG4gKi9cbmNsYXNzIFNraXBDbGF1c2UgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdsaW1pdC1jbGF1c2UnXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgYXBwbHkoY3Vyc29yLCBjb250ZXh0KSB7XG5cbiAgICAgICAgIHJldHVybiBjdXJzb3Iuc2tpcChOdW1iZXIodGhpcy52YWx1ZSkpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNraXBDbGF1c2VcbiJdfQ==