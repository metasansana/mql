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
 * UpdateStatement 
 */
var UpdateStatement = function (_Node) {
    _inherits(UpdateStatement, _Node);

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

            this.where.forEach(function (w) {
                return w.apply(where, context);
            });

            return this.once ? db.collection(this.collection.asValue(context)).updateOne(where, update) : db.collection(this.collection.asValue(context)).updateMany(where, update);
        }
    }]);

    return UpdateStatement;
}(_Node3.default);

exports.default = UpdateStatement;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9VcGRhdGVTdGF0ZW1lbnQuanMiXSwibmFtZXMiOlsiVXBkYXRlU3RhdGVtZW50IiwiY29sbGVjdGlvbiIsInZhbHVlcyIsIndoZXJlIiwib25jZSIsImxvY2F0aW9uIiwidHlwZSIsImRiIiwiY29udGV4dCIsInVwZGF0ZSIsIiRzZXQiLCJhc1ZhbHVlIiwiZm9yRWFjaCIsInciLCJhcHBseSIsInVwZGF0ZU9uZSIsInVwZGF0ZU1hbnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHTUEsZTs7O0FBRUYsNkJBQVlDLFVBQVosRUFBd0JDLE1BQXhCLEVBQWdDQyxLQUFoQyxFQUF1Q0MsSUFBdkMsRUFBNkNDLFFBQTdDLEVBQXVEO0FBQUE7O0FBQUE7O0FBR25ELGNBQUtDLElBQUwsR0FBWSxrQkFBWjtBQUNBLGNBQUtMLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsY0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsY0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsY0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBUm1EO0FBVXREOzs7O2dDQUVPRSxFLEVBQUlDLE8sRUFBUzs7QUFFakIsZ0JBQUlMLFFBQVEsRUFBWjtBQUNBLGdCQUFJTSxTQUFTO0FBQ1RDLHNCQUFNLEtBQUtSLE1BQUwsQ0FBWVMsT0FBWixDQUFvQkgsT0FBcEI7QUFERyxhQUFiOztBQUlBLGlCQUFLTCxLQUFMLENBQVdTLE9BQVgsQ0FBbUI7QUFBQSx1QkFBS0MsRUFBRUMsS0FBRixDQUFRWCxLQUFSLEVBQWVLLE9BQWYsQ0FBTDtBQUFBLGFBQW5COztBQUVBLG1CQUFRLEtBQUtKLElBQU4sR0FDSEcsR0FBR04sVUFBSCxDQUFjLEtBQUtBLFVBQUwsQ0FBZ0JVLE9BQWhCLENBQXdCSCxPQUF4QixDQUFkLEVBQWdETyxTQUFoRCxDQUEwRFosS0FBMUQsRUFBaUVNLE1BQWpFLENBREcsR0FFSEYsR0FBR04sVUFBSCxDQUFjLEtBQUtBLFVBQUwsQ0FBZ0JVLE9BQWhCLENBQXdCSCxPQUF4QixDQUFkLEVBQWdEUSxVQUFoRCxDQUEyRGIsS0FBM0QsRUFBa0VNLE1BQWxFLENBRko7QUFJSDs7Ozs7O2tCQUlVVCxlIiwiZmlsZSI6IlVwZGF0ZVN0YXRlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogVXBkYXRlU3RhdGVtZW50IFxuICovXG5jbGFzcyBVcGRhdGVTdGF0ZW1lbnQgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbGxlY3Rpb24sIHZhbHVlcywgd2hlcmUsIG9uY2UsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ3VwZGF0ZS1zdGF0ZW1lbnQnO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uO1xuICAgICAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcztcbiAgICAgICAgdGhpcy53aGVyZSA9IHdoZXJlO1xuICAgICAgICB0aGlzLm9uY2UgPSBvbmNlO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICBleGVjdXRlKGRiLCBjb250ZXh0KSB7XG5cbiAgICAgICAgdmFyIHdoZXJlID0ge307XG4gICAgICAgIHZhciB1cGRhdGUgPSB7XG4gICAgICAgICAgICAkc2V0OiB0aGlzLnZhbHVlcy5hc1ZhbHVlKGNvbnRleHQpXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy53aGVyZS5mb3JFYWNoKHcgPT4gdy5hcHBseSh3aGVyZSwgY29udGV4dCkpO1xuXG4gICAgICAgIHJldHVybiAodGhpcy5vbmNlKSA/XG4gICAgICAgICAgICBkYi5jb2xsZWN0aW9uKHRoaXMuY29sbGVjdGlvbi5hc1ZhbHVlKGNvbnRleHQpKS51cGRhdGVPbmUod2hlcmUsIHVwZGF0ZSkgOlxuICAgICAgICAgICAgZGIuY29sbGVjdGlvbih0aGlzLmNvbGxlY3Rpb24uYXNWYWx1ZShjb250ZXh0KSkudXBkYXRlTWFueSh3aGVyZSwgdXBkYXRlKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBVcGRhdGVTdGF0ZW1lbnRcbiJdfQ==