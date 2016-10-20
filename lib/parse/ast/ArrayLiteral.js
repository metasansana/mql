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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9hc3QvQXJyYXlMaXRlcmFsLmpzIl0sIm5hbWVzIjpbIkFycmF5TGl0ZXJhbCIsIm1lbWJlcnMiLCJsb2NhdGlvbiIsInR5cGUiLCJtYXAiLCJtIiwidHJhbnNwaWxlIiwiam9pbiIsImNvbnRleHQiLCJhc1ZhbHVlIiwibyIsIm5vZGUiLCJzb3VyY2VOb2RlIiwiZmlsZU5hbWUiLCJjb21waWxlTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7O0lBS01BLFk7OztBQUVGLDBCQUFZQyxPQUFaLEVBQXFCQyxRQUFyQixFQUErQjtBQUFBOztBQUFBOztBQUUzQixjQUFLQyxJQUFMLEdBQVksZUFBWjtBQUNBLGNBQUtGLE9BQUwsR0FBZUEsT0FBZjtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBSjJCO0FBSzlCOzs7O29DQUVXOztBQUVSLG1CQUFPLE1BQU0sS0FBS0QsT0FBTCxDQUFhRyxHQUFiLENBQWlCO0FBQUEsdUJBQUtDLEVBQUVDLFNBQUYsRUFBTDtBQUFBLGFBQWpCLEVBQXFDQyxJQUFyQyxDQUEwQyxHQUExQyxDQUFOLEdBQXVELEdBQTlEO0FBRUg7OztnQ0FFT0MsTyxFQUFTOztBQUVmLG1CQUFPLEtBQUtQLE9BQUwsQ0FBYUcsR0FBYixDQUFpQjtBQUFBLHVCQUFHQyxFQUFFSSxPQUFGLENBQVVELE9BQVYsQ0FBSDtBQUFBLGFBQWpCLENBQVA7QUFFRDs7O2dDQUVPRSxDLEVBQUc7O0FBRVAsZ0JBQUlDLE9BQU8sS0FBS0MsVUFBTCxDQUFnQkYsRUFBRUcsUUFBbEIsRUFBNEIsR0FBNUIsQ0FBWDtBQUNBLGlCQUFLQyxXQUFMLENBQWlCLEtBQUtiLE9BQXRCLEVBQStCVSxJQUEvQixFQUFxQ0QsQ0FBckM7QUFDQSxtQkFBT0MsSUFBUDtBQUVIOzs7Ozs7a0JBR1VYLFkiLCJmaWxlIjoiQXJyYXlMaXRlcmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBBcnJheUxpdGVyYWwgXG4gKiBAcGFyYW0ge2FycmF5fSBtZW1iZXJzIFxuICogQHBhcmFtIHtMb2NhdGlvbn0gbG9jYXRpb24gXG4gKi9cbmNsYXNzIEFycmF5TGl0ZXJhbCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IobWVtYmVycywgbG9jYXRpb24pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2FycmF5LWxpdGVyYWwnO1xuICAgICAgICB0aGlzLm1lbWJlcnMgPSBtZW1iZXJzO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICAgIHJldHVybiAnWycgKyB0aGlzLm1lbWJlcnMubWFwKG0gPT4gbS50cmFuc3BpbGUoKSkuam9pbignLCcpICsgJ10nO1xuXG4gICAgfVxuXG4gICAgYXNWYWx1ZShjb250ZXh0KSB7XG5cbiAgICAgIHJldHVybiB0aGlzLm1lbWJlcnMubWFwKG09Pm0uYXNWYWx1ZShjb250ZXh0KSk7XG5cbiAgICB9XG5cbiAgICBjb21waWxlKG8pIHtcblxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCAnWycpO1xuICAgICAgICB0aGlzLmNvbXBpbGVMaXN0KHRoaXMubWVtYmVycywgbm9kZSwgbyk7XG4gICAgICAgIHJldHVybiBub2RlO1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnJheUxpdGVyYWxcbiJdfQ==