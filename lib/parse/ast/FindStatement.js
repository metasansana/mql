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

  function FindStatement(collection, fields, where, modifiers, joins, location) {
    _classCallCheck(this, FindStatement);

    var _this = _possibleConstructorReturn(this, (FindStatement.__proto__ || Object.getPrototypeOf(FindStatement)).call(this));

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
}(_Statement3.default);

exports.default = FindStatement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9hc3QvRmluZFN0YXRlbWVudC5qcyJdLCJuYW1lcyI6WyJGaW5kU3RhdGVtZW50IiwiY29sbGVjdGlvbiIsImZpZWxkcyIsIndoZXJlIiwibW9kaWZpZXJzIiwiam9pbnMiLCJsb2NhdGlvbiIsInR5cGUiLCJkYiIsImNvbnRleHQiLCJfaWQiLCJjdXJzb3IiLCJyZWR1Y2UiLCJwcmV2IiwiY3VyciIsImFwcGx5IiwiYXNWYWx1ZSIsImZpbmQiLCJmb3JFYWNoIiwibSIsInAiLCJqb2luIiwidGhlbiIsImRhdGEiLCJ0b0FycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHTUEsYTs7O0FBRUoseUJBQVlDLFVBQVosRUFBd0JDLE1BQXhCLEVBQWdDQyxLQUFoQyxFQUF1Q0MsU0FBdkMsRUFBa0RDLEtBQWxELEVBQXlEQyxRQUF6RCxFQUFtRTtBQUFBOztBQUFBOztBQUdqRSxVQUFLQyxJQUFMLEdBQVksZ0JBQVo7QUFDQSxVQUFLTixVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFVBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFVBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFVBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsVUFBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBVGlFO0FBV2xFOztBQUVEOzs7Ozs7Ozs7OzRCQU1RRSxFLEVBQUlDLE8sRUFBUzs7QUFFbkIsVUFBSVAsU0FBUztBQUNYUSxhQUFLO0FBRE0sT0FBYjtBQUdBLFVBQUlQLFFBQVEsRUFBWjtBQUNBLFVBQUlRLE1BQUo7O0FBRUFSLGNBQVEsS0FBS0EsS0FBTCxDQUFXUyxNQUFYLENBQWtCLFVBQUNDLElBQUQsRUFBT0MsSUFBUDtBQUFBLGVBQWdCQSxLQUFLQyxLQUFMLENBQVdGLElBQVgsRUFBaUJKLE9BQWpCLENBQWhCO0FBQUEsT0FBbEIsRUFBNkROLEtBQTdELENBQVI7O0FBRUFELGVBQVMsS0FBS0EsTUFBTCxDQUFZVSxNQUFaLENBQW1CLFVBQUNDLElBQUQsRUFBT0MsSUFBUDtBQUFBLGVBQWdCQSxLQUFLQyxLQUFMLENBQVdGLElBQVgsRUFBaUJKLE9BQWpCLENBQWhCO0FBQUEsT0FBbkIsRUFBOERQLE1BQTlELENBQVQ7O0FBRUFTLGVBQVNILEdBQUdQLFVBQUgsQ0FBYyxLQUFLQSxVQUFMLENBQWdCZSxPQUFoQixDQUF3QlAsT0FBeEIsQ0FBZCxFQUFnRFEsSUFBaEQsQ0FBcURkLEtBQXJELEVBQTRERCxNQUE1RCxDQUFUOztBQUVBLFdBQUtFLFNBQUwsQ0FBZWMsT0FBZixDQUF1QjtBQUFBLGVBQUtDLEVBQUVKLEtBQUYsQ0FBUUosTUFBUixDQUFMO0FBQUEsT0FBdkI7O0FBRUEsYUFBTyxLQUFLTixLQUFMLENBQVdPLE1BQVgsQ0FBa0IsVUFBQ1EsQ0FBRCxFQUFJQyxJQUFKO0FBQUEsZUFBYUQsRUFBRUUsSUFBRixDQUFPLFVBQUNDLElBQUQ7QUFBQSxpQkFDM0NGLEtBQUtOLEtBQUwsQ0FBV1EsSUFBWCxFQUFpQmYsRUFBakIsRUFBcUJDLE9BQXJCLENBRDJDO0FBQUEsU0FBUCxDQUFiO0FBQUEsT0FBbEIsRUFDMkJFLE9BQU9hLE9BQVAsRUFEM0IsQ0FBUDtBQUdEOzs7Ozs7a0JBSVl4QixhIiwiZmlsZSI6IkZpbmRTdGF0ZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmVvZiBmcm9tICdiZW9mJztcbmltcG9ydCBTdGF0ZW1lbnQgZnJvbSAnLi9TdGF0ZW1lbnQnO1xuXG4vKipcbiAqIEZpbmRTdGF0ZW1lbnRcbiAqL1xuY2xhc3MgRmluZFN0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG5cbiAgY29uc3RydWN0b3IoY29sbGVjdGlvbiwgZmllbGRzLCB3aGVyZSwgbW9kaWZpZXJzLCBqb2lucywgbG9jYXRpb24pIHtcblxuICAgIHN1cGVyKCk7XG4gICAgdGhpcy50eXBlID0gJ2ZpbmQtc3RhdGVtZW50JztcbiAgICB0aGlzLmNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uO1xuICAgIHRoaXMuZmllbGRzID0gZmllbGRzO1xuICAgIHRoaXMud2hlcmUgPSB3aGVyZTtcbiAgICB0aGlzLm1vZGlmaWVycyA9IG1vZGlmaWVycztcbiAgICB0aGlzLmpvaW5zID0gam9pbnM7XG4gICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gIH1cblxuICAvKipcbiAgICogZXhlY3V0ZSB0aGlzIHN0YXRlbWVudFxuICAgKiBAcGFyYW0ge21vbmdvZGIuQ29ubmVjdGlvbn0gZGJcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHRcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBleGVjdXRlKGRiLCBjb250ZXh0KSB7XG5cbiAgICB2YXIgZmllbGRzID0ge1xuICAgICAgX2lkOiBmYWxzZVxuICAgIH07XG4gICAgdmFyIHdoZXJlID0ge307XG4gICAgdmFyIGN1cnNvcjtcblxuICAgIHdoZXJlID0gdGhpcy53aGVyZS5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IGN1cnIuYXBwbHkocHJldiwgY29udGV4dCksIHdoZXJlKTtcblxuICAgIGZpZWxkcyA9IHRoaXMuZmllbGRzLnJlZHVjZSgocHJldiwgY3VycikgPT4gY3Vyci5hcHBseShwcmV2LCBjb250ZXh0KSwgZmllbGRzKTtcblxuICAgIGN1cnNvciA9IGRiLmNvbGxlY3Rpb24odGhpcy5jb2xsZWN0aW9uLmFzVmFsdWUoY29udGV4dCkpLmZpbmQod2hlcmUsIGZpZWxkcyk7XG5cbiAgICB0aGlzLm1vZGlmaWVycy5mb3JFYWNoKG0gPT4gbS5hcHBseShjdXJzb3IpKTtcblxuICAgIHJldHVybiB0aGlzLmpvaW5zLnJlZHVjZSgocCwgam9pbikgPT4gcC50aGVuKChkYXRhKSA9PlxuICAgICAgam9pbi5hcHBseShkYXRhLCBkYiwgY29udGV4dCkpLCBjdXJzb3IudG9BcnJheSgpKTtcblxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmluZFN0YXRlbWVudFxuXG4iXX0=