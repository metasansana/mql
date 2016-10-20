'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Statement2 = require('./Statement');

var _Statement3 = _interopRequireDefault(_Statement2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * UpdateStatement
 */
var UpdateStatement = function (_Statement) {
    _inherits(UpdateStatement, _Statement);

    function UpdateStatement(collection, values, where, once, location) {
        _classCallCheck(this, UpdateStatement);

        var _this = _possibleConstructorReturn(this, (UpdateStatement.__proto__ || Object.getPrototypeOf(UpdateStatement)).call(this));

        _this.type = 'update-statement';
        _this.collection = collection;
        _this.values = values;
        _this.where = where;
        _this.once = once;
        _this.location = location;

        return _this;
    }

    _createClass(UpdateStatement, [{
        key: 'execute',
        value: function execute(db, context) {

            var where = {};
            var update = {
                $set: this.values.asValue(context)
            };

            where = this.where.reduce(function (prev, curr) {
                return curr.apply(prev, context);
            }, where);

            return this.once ? db.collection(this.collection.asValue(context)).updateOne(where, update) : db.collection(this.collection.asValue(context)).updateMany(where, update);
        }
    }]);

    return UpdateStatement;
}(_Statement3.default);

exports.default = UpdateStatement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9hc3QvVXBkYXRlU3RhdGVtZW50LmpzIl0sIm5hbWVzIjpbIlVwZGF0ZVN0YXRlbWVudCIsImNvbGxlY3Rpb24iLCJ2YWx1ZXMiLCJ3aGVyZSIsIm9uY2UiLCJsb2NhdGlvbiIsInR5cGUiLCJkYiIsImNvbnRleHQiLCJ1cGRhdGUiLCIkc2V0IiwiYXNWYWx1ZSIsInJlZHVjZSIsInByZXYiLCJjdXJyIiwiYXBwbHkiLCJ1cGRhdGVPbmUiLCJ1cGRhdGVNYW55Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR01BLGU7OztBQUVGLDZCQUFZQyxVQUFaLEVBQXdCQyxNQUF4QixFQUFnQ0MsS0FBaEMsRUFBdUNDLElBQXZDLEVBQTZDQyxRQUE3QyxFQUF1RDtBQUFBOztBQUFBOztBQUduRCxjQUFLQyxJQUFMLEdBQVksa0JBQVo7QUFDQSxjQUFLTCxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLGNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLGNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQVJtRDtBQVV0RDs7OztnQ0FFT0UsRSxFQUFJQyxPLEVBQVM7O0FBRWpCLGdCQUFJTCxRQUFRLEVBQVo7QUFDQSxnQkFBSU0sU0FBUztBQUNUQyxzQkFBTSxLQUFLUixNQUFMLENBQVlTLE9BQVosQ0FBb0JILE9BQXBCO0FBREcsYUFBYjs7QUFJSkwsb0JBQVEsS0FBS0EsS0FBTCxDQUFXUyxNQUFYLENBQWtCLFVBQUNDLElBQUQsRUFBT0MsSUFBUDtBQUFBLHVCQUFnQkEsS0FBS0MsS0FBTCxDQUFXRixJQUFYLEVBQWlCTCxPQUFqQixDQUFoQjtBQUFBLGFBQWxCLEVBQTZETCxLQUE3RCxDQUFSOztBQUVJLG1CQUFRLEtBQUtDLElBQU4sR0FDSEcsR0FBR04sVUFBSCxDQUFjLEtBQUtBLFVBQUwsQ0FBZ0JVLE9BQWhCLENBQXdCSCxPQUF4QixDQUFkLEVBQWdEUSxTQUFoRCxDQUEwRGIsS0FBMUQsRUFBaUVNLE1BQWpFLENBREcsR0FFSEYsR0FBR04sVUFBSCxDQUFjLEtBQUtBLFVBQUwsQ0FBZ0JVLE9BQWhCLENBQXdCSCxPQUF4QixDQUFkLEVBQWdEUyxVQUFoRCxDQUEyRGQsS0FBM0QsRUFBa0VNLE1BQWxFLENBRko7QUFJSDs7Ozs7O2tCQUlVVCxlIiwiZmlsZSI6IlVwZGF0ZVN0YXRlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdGF0ZW1lbnQgZnJvbSAnLi9TdGF0ZW1lbnQnO1xuXG4vKipcbiAqIFVwZGF0ZVN0YXRlbWVudFxuICovXG5jbGFzcyBVcGRhdGVTdGF0ZW1lbnQgZXh0ZW5kcyBTdGF0ZW1lbnQge1xuXG4gICAgY29uc3RydWN0b3IoY29sbGVjdGlvbiwgdmFsdWVzLCB3aGVyZSwgb25jZSwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAndXBkYXRlLXN0YXRlbWVudCc7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbiA9IGNvbGxlY3Rpb247XG4gICAgICAgIHRoaXMudmFsdWVzID0gdmFsdWVzO1xuICAgICAgICB0aGlzLndoZXJlID0gd2hlcmU7XG4gICAgICAgIHRoaXMub25jZSA9IG9uY2U7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIGV4ZWN1dGUoZGIsIGNvbnRleHQpIHtcblxuICAgICAgICB2YXIgd2hlcmUgPSB7fTtcbiAgICAgICAgdmFyIHVwZGF0ZSA9IHtcbiAgICAgICAgICAgICRzZXQ6IHRoaXMudmFsdWVzLmFzVmFsdWUoY29udGV4dClcbiAgICAgICAgfTtcblxuICAgIHdoZXJlID0gdGhpcy53aGVyZS5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IGN1cnIuYXBwbHkocHJldiwgY29udGV4dCksIHdoZXJlKTtcblxuICAgICAgICByZXR1cm4gKHRoaXMub25jZSkgP1xuICAgICAgICAgICAgZGIuY29sbGVjdGlvbih0aGlzLmNvbGxlY3Rpb24uYXNWYWx1ZShjb250ZXh0KSkudXBkYXRlT25lKHdoZXJlLCB1cGRhdGUpIDpcbiAgICAgICAgICAgIGRiLmNvbGxlY3Rpb24odGhpcy5jb2xsZWN0aW9uLmFzVmFsdWUoY29udGV4dCkpLnVwZGF0ZU1hbnkod2hlcmUsIHVwZGF0ZSk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXBkYXRlU3RhdGVtZW50XG4iXX0=