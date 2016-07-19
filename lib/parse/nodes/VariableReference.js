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
 * VariableReference 
 * @param {Expression} expression 
 * @param {array<Filter>} filters 
 * @param {Location} location 
 */

var VariableReference = function (_Node) {
    _inherits(VariableReference, _Node);

    function VariableReference(variable, location) {
        _classCallCheck(this, VariableReference);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(VariableReference).call(this));

        _this.type = 'variable-reference';
        _this.variable = variable;

        return _this;
    }

    _createClass(VariableReference, [{
        key: 'transpile',
        value: function transpile() {

            return this.filters.reduce(function (prev, current) {
                return current.addValue(prev);
            }, this.expression).transpile();
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            return this.sourceNode(o.fileName, '').add(this.filters.reduce(function (prev, current) {
                return current.addValue(prev);
            }, this.expression).compile(o));
        }
    }]);

    return VariableReference;
}(_Node3.default);

exports.default = VariableReference;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9WYXJpYWJsZVJlZmVyZW5jZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7OztJQU1NLGlCOzs7QUFFRiwrQkFBWSxRQUFaLEVBQXNCLFFBQXRCLEVBQWdDO0FBQUE7O0FBQUE7O0FBRzVCLGNBQUssSUFBTCxHQUFZLG9CQUFaO0FBQ0EsY0FBSyxRQUFMLEdBQWdCLFFBQWhCOztBQUo0QjtBQU0vQjs7OztvQ0FFVzs7QUFFUixtQkFBTyxLQUFLLE9BQUwsQ0FBYSxNQUFiLENBQW9CLFVBQUMsSUFBRCxFQUFPLE9BQVA7QUFBQSx1QkFBbUIsUUFBUSxRQUFSLENBQWlCLElBQWpCLENBQW5CO0FBQUEsYUFBcEIsRUFDSCxLQUFLLFVBREYsRUFDYyxTQURkLEVBQVA7QUFHSDs7O2dDQUVPLEMsRUFBRzs7QUFFUCxtQkFBTyxLQUFLLFVBQUwsQ0FBZ0IsRUFBRSxRQUFsQixFQUE0QixFQUE1QixFQUNQLEdBRE8sQ0FDSCxLQUFLLE9BQUwsQ0FBYSxNQUFiLENBQW9CLFVBQUMsSUFBRCxFQUFPLE9BQVA7QUFBQSx1QkFBbUIsUUFBUSxRQUFSLENBQWlCLElBQWpCLENBQW5CO0FBQUEsYUFBcEIsRUFDQSxLQUFLLFVBREwsRUFDaUIsT0FEakIsQ0FDeUIsQ0FEekIsQ0FERyxDQUFQO0FBSUg7Ozs7OztrQkFJVSxpQiIsImZpbGUiOiJWYXJpYWJsZVJlZmVyZW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogVmFyaWFibGVSZWZlcmVuY2UgXG4gKiBAcGFyYW0ge0V4cHJlc3Npb259IGV4cHJlc3Npb24gXG4gKiBAcGFyYW0ge2FycmF5PEZpbHRlcj59IGZpbHRlcnMgXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvbiBcbiAqL1xuY2xhc3MgVmFyaWFibGVSZWZlcmVuY2UgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKHZhcmlhYmxlLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICd2YXJpYWJsZS1yZWZlcmVuY2UnO1xuICAgICAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVycy5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IGN1cnJlbnQuYWRkVmFsdWUocHJldiksXG4gICAgICAgICAgICB0aGlzLmV4cHJlc3Npb24pLnRyYW5zcGlsZSgpO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCAnJykuXG4gICAgICAgIGFkZCh0aGlzLmZpbHRlcnMucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiBjdXJyZW50LmFkZFZhbHVlKHByZXYpLFxuICAgICAgICAgICAgdGhpcy5leHByZXNzaW9uKS5jb21waWxlKG8pKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBWYXJpYWJsZVJlZmVyZW5jZVxuIl19