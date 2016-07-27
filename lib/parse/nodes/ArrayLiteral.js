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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9BcnJheUxpdGVyYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7OztJQUtNLFk7OztBQUVGLDBCQUFZLE9BQVosRUFBcUIsUUFBckIsRUFBK0I7QUFBQTs7QUFBQTs7QUFFM0IsY0FBSyxJQUFMLEdBQVksZUFBWjtBQUNBLGNBQUssT0FBTCxHQUFlLE9BQWY7QUFDQSxjQUFLLFFBQUwsR0FBZ0IsUUFBaEI7QUFKMkI7QUFLOUI7Ozs7b0NBRVc7O0FBRVIsbUJBQU8sTUFBTSxLQUFLLE9BQUwsQ0FBYSxHQUFiLENBQWlCO0FBQUEsdUJBQUssRUFBRSxTQUFGLEVBQUw7QUFBQSxhQUFqQixFQUFxQyxJQUFyQyxDQUEwQyxHQUExQyxDQUFOLEdBQXVELEdBQTlEO0FBRUg7OztnQ0FFTyxPLEVBQVM7O0FBRWYsbUJBQU8sS0FBSyxPQUFMLENBQWEsR0FBYixDQUFpQjtBQUFBLHVCQUFHLEVBQUUsT0FBRixDQUFVLE9BQVYsQ0FBSDtBQUFBLGFBQWpCLENBQVA7QUFFRDs7O2dDQUVPLEMsRUFBRzs7QUFFUCxnQkFBSSxPQUFPLEtBQUssVUFBTCxDQUFnQixFQUFFLFFBQWxCLEVBQTRCLEdBQTVCLENBQVg7QUFDQSxpQkFBSyxXQUFMLENBQWlCLEtBQUssT0FBdEIsRUFBK0IsSUFBL0IsRUFBcUMsQ0FBckM7QUFDQSxtQkFBTyxJQUFQO0FBRUg7Ozs7OztrQkFHVSxZIiwiZmlsZSI6IkFycmF5TGl0ZXJhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogQXJyYXlMaXRlcmFsIFxuICogQHBhcmFtIHthcnJheX0gbWVtYmVycyBcbiAqIEBwYXJhbSB7TG9jYXRpb259IGxvY2F0aW9uIFxuICovXG5jbGFzcyBBcnJheUxpdGVyYWwgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKG1lbWJlcnMsIGxvY2F0aW9uKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdhcnJheS1saXRlcmFsJztcbiAgICAgICAgdGhpcy5tZW1iZXJzID0gbWVtYmVycztcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICByZXR1cm4gJ1snICsgdGhpcy5tZW1iZXJzLm1hcChtID0+IG0udHJhbnNwaWxlKCkpLmpvaW4oJywnKSArICddJztcblxuICAgIH1cblxuICAgIGFzVmFsdWUoY29udGV4dCkge1xuXG4gICAgICByZXR1cm4gdGhpcy5tZW1iZXJzLm1hcChtPT5tLmFzVmFsdWUoY29udGV4dCkpO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgJ1snKTtcbiAgICAgICAgdGhpcy5jb21waWxlTGlzdCh0aGlzLm1lbWJlcnMsIG5vZGUsIG8pO1xuICAgICAgICByZXR1cm4gbm9kZTtcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJyYXlMaXRlcmFsXG4iXX0=