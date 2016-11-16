'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

var _propertySeek = require('property-seek');

var _propertySeek2 = _interopRequireDefault(_propertySeek);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * InflateStatement
 * @param {array} fields
 * @param {string} collection
 * @param {string} alias
 */
var InflateStatement = function (_Node) {
    _inherits(InflateStatement, _Node);

    function InflateStatement(fields, collection, alias, where, modifiers, condition, location) {
        _classCallCheck(this, InflateStatement);

        var _this = _possibleConstructorReturn(this, (InflateStatement.__proto__ || Object.getPrototypeOf(InflateStatement)).call(this));

        _this.type = 'inflate-statement';
        _this.collection = collection;
        _this.alias = alias;
        _this.fields = fields;
        _this.where = where;
        _this.modifiers = modifiers;
        _this.condition = condition;
        _this.location = location;

        return _this;
    }

    _createClass(InflateStatement, [{
        key: 'apply',
        value: function apply(data, db, context) {
            var _this2 = this;

            var cursor;
            var target = this.condition.lkey.asValue(context);
            var alias = this.alias ? this.alias.asValue(context) : target;
            var where = this.condition.getWhereClause(data);
            var fields = {
                _id: false
            };

            fields = this.fields.reduce(function (prev, curr) {
                return curr.apply(prev, context);
            }, fields);

            this.where.forEach(function (w) {
                return w.apply(where, context);
            });

            cursor = db.collection(this.collection.asValue(context)).find(where, fields);

            this.modifiers.forEach(function (m) {
                return m.apply(cursor);
            });

            return cursor.toArray().then(function (docs) {

                return data.map(function (owner) {

                    if (!Array.isArray(_propertySeek2.default.get(owner, alias))) _propertySeek2.default.set(owner, target, []);

                    _propertySeek2.default.set(owner, alias, _propertySeek2.default.get(owner, target).map(function (valToReplace) {
                        return docs.reduce(function (prev, curr) {
                            return valToReplace != null && valToReplace === _propertySeek2.default.get(curr, _this2.condition.rkey.asValue(context)) ? curr : prev;
                        }, null);
                    }));

                    return owner;
                });
            });
        }
    }]);

    return InflateStatement;
}(_Node3.default);

exports.default = InflateStatement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9hc3QvSW5mbGF0ZVN0YXRlbWVudC5qcyJdLCJuYW1lcyI6WyJJbmZsYXRlU3RhdGVtZW50IiwiZmllbGRzIiwiY29sbGVjdGlvbiIsImFsaWFzIiwid2hlcmUiLCJtb2RpZmllcnMiLCJjb25kaXRpb24iLCJsb2NhdGlvbiIsInR5cGUiLCJkYXRhIiwiZGIiLCJjb250ZXh0IiwiY3Vyc29yIiwidGFyZ2V0IiwibGtleSIsImFzVmFsdWUiLCJnZXRXaGVyZUNsYXVzZSIsIl9pZCIsInJlZHVjZSIsInByZXYiLCJjdXJyIiwiYXBwbHkiLCJmb3JFYWNoIiwidyIsImZpbmQiLCJtIiwidG9BcnJheSIsInRoZW4iLCJtYXAiLCJBcnJheSIsImlzQXJyYXkiLCJnZXQiLCJvd25lciIsInNldCIsImRvY3MiLCJ2YWxUb1JlcGxhY2UiLCJya2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7SUFNTUEsZ0I7OztBQUVGLDhCQUFZQyxNQUFaLEVBQW9CQyxVQUFwQixFQUFnQ0MsS0FBaEMsRUFBdUNDLEtBQXZDLEVBQThDQyxTQUE5QyxFQUF5REMsU0FBekQsRUFBb0VDLFFBQXBFLEVBQThFO0FBQUE7O0FBQUE7O0FBRzFFLGNBQUtDLElBQUwsR0FBWSxtQkFBWjtBQUNBLGNBQUtOLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsY0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsY0FBS0YsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsY0FBS0csS0FBTCxHQUFhQSxLQUFiO0FBQ0EsY0FBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxjQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQVYwRTtBQVk3RTs7Ozs4QkFFS0UsSSxFQUFNQyxFLEVBQUlDLE8sRUFBUztBQUFBOztBQUVyQixnQkFBSUMsTUFBSjtBQUNBLGdCQUFJQyxTQUFTLEtBQUtQLFNBQUwsQ0FBZVEsSUFBZixDQUFvQkMsT0FBcEIsQ0FBNEJKLE9BQTVCLENBQWI7QUFDQSxnQkFBSVIsUUFBUyxLQUFLQSxLQUFOLEdBQWUsS0FBS0EsS0FBTCxDQUFXWSxPQUFYLENBQW1CSixPQUFuQixDQUFmLEdBQTZDRSxNQUF6RDtBQUNBLGdCQUFJVCxRQUFRLEtBQUtFLFNBQUwsQ0FBZVUsY0FBZixDQUE4QlAsSUFBOUIsQ0FBWjtBQUNBLGdCQUFJUixTQUFTO0FBQ1RnQixxQkFBSztBQURJLGFBQWI7O0FBSUFoQixxQkFBUyxLQUFLQSxNQUFMLENBQVlpQixNQUFaLENBQW1CLFVBQUNDLElBQUQsRUFBT0MsSUFBUDtBQUFBLHVCQUFnQkEsS0FBS0MsS0FBTCxDQUFXRixJQUFYLEVBQWlCUixPQUFqQixDQUFoQjtBQUFBLGFBQW5CLEVBQThEVixNQUE5RCxDQUFUOztBQUVBLGlCQUFLRyxLQUFMLENBQVdrQixPQUFYLENBQW1CO0FBQUEsdUJBQUtDLEVBQUVGLEtBQUYsQ0FBUWpCLEtBQVIsRUFBZU8sT0FBZixDQUFMO0FBQUEsYUFBbkI7O0FBRUFDLHFCQUFTRixHQUFHUixVQUFILENBQWMsS0FBS0EsVUFBTCxDQUFnQmEsT0FBaEIsQ0FBd0JKLE9BQXhCLENBQWQsRUFBZ0RhLElBQWhELENBQXFEcEIsS0FBckQsRUFBNERILE1BQTVELENBQVQ7O0FBRUEsaUJBQUtJLFNBQUwsQ0FBZWlCLE9BQWYsQ0FBdUI7QUFBQSx1QkFBS0csRUFBRUosS0FBRixDQUFRVCxNQUFSLENBQUw7QUFBQSxhQUF2Qjs7QUFFQSxtQkFBT0EsT0FBT2MsT0FBUCxHQUNQQyxJQURPLENBQ0YsZ0JBQVE7O0FBRUwsdUJBQU9sQixLQUFLbUIsR0FBTCxDQUFTLGlCQUFTOztBQUVqQix3QkFBSSxDQUFDQyxNQUFNQyxPQUFOLENBQWMsdUJBQVNDLEdBQVQsQ0FBYUMsS0FBYixFQUFvQjdCLEtBQXBCLENBQWQsQ0FBTCxFQUNJLHVCQUFTOEIsR0FBVCxDQUFhRCxLQUFiLEVBQW9CbkIsTUFBcEIsRUFBNEIsRUFBNUI7O0FBRUosMkNBQVNvQixHQUFULENBQWFELEtBQWIsRUFBb0I3QixLQUFwQixFQUEyQix1QkFBUzRCLEdBQVQsQ0FBYUMsS0FBYixFQUFvQm5CLE1BQXBCLEVBQTRCZSxHQUE1QixDQUFnQztBQUFBLCtCQUNuRE0sS0FBS2hCLE1BQUwsQ0FBWSxVQUFDQyxJQUFELEVBQU9DLElBQVA7QUFBQSxtQ0FDTmUsZ0JBQWdCLElBQWpCLElBQ0lBLGlCQUFpQix1QkFBU0osR0FBVCxDQUFhWCxJQUFiLEVBQW1CLE9BQUtkLFNBQUwsQ0FBZThCLElBQWYsQ0FBb0JyQixPQUFwQixDQUE0QkosT0FBNUIsQ0FBbkIsQ0FEdEIsR0FFSVMsSUFGSixHQUVXRCxJQUhIO0FBQUEseUJBQVosRUFHcUIsSUFIckIsQ0FEbUQ7QUFBQSxxQkFBaEMsQ0FBM0I7O0FBTUksMkJBQU9hLEtBQVA7QUFFSCxpQkFiRixDQUFQO0FBZUMsYUFsQkYsQ0FBUDtBQW9CQzs7Ozs7O2tCQUdVaEMsZ0IiLCJmaWxlIjoiSW5mbGF0ZVN0YXRlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5pbXBvcnQgUHJvcGVydHkgZnJvbSAncHJvcGVydHktc2Vlayc7XG5cbi8qKlxuICogSW5mbGF0ZVN0YXRlbWVudFxuICogQHBhcmFtIHthcnJheX0gZmllbGRzXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sbGVjdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IGFsaWFzXG4gKi9cbmNsYXNzIEluZmxhdGVTdGF0ZW1lbnQgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGZpZWxkcywgY29sbGVjdGlvbiwgYWxpYXMsIHdoZXJlLCBtb2RpZmllcnMsIGNvbmRpdGlvbiwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnaW5mbGF0ZS1zdGF0ZW1lbnQnO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uO1xuICAgICAgICB0aGlzLmFsaWFzID0gYWxpYXM7XG4gICAgICAgIHRoaXMuZmllbGRzID0gZmllbGRzO1xuICAgICAgICB0aGlzLndoZXJlID0gd2hlcmU7XG4gICAgICAgIHRoaXMubW9kaWZpZXJzID0gbW9kaWZpZXJzO1xuICAgICAgICB0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgYXBwbHkoZGF0YSwgZGIsIGNvbnRleHQpIHtcblxuICAgICAgICB2YXIgY3Vyc29yO1xuICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy5jb25kaXRpb24ubGtleS5hc1ZhbHVlKGNvbnRleHQpO1xuICAgICAgICB2YXIgYWxpYXMgPSAodGhpcy5hbGlhcykgPyB0aGlzLmFsaWFzLmFzVmFsdWUoY29udGV4dCkgOiB0YXJnZXQ7XG4gICAgICAgIHZhciB3aGVyZSA9IHRoaXMuY29uZGl0aW9uLmdldFdoZXJlQ2xhdXNlKGRhdGEpO1xuICAgICAgICB2YXIgZmllbGRzID0ge1xuICAgICAgICAgICAgX2lkOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIGZpZWxkcyA9IHRoaXMuZmllbGRzLnJlZHVjZSgocHJldiwgY3VycikgPT4gY3Vyci5hcHBseShwcmV2LCBjb250ZXh0KSwgZmllbGRzKTtcblxuICAgICAgICB0aGlzLndoZXJlLmZvckVhY2godyA9PiB3LmFwcGx5KHdoZXJlLCBjb250ZXh0KSk7XG5cbiAgICAgICAgY3Vyc29yID0gZGIuY29sbGVjdGlvbih0aGlzLmNvbGxlY3Rpb24uYXNWYWx1ZShjb250ZXh0KSkuZmluZCh3aGVyZSwgZmllbGRzKTtcblxuICAgICAgICB0aGlzLm1vZGlmaWVycy5mb3JFYWNoKG0gPT4gbS5hcHBseShjdXJzb3IpKTtcblxuICAgICAgICByZXR1cm4gY3Vyc29yLnRvQXJyYXkoKS5cbiAgICAgICAgdGhlbihkb2NzID0+IHtcblxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLm1hcChvd25lciA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShQcm9wZXJ0eS5nZXQob3duZXIsIGFsaWFzKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvcGVydHkuc2V0KG93bmVyLCB0YXJnZXQsIFtdKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvcGVydHkuc2V0KG93bmVyLCBhbGlhcywgUHJvcGVydHkuZ2V0KG93bmVyLCB0YXJnZXQpLm1hcCh2YWxUb1JlcGxhY2UgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jcy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKHZhbFRvUmVwbGFjZSAhPSBudWxsKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2YWxUb1JlcGxhY2UgPT09IFByb3BlcnR5LmdldChjdXJyLCB0aGlzLmNvbmRpdGlvbi5ya2V5LmFzVmFsdWUoY29udGV4dCkpKSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnIgOiBwcmV2LCBudWxsKSkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG93bmVyO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgZGVmYXVsdCBJbmZsYXRlU3RhdGVtZW50XG4iXX0=