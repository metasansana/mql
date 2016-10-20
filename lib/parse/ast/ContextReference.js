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

            return _propertySeek2.default.get(context, this.key) || null;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9hc3QvQ29udGV4dFJlZmVyZW5jZS5qcyJdLCJuYW1lcyI6WyJDb250ZXh0UmVmZXJlbmNlIiwia2V5IiwibG9jYXRpb24iLCJ0eXBlIiwiY29udGV4dCIsImdldCIsIm8iLCJhc1ZhbHVlIiwiZmlsdGVycyIsInJlZHVjZSIsInByZXYiLCJjdXJyZW50IiwiYWRkVmFsdWUiLCJleHByZXNzaW9uIiwidHJhbnNwaWxlIiwic291cmNlTm9kZSIsImZpbGVOYW1lIiwiYWRkIiwiY29tcGlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7O0lBTU1BLGdCOzs7QUFFRiw4QkFBWUMsR0FBWixFQUFpQkMsUUFBakIsRUFBMkI7QUFBQTs7QUFBQTs7QUFHdkIsY0FBS0MsSUFBTCxHQUFZLG1CQUFaO0FBQ0EsY0FBS0YsR0FBTCxHQUFXQSxHQUFYOztBQUp1QjtBQU0xQjs7OztnQ0FFT0csTyxFQUFTOztBQUVmLG1CQUFPLHVCQUFTQyxHQUFULENBQWFELE9BQWIsRUFBc0IsS0FBS0gsR0FBM0IsS0FBbUMsSUFBMUM7QUFFRDs7OzhCQUVHSyxDLEVBQUdGLE8sRUFBUzs7QUFFaEIsbUJBQU8sS0FBS0csT0FBTCxDQUFhSCxPQUFiLENBQVA7QUFFRDs7O29DQUVhOztBQUVSLG1CQUFPLEtBQUtJLE9BQUwsQ0FBYUMsTUFBYixDQUFvQixVQUFDQyxJQUFELEVBQU9DLE9BQVA7QUFBQSx1QkFBbUJBLFFBQVFDLFFBQVIsQ0FBaUJGLElBQWpCLENBQW5CO0FBQUEsYUFBcEIsRUFDSCxLQUFLRyxVQURGLEVBQ2NDLFNBRGQsRUFBUDtBQUdIOzs7Z0NBRU9SLEMsRUFBRzs7QUFFUCxtQkFBTyxLQUFLUyxVQUFMLENBQWdCVCxFQUFFVSxRQUFsQixFQUE0QixFQUE1QixFQUNQQyxHQURPLENBQ0gsS0FBS1QsT0FBTCxDQUFhQyxNQUFiLENBQW9CLFVBQUNDLElBQUQsRUFBT0MsT0FBUDtBQUFBLHVCQUFtQkEsUUFBUUMsUUFBUixDQUFpQkYsSUFBakIsQ0FBbkI7QUFBQSxhQUFwQixFQUNBLEtBQUtHLFVBREwsRUFDaUJLLE9BRGpCLENBQ3lCWixDQUR6QixDQURHLENBQVA7QUFJSDs7Ozs7O2tCQUlVTixnQiIsImZpbGUiOiJDb250ZXh0UmVmZXJlbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BlcnR5IGZyb20gJ3Byb3BlcnR5LXNlZWsnO1xuaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBDb250ZXh0UmVmZXJlbmNlXG4gKiBAcGFyYW0ge0V4cHJlc3Npb259IGV4cHJlc3Npb25cbiAqIEBwYXJhbSB7YXJyYXk8RmlsdGVyPn0gZmlsdGVyc1xuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb25cbiAqL1xuY2xhc3MgQ29udGV4dFJlZmVyZW5jZSBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3Ioa2V5LCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdjb250ZXh0LXJlZmVyZW5jZSc7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuXG4gICAgfVxuXG4gICAgYXNWYWx1ZShjb250ZXh0KSB7XG5cbiAgICAgIHJldHVybiBQcm9wZXJ0eS5nZXQoY29udGV4dCwgdGhpcy5rZXkpIHx8IG51bGw7XG5cbiAgICB9XG5cbiAgYXBwbHkobywgY29udGV4dCkge1xuXG4gICAgcmV0dXJuIHRoaXMuYXNWYWx1ZShjb250ZXh0KTtcblxuICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVycy5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IGN1cnJlbnQuYWRkVmFsdWUocHJldiksXG4gICAgICAgICAgICB0aGlzLmV4cHJlc3Npb24pLnRyYW5zcGlsZSgpO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCAnJykuXG4gICAgICAgIGFkZCh0aGlzLmZpbHRlcnMucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiBjdXJyZW50LmFkZFZhbHVlKHByZXYpLFxuICAgICAgICAgICAgdGhpcy5leHByZXNzaW9uKS5jb21waWxlKG8pKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250ZXh0UmVmZXJlbmNlXG4iXX0=