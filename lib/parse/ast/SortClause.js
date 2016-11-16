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
 * SortClause
 */
var SortClause = function (_Node) {
    _inherits(SortClause, _Node);

    function SortClause(fields, location) {
        _classCallCheck(this, SortClause);

        var _this = _possibleConstructorReturn(this, (SortClause.__proto__ || Object.getPrototypeOf(SortClause)).call(this));

        _this.type = 'sort-clause';
        _this.fields = fields;
        _this.location = location;

        return _this;
    }

    _createClass(SortClause, [{
        key: 'apply',
        value: function apply(cursor, context) {

            return cursor.sort(this.fields.asValue());
        }
    }]);

    return SortClause;
}(_Node3.default);

exports.default = SortClause;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9hc3QvU29ydENsYXVzZS5qcyJdLCJuYW1lcyI6WyJTb3J0Q2xhdXNlIiwiZmllbGRzIiwibG9jYXRpb24iLCJ0eXBlIiwiY3Vyc29yIiwiY29udGV4dCIsInNvcnQiLCJhc1ZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR01BLFU7OztBQUVGLHdCQUFZQyxNQUFaLEVBQW9CQyxRQUFwQixFQUE4QjtBQUFBOztBQUFBOztBQUcxQixjQUFLQyxJQUFMLEdBQVksYUFBWjtBQUNBLGNBQUtGLE1BQUwsR0FBY0EsTUFBZDtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQUwwQjtBQU83Qjs7Ozs4QkFFS0UsTSxFQUFRQyxPLEVBQVM7O0FBRW5CLG1CQUFPRCxPQUFPRSxJQUFQLENBQVksS0FBS0wsTUFBTCxDQUFZTSxPQUFaLEVBQVosQ0FBUDtBQUVIOzs7Ozs7a0JBR1VQLFUiLCJmaWxlIjoiU29ydENsYXVzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogU29ydENsYXVzZVxuICovXG5jbGFzcyBTb3J0Q2xhdXNlIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihmaWVsZHMsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ3NvcnQtY2xhdXNlJ1xuICAgICAgICB0aGlzLmZpZWxkcyA9IGZpZWxkcztcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgYXBwbHkoY3Vyc29yLCBjb250ZXh0KSB7XG5cbiAgICAgICAgcmV0dXJuIGN1cnNvci5zb3J0KHRoaXMuZmllbGRzLmFzVmFsdWUoKSk7XG5cbiAgICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IFNvcnRDbGF1c2VcbiJdfQ==