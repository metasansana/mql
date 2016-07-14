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
 * @param {array<object>} kvps 
 * @param {Location} location 
 */

var ObjectLiteral = function (_Node) {
    _inherits(ObjectLiteral, _Node);

    function ObjectLiteral(kvps, location) {
        _classCallCheck(this, ObjectLiteral);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ObjectLiteral).call(this));

        _this.type = 'object-literal';
        _this.kvps = kvsp;
        _this.location = location;

        return _this;
    }

    _createClass(ObjectLiteral, [{
        key: 'transpile',
        value: function transpile() {

            return '{' + this.kvps.map(function (p) {
                return k.key + ':' + k.value.transpile();
            }).join(',') + '}';
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            var node = this.sourceNode(o.fileName, '{');

            this.kvps.forEach(function (p) {

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9PYmplY3RMaXRlcmFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7SUFLTSxhOzs7QUFFRiwyQkFBWSxJQUFaLEVBQWtCLFFBQWxCLEVBQTRCO0FBQUE7O0FBQUE7O0FBR3hCLGNBQUssSUFBTCxHQUFZLGdCQUFaO0FBQ0EsY0FBSyxJQUFMLEdBQVksSUFBWjtBQUNBLGNBQUssUUFBTCxHQUFnQixRQUFoQjs7QUFMd0I7QUFPM0I7Ozs7b0NBRVc7O0FBRVIsbUJBQU8sTUFBTSxLQUFLLElBQUwsQ0FBVSxHQUFWLENBQWM7QUFBQSx1QkFBUSxFQUFFLEdBQVYsU0FBaUIsRUFBRSxLQUFGLENBQVEsU0FBUixFQUFqQjtBQUFBLGFBQWQsRUFBc0QsSUFBdEQsQ0FBMkQsR0FBM0QsQ0FBTixHQUF3RSxHQUEvRTtBQUVIOzs7Z0NBRU8sQyxFQUFHOztBQUVQLGdCQUFJLE9BQU8sS0FBSyxVQUFMLENBQWdCLEVBQUUsUUFBbEIsRUFBNEIsR0FBNUIsQ0FBWDs7QUFFQSxpQkFBSyxJQUFMLENBQVUsT0FBVixDQUFrQixhQUFLOztBQUVuQixxQkFBSyxHQUFMLFFBQWEsRUFBRSxHQUFmO0FBQ0EscUJBQUssR0FBTCxDQUFTLEVBQUUsS0FBRixDQUFRLE9BQVIsQ0FBZ0IsQ0FBaEIsQ0FBVDtBQUVILGFBTEQ7O0FBT0EsaUJBQUssR0FBTCxDQUFTLEdBQVQ7QUFDQSxtQkFBTyxJQUFQO0FBRUg7Ozs7OztrQkFJVSxhIiwiZmlsZSI6Ik9iamVjdExpdGVyYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIE9iamVjdExpdGVyYWwgXG4gKiBAcGFyYW0ge2FycmF5PG9iamVjdD59IGt2cHMgXG4gKiBAcGFyYW0ge0xvY2F0aW9ufSBsb2NhdGlvbiBcbiAqL1xuY2xhc3MgT2JqZWN0TGl0ZXJhbCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3Ioa3ZwcywgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnb2JqZWN0LWxpdGVyYWwnO1xuICAgICAgICB0aGlzLmt2cHMgPSBrdnNwO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGUoKSB7XG5cbiAgICAgICAgcmV0dXJuICd7JyArIHRoaXMua3Zwcy5tYXAocCA9PiBgJHtrLmtleX06JHtrLnZhbHVlLnRyYW5zcGlsZSgpfWApLmpvaW4oJywnKSArICd9JztcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHZhciBub2RlID0gdGhpcy5zb3VyY2VOb2RlKG8uZmlsZU5hbWUsICd7Jyk7XG5cbiAgICAgICAgdGhpcy5rdnBzLmZvckVhY2gocCA9PiB7XG5cbiAgICAgICAgICAgIG5vZGUuYWRkKGAnJHtwLmtleX0nYCk7XG4gICAgICAgICAgICBub2RlLmFkZChrLnZhbHVlLmNvbXBpbGUobykpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIG5vZGUuYWRkKCd9Jyk7XG4gICAgICAgIHJldHVybiBub2RlO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdExpdGVyYWxcbiJdfQ==