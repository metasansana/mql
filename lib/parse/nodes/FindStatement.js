'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * FindStatement 
 */

var FindStatement = function (_Node) {
    _inherits(FindStatement, _Node);

    function FindStatement(collection, fields, where, modifiers, joins, location) {
        _classCallCheck(this, FindStatement);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FindStatement).call(this));

        _this.type = 'find-statement';
        _this.collection = collection;
        _this.fields = fields;
        _this.where = where;
        _this.modifiers = modifiers;
        _this.joins = joins;
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

            var fields = this.fields;
            var where = {};
            var cursor;

            this.where.forEach(function (w) {
                return w.apply(where, context);
            });
            cursor = db.collection(this.collection.asValue(context)).find(where, fields);
            this.modifiers.forEach(function (m) {
                return m.apply(cursor);
            });

            return this.joins.reduce(function (p, join) {
                return p.then(function (data) {
                    return join.apply(data, db, context);
                });
            }, cursor.toArray());
        }
    }]);

    return FindStatement;
}(_Node3.default);

exports.default = FindStatement;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9GaW5kU3RhdGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7O0lBR00sYTs7O0FBRUYsMkJBQVksVUFBWixFQUF3QixNQUF4QixFQUFnQyxLQUFoQyxFQUF1QyxTQUF2QyxFQUFrRCxLQUFsRCxFQUF5RCxRQUF6RCxFQUFtRTtBQUFBOztBQUFBOztBQUcvRCxjQUFLLElBQUwsR0FBWSxnQkFBWjtBQUNBLGNBQUssVUFBTCxHQUFrQixVQUFsQjtBQUNBLGNBQUssTUFBTCxHQUFjLE1BQWQ7QUFDQSxjQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0EsY0FBSyxTQUFMLEdBQWlCLFNBQWpCO0FBQ0EsY0FBSyxLQUFMLEdBQWEsS0FBYjtBQUNBLGNBQUssUUFBTCxHQUFnQixRQUFoQjs7QUFUK0Q7QUFXbEU7O0FBRUQ7Ozs7Ozs7Ozs7Z0NBTVEsRSxFQUFJLE8sRUFBUzs7QUFFakIsZ0JBQUksU0FBUyxLQUFLLE1BQWxCO0FBQ0EsZ0JBQUksUUFBUSxFQUFaO0FBQ0EsZ0JBQUksTUFBSjs7QUFFQSxpQkFBSyxLQUFMLENBQVcsT0FBWCxDQUFtQjtBQUFBLHVCQUFLLEVBQUUsS0FBRixDQUFRLEtBQVIsRUFBZSxPQUFmLENBQUw7QUFBQSxhQUFuQjtBQUNBLHFCQUFTLEdBQUcsVUFBSCxDQUFjLEtBQUssVUFBTCxDQUFnQixPQUFoQixDQUF3QixPQUF4QixDQUFkLEVBQWdELElBQWhELENBQXFELEtBQXJELEVBQTRELE1BQTVELENBQVQ7QUFDQSxpQkFBSyxTQUFMLENBQWUsT0FBZixDQUF1QjtBQUFBLHVCQUFLLEVBQUUsS0FBRixDQUFRLE1BQVIsQ0FBTDtBQUFBLGFBQXZCOztBQUVBLG1CQUFPLEtBQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0IsVUFBQyxDQUFELEVBQUksSUFBSjtBQUFBLHVCQUFhLEVBQUUsSUFBRixDQUFPLFVBQUMsSUFBRDtBQUFBLDJCQUN6QyxLQUFLLEtBQUwsQ0FBVyxJQUFYLEVBQWlCLEVBQWpCLEVBQXFCLE9BQXJCLENBRHlDO0FBQUEsaUJBQVAsQ0FBYjtBQUFBLGFBQWxCLEVBQzZCLE9BQU8sT0FBUCxFQUQ3QixDQUFQO0FBR0g7Ozs7OztrQkFJVSxhIiwiZmlsZSI6IkZpbmRTdGF0ZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIEZpbmRTdGF0ZW1lbnQgXG4gKi9cbmNsYXNzIEZpbmRTdGF0ZW1lbnQgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbGxlY3Rpb24sIGZpZWxkcywgd2hlcmUsIG1vZGlmaWVycywgam9pbnMsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2ZpbmQtc3RhdGVtZW50JztcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uID0gY29sbGVjdGlvbjtcbiAgICAgICAgdGhpcy5maWVsZHMgPSBmaWVsZHM7XG4gICAgICAgIHRoaXMud2hlcmUgPSB3aGVyZTtcbiAgICAgICAgdGhpcy5tb2RpZmllcnMgPSBtb2RpZmllcnM7XG4gICAgICAgIHRoaXMuam9pbnMgPSBqb2lucztcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZXhlY3V0ZSB0aGlzIHN0YXRlbWVudFxuICAgICAqIEBwYXJhbSB7bW9uZ29kYi5Db25uZWN0aW9ufSBkYiBcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCBcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBleGVjdXRlKGRiLCBjb250ZXh0KSB7XG5cbiAgICAgICAgdmFyIGZpZWxkcyA9IHRoaXMuZmllbGRzO1xuICAgICAgICB2YXIgd2hlcmUgPSB7fTtcbiAgICAgICAgdmFyIGN1cnNvcjtcblxuICAgICAgICB0aGlzLndoZXJlLmZvckVhY2godyA9PiB3LmFwcGx5KHdoZXJlLCBjb250ZXh0KSk7XG4gICAgICAgIGN1cnNvciA9IGRiLmNvbGxlY3Rpb24odGhpcy5jb2xsZWN0aW9uLmFzVmFsdWUoY29udGV4dCkpLmZpbmQod2hlcmUsIGZpZWxkcyk7XG4gICAgICAgIHRoaXMubW9kaWZpZXJzLmZvckVhY2gobSA9PiBtLmFwcGx5KGN1cnNvcikpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmpvaW5zLnJlZHVjZSgocCwgam9pbikgPT4gcC50aGVuKChkYXRhKSA9PlxuICAgICAgICAgICAgam9pbi5hcHBseShkYXRhLCBkYiwgY29udGV4dCkpLCBjdXJzb3IudG9BcnJheSgpKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBGaW5kU3RhdGVtZW50XG4iXX0=