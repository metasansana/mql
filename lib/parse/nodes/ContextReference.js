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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9Db250ZXh0UmVmZXJlbmNlLmpzIl0sIm5hbWVzIjpbIkNvbnRleHRSZWZlcmVuY2UiLCJrZXkiLCJsb2NhdGlvbiIsInR5cGUiLCJjb250ZXh0IiwiZ2V0IiwiZmlsdGVycyIsInJlZHVjZSIsInByZXYiLCJjdXJyZW50IiwiYWRkVmFsdWUiLCJleHByZXNzaW9uIiwidHJhbnNwaWxlIiwibyIsInNvdXJjZU5vZGUiLCJmaWxlTmFtZSIsImFkZCIsImNvbXBpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7OztJQU1NQSxnQjs7O0FBRUYsOEJBQVlDLEdBQVosRUFBaUJDLFFBQWpCLEVBQTJCO0FBQUE7O0FBQUE7O0FBR3ZCLGNBQUtDLElBQUwsR0FBWSxtQkFBWjtBQUNBLGNBQUtGLEdBQUwsR0FBV0EsR0FBWDs7QUFKdUI7QUFNMUI7Ozs7Z0NBRU9HLE8sRUFBUzs7QUFFZixtQkFBTyx1QkFBU0MsR0FBVCxDQUFhRCxPQUFiLEVBQXNCLEtBQUtILEdBQTNCLEtBQW1DLElBQTFDO0FBRUQ7OztvQ0FFVzs7QUFFUixtQkFBTyxLQUFLSyxPQUFMLENBQWFDLE1BQWIsQ0FBb0IsVUFBQ0MsSUFBRCxFQUFPQyxPQUFQO0FBQUEsdUJBQW1CQSxRQUFRQyxRQUFSLENBQWlCRixJQUFqQixDQUFuQjtBQUFBLGFBQXBCLEVBQ0gsS0FBS0csVUFERixFQUNjQyxTQURkLEVBQVA7QUFHSDs7O2dDQUVPQyxDLEVBQUc7O0FBRVAsbUJBQU8sS0FBS0MsVUFBTCxDQUFnQkQsRUFBRUUsUUFBbEIsRUFBNEIsRUFBNUIsRUFDUEMsR0FETyxDQUNILEtBQUtWLE9BQUwsQ0FBYUMsTUFBYixDQUFvQixVQUFDQyxJQUFELEVBQU9DLE9BQVA7QUFBQSx1QkFBbUJBLFFBQVFDLFFBQVIsQ0FBaUJGLElBQWpCLENBQW5CO0FBQUEsYUFBcEIsRUFDQSxLQUFLRyxVQURMLEVBQ2lCTSxPQURqQixDQUN5QkosQ0FEekIsQ0FERyxDQUFQO0FBSUg7Ozs7OztrQkFJVWIsZ0IiLCJmaWxlIjoiQ29udGV4dFJlZmVyZW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wZXJ0eSBmcm9tICdwcm9wZXJ0eS1zZWVrJztcbmltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogQ29udGV4dFJlZmVyZW5jZSBcbiAqIEBwYXJhbSB7RXhwcmVzc2lvbn0gZXhwcmVzc2lvbiBcbiAqIEBwYXJhbSB7YXJyYXk8RmlsdGVyPn0gZmlsdGVycyBcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uIFxuICovXG5jbGFzcyBDb250ZXh0UmVmZXJlbmNlIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihrZXksIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2NvbnRleHQtcmVmZXJlbmNlJztcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG5cbiAgICB9XG5cbiAgICBhc1ZhbHVlKGNvbnRleHQpIHtcblxuICAgICAgcmV0dXJuIFByb3BlcnR5LmdldChjb250ZXh0LCB0aGlzLmtleSkgfHwgbnVsbDtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXJzLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4gY3VycmVudC5hZGRWYWx1ZShwcmV2KSxcbiAgICAgICAgICAgIHRoaXMuZXhwcmVzc2lvbikudHJhbnNwaWxlKCk7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsICcnKS5cbiAgICAgICAgYWRkKHRoaXMuZmlsdGVycy5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IGN1cnJlbnQuYWRkVmFsdWUocHJldiksXG4gICAgICAgICAgICB0aGlzLmV4cHJlc3Npb24pLmNvbXBpbGUobykpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRleHRSZWZlcmVuY2VcbiJdfQ==