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
 * InputStatement 
 */

var InputStatement = function (_Node) {
    _inherits(InputStatement, _Node);

    function InputStatement(values, collection, location) {
        _classCallCheck(this, InputStatement);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(InputStatement).call(this));

        _this.type = 'insert-statement';
        _this.values = values;
        _this.collection = collection;
        _this.location = location;

        return _this;
    }

    return InputStatement;
}(_Node3.default);

exports.default = InputStatement;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9JbnNlcnRTdGF0ZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7O0lBR00sYzs7O0FBRUYsNEJBQVksTUFBWixFQUFvQixVQUFwQixFQUFnQyxRQUFoQyxFQUEwQztBQUFBOztBQUFBOztBQUd0QyxjQUFLLElBQUwsR0FBWSxrQkFBWjtBQUNBLGNBQUssTUFBTCxHQUFjLE1BQWQ7QUFDQSxjQUFLLFVBQUwsR0FBa0IsVUFBbEI7QUFDQSxjQUFLLFFBQUwsR0FBZ0IsUUFBaEI7O0FBTnNDO0FBUXpDOzs7OztrQkFHVSxjIiwiZmlsZSI6Ikluc2VydFN0YXRlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogSW5wdXRTdGF0ZW1lbnQgXG4gKi9cbmNsYXNzIElucHV0U3RhdGVtZW50IGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZXMsIGNvbGxlY3Rpb24sIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2luc2VydC1zdGF0ZW1lbnQnO1xuICAgICAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcztcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uID0gY29sbGVjdGlvbjtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBJbnB1dFN0YXRlbWVudFxuIl19