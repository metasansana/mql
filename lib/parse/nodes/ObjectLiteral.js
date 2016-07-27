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

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ObjectLiteral).call(this));

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9PYmplY3RMaXRlcmFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7SUFLTSxhOzs7QUFFRiwyQkFBWSxJQUFaLEVBQWtCLFFBQWxCLEVBQTRCO0FBQUE7O0FBQUE7O0FBR3hCLGNBQUssSUFBTCxHQUFZLGdCQUFaO0FBQ0EsY0FBSyxJQUFMLEdBQVksSUFBWjtBQUNBLGNBQUssUUFBTCxHQUFnQixRQUFoQjs7QUFMd0I7QUFPM0I7Ozs7Z0NBRU8sTyxFQUFTOztBQUViLGdCQUFJLElBQUksRUFBUjtBQUNBLGlCQUFLLElBQUwsQ0FBVSxPQUFWLENBQWtCLGFBQUs7O0FBRW5CLGtCQUFFLEVBQUUsR0FBRixDQUFNLE9BQU4sQ0FBYyxPQUFkLENBQUYsSUFBNEIsRUFBRSxLQUFGLENBQVEsT0FBUixDQUFnQixPQUFoQixDQUE1QjtBQUVILGFBSkQ7O0FBTUEsbUJBQU8sQ0FBUDtBQUVIOzs7b0NBRVc7O0FBRVIsbUJBQU8sTUFBTSxLQUFLLElBQUwsQ0FBVSxHQUFWLENBQWM7QUFBQSx1QkFBUSxFQUFFLEdBQVYsU0FBaUIsRUFBRSxLQUFGLENBQVEsU0FBUixFQUFqQjtBQUFBLGFBQWQsRUFBc0QsSUFBdEQsQ0FBMkQsR0FBM0QsQ0FBTixHQUF3RSxHQUEvRTtBQUVIOzs7Z0NBRU8sQyxFQUFHOztBQUVQLGdCQUFJLE9BQU8sS0FBSyxVQUFMLENBQWdCLEVBQUUsUUFBbEIsRUFBNEIsR0FBNUIsQ0FBWDs7QUFFQSxpQkFBSyxJQUFMLENBQVUsT0FBVixDQUFrQixhQUFLOztBQUVuQixxQkFBSyxHQUFMLFFBQWEsRUFBRSxHQUFmO0FBQ0EscUJBQUssR0FBTCxDQUFTLEVBQUUsS0FBRixDQUFRLE9BQVIsQ0FBZ0IsQ0FBaEIsQ0FBVDtBQUVILGFBTEQ7O0FBT0EsaUJBQUssR0FBTCxDQUFTLEdBQVQ7QUFDQSxtQkFBTyxJQUFQO0FBRUg7Ozs7OztrQkFJVSxhIiwiZmlsZSI6Ik9iamVjdExpdGVyYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIE9iamVjdExpdGVyYWwgXG4gKiBAcGFyYW0ge2FycmF5PG9iamVjdD59IGtleXMgXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvbiBcbiAqL1xuY2xhc3MgT2JqZWN0TGl0ZXJhbCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3Ioa2V5cywgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnb2JqZWN0LWxpdGVyYWwnO1xuICAgICAgICB0aGlzLmtleXMgPSBrZXlzO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICBhc1ZhbHVlKGNvbnRleHQpIHtcblxuICAgICAgICB2YXIgbyA9IHt9O1xuICAgICAgICB0aGlzLmtleXMuZm9yRWFjaChrID0+IHtcblxuICAgICAgICAgICAgb1trLmtleS5hc1ZhbHVlKGNvbnRleHQpXSA9IGsudmFsdWUuYXNWYWx1ZShjb250ZXh0KTtcblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbztcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICByZXR1cm4gJ3snICsgdGhpcy5rZXlzLm1hcChwID0+IGAke2sua2V5fToke2sudmFsdWUudHJhbnNwaWxlKCl9YCkuam9pbignLCcpICsgJ30nO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgJ3snKTtcblxuICAgICAgICB0aGlzLmtleXMuZm9yRWFjaChwID0+IHtcblxuICAgICAgICAgICAgbm9kZS5hZGQoYCcke3Aua2V5fSdgKTtcbiAgICAgICAgICAgIG5vZGUuYWRkKGsudmFsdWUuY29tcGlsZShvKSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbm9kZS5hZGQoJ30nKTtcbiAgICAgICAgcmV0dXJuIG5vZGU7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0TGl0ZXJhbFxuIl19