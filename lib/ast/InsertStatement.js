'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Statement2 = require('./Statement');

var _Statement3 = _interopRequireDefault(_Statement2);

var _DefaultResultHandler = require('../DefaultResultHandler');

var _DefaultResultHandler2 = _interopRequireDefault(_DefaultResultHandler);

var _DefaultErrorHandler = require('../DefaultErrorHandler');

var _DefaultErrorHandler2 = _interopRequireDefault(_DefaultErrorHandler);

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
        _this.db = null;

        return _this;
    }

    _createClass(InsertStatement, [{
        key: 'clone',
        value: function clone() {

            return new InsertStatement(this.collection, this.values, this.location);
        }
    }, {
        key: 'execute',
        value: function execute() {
            var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.context;
            var resultHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _DefaultResultHandler2.default;
            var errorHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _DefaultErrorHandler2.default;


            var db = this.db;

            return db.collection(this.collection.asValue(context)).insertOne(this.values.asValue(context)).then(function (result) {
                return resultHandler.onResult(result);
            }).catch(function (e) {
                return errorHandler.onError(e);
            });
        }
    }]);

    return InsertStatement;
}(_Statement3.default);

exports.default = InsertStatement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3QvSW5zZXJ0U3RhdGVtZW50LmpzIl0sIm5hbWVzIjpbIkluc2VydFN0YXRlbWVudCIsImNvbGxlY3Rpb24iLCJ2YWx1ZXMiLCJsb2NhdGlvbiIsInR5cGUiLCJkYiIsImNvbnRleHQiLCJyZXN1bHRIYW5kbGVyIiwiZXJyb3JIYW5kbGVyIiwiYXNWYWx1ZSIsImluc2VydE9uZSIsInRoZW4iLCJvblJlc3VsdCIsInJlc3VsdCIsImNhdGNoIiwib25FcnJvciIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR01BLGU7OztBQUVGLDZCQUFZQyxVQUFaLEVBQXdCQyxNQUF4QixFQUFnQ0MsUUFBaEMsRUFBMEM7QUFBQTs7QUFBQTs7QUFHdEMsY0FBS0MsSUFBTCxHQUFZLGtCQUFaO0FBQ0EsY0FBS0gsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxjQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxjQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLGNBQUtFLEVBQUwsR0FBVSxJQUFWOztBQVBzQztBQVN6Qzs7OztnQ0FFTzs7QUFFSixtQkFBTyxJQUFJTCxlQUFKLENBQW9CLEtBQUtDLFVBQXpCLEVBQXFDLEtBQUtDLE1BQTFDLEVBQWtELEtBQUtDLFFBQXZELENBQVA7QUFFSDs7O2tDQUl1QztBQUFBLGdCQUZoQ0csT0FFZ0MsdUVBRnRCLEtBQUtBLE9BRWlCO0FBQUEsZ0JBRHBDQyxhQUNvQztBQUFBLGdCQUFwQ0MsWUFBb0M7OztBQUVwQyxnQkFBSUgsS0FBSyxLQUFLQSxFQUFkOztBQUVBLG1CQUFPQSxHQUFHSixVQUFILENBQWMsS0FBS0EsVUFBTCxDQUFnQlEsT0FBaEIsQ0FBd0JILE9BQXhCLENBQWQsRUFDUEksU0FETyxDQUNHLEtBQUtSLE1BQUwsQ0FBWU8sT0FBWixDQUFvQkgsT0FBcEIsQ0FESCxFQUVQSyxJQUZPLENBRUY7QUFBQSx1QkFBVUosY0FBY0ssUUFBZCxDQUF1QkMsTUFBdkIsQ0FBVjtBQUFBLGFBRkUsRUFHUEMsS0FITyxDQUdEO0FBQUEsdUJBQUtOLGFBQWFPLE9BQWIsQ0FBcUJDLENBQXJCLENBQUw7QUFBQSxhQUhDLENBQVA7QUFLSDs7Ozs7O2tCQUlVaEIsZSIsImZpbGUiOiJJbnNlcnRTdGF0ZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RhdGVtZW50IGZyb20gJy4vU3RhdGVtZW50JztcbmltcG9ydCBEZWZhdWx0UmVzdWx0SGFuZGxlciBmcm9tICcuLi9EZWZhdWx0UmVzdWx0SGFuZGxlcic7XG5pbXBvcnQgRGVmYXVsdEVycm9ySGFuZGxlciBmcm9tICcuLi9EZWZhdWx0RXJyb3JIYW5kbGVyJztcblxuLyoqXG4gKiBJbnNlcnRTdGF0ZW1lbnRcbiAqL1xuY2xhc3MgSW5zZXJ0U3RhdGVtZW50IGV4dGVuZHMgU3RhdGVtZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbGxlY3Rpb24sIHZhbHVlcywgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnaW5zZXJ0LXN0YXRlbWVudCc7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbiA9IGNvbGxlY3Rpb247XG4gICAgICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG4gICAgICAgIHRoaXMuZGIgPSBudWxsO1xuXG4gICAgfVxuXG4gICAgY2xvbmUoKSB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBJbnNlcnRTdGF0ZW1lbnQodGhpcy5jb2xsZWN0aW9uLCB0aGlzLnZhbHVlcywgdGhpcy5sb2NhdGlvbik7XG5cbiAgICB9XG5cbiAgICBleGVjdXRlKGNvbnRleHQgPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHJlc3VsdEhhbmRsZXIgPSBEZWZhdWx0UmVzdWx0SGFuZGxlcixcbiAgICAgICAgZXJyb3JIYW5kbGVyID0gRGVmYXVsdEVycm9ySGFuZGxlcikge1xuXG4gICAgICAgIHZhciBkYiA9IHRoaXMuZGI7XG5cbiAgICAgICAgcmV0dXJuIGRiLmNvbGxlY3Rpb24odGhpcy5jb2xsZWN0aW9uLmFzVmFsdWUoY29udGV4dCkpLlxuICAgICAgICBpbnNlcnRPbmUodGhpcy52YWx1ZXMuYXNWYWx1ZShjb250ZXh0KSkuXG4gICAgICAgIHRoZW4ocmVzdWx0ID0+IHJlc3VsdEhhbmRsZXIub25SZXN1bHQocmVzdWx0KSkuXG4gICAgICAgIGNhdGNoKGUgPT4gZXJyb3JIYW5kbGVyLm9uRXJyb3IoZSkpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc2VydFN0YXRlbWVudFxuIl19