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
 * BooleanLiteral 
 */

var BooleanLiteral = function (_Node) {
  _inherits(BooleanLiteral, _Node);

  function BooleanLiteral(value, location) {
    _classCallCheck(this, BooleanLiteral);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BooleanLiteral).call(this));

    _this.type = 'boolean-literal';
    _this.value = value;
    _this.location = location;

    return _this;
  }

  _createClass(BooleanLiteral, [{
    key: 'transpile',
    value: function transpile() {

      return this.value;
    }
  }, {
    key: 'compile',
    value: function compile(o) {

      return this.sourceNode(o.fileName, this.value);
    }
  }]);

  return BooleanLiteral;
}(_Node3.default);

exports.default = BooleanLiteral;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9Cb29sZWFuTGl0ZXJhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7OztJQUdNLGM7OztBQUVGLDBCQUFZLEtBQVosRUFBbUIsUUFBbkIsRUFBNkI7QUFBQTs7QUFBQTs7QUFHM0IsVUFBSyxJQUFMLEdBQVksaUJBQVo7QUFDRSxVQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0EsVUFBSyxRQUFMLEdBQWdCLFFBQWhCOztBQUx5QjtBQU81Qjs7OztnQ0FFVzs7QUFFVixhQUFPLEtBQUssS0FBWjtBQUVEOzs7NEJBRU8sQyxFQUFHOztBQUVULGFBQU8sS0FBSyxVQUFMLENBQWdCLEVBQUUsUUFBbEIsRUFBNEIsS0FBSyxLQUFqQyxDQUFQO0FBRUQ7Ozs7OztrQkFJVSxjIiwiZmlsZSI6IkJvb2xlYW5MaXRlcmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBCb29sZWFuTGl0ZXJhbCBcbiAqL1xuY2xhc3MgQm9vbGVhbkxpdGVyYWwgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBsb2NhdGlvbikge1xuXG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy50eXBlID0gJ2Jvb2xlYW4tbGl0ZXJhbCc7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICByZXR1cm4gdGhpcy52YWx1ZTtcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICByZXR1cm4gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsIHRoaXMudmFsdWUpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5MaXRlcmFsXG4iXX0=