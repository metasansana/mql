'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Identifier 
 */

var Identifier = function (_Node) {
    _inherits(Identifier, _Node);

    function Identifier(value, location) {
        _classCallCheck(this, Identifier);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Identifier).call(this));

        _this.type = 'identifier';
        _this.value = value;
        _this.location = location;

        return _this;
    }

    _createClass(Identifier, [{
        key: 'transpile',
        value: function transpile() {

            return this.value;
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            return this.sourceNode(o.fileName, this.value);
        }
    }]);

    return Identifier;
}(_Node3.default);

exports.default = Identifier;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9JZGVudGlmaWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7O0lBR00sVTs7O0FBRUYsd0JBQVksS0FBWixFQUFtQixRQUFuQixFQUE2QjtBQUFBOztBQUFBOztBQUd6QixjQUFLLElBQUwsR0FBWSxZQUFaO0FBQ0EsY0FBSyxLQUFMLEdBQWEsS0FBYjtBQUNBLGNBQUssUUFBTCxHQUFnQixRQUFoQjs7QUFMeUI7QUFPNUI7Ozs7b0NBRVc7O0FBRVIsbUJBQU8sS0FBSyxLQUFaO0FBRUg7OztnQ0FFTyxDLEVBQUc7O0FBRVAsbUJBQU8sS0FBSyxVQUFMLENBQWdCLEVBQUUsUUFBbEIsRUFBNEIsS0FBSyxLQUFqQyxDQUFQO0FBRUg7Ozs7OztrQkFJVSxVIiwiZmlsZSI6IklkZW50aWZpZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIElkZW50aWZpZXIgXG4gKi9cbmNsYXNzIElkZW50aWZpZXIgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBsb2NhdGlvbikge1xuXG4gICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnaWRlbnRpZmllcic7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCB0aGlzLnZhbHVlKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBJZGVudGlmaWVyXG4iXX0=