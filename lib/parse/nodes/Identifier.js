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

        var _this = _possibleConstructorReturn(this, (Identifier.__proto__ || Object.getPrototypeOf(Identifier)).call(this));

        _this.type = 'identifier';
        _this.value = value;
        _this.location = location;

        return _this;
    }

    _createClass(Identifier, [{
        key: 'asValue',
        value: function asValue(context) {

            return this.value;
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

    return Identifier;
}(_Node3.default);

exports.default = Identifier;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9JZGVudGlmaWVyLmpzIl0sIm5hbWVzIjpbIklkZW50aWZpZXIiLCJ2YWx1ZSIsImxvY2F0aW9uIiwidHlwZSIsImNvbnRleHQiLCJvIiwic291cmNlTm9kZSIsImZpbGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR01BLFU7OztBQUVGLHdCQUFZQyxLQUFaLEVBQW1CQyxRQUFuQixFQUE2QjtBQUFBOztBQUFBOztBQUd6QixjQUFLQyxJQUFMLEdBQVksWUFBWjtBQUNBLGNBQUtGLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQUx5QjtBQU81Qjs7OztnQ0FFT0UsTyxFQUFTOztBQUVmLG1CQUFPLEtBQUtILEtBQVo7QUFFRDs7O29DQUVXOztBQUVSLG1CQUFPLEtBQUtBLEtBQVo7QUFFSDs7O2dDQUVPSSxDLEVBQUc7O0FBRVAsbUJBQU8sS0FBS0MsVUFBTCxDQUFnQkQsRUFBRUUsUUFBbEIsRUFBNEIsS0FBS04sS0FBakMsQ0FBUDtBQUVIOzs7Ozs7a0JBSVVELFUiLCJmaWxlIjoiSWRlbnRpZmllci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogSWRlbnRpZmllciBcbiAqL1xuY2xhc3MgSWRlbnRpZmllciBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IodmFsdWUsIGxvY2F0aW9uKSB7XG5cbiAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdpZGVudGlmaWVyJztcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICBhc1ZhbHVlKGNvbnRleHQpIHtcblxuICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsIHRoaXMudmFsdWUpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IElkZW50aWZpZXJcbiJdfQ==