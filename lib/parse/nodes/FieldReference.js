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
 * FieldReference
 */
var FieldReference = function (_Node) {
  _inherits(FieldReference, _Node);

  function FieldReference(field, include, location) {
    _classCallCheck(this, FieldReference);

    var _this = _possibleConstructorReturn(this, (FieldReference.__proto__ || Object.getPrototypeOf(FieldReference)).call(this));

    _this.type = 'field-reference';
    _this.field = field;
    _this.include = include;
    _this.location = location;

    return _this;
  }

  _createClass(FieldReference, [{
    key: 'apply',
    value: function apply(o, context) {

      o[this.field] = this.include;
      return o;
    }
  }]);

  return FieldReference;
}(_Node3.default);

exports.default = FieldReference;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9GaWVsZFJlZmVyZW5jZS5qcyJdLCJuYW1lcyI6WyJGaWVsZFJlZmVyZW5jZSIsImZpZWxkIiwiaW5jbHVkZSIsImxvY2F0aW9uIiwidHlwZSIsIm8iLCJjb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR01BLGM7OztBQUVKLDBCQUFZQyxLQUFaLEVBQW1CQyxPQUFuQixFQUE0QkMsUUFBNUIsRUFBc0M7QUFBQTs7QUFBQTs7QUFHcEMsVUFBS0MsSUFBTCxHQUFZLGlCQUFaO0FBQ0EsVUFBS0gsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsVUFBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBTm9DO0FBUXJDOzs7OzBCQUVLRSxDLEVBQUdDLE8sRUFBUzs7QUFFaEJELFFBQUUsS0FBS0osS0FBUCxJQUFpQixLQUFLQyxPQUF0QjtBQUNBLGFBQU9HLENBQVA7QUFFRDs7Ozs7O2tCQUlZTCxjIiwiZmlsZSI6IkZpZWxkUmVmZXJlbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBGaWVsZFJlZmVyZW5jZVxuICovXG5jbGFzcyBGaWVsZFJlZmVyZW5jZSBleHRlbmRzIE5vZGUge1xuXG4gIGNvbnN0cnVjdG9yKGZpZWxkLCBpbmNsdWRlLCBsb2NhdGlvbikge1xuXG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnR5cGUgPSAnZmllbGQtcmVmZXJlbmNlJztcbiAgICB0aGlzLmZpZWxkID0gZmllbGQ7XG4gICAgdGhpcy5pbmNsdWRlID0gaW5jbHVkZTtcbiAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgfVxuXG4gIGFwcGx5KG8sIGNvbnRleHQpIHtcblxuICAgIG9bdGhpcy5maWVsZF0gPSAgdGhpcy5pbmNsdWRlO1xuICAgIHJldHVybiBvO1xuXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWVsZFJlZmVyZW5jZVxuXG4iXX0=