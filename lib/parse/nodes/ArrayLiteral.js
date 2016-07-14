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
 * ArrayLiteral 
 * @param {array} members 
 * @param {Location} location 
 */

var ArrayLiteral = function (_Node) {
    _inherits(ArrayLiteral, _Node);

    function ArrayLiteral(members, location) {
        _classCallCheck(this, ArrayLiteral);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ArrayLiteral).call(this));

        _this.type = 'array-literal';
        _this.members = members;
        _this.location = location;
        return _this;
    }

    _createClass(ArrayLiteral, [{
        key: 'transpile',
        value: function transpile() {

            return '[' + this.members.map(function (m) {
                return m.transpile();
            }).join(',') + ']';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var node = this.sourceNode(o.fileName, '[');
            this.compileList(this.members, node, o);
            return node;
        }
    }]);

    return ArrayLiteral;
}(_Node3.default);

exports.default = ArrayLiteral;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9BcnJheUxpdGVyYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7OztJQUtNLFk7OztBQUVGLDBCQUFZLE9BQVosRUFBcUIsUUFBckIsRUFBK0I7QUFBQTs7QUFBQTs7QUFFM0IsY0FBSyxJQUFMLEdBQVksZUFBWjtBQUNBLGNBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSxjQUFLLFFBQUwsR0FBZ0IsUUFBaEI7QUFKMkI7QUFLOUI7Ozs7b0NBRVc7O0FBRVIsbUJBQU8sTUFBTSxLQUFLLE9BQUwsQ0FBYSxHQUFiLENBQWlCO0FBQUEsdUJBQUssRUFBRSxTQUFGLEVBQUw7QUFBQSxhQUFqQixFQUFxQyxJQUFyQyxDQUEwQyxHQUExQyxDQUFOLEdBQXVELEdBQTlEO0FBRUg7OztnQ0FFTyxDLEVBQUc7O0FBRVAsZ0JBQUksT0FBTyxLQUFLLFVBQUwsQ0FBZ0IsRUFBRSxRQUFsQixFQUE0QixHQUE1QixDQUFYO0FBQ0EsaUJBQUssV0FBTCxDQUFpQixLQUFLLE9BQXRCLEVBQStCLElBQS9CLEVBQXFDLENBQXJDO0FBQ0EsbUJBQU8sSUFBUDtBQUVIOzs7Ozs7a0JBR1UsWSIsImZpbGUiOiJBcnJheUxpdGVyYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIEFycmF5TGl0ZXJhbCBcbiAqIEBwYXJhbSB7YXJyYXl9IG1lbWJlcnMgXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvbiBcbiAqL1xuY2xhc3MgQXJyYXlMaXRlcmFsIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihtZW1iZXJzLCBsb2NhdGlvbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnYXJyYXktbGl0ZXJhbCc7XG4gICAgICAgIHRoaXMubWVtYmVycyA9IG1lbWJlcnM7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgcmV0dXJuICdbJyArIHRoaXMubWVtYmVycy5tYXAobSA9PiBtLnRyYW5zcGlsZSgpKS5qb2luKCcsJykgKyAnXSc7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCAnWycpO1xuICAgICAgICB0aGlzLmNvbXBpbGVMaXN0KHRoaXMubWVtYmVycywgbm9kZSwgbyk7XG4gICAgICAgIHJldHVybiBub2RlO1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUxpdGVyYWxcbiJdfQ==