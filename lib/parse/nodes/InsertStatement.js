'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Statement2 = require('./Statement');

var _Statement3 = _interopRequireDefault(_Statement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * InsertStatement
 */
var InsertStatement = function (_Statement) {
  _inherits(InsertStatement, _Statement);

  function InsertStatement(collection, values, location) {
    _classCallCheck(this, InsertStatement);

    var _this = _possibleConstructorReturn(this, (InsertStatement.__proto__ || Object.getPrototypeOf(InsertStatement)).call(this));

    _this.type = 'insert-statement';
    _this.collection = collection;
    _this.values = values;
    _this.location = location;

    return _this;
  }

  _createClass(InsertStatement, [{
    key: 'execute',
    value: function execute(db, context) {

      return db.collection(this.collection.asValue(context)).insertOne(this.values.asValue(context));
    }
  }]);

  return InsertStatement;
}(_Statement3.default);

exports.default = InsertStatement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9JbnNlcnRTdGF0ZW1lbnQuanMiXSwibmFtZXMiOlsiSW5zZXJ0U3RhdGVtZW50IiwiY29sbGVjdGlvbiIsInZhbHVlcyIsImxvY2F0aW9uIiwidHlwZSIsImRiIiwiY29udGV4dCIsImFzVmFsdWUiLCJpbnNlcnRPbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHTUEsZTs7O0FBRUosMkJBQVlDLFVBQVosRUFBd0JDLE1BQXhCLEVBQWdDQyxRQUFoQyxFQUEwQztBQUFBOztBQUFBOztBQUd4QyxVQUFLQyxJQUFMLEdBQVksa0JBQVo7QUFDQSxVQUFLSCxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFVBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFVBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQU53QztBQVF6Qzs7Ozs0QkFFT0UsRSxFQUFJQyxPLEVBQVM7O0FBRW5CLGFBQU9ELEdBQUdKLFVBQUgsQ0FBYyxLQUFLQSxVQUFMLENBQWdCTSxPQUFoQixDQUF3QkQsT0FBeEIsQ0FBZCxFQUNQRSxTQURPLENBQ0csS0FBS04sTUFBTCxDQUFZSyxPQUFaLENBQW9CRCxPQUFwQixDQURILENBQVA7QUFHRDs7Ozs7O2tCQUlZTixlIiwiZmlsZSI6Ikluc2VydFN0YXRlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdGF0ZW1lbnQgZnJvbSAnLi9TdGF0ZW1lbnQnO1xuXG4vKipcbiAqIEluc2VydFN0YXRlbWVudFxuICovXG5jbGFzcyBJbnNlcnRTdGF0ZW1lbnQgZXh0ZW5kcyBTdGF0ZW1lbnQge1xuXG4gIGNvbnN0cnVjdG9yKGNvbGxlY3Rpb24sIHZhbHVlcywgbG9jYXRpb24pIHtcblxuICAgIHN1cGVyKCk7XG4gICAgdGhpcy50eXBlID0gJ2luc2VydC1zdGF0ZW1lbnQnO1xuICAgIHRoaXMuY29sbGVjdGlvbiA9IGNvbGxlY3Rpb247XG4gICAgdGhpcy52YWx1ZXMgPSB2YWx1ZXM7XG4gICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gIH1cblxuICBleGVjdXRlKGRiLCBjb250ZXh0KSB7XG5cbiAgICByZXR1cm4gZGIuY29sbGVjdGlvbih0aGlzLmNvbGxlY3Rpb24uYXNWYWx1ZShjb250ZXh0KSkuXG4gICAgaW5zZXJ0T25lKHRoaXMudmFsdWVzLmFzVmFsdWUoY29udGV4dCkpO1xuXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnNlcnRTdGF0ZW1lbnRcblxuIl19