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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9hc3QvTGVmdEpvaW5TdGF0ZW1lbnQuanMiXSwibmFtZXMiOlsiTGVmdEpvaW5TdGF0ZW1lbnQiLCJmaWVsZHMiLCJjb2xsZWN0aW9uIiwiYWxpYXMiLCJ3aGVyZSIsIm1vZGlmaWVycyIsImNvbmRpdGlvbiIsImxvY2F0aW9uIiwidHlwZSIsImRhdGEiLCJkYiIsImNvbnRleHQiLCJjdXJzb3IiLCJhc1ZhbHVlIiwiZ2V0V2hlcmVDbGF1c2UiLCJmb3JFYWNoIiwidyIsImFwcGx5IiwiZmluZCIsIm0iLCJ0b0FycmF5IiwidGhlbiIsIm1hcCIsIkFycmF5IiwiaXNBcnJheSIsImdldCIsImQiLCJzZXQiLCJkb2NzIiwiY29tcGFyZSIsImRvYyIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7OztJQU1NQSxpQjs7O0FBRUYsK0JBQVlDLE1BQVosRUFBb0JDLFVBQXBCLEVBQWdDQyxLQUFoQyxFQUF1Q0MsS0FBdkMsRUFBOENDLFNBQTlDLEVBQXlEQyxTQUF6RCxFQUFvRUMsUUFBcEUsRUFBOEU7QUFBQTs7QUFBQTs7QUFHMUUsY0FBS0MsSUFBTCxHQUFZLFdBQVo7QUFDQSxjQUFLTixVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLGNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGNBQUtGLE1BQUwsR0FBY0EsTUFBZDtBQUNBLGNBQUtHLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGNBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsY0FBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxjQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjs7QUFWMEU7QUFZN0U7Ozs7OEJBRUtFLEksRUFBTUMsRSxFQUFJQyxPLEVBQVM7QUFBQTs7QUFFckIsZ0JBQUlDLE1BQUo7QUFDQSxnQkFBSVQsUUFBUSxLQUFLQSxLQUFMLENBQVdVLE9BQVgsRUFBWjtBQUNBLGdCQUFJVCxRQUFRLEtBQUtFLFNBQUwsQ0FBZVEsY0FBZixDQUE4QkwsSUFBOUIsQ0FBWjs7QUFFQSxpQkFBS0wsS0FBTCxDQUFXVyxPQUFYLENBQW1CO0FBQUEsdUJBQUtDLEVBQUVDLEtBQUYsQ0FBUWIsS0FBUixFQUFlTyxPQUFmLENBQUw7QUFBQSxhQUFuQjs7QUFFQUMscUJBQVNGLEdBQUdSLFVBQUgsQ0FBYyxLQUFLQSxVQUFMLENBQWdCVyxPQUFoQixDQUF3QkYsT0FBeEIsQ0FBZCxFQUNUTyxJQURTLENBQ0pkLEtBREksRUFDRyxLQUFLSCxNQURSLENBQVQ7O0FBR0EsaUJBQUtJLFNBQUwsQ0FBZVUsT0FBZixDQUF1QjtBQUFBLHVCQUFLSSxFQUFFRixLQUFGLENBQVFMLE1BQVIsQ0FBTDtBQUFBLGFBQXZCOztBQUVBLG1CQUFPQSxPQUFPUSxPQUFQLEdBQ1BDLElBRE8sQ0FDRixnQkFBUTs7QUFFVCx1QkFBT1osS0FBS2EsR0FBTCxDQUFTLGFBQUs7O0FBRWpCLHdCQUFJLENBQUNDLE1BQU1DLE9BQU4sQ0FBYyx1QkFBU0MsR0FBVCxDQUFhQyxDQUFiLEVBQWdCdkIsS0FBaEIsQ0FBZCxDQUFMLEVBQ0ksdUJBQVN3QixHQUFULENBQWFELENBQWIsRUFBZ0J2QixLQUFoQixFQUF1QixFQUF2Qjs7QUFFSnlCLHlCQUFLYixPQUFMLENBQWEsZUFBTzs7QUFFaEIsNEJBQUksT0FBS1QsU0FBTCxDQUFldUIsT0FBZixDQUF1QkgsQ0FBdkIsRUFBMEJJLEdBQTFCLENBQUosRUFDSSx1QkFBU0wsR0FBVCxDQUFhQyxDQUFiLEVBQWdCdkIsS0FBaEIsRUFBdUI0QixJQUF2QixDQUE0QkQsR0FBNUI7QUFFUCxxQkFMRDs7QUFPQSwyQkFBT0osQ0FBUDtBQUVILGlCQWRNLENBQVA7QUFnQkgsYUFuQk0sQ0FBUDtBQXFCSDs7Ozs7O2tCQUdVMUIsaUIiLCJmaWxlIjoiTGVmdEpvaW5TdGF0ZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuaW1wb3J0IFByb3BlcnR5IGZyb20gJ3Byb3BlcnR5LXNlZWsnO1xuXG4vKipcbiAqIExlZnRKb2luU3RhdGVtZW50IFxuICogQHBhcmFtIHthcnJheX0gZmllbGRzIFxuICogQHBhcmFtIHtzdHJpbmd9IGNvbGxlY3Rpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBhbGlhc1xuICovXG5jbGFzcyBMZWZ0Sm9pblN0YXRlbWVudCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IoZmllbGRzLCBjb2xsZWN0aW9uLCBhbGlhcywgd2hlcmUsIG1vZGlmaWVycywgY29uZGl0aW9uLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdsZWZ0LWpvaW4nO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uO1xuICAgICAgICB0aGlzLmFsaWFzID0gYWxpYXM7XG4gICAgICAgIHRoaXMuZmllbGRzID0gZmllbGRzO1xuICAgICAgICB0aGlzLndoZXJlID0gd2hlcmU7XG4gICAgICAgIHRoaXMubW9kaWZpZXJzID0gbW9kaWZpZXJzO1xuICAgICAgICB0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgYXBwbHkoZGF0YSwgZGIsIGNvbnRleHQpIHtcblxuICAgICAgICB2YXIgY3Vyc29yO1xuICAgICAgICB2YXIgYWxpYXMgPSB0aGlzLmFsaWFzLmFzVmFsdWUoKTtcbiAgICAgICAgdmFyIHdoZXJlID0gdGhpcy5jb25kaXRpb24uZ2V0V2hlcmVDbGF1c2UoZGF0YSk7XG5cbiAgICAgICAgdGhpcy53aGVyZS5mb3JFYWNoKHcgPT4gdy5hcHBseSh3aGVyZSwgY29udGV4dCkpO1xuXG4gICAgICAgIGN1cnNvciA9IGRiLmNvbGxlY3Rpb24odGhpcy5jb2xsZWN0aW9uLmFzVmFsdWUoY29udGV4dCkpLlxuICAgICAgICBmaW5kKHdoZXJlLCB0aGlzLmZpZWxkcyk7XG5cbiAgICAgICAgdGhpcy5tb2RpZmllcnMuZm9yRWFjaChtID0+IG0uYXBwbHkoY3Vyc29yKSk7XG5cbiAgICAgICAgcmV0dXJuIGN1cnNvci50b0FycmF5KCkuXG4gICAgICAgIHRoZW4oZG9jcyA9PiB7XG5cbiAgICAgICAgICAgIHJldHVybiBkYXRhLm1hcChkID0+IHtcblxuICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShQcm9wZXJ0eS5nZXQoZCwgYWxpYXMpKSlcbiAgICAgICAgICAgICAgICAgICAgUHJvcGVydHkuc2V0KGQsIGFsaWFzLCBbXSk7XG5cbiAgICAgICAgICAgICAgICBkb2NzLmZvckVhY2goZG9jID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25kaXRpb24uY29tcGFyZShkLCBkb2MpKVxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvcGVydHkuZ2V0KGQsIGFsaWFzKS5wdXNoKGRvYyk7XG5cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBkO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGVmdEpvaW5TdGF0ZW1lbnRcbiJdfQ==