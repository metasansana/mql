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
 * LimitClause
 */
var LimitClause = function (_Node) {
    _inherits(LimitClause, _Node);

    function LimitClause(value, location) {
        _classCallCheck(this, LimitClause);

        var _this = _possibleConstructorReturn(this, (LimitClause.__proto__ || Object.getPrototypeOf(LimitClause)).call(this));

        _this.type = 'limit-clause';
        _this.value = value;
        _this.location = location;

        return _this;
    }

    _createClass(LimitClause, [{
        key: 'apply',
        value: function apply(cursor, context) {

            return cursor.limit(Number(this.value));
        }
    }]);

    return LimitClause;
}(_Node3.default);

exports.default = LimitClause;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3QvTGltaXRDbGF1c2UuanMiXSwibmFtZXMiOlsiTGltaXRDbGF1c2UiLCJ2YWx1ZSIsImxvY2F0aW9uIiwidHlwZSIsImN1cnNvciIsImNvbnRleHQiLCJsaW1pdCIsIk51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxXOzs7QUFFRix5QkFBWUMsS0FBWixFQUFtQkMsUUFBbkIsRUFBNkI7QUFBQTs7QUFBQTs7QUFHekIsY0FBS0MsSUFBTCxHQUFZLGNBQVo7QUFDQSxjQUFLRixLQUFMLEdBQWFBLEtBQWI7QUFDQSxjQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjs7QUFMeUI7QUFPNUI7Ozs7OEJBRUtFLE0sRUFBUUMsTyxFQUFTOztBQUVuQixtQkFBT0QsT0FBT0UsS0FBUCxDQUFhQyxPQUFPLEtBQUtOLEtBQVosQ0FBYixDQUFQO0FBRUg7Ozs7OztrQkFJVUQsVyIsImZpbGUiOiJMaW1pdENsYXVzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogTGltaXRDbGF1c2VcbiAqL1xuY2xhc3MgTGltaXRDbGF1c2UgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdsaW1pdC1jbGF1c2UnXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgYXBwbHkoY3Vyc29yLCBjb250ZXh0KSB7XG5cbiAgICAgICAgcmV0dXJuIGN1cnNvci5saW1pdChOdW1iZXIodGhpcy52YWx1ZSkpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbWl0Q2xhdXNlXG4iXX0=