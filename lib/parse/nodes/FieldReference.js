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
 * FieldReference 
 */

var FieldReference = function (_Node) {
    _inherits(FieldReference, _Node);

    function FieldReference(name, include, location) {
        _classCallCheck(this, FieldReference);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FieldReference).call(this));

        _this.type = 'field-reference';
        _this.name = name;
        _this.include = include;
        _this.location = location;

        return _this;
    }

    return FieldReference;
}(_Node3.default);

exports.default = FieldReference;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9GaWVsZFJlZmVyZW5jZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7SUFHTSxjOzs7QUFHRiw0QkFBWSxJQUFaLEVBQWtCLE9BQWxCLEVBQTJCLFFBQTNCLEVBQXFDO0FBQUE7O0FBQUE7O0FBR2pDLGNBQUssSUFBTCxHQUFZLGlCQUFaO0FBQ0EsY0FBSyxJQUFMLEdBQVksSUFBWjtBQUNBLGNBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSxjQUFLLFFBQUwsR0FBZ0IsUUFBaEI7O0FBTmlDO0FBUXBDOzs7OztrQkFHVSxjIiwiZmlsZSI6IkZpZWxkUmVmZXJlbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBGaWVsZFJlZmVyZW5jZSBcbiAqL1xuY2xhc3MgRmllbGRSZWZlcmVuY2UgZXh0ZW5kcyBOb2RlIHtcblxuXG4gICAgY29uc3RydWN0b3IobmFtZSwgaW5jbHVkZSwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnZmllbGQtcmVmZXJlbmNlJztcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pbmNsdWRlID0gaW5jbHVkZTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWVsZFJlZmVyZW5jZVxuIl19