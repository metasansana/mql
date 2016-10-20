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
 * ObjectLiteral
 * @param {array<object>} keys
 * @param {Location} location
 */
var ObjectLiteral = function (_Node) {
    _inherits(ObjectLiteral, _Node);

    function ObjectLiteral(keys, location) {
        _classCallCheck(this, ObjectLiteral);

        var _this = _possibleConstructorReturn(this, (ObjectLiteral.__proto__ || Object.getPrototypeOf(ObjectLiteral)).call(this));

        _this.type = 'object-literal';
        _this.keys = keys;
        _this.location = location;

        return _this;
    }

    _createClass(ObjectLiteral, [{
        key: 'asValue',
        value: function asValue(context) {

            var o = {};
            this.keys.forEach(function (k) {

                o[k.key.asValue(context)] = k.value.asValue(context);
            });

            return o;
        }
    }, {
        key: 'apply',
        value: function apply(o, context) {

            return this.asValue(context);
        }
    }, {
        key: 'transpile',
        value: function transpile() {

            return '{' + this.keys.map(function (p) {
                return k.key + ':' + k.value.transpile();
            }).join(',') + '}';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var node = this.sourceNode(o.fileName, '{');

            this.keys.forEach(function (p) {

                node.add('\'' + p.key + '\'');
                node.add(k.value.compile(o));
            });

            node.add('}');
            return node;
        }
    }]);

    return ObjectLiteral;
}(_Node3.default);

exports.default = ObjectLiteral;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9PYmplY3RMaXRlcmFsLmpzIl0sIm5hbWVzIjpbIk9iamVjdExpdGVyYWwiLCJrZXlzIiwibG9jYXRpb24iLCJ0eXBlIiwiY29udGV4dCIsIm8iLCJmb3JFYWNoIiwiayIsImtleSIsImFzVmFsdWUiLCJ2YWx1ZSIsIm1hcCIsInRyYW5zcGlsZSIsImpvaW4iLCJub2RlIiwic291cmNlTm9kZSIsImZpbGVOYW1lIiwiYWRkIiwicCIsImNvbXBpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7OztJQUtNQSxhOzs7QUFFRiwyQkFBWUMsSUFBWixFQUFrQkMsUUFBbEIsRUFBNEI7QUFBQTs7QUFBQTs7QUFHeEIsY0FBS0MsSUFBTCxHQUFZLGdCQUFaO0FBQ0EsY0FBS0YsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBTHdCO0FBTzNCOzs7O2dDQUVPRSxPLEVBQVM7O0FBRWIsZ0JBQUlDLElBQUksRUFBUjtBQUNBLGlCQUFLSixJQUFMLENBQVVLLE9BQVYsQ0FBa0IsYUFBSzs7QUFFbkJELGtCQUFFRSxFQUFFQyxHQUFGLENBQU1DLE9BQU4sQ0FBY0wsT0FBZCxDQUFGLElBQTRCRyxFQUFFRyxLQUFGLENBQVFELE9BQVIsQ0FBZ0JMLE9BQWhCLENBQTVCO0FBRUgsYUFKRDs7QUFNQSxtQkFBT0MsQ0FBUDtBQUVIOzs7OEJBRUdBLEMsRUFBR0QsTyxFQUFTOztBQUVoQixtQkFBTyxLQUFLSyxPQUFMLENBQWFMLE9BQWIsQ0FBUDtBQUVEOzs7b0NBRWE7O0FBRVIsbUJBQU8sTUFBTSxLQUFLSCxJQUFMLENBQVVVLEdBQVYsQ0FBYztBQUFBLHVCQUFRSixFQUFFQyxHQUFWLFNBQWlCRCxFQUFFRyxLQUFGLENBQVFFLFNBQVIsRUFBakI7QUFBQSxhQUFkLEVBQXNEQyxJQUF0RCxDQUEyRCxHQUEzRCxDQUFOLEdBQXdFLEdBQS9FO0FBRUg7OztnQ0FFT1IsQyxFQUFHOztBQUVQLGdCQUFJUyxPQUFPLEtBQUtDLFVBQUwsQ0FBZ0JWLEVBQUVXLFFBQWxCLEVBQTRCLEdBQTVCLENBQVg7O0FBRUEsaUJBQUtmLElBQUwsQ0FBVUssT0FBVixDQUFrQixhQUFLOztBQUVuQlEscUJBQUtHLEdBQUwsUUFBYUMsRUFBRVYsR0FBZjtBQUNBTSxxQkFBS0csR0FBTCxDQUFTVixFQUFFRyxLQUFGLENBQVFTLE9BQVIsQ0FBZ0JkLENBQWhCLENBQVQ7QUFFSCxhQUxEOztBQU9BUyxpQkFBS0csR0FBTCxDQUFTLEdBQVQ7QUFDQSxtQkFBT0gsSUFBUDtBQUVIOzs7Ozs7a0JBSVVkLGEiLCJmaWxlIjoiT2JqZWN0TGl0ZXJhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogT2JqZWN0TGl0ZXJhbFxuICogQHBhcmFtIHthcnJheTxvYmplY3Q+fSBrZXlzXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvblxuICovXG5jbGFzcyBPYmplY3RMaXRlcmFsIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihrZXlzLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdvYmplY3QtbGl0ZXJhbCc7XG4gICAgICAgIHRoaXMua2V5cyA9IGtleXM7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIGFzVmFsdWUoY29udGV4dCkge1xuXG4gICAgICAgIHZhciBvID0ge307XG4gICAgICAgIHRoaXMua2V5cy5mb3JFYWNoKGsgPT4ge1xuXG4gICAgICAgICAgICBvW2sua2V5LmFzVmFsdWUoY29udGV4dCldID0gay52YWx1ZS5hc1ZhbHVlKGNvbnRleHQpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBvO1xuXG4gICAgfVxuXG4gIGFwcGx5KG8sIGNvbnRleHQpIHtcblxuICAgIHJldHVybiB0aGlzLmFzVmFsdWUoY29udGV4dCk7XG5cbiAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICAgIHJldHVybiAneycgKyB0aGlzLmtleXMubWFwKHAgPT4gYCR7ay5rZXl9OiR7ay52YWx1ZS50cmFuc3BpbGUoKX1gKS5qb2luKCcsJykgKyAnfSc7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCAneycpO1xuXG4gICAgICAgIHRoaXMua2V5cy5mb3JFYWNoKHAgPT4ge1xuXG4gICAgICAgICAgICBub2RlLmFkZChgJyR7cC5rZXl9J2ApO1xuICAgICAgICAgICAgbm9kZS5hZGQoay52YWx1ZS5jb21waWxlKG8pKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBub2RlLmFkZCgnfScpO1xuICAgICAgICByZXR1cm4gbm9kZTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBPYmplY3RMaXRlcmFsXG4iXX0=