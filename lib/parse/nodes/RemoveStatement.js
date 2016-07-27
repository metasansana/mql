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
 * RemoveStatement 
 */

var RemoveStatement = function (_Node) {
    _inherits(RemoveStatement, _Node);

    function RemoveStatement(collection, where, one, location) {
        _classCallCheck(this, RemoveStatement);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RemoveStatement).call(this));

        _this.type = 'remove-statement';
        _this.collection = collection;
        _this.where = where;
        _this.one = one;
        _this.location = location;

        return _this;
    }

    _createClass(RemoveStatement, [{
        key: 'execute',
        value: function execute(db, context) {

            var where = {};
            var cursor;

            this.where.forEach(function (w) {
                return w.apply(where, context);
            });

            return this.one ? db.collection(this.collection.asValue(context)).deleteOne(where) : db.collection(this.collection.asValue(context)).deleteMany(where);
        }
    }]);

    return RemoveStatement;
}(_Node3.default);

exports.default = RemoveStatement;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9SZW1vdmVTdGF0ZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7SUFHTSxlOzs7QUFFRiw2QkFBWSxVQUFaLEVBQXdCLEtBQXhCLEVBQStCLEdBQS9CLEVBQW9DLFFBQXBDLEVBQThDO0FBQUE7O0FBQUE7O0FBRzFDLGNBQUssSUFBTCxHQUFZLGtCQUFaO0FBQ0EsY0FBSyxVQUFMLEdBQWtCLFVBQWxCO0FBQ0EsY0FBSyxLQUFMLEdBQWEsS0FBYjtBQUNBLGNBQUssR0FBTCxHQUFXLEdBQVg7QUFDQSxjQUFLLFFBQUwsR0FBZ0IsUUFBaEI7O0FBUDBDO0FBUzdDOzs7O2dDQUVPLEUsRUFBSSxPLEVBQVM7O0FBRWpCLGdCQUFJLFFBQVEsRUFBWjtBQUNBLGdCQUFJLE1BQUo7O0FBRUEsaUJBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUI7QUFBQSx1QkFBSyxFQUFFLEtBQUYsQ0FBUSxLQUFSLEVBQWUsT0FBZixDQUFMO0FBQUEsYUFBbkI7O0FBRUEsbUJBQVEsS0FBSyxHQUFOLEdBQ0gsR0FBRyxVQUFILENBQWMsS0FBSyxVQUFMLENBQWdCLE9BQWhCLENBQXdCLE9BQXhCLENBQWQsRUFBZ0QsU0FBaEQsQ0FBMEQsS0FBMUQsQ0FERyxHQUVILEdBQUcsVUFBSCxDQUFjLEtBQUssVUFBTCxDQUFnQixPQUFoQixDQUF3QixPQUF4QixDQUFkLEVBQWdELFVBQWhELENBQTJELEtBQTNELENBRko7QUFJSDs7Ozs7O2tCQUlVLGUiLCJmaWxlIjoiUmVtb3ZlU3RhdGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcblxuLyoqXG4gKiBSZW1vdmVTdGF0ZW1lbnQgXG4gKi9cbmNsYXNzIFJlbW92ZVN0YXRlbWVudCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IoY29sbGVjdGlvbiwgd2hlcmUsIG9uZSwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAncmVtb3ZlLXN0YXRlbWVudCc7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbiA9IGNvbGxlY3Rpb247XG4gICAgICAgIHRoaXMud2hlcmUgPSB3aGVyZTtcbiAgICAgICAgdGhpcy5vbmUgPSBvbmU7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIGV4ZWN1dGUoZGIsIGNvbnRleHQpIHtcblxuICAgICAgICB2YXIgd2hlcmUgPSB7fTtcbiAgICAgICAgdmFyIGN1cnNvcjtcblxuICAgICAgICB0aGlzLndoZXJlLmZvckVhY2godyA9PiB3LmFwcGx5KHdoZXJlLCBjb250ZXh0KSk7XG5cbiAgICAgICAgcmV0dXJuICh0aGlzLm9uZSkgP1xuICAgICAgICAgICAgZGIuY29sbGVjdGlvbih0aGlzLmNvbGxlY3Rpb24uYXNWYWx1ZShjb250ZXh0KSkuZGVsZXRlT25lKHdoZXJlKSA6XG4gICAgICAgICAgICBkYi5jb2xsZWN0aW9uKHRoaXMuY29sbGVjdGlvbi5hc1ZhbHVlKGNvbnRleHQpKS5kZWxldGVNYW55KHdoZXJlKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBSZW1vdmVTdGF0ZW1lbnRcbiJdfQ==