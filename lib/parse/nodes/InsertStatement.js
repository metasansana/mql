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
 * InputStatement 
 */
var InputStatement = function (_Node) {
    _inherits(InputStatement, _Node);

    function InputStatement(collection, values, location) {
        _classCallCheck(this, InputStatement);

        var _this = _possibleConstructorReturn(this, (InputStatement.__proto__ || Object.getPrototypeOf(InputStatement)).call(this));

        _this.type = 'insert-statement';
        _this.collection = collection;
        _this.values = values;
        _this.location = location;

        return _this;
    }

    _createClass(InputStatement, [{
        key: 'execute',
        value: function execute(db, context) {

            return db.collection(this.collection.asValue(context)).insertOne(this.values.asValue(context));
        }
    }]);

    return InputStatement;
}(_Node3.default);

exports.default = InputStatement;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9JbnNlcnRTdGF0ZW1lbnQuanMiXSwibmFtZXMiOlsiSW5wdXRTdGF0ZW1lbnQiLCJjb2xsZWN0aW9uIiwidmFsdWVzIiwibG9jYXRpb24iLCJ0eXBlIiwiZGIiLCJjb250ZXh0IiwiYXNWYWx1ZSIsImluc2VydE9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxjOzs7QUFFRiw0QkFBWUMsVUFBWixFQUF3QkMsTUFBeEIsRUFBZ0NDLFFBQWhDLEVBQTBDO0FBQUE7O0FBQUE7O0FBR3RDLGNBQUtDLElBQUwsR0FBWSxrQkFBWjtBQUNBLGNBQUtILFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsY0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBTnNDO0FBUXpDOzs7O2dDQUVPRSxFLEVBQUlDLE8sRUFBUzs7QUFFakIsbUJBQU9ELEdBQUdKLFVBQUgsQ0FBYyxLQUFLQSxVQUFMLENBQWdCTSxPQUFoQixDQUF3QkQsT0FBeEIsQ0FBZCxFQUNQRSxTQURPLENBQ0csS0FBS04sTUFBTCxDQUFZSyxPQUFaLENBQW9CRCxPQUFwQixDQURILENBQVA7QUFHSDs7Ozs7O2tCQUdVTixjIiwiZmlsZSI6Ikluc2VydFN0YXRlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogSW5wdXRTdGF0ZW1lbnQgXG4gKi9cbmNsYXNzIElucHV0U3RhdGVtZW50IGV4dGVuZHMgTm9kZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb2xsZWN0aW9uLCB2YWx1ZXMsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2luc2VydC1zdGF0ZW1lbnQnO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uO1xuICAgICAgICB0aGlzLnZhbHVlcyA9IHZhbHVlcztcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgZXhlY3V0ZShkYiwgY29udGV4dCkge1xuXG4gICAgICAgIHJldHVybiBkYi5jb2xsZWN0aW9uKHRoaXMuY29sbGVjdGlvbi5hc1ZhbHVlKGNvbnRleHQpKS5cbiAgICAgICAgaW5zZXJ0T25lKHRoaXMudmFsdWVzLmFzVmFsdWUoY29udGV4dCkpO1xuXG4gICAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBJbnB1dFN0YXRlbWVudFxuIl19