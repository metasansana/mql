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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9SZW1vdmVTdGF0ZW1lbnQuanMiXSwibmFtZXMiOlsiUmVtb3ZlU3RhdGVtZW50IiwiY29sbGVjdGlvbiIsIndoZXJlIiwib25lIiwibG9jYXRpb24iLCJ0eXBlIiwiZGIiLCJjb250ZXh0IiwiY3Vyc29yIiwicmVkdWNlIiwicHJldiIsImN1cnIiLCJhcHBseSIsImFzVmFsdWUiLCJkZWxldGVPbmUiLCJkZWxldGVNYW55Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR01BLGU7OztBQUVKLDJCQUFZQyxVQUFaLEVBQXdCQyxLQUF4QixFQUErQkMsR0FBL0IsRUFBb0NDLFFBQXBDLEVBQThDO0FBQUE7O0FBQUE7O0FBRzVDLFVBQUtDLElBQUwsR0FBWSxrQkFBWjtBQUNBLFVBQUtKLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsVUFBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsVUFBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBUDRDO0FBUzdDOzs7OzRCQUVPRSxFLEVBQUlDLE8sRUFBUzs7QUFFbkIsVUFBSUwsUUFBUSxFQUFaO0FBQ0EsVUFBSU0sTUFBSjs7QUFFQU4sY0FBUSxLQUFLQSxLQUFMLENBQVdPLE1BQVgsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFPQyxJQUFQO0FBQUEsZUFBZ0JBLEtBQUtDLEtBQUwsQ0FBV0YsSUFBWCxFQUFpQkgsT0FBakIsQ0FBaEI7QUFBQSxPQUFsQixFQUE2REwsS0FBN0QsQ0FBUjs7QUFFQSxhQUFRLEtBQUtDLEdBQU4sR0FDTEcsR0FBR0wsVUFBSCxDQUFjLEtBQUtBLFVBQUwsQ0FBZ0JZLE9BQWhCLENBQXdCTixPQUF4QixDQUFkLEVBQWdETyxTQUFoRCxDQUEwRFosS0FBMUQsQ0FESyxHQUVMSSxHQUFHTCxVQUFILENBQWMsS0FBS0EsVUFBTCxDQUFnQlksT0FBaEIsQ0FBd0JOLE9BQXhCLENBQWQsRUFBZ0RRLFVBQWhELENBQTJEYixLQUEzRCxDQUZGO0FBSUQ7Ozs7OztrQkFJWUYsZSIsImZpbGUiOiJSZW1vdmVTdGF0ZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIFJlbW92ZVN0YXRlbWVudFxuICovXG5jbGFzcyBSZW1vdmVTdGF0ZW1lbnQgZXh0ZW5kcyBOb2RlIHtcblxuICBjb25zdHJ1Y3Rvcihjb2xsZWN0aW9uLCB3aGVyZSwgb25lLCBsb2NhdGlvbikge1xuXG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnR5cGUgPSAncmVtb3ZlLXN0YXRlbWVudCc7XG4gICAgdGhpcy5jb2xsZWN0aW9uID0gY29sbGVjdGlvbjtcbiAgICB0aGlzLndoZXJlID0gd2hlcmU7XG4gICAgdGhpcy5vbmUgPSBvbmU7XG4gICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gIH1cblxuICBleGVjdXRlKGRiLCBjb250ZXh0KSB7XG5cbiAgICB2YXIgd2hlcmUgPSB7fTtcbiAgICB2YXIgY3Vyc29yO1xuXG4gICAgd2hlcmUgPSB0aGlzLndoZXJlLnJlZHVjZSgocHJldiwgY3VycikgPT4gY3Vyci5hcHBseShwcmV2LCBjb250ZXh0KSwgd2hlcmUpO1xuXG4gICAgcmV0dXJuICh0aGlzLm9uZSkgP1xuICAgICAgZGIuY29sbGVjdGlvbih0aGlzLmNvbGxlY3Rpb24uYXNWYWx1ZShjb250ZXh0KSkuZGVsZXRlT25lKHdoZXJlKSA6XG4gICAgICBkYi5jb2xsZWN0aW9uKHRoaXMuY29sbGVjdGlvbi5hc1ZhbHVlKGNvbnRleHQpKS5kZWxldGVNYW55KHdoZXJlKTtcblxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVtb3ZlU3RhdGVtZW50XG5cbiJdfQ==