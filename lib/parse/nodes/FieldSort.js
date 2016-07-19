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
 * FieldSort 
 */

var FieldSort = function (_Node) {
    _inherits(FieldSort, _Node);

    function FieldSort(field, direction, location) {
        _classCallCheck(this, FieldSort);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FieldSort).call(this));

        _this.type = 'field-sort';
        _this.field = field;
        _this.direction = direction;
        _this.location = location;

        return _this;
    }

    return FieldSort;
}(_Node3.default);

exports.default = FieldSort;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9GaWVsZFNvcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7O0lBR00sUzs7O0FBRUYsdUJBQVksS0FBWixFQUFtQixTQUFuQixFQUErQixRQUEvQixFQUF5QztBQUFBOztBQUFBOztBQUdyQyxjQUFLLElBQUwsR0FBWSxZQUFaO0FBQ0EsY0FBSyxLQUFMLEdBQWEsS0FBYjtBQUNBLGNBQUssU0FBTCxHQUFpQixTQUFqQjtBQUNBLGNBQUssUUFBTCxHQUFnQixRQUFoQjs7QUFOcUM7QUFReEM7Ozs7O2tCQUdVLFMiLCJmaWxlIjoiRmllbGRTb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBGaWVsZFNvcnQgXG4gKi9cbmNsYXNzIEZpZWxkU29ydCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IoZmllbGQsIGRpcmVjdGlvbiwgIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2ZpZWxkLXNvcnQnXG4gICAgICAgIHRoaXMuZmllbGQgPSBmaWVsZDtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgRmllbGRTb3J0XG4iXX0=