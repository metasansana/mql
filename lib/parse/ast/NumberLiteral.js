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
 * NumberLiteral 
 */
var NumberLiteral = function (_Node) {
    _inherits(NumberLiteral, _Node);

    function NumberLiteral(value, location) {
        _classCallCheck(this, NumberLiteral);

        var _this = _possibleConstructorReturn(this, (NumberLiteral.__proto__ || Object.getPrototypeOf(NumberLiteral)).call(this));

        _this.type = 'number-literal';
        _this.value = value;
        _this.location = location;

        return _this;
    }

    _createClass(NumberLiteral, [{
        key: 'asValue',
        value: function asValue(context) {

            return parseFloat(this.value);
        }
    }, {
        key: 'transpile',
        value: function transpile() {

            return parseFloat(this.value);
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            return this.sourceNode(o.fileName, parseFloat(this.value));
        }
    }]);

    return NumberLiteral;
}(_Node3.default);

exports.default = NumberLiteral;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9hc3QvTnVtYmVyTGl0ZXJhbC5qcyJdLCJuYW1lcyI6WyJOdW1iZXJMaXRlcmFsIiwidmFsdWUiLCJsb2NhdGlvbiIsInR5cGUiLCJjb250ZXh0IiwicGFyc2VGbG9hdCIsIm8iLCJzb3VyY2VOb2RlIiwiZmlsZU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHTUEsYTs7O0FBRUYsMkJBQVlDLEtBQVosRUFBbUJDLFFBQW5CLEVBQTZCO0FBQUE7O0FBQUE7O0FBRXpCLGNBQUtDLElBQUwsR0FBWSxnQkFBWjtBQUNBLGNBQUtGLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQUp5QjtBQU01Qjs7OztnQ0FFT0UsTyxFQUFTOztBQUViLG1CQUFPQyxXQUFXLEtBQUtKLEtBQWhCLENBQVA7QUFFSDs7O29DQUVXOztBQUVSLG1CQUFPSSxXQUFXLEtBQUtKLEtBQWhCLENBQVA7QUFFSDs7O2dDQUVPSyxDLEVBQUc7O0FBRVAsbUJBQU8sS0FBS0MsVUFBTCxDQUFnQkQsRUFBRUUsUUFBbEIsRUFBNEJILFdBQVcsS0FBS0osS0FBaEIsQ0FBNUIsQ0FBUDtBQUVIOzs7Ozs7a0JBSVVELGEiLCJmaWxlIjoiTnVtYmVyTGl0ZXJhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogTnVtYmVyTGl0ZXJhbCBcbiAqL1xuY2xhc3MgTnVtYmVyTGl0ZXJhbCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGxvY2F0aW9uKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdudW1iZXItbGl0ZXJhbCc7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgYXNWYWx1ZShjb250ZXh0KSB7XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodGhpcy52YWx1ZSk7XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodGhpcy52YWx1ZSk7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsIHBhcnNlRmxvYXQodGhpcy52YWx1ZSkpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE51bWJlckxpdGVyYWxcbiJdfQ==