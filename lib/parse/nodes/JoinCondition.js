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

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(JoinCondition).call(this));

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
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9Kb2luQ29uZGl0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7SUFHTSxhOzs7QUFHRiwyQkFBWSxJQUFaLEVBQWtCLElBQWxCLEVBQXdCLFFBQXhCLEVBQWtDO0FBQUE7O0FBQUE7O0FBRzlCLGNBQUssSUFBTCxHQUFZLGdCQUFaO0FBQ0EsY0FBSyxJQUFMLEdBQVksSUFBWjtBQUNBLGNBQUssSUFBTCxHQUFZLElBQVo7QUFDQSxjQUFLLFFBQUwsR0FBZ0IsUUFBaEI7O0FBTjhCO0FBUWpDOztBQUVEOzs7Ozs7O3VDQUdlLEksRUFBTSxPLEVBQVM7QUFBQTs7QUFFMUIsZ0JBQUksUUFBUSxFQUFaO0FBQ0Esa0JBQU0sS0FBSyxJQUFMLENBQVUsT0FBVixDQUFrQixPQUFsQixDQUFOLElBQW9DO0FBQ2hDLHFCQUFLLEtBQUssR0FBTCxDQUFTO0FBQUEsMkJBQU8sdUJBQVMsR0FBVCxDQUFhLEdBQWIsRUFBa0IsT0FBSyxJQUFMLENBQVUsT0FBVixDQUFrQixPQUFsQixDQUFsQixDQUFQO0FBQUEsaUJBQVQsRUFDTCxNQURLLENBQ0U7QUFBQSwyQkFBUSxRQUFRLFNBQVQsSUFBd0IsUUFBUSxJQUF2QztBQUFBLGlCQURGO0FBRDJCLGFBQXBDO0FBSUEsbUJBQU8sS0FBUDtBQUVIOzs7Z0NBRU8sQyxFQUFHLEcsRUFBSzs7QUFFWixnQkFBSSxPQUFPLHVCQUFTLEdBQVQsQ0FBYSxDQUFiLEVBQWdCLEtBQUssSUFBTCxDQUFVLE9BQVYsQ0FBa0IsRUFBbEIsQ0FBaEIsQ0FBWDtBQUNBLGdCQUFJLFFBQVEsdUJBQVMsR0FBVCxDQUFhLEdBQWIsRUFBa0IsS0FBSyxJQUFMLENBQVUsT0FBVixDQUFrQixFQUFsQixDQUFsQixDQUFaOztBQUVBLGdCQUFLLFNBQVMsU0FBVixJQUF5QixTQUFTLElBQXRDLEVBQ0ksT0FBTyxLQUFQOztBQUVKLGdCQUFLLFVBQVUsU0FBWCxJQUEwQixVQUFVLElBQXhDLEVBQ0ksT0FBTyxLQUFQOztBQUVKLG1CQUFRLFNBQVMsS0FBakI7QUFFSDs7O3FDQUdZLE0sRUFBUSxNLEVBQVE7O0FBRXpCLGdCQUFJLE1BQU0sS0FBSyxJQUFMLENBQVUsT0FBVixDQUFrQixFQUFsQixDQUFWOztBQUVBLG1CQUFTLHVCQUFTLEdBQVQsQ0FBYSxNQUFiLEVBQXFCLEdBQXJCLENBQUQsS0FBaUMsdUJBQVMsR0FBVCxDQUFhLE1BQWIsRUFBcUIsR0FBckIsQ0FBekM7QUFFSDs7Ozs7O2tCQUdVLGEiLCJmaWxlIjoiSm9pbkNvbmRpdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wZXJ0eSBmcm9tICdwcm9wZXJ0eS1zZWVrJztcbmltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogSm9pbkNvbmRpdGlvbiBcbiAqL1xuY2xhc3MgSm9pbkNvbmRpdGlvbiBleHRlbmRzIE5vZGUge1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihya2V5LCBsa2V5LCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdqb2luLWNvbmRpdGlvbic7XG4gICAgICAgIHRoaXMucmtleSA9IHJrZXk7XG4gICAgICAgIHRoaXMubGtleSA9IGxrZXk7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGdldFdoZXJlQ2xhdXNlIFxuICAgICAqL1xuICAgIGdldFdoZXJlQ2xhdXNlKGRhdGEsIGNvbnRleHQpIHtcblxuICAgICAgICB2YXIgd2hlcmUgPSB7fTtcbiAgICAgICAgd2hlcmVbdGhpcy5ya2V5LmFzVmFsdWUoY29udGV4dCldID0ge1xuICAgICAgICAgICAgJGluOiBkYXRhLm1hcChkb2MgPT4gUHJvcGVydHkuZ2V0KGRvYywgdGhpcy5sa2V5LmFzVmFsdWUoY29udGV4dCkpKS5cbiAgICAgICAgICAgIGZpbHRlcihkb2MgPT4gKGRvYyAhPT0gdW5kZWZpbmVkKSB8fCAoZG9jICE9PSBudWxsKSlcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHdoZXJlO1xuXG4gICAgfVxuXG4gICAgY29tcGFyZShkLCBkb2MpIHtcblxuICAgICAgICB2YXIgbGVmdCA9IFByb3BlcnR5LmdldChkLCB0aGlzLmxrZXkuYXNWYWx1ZSh7fSkpO1xuICAgICAgICB2YXIgcmlnaHQgPSBQcm9wZXJ0eS5nZXQoZG9jLCB0aGlzLnJrZXkuYXNWYWx1ZSh7fSkpO1xuXG4gICAgICAgIGlmICgobGVmdCA9PT0gdW5kZWZpbmVkKSB8fCAobGVmdCA9PT0gbnVsbCkpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgaWYgKChyaWdodCA9PT0gdW5kZWZpbmVkKSB8fCAocmlnaHQgPT09IG51bGwpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHJldHVybiAobGVmdCA9PT0gcmlnaHQpO1xuXG4gICAgfVxuXG5cbiAgICByaWdodENvbXBhcmUocmlnaHQxLCByaWdodDIpIHtcblxuICAgICAgICB2YXIga2V5ID0gdGhpcy5ya2V5LmFzVmFsdWUoe30pO1xuXG4gICAgICAgIHJldHVybiAoKFByb3BlcnR5LmdldChyaWdodDEsIGtleSkpID09PSAoUHJvcGVydHkuZ2V0KHJpZ2h0Miwga2V5KSkpO1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBKb2luQ29uZGl0aW9uXG4iXX0=