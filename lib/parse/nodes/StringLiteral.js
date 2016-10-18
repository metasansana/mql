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
 * StringLiteral 
 */
var StringLiteral = function (_Node) {
    _inherits(StringLiteral, _Node);

    function StringLiteral(value, location) {
        _classCallCheck(this, StringLiteral);

        var _this = _possibleConstructorReturn(this, (StringLiteral.__proto__ || Object.getPrototypeOf(StringLiteral)).call(this));

        _this.type = 'string-literal';
        _this.value = value;
        _this.location = location;

        return _this;
    }

    _createClass(StringLiteral, [{
        key: 'asValue',
        value: function asValue(context) {

            return this.value.substring(1, this.value.length - 1);
        }
    }, {
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

    return StringLiteral;
}(_Node3.default);

exports.default = StringLiteral;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9TdHJpbmdMaXRlcmFsLmpzIl0sIm5hbWVzIjpbIlN0cmluZ0xpdGVyYWwiLCJ2YWx1ZSIsImxvY2F0aW9uIiwidHlwZSIsImNvbnRleHQiLCJzdWJzdHJpbmciLCJsZW5ndGgiLCJvIiwic291cmNlTm9kZSIsImZpbGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR01BLGE7OztBQUVGLDJCQUFZQyxLQUFaLEVBQW1CQyxRQUFuQixFQUE2QjtBQUFBOztBQUFBOztBQUd6QixjQUFLQyxJQUFMLEdBQVksZ0JBQVo7QUFDQSxjQUFLRixLQUFMLEdBQWFBLEtBQWI7QUFDQSxjQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjs7QUFMeUI7QUFPNUI7Ozs7Z0NBRU9FLE8sRUFBUzs7QUFFZixtQkFBTyxLQUFLSCxLQUFMLENBQVdJLFNBQVgsQ0FBcUIsQ0FBckIsRUFBd0IsS0FBS0osS0FBTCxDQUFXSyxNQUFYLEdBQW9CLENBQTVDLENBQVA7QUFFRDs7O29DQUVXOztBQUVSLG1CQUFPLEtBQUtMLEtBQVo7QUFFSDs7O2dDQUVPTSxDLEVBQUc7O0FBRVAsbUJBQU8sS0FBS0MsVUFBTCxDQUFnQkQsRUFBRUUsUUFBbEIsRUFBNEIsS0FBS1IsS0FBakMsQ0FBUDtBQUVIOzs7Ozs7a0JBSVVELGEiLCJmaWxlIjoiU3RyaW5nTGl0ZXJhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogU3RyaW5nTGl0ZXJhbCBcbiAqL1xuY2xhc3MgU3RyaW5nTGl0ZXJhbCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ3N0cmluZy1saXRlcmFsJztcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICBhc1ZhbHVlKGNvbnRleHQpIHtcblxuICAgICAgcmV0dXJuIHRoaXMudmFsdWUuc3Vic3RyaW5nKDEsIHRoaXMudmFsdWUubGVuZ3RoIC0gMSk7XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsIHRoaXMudmFsdWUpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0cmluZ0xpdGVyYWxcbiJdfQ==