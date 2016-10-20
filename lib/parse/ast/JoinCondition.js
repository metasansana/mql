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
 * JoinCondition 
 */
var JoinCondition = function (_Node) {
    _inherits(JoinCondition, _Node);

    function JoinCondition(rkey, lkey, location) {
        _classCallCheck(this, JoinCondition);

        var _this = _possibleConstructorReturn(this, (JoinCondition.__proto__ || Object.getPrototypeOf(JoinCondition)).call(this));

        _this.type = 'join-condition';
        _this.rkey = rkey;
        _this.lkey = lkey;
        _this.location = location;

        return _this;
    }

    /**
     * getWhereClause 
     */


    _createClass(JoinCondition, [{
        key: 'getWhereClause',
        value: function getWhereClause(data, context) {
            var _this2 = this;

            var where = {};
            where[this.rkey.asValue(context)] = {
                $in: data.map(function (doc) {
                    return _propertySeek2.default.get(doc, _this2.lkey.asValue(context));
                }).filter(function (doc) {
                    return doc !== undefined || doc !== null;
                })
            };
            return where;
        }
    }, {
        key: 'compare',
        value: function compare(d, doc) {

            var left = _propertySeek2.default.get(d, this.lkey.asValue({}));
            var right = _propertySeek2.default.get(doc, this.rkey.asValue({}));

            if (left === undefined || left === null) return false;

            if (right === undefined || right === null) return false;

            return left === right;
        }
    }, {
        key: 'rightCompare',
        value: function rightCompare(right1, right2) {

            var key = this.rkey.asValue({});

            return _propertySeek2.default.get(right1, key) === _propertySeek2.default.get(right2, key);
        }
    }]);

    return JoinCondition;
}(_Node3.default);

exports.default = JoinCondition;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9hc3QvSm9pbkNvbmRpdGlvbi5qcyJdLCJuYW1lcyI6WyJKb2luQ29uZGl0aW9uIiwicmtleSIsImxrZXkiLCJsb2NhdGlvbiIsInR5cGUiLCJkYXRhIiwiY29udGV4dCIsIndoZXJlIiwiYXNWYWx1ZSIsIiRpbiIsIm1hcCIsImdldCIsImRvYyIsImZpbHRlciIsInVuZGVmaW5lZCIsImQiLCJsZWZ0IiwicmlnaHQiLCJyaWdodDEiLCJyaWdodDIiLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxhOzs7QUFHRiwyQkFBWUMsSUFBWixFQUFrQkMsSUFBbEIsRUFBd0JDLFFBQXhCLEVBQWtDO0FBQUE7O0FBQUE7O0FBRzlCLGNBQUtDLElBQUwsR0FBWSxnQkFBWjtBQUNBLGNBQUtILElBQUwsR0FBWUEsSUFBWjtBQUNBLGNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQU44QjtBQVFqQzs7QUFFRDs7Ozs7Ozt1Q0FHZUUsSSxFQUFNQyxPLEVBQVM7QUFBQTs7QUFFMUIsZ0JBQUlDLFFBQVEsRUFBWjtBQUNBQSxrQkFBTSxLQUFLTixJQUFMLENBQVVPLE9BQVYsQ0FBa0JGLE9BQWxCLENBQU4sSUFBb0M7QUFDaENHLHFCQUFLSixLQUFLSyxHQUFMLENBQVM7QUFBQSwyQkFBTyx1QkFBU0MsR0FBVCxDQUFhQyxHQUFiLEVBQWtCLE9BQUtWLElBQUwsQ0FBVU0sT0FBVixDQUFrQkYsT0FBbEIsQ0FBbEIsQ0FBUDtBQUFBLGlCQUFULEVBQ0xPLE1BREssQ0FDRTtBQUFBLDJCQUFRRCxRQUFRRSxTQUFULElBQXdCRixRQUFRLElBQXZDO0FBQUEsaUJBREY7QUFEMkIsYUFBcEM7QUFJQSxtQkFBT0wsS0FBUDtBQUVIOzs7Z0NBRU9RLEMsRUFBR0gsRyxFQUFLOztBQUVaLGdCQUFJSSxPQUFPLHVCQUFTTCxHQUFULENBQWFJLENBQWIsRUFBZ0IsS0FBS2IsSUFBTCxDQUFVTSxPQUFWLENBQWtCLEVBQWxCLENBQWhCLENBQVg7QUFDQSxnQkFBSVMsUUFBUSx1QkFBU04sR0FBVCxDQUFhQyxHQUFiLEVBQWtCLEtBQUtYLElBQUwsQ0FBVU8sT0FBVixDQUFrQixFQUFsQixDQUFsQixDQUFaOztBQUVBLGdCQUFLUSxTQUFTRixTQUFWLElBQXlCRSxTQUFTLElBQXRDLEVBQ0ksT0FBTyxLQUFQOztBQUVKLGdCQUFLQyxVQUFVSCxTQUFYLElBQTBCRyxVQUFVLElBQXhDLEVBQ0ksT0FBTyxLQUFQOztBQUVKLG1CQUFRRCxTQUFTQyxLQUFqQjtBQUVIOzs7cUNBR1lDLE0sRUFBUUMsTSxFQUFROztBQUV6QixnQkFBSUMsTUFBTSxLQUFLbkIsSUFBTCxDQUFVTyxPQUFWLENBQWtCLEVBQWxCLENBQVY7O0FBRUEsbUJBQVMsdUJBQVNHLEdBQVQsQ0FBYU8sTUFBYixFQUFxQkUsR0FBckIsQ0FBRCxLQUFpQyx1QkFBU1QsR0FBVCxDQUFhUSxNQUFiLEVBQXFCQyxHQUFyQixDQUF6QztBQUVIOzs7Ozs7a0JBR1VwQixhIiwiZmlsZSI6IkpvaW5Db25kaXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcGVydHkgZnJvbSAncHJvcGVydHktc2Vlayc7XG5pbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIEpvaW5Db25kaXRpb24gXG4gKi9cbmNsYXNzIEpvaW5Db25kaXRpb24gZXh0ZW5kcyBOb2RlIHtcblxuXG4gICAgY29uc3RydWN0b3IocmtleSwgbGtleSwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnam9pbi1jb25kaXRpb24nO1xuICAgICAgICB0aGlzLnJrZXkgPSBya2V5O1xuICAgICAgICB0aGlzLmxrZXkgPSBsa2V5O1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBnZXRXaGVyZUNsYXVzZSBcbiAgICAgKi9cbiAgICBnZXRXaGVyZUNsYXVzZShkYXRhLCBjb250ZXh0KSB7XG5cbiAgICAgICAgdmFyIHdoZXJlID0ge307XG4gICAgICAgIHdoZXJlW3RoaXMucmtleS5hc1ZhbHVlKGNvbnRleHQpXSA9IHtcbiAgICAgICAgICAgICRpbjogZGF0YS5tYXAoZG9jID0+IFByb3BlcnR5LmdldChkb2MsIHRoaXMubGtleS5hc1ZhbHVlKGNvbnRleHQpKSkuXG4gICAgICAgICAgICBmaWx0ZXIoZG9jID0+IChkb2MgIT09IHVuZGVmaW5lZCkgfHwgKGRvYyAhPT0gbnVsbCkpXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB3aGVyZTtcblxuICAgIH1cblxuICAgIGNvbXBhcmUoZCwgZG9jKSB7XG5cbiAgICAgICAgdmFyIGxlZnQgPSBQcm9wZXJ0eS5nZXQoZCwgdGhpcy5sa2V5LmFzVmFsdWUoe30pKTtcbiAgICAgICAgdmFyIHJpZ2h0ID0gUHJvcGVydHkuZ2V0KGRvYywgdGhpcy5ya2V5LmFzVmFsdWUoe30pKTtcblxuICAgICAgICBpZiAoKGxlZnQgPT09IHVuZGVmaW5lZCkgfHwgKGxlZnQgPT09IG51bGwpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIGlmICgocmlnaHQgPT09IHVuZGVmaW5lZCkgfHwgKHJpZ2h0ID09PSBudWxsKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgICByZXR1cm4gKGxlZnQgPT09IHJpZ2h0KTtcblxuICAgIH1cblxuXG4gICAgcmlnaHRDb21wYXJlKHJpZ2h0MSwgcmlnaHQyKSB7XG5cbiAgICAgICAgdmFyIGtleSA9IHRoaXMucmtleS5hc1ZhbHVlKHt9KTtcblxuICAgICAgICByZXR1cm4gKChQcm9wZXJ0eS5nZXQocmlnaHQxLCBrZXkpKSA9PT0gKFByb3BlcnR5LmdldChyaWdodDIsIGtleSkpKTtcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSm9pbkNvbmRpdGlvblxuIl19