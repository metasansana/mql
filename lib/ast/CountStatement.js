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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3QvQ291bnRTdGF0ZW1lbnQuanMiXSwibmFtZXMiOlsiRmluZFN0YXRlbWVudCIsImNvbGxlY3Rpb24iLCJmaWVsZHMiLCJ3aGVyZSIsIm1vZGlmaWVycyIsImpvaW5zIiwib25lIiwibG9jYXRpb24iLCJ0eXBlIiwiZGIiLCJjb250ZXh0IiwiX2lkIiwiY3Vyc29yIiwicmVkdWNlIiwicHJldiIsImN1cnIiLCJhcHBseSIsImFzVmFsdWUiLCJmaW5kIiwicHJvamVjdCIsInJlc3VsdEhhbmRsZXIiLCJlcnJvckhhbmRsZXIiLCJwIiwiam9pbiIsInRoZW4iLCJkYXRhIiwiZ2V0Q3Vyc29yIiwidG9BcnJheSIsIm9uUmVzdWx0IiwicmVzdWx0IiwiY2F0Y2giLCJvbkVycm9yIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxhOzs7QUFFRiwyQkFBWUMsVUFBWixFQUF3QkMsTUFBeEIsRUFBZ0NDLEtBQWhDLEVBQXVDQyxTQUF2QyxFQUFrREMsS0FBbEQsRUFBeURDLEdBQXpELEVBQThEQyxRQUE5RCxFQUF3RTtBQUFBOztBQUFBOztBQUdwRSxjQUFLQyxJQUFMLEdBQVksZ0JBQVo7QUFDQSxjQUFLUCxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLGNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLGNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGNBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsY0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsY0FBS0MsR0FBTCxHQUFXQSxPQUFPLEtBQWxCO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxjQUFLRSxFQUFMLEdBQVUsSUFBVjs7QUFYb0U7QUFhdkU7Ozs7Z0NBRU87O0FBRUosbUJBQU8sSUFBSVQsYUFBSixDQUNILEtBQUtDLFVBREYsRUFFSCxLQUFLQyxNQUZGLEVBR0gsS0FBS0MsS0FIRixFQUlILEtBQUtDLFNBSkYsRUFLSCxLQUFLQyxLQUxGLEVBTUgsS0FBS0MsR0FORixFQU9ILEtBQUtDLFFBUEYsQ0FBUDtBQVNIOzs7b0NBRWlDO0FBQUEsZ0JBQXhCRyxPQUF3Qix1RUFBZCxLQUFLQSxPQUFTOzs7QUFFOUIsZ0JBQUlSLFNBQVM7QUFDVFMscUJBQUs7QUFESSxhQUFiO0FBR0EsZ0JBQUlSLFFBQVEsRUFBWjtBQUNBLGdCQUFJUyxNQUFKO0FBQ0EsZ0JBQUlILEtBQUssS0FBS0EsRUFBZDs7QUFFQU4sb0JBQVEsS0FBS0EsS0FBTCxDQUFXVSxNQUFYLENBQWtCLFVBQUNDLElBQUQsRUFBT0MsSUFBUDtBQUFBLHVCQUFnQkEsS0FBS0MsS0FBTCxDQUFXRixJQUFYLEVBQWlCSixPQUFqQixDQUFoQjtBQUFBLGFBQWxCLEVBQTZEUCxLQUE3RCxDQUFSOztBQUVBRCxxQkFBUyxLQUFLQSxNQUFMLENBQVlXLE1BQVosQ0FBbUIsVUFBQ0MsSUFBRCxFQUFPQyxJQUFQO0FBQUEsdUJBQWdCQSxLQUFLQyxLQUFMLENBQVdGLElBQVgsRUFBaUJKLE9BQWpCLENBQWhCO0FBQUEsYUFBbkIsRUFBOERSLE1BQTlELENBQVQ7O0FBRUFVLHFCQUFTSCxHQUFHUixVQUFILENBQWMsS0FBS0EsVUFBTCxDQUFnQmdCLE9BQWhCLENBQXdCUCxPQUF4QixDQUFkLEVBQWdEUSxJQUFoRCxDQUFxRGYsS0FBckQsRUFBNERnQixPQUE1RCxDQUFvRWpCLE1BQXBFLENBQVQ7O0FBRUFVLHFCQUFTLEtBQUtSLFNBQUwsQ0FBZVMsTUFBZixDQUFzQixVQUFDQyxJQUFELEVBQU9DLElBQVA7QUFBQSx1QkFBZ0JBLEtBQUtDLEtBQUwsQ0FBV0YsSUFBWCxFQUFpQkosT0FBakIsQ0FBaEI7QUFBQSxhQUF0QixFQUFpRUUsTUFBakUsQ0FBVDtBQUNDOzs7a0NBSW1DO0FBQUEsZ0JBRnBDRixPQUVvQyx1RUFGMUIsS0FBS0EsT0FFcUI7O0FBQUE7O0FBQUEsZ0JBRHBDVSxhQUNvQztBQUFBLGdCQUFwQ0MsWUFBb0M7OztBQUVwQyxtQkFBTyxLQUFLaEIsS0FBTCxDQUFXUSxNQUFYLENBQWtCLFVBQUNTLENBQUQsRUFBSUMsSUFBSjtBQUFBLHVCQUFhRCxFQUFFRSxJQUFGLENBQU8sVUFBQ0MsSUFBRDtBQUFBLDJCQUN6Q0YsS0FBS1AsS0FBTCxDQUFXUyxJQUFYLEVBQWlCaEIsRUFBakIsRUFBcUJDLE9BQXJCLENBRHlDO0FBQUEsaUJBQVAsQ0FBYjtBQUFBLGFBQWxCLEVBQzZCLEtBQUtnQixTQUFMLENBQWVoQixPQUFmLEVBQXdCaUIsT0FBeEIsRUFEN0IsRUFFUEgsSUFGTyxDQUVGO0FBQUEsdUJBQVMsT0FBS2xCLEdBQU4sR0FBYW1CLEtBQUssQ0FBTCxDQUFiLEdBQXVCQSxJQUEvQjtBQUFBLGFBRkUsRUFHUEQsSUFITyxDQUdGO0FBQUEsdUJBQVVKLGNBQWNRLFFBQWQsQ0FBdUJDLE1BQXZCLENBQVY7QUFBQSxhQUhFLEVBSVBDLEtBSk8sQ0FJRDtBQUFBLHVCQUFLVCxhQUFhVSxPQUFiLENBQXFCQyxDQUFyQixDQUFMO0FBQUEsYUFKQyxDQUFQO0FBTUg7Ozs7OztrQkFJVWhDLGEiLCJmaWxlIjoiQ291bnRTdGF0ZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmVvZiBmcm9tICdiZW9mJztcbmltcG9ydCBTdGF0ZW1lbnQgZnJvbSAnLi9TdGF0ZW1lbnQnO1xuaW1wb3J0IERlZmF1bHRSZXN1bHRIYW5kbGVyIGZyb20gJy4uL0RlZmF1bHRSZXN1bHRIYW5kbGVyJztcbmltcG9ydCBEZWZhdWx0RXJyb3JIYW5kbGVyIGZyb20gJy4uL0RlZmF1bHRFcnJvckhhbmRsZXInO1xuXG4vKipcbiAqIEZpbmRTdGF0ZW1lbnRcbiAqL1xuY2xhc3MgRmluZFN0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb2xsZWN0aW9uLCBmaWVsZHMsIHdoZXJlLCBtb2RpZmllcnMsIGpvaW5zLCBvbmUsIGxvY2F0aW9uKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2ZpbmQtc3RhdGVtZW50JztcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uID0gY29sbGVjdGlvbjtcbiAgICAgICAgdGhpcy5maWVsZHMgPSBmaWVsZHM7XG4gICAgICAgIHRoaXMud2hlcmUgPSB3aGVyZTtcbiAgICAgICAgdGhpcy5tb2RpZmllcnMgPSBtb2RpZmllcnM7XG4gICAgICAgIHRoaXMuam9pbnMgPSBqb2lucztcbiAgICAgICAgdGhpcy5vbmUgPSBvbmUgfHwgZmFsc2U7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICAgICAgdGhpcy5kYiA9IG51bGw7XG5cbiAgICB9XG5cbiAgICBjbG9uZSgpIHtcblxuICAgICAgICByZXR1cm4gbmV3IEZpbmRTdGF0ZW1lbnQoXG4gICAgICAgICAgICB0aGlzLmNvbGxlY3Rpb24sXG4gICAgICAgICAgICB0aGlzLmZpZWxkcyxcbiAgICAgICAgICAgIHRoaXMud2hlcmUsXG4gICAgICAgICAgICB0aGlzLm1vZGlmaWVycyxcbiAgICAgICAgICAgIHRoaXMuam9pbnMsXG4gICAgICAgICAgICB0aGlzLm9uZSxcbiAgICAgICAgICAgIHRoaXMubG9jYXRpb24pO1xuXG4gICAgfVxuXG4gICAgZ2V0Q3Vyc29yKGNvbnRleHQgPSB0aGlzLmNvbnRleHQpIHtcblxuICAgICAgICB2YXIgZmllbGRzID0ge1xuICAgICAgICAgICAgX2lkOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICB2YXIgd2hlcmUgPSB7fTtcbiAgICAgICAgdmFyIGN1cnNvcjtcbiAgICAgICAgdmFyIGRiID0gdGhpcy5kYjtcblxuICAgICAgICB3aGVyZSA9IHRoaXMud2hlcmUucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBjdXJyLmFwcGx5KHByZXYsIGNvbnRleHQpLCB3aGVyZSk7XG5cbiAgICAgICAgZmllbGRzID0gdGhpcy5maWVsZHMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBjdXJyLmFwcGx5KHByZXYsIGNvbnRleHQpLCBmaWVsZHMpO1xuXG4gICAgICAgIGN1cnNvciA9IGRiLmNvbGxlY3Rpb24odGhpcy5jb2xsZWN0aW9uLmFzVmFsdWUoY29udGV4dCkpLmZpbmQod2hlcmUpLnByb2plY3QoZmllbGRzKTtcblxuICAgICAgICBjdXJzb3IgPSB0aGlzLm1vZGlmaWVycy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IGN1cnIuYXBwbHkocHJldiwgY29udGV4dCksIGN1cnNvcik7XG4gICAgICAgIH1cblxuZXhlY3V0ZShjb250ZXh0ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICByZXN1bHRIYW5kbGVyID0gRGVmYXVsdFJlc3VsdEhhbmRsZXIsXG4gICAgICAgIGVycm9ySGFuZGxlciA9IERlZmF1bHRFcnJvckhhbmRsZXIpIHtcblxuICAgICAgICByZXR1cm4gdGhpcy5qb2lucy5yZWR1Y2UoKHAsIGpvaW4pID0+IHAudGhlbigoZGF0YSkgPT5cbiAgICAgICAgICAgIGpvaW4uYXBwbHkoZGF0YSwgZGIsIGNvbnRleHQpKSwgdGhpcy5nZXRDdXJzb3IoY29udGV4dCkudG9BcnJheSgpKS5cbiAgICAgICAgdGhlbihkYXRhID0+ICh0aGlzLm9uZSkgPyBkYXRhWzBdIDogZGF0YSkuXG4gICAgICAgIHRoZW4ocmVzdWx0ID0+IHJlc3VsdEhhbmRsZXIub25SZXN1bHQocmVzdWx0KSkuXG4gICAgICAgIGNhdGNoKGUgPT4gZXJyb3JIYW5kbGVyLm9uRXJyb3IoZSkpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbmRTdGF0ZW1lbnRcbiJdfQ==