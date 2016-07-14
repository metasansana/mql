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

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NumberLiteral).call(this));

        _this.type = 'number-literal';
        _this.value = value;
        _this.location = location;

        return _this;
    }

    _createClass(NumberLiteral, [{
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
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9OdW1iZXJMaXRlcmFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7O0lBR00sYTs7O0FBRUYsMkJBQVksS0FBWixFQUFtQixRQUFuQixFQUE2QjtBQUFBOztBQUFBOztBQUV6QixjQUFLLElBQUwsR0FBWSxnQkFBWjtBQUNBLGNBQUssS0FBTCxHQUFhLEtBQWI7QUFDQSxjQUFLLFFBQUwsR0FBZ0IsUUFBaEI7O0FBSnlCO0FBTTVCOzs7O29DQUVXOztBQUVSLG1CQUFPLFdBQVcsS0FBSyxLQUFoQixDQUFQO0FBRUg7OztnQ0FFTyxDLEVBQUc7O0FBRVAsbUJBQU8sS0FBSyxVQUFMLENBQWdCLEVBQUUsUUFBbEIsRUFBNEIsV0FBVyxLQUFLLEtBQWhCLENBQTVCLENBQVA7QUFFSDs7Ozs7O2tCQUlVLGEiLCJmaWxlIjoiTnVtYmVyTGl0ZXJhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogTnVtYmVyTGl0ZXJhbCBcbiAqL1xuY2xhc3MgTnVtYmVyTGl0ZXJhbCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGxvY2F0aW9uKSB7XG5zdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnbnVtYmVyLWxpdGVyYWwnO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh0aGlzLnZhbHVlKTtcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgcGFyc2VGbG9hdCh0aGlzLnZhbHVlKSk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyTGl0ZXJhbFxuIl19