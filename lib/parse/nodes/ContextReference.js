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
 * ContextReference 
 */

var ContextReference = function (_Node) {
    _inherits(ContextReference, _Node);

    function ContextReference(field, location) {
        _classCallCheck(this, ContextReference);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ContextReference).call(this));

        _this.type = 'context-reference';
        _this.field = field;
        _this.location = location;

        return _this;
    }

    return ContextReference;
}(_Node3.default);

exports.default = ContextReference;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9Db250ZXh0UmVmZXJlbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7OztJQUdNLGdCOzs7QUFHRiw4QkFBWSxLQUFaLEVBQW9CLFFBQXBCLEVBQThCO0FBQUE7O0FBQUE7O0FBRzFCLGNBQUssSUFBTCxHQUFZLG1CQUFaO0FBQ0EsY0FBSyxLQUFMLEdBQWEsS0FBYjtBQUNBLGNBQUssUUFBTCxHQUFnQixRQUFoQjs7QUFMMEI7QUFPN0I7Ozs7O2tCQUdVLGdCIiwiZmlsZSI6IkNvbnRleHRSZWZlcmVuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIENvbnRleHRSZWZlcmVuY2UgXG4gKi9cbmNsYXNzIENvbnRleHRSZWZlcmVuY2UgZXh0ZW5kcyBOb2RlIHtcblxuXG4gICAgY29uc3RydWN0b3IoZmllbGQsICBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdjb250ZXh0LXJlZmVyZW5jZSc7XG4gICAgICAgIHRoaXMuZmllbGQgPSBmaWVsZDtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250ZXh0UmVmZXJlbmNlXG4iXX0=