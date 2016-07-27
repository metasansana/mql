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

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LeftJoinStatement).call(this));

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9MZWZ0Sm9pblN0YXRlbWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7O0lBTU0saUI7OztBQUVGLCtCQUFZLE1BQVosRUFBb0IsVUFBcEIsRUFBZ0MsS0FBaEMsRUFBdUMsS0FBdkMsRUFBOEMsU0FBOUMsRUFBeUQsU0FBekQsRUFBb0UsUUFBcEUsRUFBOEU7QUFBQTs7QUFBQTs7QUFHMUUsY0FBSyxJQUFMLEdBQVksV0FBWjtBQUNBLGNBQUssVUFBTCxHQUFrQixVQUFsQjtBQUNBLGNBQUssS0FBTCxHQUFhLEtBQWI7QUFDQSxjQUFLLE1BQUwsR0FBYyxNQUFkO0FBQ0EsY0FBSyxLQUFMLEdBQWEsS0FBYjtBQUNBLGNBQUssU0FBTCxHQUFpQixTQUFqQjtBQUNBLGNBQUssU0FBTCxHQUFpQixTQUFqQjtBQUNBLGNBQUssUUFBTCxHQUFnQixRQUFoQjs7QUFWMEU7QUFZN0U7Ozs7OEJBRUssSSxFQUFNLEUsRUFBSSxPLEVBQVM7QUFBQTs7QUFFckIsZ0JBQUksTUFBSjtBQUNBLGdCQUFJLFFBQVEsS0FBSyxLQUFMLENBQVcsT0FBWCxFQUFaO0FBQ0EsZ0JBQUksUUFBUSxLQUFLLFNBQUwsQ0FBZSxjQUFmLENBQThCLElBQTlCLENBQVo7O0FBRUEsaUJBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUI7QUFBQSx1QkFBSyxFQUFFLEtBQUYsQ0FBUSxLQUFSLEVBQWUsT0FBZixDQUFMO0FBQUEsYUFBbkI7O0FBRUEscUJBQVMsR0FBRyxVQUFILENBQWMsS0FBSyxVQUFMLENBQWdCLE9BQWhCLENBQXdCLE9BQXhCLENBQWQsRUFDVCxJQURTLENBQ0osS0FESSxFQUNHLEtBQUssTUFEUixDQUFUOztBQUdBLGlCQUFLLFNBQUwsQ0FBZSxPQUFmLENBQXVCO0FBQUEsdUJBQUssRUFBRSxLQUFGLENBQVEsTUFBUixDQUFMO0FBQUEsYUFBdkI7O0FBRUEsbUJBQU8sT0FBTyxPQUFQLEdBQ1AsSUFETyxDQUNGLGdCQUFROztBQUVULHVCQUFPLEtBQUssR0FBTCxDQUFTLGFBQUs7O0FBRWpCLHdCQUFJLENBQUMsTUFBTSxPQUFOLENBQWMsdUJBQVMsR0FBVCxDQUFhLENBQWIsRUFBZ0IsS0FBaEIsQ0FBZCxDQUFMLEVBQ0ksdUJBQVMsR0FBVCxDQUFhLENBQWIsRUFBZ0IsS0FBaEIsRUFBdUIsRUFBdkI7O0FBRUoseUJBQUssT0FBTCxDQUFhLGVBQU87O0FBRWhCLDRCQUFJLE9BQUssU0FBTCxDQUFlLE9BQWYsQ0FBdUIsQ0FBdkIsRUFBMEIsR0FBMUIsQ0FBSixFQUNJLHVCQUFTLEdBQVQsQ0FBYSxDQUFiLEVBQWdCLEtBQWhCLEVBQXVCLElBQXZCLENBQTRCLEdBQTVCO0FBRVAscUJBTEQ7O0FBT0EsMkJBQU8sQ0FBUDtBQUVILGlCQWRNLENBQVA7QUFnQkgsYUFuQk0sQ0FBUDtBQXFCSDs7Ozs7O2tCQUdVLGlCIiwiZmlsZSI6IkxlZnRKb2luU3RhdGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcbmltcG9ydCBQcm9wZXJ0eSBmcm9tICdwcm9wZXJ0eS1zZWVrJztcblxuLyoqXG4gKiBMZWZ0Sm9pblN0YXRlbWVudCBcbiAqIEBwYXJhbSB7YXJyYXl9IGZpZWxkcyBcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xsZWN0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gYWxpYXNcbiAqL1xuY2xhc3MgTGVmdEpvaW5TdGF0ZW1lbnQgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGZpZWxkcywgY29sbGVjdGlvbiwgYWxpYXMsIHdoZXJlLCBtb2RpZmllcnMsIGNvbmRpdGlvbiwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnbGVmdC1qb2luJztcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uID0gY29sbGVjdGlvbjtcbiAgICAgICAgdGhpcy5hbGlhcyA9IGFsaWFzO1xuICAgICAgICB0aGlzLmZpZWxkcyA9IGZpZWxkcztcbiAgICAgICAgdGhpcy53aGVyZSA9IHdoZXJlO1xuICAgICAgICB0aGlzLm1vZGlmaWVycyA9IG1vZGlmaWVycztcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIGFwcGx5KGRhdGEsIGRiLCBjb250ZXh0KSB7XG5cbiAgICAgICAgdmFyIGN1cnNvcjtcbiAgICAgICAgdmFyIGFsaWFzID0gdGhpcy5hbGlhcy5hc1ZhbHVlKCk7XG4gICAgICAgIHZhciB3aGVyZSA9IHRoaXMuY29uZGl0aW9uLmdldFdoZXJlQ2xhdXNlKGRhdGEpO1xuXG4gICAgICAgIHRoaXMud2hlcmUuZm9yRWFjaCh3ID0+IHcuYXBwbHkod2hlcmUsIGNvbnRleHQpKTtcblxuICAgICAgICBjdXJzb3IgPSBkYi5jb2xsZWN0aW9uKHRoaXMuY29sbGVjdGlvbi5hc1ZhbHVlKGNvbnRleHQpKS5cbiAgICAgICAgZmluZCh3aGVyZSwgdGhpcy5maWVsZHMpO1xuXG4gICAgICAgIHRoaXMubW9kaWZpZXJzLmZvckVhY2gobSA9PiBtLmFwcGx5KGN1cnNvcikpO1xuXG4gICAgICAgIHJldHVybiBjdXJzb3IudG9BcnJheSgpLlxuICAgICAgICB0aGVuKGRvY3MgPT4ge1xuXG4gICAgICAgICAgICByZXR1cm4gZGF0YS5tYXAoZCA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoUHJvcGVydHkuZ2V0KGQsIGFsaWFzKSkpXG4gICAgICAgICAgICAgICAgICAgIFByb3BlcnR5LnNldChkLCBhbGlhcywgW10pO1xuXG4gICAgICAgICAgICAgICAgZG9jcy5mb3JFYWNoKGRvYyA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29uZGl0aW9uLmNvbXBhcmUoZCwgZG9jKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb3BlcnR5LmdldChkLCBhbGlhcykucHVzaChkb2MpO1xuXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZDtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExlZnRKb2luU3RhdGVtZW50XG4iXX0=