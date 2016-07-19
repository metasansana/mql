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
 * InnerJoinStatement 
 */

var InnerJoinStatement = function (_Node) {
    _inherits(InnerJoinStatement, _Node);

    function InnerJoinStatement(collection, field_selection, where_conditions, modifiers, location) {
        _classCallCheck(this, InnerJoinStatement);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(InnerJoinStatement).call(this));

        _this.type = 'inner-join';
        _this.collection = collection;
        _this.field_selection = field_selection;
        _this.where_condition = where_conditions;
        _this.modifiers = modifiers;
        _this.location = location;

        return _this;
    }

    return InnerJoinStatement;
}(_Node3.default);

exports.default = InnerJoinStatement;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9Jbm5lckpvaW5TdGF0ZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7O0lBR00sa0I7OztBQUVGLGdDQUFZLFVBQVosRUFBd0IsZUFBeEIsRUFBeUMsZ0JBQXpDLEVBQTJELFNBQTNELEVBQXNFLFFBQXRFLEVBQWdGO0FBQUE7O0FBQUE7O0FBRzVFLGNBQUssSUFBTCxHQUFZLFlBQVo7QUFDQSxjQUFLLFVBQUwsR0FBa0IsVUFBbEI7QUFDQSxjQUFLLGVBQUwsR0FBdUIsZUFBdkI7QUFDQSxjQUFLLGVBQUwsR0FBdUIsZ0JBQXZCO0FBQ0EsY0FBSyxTQUFMLEdBQWlCLFNBQWpCO0FBQ0EsY0FBSyxRQUFMLEdBQWdCLFFBQWhCOztBQVI0RTtBQVUvRTs7Ozs7a0JBR1Usa0IiLCJmaWxlIjoiSW5uZXJKb2luU3RhdGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBJbm5lckpvaW5TdGF0ZW1lbnQgXG4gKi9cbmNsYXNzIElubmVySm9pblN0YXRlbWVudCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IoY29sbGVjdGlvbiwgZmllbGRfc2VsZWN0aW9uLCB3aGVyZV9jb25kaXRpb25zLCBtb2RpZmllcnMsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2lubmVyLWpvaW4nO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uO1xuICAgICAgICB0aGlzLmZpZWxkX3NlbGVjdGlvbiA9IGZpZWxkX3NlbGVjdGlvbjtcbiAgICAgICAgdGhpcy53aGVyZV9jb25kaXRpb24gPSB3aGVyZV9jb25kaXRpb25zO1xuICAgICAgICB0aGlzLm1vZGlmaWVycyA9IG1vZGlmaWVycztcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBJbm5lckpvaW5TdGF0ZW1lbnRcbiJdfQ==