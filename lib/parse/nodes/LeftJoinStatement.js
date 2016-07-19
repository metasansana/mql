'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * LeftJoinStatement 
 */

var LeftJoinStatement = function (_Node) {
    _inherits(LeftJoinStatement, _Node);

    function LeftJoinStatement(collection, field_selection, where_conditions, modifiers, location) {
        _classCallCheck(this, LeftJoinStatement);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LeftJoinStatement).call(this));

        _this.type = 'inner-join';
        _this.collection = collection;
        _this.field_selection = field_selection;
        _this.where_condition = where_conditions;
        _this.modifiers = modifiers;
        _this.location = location;

        return _this;
    }

    return LeftJoinStatement;
}(_Node3.default);

exports.default = LeftJoinStatement;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9MZWZ0Sm9pblN0YXRlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7SUFHTSxpQjs7O0FBRUYsK0JBQVksVUFBWixFQUF3QixlQUF4QixFQUF5QyxnQkFBekMsRUFBMkQsU0FBM0QsRUFBc0UsUUFBdEUsRUFBZ0Y7QUFBQTs7QUFBQTs7QUFHNUUsY0FBSyxJQUFMLEdBQVksWUFBWjtBQUNBLGNBQUssVUFBTCxHQUFrQixVQUFsQjtBQUNBLGNBQUssZUFBTCxHQUF1QixlQUF2QjtBQUNBLGNBQUssZUFBTCxHQUF1QixnQkFBdkI7QUFDQSxjQUFLLFNBQUwsR0FBaUIsU0FBakI7QUFDQSxjQUFLLFFBQUwsR0FBZ0IsUUFBaEI7O0FBUjRFO0FBVS9FOzs7OztrQkFHVSxpQiIsImZpbGUiOiJMZWZ0Sm9pblN0YXRlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogTGVmdEpvaW5TdGF0ZW1lbnQgXG4gKi9cbmNsYXNzIExlZnRKb2luU3RhdGVtZW50IGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb2xsZWN0aW9uLCBmaWVsZF9zZWxlY3Rpb24sIHdoZXJlX2NvbmRpdGlvbnMsIG1vZGlmaWVycywgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnaW5uZXItam9pbic7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbiA9IGNvbGxlY3Rpb247XG4gICAgICAgIHRoaXMuZmllbGRfc2VsZWN0aW9uID0gZmllbGRfc2VsZWN0aW9uO1xuICAgICAgICB0aGlzLndoZXJlX2NvbmRpdGlvbiA9IHdoZXJlX2NvbmRpdGlvbnM7XG4gICAgICAgIHRoaXMubW9kaWZpZXJzID0gbW9kaWZpZXJzO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IExlZnRKb2luU3RhdGVtZW50XG4iXX0=