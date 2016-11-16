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
 * LeftJoinStatement
 * @param {array} fields
 * @param {string} collection
 * @param {string} alias
 */
var LeftJoinStatement = function (_Node) {
    _inherits(LeftJoinStatement, _Node);

    function LeftJoinStatement(fields, collection, alias, where, modifiers, condition, location) {
        _classCallCheck(this, LeftJoinStatement);

        var _this = _possibleConstructorReturn(this, (LeftJoinStatement.__proto__ || Object.getPrototypeOf(LeftJoinStatement)).call(this));

        _this.type = 'left-join';
        _this.collection = collection;
        _this.alias = alias;
        _this.fields = fields;
        _this.where = where;
        _this.modifiers = modifiers;
        _this.condition = condition;
        _this.location = location;

        return _this;
    }

    _createClass(LeftJoinStatement, [{
        key: 'apply',
        value: function apply(data, db, context) {
            var _this2 = this;

            var cursor;
            var alias = this.alias.asValue();
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
                return data.map(function (d) {

                    if (!Array.isArray(_propertySeek2.default.get(d, alias))) _propertySeek2.default.set(d, alias, []);

                    docs.forEach(function (doc) {

                        if (_this2.condition.compare(d, doc)) _propertySeek2.default.get(d, alias).push(doc);
                    });

                    return d;
                });
            });
        }
    }]);

    return LeftJoinStatement;
}(_Node3.default);

exports.default = LeftJoinStatement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9hc3QvTGVmdEpvaW5TdGF0ZW1lbnQuanMiXSwibmFtZXMiOlsiTGVmdEpvaW5TdGF0ZW1lbnQiLCJmaWVsZHMiLCJjb2xsZWN0aW9uIiwiYWxpYXMiLCJ3aGVyZSIsIm1vZGlmaWVycyIsImNvbmRpdGlvbiIsImxvY2F0aW9uIiwidHlwZSIsImRhdGEiLCJkYiIsImNvbnRleHQiLCJjdXJzb3IiLCJhc1ZhbHVlIiwiZ2V0V2hlcmVDbGF1c2UiLCJfaWQiLCJyZWR1Y2UiLCJwcmV2IiwiY3VyciIsImFwcGx5IiwiZm9yRWFjaCIsInciLCJmaW5kIiwibSIsInRvQXJyYXkiLCJ0aGVuIiwibWFwIiwiQXJyYXkiLCJpc0FycmF5IiwiZ2V0IiwiZCIsInNldCIsImRvY3MiLCJjb21wYXJlIiwiZG9jIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7O0lBTU1BLGlCOzs7QUFFRiwrQkFBWUMsTUFBWixFQUFvQkMsVUFBcEIsRUFBZ0NDLEtBQWhDLEVBQXVDQyxLQUF2QyxFQUE4Q0MsU0FBOUMsRUFBeURDLFNBQXpELEVBQW9FQyxRQUFwRSxFQUE4RTtBQUFBOztBQUFBOztBQUcxRSxjQUFLQyxJQUFMLEdBQVksV0FBWjtBQUNBLGNBQUtOLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsY0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsY0FBS0YsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsY0FBS0csS0FBTCxHQUFhQSxLQUFiO0FBQ0EsY0FBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxjQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQVYwRTtBQVk3RTs7Ozs4QkFFS0UsSSxFQUFNQyxFLEVBQUlDLE8sRUFBUztBQUFBOztBQUVyQixnQkFBSUMsTUFBSjtBQUNBLGdCQUFJVCxRQUFRLEtBQUtBLEtBQUwsQ0FBV1UsT0FBWCxFQUFaO0FBQ0EsZ0JBQUlULFFBQVEsS0FBS0UsU0FBTCxDQUFlUSxjQUFmLENBQThCTCxJQUE5QixDQUFaO0FBQ0EsZ0JBQUlSLFNBQVM7QUFDVGMscUJBQUs7QUFESSxhQUFiOztBQUlBZCxxQkFBUyxLQUFLQSxNQUFMLENBQVllLE1BQVosQ0FBbUIsVUFBQ0MsSUFBRCxFQUFPQyxJQUFQO0FBQUEsdUJBQWdCQSxLQUFLQyxLQUFMLENBQVdGLElBQVgsRUFBaUJOLE9BQWpCLENBQWhCO0FBQUEsYUFBbkIsRUFBOERWLE1BQTlELENBQVQ7O0FBRUEsaUJBQUtHLEtBQUwsQ0FBV2dCLE9BQVgsQ0FBbUI7QUFBQSx1QkFBS0MsRUFBRUYsS0FBRixDQUFRZixLQUFSLEVBQWVPLE9BQWYsQ0FBTDtBQUFBLGFBQW5COztBQUVBQyxxQkFBU0YsR0FBR1IsVUFBSCxDQUFjLEtBQUtBLFVBQUwsQ0FBZ0JXLE9BQWhCLENBQXdCRixPQUF4QixDQUFkLEVBQ1RXLElBRFMsQ0FDSmxCLEtBREksRUFDR0gsTUFESCxDQUFUO0FBRUEsaUJBQUtJLFNBQUwsQ0FBZWUsT0FBZixDQUF1QjtBQUFBLHVCQUFLRyxFQUFFSixLQUFGLENBQVFQLE1BQVIsQ0FBTDtBQUFBLGFBQXZCOztBQUVBLG1CQUFPQSxPQUFPWSxPQUFQLEdBQ1BDLElBRE8sQ0FDRixnQkFBUTtBQUNULHVCQUFPaEIsS0FBS2lCLEdBQUwsQ0FBUyxhQUFLOztBQUVqQix3QkFBSSxDQUFDQyxNQUFNQyxPQUFOLENBQWMsdUJBQVNDLEdBQVQsQ0FBYUMsQ0FBYixFQUFnQjNCLEtBQWhCLENBQWQsQ0FBTCxFQUNJLHVCQUFTNEIsR0FBVCxDQUFhRCxDQUFiLEVBQWdCM0IsS0FBaEIsRUFBdUIsRUFBdkI7O0FBRUo2Qix5QkFBS1osT0FBTCxDQUFhLGVBQU87O0FBRWhCLDRCQUFJLE9BQUtkLFNBQUwsQ0FBZTJCLE9BQWYsQ0FBdUJILENBQXZCLEVBQTBCSSxHQUExQixDQUFKLEVBQ0ksdUJBQVNMLEdBQVQsQ0FBYUMsQ0FBYixFQUFnQjNCLEtBQWhCLEVBQXVCZ0MsSUFBdkIsQ0FBNEJELEdBQTVCO0FBRVAscUJBTEQ7O0FBT0EsMkJBQU9KLENBQVA7QUFFSCxpQkFkTSxDQUFQO0FBZ0JILGFBbEJNLENBQVA7QUFvQkg7Ozs7OztrQkFHVTlCLGlCIiwiZmlsZSI6IkxlZnRKb2luU3RhdGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcbmltcG9ydCBQcm9wZXJ0eSBmcm9tICdwcm9wZXJ0eS1zZWVrJztcblxuLyoqXG4gKiBMZWZ0Sm9pblN0YXRlbWVudFxuICogQHBhcmFtIHthcnJheX0gZmllbGRzXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sbGVjdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IGFsaWFzXG4gKi9cbmNsYXNzIExlZnRKb2luU3RhdGVtZW50IGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihmaWVsZHMsIGNvbGxlY3Rpb24sIGFsaWFzLCB3aGVyZSwgbW9kaWZpZXJzLCBjb25kaXRpb24sIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2xlZnQtam9pbic7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbiA9IGNvbGxlY3Rpb247XG4gICAgICAgIHRoaXMuYWxpYXMgPSBhbGlhcztcbiAgICAgICAgdGhpcy5maWVsZHMgPSBmaWVsZHM7XG4gICAgICAgIHRoaXMud2hlcmUgPSB3aGVyZTtcbiAgICAgICAgdGhpcy5tb2RpZmllcnMgPSBtb2RpZmllcnM7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICBhcHBseShkYXRhLCBkYiwgY29udGV4dCkge1xuXG4gICAgICAgIHZhciBjdXJzb3I7XG4gICAgICAgIHZhciBhbGlhcyA9IHRoaXMuYWxpYXMuYXNWYWx1ZSgpO1xuICAgICAgICB2YXIgd2hlcmUgPSB0aGlzLmNvbmRpdGlvbi5nZXRXaGVyZUNsYXVzZShkYXRhKTtcbiAgICAgICAgdmFyIGZpZWxkcyA9IHtcbiAgICAgICAgICAgIF9pZDogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICBmaWVsZHMgPSB0aGlzLmZpZWxkcy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IGN1cnIuYXBwbHkocHJldiwgY29udGV4dCksIGZpZWxkcyk7XG5cbiAgICAgICAgdGhpcy53aGVyZS5mb3JFYWNoKHcgPT4gdy5hcHBseSh3aGVyZSwgY29udGV4dCkpO1xuXG4gICAgICAgIGN1cnNvciA9IGRiLmNvbGxlY3Rpb24odGhpcy5jb2xsZWN0aW9uLmFzVmFsdWUoY29udGV4dCkpLlxuICAgICAgICBmaW5kKHdoZXJlLCBmaWVsZHMpO1xuICAgICAgICB0aGlzLm1vZGlmaWVycy5mb3JFYWNoKG0gPT4gbS5hcHBseShjdXJzb3IpKTtcblxuICAgICAgICByZXR1cm4gY3Vyc29yLnRvQXJyYXkoKS5cbiAgICAgICAgdGhlbihkb2NzID0+IHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLm1hcChkID0+IHtcblxuICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShQcm9wZXJ0eS5nZXQoZCwgYWxpYXMpKSlcbiAgICAgICAgICAgICAgICAgICAgUHJvcGVydHkuc2V0KGQsIGFsaWFzLCBbXSk7XG5cbiAgICAgICAgICAgICAgICBkb2NzLmZvckVhY2goZG9jID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25kaXRpb24uY29tcGFyZShkLCBkb2MpKVxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvcGVydHkuZ2V0KGQsIGFsaWFzKS5wdXNoKGRvYyk7XG5cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBkO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGVmdEpvaW5TdGF0ZW1lbnRcbiJdfQ==