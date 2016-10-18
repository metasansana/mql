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
 * NumberLiteral 
 */
var NumberLiteral = function (_Node) {
    _inherits(NumberLiteral, _Node);

    function NumberLiteral(value, location) {
        _classCallCheck(this, NumberLiteral);

        var _this = _possibleConstructorReturn(this, (NumberLiteral.__proto__ || Object.getPrototypeOf(NumberLiteral)).call(this));

        _this.type = 'number-literal';
        _this.value = value;
        _this.location = location;

        return _this;
    }

    _createClass(NumberLiteral, [{
        key: 'asValue',
        value: function asValue(context) {

            return parseFloat(this.value);
        }
    }, {
        key: 'transpile',
        value: function transpile() {

            return parseFloat(this.value);
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            return this.sourceNode(o.fileName, parseFloat(this.value));
        }
    }]);

    return NumberLiteral;
}(_Node3.default);

exports.default = NumberLiteral;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9OdW1iZXJMaXRlcmFsLmpzIl0sIm5hbWVzIjpbIk51bWJlckxpdGVyYWwiLCJ2YWx1ZSIsImxvY2F0aW9uIiwidHlwZSIsImNvbnRleHQiLCJwYXJzZUZsb2F0IiwibyIsInNvdXJjZU5vZGUiLCJmaWxlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxhOzs7QUFFRiwyQkFBWUMsS0FBWixFQUFtQkMsUUFBbkIsRUFBNkI7QUFBQTs7QUFBQTs7QUFFekIsY0FBS0MsSUFBTCxHQUFZLGdCQUFaO0FBQ0EsY0FBS0YsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBSnlCO0FBTTVCOzs7O2dDQUVPRSxPLEVBQVM7O0FBRWIsbUJBQU9DLFdBQVcsS0FBS0osS0FBaEIsQ0FBUDtBQUVIOzs7b0NBRVc7O0FBRVIsbUJBQU9JLFdBQVcsS0FBS0osS0FBaEIsQ0FBUDtBQUVIOzs7Z0NBRU9LLEMsRUFBRzs7QUFFUCxtQkFBTyxLQUFLQyxVQUFMLENBQWdCRCxFQUFFRSxRQUFsQixFQUE0QkgsV0FBVyxLQUFLSixLQUFoQixDQUE1QixDQUFQO0FBRUg7Ozs7OztrQkFJVUQsYSIsImZpbGUiOiJOdW1iZXJMaXRlcmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBOdW1iZXJMaXRlcmFsIFxuICovXG5jbGFzcyBOdW1iZXJMaXRlcmFsIGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSwgbG9jYXRpb24pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ251bWJlci1saXRlcmFsJztcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICBhc1ZhbHVlKGNvbnRleHQpIHtcblxuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh0aGlzLnZhbHVlKTtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZSgpIHtcblxuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh0aGlzLnZhbHVlKTtcblxuICAgIH1cblxuICAgIGNvbXBpbGUobykge1xuXG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZU5vZGUoby5maWxlTmFtZSwgcGFyc2VGbG9hdCh0aGlzLnZhbHVlKSk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyTGl0ZXJhbFxuIl19