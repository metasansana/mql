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

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UpdateStatement).call(this));

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9VcGRhdGVTdGF0ZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7SUFHTSxlOzs7QUFFRiw2QkFBWSxVQUFaLEVBQXdCLE1BQXhCLEVBQWdDLEtBQWhDLEVBQXVDLElBQXZDLEVBQTZDLFFBQTdDLEVBQXVEO0FBQUE7O0FBQUE7O0FBR25ELGNBQUssSUFBTCxHQUFZLGtCQUFaO0FBQ0EsY0FBSyxVQUFMLEdBQWtCLFVBQWxCO0FBQ0EsY0FBSyxNQUFMLEdBQWMsTUFBZDtBQUNBLGNBQUssS0FBTCxHQUFhLEtBQWI7QUFDQSxjQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0EsY0FBSyxRQUFMLEdBQWdCLFFBQWhCOztBQVJtRDtBQVV0RDs7OztnQ0FFTyxFLEVBQUksTyxFQUFTOztBQUVqQixnQkFBSSxRQUFRLEVBQVo7QUFDQSxnQkFBSSxTQUFTO0FBQ1Qsc0JBQU0sS0FBSyxNQUFMLENBQVksT0FBWixDQUFvQixPQUFwQjtBQURHLGFBQWI7O0FBSUEsaUJBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUI7QUFBQSx1QkFBSyxFQUFFLEtBQUYsQ0FBUSxLQUFSLEVBQWUsT0FBZixDQUFMO0FBQUEsYUFBbkI7O0FBRUEsbUJBQVEsS0FBSyxJQUFOLEdBQ0gsR0FBRyxVQUFILENBQWMsS0FBSyxVQUFMLENBQWdCLE9BQWhCLENBQXdCLE9BQXhCLENBQWQsRUFBZ0QsU0FBaEQsQ0FBMEQsS0FBMUQsRUFBaUUsTUFBakUsQ0FERyxHQUVILEdBQUcsVUFBSCxDQUFjLEtBQUssVUFBTCxDQUFnQixPQUFoQixDQUF3QixPQUF4QixDQUFkLEVBQWdELFVBQWhELENBQTJELEtBQTNELEVBQWtFLE1BQWxFLENBRko7QUFJSDs7Ozs7O2tCQUlVLGUiLCJmaWxlIjoiVXBkYXRlU3RhdGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBVcGRhdGVTdGF0ZW1lbnQgXG4gKi9cbmNsYXNzIFVwZGF0ZVN0YXRlbWVudCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IoY29sbGVjdGlvbiwgdmFsdWVzLCB3aGVyZSwgb25jZSwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAndXBkYXRlLXN0YXRlbWVudCc7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbiA9IGNvbGxlY3Rpb247XG4gICAgICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xuICAgICAgICB0aGlzLndoZXJlID0gd2hlcmU7XG4gICAgICAgIHRoaXMub25jZSA9IG9uY2U7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIGV4ZWN1dGUoZGIsIGNvbnRleHQpIHtcblxuICAgICAgICB2YXIgd2hlcmUgPSB7fTtcbiAgICAgICAgdmFyIHVwZGF0ZSA9IHtcbiAgICAgICAgICAgICRzZXQ6IHRoaXMudmFsdWVzLmFzVmFsdWUoY29udGV4dClcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLndoZXJlLmZvckVhY2godyA9PiB3LmFwcGx5KHdoZXJlLCBjb250ZXh0KSk7XG5cbiAgICAgICAgcmV0dXJuICh0aGlzLm9uY2UpID9cbiAgICAgICAgICAgIGRiLmNvbGxlY3Rpb24odGhpcy5jb2xsZWN0aW9uLmFzVmFsdWUoY29udGV4dCkpLnVwZGF0ZU9uZSh3aGVyZSwgdXBkYXRlKSA6XG4gICAgICAgICAgICBkYi5jb2xsZWN0aW9uKHRoaXMuY29sbGVjdGlvbi5hc1ZhbHVlKGNvbnRleHQpKS51cGRhdGVNYW55KHdoZXJlLCB1cGRhdGUpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVwZGF0ZVN0YXRlbWVudFxuIl19