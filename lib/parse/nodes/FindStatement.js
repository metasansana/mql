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
 * FindStatement 
 */

var FindStatement = function (_Node) {
    _inherits(FindStatement, _Node);

    function FindStatement(collection, field_selection, where_conditions, modifiers, joins, location) {
        _classCallCheck(this, FindStatement);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FindStatement).call(this));

        _this.type = 'find-statement';
        _this.collection = collection;
        _this.field_selection = field_selection;
        _this.where_condition = where_conditions;
        _this.modifiers = modifiers;
        _this.joins = joins;
        _this.location = location;

        return _this;
    }

    return FindStatement;
}(_Node3.default);

exports.default = FindStatement;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9GaW5kU3RhdGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7OztJQUdNLGE7OztBQUVGLDJCQUFZLFVBQVosRUFBd0IsZUFBeEIsRUFBeUMsZ0JBQXpDLEVBQTJELFNBQTNELEVBQXNFLEtBQXRFLEVBQTZFLFFBQTdFLEVBQXVGO0FBQUE7O0FBQUE7O0FBR25GLGNBQUssSUFBTCxHQUFZLGdCQUFaO0FBQ0EsY0FBSyxVQUFMLEdBQWtCLFVBQWxCO0FBQ0EsY0FBSyxlQUFMLEdBQXVCLGVBQXZCO0FBQ0EsY0FBSyxlQUFMLEdBQXVCLGdCQUF2QjtBQUNBLGNBQUssU0FBTCxHQUFpQixTQUFqQjtBQUNBLGNBQUssS0FBTCxHQUFhLEtBQWI7QUFDQSxjQUFLLFFBQUwsR0FBZ0IsUUFBaEI7O0FBVG1GO0FBV3RGOzs7OztrQkFHVSxhIiwiZmlsZSI6IkZpbmRTdGF0ZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIEZpbmRTdGF0ZW1lbnQgXG4gKi9cbmNsYXNzIEZpbmRTdGF0ZW1lbnQgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbGxlY3Rpb24sIGZpZWxkX3NlbGVjdGlvbiwgd2hlcmVfY29uZGl0aW9ucywgbW9kaWZpZXJzLCBqb2lucywgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnZmluZC1zdGF0ZW1lbnQnO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uO1xuICAgICAgICB0aGlzLmZpZWxkX3NlbGVjdGlvbiA9IGZpZWxkX3NlbGVjdGlvbjtcbiAgICAgICAgdGhpcy53aGVyZV9jb25kaXRpb24gPSB3aGVyZV9jb25kaXRpb25zO1xuICAgICAgICB0aGlzLm1vZGlmaWVycyA9IG1vZGlmaWVycztcbiAgICAgICAgdGhpcy5qb2lucyA9IGpvaW5zO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IEZpbmRTdGF0ZW1lbnRcbiJdfQ==