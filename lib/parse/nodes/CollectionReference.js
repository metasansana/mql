'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * CollectionReference 
 */

var CollectionReference = function (_Node) {
    _inherits(CollectionReference, _Node);

    function CollectionReference(collection, alias, location) {
        _classCallCheck(this, CollectionReference);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CollectionReference).call(this));

        _this.type = 'collection-reference';
        _this.collection = collection;
        _this.alias = alias;
        _this.location = location;

        return _this;
    }

    return CollectionReference;
}(_Node3.default);

exports.default = CollectionReference;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9Db2xsZWN0aW9uUmVmZXJlbmNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7OztJQUdNLG1COzs7QUFFRixpQ0FBWSxVQUFaLEVBQXdCLEtBQXhCLEVBQStCLFFBQS9CLEVBQXlDO0FBQUE7O0FBQUE7O0FBR3JDLGNBQUssSUFBTCxHQUFZLHNCQUFaO0FBQ0EsY0FBSyxVQUFMLEdBQWtCLFVBQWxCO0FBQ0EsY0FBSyxLQUFMLEdBQWEsS0FBYjtBQUNBLGNBQUssUUFBTCxHQUFnQixRQUFoQjs7QUFOcUM7QUFReEM7Ozs7O2tCQUdVLG1CIiwiZmlsZSI6IkNvbGxlY3Rpb25SZWZlcmVuY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuXG4vKipcbiAqIENvbGxlY3Rpb25SZWZlcmVuY2UgXG4gKi9cbmNsYXNzIENvbGxlY3Rpb25SZWZlcmVuY2UgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbGxlY3Rpb24sIGFsaWFzLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdjb2xsZWN0aW9uLXJlZmVyZW5jZSc7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbiA9IGNvbGxlY3Rpb247XG4gICAgICAgIHRoaXMuYWxpYXMgPSBhbGlhcztcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb2xsZWN0aW9uUmVmZXJlbmNlXG4iXX0=