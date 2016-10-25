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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9BbGxGaWVsZHNSZWZlcmVuY2UuanMiXSwibmFtZXMiOlsiQWxsRmllbGRzUmVmZXJlbmNlIiwibG9jYXRpb24iLCJ0eXBlIiwiZmllbGRzIiwiY29udGV4dCIsIl9pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxrQjs7O0FBRUosOEJBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFBQTs7QUFHcEIsVUFBS0MsSUFBTCxHQUFZLHNCQUFaO0FBQ0EsVUFBS0QsUUFBTCxHQUFnQkEsUUFBaEI7O0FBSm9CO0FBTXJCOzs7OzBCQUVLRSxNLEVBQVFDLE8sRUFBUzs7QUFFckIsYUFBTztBQUNMQyxhQUFLO0FBREEsT0FBUDtBQUlEOzs7Ozs7a0JBSVlMLGtCIiwiZmlsZSI6IkFsbEZpZWxkc1JlZmVyZW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogQWxsRmllbGRzUmVmZXJlbmNlXG4gKi9cbmNsYXNzIEFsbEZpZWxkc1JlZmVyZW5jZSBleHRlbmRzIE5vZGUge1xuXG4gIGNvbnN0cnVjdG9yKGxvY2F0aW9uKSB7XG5cbiAgICBzdXBlcigpO1xuICAgIHRoaXMudHlwZSA9ICdhbGwtZmllbGRzLXJlZmVyZW5jZSc7XG4gICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gIH1cblxuICBhcHBseShmaWVsZHMsIGNvbnRleHQpIHtcblxuICAgIHJldHVybiB7XG4gICAgICBfaWQ6IGZhbHNlXG4gICAgfTtcblxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWxsRmllbGRzUmVmZXJlbmNlXG5cbiJdfQ==