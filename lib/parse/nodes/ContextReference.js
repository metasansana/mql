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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9Db250ZXh0UmVmZXJlbmNlLmpzIl0sIm5hbWVzIjpbIkNvbnRleHRSZWZlcmVuY2UiLCJrZXkiLCJsb2NhdGlvbiIsInR5cGUiLCJjb250ZXh0IiwiZ2V0IiwibyIsImFzVmFsdWUiLCJmaWx0ZXJzIiwicmVkdWNlIiwicHJldiIsImN1cnJlbnQiLCJhZGRWYWx1ZSIsImV4cHJlc3Npb24iLCJ0cmFuc3BpbGUiLCJzb3VyY2VOb2RlIiwiZmlsZU5hbWUiLCJhZGQiLCJjb21waWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7SUFNTUEsZ0I7OztBQUVGLDhCQUFZQyxHQUFaLEVBQWlCQyxRQUFqQixFQUEyQjtBQUFBOztBQUFBOztBQUd2QixjQUFLQyxJQUFMLEdBQVksbUJBQVo7QUFDQSxjQUFLRixHQUFMLEdBQVdBLEdBQVg7O0FBSnVCO0FBTTFCOzs7O2dDQUVPRyxPLEVBQVM7O0FBRWYsbUJBQU8sdUJBQVNDLEdBQVQsQ0FBYUQsT0FBYixFQUFzQixLQUFLSCxHQUEzQixLQUFtQyxJQUExQztBQUVEOzs7OEJBRUdLLEMsRUFBR0YsTyxFQUFTOztBQUVoQixtQkFBTyxLQUFLRyxPQUFMLENBQWFILE9BQWIsQ0FBUDtBQUVEOzs7b0NBRWE7O0FBRVIsbUJBQU8sS0FBS0ksT0FBTCxDQUFhQyxNQUFiLENBQW9CLFVBQUNDLElBQUQsRUFBT0MsT0FBUDtBQUFBLHVCQUFtQkEsUUFBUUMsUUFBUixDQUFpQkYsSUFBakIsQ0FBbkI7QUFBQSxhQUFwQixFQUNILEtBQUtHLFVBREYsRUFDY0MsU0FEZCxFQUFQO0FBR0g7OztnQ0FFT1IsQyxFQUFHOztBQUVQLG1CQUFPLEtBQUtTLFVBQUwsQ0FBZ0JULEVBQUVVLFFBQWxCLEVBQTRCLEVBQTVCLEVBQ1BDLEdBRE8sQ0FDSCxLQUFLVCxPQUFMLENBQWFDLE1BQWIsQ0FBb0IsVUFBQ0MsSUFBRCxFQUFPQyxPQUFQO0FBQUEsdUJBQW1CQSxRQUFRQyxRQUFSLENBQWlCRixJQUFqQixDQUFuQjtBQUFBLGFBQXBCLEVBQ0EsS0FBS0csVUFETCxFQUNpQkssT0FEakIsQ0FDeUJaLENBRHpCLENBREcsQ0FBUDtBQUlIOzs7Ozs7a0JBSVVOLGdCIiwiZmlsZSI6IkNvbnRleHRSZWZlcmVuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcGVydHkgZnJvbSAncHJvcGVydHktc2Vlayc7XG5pbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIENvbnRleHRSZWZlcmVuY2VcbiAqIEBwYXJhbSB7RXhwcmVzc2lvbn0gZXhwcmVzc2lvblxuICogQHBhcmFtIHthcnJheTxGaWx0ZXI+fSBmaWx0ZXJzXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvblxuICovXG5jbGFzcyBDb250ZXh0UmVmZXJlbmNlIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihrZXksIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2NvbnRleHQtcmVmZXJlbmNlJztcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG5cbiAgICB9XG5cbiAgICBhc1ZhbHVlKGNvbnRleHQpIHtcblxuICAgICAgcmV0dXJuIFByb3BlcnR5LmdldChjb250ZXh0LCB0aGlzLmtleSkgfHwgbnVsbDtcblxuICAgIH1cblxuICBhcHBseShvLCBjb250ZXh0KSB7XG5cbiAgICByZXR1cm4gdGhpcy5hc1ZhbHVlKGNvbnRleHQpO1xuXG4gIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXJzLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4gY3VycmVudC5hZGRWYWx1ZShwcmV2KSxcbiAgICAgICAgICAgIHRoaXMuZXhwcmVzc2lvbikudHJhbnNwaWxlKCk7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsICcnKS5cbiAgICAgICAgYWRkKHRoaXMuZmlsdGVycy5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IGN1cnJlbnQuYWRkVmFsdWUocHJldiksXG4gICAgICAgICAgICB0aGlzLmV4cHJlc3Npb24pLmNvbXBpbGUobykpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRleHRSZWZlcmVuY2VcbiJdfQ==