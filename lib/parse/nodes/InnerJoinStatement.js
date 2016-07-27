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

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(InnerJoinStatement).call(this));

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9Jbm5lckpvaW5TdGF0ZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7OztJQUdNLGtCOzs7QUFFRixnQ0FBWSxNQUFaLEVBQW9CLFVBQXBCLEVBQWdDLEtBQWhDLEVBQXVDLEtBQXZDLEVBQThDLFNBQTlDLEVBQXlELFNBQXpELEVBQW9FLFFBQXBFLEVBQThFO0FBQUE7O0FBQUE7O0FBRzFFLGNBQUssSUFBTCxHQUFZLFlBQVo7QUFDQSxjQUFLLFVBQUwsR0FBa0IsVUFBbEI7QUFDQSxjQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0EsY0FBSyxNQUFMLEdBQWMsTUFBZDtBQUNBLGNBQUssS0FBTCxHQUFhLEtBQWI7QUFDQSxjQUFLLFNBQUwsR0FBaUIsU0FBakI7QUFDQSxjQUFLLFNBQUwsR0FBaUIsU0FBakI7QUFDQSxjQUFLLFFBQUwsR0FBZ0IsUUFBaEI7O0FBVjBFO0FBWTdFOzs7OzhCQUVLLEksRUFBTSxFLEVBQUksTyxFQUFTO0FBQUE7O0FBRXJCLGdCQUFJLE1BQUo7QUFDQSxnQkFBSSxRQUFRLEtBQUssS0FBTCxDQUFXLE9BQVgsRUFBWjtBQUNBLGdCQUFJLFFBQVEsS0FBSyxTQUFMLENBQWUsY0FBZixDQUE4QixJQUE5QixDQUFaOztBQUVBLGlCQUFLLEtBQUwsQ0FBVyxPQUFYLENBQW1CO0FBQUEsdUJBQUssRUFBRSxLQUFGLENBQVEsS0FBUixFQUFlLE9BQWYsQ0FBTDtBQUFBLGFBQW5COztBQUVBLHFCQUFTLEdBQUcsVUFBSCxDQUFjLEtBQUssVUFBTCxDQUFnQixPQUFoQixDQUF3QixPQUF4QixDQUFkLEVBQ1QsSUFEUyxDQUNKLEtBREksRUFDRyxLQUFLLE1BRFIsQ0FBVDs7QUFHQSxpQkFBSyxTQUFMLENBQWUsT0FBZixDQUF1QjtBQUFBLHVCQUFLLEVBQUUsS0FBRixDQUFRLE1BQVIsQ0FBTDtBQUFBLGFBQXZCOztBQUVBLG1CQUFPLE9BQU8sT0FBUCxHQUNQLElBRE8sQ0FDRixnQkFBUTs7QUFFVCx1QkFBTyxLQUFLLE1BQUwsQ0FBWSxhQUFLOztBQUVwQix3QkFBSSxTQUFTLEtBQWI7O0FBRUEseUJBQUssT0FBTCxDQUFhLGVBQU87O0FBRWhCLDRCQUFJLE9BQUssU0FBTCxDQUFlLE9BQWYsQ0FBdUIsQ0FBdkIsRUFBMEIsR0FBMUIsQ0FBSixFQUFvQzs7QUFFaEMsZ0NBQUksQ0FBQyxNQUFNLE9BQU4sQ0FBYyx1QkFBUyxHQUFULENBQWEsQ0FBYixFQUFnQixLQUFoQixDQUFkLENBQUwsRUFDSSx1QkFBUyxHQUFULENBQWEsQ0FBYixFQUFnQixLQUFoQixFQUF1QixFQUF2QjtBQUNKLG1EQUFTLEdBQVQsQ0FBYSxDQUFiLEVBQWdCLEtBQWhCLEVBQXVCLElBQXZCLENBQTRCLEdBQTVCOztBQUVBLHFDQUFTLElBQVQ7QUFDSDtBQUVKLHFCQVhEOztBQWFBLDJCQUFPLE1BQVA7QUFFSCxpQkFuQk0sQ0FBUDtBQXFCSCxhQXhCTSxDQUFQO0FBMEJIOzs7Ozs7a0JBSVUsa0IiLCJmaWxlIjoiSW5uZXJKb2luU3RhdGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcbmltcG9ydCBQcm9wZXJ0eSBmcm9tICdwcm9wZXJ0eS1zZWVrJztcblxuLyoqXG4gKiBJbm5lckpvaW5TdGF0ZW1lbnQgXG4gKi9cbmNsYXNzIElubmVySm9pblN0YXRlbWVudCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IoZmllbGRzLCBjb2xsZWN0aW9uLCBhbGlhcywgd2hlcmUsIG1vZGlmaWVycywgY29uZGl0aW9uLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdpbm5lci1qb2luJztcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uID0gY29sbGVjdGlvbjtcbiAgICAgICAgdGhpcy5hbGlhcyA9IGFsaWFzO1xuICAgICAgICB0aGlzLmZpZWxkcyA9IGZpZWxkcztcbiAgICAgICAgdGhpcy53aGVyZSA9IHdoZXJlO1xuICAgICAgICB0aGlzLm1vZGlmaWVycyA9IG1vZGlmaWVycztcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIGFwcGx5KGRhdGEsIGRiLCBjb250ZXh0KSB7XG5cbiAgICAgICAgdmFyIGN1cnNvcjtcbiAgICAgICAgdmFyIGFsaWFzID0gdGhpcy5hbGlhcy5hc1ZhbHVlKCk7XG4gICAgICAgIHZhciB3aGVyZSA9IHRoaXMuY29uZGl0aW9uLmdldFdoZXJlQ2xhdXNlKGRhdGEpO1xuXG4gICAgICAgIHRoaXMud2hlcmUuZm9yRWFjaCh3ID0+IHcuYXBwbHkod2hlcmUsIGNvbnRleHQpKTtcblxuICAgICAgICBjdXJzb3IgPSBkYi5jb2xsZWN0aW9uKHRoaXMuY29sbGVjdGlvbi5hc1ZhbHVlKGNvbnRleHQpKS5cbiAgICAgICAgZmluZCh3aGVyZSwgdGhpcy5maWVsZHMpO1xuXG4gICAgICAgIHRoaXMubW9kaWZpZXJzLmZvckVhY2gobSA9PiBtLmFwcGx5KGN1cnNvcikpO1xuXG4gICAgICAgIHJldHVybiBjdXJzb3IudG9BcnJheSgpLlxuICAgICAgICB0aGVuKGRvY3MgPT4ge1xuXG4gICAgICAgICAgICByZXR1cm4gZGF0YS5maWx0ZXIoZCA9PiB7XG5cbiAgICAgICAgICAgICAgICB2YXIgam9pbmVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBkb2NzLmZvckVhY2goZG9jID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25kaXRpb24uY29tcGFyZShkLCBkb2MpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShQcm9wZXJ0eS5nZXQoZCwgYWxpYXMpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9wZXJ0eS5zZXQoZCwgYWxpYXMsIFtdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb3BlcnR5LmdldChkLCBhbGlhcykucHVzaChkb2MpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBqb2luZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBqb2luZWQ7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG5cbn1cbmV4cG9ydCBkZWZhdWx0IElubmVySm9pblN0YXRlbWVudFxuIl19