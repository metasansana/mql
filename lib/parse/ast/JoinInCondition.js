'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propertySeek = require('property-seek');

var _propertySeek2 = _interopRequireDefault(_propertySeek);

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * JoinInCondition
 */
var JoinInCondition = function (_Node) {
    _inherits(JoinInCondition, _Node);

    function JoinInCondition(rkey, lkey, location) {
        _classCallCheck(this, JoinInCondition);

        var _this = _possibleConstructorReturn(this, (JoinInCondition.__proto__ || Object.getPrototypeOf(JoinInCondition)).call(this));

        _this.type = 'join-in-condition';
        _this.rkey = rkey;
        _this.lkey = lkey;
        _this.location = location;

        return _this;
    }

    /**
     * getWhereClause
     */


    _createClass(JoinInCondition, [{
        key: 'getWhereClause',
        value: function getWhereClause(data, context) {
            var _this2 = this;

            var where = {};

            where[this.rkey.asValue(context)] = {

                $in: [].concat.apply([], data.map(function (doc) {
                    var target = _propertySeek2.default.get(doc, _this2.lkey.asValue(context));
                    return Array.isArray(target) ? target : [];
                }))

            };

            return where;
        }
    }]);

    return JoinInCondition;
}(_Node3.default);

exports.default = JoinInCondition;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9hc3QvSm9pbkluQ29uZGl0aW9uLmpzIl0sIm5hbWVzIjpbIkpvaW5JbkNvbmRpdGlvbiIsInJrZXkiLCJsa2V5IiwibG9jYXRpb24iLCJ0eXBlIiwiZGF0YSIsImNvbnRleHQiLCJ3aGVyZSIsImFzVmFsdWUiLCIkaW4iLCJjb25jYXQiLCJhcHBseSIsIm1hcCIsInRhcmdldCIsImdldCIsImRvYyIsIkFycmF5IiwiaXNBcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR01BLGU7OztBQUdGLDZCQUFZQyxJQUFaLEVBQWtCQyxJQUFsQixFQUF3QkMsUUFBeEIsRUFBa0M7QUFBQTs7QUFBQTs7QUFHOUIsY0FBS0MsSUFBTCxHQUFZLG1CQUFaO0FBQ0EsY0FBS0gsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsY0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBTjhCO0FBUWpDOztBQUVEOzs7Ozs7O3VDQUdlRSxJLEVBQU1DLE8sRUFBUztBQUFBOztBQUUxQixnQkFBSUMsUUFBUSxFQUFaOztBQUVBQSxrQkFBTSxLQUFLTixJQUFMLENBQVVPLE9BQVYsQ0FBa0JGLE9BQWxCLENBQU4sSUFBb0M7O0FBRWhDRyxxQkFBSyxHQUFHQyxNQUFILENBQVVDLEtBQVYsQ0FBZ0IsRUFBaEIsRUFBcUJOLEtBQUtPLEdBQUwsQ0FBUyxlQUFPO0FBQ3RDLHdCQUFJQyxTQUFTLHVCQUFTQyxHQUFULENBQWFDLEdBQWIsRUFBa0IsT0FBS2IsSUFBTCxDQUFVTSxPQUFWLENBQWtCRixPQUFsQixDQUFsQixDQUFiO0FBQ0EsMkJBQU9VLE1BQU1DLE9BQU4sQ0FBY0osTUFBZCxJQUF3QkEsTUFBeEIsR0FBaUMsRUFBeEM7QUFDSCxpQkFIeUIsQ0FBckI7O0FBRjJCLGFBQXBDOztBQVNBLG1CQUFPTixLQUFQO0FBRUg7Ozs7OztrQkFJVVAsZSIsImZpbGUiOiJKb2luSW5Db25kaXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcGVydHkgZnJvbSAncHJvcGVydHktc2Vlayc7XG5pbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIEpvaW5JbkNvbmRpdGlvblxuICovXG5jbGFzcyBKb2luSW5Db25kaXRpb24gZXh0ZW5kcyBOb2RlIHtcblxuXG4gICAgY29uc3RydWN0b3IocmtleSwgbGtleSwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnam9pbi1pbi1jb25kaXRpb24nO1xuICAgICAgICB0aGlzLnJrZXkgPSBya2V5O1xuICAgICAgICB0aGlzLmxrZXkgPSBsa2V5O1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBnZXRXaGVyZUNsYXVzZVxuICAgICAqL1xuICAgIGdldFdoZXJlQ2xhdXNlKGRhdGEsIGNvbnRleHQpIHtcblxuICAgICAgICB2YXIgd2hlcmUgPSB7fTtcblxuICAgICAgICB3aGVyZVt0aGlzLnJrZXkuYXNWYWx1ZShjb250ZXh0KV0gPSB7XG5cbiAgICAgICAgICAgICRpbjogW10uY29uY2F0LmFwcGx5KFtdLCAoZGF0YS5tYXAoZG9jID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gUHJvcGVydHkuZ2V0KGRvYywgdGhpcy5sa2V5LmFzVmFsdWUoY29udGV4dCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHRhcmdldCkgPyB0YXJnZXQgOiBbXTtcbiAgICAgICAgICAgIH0pKSlcblxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB3aGVyZTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBKb2luSW5Db25kaXRpb25cbiJdfQ==