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
 * InnerJoinStatement 
 */
var InnerJoinStatement = function (_Node) {
    _inherits(InnerJoinStatement, _Node);

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
}(_Node3.default);

exports.default = InnerJoinStatement;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9Jbm5lckpvaW5TdGF0ZW1lbnQuanMiXSwibmFtZXMiOlsiSW5uZXJKb2luU3RhdGVtZW50IiwiZmllbGRzIiwiY29sbGVjdGlvbiIsImFsaWFzIiwid2hlcmUiLCJtb2RpZmllcnMiLCJjb25kaXRpb24iLCJsb2NhdGlvbiIsInR5cGUiLCJkYXRhIiwiZGIiLCJjb250ZXh0IiwiY3Vyc29yIiwiYXNWYWx1ZSIsImdldFdoZXJlQ2xhdXNlIiwiZm9yRWFjaCIsInciLCJhcHBseSIsImZpbmQiLCJtIiwidG9BcnJheSIsInRoZW4iLCJmaWx0ZXIiLCJqb2luZWQiLCJkb2NzIiwiY29tcGFyZSIsImQiLCJkb2MiLCJBcnJheSIsImlzQXJyYXkiLCJnZXQiLCJzZXQiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHTUEsa0I7OztBQUVGLGdDQUFZQyxNQUFaLEVBQW9CQyxVQUFwQixFQUFnQ0MsS0FBaEMsRUFBdUNDLEtBQXZDLEVBQThDQyxTQUE5QyxFQUF5REMsU0FBekQsRUFBb0VDLFFBQXBFLEVBQThFO0FBQUE7O0FBQUE7O0FBRzFFLGNBQUtDLElBQUwsR0FBWSxZQUFaO0FBQ0EsY0FBS04sVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxjQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxjQUFLRixNQUFMLEdBQWNBLE1BQWQ7QUFDQSxjQUFLRyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxjQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLGNBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBVjBFO0FBWTdFOzs7OzhCQUVLRSxJLEVBQU1DLEUsRUFBSUMsTyxFQUFTO0FBQUE7O0FBRXJCLGdCQUFJQyxNQUFKO0FBQ0EsZ0JBQUlULFFBQVEsS0FBS0EsS0FBTCxDQUFXVSxPQUFYLEVBQVo7QUFDQSxnQkFBSVQsUUFBUSxLQUFLRSxTQUFMLENBQWVRLGNBQWYsQ0FBOEJMLElBQTlCLENBQVo7O0FBRUEsaUJBQUtMLEtBQUwsQ0FBV1csT0FBWCxDQUFtQjtBQUFBLHVCQUFLQyxFQUFFQyxLQUFGLENBQVFiLEtBQVIsRUFBZU8sT0FBZixDQUFMO0FBQUEsYUFBbkI7O0FBRUFDLHFCQUFTRixHQUFHUixVQUFILENBQWMsS0FBS0EsVUFBTCxDQUFnQlcsT0FBaEIsQ0FBd0JGLE9BQXhCLENBQWQsRUFDVE8sSUFEUyxDQUNKZCxLQURJLEVBQ0csS0FBS0gsTUFEUixDQUFUOztBQUdBLGlCQUFLSSxTQUFMLENBQWVVLE9BQWYsQ0FBdUI7QUFBQSx1QkFBS0ksRUFBRUYsS0FBRixDQUFRTCxNQUFSLENBQUw7QUFBQSxhQUF2Qjs7QUFFQSxtQkFBT0EsT0FBT1EsT0FBUCxHQUNQQyxJQURPLENBQ0YsZ0JBQVE7O0FBRVQsdUJBQU9aLEtBQUthLE1BQUwsQ0FBWSxhQUFLOztBQUVwQix3QkFBSUMsU0FBUyxLQUFiOztBQUVBQyx5QkFBS1QsT0FBTCxDQUFhLGVBQU87O0FBRWhCLDRCQUFJLE9BQUtULFNBQUwsQ0FBZW1CLE9BQWYsQ0FBdUJDLENBQXZCLEVBQTBCQyxHQUExQixDQUFKLEVBQW9DOztBQUVoQyxnQ0FBSSxDQUFDQyxNQUFNQyxPQUFOLENBQWMsdUJBQVNDLEdBQVQsQ0FBYUosQ0FBYixFQUFnQnZCLEtBQWhCLENBQWQsQ0FBTCxFQUNJLHVCQUFTNEIsR0FBVCxDQUFhTCxDQUFiLEVBQWdCdkIsS0FBaEIsRUFBdUIsRUFBdkI7QUFDSixtREFBUzJCLEdBQVQsQ0FBYUosQ0FBYixFQUFnQnZCLEtBQWhCLEVBQXVCNkIsSUFBdkIsQ0FBNEJMLEdBQTVCOztBQUVBSixxQ0FBUyxJQUFUO0FBQ0g7QUFFSixxQkFYRDs7QUFhQSwyQkFBT0EsTUFBUDtBQUVILGlCQW5CTSxDQUFQO0FBcUJILGFBeEJNLENBQVA7QUEwQkg7Ozs7OztrQkFJVXZCLGtCIiwiZmlsZSI6IklubmVySm9pblN0YXRlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5pbXBvcnQgUHJvcGVydHkgZnJvbSAncHJvcGVydHktc2Vlayc7XG5cbi8qKlxuICogSW5uZXJKb2luU3RhdGVtZW50IFxuICovXG5jbGFzcyBJbm5lckpvaW5TdGF0ZW1lbnQgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGZpZWxkcywgY29sbGVjdGlvbiwgYWxpYXMsIHdoZXJlLCBtb2RpZmllcnMsIGNvbmRpdGlvbiwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnaW5uZXItam9pbic7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbiA9IGNvbGxlY3Rpb247XG4gICAgICAgIHRoaXMuYWxpYXMgPSBhbGlhcztcbiAgICAgICAgdGhpcy5maWVsZHMgPSBmaWVsZHM7XG4gICAgICAgIHRoaXMud2hlcmUgPSB3aGVyZTtcbiAgICAgICAgdGhpcy5tb2RpZmllcnMgPSBtb2RpZmllcnM7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICBhcHBseShkYXRhLCBkYiwgY29udGV4dCkge1xuXG4gICAgICAgIHZhciBjdXJzb3I7XG4gICAgICAgIHZhciBhbGlhcyA9IHRoaXMuYWxpYXMuYXNWYWx1ZSgpO1xuICAgICAgICB2YXIgd2hlcmUgPSB0aGlzLmNvbmRpdGlvbi5nZXRXaGVyZUNsYXVzZShkYXRhKTtcblxuICAgICAgICB0aGlzLndoZXJlLmZvckVhY2godyA9PiB3LmFwcGx5KHdoZXJlLCBjb250ZXh0KSk7XG5cbiAgICAgICAgY3Vyc29yID0gZGIuY29sbGVjdGlvbih0aGlzLmNvbGxlY3Rpb24uYXNWYWx1ZShjb250ZXh0KSkuXG4gICAgICAgIGZpbmQod2hlcmUsIHRoaXMuZmllbGRzKTtcblxuICAgICAgICB0aGlzLm1vZGlmaWVycy5mb3JFYWNoKG0gPT4gbS5hcHBseShjdXJzb3IpKTtcblxuICAgICAgICByZXR1cm4gY3Vyc29yLnRvQXJyYXkoKS5cbiAgICAgICAgdGhlbihkb2NzID0+IHtcblxuICAgICAgICAgICAgcmV0dXJuIGRhdGEuZmlsdGVyKGQgPT4ge1xuXG4gICAgICAgICAgICAgICAgdmFyIGpvaW5lZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgZG9jcy5mb3JFYWNoKGRvYyA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29uZGl0aW9uLmNvbXBhcmUoZCwgZG9jKSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoUHJvcGVydHkuZ2V0KGQsIGFsaWFzKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvcGVydHkuc2V0KGQsIGFsaWFzLCBbXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9wZXJ0eS5nZXQoZCwgYWxpYXMpLnB1c2goZG9jKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgam9pbmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gam9pbmVkO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxuXG59XG5leHBvcnQgZGVmYXVsdCBJbm5lckpvaW5TdGF0ZW1lbnRcbiJdfQ==