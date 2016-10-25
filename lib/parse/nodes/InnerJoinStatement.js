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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9Jbm5lckpvaW5TdGF0ZW1lbnQuanMiXSwibmFtZXMiOlsiSW5uZXJKb2luU3RhdGVtZW50IiwiZmllbGRzIiwiY29sbGVjdGlvbiIsImFsaWFzIiwid2hlcmUiLCJtb2RpZmllcnMiLCJjb25kaXRpb24iLCJsb2NhdGlvbiIsInR5cGUiLCJkYXRhIiwiZGIiLCJjb250ZXh0IiwiY3Vyc29yIiwiYXNWYWx1ZSIsImdldFdoZXJlQ2xhdXNlIiwiZm9yRWFjaCIsInciLCJhcHBseSIsImZpbmQiLCJtIiwidG9BcnJheSIsInRoZW4iLCJmaWx0ZXIiLCJqb2luZWQiLCJkb2NzIiwiY29tcGFyZSIsImQiLCJkb2MiLCJBcnJheSIsImlzQXJyYXkiLCJnZXQiLCJzZXQiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHTUEsa0I7OztBQUVGLGdDQUFZQyxNQUFaLEVBQW9CQyxVQUFwQixFQUFnQ0MsS0FBaEMsRUFBdUNDLEtBQXZDLEVBQThDQyxTQUE5QyxFQUF5REMsU0FBekQsRUFBb0VDLFFBQXBFLEVBQThFO0FBQUE7O0FBQUE7O0FBRzFFLGNBQUtDLElBQUwsR0FBWSxZQUFaO0FBQ0EsY0FBS04sVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxjQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxjQUFLRixNQUFMLEdBQWNBLE1BQWQ7QUFDQSxjQUFLRyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxjQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLGNBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBVjBFO0FBWTdFOzs7OzhCQUVLRSxJLEVBQU1DLEUsRUFBSUMsTyxFQUFTO0FBQUE7O0FBRXJCLGdCQUFJQyxNQUFKO0FBQ0EsZ0JBQUlULFFBQVEsS0FBS0EsS0FBTCxDQUFXVSxPQUFYLEVBQVo7QUFDQSxnQkFBSVQsUUFBUSxLQUFLRSxTQUFMLENBQWVRLGNBQWYsQ0FBOEJMLElBQTlCLENBQVo7O0FBRUEsaUJBQUtMLEtBQUwsQ0FBV1csT0FBWCxDQUFtQjtBQUFBLHVCQUFLQyxFQUFFQyxLQUFGLENBQVFiLEtBQVIsRUFBZU8sT0FBZixDQUFMO0FBQUEsYUFBbkI7O0FBRUFDLHFCQUFTRixHQUFHUixVQUFILENBQWMsS0FBS0EsVUFBTCxDQUFnQlcsT0FBaEIsQ0FBd0JGLE9BQXhCLENBQWQsRUFDVE8sSUFEUyxDQUNKZCxLQURJLEVBQ0csS0FBS0gsTUFEUixDQUFUOztBQUdBLGlCQUFLSSxTQUFMLENBQWVVLE9BQWYsQ0FBdUI7QUFBQSx1QkFBS0ksRUFBRUYsS0FBRixDQUFRTCxNQUFSLENBQUw7QUFBQSxhQUF2Qjs7QUFFQSxtQkFBT0EsT0FBT1EsT0FBUCxHQUNQQyxJQURPLENBQ0YsZ0JBQVE7O0FBRVQsdUJBQU9aLEtBQUthLE1BQUwsQ0FBWSxhQUFLOztBQUVwQix3QkFBSUMsU0FBUyxLQUFiOztBQUVBQyx5QkFBS1QsT0FBTCxDQUFhLGVBQU87O0FBRWhCLDRCQUFJLE9BQUtULFNBQUwsQ0FBZW1CLE9BQWYsQ0FBdUJDLENBQXZCLEVBQTBCQyxHQUExQixDQUFKLEVBQW9DOztBQUVoQyxnQ0FBSSxDQUFDQyxNQUFNQyxPQUFOLENBQWMsdUJBQVNDLEdBQVQsQ0FBYUosQ0FBYixFQUFnQnZCLEtBQWhCLENBQWQsQ0FBTCxFQUNJLHVCQUFTNEIsR0FBVCxDQUFhTCxDQUFiLEVBQWdCdkIsS0FBaEIsRUFBdUIsRUFBdkI7QUFDSixtREFBUzJCLEdBQVQsQ0FBYUosQ0FBYixFQUFnQnZCLEtBQWhCLEVBQXVCNkIsSUFBdkIsQ0FBNEJMLEdBQTVCOztBQUVBSixxQ0FBUyxJQUFUO0FBQ0g7QUFFSixxQkFYRDs7QUFhQSwyQkFBT0EsTUFBUDtBQUVILGlCQW5CTSxDQUFQO0FBcUJILGFBeEJNLENBQVA7QUEwQkg7Ozs7OztrQkFLVXZCLGtCIiwiZmlsZSI6IklubmVySm9pblN0YXRlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wZXJ0eSBmcm9tICdwcm9wZXJ0eS1zZWVrJztcbmltcG9ydCBTdGF0ZW1lbnQgZnJvbSAnLi9TdGF0ZW1lbnQnO1xuXG4vKipcbiAqIElubmVySm9pblN0YXRlbWVudFxuICovXG5jbGFzcyBJbm5lckpvaW5TdGF0ZW1lbnQgZXh0ZW5kcyBTdGF0ZW1lbnQge1xuXG4gICAgY29uc3RydWN0b3IoZmllbGRzLCBjb2xsZWN0aW9uLCBhbGlhcywgd2hlcmUsIG1vZGlmaWVycywgY29uZGl0aW9uLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdpbm5lci1qb2luJztcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uID0gY29sbGVjdGlvbjtcbiAgICAgICAgdGhpcy5hbGlhcyA9IGFsaWFzO1xuICAgICAgICB0aGlzLmZpZWxkcyA9IGZpZWxkcztcbiAgICAgICAgdGhpcy53aGVyZSA9IHdoZXJlO1xuICAgICAgICB0aGlzLm1vZGlmaWVycyA9IG1vZGlmaWVycztcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIGFwcGx5KGRhdGEsIGRiLCBjb250ZXh0KSB7XG5cbiAgICAgICAgdmFyIGN1cnNvcjtcbiAgICAgICAgdmFyIGFsaWFzID0gdGhpcy5hbGlhcy5hc1ZhbHVlKCk7XG4gICAgICAgIHZhciB3aGVyZSA9IHRoaXMuY29uZGl0aW9uLmdldFdoZXJlQ2xhdXNlKGRhdGEpO1xuXG4gICAgICAgIHRoaXMud2hlcmUuZm9yRWFjaCh3ID0+IHcuYXBwbHkod2hlcmUsIGNvbnRleHQpKTtcblxuICAgICAgICBjdXJzb3IgPSBkYi5jb2xsZWN0aW9uKHRoaXMuY29sbGVjdGlvbi5hc1ZhbHVlKGNvbnRleHQpKS5cbiAgICAgICAgZmluZCh3aGVyZSwgdGhpcy5maWVsZHMpO1xuXG4gICAgICAgIHRoaXMubW9kaWZpZXJzLmZvckVhY2gobSA9PiBtLmFwcGx5KGN1cnNvcikpO1xuXG4gICAgICAgIHJldHVybiBjdXJzb3IudG9BcnJheSgpLlxuICAgICAgICB0aGVuKGRvY3MgPT4ge1xuXG4gICAgICAgICAgICByZXR1cm4gZGF0YS5maWx0ZXIoZCA9PiB7XG5cbiAgICAgICAgICAgICAgICB2YXIgam9pbmVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBkb2NzLmZvckVhY2goZG9jID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25kaXRpb24uY29tcGFyZShkLCBkb2MpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShQcm9wZXJ0eS5nZXQoZCwgYWxpYXMpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9wZXJ0eS5zZXQoZCwgYWxpYXMsIFtdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb3BlcnR5LmdldChkLCBhbGlhcykucHVzaChkb2MpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBqb2luZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBqb2luZWQ7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5uZXJKb2luU3RhdGVtZW50XG4iXX0=