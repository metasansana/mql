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
 * LogicFilter 
 */

var LogicFilter = function (_Node) {
    _inherits(LogicFilter, _Node);

    function LogicFilter(left, operator, right, location) {
        _classCallCheck(this, LogicFilter);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LogicFilter).call(this));

        _this.type = 'logical-filter';
        _this.left = left;
        _this.operator = operator;
        _this.right = right;
        _this.location = location;

        return _this;
    }

    _createClass(LogicFilter, [{
        key: 'apply',
        value: function apply(o, context) {

            var op = '$' + this.operator;

            o[op] = o[op] || [];
            o[op].push(this.left.apply({}, context));
            o[op].push(this.right.apply({}, context));
            return o;
        }
    }]);

    return LogicFilter;
}(_Node3.default);

exports.default = LogicFilter;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9Mb2dpY0ZpbHRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7OztJQUdNLFc7OztBQUVGLHlCQUFZLElBQVosRUFBa0IsUUFBbEIsRUFBNEIsS0FBNUIsRUFBbUMsUUFBbkMsRUFBNkM7QUFBQTs7QUFBQTs7QUFHekMsY0FBSyxJQUFMLEdBQVksZ0JBQVo7QUFDQSxjQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0EsY0FBSyxRQUFMLEdBQWdCLFFBQWhCO0FBQ0EsY0FBSyxLQUFMLEdBQWEsS0FBYjtBQUNBLGNBQUssUUFBTCxHQUFnQixRQUFoQjs7QUFQeUM7QUFTNUM7Ozs7OEJBRUssQyxFQUFHLE8sRUFBUzs7QUFFZCxnQkFBSSxXQUFTLEtBQUssUUFBbEI7O0FBRUEsY0FBRSxFQUFGLElBQVEsRUFBRSxFQUFGLEtBQVMsRUFBakI7QUFDQSxjQUFFLEVBQUYsRUFBTSxJQUFOLENBQVcsS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixFQUFoQixFQUFvQixPQUFwQixDQUFYO0FBQ0EsY0FBRSxFQUFGLEVBQU0sSUFBTixDQUFXLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsRUFBakIsRUFBcUIsT0FBckIsQ0FBWDtBQUNBLG1CQUFPLENBQVA7QUFFSDs7Ozs7O2tCQUtVLFciLCJmaWxlIjoiTG9naWNGaWx0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIExvZ2ljRmlsdGVyIFxuICovXG5jbGFzcyBMb2dpY0ZpbHRlciBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IobGVmdCwgb3BlcmF0b3IsIHJpZ2h0LCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdsb2dpY2FsLWZpbHRlcidcbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICAgICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIGFwcGx5KG8sIGNvbnRleHQpIHtcblxuICAgICAgICB2YXIgb3AgPSBgJCR7dGhpcy5vcGVyYXRvcn1gO1xuXG4gICAgICAgIG9bb3BdID0gb1tvcF0gfHwgW107XG4gICAgICAgIG9bb3BdLnB1c2godGhpcy5sZWZ0LmFwcGx5KHt9LCBjb250ZXh0KSk7XG4gICAgICAgIG9bb3BdLnB1c2godGhpcy5yaWdodC5hcHBseSh7fSwgY29udGV4dCkpO1xuICAgICAgICByZXR1cm4gbztcblxuICAgIH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2ljRmlsdGVyXG4iXX0=