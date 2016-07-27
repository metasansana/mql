'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propertySeek = require('property-seek');

var _propertySeek2 = _interopRequireDefault(_propertySeek);

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * ContextReference 
 * @param {Expression} expression 
 * @param {array<Filter>} filters 
 * @param {Location} location 
 */

var ContextReference = function (_Node) {
    _inherits(ContextReference, _Node);

    function ContextReference(key, location) {
        _classCallCheck(this, ContextReference);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ContextReference).call(this));

        _this.type = 'context-reference';
        _this.key = key;

        return _this;
    }

    _createClass(ContextReference, [{
        key: 'asValue',
        value: function asValue(context) {

            return _propertySeek2.default.get(context, this.key) || null;
        }
    }, {
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

    return ContextReference;
}(_Node3.default);

exports.default = ContextReference;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9Db250ZXh0UmVmZXJlbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7Ozs7SUFNTSxnQjs7O0FBRUYsOEJBQVksR0FBWixFQUFpQixRQUFqQixFQUEyQjtBQUFBOztBQUFBOztBQUd2QixjQUFLLElBQUwsR0FBWSxtQkFBWjtBQUNBLGNBQUssR0FBTCxHQUFXLEdBQVg7O0FBSnVCO0FBTTFCOzs7O2dDQUVPLE8sRUFBUzs7QUFFZixtQkFBTyx1QkFBUyxHQUFULENBQWEsT0FBYixFQUFzQixLQUFLLEdBQTNCLEtBQW1DLElBQTFDO0FBRUQ7OztvQ0FFVzs7QUFFUixtQkFBTyxLQUFLLE9BQUwsQ0FBYSxNQUFiLENBQW9CLFVBQUMsSUFBRCxFQUFPLE9BQVA7QUFBQSx1QkFBbUIsUUFBUSxRQUFSLENBQWlCLElBQWpCLENBQW5CO0FBQUEsYUFBcEIsRUFDSCxLQUFLLFVBREYsRUFDYyxTQURkLEVBQVA7QUFHSDs7O2dDQUVPLEMsRUFBRzs7QUFFUCxtQkFBTyxLQUFLLFVBQUwsQ0FBZ0IsRUFBRSxRQUFsQixFQUE0QixFQUE1QixFQUNQLEdBRE8sQ0FDSCxLQUFLLE9BQUwsQ0FBYSxNQUFiLENBQW9CLFVBQUMsSUFBRCxFQUFPLE9BQVA7QUFBQSx1QkFBbUIsUUFBUSxRQUFSLENBQWlCLElBQWpCLENBQW5CO0FBQUEsYUFBcEIsRUFDQSxLQUFLLFVBREwsRUFDaUIsT0FEakIsQ0FDeUIsQ0FEekIsQ0FERyxDQUFQO0FBSUg7Ozs7OztrQkFJVSxnQiIsImZpbGUiOiJDb250ZXh0UmVmZXJlbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BlcnR5IGZyb20gJ3Byb3BlcnR5LXNlZWsnO1xuaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBDb250ZXh0UmVmZXJlbmNlIFxuICogQHBhcmFtIHtFeHByZXNzaW9ufSBleHByZXNzaW9uIFxuICogQHBhcmFtIHthcnJheTxGaWx0ZXI+fSBmaWx0ZXJzIFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb24gXG4gKi9cbmNsYXNzIENvbnRleHRSZWZlcmVuY2UgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGtleSwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnY29udGV4dC1yZWZlcmVuY2UnO1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcblxuICAgIH1cblxuICAgIGFzVmFsdWUoY29udGV4dCkge1xuXG4gICAgICByZXR1cm4gUHJvcGVydHkuZ2V0KGNvbnRleHQsIHRoaXMua2V5KSB8fCBudWxsO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzLmZpbHRlcnMucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiBjdXJyZW50LmFkZFZhbHVlKHByZXYpLFxuICAgICAgICAgICAgdGhpcy5leHByZXNzaW9uKS50cmFuc3BpbGUoKTtcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgJycpLlxuICAgICAgICBhZGQodGhpcy5maWx0ZXJzLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4gY3VycmVudC5hZGRWYWx1ZShwcmV2KSxcbiAgICAgICAgICAgIHRoaXMuZXhwcmVzc2lvbikuY29tcGlsZShvKSk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGV4dFJlZmVyZW5jZVxuIl19