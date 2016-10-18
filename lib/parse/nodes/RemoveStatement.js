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

            this.where.forEach(function (w) {
                return w.apply(where, context);
            });

            return this.one ? db.collection(this.collection.asValue(context)).deleteOne(where) : db.collection(this.collection.asValue(context)).deleteMany(where);
        }
    }]);

    return RemoveStatement;
}(_Node3.default);

exports.default = RemoveStatement;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9SZW1vdmVTdGF0ZW1lbnQuanMiXSwibmFtZXMiOlsiUmVtb3ZlU3RhdGVtZW50IiwiY29sbGVjdGlvbiIsIndoZXJlIiwib25lIiwibG9jYXRpb24iLCJ0eXBlIiwiZGIiLCJjb250ZXh0IiwiY3Vyc29yIiwiZm9yRWFjaCIsInciLCJhcHBseSIsImFzVmFsdWUiLCJkZWxldGVPbmUiLCJkZWxldGVNYW55Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR01BLGU7OztBQUVGLDZCQUFZQyxVQUFaLEVBQXdCQyxLQUF4QixFQUErQkMsR0FBL0IsRUFBb0NDLFFBQXBDLEVBQThDO0FBQUE7O0FBQUE7O0FBRzFDLGNBQUtDLElBQUwsR0FBWSxrQkFBWjtBQUNBLGNBQUtKLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsY0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsY0FBS0MsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBUDBDO0FBUzdDOzs7O2dDQUVPRSxFLEVBQUlDLE8sRUFBUzs7QUFFakIsZ0JBQUlMLFFBQVEsRUFBWjtBQUNBLGdCQUFJTSxNQUFKOztBQUVBLGlCQUFLTixLQUFMLENBQVdPLE9BQVgsQ0FBbUI7QUFBQSx1QkFBS0MsRUFBRUMsS0FBRixDQUFRVCxLQUFSLEVBQWVLLE9BQWYsQ0FBTDtBQUFBLGFBQW5COztBQUVBLG1CQUFRLEtBQUtKLEdBQU4sR0FDSEcsR0FBR0wsVUFBSCxDQUFjLEtBQUtBLFVBQUwsQ0FBZ0JXLE9BQWhCLENBQXdCTCxPQUF4QixDQUFkLEVBQWdETSxTQUFoRCxDQUEwRFgsS0FBMUQsQ0FERyxHQUVISSxHQUFHTCxVQUFILENBQWMsS0FBS0EsVUFBTCxDQUFnQlcsT0FBaEIsQ0FBd0JMLE9BQXhCLENBQWQsRUFBZ0RPLFVBQWhELENBQTJEWixLQUEzRCxDQUZKO0FBSUg7Ozs7OztrQkFJVUYsZSIsImZpbGUiOiJSZW1vdmVTdGF0ZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIFJlbW92ZVN0YXRlbWVudCBcbiAqL1xuY2xhc3MgUmVtb3ZlU3RhdGVtZW50IGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb2xsZWN0aW9uLCB3aGVyZSwgb25lLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdyZW1vdmUtc3RhdGVtZW50JztcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uID0gY29sbGVjdGlvbjtcbiAgICAgICAgdGhpcy53aGVyZSA9IHdoZXJlO1xuICAgICAgICB0aGlzLm9uZSA9IG9uZTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgZXhlY3V0ZShkYiwgY29udGV4dCkge1xuXG4gICAgICAgIHZhciB3aGVyZSA9IHt9O1xuICAgICAgICB2YXIgY3Vyc29yO1xuXG4gICAgICAgIHRoaXMud2hlcmUuZm9yRWFjaCh3ID0+IHcuYXBwbHkod2hlcmUsIGNvbnRleHQpKTtcblxuICAgICAgICByZXR1cm4gKHRoaXMub25lKSA/XG4gICAgICAgICAgICBkYi5jb2xsZWN0aW9uKHRoaXMuY29sbGVjdGlvbi5hc1ZhbHVlKGNvbnRleHQpKS5kZWxldGVPbmUod2hlcmUpIDpcbiAgICAgICAgICAgIGRiLmNvbGxlY3Rpb24odGhpcy5jb2xsZWN0aW9uLmFzVmFsdWUoY29udGV4dCkpLmRlbGV0ZU1hbnkod2hlcmUpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbW92ZVN0YXRlbWVudFxuIl19