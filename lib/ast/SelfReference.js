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

    function FieldReference(value, include, location) {
        _classCallCheck(this, FieldReference);

        var _this = _possibleConstructorReturn(this, (FieldReference.__proto__ || Object.getPrototypeOf(FieldReference)).call(this));

        _this.type = 'field-reference';
        _this.value = value;
        _this.include = include;
        _this.location = location;

        return _this;
    }

    return FieldReference;
}(_Node3.default);

exports.default = FieldReference;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3QvU2VsZlJlZmVyZW5jZS5qcyJdLCJuYW1lcyI6WyJGaWVsZFJlZmVyZW5jZSIsInZhbHVlIiwiaW5jbHVkZSIsImxvY2F0aW9uIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHTUEsYzs7O0FBR0YsNEJBQVlDLEtBQVosRUFBbUJDLE9BQW5CLEVBQTRCQyxRQUE1QixFQUFzQztBQUFBOztBQUFBOztBQUdsQyxjQUFLQyxJQUFMLEdBQVksaUJBQVo7QUFDQSxjQUFLSCxLQUFMLEdBQWFBLEtBQWI7QUFDQSxjQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxjQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjs7QUFOa0M7QUFRckM7Ozs7O2tCQUdVSCxjIiwiZmlsZSI6IlNlbGZSZWZlcmVuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIEZpZWxkUmVmZXJlbmNlIFxuICovXG5jbGFzcyBGaWVsZFJlZmVyZW5jZSBleHRlbmRzIE5vZGUge1xuXG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgaW5jbHVkZSwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnZmllbGQtcmVmZXJlbmNlJztcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmluY2x1ZGUgPSBpbmNsdWRlO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpZWxkUmVmZXJlbmNlXG4iXX0=