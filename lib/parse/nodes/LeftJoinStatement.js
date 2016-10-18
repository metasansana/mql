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

            this.where.forEach(function (w) {
                return w.apply(where, context);
            });

            cursor = db.collection(this.collection.asValue(context)).find(where, this.fields);

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
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9MZWZ0Sm9pblN0YXRlbWVudC5qcyJdLCJuYW1lcyI6WyJMZWZ0Sm9pblN0YXRlbWVudCIsImZpZWxkcyIsImNvbGxlY3Rpb24iLCJhbGlhcyIsIndoZXJlIiwibW9kaWZpZXJzIiwiY29uZGl0aW9uIiwibG9jYXRpb24iLCJ0eXBlIiwiZGF0YSIsImRiIiwiY29udGV4dCIsImN1cnNvciIsImFzVmFsdWUiLCJnZXRXaGVyZUNsYXVzZSIsImZvckVhY2giLCJ3IiwiYXBwbHkiLCJmaW5kIiwibSIsInRvQXJyYXkiLCJ0aGVuIiwibWFwIiwiQXJyYXkiLCJpc0FycmF5IiwiZ2V0IiwiZCIsInNldCIsImRvY3MiLCJjb21wYXJlIiwiZG9jIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7O0lBTU1BLGlCOzs7QUFFRiwrQkFBWUMsTUFBWixFQUFvQkMsVUFBcEIsRUFBZ0NDLEtBQWhDLEVBQXVDQyxLQUF2QyxFQUE4Q0MsU0FBOUMsRUFBeURDLFNBQXpELEVBQW9FQyxRQUFwRSxFQUE4RTtBQUFBOztBQUFBOztBQUcxRSxjQUFLQyxJQUFMLEdBQVksV0FBWjtBQUNBLGNBQUtOLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsY0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsY0FBS0YsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsY0FBS0csS0FBTCxHQUFhQSxLQUFiO0FBQ0EsY0FBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxjQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQVYwRTtBQVk3RTs7Ozs4QkFFS0UsSSxFQUFNQyxFLEVBQUlDLE8sRUFBUztBQUFBOztBQUVyQixnQkFBSUMsTUFBSjtBQUNBLGdCQUFJVCxRQUFRLEtBQUtBLEtBQUwsQ0FBV1UsT0FBWCxFQUFaO0FBQ0EsZ0JBQUlULFFBQVEsS0FBS0UsU0FBTCxDQUFlUSxjQUFmLENBQThCTCxJQUE5QixDQUFaOztBQUVBLGlCQUFLTCxLQUFMLENBQVdXLE9BQVgsQ0FBbUI7QUFBQSx1QkFBS0MsRUFBRUMsS0FBRixDQUFRYixLQUFSLEVBQWVPLE9BQWYsQ0FBTDtBQUFBLGFBQW5COztBQUVBQyxxQkFBU0YsR0FBR1IsVUFBSCxDQUFjLEtBQUtBLFVBQUwsQ0FBZ0JXLE9BQWhCLENBQXdCRixPQUF4QixDQUFkLEVBQ1RPLElBRFMsQ0FDSmQsS0FESSxFQUNHLEtBQUtILE1BRFIsQ0FBVDs7QUFHQSxpQkFBS0ksU0FBTCxDQUFlVSxPQUFmLENBQXVCO0FBQUEsdUJBQUtJLEVBQUVGLEtBQUYsQ0FBUUwsTUFBUixDQUFMO0FBQUEsYUFBdkI7O0FBRUEsbUJBQU9BLE9BQU9RLE9BQVAsR0FDUEMsSUFETyxDQUNGLGdCQUFROztBQUVULHVCQUFPWixLQUFLYSxHQUFMLENBQVMsYUFBSzs7QUFFakIsd0JBQUksQ0FBQ0MsTUFBTUMsT0FBTixDQUFjLHVCQUFTQyxHQUFULENBQWFDLENBQWIsRUFBZ0J2QixLQUFoQixDQUFkLENBQUwsRUFDSSx1QkFBU3dCLEdBQVQsQ0FBYUQsQ0FBYixFQUFnQnZCLEtBQWhCLEVBQXVCLEVBQXZCOztBQUVKeUIseUJBQUtiLE9BQUwsQ0FBYSxlQUFPOztBQUVoQiw0QkFBSSxPQUFLVCxTQUFMLENBQWV1QixPQUFmLENBQXVCSCxDQUF2QixFQUEwQkksR0FBMUIsQ0FBSixFQUNJLHVCQUFTTCxHQUFULENBQWFDLENBQWIsRUFBZ0J2QixLQUFoQixFQUF1QjRCLElBQXZCLENBQTRCRCxHQUE1QjtBQUVQLHFCQUxEOztBQU9BLDJCQUFPSixDQUFQO0FBRUgsaUJBZE0sQ0FBUDtBQWdCSCxhQW5CTSxDQUFQO0FBcUJIOzs7Ozs7a0JBR1UxQixpQiIsImZpbGUiOiJMZWZ0Sm9pblN0YXRlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5pbXBvcnQgUHJvcGVydHkgZnJvbSAncHJvcGVydHktc2Vlayc7XG5cbi8qKlxuICogTGVmdEpvaW5TdGF0ZW1lbnQgXG4gKiBAcGFyYW0ge2FycmF5fSBmaWVsZHMgXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sbGVjdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IGFsaWFzXG4gKi9cbmNsYXNzIExlZnRKb2luU3RhdGVtZW50IGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihmaWVsZHMsIGNvbGxlY3Rpb24sIGFsaWFzLCB3aGVyZSwgbW9kaWZpZXJzLCBjb25kaXRpb24sIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2xlZnQtam9pbic7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbiA9IGNvbGxlY3Rpb247XG4gICAgICAgIHRoaXMuYWxpYXMgPSBhbGlhcztcbiAgICAgICAgdGhpcy5maWVsZHMgPSBmaWVsZHM7XG4gICAgICAgIHRoaXMud2hlcmUgPSB3aGVyZTtcbiAgICAgICAgdGhpcy5tb2RpZmllcnMgPSBtb2RpZmllcnM7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICBhcHBseShkYXRhLCBkYiwgY29udGV4dCkge1xuXG4gICAgICAgIHZhciBjdXJzb3I7XG4gICAgICAgIHZhciBhbGlhcyA9IHRoaXMuYWxpYXMuYXNWYWx1ZSgpO1xuICAgICAgICB2YXIgd2hlcmUgPSB0aGlzLmNvbmRpdGlvbi5nZXRXaGVyZUNsYXVzZShkYXRhKTtcblxuICAgICAgICB0aGlzLndoZXJlLmZvckVhY2godyA9PiB3LmFwcGx5KHdoZXJlLCBjb250ZXh0KSk7XG5cbiAgICAgICAgY3Vyc29yID0gZGIuY29sbGVjdGlvbih0aGlzLmNvbGxlY3Rpb24uYXNWYWx1ZShjb250ZXh0KSkuXG4gICAgICAgIGZpbmQod2hlcmUsIHRoaXMuZmllbGRzKTtcblxuICAgICAgICB0aGlzLm1vZGlmaWVycy5mb3JFYWNoKG0gPT4gbS5hcHBseShjdXJzb3IpKTtcblxuICAgICAgICByZXR1cm4gY3Vyc29yLnRvQXJyYXkoKS5cbiAgICAgICAgdGhlbihkb2NzID0+IHtcblxuICAgICAgICAgICAgcmV0dXJuIGRhdGEubWFwKGQgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KFByb3BlcnR5LmdldChkLCBhbGlhcykpKVxuICAgICAgICAgICAgICAgICAgICBQcm9wZXJ0eS5zZXQoZCwgYWxpYXMsIFtdKTtcblxuICAgICAgICAgICAgICAgIGRvY3MuZm9yRWFjaChkb2MgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbmRpdGlvbi5jb21wYXJlKGQsIGRvYykpXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9wZXJ0eS5nZXQoZCwgYWxpYXMpLnB1c2goZG9jKTtcblxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGQ7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMZWZ0Sm9pblN0YXRlbWVudFxuIl19