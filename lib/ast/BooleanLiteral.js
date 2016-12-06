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

    var _this = _possibleConstructorReturn(this, (BooleanLiteral.__proto__ || Object.getPrototypeOf(BooleanLiteral)).call(this));

    _this.type = 'boolean-literal';
    _this.value = value;
    _this.location = location;

    return _this;
  }

  _createClass(BooleanLiteral, [{
    key: 'asValue',
    value: function asValue() {

      return Boolean(this.value);
    }
  }, {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3QvQm9vbGVhbkxpdGVyYWwuanMiXSwibmFtZXMiOlsiQm9vbGVhbkxpdGVyYWwiLCJ2YWx1ZSIsImxvY2F0aW9uIiwidHlwZSIsIkJvb2xlYW4iLCJvIiwic291cmNlTm9kZSIsImZpbGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR01BLGM7OztBQUVGLDBCQUFZQyxLQUFaLEVBQW1CQyxRQUFuQixFQUE2QjtBQUFBOztBQUFBOztBQUczQixVQUFLQyxJQUFMLEdBQVksaUJBQVo7QUFDRSxVQUFLRixLQUFMLEdBQWFBLEtBQWI7QUFDQSxVQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjs7QUFMeUI7QUFPNUI7Ozs7OEJBRVM7O0FBRVIsYUFBT0UsUUFBUSxLQUFLSCxLQUFiLENBQVA7QUFFRDs7O2dDQUVXOztBQUVWLGFBQU8sS0FBS0EsS0FBWjtBQUVEOzs7NEJBRU9JLEMsRUFBRzs7QUFFVCxhQUFPLEtBQUtDLFVBQUwsQ0FBZ0JELEVBQUVFLFFBQWxCLEVBQTRCLEtBQUtOLEtBQWpDLENBQVA7QUFFRDs7Ozs7O2tCQUlVRCxjIiwiZmlsZSI6IkJvb2xlYW5MaXRlcmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBCb29sZWFuTGl0ZXJhbCBcbiAqL1xuY2xhc3MgQm9vbGVhbkxpdGVyYWwgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBsb2NhdGlvbikge1xuXG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy50eXBlID0gJ2Jvb2xlYW4tbGl0ZXJhbCc7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgYXNWYWx1ZSgpIHtcblxuICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy52YWx1ZSk7XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgIHJldHVybiB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgdGhpcy52YWx1ZSk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhbkxpdGVyYWxcbiJdfQ==