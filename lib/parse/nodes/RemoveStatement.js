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
 * RemoveStatement 
 */

var RemoveStatement = function (_Node) {
    _inherits(RemoveStatement, _Node);

    function RemoveStatement(collection, where_conditions, one, location) {
        _classCallCheck(this, RemoveStatement);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RemoveStatement).call(this));

        _this.type = 'remove-statement';
        _this.collection = collection;
        _this.where_condition = where_conditions;
        _this.one = one;
        _this.location = location;

        return _this;
    }

    return RemoveStatement;
}(_Node3.default);

exports.default = RemoveStatement;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9SZW1vdmVTdGF0ZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7O0lBR00sZTs7O0FBRUYsNkJBQVksVUFBWixFQUF3QixnQkFBeEIsRUFBMEMsR0FBMUMsRUFBK0MsUUFBL0MsRUFBeUQ7QUFBQTs7QUFBQTs7QUFHckQsY0FBSyxJQUFMLEdBQVksa0JBQVo7QUFDQSxjQUFLLFVBQUwsR0FBa0IsVUFBbEI7QUFDQSxjQUFLLGVBQUwsR0FBdUIsZ0JBQXZCO0FBQ0EsY0FBSyxHQUFMLEdBQVcsR0FBWDtBQUNBLGNBQUssUUFBTCxHQUFnQixRQUFoQjs7QUFQcUQ7QUFTeEQ7Ozs7O2tCQUlVLGUiLCJmaWxlIjoiUmVtb3ZlU3RhdGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBSZW1vdmVTdGF0ZW1lbnQgXG4gKi9cbmNsYXNzIFJlbW92ZVN0YXRlbWVudCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IoY29sbGVjdGlvbiwgd2hlcmVfY29uZGl0aW9ucywgb25lLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdyZW1vdmUtc3RhdGVtZW50JztcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uID0gY29sbGVjdGlvbjtcbiAgICAgICAgdGhpcy53aGVyZV9jb25kaXRpb24gPSB3aGVyZV9jb25kaXRpb25zO1xuICAgICAgICB0aGlzLm9uZSA9IG9uZTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbW92ZVN0YXRlbWVudFxuIl19