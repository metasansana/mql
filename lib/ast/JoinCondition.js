'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propertySeek = require('property-seek');

var _propertySeek2 = _interopRequireDefault(_propertySeek);

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * JoinCondition
 */
var JoinCondition = function (_Node) {
    _inherits(JoinCondition, _Node);

    function JoinCondition(rkey, lkey, location) {
        _classCallCheck(this, JoinCondition);

        var _this = _possibleConstructorReturn(this, (JoinCondition.__proto__ || Object.getPrototypeOf(JoinCondition)).call(this));

        _this.type = 'join-condition';
        _this.rkey = rkey;
        _this.lkey = lkey;
        _this.location = location;

        return _this;
    }

    /**
     * getWhereClause
     */


    _createClass(JoinCondition, [{
        key: 'getWhereClause',
        value: function getWhereClause(data, context) {
            var _this2 = this;

            var where = {};
            where[this.rkey.asValue(context)] = {
                $in: data.map(function (doc) {
                    return _propertySeek2.default.get(doc, _this2.lkey.asValue(context));
                }).filter(function (doc) {
                    return doc != null;
                })
            };
            return where;
        }
    }, {
        key: 'compare',
        value: function compare(ldoc, rdoc) {

            var left = _propertySeek2.default.get(ldoc, this.lkey.asValue({}));
            var right = _propertySeek2.default.get(rdoc, this.rkey.asValue({}));

            if (left == null) return false;

            if (right == null) return false;

            return left === right;
        }
    }]);

    return JoinCondition;
}(_Node3.default);

exports.default = JoinCondition;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3QvSm9pbkNvbmRpdGlvbi5qcyJdLCJuYW1lcyI6WyJKb2luQ29uZGl0aW9uIiwicmtleSIsImxrZXkiLCJsb2NhdGlvbiIsInR5cGUiLCJkYXRhIiwiY29udGV4dCIsIndoZXJlIiwiYXNWYWx1ZSIsIiRpbiIsIm1hcCIsImdldCIsImRvYyIsImZpbHRlciIsImxkb2MiLCJyZG9jIiwibGVmdCIsInJpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHTUEsYTs7O0FBR0YsMkJBQVlDLElBQVosRUFBa0JDLElBQWxCLEVBQXdCQyxRQUF4QixFQUFrQztBQUFBOztBQUFBOztBQUc5QixjQUFLQyxJQUFMLEdBQVksZ0JBQVo7QUFDQSxjQUFLSCxJQUFMLEdBQVlBLElBQVo7QUFDQSxjQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxjQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjs7QUFOOEI7QUFRakM7O0FBRUQ7Ozs7Ozs7dUNBR2VFLEksRUFBTUMsTyxFQUFTO0FBQUE7O0FBRTFCLGdCQUFJQyxRQUFRLEVBQVo7QUFDQUEsa0JBQU0sS0FBS04sSUFBTCxDQUFVTyxPQUFWLENBQWtCRixPQUFsQixDQUFOLElBQW9DO0FBQ2hDRyxxQkFBS0osS0FBS0ssR0FBTCxDQUFTO0FBQUEsMkJBQU8sdUJBQVNDLEdBQVQsQ0FBYUMsR0FBYixFQUFrQixPQUFLVixJQUFMLENBQVVNLE9BQVYsQ0FBa0JGLE9BQWxCLENBQWxCLENBQVA7QUFBQSxpQkFBVCxFQUNMTyxNQURLLENBQ0U7QUFBQSwyQkFBUUQsT0FBTyxJQUFmO0FBQUEsaUJBREY7QUFEMkIsYUFBcEM7QUFJQSxtQkFBT0wsS0FBUDtBQUVIOzs7Z0NBRU9PLEksRUFBTUMsSSxFQUFNOztBQUVoQixnQkFBSUMsT0FBTyx1QkFBU0wsR0FBVCxDQUFhRyxJQUFiLEVBQW1CLEtBQUtaLElBQUwsQ0FBVU0sT0FBVixDQUFrQixFQUFsQixDQUFuQixDQUFYO0FBQ0EsZ0JBQUlTLFFBQVEsdUJBQVNOLEdBQVQsQ0FBYUksSUFBYixFQUFtQixLQUFLZCxJQUFMLENBQVVPLE9BQVYsQ0FBa0IsRUFBbEIsQ0FBbkIsQ0FBWjs7QUFFQSxnQkFBSVEsUUFBUSxJQUFaLEVBQ0ksT0FBTyxLQUFQOztBQUVKLGdCQUFJQyxTQUFTLElBQWIsRUFDSSxPQUFPLEtBQVA7O0FBRUosbUJBQVFELFNBQVNDLEtBQWpCO0FBRUg7Ozs7OztrQkFJVWpCLGEiLCJmaWxlIjoiSm9pbkNvbmRpdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wZXJ0eSBmcm9tICdwcm9wZXJ0eS1zZWVrJztcbmltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5cbi8qKlxuICogSm9pbkNvbmRpdGlvblxuICovXG5jbGFzcyBKb2luQ29uZGl0aW9uIGV4dGVuZHMgTm9kZSB7XG5cblxuICAgIGNvbnN0cnVjdG9yKHJrZXksIGxrZXksIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2pvaW4tY29uZGl0aW9uJztcbiAgICAgICAgdGhpcy5ya2V5ID0gcmtleTtcbiAgICAgICAgdGhpcy5sa2V5ID0gbGtleTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZ2V0V2hlcmVDbGF1c2VcbiAgICAgKi9cbiAgICBnZXRXaGVyZUNsYXVzZShkYXRhLCBjb250ZXh0KSB7XG5cbiAgICAgICAgdmFyIHdoZXJlID0ge307XG4gICAgICAgIHdoZXJlW3RoaXMucmtleS5hc1ZhbHVlKGNvbnRleHQpXSA9IHtcbiAgICAgICAgICAgICRpbjogZGF0YS5tYXAoZG9jID0+IFByb3BlcnR5LmdldChkb2MsIHRoaXMubGtleS5hc1ZhbHVlKGNvbnRleHQpKSkuXG4gICAgICAgICAgICBmaWx0ZXIoZG9jID0+IChkb2MgIT0gbnVsbCkpXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB3aGVyZTtcblxuICAgIH1cblxuICAgIGNvbXBhcmUobGRvYywgcmRvYykge1xuXG4gICAgICAgIHZhciBsZWZ0ID0gUHJvcGVydHkuZ2V0KGxkb2MsIHRoaXMubGtleS5hc1ZhbHVlKHt9KSk7XG4gICAgICAgIHZhciByaWdodCA9IFByb3BlcnR5LmdldChyZG9jLCB0aGlzLnJrZXkuYXNWYWx1ZSh7fSkpO1xuXG4gICAgICAgIGlmIChsZWZ0ID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgaWYgKHJpZ2h0ID09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgcmV0dXJuIChsZWZ0ID09PSByaWdodCk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSm9pbkNvbmRpdGlvblxuIl19