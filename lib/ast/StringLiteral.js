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
 * StringLiteral 
 */
var StringLiteral = function (_Node) {
    _inherits(StringLiteral, _Node);

    function StringLiteral(value, location) {
        _classCallCheck(this, StringLiteral);

        var _this = _possibleConstructorReturn(this, (StringLiteral.__proto__ || Object.getPrototypeOf(StringLiteral)).call(this));

        _this.type = 'string-literal';
        _this.value = value;
        _this.location = location;

        return _this;
    }

    _createClass(StringLiteral, [{
        key: 'asValue',
        value: function asValue(context) {

            return this.value.substring(1, this.value.length - 1);
        }
    }, {
        key: 'transpile',
        value: function transpile() {

            return this.value;
        }
    }, {
        key: 'compile',
        value: function compile(o) {

            return this.sourceNode(o.fileName, this.value);
        }
    }]);

    return StringLiteral;
}(_Node3.default);

exports.default = StringLiteral;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3QvU3RyaW5nTGl0ZXJhbC5qcyJdLCJuYW1lcyI6WyJTdHJpbmdMaXRlcmFsIiwidmFsdWUiLCJsb2NhdGlvbiIsInR5cGUiLCJjb250ZXh0Iiwic3Vic3RyaW5nIiwibGVuZ3RoIiwibyIsInNvdXJjZU5vZGUiLCJmaWxlTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxhOzs7QUFFRiwyQkFBWUMsS0FBWixFQUFtQkMsUUFBbkIsRUFBNkI7QUFBQTs7QUFBQTs7QUFHekIsY0FBS0MsSUFBTCxHQUFZLGdCQUFaO0FBQ0EsY0FBS0YsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBTHlCO0FBTzVCOzs7O2dDQUVPRSxPLEVBQVM7O0FBRWYsbUJBQU8sS0FBS0gsS0FBTCxDQUFXSSxTQUFYLENBQXFCLENBQXJCLEVBQXdCLEtBQUtKLEtBQUwsQ0FBV0ssTUFBWCxHQUFvQixDQUE1QyxDQUFQO0FBRUQ7OztvQ0FFVzs7QUFFUixtQkFBTyxLQUFLTCxLQUFaO0FBRUg7OztnQ0FFT00sQyxFQUFHOztBQUVQLG1CQUFPLEtBQUtDLFVBQUwsQ0FBZ0JELEVBQUVFLFFBQWxCLEVBQTRCLEtBQUtSLEtBQWpDLENBQVA7QUFFSDs7Ozs7O2tCQUlVRCxhIiwiZmlsZSI6IlN0cmluZ0xpdGVyYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIFN0cmluZ0xpdGVyYWwgXG4gKi9cbmNsYXNzIFN0cmluZ0xpdGVyYWwgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKHZhbHVlLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdzdHJpbmctbGl0ZXJhbCc7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgYXNWYWx1ZShjb250ZXh0KSB7XG5cbiAgICAgIHJldHVybiB0aGlzLnZhbHVlLnN1YnN0cmluZygxLCB0aGlzLnZhbHVlLmxlbmd0aCAtIDEpO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlKCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZShvKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlTm9kZShvLmZpbGVOYW1lLCB0aGlzLnZhbHVlKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBTdHJpbmdMaXRlcmFsXG4iXX0=