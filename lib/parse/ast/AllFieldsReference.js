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
 * AllFieldsReference
 */
var AllFieldsReference = function (_Node) {
  _inherits(AllFieldsReference, _Node);

  function AllFieldsReference(location) {
    _classCallCheck(this, AllFieldsReference);

    var _this = _possibleConstructorReturn(this, (AllFieldsReference.__proto__ || Object.getPrototypeOf(AllFieldsReference)).call(this));

    _this.type = 'all-fields-reference';
    _this.location = location;

    return _this;
  }

  _createClass(AllFieldsReference, [{
    key: 'apply',
    value: function apply(fields, context) {

      return {
        _id: false
      };
    }
  }]);

  return AllFieldsReference;
}(_Node3.default);

exports.default = AllFieldsReference;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9hc3QvQWxsRmllbGRzUmVmZXJlbmNlLmpzIl0sIm5hbWVzIjpbIkFsbEZpZWxkc1JlZmVyZW5jZSIsImxvY2F0aW9uIiwidHlwZSIsImZpZWxkcyIsImNvbnRleHQiLCJfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHTUEsa0I7OztBQUVKLDhCQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQUE7O0FBR3BCLFVBQUtDLElBQUwsR0FBWSxzQkFBWjtBQUNBLFVBQUtELFFBQUwsR0FBZ0JBLFFBQWhCOztBQUpvQjtBQU1yQjs7OzswQkFFS0UsTSxFQUFRQyxPLEVBQVM7O0FBRXJCLGFBQU87QUFDTEMsYUFBSztBQURBLE9BQVA7QUFJRDs7Ozs7O2tCQUlZTCxrQiIsImZpbGUiOiJBbGxGaWVsZHNSZWZlcmVuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIEFsbEZpZWxkc1JlZmVyZW5jZVxuICovXG5jbGFzcyBBbGxGaWVsZHNSZWZlcmVuY2UgZXh0ZW5kcyBOb2RlIHtcblxuICBjb25zdHJ1Y3Rvcihsb2NhdGlvbikge1xuXG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnR5cGUgPSAnYWxsLWZpZWxkcy1yZWZlcmVuY2UnO1xuICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICB9XG5cbiAgYXBwbHkoZmllbGRzLCBjb250ZXh0KSB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgX2lkOiBmYWxzZVxuICAgIH07XG5cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFsbEZpZWxkc1JlZmVyZW5jZVxuXG4iXX0=