'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _beof = require('beof');

var _beof2 = _interopRequireDefault(_beof);

var _Statement2 = require('./Statement');

var _Statement3 = _interopRequireDefault(_Statement2);

var _DefaultResultHandler = require('../DefaultResultHandler');

var _DefaultResultHandler2 = _interopRequireDefault(_DefaultResultHandler);

var _DefaultErrorHandler = require('../DefaultErrorHandler');

var _DefaultErrorHandler2 = _interopRequireDefault(_DefaultErrorHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * FindStatement
 */
var FindStatement = function (_Statement) {
    _inherits(FindStatement, _Statement);

    function FindStatement(collection, fields, where, modifiers, joins, one, location) {
        _classCallCheck(this, FindStatement);

        var _this = _possibleConstructorReturn(this, (FindStatement.__proto__ || Object.getPrototypeOf(FindStatement)).call(this));

        _this.type = 'find-statement';
        _this.collection = collection;
        _this.fields = fields;
        _this.where = where;
        _this.modifiers = modifiers;
        _this.joins = joins;
        _this.one = one || false;
        _this.location = location;
        _this.db = null;

        return _this;
    }

    _createClass(FindStatement, [{
        key: 'clone',
        value: function clone() {

            return new FindStatement(this.collection, this.fields, this.where, this.modifiers, this.joins, this.one, this.location);
        }
    }, {
        key: 'getCursor',
        value: function getCursor() {
            var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.context;


            var fields = {
                _id: false
            };
            var where = {};
            var cursor;
            var db = this.db;

            where = this.where.reduce(function (prev, curr) {
                return curr.apply(prev, context);
            }, where);

            fields = this.fields.reduce(function (prev, curr) {
                return curr.apply(prev, context);
            }, fields);

            cursor = db.collection(this.collection.asValue(context)).find(where).project(fields);

            cursor = this.modifiers.reduce(function (prev, curr) {
                return curr.apply(prev, context);
            }, cursor);
        }
    }, {
        key: 'execute',
        value: function execute() {
            var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.context;

            var _this2 = this;

            var resultHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _DefaultResultHandler2.default;
            var errorHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _DefaultErrorHandler2.default;


            return this.joins.reduce(function (p, join) {
                return p.then(function (data) {
                    return join.apply(data, db, context);
                });
            }, this.getCursor(context).toArray()).then(function (data) {
                return _this2.one ? data[0] : data;
            }).then(function (result) {
                return resultHandler.onResult(result);
            }).catch(function (e) {
                return errorHandler.onError(e);
            });
        }
    }]);

    return FindStatement;
}(_Statement3.default);

exports.default = FindStatement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3QvRmluZFN0YXRlbWVudC5qcyJdLCJuYW1lcyI6WyJGaW5kU3RhdGVtZW50IiwiY29sbGVjdGlvbiIsImZpZWxkcyIsIndoZXJlIiwibW9kaWZpZXJzIiwiam9pbnMiLCJvbmUiLCJsb2NhdGlvbiIsInR5cGUiLCJkYiIsImNvbnRleHQiLCJfaWQiLCJjdXJzb3IiLCJyZWR1Y2UiLCJwcmV2IiwiY3VyciIsImFwcGx5IiwiYXNWYWx1ZSIsImZpbmQiLCJwcm9qZWN0IiwicmVzdWx0SGFuZGxlciIsImVycm9ySGFuZGxlciIsInAiLCJqb2luIiwidGhlbiIsImRhdGEiLCJnZXRDdXJzb3IiLCJ0b0FycmF5Iiwib25SZXN1bHQiLCJyZXN1bHQiLCJjYXRjaCIsIm9uRXJyb3IiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR01BLGE7OztBQUVGLDJCQUFZQyxVQUFaLEVBQXdCQyxNQUF4QixFQUFnQ0MsS0FBaEMsRUFBdUNDLFNBQXZDLEVBQWtEQyxLQUFsRCxFQUF5REMsR0FBekQsRUFBOERDLFFBQTlELEVBQXdFO0FBQUE7O0FBQUE7O0FBR3BFLGNBQUtDLElBQUwsR0FBWSxnQkFBWjtBQUNBLGNBQUtQLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsY0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsY0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsY0FBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxjQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxjQUFLQyxHQUFMLEdBQVdBLE9BQU8sS0FBbEI7QUFDQSxjQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLGNBQUtFLEVBQUwsR0FBVSxJQUFWOztBQVhvRTtBQWF2RTs7OztnQ0FFTzs7QUFFSixtQkFBTyxJQUFJVCxhQUFKLENBQ0gsS0FBS0MsVUFERixFQUVILEtBQUtDLE1BRkYsRUFHSCxLQUFLQyxLQUhGLEVBSUgsS0FBS0MsU0FKRixFQUtILEtBQUtDLEtBTEYsRUFNSCxLQUFLQyxHQU5GLEVBT0gsS0FBS0MsUUFQRixDQUFQO0FBU0g7OztvQ0FFaUM7QUFBQSxnQkFBeEJHLE9BQXdCLHVFQUFkLEtBQUtBLE9BQVM7OztBQUU5QixnQkFBSVIsU0FBUztBQUNUUyxxQkFBSztBQURJLGFBQWI7QUFHQSxnQkFBSVIsUUFBUSxFQUFaO0FBQ0EsZ0JBQUlTLE1BQUo7QUFDQSxnQkFBSUgsS0FBSyxLQUFLQSxFQUFkOztBQUVBTixvQkFBUSxLQUFLQSxLQUFMLENBQVdVLE1BQVgsQ0FBa0IsVUFBQ0MsSUFBRCxFQUFPQyxJQUFQO0FBQUEsdUJBQWdCQSxLQUFLQyxLQUFMLENBQVdGLElBQVgsRUFBaUJKLE9BQWpCLENBQWhCO0FBQUEsYUFBbEIsRUFBNkRQLEtBQTdELENBQVI7O0FBRUFELHFCQUFTLEtBQUtBLE1BQUwsQ0FBWVcsTUFBWixDQUFtQixVQUFDQyxJQUFELEVBQU9DLElBQVA7QUFBQSx1QkFBZ0JBLEtBQUtDLEtBQUwsQ0FBV0YsSUFBWCxFQUFpQkosT0FBakIsQ0FBaEI7QUFBQSxhQUFuQixFQUE4RFIsTUFBOUQsQ0FBVDs7QUFFQVUscUJBQVNILEdBQUdSLFVBQUgsQ0FBYyxLQUFLQSxVQUFMLENBQWdCZ0IsT0FBaEIsQ0FBd0JQLE9BQXhCLENBQWQsRUFBZ0RRLElBQWhELENBQXFEZixLQUFyRCxFQUE0RGdCLE9BQTVELENBQW9FakIsTUFBcEUsQ0FBVDs7QUFFQVUscUJBQVMsS0FBS1IsU0FBTCxDQUFlUyxNQUFmLENBQXNCLFVBQUNDLElBQUQsRUFBT0MsSUFBUDtBQUFBLHVCQUFnQkEsS0FBS0MsS0FBTCxDQUFXRixJQUFYLEVBQWlCSixPQUFqQixDQUFoQjtBQUFBLGFBQXRCLEVBQWlFRSxNQUFqRSxDQUFUO0FBRUg7OztrQ0FJdUM7QUFBQSxnQkFGaENGLE9BRWdDLHVFQUZ0QixLQUFLQSxPQUVpQjs7QUFBQTs7QUFBQSxnQkFEcENVLGFBQ29DO0FBQUEsZ0JBQXBDQyxZQUFvQzs7O0FBRXBDLG1CQUFPLEtBQUtoQixLQUFMLENBQVdRLE1BQVgsQ0FBa0IsVUFBQ1MsQ0FBRCxFQUFJQyxJQUFKO0FBQUEsdUJBQWFELEVBQUVFLElBQUYsQ0FBTyxVQUFDQyxJQUFEO0FBQUEsMkJBQ3pDRixLQUFLUCxLQUFMLENBQVdTLElBQVgsRUFBaUJoQixFQUFqQixFQUFxQkMsT0FBckIsQ0FEeUM7QUFBQSxpQkFBUCxDQUFiO0FBQUEsYUFBbEIsRUFDNkIsS0FBS2dCLFNBQUwsQ0FBZWhCLE9BQWYsRUFBd0JpQixPQUF4QixFQUQ3QixFQUVQSCxJQUZPLENBRUY7QUFBQSx1QkFBUyxPQUFLbEIsR0FBTixHQUFhbUIsS0FBSyxDQUFMLENBQWIsR0FBdUJBLElBQS9CO0FBQUEsYUFGRSxFQUdQRCxJQUhPLENBR0Y7QUFBQSx1QkFBVUosY0FBY1EsUUFBZCxDQUF1QkMsTUFBdkIsQ0FBVjtBQUFBLGFBSEUsRUFJUEMsS0FKTyxDQUlEO0FBQUEsdUJBQUtULGFBQWFVLE9BQWIsQ0FBcUJDLENBQXJCLENBQUw7QUFBQSxhQUpDLENBQVA7QUFNSDs7Ozs7O2tCQUlVaEMsYSIsImZpbGUiOiJGaW5kU3RhdGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJlb2YgZnJvbSAnYmVvZic7XG5pbXBvcnQgU3RhdGVtZW50IGZyb20gJy4vU3RhdGVtZW50JztcbmltcG9ydCBEZWZhdWx0UmVzdWx0SGFuZGxlciBmcm9tICcuLi9EZWZhdWx0UmVzdWx0SGFuZGxlcic7XG5pbXBvcnQgRGVmYXVsdEVycm9ySGFuZGxlciBmcm9tICcuLi9EZWZhdWx0RXJyb3JIYW5kbGVyJztcblxuLyoqXG4gKiBGaW5kU3RhdGVtZW50XG4gKi9cbmNsYXNzIEZpbmRTdGF0ZW1lbnQgZXh0ZW5kcyBTdGF0ZW1lbnQge1xuXG4gICAgY29uc3RydWN0b3IoY29sbGVjdGlvbiwgZmllbGRzLCB3aGVyZSwgbW9kaWZpZXJzLCBqb2lucywgb25lLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdmaW5kLXN0YXRlbWVudCc7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbiA9IGNvbGxlY3Rpb247XG4gICAgICAgIHRoaXMuZmllbGRzID0gZmllbGRzO1xuICAgICAgICB0aGlzLndoZXJlID0gd2hlcmU7XG4gICAgICAgIHRoaXMubW9kaWZpZXJzID0gbW9kaWZpZXJzO1xuICAgICAgICB0aGlzLmpvaW5zID0gam9pbnM7XG4gICAgICAgIHRoaXMub25lID0gb25lIHx8IGZhbHNlO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG4gICAgICAgIHRoaXMuZGIgPSBudWxsO1xuXG4gICAgfVxuXG4gICAgY2xvbmUoKSB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBGaW5kU3RhdGVtZW50KFxuICAgICAgICAgICAgdGhpcy5jb2xsZWN0aW9uLFxuICAgICAgICAgICAgdGhpcy5maWVsZHMsXG4gICAgICAgICAgICB0aGlzLndoZXJlLFxuICAgICAgICAgICAgdGhpcy5tb2RpZmllcnMsXG4gICAgICAgICAgICB0aGlzLmpvaW5zLFxuICAgICAgICAgICAgdGhpcy5vbmUsXG4gICAgICAgICAgICB0aGlzLmxvY2F0aW9uKTtcblxuICAgIH1cblxuICAgIGdldEN1cnNvcihjb250ZXh0ID0gdGhpcy5jb250ZXh0KSB7XG5cbiAgICAgICAgdmFyIGZpZWxkcyA9IHtcbiAgICAgICAgICAgIF9pZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHdoZXJlID0ge307XG4gICAgICAgIHZhciBjdXJzb3I7XG4gICAgICAgIHZhciBkYiA9IHRoaXMuZGI7XG5cbiAgICAgICAgd2hlcmUgPSB0aGlzLndoZXJlLnJlZHVjZSgocHJldiwgY3VycikgPT4gY3Vyci5hcHBseShwcmV2LCBjb250ZXh0KSwgd2hlcmUpO1xuXG4gICAgICAgIGZpZWxkcyA9IHRoaXMuZmllbGRzLnJlZHVjZSgocHJldiwgY3VycikgPT4gY3Vyci5hcHBseShwcmV2LCBjb250ZXh0KSwgZmllbGRzKTtcblxuICAgICAgICBjdXJzb3IgPSBkYi5jb2xsZWN0aW9uKHRoaXMuY29sbGVjdGlvbi5hc1ZhbHVlKGNvbnRleHQpKS5maW5kKHdoZXJlKS5wcm9qZWN0KGZpZWxkcyk7XG5cbiAgICAgICAgY3Vyc29yID0gdGhpcy5tb2RpZmllcnMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBjdXJyLmFwcGx5KHByZXYsIGNvbnRleHQpLCBjdXJzb3IpO1xuXG4gICAgfVxuXG4gICAgZXhlY3V0ZShjb250ZXh0ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICByZXN1bHRIYW5kbGVyID0gRGVmYXVsdFJlc3VsdEhhbmRsZXIsXG4gICAgICAgIGVycm9ySGFuZGxlciA9IERlZmF1bHRFcnJvckhhbmRsZXIpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5qb2lucy5yZWR1Y2UoKHAsIGpvaW4pID0+IHAudGhlbigoZGF0YSkgPT5cbiAgICAgICAgICAgIGpvaW4uYXBwbHkoZGF0YSwgZGIsIGNvbnRleHQpKSwgdGhpcy5nZXRDdXJzb3IoY29udGV4dCkudG9BcnJheSgpKS5cbiAgICAgICAgdGhlbihkYXRhID0+ICh0aGlzLm9uZSkgPyBkYXRhWzBdIDogZGF0YSkuXG4gICAgICAgIHRoZW4ocmVzdWx0ID0+IHJlc3VsdEhhbmRsZXIub25SZXN1bHQocmVzdWx0KSkuXG4gICAgICAgIGNhdGNoKGUgPT4gZXJyb3JIYW5kbGVyLm9uRXJyb3IoZSkpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbmRTdGF0ZW1lbnRcbiJdfQ==