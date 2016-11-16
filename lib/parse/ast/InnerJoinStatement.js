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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9hc3QvSW5uZXJKb2luU3RhdGVtZW50LmpzIl0sIm5hbWVzIjpbIklubmVySm9pblN0YXRlbWVudCIsImZpZWxkcyIsImNvbGxlY3Rpb24iLCJhbGlhcyIsIndoZXJlIiwibW9kaWZpZXJzIiwiY29uZGl0aW9uIiwibG9jYXRpb24iLCJ0eXBlIiwiZGF0YSIsImRiIiwiY29udGV4dCIsImN1cnNvciIsImFzVmFsdWUiLCJnZXRXaGVyZUNsYXVzZSIsIl9pZCIsInJlZHVjZSIsInByZXYiLCJjdXJyIiwiYXBwbHkiLCJmb3JFYWNoIiwidyIsImZpbmQiLCJtIiwidG9BcnJheSIsInRoZW4iLCJmaWx0ZXIiLCJqb2luZWQiLCJkb2NzIiwiY29tcGFyZSIsImQiLCJkb2MiLCJBcnJheSIsImlzQXJyYXkiLCJnZXQiLCJzZXQiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHTUEsa0I7OztBQUVGLGdDQUFZQyxNQUFaLEVBQW9CQyxVQUFwQixFQUFnQ0MsS0FBaEMsRUFBdUNDLEtBQXZDLEVBQThDQyxTQUE5QyxFQUF5REMsU0FBekQsRUFBb0VDLFFBQXBFLEVBQThFO0FBQUE7O0FBQUE7O0FBRzFFLGNBQUtDLElBQUwsR0FBWSxZQUFaO0FBQ0EsY0FBS04sVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxjQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxjQUFLRixNQUFMLEdBQWNBLE1BQWQ7QUFDQSxjQUFLRyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxjQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLGNBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBVjBFO0FBWTdFOzs7OzhCQUVLRSxJLEVBQU1DLEUsRUFBSUMsTyxFQUFTO0FBQUE7O0FBRXJCLGdCQUFJQyxNQUFKO0FBQ0EsZ0JBQUlULFFBQVEsS0FBS0EsS0FBTCxDQUFXVSxPQUFYLEVBQVo7QUFDQSxnQkFBSVQsUUFBUSxLQUFLRSxTQUFMLENBQWVRLGNBQWYsQ0FBOEJMLElBQTlCLENBQVo7QUFDTCxnQkFBSVIsU0FBUztBQUNKYyxxQkFBSztBQURELGFBQWI7O0FBSUtkLHFCQUFTLEtBQUtBLE1BQUwsQ0FBWWUsTUFBWixDQUFtQixVQUFDQyxJQUFELEVBQU9DLElBQVA7QUFBQSx1QkFBZ0JBLEtBQUtDLEtBQUwsQ0FBV0YsSUFBWCxFQUFpQk4sT0FBakIsQ0FBaEI7QUFBQSxhQUFuQixFQUE4RFYsTUFBOUQsQ0FBVDs7QUFHQSxpQkFBS0csS0FBTCxDQUFXZ0IsT0FBWCxDQUFtQjtBQUFBLHVCQUFLQyxFQUFFRixLQUFGLENBQVFmLEtBQVIsRUFBZU8sT0FBZixDQUFMO0FBQUEsYUFBbkI7O0FBRUFDLHFCQUFTRixHQUFHUixVQUFILENBQWMsS0FBS0EsVUFBTCxDQUFnQlcsT0FBaEIsQ0FBd0JGLE9BQXhCLENBQWQsRUFDVFcsSUFEUyxDQUNKbEIsS0FESSxFQUNHSCxNQURILENBQVQ7O0FBR0EsaUJBQUtJLFNBQUwsQ0FBZWUsT0FBZixDQUF1QjtBQUFBLHVCQUFLRyxFQUFFSixLQUFGLENBQVFQLE1BQVIsQ0FBTDtBQUFBLGFBQXZCOztBQUVBLG1CQUFPQSxPQUFPWSxPQUFQLEdBQ1BDLElBRE8sQ0FDRixnQkFBUTs7QUFFVCx1QkFBT2hCLEtBQUtpQixNQUFMLENBQVksYUFBSzs7QUFFcEIsd0JBQUlDLFNBQVMsS0FBYjs7QUFFQUMseUJBQUtSLE9BQUwsQ0FBYSxlQUFPOztBQUVoQiw0QkFBSSxPQUFLZCxTQUFMLENBQWV1QixPQUFmLENBQXVCQyxDQUF2QixFQUEwQkMsR0FBMUIsQ0FBSixFQUFvQzs7QUFFaEMsZ0NBQUksQ0FBQ0MsTUFBTUMsT0FBTixDQUFjLHVCQUFTQyxHQUFULENBQWFKLENBQWIsRUFBZ0IzQixLQUFoQixDQUFkLENBQUwsRUFDSSx1QkFBU2dDLEdBQVQsQ0FBYUwsQ0FBYixFQUFnQjNCLEtBQWhCLEVBQXVCLEVBQXZCO0FBQ0osbURBQVMrQixHQUFULENBQWFKLENBQWIsRUFBZ0IzQixLQUFoQixFQUF1QmlDLElBQXZCLENBQTRCTCxHQUE1Qjs7QUFFQUoscUNBQVMsSUFBVDtBQUNIO0FBRUoscUJBWEQ7O0FBYUEsMkJBQU9BLE1BQVA7QUFFSCxpQkFuQk0sQ0FBUDtBQXFCSCxhQXhCTSxDQUFQO0FBMEJIOzs7Ozs7a0JBS1UzQixrQiIsImZpbGUiOiJJbm5lckpvaW5TdGF0ZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcGVydHkgZnJvbSAncHJvcGVydHktc2Vlayc7XG5pbXBvcnQgU3RhdGVtZW50IGZyb20gJy4vU3RhdGVtZW50JztcblxuLyoqXG4gKiBJbm5lckpvaW5TdGF0ZW1lbnRcbiAqL1xuY2xhc3MgSW5uZXJKb2luU3RhdGVtZW50IGV4dGVuZHMgU3RhdGVtZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGZpZWxkcywgY29sbGVjdGlvbiwgYWxpYXMsIHdoZXJlLCBtb2RpZmllcnMsIGNvbmRpdGlvbiwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnaW5uZXItam9pbic7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbiA9IGNvbGxlY3Rpb247XG4gICAgICAgIHRoaXMuYWxpYXMgPSBhbGlhcztcbiAgICAgICAgdGhpcy5maWVsZHMgPSBmaWVsZHM7XG4gICAgICAgIHRoaXMud2hlcmUgPSB3aGVyZTtcbiAgICAgICAgdGhpcy5tb2RpZmllcnMgPSBtb2RpZmllcnM7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICBhcHBseShkYXRhLCBkYiwgY29udGV4dCkge1xuXG4gICAgICAgIHZhciBjdXJzb3I7XG4gICAgICAgIHZhciBhbGlhcyA9IHRoaXMuYWxpYXMuYXNWYWx1ZSgpO1xuICAgICAgICB2YXIgd2hlcmUgPSB0aGlzLmNvbmRpdGlvbi5nZXRXaGVyZUNsYXVzZShkYXRhKTtcbiAgIHZhciBmaWVsZHMgPSB7XG4gICAgICAgICAgICBfaWQ6IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICAgICAgZmllbGRzID0gdGhpcy5maWVsZHMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBjdXJyLmFwcGx5KHByZXYsIGNvbnRleHQpLCBmaWVsZHMpO1xuXG5cbiAgICAgICAgdGhpcy53aGVyZS5mb3JFYWNoKHcgPT4gdy5hcHBseSh3aGVyZSwgY29udGV4dCkpO1xuXG4gICAgICAgIGN1cnNvciA9IGRiLmNvbGxlY3Rpb24odGhpcy5jb2xsZWN0aW9uLmFzVmFsdWUoY29udGV4dCkpLlxuICAgICAgICBmaW5kKHdoZXJlLCBmaWVsZHMpO1xuXG4gICAgICAgIHRoaXMubW9kaWZpZXJzLmZvckVhY2gobSA9PiBtLmFwcGx5KGN1cnNvcikpO1xuXG4gICAgICAgIHJldHVybiBjdXJzb3IudG9BcnJheSgpLlxuICAgICAgICB0aGVuKGRvY3MgPT4ge1xuXG4gICAgICAgICAgICByZXR1cm4gZGF0YS5maWx0ZXIoZCA9PiB7XG5cbiAgICAgICAgICAgICAgICB2YXIgam9pbmVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBkb2NzLmZvckVhY2goZG9jID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25kaXRpb24uY29tcGFyZShkLCBkb2MpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShQcm9wZXJ0eS5nZXQoZCwgYWxpYXMpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9wZXJ0eS5zZXQoZCwgYWxpYXMsIFtdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb3BlcnR5LmdldChkLCBhbGlhcykucHVzaChkb2MpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBqb2luZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBqb2luZWQ7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5uZXJKb2luU3RhdGVtZW50XG4iXX0=