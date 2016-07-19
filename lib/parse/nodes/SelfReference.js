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
 * FieldReference 
 */

var FieldReference = function (_Node) {
    _inherits(FieldReference, _Node);

    function FieldReference(value, include, location) {
        _classCallCheck(this, FieldReference);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FieldReference).call(this));

        _this.type = 'field-reference';
        _this.value = value;
        _this.include = include;
        _this.location = location;

        return _this;
    }

    return FieldReference;
}(_Node3.default);

exports.default = FieldReference;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9TZWxmUmVmZXJlbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7OztJQUdNLGM7OztBQUdGLDRCQUFZLEtBQVosRUFBbUIsT0FBbkIsRUFBNEIsUUFBNUIsRUFBc0M7QUFBQTs7QUFBQTs7QUFHbEMsY0FBSyxJQUFMLEdBQVksaUJBQVo7QUFDQSxjQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0EsY0FBSyxPQUFMLEdBQWUsT0FBZjtBQUNBLGNBQUssUUFBTCxHQUFnQixRQUFoQjs7QUFOa0M7QUFRckM7Ozs7O2tCQUdVLGMiLCJmaWxlIjoiU2VsZlJlZmVyZW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogRmllbGRSZWZlcmVuY2UgXG4gKi9cbmNsYXNzIEZpZWxkUmVmZXJlbmNlIGV4dGVuZHMgTm9kZSB7XG5cblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBpbmNsdWRlLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdmaWVsZC1yZWZlcmVuY2UnO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuaW5jbHVkZSA9IGluY2x1ZGU7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmllbGRSZWZlcmVuY2VcbiJdfQ==