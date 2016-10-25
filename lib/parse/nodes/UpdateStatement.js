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
 * UpdateStatement
 */
var UpdateStatement = function (_Statement) {
    _inherits(UpdateStatement, _Statement);

    function UpdateStatement(collection, values, where, once, location) {
        _classCallCheck(this, UpdateStatement);

        var _this = _possibleConstructorReturn(this, (UpdateStatement.__proto__ || Object.getPrototypeOf(UpdateStatement)).call(this));

        _this.type = 'update-statement';
        _this.collection = collection;
        _this.values = values;
        _this.where = where;
        _this.once = once;
        _this.location = location;

        return _this;
    }

    _createClass(UpdateStatement, [{
        key: 'execute',
        value: function execute(db, context) {

            var where = {};
            var update = {
                $set: this.values.asValue(context)
            };

            where = this.where.reduce(function (prev, curr) {
                return curr.apply(prev, context);
            }, where);

            return this.once ? db.collection(this.collection.asValue(context)).updateOne(where, update) : db.collection(this.collection.asValue(context)).updateMany(where, update);
        }
    }]);

    return UpdateStatement;
}(_Statement3.default);

exports.default = UpdateStatement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9VcGRhdGVTdGF0ZW1lbnQuanMiXSwibmFtZXMiOlsiVXBkYXRlU3RhdGVtZW50IiwiY29sbGVjdGlvbiIsInZhbHVlcyIsIndoZXJlIiwib25jZSIsImxvY2F0aW9uIiwidHlwZSIsImRiIiwiY29udGV4dCIsInVwZGF0ZSIsIiRzZXQiLCJhc1ZhbHVlIiwicmVkdWNlIiwicHJldiIsImN1cnIiLCJhcHBseSIsInVwZGF0ZU9uZSIsInVwZGF0ZU1hbnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHTUEsZTs7O0FBRUYsNkJBQVlDLFVBQVosRUFBd0JDLE1BQXhCLEVBQWdDQyxLQUFoQyxFQUF1Q0MsSUFBdkMsRUFBNkNDLFFBQTdDLEVBQXVEO0FBQUE7O0FBQUE7O0FBR25ELGNBQUtDLElBQUwsR0FBWSxrQkFBWjtBQUNBLGNBQUtMLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsY0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsY0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsY0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBUm1EO0FBVXREOzs7O2dDQUVPRSxFLEVBQUlDLE8sRUFBUzs7QUFFakIsZ0JBQUlMLFFBQVEsRUFBWjtBQUNBLGdCQUFJTSxTQUFTO0FBQ1RDLHNCQUFNLEtBQUtSLE1BQUwsQ0FBWVMsT0FBWixDQUFvQkgsT0FBcEI7QUFERyxhQUFiOztBQUlKTCxvQkFBUSxLQUFLQSxLQUFMLENBQVdTLE1BQVgsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFPQyxJQUFQO0FBQUEsdUJBQWdCQSxLQUFLQyxLQUFMLENBQVdGLElBQVgsRUFBaUJMLE9BQWpCLENBQWhCO0FBQUEsYUFBbEIsRUFBNkRMLEtBQTdELENBQVI7O0FBRUksbUJBQVEsS0FBS0MsSUFBTixHQUNIRyxHQUFHTixVQUFILENBQWMsS0FBS0EsVUFBTCxDQUFnQlUsT0FBaEIsQ0FBd0JILE9BQXhCLENBQWQsRUFBZ0RRLFNBQWhELENBQTBEYixLQUExRCxFQUFpRU0sTUFBakUsQ0FERyxHQUVIRixHQUFHTixVQUFILENBQWMsS0FBS0EsVUFBTCxDQUFnQlUsT0FBaEIsQ0FBd0JILE9BQXhCLENBQWQsRUFBZ0RTLFVBQWhELENBQTJEZCxLQUEzRCxFQUFrRU0sTUFBbEUsQ0FGSjtBQUlIOzs7Ozs7a0JBSVVULGUiLCJmaWxlIjoiVXBkYXRlU3RhdGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0YXRlbWVudCBmcm9tICcuL1N0YXRlbWVudCc7XG5cbi8qKlxuICogVXBkYXRlU3RhdGVtZW50XG4gKi9cbmNsYXNzIFVwZGF0ZVN0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb2xsZWN0aW9uLCB2YWx1ZXMsIHdoZXJlLCBvbmNlLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICd1cGRhdGUtc3RhdGVtZW50JztcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uID0gY29sbGVjdGlvbjtcbiAgICAgICAgdGhpcy52YWx1ZXMgPSB2YWx1ZXM7XG4gICAgICAgIHRoaXMud2hlcmUgPSB3aGVyZTtcbiAgICAgICAgdGhpcy5vbmNlID0gb25jZTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgZXhlY3V0ZShkYiwgY29udGV4dCkge1xuXG4gICAgICAgIHZhciB3aGVyZSA9IHt9O1xuICAgICAgICB2YXIgdXBkYXRlID0ge1xuICAgICAgICAgICAgJHNldDogdGhpcy52YWx1ZXMuYXNWYWx1ZShjb250ZXh0KVxuICAgICAgICB9O1xuXG4gICAgd2hlcmUgPSB0aGlzLndoZXJlLnJlZHVjZSgocHJldiwgY3VycikgPT4gY3Vyci5hcHBseShwcmV2LCBjb250ZXh0KSwgd2hlcmUpO1xuXG4gICAgICAgIHJldHVybiAodGhpcy5vbmNlKSA/XG4gICAgICAgICAgICBkYi5jb2xsZWN0aW9uKHRoaXMuY29sbGVjdGlvbi5hc1ZhbHVlKGNvbnRleHQpKS51cGRhdGVPbmUod2hlcmUsIHVwZGF0ZSkgOlxuICAgICAgICAgICAgZGIuY29sbGVjdGlvbih0aGlzLmNvbGxlY3Rpb24uYXNWYWx1ZShjb250ZXh0KSkudXBkYXRlTWFueSh3aGVyZSwgdXBkYXRlKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBVcGRhdGVTdGF0ZW1lbnRcbiJdfQ==