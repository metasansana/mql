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
 * RemoveStatement
 */
var RemoveStatement = function (_Node) {
  _inherits(RemoveStatement, _Node);

  function RemoveStatement(collection, where, one, location) {
    _classCallCheck(this, RemoveStatement);

    var _this = _possibleConstructorReturn(this, (RemoveStatement.__proto__ || Object.getPrototypeOf(RemoveStatement)).call(this));

    _this.type = 'remove-statement';
    _this.collection = collection;
    _this.where = where;
    _this.one = one;
    _this.location = location;

    return _this;
  }

  _createClass(RemoveStatement, [{
    key: 'execute',
    value: function execute(db, context) {

      var where = {};
      var cursor;

      where = this.where.reduce(function (prev, curr) {
        return curr.apply(prev, context);
      }, where);

      return this.one ? db.collection(this.collection.asValue(context)).deleteOne(where) : db.collection(this.collection.asValue(context)).deleteMany(where);
    }
  }]);

  return RemoveStatement;
}(_Node3.default);

exports.default = RemoveStatement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9hc3QvUmVtb3ZlU3RhdGVtZW50LmpzIl0sIm5hbWVzIjpbIlJlbW92ZVN0YXRlbWVudCIsImNvbGxlY3Rpb24iLCJ3aGVyZSIsIm9uZSIsImxvY2F0aW9uIiwidHlwZSIsImRiIiwiY29udGV4dCIsImN1cnNvciIsInJlZHVjZSIsInByZXYiLCJjdXJyIiwiYXBwbHkiLCJhc1ZhbHVlIiwiZGVsZXRlT25lIiwiZGVsZXRlTWFueSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxlOzs7QUFFSiwyQkFBWUMsVUFBWixFQUF3QkMsS0FBeEIsRUFBK0JDLEdBQS9CLEVBQW9DQyxRQUFwQyxFQUE4QztBQUFBOztBQUFBOztBQUc1QyxVQUFLQyxJQUFMLEdBQVksa0JBQVo7QUFDQSxVQUFLSixVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFVBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFVBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFVBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQVA0QztBQVM3Qzs7Ozs0QkFFT0UsRSxFQUFJQyxPLEVBQVM7O0FBRW5CLFVBQUlMLFFBQVEsRUFBWjtBQUNBLFVBQUlNLE1BQUo7O0FBRUFOLGNBQVEsS0FBS0EsS0FBTCxDQUFXTyxNQUFYLENBQWtCLFVBQUNDLElBQUQsRUFBT0MsSUFBUDtBQUFBLGVBQWdCQSxLQUFLQyxLQUFMLENBQVdGLElBQVgsRUFBaUJILE9BQWpCLENBQWhCO0FBQUEsT0FBbEIsRUFBNkRMLEtBQTdELENBQVI7O0FBRUEsYUFBUSxLQUFLQyxHQUFOLEdBQ0xHLEdBQUdMLFVBQUgsQ0FBYyxLQUFLQSxVQUFMLENBQWdCWSxPQUFoQixDQUF3Qk4sT0FBeEIsQ0FBZCxFQUFnRE8sU0FBaEQsQ0FBMERaLEtBQTFELENBREssR0FFTEksR0FBR0wsVUFBSCxDQUFjLEtBQUtBLFVBQUwsQ0FBZ0JZLE9BQWhCLENBQXdCTixPQUF4QixDQUFkLEVBQWdEUSxVQUFoRCxDQUEyRGIsS0FBM0QsQ0FGRjtBQUlEOzs7Ozs7a0JBSVlGLGUiLCJmaWxlIjoiUmVtb3ZlU3RhdGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBSZW1vdmVTdGF0ZW1lbnRcbiAqL1xuY2xhc3MgUmVtb3ZlU3RhdGVtZW50IGV4dGVuZHMgTm9kZSB7XG5cbiAgY29uc3RydWN0b3IoY29sbGVjdGlvbiwgd2hlcmUsIG9uZSwgbG9jYXRpb24pIHtcblxuICAgIHN1cGVyKCk7XG4gICAgdGhpcy50eXBlID0gJ3JlbW92ZS1zdGF0ZW1lbnQnO1xuICAgIHRoaXMuY29sbGVjdGlvbiA9IGNvbGxlY3Rpb247XG4gICAgdGhpcy53aGVyZSA9IHdoZXJlO1xuICAgIHRoaXMub25lID0gb25lO1xuICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICB9XG5cbiAgZXhlY3V0ZShkYiwgY29udGV4dCkge1xuXG4gICAgdmFyIHdoZXJlID0ge307XG4gICAgdmFyIGN1cnNvcjtcblxuICAgIHdoZXJlID0gdGhpcy53aGVyZS5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IGN1cnIuYXBwbHkocHJldiwgY29udGV4dCksIHdoZXJlKTtcblxuICAgIHJldHVybiAodGhpcy5vbmUpID9cbiAgICAgIGRiLmNvbGxlY3Rpb24odGhpcy5jb2xsZWN0aW9uLmFzVmFsdWUoY29udGV4dCkpLmRlbGV0ZU9uZSh3aGVyZSkgOlxuICAgICAgZGIuY29sbGVjdGlvbih0aGlzLmNvbGxlY3Rpb24uYXNWYWx1ZShjb250ZXh0KSkuZGVsZXRlTWFueSh3aGVyZSk7XG5cbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbW92ZVN0YXRlbWVudFxuXG4iXX0=