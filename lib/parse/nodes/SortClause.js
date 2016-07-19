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
 * SortClause 
 */

var SortClause = function (_Node) {
    _inherits(SortClause, _Node);

    function SortClause(fields, location) {
        _classCallCheck(this, SortClause);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SortClause).call(this));

        _this.type = 'sort-clause';
        _this.fields = fields;
        _this.location = location;

        return _this;
    }

    return SortClause;
}(_Node3.default);

exports.default = SortClause;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9Tb3J0Q2xhdXNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7OztJQUdNLFU7OztBQUVGLHdCQUFZLE1BQVosRUFBb0IsUUFBcEIsRUFBOEI7QUFBQTs7QUFBQTs7QUFHMUIsY0FBSyxJQUFMLEdBQVksYUFBWjtBQUNBLGNBQUssTUFBTCxHQUFjLE1BQWQ7QUFDQSxjQUFLLFFBQUwsR0FBZ0IsUUFBaEI7O0FBTDBCO0FBTzdCOzs7OztrQkFHVSxVIiwiZmlsZSI6IlNvcnRDbGF1c2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIFNvcnRDbGF1c2UgXG4gKi9cbmNsYXNzIFNvcnRDbGF1c2UgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGZpZWxkcywgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnc29ydC1jbGF1c2UnXG4gICAgICAgIHRoaXMuZmllbGRzID0gZmllbGRzO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IFNvcnRDbGF1c2VcbiJdfQ==