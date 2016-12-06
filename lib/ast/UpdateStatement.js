'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
 * UpdateStatement
 */
var UpdateStatement = function (_Statement) {
    _inherits(UpdateStatement, _Statement);

    function UpdateStatement(collection, changes, where, once, location) {
        _classCallCheck(this, UpdateStatement);

        var _this = _possibleConstructorReturn(this, (UpdateStatement.__proto__ || Object.getPrototypeOf(UpdateStatement)).call(this));

        _this.type = 'update-statement';
        _this.collection = collection;
        _this.changes = changes;
        _this.where = where;
        _this.once = once;
        _this.location = location;
        _this.db = null;

        return _this;
    }

    _createClass(UpdateStatement, [{
        key: 'clone',
        value: function clone() {

            return new UpdateStatement(this.collection, this.changes, this.where, this.once, this.location);
        }
    }, {
        key: 'execute',
        value: function execute() {
            var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.context;
            var resultHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _DefaultResultHandler2.default;
            var errorHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _DefaultErrorHandler2.default;


            var where = {};
            var update = {};
            var db = this.db;

            update = this.changes.reduce(function (prev, curr) {
                return curr.apply(prev, context);
            }, update);
            where = this.where.reduce(function (prev, curr) {
                return curr.apply(prev, context);
            }, where);

            return (this.once ? db.collection(this.collection.asValue(context)).updateOne(where, update) : db.collection(this.collection.asValue(context)).updateMany(where, update)).then(function (result) {
                return resultHandler.onResult(result);
            }).catch(function (e) {
                return errorHandler.onError(e);
            });
        }
    }]);

    return UpdateStatement;
}(_Statement3.default);

exports.default = UpdateStatement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3QvVXBkYXRlU3RhdGVtZW50LmpzIl0sIm5hbWVzIjpbIlVwZGF0ZVN0YXRlbWVudCIsImNvbGxlY3Rpb24iLCJjaGFuZ2VzIiwid2hlcmUiLCJvbmNlIiwibG9jYXRpb24iLCJ0eXBlIiwiZGIiLCJjb250ZXh0IiwicmVzdWx0SGFuZGxlciIsImVycm9ySGFuZGxlciIsInVwZGF0ZSIsInJlZHVjZSIsInByZXYiLCJjdXJyIiwiYXBwbHkiLCJhc1ZhbHVlIiwidXBkYXRlT25lIiwidXBkYXRlTWFueSIsInRoZW4iLCJvblJlc3VsdCIsInJlc3VsdCIsImNhdGNoIiwib25FcnJvciIsImUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7O0lBR01BLGU7OztBQUVGLDZCQUFZQyxVQUFaLEVBQXdCQyxPQUF4QixFQUFpQ0MsS0FBakMsRUFBd0NDLElBQXhDLEVBQThDQyxRQUE5QyxFQUF3RDtBQUFBOztBQUFBOztBQUdwRCxjQUFLQyxJQUFMLEdBQVksa0JBQVo7QUFDQSxjQUFLTCxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLGNBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLGNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsY0FBS0UsRUFBTCxHQUFVLElBQVY7O0FBVG9EO0FBV3ZEOzs7O2dDQUVPOztBQUVKLG1CQUFPLElBQUlQLGVBQUosQ0FBb0IsS0FBS0MsVUFBekIsRUFBcUMsS0FBS0MsT0FBMUMsRUFBbUQsS0FBS0MsS0FBeEQsRUFBK0QsS0FBS0MsSUFBcEUsRUFBMEUsS0FBS0MsUUFBL0UsQ0FBUDtBQUVIOzs7a0NBSXVDO0FBQUEsZ0JBRmhDRyxPQUVnQyx1RUFGdEIsS0FBS0EsT0FFaUI7QUFBQSxnQkFEcENDLGFBQ29DO0FBQUEsZ0JBQXBDQyxZQUFvQzs7O0FBRXBDLGdCQUFJUCxRQUFRLEVBQVo7QUFDQSxnQkFBSVEsU0FBUyxFQUFiO0FBQ0EsZ0JBQUlKLEtBQUssS0FBS0EsRUFBZDs7QUFFQUkscUJBQVMsS0FBS1QsT0FBTCxDQUFhVSxNQUFiLENBQW9CLFVBQUNDLElBQUQsRUFBT0MsSUFBUDtBQUFBLHVCQUFnQkEsS0FBS0MsS0FBTCxDQUFXRixJQUFYLEVBQWlCTCxPQUFqQixDQUFoQjtBQUFBLGFBQXBCLEVBQStERyxNQUEvRCxDQUFUO0FBQ0FSLG9CQUFRLEtBQUtBLEtBQUwsQ0FBV1MsTUFBWCxDQUFrQixVQUFDQyxJQUFELEVBQU9DLElBQVA7QUFBQSx1QkFBZ0JBLEtBQUtDLEtBQUwsQ0FBV0YsSUFBWCxFQUFpQkwsT0FBakIsQ0FBaEI7QUFBQSxhQUFsQixFQUE2REwsS0FBN0QsQ0FBUjs7QUFFQSxtQkFBTyxDQUFFLEtBQUtDLElBQU4sR0FDSkcsR0FBR04sVUFBSCxDQUFjLEtBQUtBLFVBQUwsQ0FBZ0JlLE9BQWhCLENBQXdCUixPQUF4QixDQUFkLEVBQWdEUyxTQUFoRCxDQUEwRGQsS0FBMUQsRUFBaUVRLE1BQWpFLENBREksR0FFSkosR0FBR04sVUFBSCxDQUFjLEtBQUtBLFVBQUwsQ0FBZ0JlLE9BQWhCLENBQXdCUixPQUF4QixDQUFkLEVBQWdEVSxVQUFoRCxDQUEyRGYsS0FBM0QsRUFBa0VRLE1BQWxFLENBRkcsRUFHUFEsSUFITyxDQUdGO0FBQUEsdUJBQVVWLGNBQWNXLFFBQWQsQ0FBdUJDLE1BQXZCLENBQVY7QUFBQSxhQUhFLEVBSVBDLEtBSk8sQ0FJRDtBQUFBLHVCQUFLWixhQUFhYSxPQUFiLENBQXFCQyxDQUFyQixDQUFMO0FBQUEsYUFKQyxDQUFQO0FBUUg7Ozs7OztrQkFJVXhCLGUiLCJmaWxlIjoiVXBkYXRlU3RhdGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0YXRlbWVudCBmcm9tICcuL1N0YXRlbWVudCc7XG5pbXBvcnQgRGVmYXVsdFJlc3VsdEhhbmRsZXIgZnJvbSAnLi4vRGVmYXVsdFJlc3VsdEhhbmRsZXInO1xuaW1wb3J0IERlZmF1bHRFcnJvckhhbmRsZXIgZnJvbSAnLi4vRGVmYXVsdEVycm9ySGFuZGxlcic7XG5cbi8qKlxuICogVXBkYXRlU3RhdGVtZW50XG4gKi9cbmNsYXNzIFVwZGF0ZVN0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb2xsZWN0aW9uLCBjaGFuZ2VzLCB3aGVyZSwgb25jZSwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAndXBkYXRlLXN0YXRlbWVudCc7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbiA9IGNvbGxlY3Rpb247XG4gICAgICAgIHRoaXMuY2hhbmdlcyA9IGNoYW5nZXM7XG4gICAgICAgIHRoaXMud2hlcmUgPSB3aGVyZTtcbiAgICAgICAgdGhpcy5vbmNlID0gb25jZTtcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgICAgICB0aGlzLmRiID0gbnVsbDtcblxuICAgIH1cblxuICAgIGNsb25lKCkge1xuXG4gICAgICAgIHJldHVybiBuZXcgVXBkYXRlU3RhdGVtZW50KHRoaXMuY29sbGVjdGlvbiwgdGhpcy5jaGFuZ2VzLCB0aGlzLndoZXJlLCB0aGlzLm9uY2UsIHRoaXMubG9jYXRpb24pO1xuXG4gICAgfVxuXG4gICAgZXhlY3V0ZShjb250ZXh0ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICByZXN1bHRIYW5kbGVyID0gRGVmYXVsdFJlc3VsdEhhbmRsZXIsXG4gICAgICAgIGVycm9ySGFuZGxlciA9IERlZmF1bHRFcnJvckhhbmRsZXIpIHtcblxuICAgICAgICB2YXIgd2hlcmUgPSB7fTtcbiAgICAgICAgdmFyIHVwZGF0ZSA9IHt9O1xuICAgICAgICB2YXIgZGIgPSB0aGlzLmRiO1xuXG4gICAgICAgIHVwZGF0ZSA9IHRoaXMuY2hhbmdlcy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IGN1cnIuYXBwbHkocHJldiwgY29udGV4dCksIHVwZGF0ZSk7XG4gICAgICAgIHdoZXJlID0gdGhpcy53aGVyZS5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IGN1cnIuYXBwbHkocHJldiwgY29udGV4dCksIHdoZXJlKTtcblxuICAgICAgICByZXR1cm4gKCh0aGlzLm9uY2UpID9cbiAgICAgICAgICAgIGRiLmNvbGxlY3Rpb24odGhpcy5jb2xsZWN0aW9uLmFzVmFsdWUoY29udGV4dCkpLnVwZGF0ZU9uZSh3aGVyZSwgdXBkYXRlKSA6XG4gICAgICAgICAgICBkYi5jb2xsZWN0aW9uKHRoaXMuY29sbGVjdGlvbi5hc1ZhbHVlKGNvbnRleHQpKS51cGRhdGVNYW55KHdoZXJlLCB1cGRhdGUpKS5cbiAgICAgICAgdGhlbihyZXN1bHQgPT4gcmVzdWx0SGFuZGxlci5vblJlc3VsdChyZXN1bHQpKS5cbiAgICAgICAgY2F0Y2goZSA9PiBlcnJvckhhbmRsZXIub25FcnJvcihlKSk7XG5cblxuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVwZGF0ZVN0YXRlbWVudFxuIl19