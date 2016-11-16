'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * PushClause
 */
var PushClause = function (_Node) {
    _inherits(PushClause, _Node);

    function PushClause(field, update, location) {
        _classCallCheck(this, PushClause);

        var _this = _possibleConstructorReturn(this, (PushClause.__proto__ || Object.getPrototypeOf(PushClause)).call(this));

        _this.type = 'push-clause';
        _this.field = field;
        _this.update = update;
        _this.location = location;

        return _this;
    }

    _createClass(PushClause, [{
        key: 'apply',
        value: function apply(update, context) {

            update.$push = _defineProperty({}, this.field, this.update.asValue(context));

            return update;
        }
    }]);

    return PushClause;
}(_Node3.default);

exports.default = PushClause;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9hc3QvUHVzaENsYXVzZS5qcyJdLCJuYW1lcyI6WyJQdXNoQ2xhdXNlIiwiZmllbGQiLCJ1cGRhdGUiLCJsb2NhdGlvbiIsInR5cGUiLCJjb250ZXh0IiwiJHB1c2giLCJhc1ZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHTUEsVTs7O0FBR0Ysd0JBQVlDLEtBQVosRUFBbUJDLE1BQW5CLEVBQTJCQyxRQUEzQixFQUFxQztBQUFBOztBQUFBOztBQUdqQyxjQUFLQyxJQUFMLEdBQVksYUFBWjtBQUNBLGNBQUtILEtBQUwsR0FBYUEsS0FBYjtBQUNBLGNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQU5pQztBQVFwQzs7Ozs4QkFFS0QsTSxFQUFRRyxPLEVBQVM7O0FBRW5CSCxtQkFBT0ksS0FBUCx1QkFFSyxLQUFLTCxLQUZWLEVBRWtCLEtBQUtDLE1BQUwsQ0FBWUssT0FBWixDQUFvQkYsT0FBcEIsQ0FGbEI7O0FBTUEsbUJBQU9ILE1BQVA7QUFFSDs7Ozs7O2tCQUlVRixVIiwiZmlsZSI6IlB1c2hDbGF1c2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIFB1c2hDbGF1c2VcbiAqL1xuY2xhc3MgUHVzaENsYXVzZSBleHRlbmRzIE5vZGUge1xuXG5cbiAgICBjb25zdHJ1Y3RvcihmaWVsZCwgdXBkYXRlLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdwdXNoLWNsYXVzZSc7XG4gICAgICAgIHRoaXMuZmllbGQgPSBmaWVsZDtcbiAgICAgICAgdGhpcy51cGRhdGUgPSB1cGRhdGU7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIGFwcGx5KHVwZGF0ZSwgY29udGV4dCkge1xuXG4gICAgICAgIHVwZGF0ZS4kcHVzaCA9IHtcblxuICAgICAgICAgICAgW3RoaXMuZmllbGRdOiB0aGlzLnVwZGF0ZS5hc1ZhbHVlKGNvbnRleHQpXG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1cGRhdGU7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHVzaENsYXVzZVxuIl19