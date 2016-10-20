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
 * LimitClause 
 */
var LimitClause = function (_Node) {
    _inherits(LimitClause, _Node);

    function LimitClause(value, location) {
        _classCallCheck(this, LimitClause);

        var _this = _possibleConstructorReturn(this, (LimitClause.__proto__ || Object.getPrototypeOf(LimitClause)).call(this));

        _this.type = 'limit-clause';
        _this.value = value;
        _this.location = location;

        return _this;
    }

    return LimitClause;
}(_Node3.default);

exports.default = LimitClause;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9hc3QvTGltaXRDbGF1c2UuanMiXSwibmFtZXMiOlsiTGltaXRDbGF1c2UiLCJ2YWx1ZSIsImxvY2F0aW9uIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHTUEsVzs7O0FBRUYseUJBQVlDLEtBQVosRUFBbUJDLFFBQW5CLEVBQTZCO0FBQUE7O0FBQUE7O0FBR3pCLGNBQUtDLElBQUwsR0FBWSxjQUFaO0FBQ0EsY0FBS0YsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBTHlCO0FBTzVCOzs7OztrQkFHVUYsVyIsImZpbGUiOiJMaW1pdENsYXVzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogTGltaXRDbGF1c2UgXG4gKi9cbmNsYXNzIExpbWl0Q2xhdXNlIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnbGltaXQtY2xhdXNlJ1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgTGltaXRDbGF1c2VcbiJdfQ==