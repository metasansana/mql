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
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9Cb29sZWFuTGl0ZXJhbC5qcyJdLCJuYW1lcyI6WyJCb29sZWFuTGl0ZXJhbCIsInZhbHVlIiwibG9jYXRpb24iLCJ0eXBlIiwiQm9vbGVhbiIsIm8iLCJzb3VyY2VOb2RlIiwiZmlsZU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHTUEsYzs7O0FBRUYsMEJBQVlDLEtBQVosRUFBbUJDLFFBQW5CLEVBQTZCO0FBQUE7O0FBQUE7O0FBRzNCLFVBQUtDLElBQUwsR0FBWSxpQkFBWjtBQUNFLFVBQUtGLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQUx5QjtBQU81Qjs7Ozs4QkFFUzs7QUFFUixhQUFPRSxRQUFRLEtBQUtILEtBQWIsQ0FBUDtBQUVEOzs7Z0NBRVc7O0FBRVYsYUFBTyxLQUFLQSxLQUFaO0FBRUQ7Ozs0QkFFT0ksQyxFQUFHOztBQUVULGFBQU8sS0FBS0MsVUFBTCxDQUFnQkQsRUFBRUUsUUFBbEIsRUFBNEIsS0FBS04sS0FBakMsQ0FBUDtBQUVEOzs7Ozs7a0JBSVVELGMiLCJmaWxlIjoiQm9vbGVhbkxpdGVyYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIEJvb2xlYW5MaXRlcmFsIFxuICovXG5jbGFzcyBCb29sZWFuTGl0ZXJhbCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGxvY2F0aW9uKSB7XG5cbiAgICAgIHN1cGVyKCk7XG4gICAgICB0aGlzLnR5cGUgPSAnYm9vbGVhbi1saXRlcmFsJztcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICBhc1ZhbHVlKCkge1xuXG4gICAgICByZXR1cm4gQm9vbGVhbih0aGlzLnZhbHVlKTtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgcmV0dXJuIHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCB0aGlzLnZhbHVlKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuTGl0ZXJhbFxuIl19