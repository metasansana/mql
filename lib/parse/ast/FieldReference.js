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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9hc3QvRmllbGRSZWZlcmVuY2UuanMiXSwibmFtZXMiOlsiRmllbGRSZWZlcmVuY2UiLCJmaWVsZCIsImluY2x1ZGUiLCJsb2NhdGlvbiIsInR5cGUiLCJvIiwiY29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxjOzs7QUFFSiwwQkFBWUMsS0FBWixFQUFtQkMsT0FBbkIsRUFBNEJDLFFBQTVCLEVBQXNDO0FBQUE7O0FBQUE7O0FBR3BDLFVBQUtDLElBQUwsR0FBWSxpQkFBWjtBQUNBLFVBQUtILEtBQUwsR0FBYUEsS0FBYjtBQUNBLFVBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFVBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQU5vQztBQVFyQzs7OzswQkFFS0UsQyxFQUFHQyxPLEVBQVM7O0FBRWhCRCxRQUFFLEtBQUtKLEtBQVAsSUFBaUIsS0FBS0MsT0FBdEI7QUFDQSxhQUFPRyxDQUFQO0FBRUQ7Ozs7OztrQkFJWUwsYyIsImZpbGUiOiJGaWVsZFJlZmVyZW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogRmllbGRSZWZlcmVuY2VcbiAqL1xuY2xhc3MgRmllbGRSZWZlcmVuY2UgZXh0ZW5kcyBOb2RlIHtcblxuICBjb25zdHJ1Y3RvcihmaWVsZCwgaW5jbHVkZSwgbG9jYXRpb24pIHtcblxuICAgIHN1cGVyKCk7XG4gICAgdGhpcy50eXBlID0gJ2ZpZWxkLXJlZmVyZW5jZSc7XG4gICAgdGhpcy5maWVsZCA9IGZpZWxkO1xuICAgIHRoaXMuaW5jbHVkZSA9IGluY2x1ZGU7XG4gICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gIH1cblxuICBhcHBseShvLCBjb250ZXh0KSB7XG5cbiAgICBvW3RoaXMuZmllbGRdID0gIHRoaXMuaW5jbHVkZTtcbiAgICByZXR1cm4gbztcblxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmllbGRSZWZlcmVuY2VcblxuIl19