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
 * RemoveStatement
 */
var RemoveStatement = function (_Statement) {
    _inherits(RemoveStatement, _Statement);

    function RemoveStatement(collection, where, one, location) {
        _classCallCheck(this, RemoveStatement);

        var _this = _possibleConstructorReturn(this, (RemoveStatement.__proto__ || Object.getPrototypeOf(RemoveStatement)).call(this));

        _this.type = 'remove-statement';
        _this.collection = collection;
        _this.where = where;
        _this.one = one;
        _this.location = location;
        _this.db = null;

        return _this;
    }

    _createClass(RemoveStatement, [{
        key: 'clone',
        value: function clone() {

            return new RemoveStatement(this.collection, this.where, this.one, this.location);
        }
    }, {
        key: 'execute',
        value: function execute() {
            var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.context;
            var resultHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _DefaultResultHandler2.default;
            var errorHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _DefaultErrorHandler2.default;


            var where = {};
            var db = this.db;

            where = this.where.reduce(function (prev, curr) {
                return curr.apply(prev, context);
            }, where);

            return (this.one ? db.collection(this.collection.asValue(context)).deleteOne(where) : db.collection(this.collection.asValue(context)).deleteMany(where)).then(function (result) {
                return resultHandler.onResult(result);
            }).catch(function (e) {
                return errorHandler.onError(e);
            });
        }
    }]);

    return RemoveStatement;
}(_Statement3.default);

exports.default = RemoveStatement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3QvUmVtb3ZlU3RhdGVtZW50LmpzIl0sIm5hbWVzIjpbIlJlbW92ZVN0YXRlbWVudCIsImNvbGxlY3Rpb24iLCJ3aGVyZSIsIm9uZSIsImxvY2F0aW9uIiwidHlwZSIsImRiIiwiY29udGV4dCIsInJlc3VsdEhhbmRsZXIiLCJlcnJvckhhbmRsZXIiLCJyZWR1Y2UiLCJwcmV2IiwiY3VyciIsImFwcGx5IiwiYXNWYWx1ZSIsImRlbGV0ZU9uZSIsImRlbGV0ZU1hbnkiLCJ0aGVuIiwib25SZXN1bHQiLCJyZXN1bHQiLCJjYXRjaCIsIm9uRXJyb3IiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxlOzs7QUFFRiw2QkFBWUMsVUFBWixFQUF3QkMsS0FBeEIsRUFBK0JDLEdBQS9CLEVBQW9DQyxRQUFwQyxFQUE4QztBQUFBOztBQUFBOztBQUcxQyxjQUFLQyxJQUFMLEdBQVksa0JBQVo7QUFDQSxjQUFLSixVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLGNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGNBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsY0FBS0UsRUFBTCxHQUFVLElBQVY7O0FBUjBDO0FBVTdDOzs7O2dDQUVPOztBQUVKLG1CQUFPLElBQUlOLGVBQUosQ0FBb0IsS0FBS0MsVUFBekIsRUFBcUMsS0FBS0MsS0FBMUMsRUFBaUQsS0FBS0MsR0FBdEQsRUFBMkQsS0FBS0MsUUFBaEUsQ0FBUDtBQUVIOzs7a0NBS3VDO0FBQUEsZ0JBRmhDRyxPQUVnQyx1RUFGdEIsS0FBS0EsT0FFaUI7QUFBQSxnQkFEcENDLGFBQ29DO0FBQUEsZ0JBQXBDQyxZQUFvQzs7O0FBRXBDLGdCQUFJUCxRQUFRLEVBQVo7QUFDQSxnQkFBSUksS0FBSyxLQUFLQSxFQUFkOztBQUVBSixvQkFBUSxLQUFLQSxLQUFMLENBQVdRLE1BQVgsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFPQyxJQUFQO0FBQUEsdUJBQWdCQSxLQUFLQyxLQUFMLENBQVdGLElBQVgsRUFBaUJKLE9BQWpCLENBQWhCO0FBQUEsYUFBbEIsRUFBNkRMLEtBQTdELENBQVI7O0FBRUEsbUJBQU8sQ0FBRSxLQUFLQyxHQUFOLEdBQ0pHLEdBQUdMLFVBQUgsQ0FBYyxLQUFLQSxVQUFMLENBQWdCYSxPQUFoQixDQUF3QlAsT0FBeEIsQ0FBZCxFQUFnRFEsU0FBaEQsQ0FBMERiLEtBQTFELENBREksR0FFSkksR0FBR0wsVUFBSCxDQUFjLEtBQUtBLFVBQUwsQ0FBZ0JhLE9BQWhCLENBQXdCUCxPQUF4QixDQUFkLEVBQWdEUyxVQUFoRCxDQUEyRGQsS0FBM0QsQ0FGRyxFQUdQZSxJQUhPLENBR0Y7QUFBQSx1QkFBVVQsY0FBY1UsUUFBZCxDQUF1QkMsTUFBdkIsQ0FBVjtBQUFBLGFBSEUsRUFJUEMsS0FKTyxDQUlEO0FBQUEsdUJBQUtYLGFBQWFZLE9BQWIsQ0FBcUJDLENBQXJCLENBQUw7QUFBQSxhQUpDLENBQVA7QUFPSDs7Ozs7O2tCQUlVdEIsZSIsImZpbGUiOiJSZW1vdmVTdGF0ZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RhdGVtZW50IGZyb20gJy4vU3RhdGVtZW50JztcbmltcG9ydCBEZWZhdWx0UmVzdWx0SGFuZGxlciBmcm9tICcuLi9EZWZhdWx0UmVzdWx0SGFuZGxlcic7XG5pbXBvcnQgRGVmYXVsdEVycm9ySGFuZGxlciBmcm9tICcuLi9EZWZhdWx0RXJyb3JIYW5kbGVyJztcblxuLyoqXG4gKiBSZW1vdmVTdGF0ZW1lbnRcbiAqL1xuY2xhc3MgUmVtb3ZlU3RhdGVtZW50IGV4dGVuZHMgU3RhdGVtZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbGxlY3Rpb24sIHdoZXJlLCBvbmUsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ3JlbW92ZS1zdGF0ZW1lbnQnO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uO1xuICAgICAgICB0aGlzLndoZXJlID0gd2hlcmU7XG4gICAgICAgIHRoaXMub25lID0gb25lO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG4gICAgICAgIHRoaXMuZGIgPSBudWxsO1xuXG4gICAgfVxuXG4gICAgY2xvbmUoKSB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBSZW1vdmVTdGF0ZW1lbnQodGhpcy5jb2xsZWN0aW9uLCB0aGlzLndoZXJlLCB0aGlzLm9uZSwgdGhpcy5sb2NhdGlvbik7XG5cbiAgICB9XG5cblxuICAgIGV4ZWN1dGUoY29udGV4dCA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgcmVzdWx0SGFuZGxlciA9IERlZmF1bHRSZXN1bHRIYW5kbGVyLFxuICAgICAgICBlcnJvckhhbmRsZXIgPSBEZWZhdWx0RXJyb3JIYW5kbGVyKSB7XG5cbiAgICAgICAgdmFyIHdoZXJlID0ge307XG4gICAgICAgIHZhciBkYiA9IHRoaXMuZGI7XG5cbiAgICAgICAgd2hlcmUgPSB0aGlzLndoZXJlLnJlZHVjZSgocHJldiwgY3VycikgPT4gY3Vyci5hcHBseShwcmV2LCBjb250ZXh0KSwgd2hlcmUpO1xuXG4gICAgICAgIHJldHVybiAoKHRoaXMub25lKSA/XG4gICAgICAgICAgICBkYi5jb2xsZWN0aW9uKHRoaXMuY29sbGVjdGlvbi5hc1ZhbHVlKGNvbnRleHQpKS5kZWxldGVPbmUod2hlcmUpIDpcbiAgICAgICAgICAgIGRiLmNvbGxlY3Rpb24odGhpcy5jb2xsZWN0aW9uLmFzVmFsdWUoY29udGV4dCkpLmRlbGV0ZU1hbnkod2hlcmUpKS5cbiAgICAgICAgdGhlbihyZXN1bHQgPT4gcmVzdWx0SGFuZGxlci5vblJlc3VsdChyZXN1bHQpKS5cbiAgICAgICAgY2F0Y2goZSA9PiBlcnJvckhhbmRsZXIub25FcnJvcihlKSk7XG5cblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBSZW1vdmVTdGF0ZW1lbnRcbiJdfQ==