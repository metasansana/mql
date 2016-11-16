'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _beof = require('beof');

var _beof2 = _interopRequireDefault(_beof);

var _Statement2 = require('./Statement');

var _Statement3 = _interopRequireDefault(_Statement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * FindStatement
 */
var FindStatement = function (_Statement) {
    _inherits(FindStatement, _Statement);

    function FindStatement(collection, fields, where, modifiers, joins, one, location) {
        _classCallCheck(this, FindStatement);

        var _this = _possibleConstructorReturn(this, (FindStatement.__proto__ || Object.getPrototypeOf(FindStatement)).call(this));

        _this.type = 'find-statement';
        _this.collection = collection;
        _this.fields = fields;
        _this.where = where;
        _this.modifiers = modifiers;
        _this.joins = joins;
        _this.one = one || false;
        _this.location = location;

        return _this;
    }

    /**
     * execute this statement
     * @param {mongodb.Connection} db
     * @param {object} context
     * @returns {Promise}
     */


    _createClass(FindStatement, [{
        key: 'execute',
        value: function execute(db, context) {
            var _this2 = this;

            var fields = {
                _id: false
            };
            var where = {};
            var cursor;

            where = this.where.reduce(function (prev, curr) {
                return curr.apply(prev, context);
            }, where);

            fields = this.fields.reduce(function (prev, curr) {
                return curr.apply(prev, context);
            }, fields);

            cursor = db.collection(this.collection.asValue(context)).find(where).project(fields);

            cursor = this.modifiers.reduce(function (prev, curr) {
                return curr.apply(prev, context);
            }, cursor);

            return this.joins.reduce(function (p, join) {
                return p.then(function (data) {
                    return join.apply(data, db, context);
                });
            }, cursor.toArray()).then(function (data) {
                return _this2.one ? data[0] : data;
            });
        }
    }]);

    return FindStatement;
}(_Statement3.default);

exports.default = FindStatement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9hc3QvRmluZFN0YXRlbWVudC5qcyJdLCJuYW1lcyI6WyJGaW5kU3RhdGVtZW50IiwiY29sbGVjdGlvbiIsImZpZWxkcyIsIndoZXJlIiwibW9kaWZpZXJzIiwiam9pbnMiLCJvbmUiLCJsb2NhdGlvbiIsInR5cGUiLCJkYiIsImNvbnRleHQiLCJfaWQiLCJjdXJzb3IiLCJyZWR1Y2UiLCJwcmV2IiwiY3VyciIsImFwcGx5IiwiYXNWYWx1ZSIsImZpbmQiLCJwcm9qZWN0IiwicCIsImpvaW4iLCJ0aGVuIiwiZGF0YSIsInRvQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxhOzs7QUFFRiwyQkFBWUMsVUFBWixFQUF3QkMsTUFBeEIsRUFBZ0NDLEtBQWhDLEVBQXVDQyxTQUF2QyxFQUFrREMsS0FBbEQsRUFBeURDLEdBQXpELEVBQThEQyxRQUE5RCxFQUF3RTtBQUFBOztBQUFBOztBQUdwRSxjQUFLQyxJQUFMLEdBQVksZ0JBQVo7QUFDQSxjQUFLUCxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLGNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLGNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGNBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsY0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsY0FBS0MsR0FBTCxHQUFXQSxPQUFPLEtBQWxCO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBVm9FO0FBWXZFOztBQUVEOzs7Ozs7Ozs7O2dDQU1RRSxFLEVBQUlDLE8sRUFBUztBQUFBOztBQUVqQixnQkFBSVIsU0FBUztBQUNUUyxxQkFBSztBQURJLGFBQWI7QUFHQSxnQkFBSVIsUUFBUSxFQUFaO0FBQ0EsZ0JBQUlTLE1BQUo7O0FBRUFULG9CQUFRLEtBQUtBLEtBQUwsQ0FBV1UsTUFBWCxDQUFrQixVQUFDQyxJQUFELEVBQU9DLElBQVA7QUFBQSx1QkFBZ0JBLEtBQUtDLEtBQUwsQ0FBV0YsSUFBWCxFQUFpQkosT0FBakIsQ0FBaEI7QUFBQSxhQUFsQixFQUE2RFAsS0FBN0QsQ0FBUjs7QUFFQUQscUJBQVMsS0FBS0EsTUFBTCxDQUFZVyxNQUFaLENBQW1CLFVBQUNDLElBQUQsRUFBT0MsSUFBUDtBQUFBLHVCQUFnQkEsS0FBS0MsS0FBTCxDQUFXRixJQUFYLEVBQWlCSixPQUFqQixDQUFoQjtBQUFBLGFBQW5CLEVBQThEUixNQUE5RCxDQUFUOztBQUVBVSxxQkFBU0gsR0FBR1IsVUFBSCxDQUFjLEtBQUtBLFVBQUwsQ0FBZ0JnQixPQUFoQixDQUF3QlAsT0FBeEIsQ0FBZCxFQUFnRFEsSUFBaEQsQ0FBcURmLEtBQXJELEVBQTREZ0IsT0FBNUQsQ0FBb0VqQixNQUFwRSxDQUFUOztBQUVBVSxxQkFBUyxLQUFLUixTQUFMLENBQWVTLE1BQWYsQ0FBc0IsVUFBQ0MsSUFBRCxFQUFPQyxJQUFQO0FBQUEsdUJBQWdCQSxLQUFLQyxLQUFMLENBQVdGLElBQVgsRUFBaUJKLE9BQWpCLENBQWhCO0FBQUEsYUFBdEIsRUFBaUVFLE1BQWpFLENBQVQ7O0FBRUEsbUJBQU8sS0FBS1AsS0FBTCxDQUFXUSxNQUFYLENBQWtCLFVBQUNPLENBQUQsRUFBSUMsSUFBSjtBQUFBLHVCQUFhRCxFQUFFRSxJQUFGLENBQU8sVUFBQ0MsSUFBRDtBQUFBLDJCQUN6Q0YsS0FBS0wsS0FBTCxDQUFXTyxJQUFYLEVBQWlCZCxFQUFqQixFQUFxQkMsT0FBckIsQ0FEeUM7QUFBQSxpQkFBUCxDQUFiO0FBQUEsYUFBbEIsRUFDNkJFLE9BQU9ZLE9BQVAsRUFEN0IsRUFFUEYsSUFGTyxDQUVGO0FBQUEsdUJBQVMsT0FBS2hCLEdBQU4sR0FBYWlCLEtBQUssQ0FBTCxDQUFiLEdBQXVCQSxJQUEvQjtBQUFBLGFBRkUsQ0FBUDtBQUlIOzs7Ozs7a0JBSVV2QixhIiwiZmlsZSI6IkZpbmRTdGF0ZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmVvZiBmcm9tICdiZW9mJztcbmltcG9ydCBTdGF0ZW1lbnQgZnJvbSAnLi9TdGF0ZW1lbnQnO1xuXG4vKipcbiAqIEZpbmRTdGF0ZW1lbnRcbiAqL1xuY2xhc3MgRmluZFN0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb2xsZWN0aW9uLCBmaWVsZHMsIHdoZXJlLCBtb2RpZmllcnMsIGpvaW5zLCBvbmUsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2ZpbmQtc3RhdGVtZW50JztcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uID0gY29sbGVjdGlvbjtcbiAgICAgICAgdGhpcy5maWVsZHMgPSBmaWVsZHM7XG4gICAgICAgIHRoaXMud2hlcmUgPSB3aGVyZTtcbiAgICAgICAgdGhpcy5tb2RpZmllcnMgPSBtb2RpZmllcnM7XG4gICAgICAgIHRoaXMuam9pbnMgPSBqb2lucztcbiAgICAgICAgdGhpcy5vbmUgPSBvbmUgfHwgZmFsc2U7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGV4ZWN1dGUgdGhpcyBzdGF0ZW1lbnRcbiAgICAgKiBAcGFyYW0ge21vbmdvZGIuQ29ubmVjdGlvbn0gZGJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dFxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGV4ZWN1dGUoZGIsIGNvbnRleHQpIHtcblxuICAgICAgICB2YXIgZmllbGRzID0ge1xuICAgICAgICAgICAgX2lkOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICB2YXIgd2hlcmUgPSB7fTtcbiAgICAgICAgdmFyIGN1cnNvcjtcblxuICAgICAgICB3aGVyZSA9IHRoaXMud2hlcmUucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBjdXJyLmFwcGx5KHByZXYsIGNvbnRleHQpLCB3aGVyZSk7XG5cbiAgICAgICAgZmllbGRzID0gdGhpcy5maWVsZHMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBjdXJyLmFwcGx5KHByZXYsIGNvbnRleHQpLCBmaWVsZHMpO1xuXG4gICAgICAgIGN1cnNvciA9IGRiLmNvbGxlY3Rpb24odGhpcy5jb2xsZWN0aW9uLmFzVmFsdWUoY29udGV4dCkpLmZpbmQod2hlcmUpLnByb2plY3QoZmllbGRzKTtcblxuICAgICAgICBjdXJzb3IgPSB0aGlzLm1vZGlmaWVycy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IGN1cnIuYXBwbHkocHJldiwgY29udGV4dCksIGN1cnNvcik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuam9pbnMucmVkdWNlKChwLCBqb2luKSA9PiBwLnRoZW4oKGRhdGEpID0+XG4gICAgICAgICAgICBqb2luLmFwcGx5KGRhdGEsIGRiLCBjb250ZXh0KSksIGN1cnNvci50b0FycmF5KCkpLlxuICAgICAgICB0aGVuKGRhdGEgPT4gKHRoaXMub25lKSA/IGRhdGFbMF0gOiBkYXRhKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBGaW5kU3RhdGVtZW50XG4iXX0=