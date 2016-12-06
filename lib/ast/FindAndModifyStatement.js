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
 * FindAndModifyStatement
 */
var FindAndModifyStatement = function (_Statement) {
    _inherits(FindAndModifyStatement, _Statement);

    function FindAndModifyStatement(collection, original, fields, where, upsert, set, update, sort, location) {
        _classCallCheck(this, FindAndModifyStatement);

        var _this = _possibleConstructorReturn(this, (FindAndModifyStatement.__proto__ || Object.getPrototypeOf(FindAndModifyStatement)).call(this));

        _this.type = 'find-and-modify-statement';
        _this.collection = collection;
        _this.original = original;
        _this.fields = fields;
        _this.where = where;
        _this.upsert = upsert;
        _this.set = set;
        _this.update = update;
        _this.sort = sort;
        _this.location = location;
        _this.db = null;
        _this.context = null;

        return _this;
    }

    _createClass(FindAndModifyStatement, [{
        key: 'clone',
        value: function clone() {

            return new FindAndModifyStatement(this.collection, this.original, this.fields, this.where, this.upsert, this.set, this.update, this.sort, this.location);
        }
    }, {
        key: 'execute',
        value: function execute() {
            var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.context;
            var resultHandler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _DefaultResultHandler2.default;
            var errorHandler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _DefaultErrorHandler2.default;


            var db = this.db;
            var where = Object.create(null);
            var fields = Object.create(null);
            var options = { returnOriginal: this.original, upsert: this.upsert };
            var update = this.update.asValue(context);

            update = this.set ? { $set: update } : update;
            where = this.where.reduce(function (prev, curr) {
                return curr.apply(prev, context);
            }, where);

            if (this.fields.length > 0) options.projection = this.fields.reduce(function (prev, curr) {
                return curr.apply(prev, context);
            }, fields);

            if (this.sort) options.sort = this.sort.asValue(context);

            return db.collection(this.collection.asValue(context)).findOneAndUpdate(where, update, options).then(function (result) {
                return resultHandler.onResult(result);
            }).catch(function (e) {
                return errorHandler.onError(e);
            });
        }
    }]);

    return FindAndModifyStatement;
}(_Statement3.default);

exports.default = FindAndModifyStatement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3QvRmluZEFuZE1vZGlmeVN0YXRlbWVudC5qcyJdLCJuYW1lcyI6WyJGaW5kQW5kTW9kaWZ5U3RhdGVtZW50IiwiY29sbGVjdGlvbiIsIm9yaWdpbmFsIiwiZmllbGRzIiwid2hlcmUiLCJ1cHNlcnQiLCJzZXQiLCJ1cGRhdGUiLCJzb3J0IiwibG9jYXRpb24iLCJ0eXBlIiwiZGIiLCJjb250ZXh0IiwicmVzdWx0SGFuZGxlciIsImVycm9ySGFuZGxlciIsIk9iamVjdCIsImNyZWF0ZSIsIm9wdGlvbnMiLCJyZXR1cm5PcmlnaW5hbCIsImFzVmFsdWUiLCIkc2V0IiwicmVkdWNlIiwicHJldiIsImN1cnIiLCJhcHBseSIsImxlbmd0aCIsInByb2plY3Rpb24iLCJmaW5kT25lQW5kVXBkYXRlIiwidGhlbiIsIm9uUmVzdWx0IiwicmVzdWx0IiwiY2F0Y2giLCJvbkVycm9yIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHTUEsc0I7OztBQUVGLG9DQUFZQyxVQUFaLEVBQXdCQyxRQUF4QixFQUFrQ0MsTUFBbEMsRUFBMENDLEtBQTFDLEVBQWlEQyxNQUFqRCxFQUF5REMsR0FBekQsRUFBOERDLE1BQTlELEVBQXNFQyxJQUF0RSxFQUE0RUMsUUFBNUUsRUFBc0Y7QUFBQTs7QUFBQTs7QUFHbEYsY0FBS0MsSUFBTCxHQUFZLDJCQUFaO0FBQ0EsY0FBS1QsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxjQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLGNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLGNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLGNBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNBLGNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLGNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsY0FBS0UsRUFBTCxHQUFVLElBQVY7QUFDQSxjQUFLQyxPQUFMLEdBQWUsSUFBZjs7QUFka0Y7QUFnQnJGOzs7O2dDQUVPOztBQUVKLG1CQUFPLElBQUlaLHNCQUFKLENBQ0gsS0FBS0MsVUFERixFQUVILEtBQUtDLFFBRkYsRUFHSCxLQUFLQyxNQUhGLEVBSUgsS0FBS0MsS0FKRixFQUtILEtBQUtDLE1BTEYsRUFNSCxLQUFLQyxHQU5GLEVBT0gsS0FBS0MsTUFQRixFQVFILEtBQUtDLElBUkYsRUFTSCxLQUFLQyxRQVRGLENBQVA7QUFXSDs7O2tDQUl1QztBQUFBLGdCQUZoQ0csT0FFZ0MsdUVBRnRCLEtBQUtBLE9BRWlCO0FBQUEsZ0JBRHBDQyxhQUNvQztBQUFBLGdCQUFwQ0MsWUFBb0M7OztBQUVwQyxnQkFBSUgsS0FBSyxLQUFLQSxFQUFkO0FBQ0EsZ0JBQUlQLFFBQVFXLE9BQU9DLE1BQVAsQ0FBYyxJQUFkLENBQVo7QUFDQSxnQkFBSWIsU0FBU1ksT0FBT0MsTUFBUCxDQUFjLElBQWQsQ0FBYjtBQUNBLGdCQUFJQyxVQUFVLEVBQUVDLGdCQUFnQixLQUFLaEIsUUFBdkIsRUFBaUNHLFFBQVEsS0FBS0EsTUFBOUMsRUFBZDtBQUNBLGdCQUFJRSxTQUFTLEtBQUtBLE1BQUwsQ0FBWVksT0FBWixDQUFvQlAsT0FBcEIsQ0FBYjs7QUFFQUwscUJBQVMsS0FBS0QsR0FBTCxHQUFXLEVBQUVjLE1BQU1iLE1BQVIsRUFBWCxHQUE4QkEsTUFBdkM7QUFDQUgsb0JBQVEsS0FBS0EsS0FBTCxDQUFXaUIsTUFBWCxDQUFrQixVQUFDQyxJQUFELEVBQU9DLElBQVA7QUFBQSx1QkFBZ0JBLEtBQUtDLEtBQUwsQ0FBV0YsSUFBWCxFQUFpQlYsT0FBakIsQ0FBaEI7QUFBQSxhQUFsQixFQUE2RFIsS0FBN0QsQ0FBUjs7QUFFQSxnQkFBSSxLQUFLRCxNQUFMLENBQVlzQixNQUFaLEdBQXFCLENBQXpCLEVBQ0lSLFFBQVFTLFVBQVIsR0FBcUIsS0FBS3ZCLE1BQUwsQ0FBWWtCLE1BQVosQ0FBbUIsVUFBQ0MsSUFBRCxFQUFPQyxJQUFQO0FBQUEsdUJBQWdCQSxLQUFLQyxLQUFMLENBQVdGLElBQVgsRUFBaUJWLE9BQWpCLENBQWhCO0FBQUEsYUFBbkIsRUFBOERULE1BQTlELENBQXJCOztBQUVKLGdCQUFJLEtBQUtLLElBQVQsRUFDSVMsUUFBUVQsSUFBUixHQUFlLEtBQUtBLElBQUwsQ0FBVVcsT0FBVixDQUFrQlAsT0FBbEIsQ0FBZjs7QUFFSixtQkFBT0QsR0FBR1YsVUFBSCxDQUFjLEtBQUtBLFVBQUwsQ0FBZ0JrQixPQUFoQixDQUF3QlAsT0FBeEIsQ0FBZCxFQUNQZSxnQkFETyxDQUNVdkIsS0FEVixFQUNpQkcsTUFEakIsRUFDeUJVLE9BRHpCLEVBRVBXLElBRk8sQ0FFRjtBQUFBLHVCQUFVZixjQUFjZ0IsUUFBZCxDQUF1QkMsTUFBdkIsQ0FBVjtBQUFBLGFBRkUsRUFHUEMsS0FITyxDQUdEO0FBQUEsdUJBQUtqQixhQUFha0IsT0FBYixDQUFxQkMsQ0FBckIsQ0FBTDtBQUFBLGFBSEMsQ0FBUDtBQUtIOzs7Ozs7a0JBSVVqQyxzQiIsImZpbGUiOiJGaW5kQW5kTW9kaWZ5U3RhdGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0YXRlbWVudCBmcm9tICcuL1N0YXRlbWVudCc7XG5pbXBvcnQgRGVmYXVsdFJlc3VsdEhhbmRsZXIgZnJvbSAnLi4vRGVmYXVsdFJlc3VsdEhhbmRsZXInO1xuaW1wb3J0IERlZmF1bHRFcnJvckhhbmRsZXIgZnJvbSAnLi4vRGVmYXVsdEVycm9ySGFuZGxlcic7XG5cbi8qKlxuICogRmluZEFuZE1vZGlmeVN0YXRlbWVudFxuICovXG5jbGFzcyBGaW5kQW5kTW9kaWZ5U3RhdGVtZW50IGV4dGVuZHMgU3RhdGVtZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbGxlY3Rpb24sIG9yaWdpbmFsLCBmaWVsZHMsIHdoZXJlLCB1cHNlcnQsIHNldCwgdXBkYXRlLCBzb3J0LCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdmaW5kLWFuZC1tb2RpZnktc3RhdGVtZW50JztcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uID0gY29sbGVjdGlvbjtcbiAgICAgICAgdGhpcy5vcmlnaW5hbCA9IG9yaWdpbmFsO1xuICAgICAgICB0aGlzLmZpZWxkcyA9IGZpZWxkcztcbiAgICAgICAgdGhpcy53aGVyZSA9IHdoZXJlO1xuICAgICAgICB0aGlzLnVwc2VydCA9IHVwc2VydDtcbiAgICAgICAgdGhpcy5zZXQgPSBzZXQ7XG4gICAgICAgIHRoaXMudXBkYXRlID0gdXBkYXRlO1xuICAgICAgICB0aGlzLnNvcnQgPSBzb3J0O1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG4gICAgICAgIHRoaXMuZGIgPSBudWxsO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBudWxsO1xuXG4gICAgfVxuXG4gICAgY2xvbmUoKSB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBGaW5kQW5kTW9kaWZ5U3RhdGVtZW50KFxuICAgICAgICAgICAgdGhpcy5jb2xsZWN0aW9uLFxuICAgICAgICAgICAgdGhpcy5vcmlnaW5hbCxcbiAgICAgICAgICAgIHRoaXMuZmllbGRzLFxuICAgICAgICAgICAgdGhpcy53aGVyZSxcbiAgICAgICAgICAgIHRoaXMudXBzZXJ0LFxuICAgICAgICAgICAgdGhpcy5zZXQsXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSxcbiAgICAgICAgICAgIHRoaXMuc29ydCxcbiAgICAgICAgICAgIHRoaXMubG9jYXRpb24pO1xuXG4gICAgfVxuXG4gICAgZXhlY3V0ZShjb250ZXh0ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICByZXN1bHRIYW5kbGVyID0gRGVmYXVsdFJlc3VsdEhhbmRsZXIsXG4gICAgICAgIGVycm9ySGFuZGxlciA9IERlZmF1bHRFcnJvckhhbmRsZXIpIHtcblxuICAgICAgICB2YXIgZGIgPSB0aGlzLmRiO1xuICAgICAgICB2YXIgd2hlcmUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgZmllbGRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7IHJldHVybk9yaWdpbmFsOiB0aGlzLm9yaWdpbmFsLCB1cHNlcnQ6IHRoaXMudXBzZXJ0IH07XG4gICAgICAgIHZhciB1cGRhdGUgPSB0aGlzLnVwZGF0ZS5hc1ZhbHVlKGNvbnRleHQpO1xuXG4gICAgICAgIHVwZGF0ZSA9IHRoaXMuc2V0ID8geyAkc2V0OiB1cGRhdGUgfSA6IHVwZGF0ZTtcbiAgICAgICAgd2hlcmUgPSB0aGlzLndoZXJlLnJlZHVjZSgocHJldiwgY3VycikgPT4gY3Vyci5hcHBseShwcmV2LCBjb250ZXh0KSwgd2hlcmUpO1xuXG4gICAgICAgIGlmICh0aGlzLmZpZWxkcy5sZW5ndGggPiAwKVxuICAgICAgICAgICAgb3B0aW9ucy5wcm9qZWN0aW9uID0gdGhpcy5maWVsZHMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBjdXJyLmFwcGx5KHByZXYsIGNvbnRleHQpLCBmaWVsZHMpO1xuXG4gICAgICAgIGlmICh0aGlzLnNvcnQpXG4gICAgICAgICAgICBvcHRpb25zLnNvcnQgPSB0aGlzLnNvcnQuYXNWYWx1ZShjb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gZGIuY29sbGVjdGlvbih0aGlzLmNvbGxlY3Rpb24uYXNWYWx1ZShjb250ZXh0KSkuXG4gICAgICAgIGZpbmRPbmVBbmRVcGRhdGUod2hlcmUsIHVwZGF0ZSwgb3B0aW9ucykuXG4gICAgICAgIHRoZW4ocmVzdWx0ID0+IHJlc3VsdEhhbmRsZXIub25SZXN1bHQocmVzdWx0KSkuXG4gICAgICAgIGNhdGNoKGUgPT4gZXJyb3JIYW5kbGVyLm9uRXJyb3IoZSkpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbmRBbmRNb2RpZnlTdGF0ZW1lbnRcbiJdfQ==