'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propertySeek = require('property-seek');

var _propertySeek2 = _interopRequireDefault(_propertySeek);

var _Statement2 = require('./Statement');

var _Statement3 = _interopRequireDefault(_Statement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * InnerJoinStatement
 */
var InnerJoinStatement = function (_Statement) {
    _inherits(InnerJoinStatement, _Statement);

    function InnerJoinStatement(fields, collection, alias, where, modifiers, condition, location) {
        _classCallCheck(this, InnerJoinStatement);

        var _this = _possibleConstructorReturn(this, (InnerJoinStatement.__proto__ || Object.getPrototypeOf(InnerJoinStatement)).call(this));

        _this.type = 'inner-join';
        _this.collection = collection;
        _this.alias = alias;
        _this.fields = fields;
        _this.where = where;
        _this.modifiers = modifiers;
        _this.condition = condition;
        _this.location = location;

        return _this;
    }

    _createClass(InnerJoinStatement, [{
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

                return data.filter(function (d) {

                    var joined = false;

                    docs.forEach(function (doc) {

                        if (_this2.condition.compare(d, doc)) {

                            if (!Array.isArray(_propertySeek2.default.get(d, alias))) _propertySeek2.default.set(d, alias, []);
                            _propertySeek2.default.get(d, alias).push(doc);

                            joined = true;
                        }
                    });

                    return joined;
                });
            });
        }
    }]);

    return InnerJoinStatement;
}(_Statement3.default);

exports.default = InnerJoinStatement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9hc3QvSW5uZXJKb2luU3RhdGVtZW50LmpzIl0sIm5hbWVzIjpbIklubmVySm9pblN0YXRlbWVudCIsImZpZWxkcyIsImNvbGxlY3Rpb24iLCJhbGlhcyIsIndoZXJlIiwibW9kaWZpZXJzIiwiY29uZGl0aW9uIiwibG9jYXRpb24iLCJ0eXBlIiwiZGF0YSIsImRiIiwiY29udGV4dCIsImN1cnNvciIsImFzVmFsdWUiLCJnZXRXaGVyZUNsYXVzZSIsImZvckVhY2giLCJ3IiwiYXBwbHkiLCJmaW5kIiwibSIsInRvQXJyYXkiLCJ0aGVuIiwiZmlsdGVyIiwiam9pbmVkIiwiZG9jcyIsImNvbXBhcmUiLCJkIiwiZG9jIiwiQXJyYXkiLCJpc0FycmF5IiwiZ2V0Iiwic2V0IiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR01BLGtCOzs7QUFFRixnQ0FBWUMsTUFBWixFQUFvQkMsVUFBcEIsRUFBZ0NDLEtBQWhDLEVBQXVDQyxLQUF2QyxFQUE4Q0MsU0FBOUMsRUFBeURDLFNBQXpELEVBQW9FQyxRQUFwRSxFQUE4RTtBQUFBOztBQUFBOztBQUcxRSxjQUFLQyxJQUFMLEdBQVksWUFBWjtBQUNBLGNBQUtOLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsY0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsY0FBS0YsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsY0FBS0csS0FBTCxHQUFhQSxLQUFiO0FBQ0EsY0FBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxjQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQVYwRTtBQVk3RTs7Ozs4QkFFS0UsSSxFQUFNQyxFLEVBQUlDLE8sRUFBUztBQUFBOztBQUVyQixnQkFBSUMsTUFBSjtBQUNBLGdCQUFJVCxRQUFRLEtBQUtBLEtBQUwsQ0FBV1UsT0FBWCxFQUFaO0FBQ0EsZ0JBQUlULFFBQVEsS0FBS0UsU0FBTCxDQUFlUSxjQUFmLENBQThCTCxJQUE5QixDQUFaOztBQUVBLGlCQUFLTCxLQUFMLENBQVdXLE9BQVgsQ0FBbUI7QUFBQSx1QkFBS0MsRUFBRUMsS0FBRixDQUFRYixLQUFSLEVBQWVPLE9BQWYsQ0FBTDtBQUFBLGFBQW5COztBQUVBQyxxQkFBU0YsR0FBR1IsVUFBSCxDQUFjLEtBQUtBLFVBQUwsQ0FBZ0JXLE9BQWhCLENBQXdCRixPQUF4QixDQUFkLEVBQ1RPLElBRFMsQ0FDSmQsS0FESSxFQUNHLEtBQUtILE1BRFIsQ0FBVDs7QUFHQSxpQkFBS0ksU0FBTCxDQUFlVSxPQUFmLENBQXVCO0FBQUEsdUJBQUtJLEVBQUVGLEtBQUYsQ0FBUUwsTUFBUixDQUFMO0FBQUEsYUFBdkI7O0FBRUEsbUJBQU9BLE9BQU9RLE9BQVAsR0FDUEMsSUFETyxDQUNGLGdCQUFROztBQUVULHVCQUFPWixLQUFLYSxNQUFMLENBQVksYUFBSzs7QUFFcEIsd0JBQUlDLFNBQVMsS0FBYjs7QUFFQUMseUJBQUtULE9BQUwsQ0FBYSxlQUFPOztBQUVoQiw0QkFBSSxPQUFLVCxTQUFMLENBQWVtQixPQUFmLENBQXVCQyxDQUF2QixFQUEwQkMsR0FBMUIsQ0FBSixFQUFvQzs7QUFFaEMsZ0NBQUksQ0FBQ0MsTUFBTUMsT0FBTixDQUFjLHVCQUFTQyxHQUFULENBQWFKLENBQWIsRUFBZ0J2QixLQUFoQixDQUFkLENBQUwsRUFDSSx1QkFBUzRCLEdBQVQsQ0FBYUwsQ0FBYixFQUFnQnZCLEtBQWhCLEVBQXVCLEVBQXZCO0FBQ0osbURBQVMyQixHQUFULENBQWFKLENBQWIsRUFBZ0J2QixLQUFoQixFQUF1QjZCLElBQXZCLENBQTRCTCxHQUE1Qjs7QUFFQUoscUNBQVMsSUFBVDtBQUNIO0FBRUoscUJBWEQ7O0FBYUEsMkJBQU9BLE1BQVA7QUFFSCxpQkFuQk0sQ0FBUDtBQXFCSCxhQXhCTSxDQUFQO0FBMEJIOzs7Ozs7a0JBS1V2QixrQiIsImZpbGUiOiJJbm5lckpvaW5TdGF0ZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcGVydHkgZnJvbSAncHJvcGVydHktc2Vlayc7XG5pbXBvcnQgU3RhdGVtZW50IGZyb20gJy4vU3RhdGVtZW50JztcblxuLyoqXG4gKiBJbm5lckpvaW5TdGF0ZW1lbnRcbiAqL1xuY2xhc3MgSW5uZXJKb2luU3RhdGVtZW50IGV4dGVuZHMgU3RhdGVtZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGZpZWxkcywgY29sbGVjdGlvbiwgYWxpYXMsIHdoZXJlLCBtb2RpZmllcnMsIGNvbmRpdGlvbiwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnaW5uZXItam9pbic7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbiA9IGNvbGxlY3Rpb247XG4gICAgICAgIHRoaXMuYWxpYXMgPSBhbGlhcztcbiAgICAgICAgdGhpcy5maWVsZHMgPSBmaWVsZHM7XG4gICAgICAgIHRoaXMud2hlcmUgPSB3aGVyZTtcbiAgICAgICAgdGhpcy5tb2RpZmllcnMgPSBtb2RpZmllcnM7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICBhcHBseShkYXRhLCBkYiwgY29udGV4dCkge1xuXG4gICAgICAgIHZhciBjdXJzb3I7XG4gICAgICAgIHZhciBhbGlhcyA9IHRoaXMuYWxpYXMuYXNWYWx1ZSgpO1xuICAgICAgICB2YXIgd2hlcmUgPSB0aGlzLmNvbmRpdGlvbi5nZXRXaGVyZUNsYXVzZShkYXRhKTtcblxuICAgICAgICB0aGlzLndoZXJlLmZvckVhY2godyA9PiB3LmFwcGx5KHdoZXJlLCBjb250ZXh0KSk7XG5cbiAgICAgICAgY3Vyc29yID0gZGIuY29sbGVjdGlvbih0aGlzLmNvbGxlY3Rpb24uYXNWYWx1ZShjb250ZXh0KSkuXG4gICAgICAgIGZpbmQod2hlcmUsIHRoaXMuZmllbGRzKTtcblxuICAgICAgICB0aGlzLm1vZGlmaWVycy5mb3JFYWNoKG0gPT4gbS5hcHBseShjdXJzb3IpKTtcblxuICAgICAgICByZXR1cm4gY3Vyc29yLnRvQXJyYXkoKS5cbiAgICAgICAgdGhlbihkb2NzID0+IHtcblxuICAgICAgICAgICAgcmV0dXJuIGRhdGEuZmlsdGVyKGQgPT4ge1xuXG4gICAgICAgICAgICAgICAgdmFyIGpvaW5lZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgZG9jcy5mb3JFYWNoKGRvYyA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29uZGl0aW9uLmNvbXBhcmUoZCwgZG9jKSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoUHJvcGVydHkuZ2V0KGQsIGFsaWFzKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvcGVydHkuc2V0KGQsIGFsaWFzLCBbXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9wZXJ0eS5nZXQoZCwgYWxpYXMpLnB1c2goZG9jKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgam9pbmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gam9pbmVkO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IElubmVySm9pblN0YXRlbWVudFxuIl19