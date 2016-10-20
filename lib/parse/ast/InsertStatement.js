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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9hc3QvSW5zZXJ0U3RhdGVtZW50LmpzIl0sIm5hbWVzIjpbIkluc2VydFN0YXRlbWVudCIsImNvbGxlY3Rpb24iLCJ2YWx1ZXMiLCJsb2NhdGlvbiIsInR5cGUiLCJkYiIsImNvbnRleHQiLCJhc1ZhbHVlIiwiaW5zZXJ0T25lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR01BLGU7OztBQUVKLDJCQUFZQyxVQUFaLEVBQXdCQyxNQUF4QixFQUFnQ0MsUUFBaEMsRUFBMEM7QUFBQTs7QUFBQTs7QUFHeEMsVUFBS0MsSUFBTCxHQUFZLGtCQUFaO0FBQ0EsVUFBS0gsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxVQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxVQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjs7QUFOd0M7QUFRekM7Ozs7NEJBRU9FLEUsRUFBSUMsTyxFQUFTOztBQUVuQixhQUFPRCxHQUFHSixVQUFILENBQWMsS0FBS0EsVUFBTCxDQUFnQk0sT0FBaEIsQ0FBd0JELE9BQXhCLENBQWQsRUFDUEUsU0FETyxDQUNHLEtBQUtOLE1BQUwsQ0FBWUssT0FBWixDQUFvQkQsT0FBcEIsQ0FESCxDQUFQO0FBR0Q7Ozs7OztrQkFJWU4sZSIsImZpbGUiOiJJbnNlcnRTdGF0ZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RhdGVtZW50IGZyb20gJy4vU3RhdGVtZW50JztcblxuLyoqXG4gKiBJbnNlcnRTdGF0ZW1lbnRcbiAqL1xuY2xhc3MgSW5zZXJ0U3RhdGVtZW50IGV4dGVuZHMgU3RhdGVtZW50IHtcblxuICBjb25zdHJ1Y3Rvcihjb2xsZWN0aW9uLCB2YWx1ZXMsIGxvY2F0aW9uKSB7XG5cbiAgICBzdXBlcigpO1xuICAgIHRoaXMudHlwZSA9ICdpbnNlcnQtc3RhdGVtZW50JztcbiAgICB0aGlzLmNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uO1xuICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xuICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICB9XG5cbiAgZXhlY3V0ZShkYiwgY29udGV4dCkge1xuXG4gICAgcmV0dXJuIGRiLmNvbGxlY3Rpb24odGhpcy5jb2xsZWN0aW9uLmFzVmFsdWUoY29udGV4dCkpLlxuICAgIGluc2VydE9uZSh0aGlzLnZhbHVlcy5hc1ZhbHVlKGNvbnRleHQpKTtcblxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zZXJ0U3RhdGVtZW50XG5cbiJdfQ==