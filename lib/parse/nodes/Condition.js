'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Condition 
 */

var Condition = function (_Node) {
    _inherits(Condition, _Node);

    function Condition(left, operator, right, location) {
        _classCallCheck(this, Condition);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Condition).call(this));

        _this.type = 'condition';
        _this.left = left;
        _this.operator = operator;
        _this.right = right;
        _this.location = location;

        return _this;
    }

    return Condition;
}(_Node3.default);

exports.default = Condition;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9Db25kaXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7O0lBR00sUzs7O0FBR0YsdUJBQVksSUFBWixFQUFrQixRQUFsQixFQUE0QixLQUE1QixFQUFtQyxRQUFuQyxFQUE2QztBQUFBOztBQUFBOztBQUd6QyxjQUFLLElBQUwsR0FBWSxXQUFaO0FBQ0EsY0FBSyxJQUFMLEdBQVksSUFBWjtBQUNBLGNBQUssUUFBTCxHQUFnQixRQUFoQjtBQUNBLGNBQUssS0FBTCxHQUFhLEtBQWI7QUFDQSxjQUFLLFFBQUwsR0FBZ0IsUUFBaEI7O0FBUHlDO0FBUzVDOzs7OztrQkFHVSxTIiwiZmlsZSI6IkNvbmRpdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogQ29uZGl0aW9uIFxuICovXG5jbGFzcyBDb25kaXRpb24gZXh0ZW5kcyBOb2RlIHtcblxuXG4gICAgY29uc3RydWN0b3IobGVmdCwgb3BlcmF0b3IsIHJpZ2h0LCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdjb25kaXRpb24nO1xuICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgICAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25kaXRpb25cbiJdfQ==