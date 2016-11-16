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

        var _this = _possibleConstructorReturn(this, (ContextReference.__proto__ || Object.getPrototypeOf(ContextReference)).call(this));

        _this.type = 'context-reference';
        _this.key = key;

        return _this;
    }

    _createClass(ContextReference, [{
        key: 'asValue',
        value: function asValue(context) {

            return _propertySeek2.default.get(context, this.key, null);
        }
    }, {
        key: 'apply',
        value: function apply(o, context) {

            return this.asValue(context);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9hc3QvQ29udGV4dFJlZmVyZW5jZS5qcyJdLCJuYW1lcyI6WyJDb250ZXh0UmVmZXJlbmNlIiwia2V5IiwibG9jYXRpb24iLCJ0eXBlIiwiY29udGV4dCIsImdldCIsIm8iLCJhc1ZhbHVlIiwiZmlsdGVycyIsInJlZHVjZSIsInByZXYiLCJjdXJyZW50IiwiYWRkVmFsdWUiLCJleHByZXNzaW9uIiwidHJhbnNwaWxlIiwic291cmNlTm9kZSIsImZpbGVOYW1lIiwiYWRkIiwiY29tcGlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7O0lBTU1BLGdCOzs7QUFFRiw4QkFBWUMsR0FBWixFQUFpQkMsUUFBakIsRUFBMkI7QUFBQTs7QUFBQTs7QUFHdkIsY0FBS0MsSUFBTCxHQUFZLG1CQUFaO0FBQ0EsY0FBS0YsR0FBTCxHQUFXQSxHQUFYOztBQUp1QjtBQU0xQjs7OztnQ0FFT0csTyxFQUFTOztBQUViLG1CQUFPLHVCQUFTQyxHQUFULENBQWFELE9BQWIsRUFBc0IsS0FBS0gsR0FBM0IsRUFBZ0MsSUFBaEMsQ0FBUDtBQUVIOzs7OEJBRUtLLEMsRUFBR0YsTyxFQUFTOztBQUVkLG1CQUFPLEtBQUtHLE9BQUwsQ0FBYUgsT0FBYixDQUFQO0FBRUg7OztvQ0FFVzs7QUFFUixtQkFBTyxLQUFLSSxPQUFMLENBQWFDLE1BQWIsQ0FBb0IsVUFBQ0MsSUFBRCxFQUFPQyxPQUFQO0FBQUEsdUJBQW1CQSxRQUFRQyxRQUFSLENBQWlCRixJQUFqQixDQUFuQjtBQUFBLGFBQXBCLEVBQ0gsS0FBS0csVUFERixFQUNjQyxTQURkLEVBQVA7QUFHSDs7O2dDQUVPUixDLEVBQUc7O0FBRVAsbUJBQU8sS0FBS1MsVUFBTCxDQUFnQlQsRUFBRVUsUUFBbEIsRUFBNEIsRUFBNUIsRUFDUEMsR0FETyxDQUNILEtBQUtULE9BQUwsQ0FBYUMsTUFBYixDQUFvQixVQUFDQyxJQUFELEVBQU9DLE9BQVA7QUFBQSx1QkFBbUJBLFFBQVFDLFFBQVIsQ0FBaUJGLElBQWpCLENBQW5CO0FBQUEsYUFBcEIsRUFDQSxLQUFLRyxVQURMLEVBQ2lCSyxPQURqQixDQUN5QlosQ0FEekIsQ0FERyxDQUFQO0FBSUg7Ozs7OztrQkFJVU4sZ0IiLCJmaWxlIjoiQ29udGV4dFJlZmVyZW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wZXJ0eSBmcm9tICdwcm9wZXJ0eS1zZWVrJztcbmltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogQ29udGV4dFJlZmVyZW5jZVxuICogQHBhcmFtIHtFeHByZXNzaW9ufSBleHByZXNzaW9uXG4gKiBAcGFyYW0ge2FycmF5PEZpbHRlcj59IGZpbHRlcnNcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uXG4gKi9cbmNsYXNzIENvbnRleHRSZWZlcmVuY2UgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGtleSwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnY29udGV4dC1yZWZlcmVuY2UnO1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcblxuICAgIH1cblxuICAgIGFzVmFsdWUoY29udGV4dCkge1xuXG4gICAgICAgIHJldHVybiBQcm9wZXJ0eS5nZXQoY29udGV4dCwgdGhpcy5rZXksIG51bGwpO1xuXG4gICAgfVxuXG4gICAgYXBwbHkobywgY29udGV4dCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzLmFzVmFsdWUoY29udGV4dCk7XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVycy5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IGN1cnJlbnQuYWRkVmFsdWUocHJldiksXG4gICAgICAgICAgICB0aGlzLmV4cHJlc3Npb24pLnRyYW5zcGlsZSgpO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCAnJykuXG4gICAgICAgIGFkZCh0aGlzLmZpbHRlcnMucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiBjdXJyZW50LmFkZFZhbHVlKHByZXYpLFxuICAgICAgICAgICAgdGhpcy5leHByZXNzaW9uKS5jb21waWxlKG8pKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250ZXh0UmVmZXJlbmNlXG4iXX0=