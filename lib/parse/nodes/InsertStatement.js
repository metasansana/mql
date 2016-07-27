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
 * InputStatement 
 */

var InputStatement = function (_Node) {
    _inherits(InputStatement, _Node);

    function InputStatement(collection, values, location) {
        _classCallCheck(this, InputStatement);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(InputStatement).call(this));

        _this.type = 'insert-statement';
        _this.collection = collection;
        _this.values = values;
        _this.location = location;

        return _this;
    }

    _createClass(InputStatement, [{
        key: 'execute',
        value: function execute(db, context) {

            return db.collection(this.collection.asValue(context)).insertOne(this.values.asValue(context));
        }
    }]);

    return InputStatement;
}(_Node3.default);

exports.default = InputStatement;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9JbnNlcnRTdGF0ZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7SUFHTSxjOzs7QUFFRiw0QkFBWSxVQUFaLEVBQXdCLE1BQXhCLEVBQWdDLFFBQWhDLEVBQTBDO0FBQUE7O0FBQUE7O0FBR3RDLGNBQUssSUFBTCxHQUFZLGtCQUFaO0FBQ0EsY0FBSyxVQUFMLEdBQWtCLFVBQWxCO0FBQ0EsY0FBSyxNQUFMLEdBQWMsTUFBZDtBQUNBLGNBQUssUUFBTCxHQUFnQixRQUFoQjs7QUFOc0M7QUFRekM7Ozs7Z0NBRU8sRSxFQUFJLE8sRUFBUzs7QUFFakIsbUJBQU8sR0FBRyxVQUFILENBQWMsS0FBSyxVQUFMLENBQWdCLE9BQWhCLENBQXdCLE9BQXhCLENBQWQsRUFDUCxTQURPLENBQ0csS0FBSyxNQUFMLENBQVksT0FBWixDQUFvQixPQUFwQixDQURILENBQVA7QUFHSDs7Ozs7O2tCQUdVLGMiLCJmaWxlIjoiSW5zZXJ0U3RhdGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBJbnB1dFN0YXRlbWVudCBcbiAqL1xuY2xhc3MgSW5wdXRTdGF0ZW1lbnQgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbGxlY3Rpb24sIHZhbHVlcywgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnaW5zZXJ0LXN0YXRlbWVudCc7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbiA9IGNvbGxlY3Rpb247XG4gICAgICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICBleGVjdXRlKGRiLCBjb250ZXh0KSB7XG5cbiAgICAgICAgcmV0dXJuIGRiLmNvbGxlY3Rpb24odGhpcy5jb2xsZWN0aW9uLmFzVmFsdWUoY29udGV4dCkpLlxuICAgICAgICBpbnNlcnRPbmUodGhpcy52YWx1ZXMuYXNWYWx1ZShjb250ZXh0KSk7XG5cbiAgICB9XG5cbn1cbmV4cG9ydCBkZWZhdWx0IElucHV0U3RhdGVtZW50XG4iXX0=