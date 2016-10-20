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

        var _this = _possibleConstructorReturn(this, (FieldSort.__proto__ || Object.getPrototypeOf(FieldSort)).call(this));

        _this.type = 'field-sort';
        _this.field = field;
        _this.direction = direction;
        _this.location = location;

        return _this;
    }

    return FieldSort;
}(_Node3.default);

exports.default = FieldSort;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9hc3QvRmllbGRTb3J0LmpzIl0sIm5hbWVzIjpbIkZpZWxkU29ydCIsImZpZWxkIiwiZGlyZWN0aW9uIiwibG9jYXRpb24iLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxTOzs7QUFFRix1QkFBWUMsS0FBWixFQUFtQkMsU0FBbkIsRUFBK0JDLFFBQS9CLEVBQXlDO0FBQUE7O0FBQUE7O0FBR3JDLGNBQUtDLElBQUwsR0FBWSxZQUFaO0FBQ0EsY0FBS0gsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsY0FBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxjQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjs7QUFOcUM7QUFReEM7Ozs7O2tCQUdVSCxTIiwiZmlsZSI6IkZpZWxkU29ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogRmllbGRTb3J0IFxuICovXG5jbGFzcyBGaWVsZFNvcnQgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGZpZWxkLCBkaXJlY3Rpb24sICBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdmaWVsZC1zb3J0J1xuICAgICAgICB0aGlzLmZpZWxkID0gZmllbGQ7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IEZpZWxkU29ydFxuIl19