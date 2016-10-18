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

        var _this = _possibleConstructorReturn(this, (ArrayLiteral.__proto__ || Object.getPrototypeOf(ArrayLiteral)).call(this));

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
        key: 'asValue',
        value: function asValue(context) {

            return this.members.map(function (m) {
                return m.asValue(context);
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9BcnJheUxpdGVyYWwuanMiXSwibmFtZXMiOlsiQXJyYXlMaXRlcmFsIiwibWVtYmVycyIsImxvY2F0aW9uIiwidHlwZSIsIm1hcCIsIm0iLCJ0cmFuc3BpbGUiLCJqb2luIiwiY29udGV4dCIsImFzVmFsdWUiLCJvIiwibm9kZSIsInNvdXJjZU5vZGUiLCJmaWxlTmFtZSIsImNvbXBpbGVMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7SUFLTUEsWTs7O0FBRUYsMEJBQVlDLE9BQVosRUFBcUJDLFFBQXJCLEVBQStCO0FBQUE7O0FBQUE7O0FBRTNCLGNBQUtDLElBQUwsR0FBWSxlQUFaO0FBQ0EsY0FBS0YsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFKMkI7QUFLOUI7Ozs7b0NBRVc7O0FBRVIsbUJBQU8sTUFBTSxLQUFLRCxPQUFMLENBQWFHLEdBQWIsQ0FBaUI7QUFBQSx1QkFBS0MsRUFBRUMsU0FBRixFQUFMO0FBQUEsYUFBakIsRUFBcUNDLElBQXJDLENBQTBDLEdBQTFDLENBQU4sR0FBdUQsR0FBOUQ7QUFFSDs7O2dDQUVPQyxPLEVBQVM7O0FBRWYsbUJBQU8sS0FBS1AsT0FBTCxDQUFhRyxHQUFiLENBQWlCO0FBQUEsdUJBQUdDLEVBQUVJLE9BQUYsQ0FBVUQsT0FBVixDQUFIO0FBQUEsYUFBakIsQ0FBUDtBQUVEOzs7Z0NBRU9FLEMsRUFBRzs7QUFFUCxnQkFBSUMsT0FBTyxLQUFLQyxVQUFMLENBQWdCRixFQUFFRyxRQUFsQixFQUE0QixHQUE1QixDQUFYO0FBQ0EsaUJBQUtDLFdBQUwsQ0FBaUIsS0FBS2IsT0FBdEIsRUFBK0JVLElBQS9CLEVBQXFDRCxDQUFyQztBQUNBLG1CQUFPQyxJQUFQO0FBRUg7Ozs7OztrQkFHVVgsWSIsImZpbGUiOiJBcnJheUxpdGVyYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIEFycmF5TGl0ZXJhbCBcbiAqIEBwYXJhbSB7YXJyYXl9IG1lbWJlcnMgXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvbiBcbiAqL1xuY2xhc3MgQXJyYXlMaXRlcmFsIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihtZW1iZXJzLCBsb2NhdGlvbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnYXJyYXktbGl0ZXJhbCc7XG4gICAgICAgIHRoaXMubWVtYmVycyA9IG1lbWJlcnM7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgcmV0dXJuICdbJyArIHRoaXMubWVtYmVycy5tYXAobSA9PiBtLnRyYW5zcGlsZSgpKS5qb2luKCcsJykgKyAnXSc7XG5cbiAgICB9XG5cbiAgICBhc1ZhbHVlKGNvbnRleHQpIHtcblxuICAgICAgcmV0dXJuIHRoaXMubWVtYmVycy5tYXAobT0+bS5hc1ZhbHVlKGNvbnRleHQpKTtcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHZhciBub2RlID0gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsICdbJyk7XG4gICAgICAgIHRoaXMuY29tcGlsZUxpc3QodGhpcy5tZW1iZXJzLCBub2RlLCBvKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFycmF5TGl0ZXJhbFxuIl19