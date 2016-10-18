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
 * SortClause 
 */
var SortClause = function (_Node) {
    _inherits(SortClause, _Node);

    function SortClause(fields, location) {
        _classCallCheck(this, SortClause);

        var _this = _possibleConstructorReturn(this, (SortClause.__proto__ || Object.getPrototypeOf(SortClause)).call(this));

        _this.type = 'sort-clause';
        _this.fields = fields;
        _this.location = location;

        return _this;
    }

    return SortClause;
}(_Node3.default);

exports.default = SortClause;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9Tb3J0Q2xhdXNlLmpzIl0sIm5hbWVzIjpbIlNvcnRDbGF1c2UiLCJmaWVsZHMiLCJsb2NhdGlvbiIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR01BLFU7OztBQUVGLHdCQUFZQyxNQUFaLEVBQW9CQyxRQUFwQixFQUE4QjtBQUFBOztBQUFBOztBQUcxQixjQUFLQyxJQUFMLEdBQVksYUFBWjtBQUNBLGNBQUtGLE1BQUwsR0FBY0EsTUFBZDtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQUwwQjtBQU83Qjs7Ozs7a0JBR1VGLFUiLCJmaWxlIjoiU29ydENsYXVzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogU29ydENsYXVzZSBcbiAqL1xuY2xhc3MgU29ydENsYXVzZSBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IoZmllbGRzLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdzb3J0LWNsYXVzZSdcbiAgICAgICAgdGhpcy5maWVsZHMgPSBmaWVsZHM7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgU29ydENsYXVzZVxuIl19