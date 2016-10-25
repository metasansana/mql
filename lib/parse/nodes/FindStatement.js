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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9GaW5kU3RhdGVtZW50LmpzIl0sIm5hbWVzIjpbIkZpbmRTdGF0ZW1lbnQiLCJjb2xsZWN0aW9uIiwiZmllbGRzIiwid2hlcmUiLCJtb2RpZmllcnMiLCJqb2lucyIsImxvY2F0aW9uIiwidHlwZSIsImRiIiwiY29udGV4dCIsIl9pZCIsImN1cnNvciIsInJlZHVjZSIsInByZXYiLCJjdXJyIiwiYXBwbHkiLCJhc1ZhbHVlIiwiZmluZCIsImZvckVhY2giLCJtIiwicCIsImpvaW4iLCJ0aGVuIiwiZGF0YSIsInRvQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxhOzs7QUFFSix5QkFBWUMsVUFBWixFQUF3QkMsTUFBeEIsRUFBZ0NDLEtBQWhDLEVBQXVDQyxTQUF2QyxFQUFrREMsS0FBbEQsRUFBeURDLFFBQXpELEVBQW1FO0FBQUE7O0FBQUE7O0FBR2pFLFVBQUtDLElBQUwsR0FBWSxnQkFBWjtBQUNBLFVBQUtOLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsVUFBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsVUFBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsVUFBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxVQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxVQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjs7QUFUaUU7QUFXbEU7O0FBRUQ7Ozs7Ozs7Ozs7NEJBTVFFLEUsRUFBSUMsTyxFQUFTOztBQUVuQixVQUFJUCxTQUFTO0FBQ1hRLGFBQUs7QUFETSxPQUFiO0FBR0EsVUFBSVAsUUFBUSxFQUFaO0FBQ0EsVUFBSVEsTUFBSjs7QUFFQVIsY0FBUSxLQUFLQSxLQUFMLENBQVdTLE1BQVgsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFPQyxJQUFQO0FBQUEsZUFBZ0JBLEtBQUtDLEtBQUwsQ0FBV0YsSUFBWCxFQUFpQkosT0FBakIsQ0FBaEI7QUFBQSxPQUFsQixFQUE2RE4sS0FBN0QsQ0FBUjs7QUFFQUQsZUFBUyxLQUFLQSxNQUFMLENBQVlVLE1BQVosQ0FBbUIsVUFBQ0MsSUFBRCxFQUFPQyxJQUFQO0FBQUEsZUFBZ0JBLEtBQUtDLEtBQUwsQ0FBV0YsSUFBWCxFQUFpQkosT0FBakIsQ0FBaEI7QUFBQSxPQUFuQixFQUE4RFAsTUFBOUQsQ0FBVDs7QUFFQVMsZUFBU0gsR0FBR1AsVUFBSCxDQUFjLEtBQUtBLFVBQUwsQ0FBZ0JlLE9BQWhCLENBQXdCUCxPQUF4QixDQUFkLEVBQWdEUSxJQUFoRCxDQUFxRGQsS0FBckQsRUFBNERELE1BQTVELENBQVQ7O0FBRUEsV0FBS0UsU0FBTCxDQUFlYyxPQUFmLENBQXVCO0FBQUEsZUFBS0MsRUFBRUosS0FBRixDQUFRSixNQUFSLENBQUw7QUFBQSxPQUF2Qjs7QUFFQSxhQUFPLEtBQUtOLEtBQUwsQ0FBV08sTUFBWCxDQUFrQixVQUFDUSxDQUFELEVBQUlDLElBQUo7QUFBQSxlQUFhRCxFQUFFRSxJQUFGLENBQU8sVUFBQ0MsSUFBRDtBQUFBLGlCQUMzQ0YsS0FBS04sS0FBTCxDQUFXUSxJQUFYLEVBQWlCZixFQUFqQixFQUFxQkMsT0FBckIsQ0FEMkM7QUFBQSxTQUFQLENBQWI7QUFBQSxPQUFsQixFQUMyQkUsT0FBT2EsT0FBUCxFQUQzQixDQUFQO0FBR0Q7Ozs7OztrQkFJWXhCLGEiLCJmaWxlIjoiRmluZFN0YXRlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiZW9mIGZyb20gJ2Jlb2YnO1xuaW1wb3J0IFN0YXRlbWVudCBmcm9tICcuL1N0YXRlbWVudCc7XG5cbi8qKlxuICogRmluZFN0YXRlbWVudFxuICovXG5jbGFzcyBGaW5kU3RhdGVtZW50IGV4dGVuZHMgU3RhdGVtZW50IHtcblxuICBjb25zdHJ1Y3Rvcihjb2xsZWN0aW9uLCBmaWVsZHMsIHdoZXJlLCBtb2RpZmllcnMsIGpvaW5zLCBsb2NhdGlvbikge1xuXG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnR5cGUgPSAnZmluZC1zdGF0ZW1lbnQnO1xuICAgIHRoaXMuY29sbGVjdGlvbiA9IGNvbGxlY3Rpb247XG4gICAgdGhpcy5maWVsZHMgPSBmaWVsZHM7XG4gICAgdGhpcy53aGVyZSA9IHdoZXJlO1xuICAgIHRoaXMubW9kaWZpZXJzID0gbW9kaWZpZXJzO1xuICAgIHRoaXMuam9pbnMgPSBqb2lucztcbiAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBleGVjdXRlIHRoaXMgc3RhdGVtZW50XG4gICAqIEBwYXJhbSB7bW9uZ29kYi5Db25uZWN0aW9ufSBkYlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGV4ZWN1dGUoZGIsIGNvbnRleHQpIHtcblxuICAgIHZhciBmaWVsZHMgPSB7XG4gICAgICBfaWQ6IGZhbHNlXG4gICAgfTtcbiAgICB2YXIgd2hlcmUgPSB7fTtcbiAgICB2YXIgY3Vyc29yO1xuXG4gICAgd2hlcmUgPSB0aGlzLndoZXJlLnJlZHVjZSgocHJldiwgY3VycikgPT4gY3Vyci5hcHBseShwcmV2LCBjb250ZXh0KSwgd2hlcmUpO1xuXG4gICAgZmllbGRzID0gdGhpcy5maWVsZHMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBjdXJyLmFwcGx5KHByZXYsIGNvbnRleHQpLCBmaWVsZHMpO1xuXG4gICAgY3Vyc29yID0gZGIuY29sbGVjdGlvbih0aGlzLmNvbGxlY3Rpb24uYXNWYWx1ZShjb250ZXh0KSkuZmluZCh3aGVyZSwgZmllbGRzKTtcblxuICAgIHRoaXMubW9kaWZpZXJzLmZvckVhY2gobSA9PiBtLmFwcGx5KGN1cnNvcikpO1xuXG4gICAgcmV0dXJuIHRoaXMuam9pbnMucmVkdWNlKChwLCBqb2luKSA9PiBwLnRoZW4oKGRhdGEpID0+XG4gICAgICBqb2luLmFwcGx5KGRhdGEsIGRiLCBjb250ZXh0KSksIGN1cnNvci50b0FycmF5KCkpO1xuXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBGaW5kU3RhdGVtZW50XG5cbiJdfQ==