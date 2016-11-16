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

        return _this;
    }

    _createClass(FindAndModifyStatement, [{
        key: 'execute',
        value: function execute(db, context) {

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

            return db.collection(this.collection.asValue(context)).findOneAndUpdate(where, update, options);
        }
    }]);

    return FindAndModifyStatement;
}(_Statement3.default);

exports.default = FindAndModifyStatement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9hc3QvRmluZEFuZE1vZGlmeVN0YXRlbWVudC5qcyJdLCJuYW1lcyI6WyJGaW5kQW5kTW9kaWZ5U3RhdGVtZW50IiwiY29sbGVjdGlvbiIsIm9yaWdpbmFsIiwiZmllbGRzIiwid2hlcmUiLCJ1cHNlcnQiLCJzZXQiLCJ1cGRhdGUiLCJzb3J0IiwibG9jYXRpb24iLCJ0eXBlIiwiZGIiLCJjb250ZXh0IiwiT2JqZWN0IiwiY3JlYXRlIiwib3B0aW9ucyIsInJldHVybk9yaWdpbmFsIiwiYXNWYWx1ZSIsIiRzZXQiLCJyZWR1Y2UiLCJwcmV2IiwiY3VyciIsImFwcGx5IiwibGVuZ3RoIiwicHJvamVjdGlvbiIsImZpbmRPbmVBbmRVcGRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHTUEsc0I7OztBQUVGLG9DQUFZQyxVQUFaLEVBQXdCQyxRQUF4QixFQUFrQ0MsTUFBbEMsRUFBMENDLEtBQTFDLEVBQWlEQyxNQUFqRCxFQUF5REMsR0FBekQsRUFBOERDLE1BQTlELEVBQXNFQyxJQUF0RSxFQUE0RUMsUUFBNUUsRUFBc0Y7QUFBQTs7QUFBQTs7QUFHbEYsY0FBS0MsSUFBTCxHQUFZLDJCQUFaO0FBQ0EsY0FBS1QsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxjQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLGNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLGNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLGNBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNBLGNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNBLGNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQVprRjtBQWNyRjs7OztnQ0FFT0UsRSxFQUFJQyxPLEVBQVM7O0FBRWpCLGdCQUFJUixRQUFRUyxPQUFPQyxNQUFQLENBQWMsSUFBZCxDQUFaO0FBQ0EsZ0JBQUlYLFNBQVNVLE9BQU9DLE1BQVAsQ0FBYyxJQUFkLENBQWI7QUFDQSxnQkFBSUMsVUFBVSxFQUFFQyxnQkFBZ0IsS0FBS2QsUUFBdkIsRUFBaUNHLFFBQVEsS0FBS0EsTUFBOUMsRUFBZDtBQUNBLGdCQUFJRSxTQUFTLEtBQUtBLE1BQUwsQ0FBWVUsT0FBWixDQUFvQkwsT0FBcEIsQ0FBYjs7QUFFQUwscUJBQVMsS0FBS0QsR0FBTCxHQUFXLEVBQUVZLE1BQU1YLE1BQVIsRUFBWCxHQUE4QkEsTUFBdkM7O0FBRUFILG9CQUFRLEtBQUtBLEtBQUwsQ0FBV2UsTUFBWCxDQUFrQixVQUFDQyxJQUFELEVBQU9DLElBQVA7QUFBQSx1QkFBZ0JBLEtBQUtDLEtBQUwsQ0FBV0YsSUFBWCxFQUFpQlIsT0FBakIsQ0FBaEI7QUFBQSxhQUFsQixFQUE2RFIsS0FBN0QsQ0FBUjs7QUFFQSxnQkFBSSxLQUFLRCxNQUFMLENBQVlvQixNQUFaLEdBQXFCLENBQXpCLEVBQ0lSLFFBQVFTLFVBQVIsR0FBcUIsS0FBS3JCLE1BQUwsQ0FBWWdCLE1BQVosQ0FBbUIsVUFBQ0MsSUFBRCxFQUFPQyxJQUFQO0FBQUEsdUJBQWdCQSxLQUFLQyxLQUFMLENBQVdGLElBQVgsRUFBaUJSLE9BQWpCLENBQWhCO0FBQUEsYUFBbkIsRUFBOERULE1BQTlELENBQXJCOztBQUVKLGdCQUFJLEtBQUtLLElBQVQsRUFDSU8sUUFBUVAsSUFBUixHQUFlLEtBQUtBLElBQUwsQ0FBVVMsT0FBVixDQUFrQkwsT0FBbEIsQ0FBZjs7QUFFSixtQkFBT0QsR0FBR1YsVUFBSCxDQUFjLEtBQUtBLFVBQUwsQ0FBZ0JnQixPQUFoQixDQUF3QkwsT0FBeEIsQ0FBZCxFQUNQYSxnQkFETyxDQUNVckIsS0FEVixFQUNpQkcsTUFEakIsRUFDeUJRLE9BRHpCLENBQVA7QUFHSDs7Ozs7O2tCQUlVZixzQiIsImZpbGUiOiJGaW5kQW5kTW9kaWZ5U3RhdGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0YXRlbWVudCBmcm9tICcuL1N0YXRlbWVudCc7XG5cbi8qKlxuICogRmluZEFuZE1vZGlmeVN0YXRlbWVudFxuICovXG5jbGFzcyBGaW5kQW5kTW9kaWZ5U3RhdGVtZW50IGV4dGVuZHMgU3RhdGVtZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbGxlY3Rpb24sIG9yaWdpbmFsLCBmaWVsZHMsIHdoZXJlLCB1cHNlcnQsIHNldCwgdXBkYXRlLCBzb3J0LCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdmaW5kLWFuZC1tb2RpZnktc3RhdGVtZW50JztcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uID0gY29sbGVjdGlvbjtcbiAgICAgICAgdGhpcy5vcmlnaW5hbCA9IG9yaWdpbmFsO1xuICAgICAgICB0aGlzLmZpZWxkcyA9IGZpZWxkcztcbiAgICAgICAgdGhpcy53aGVyZSA9IHdoZXJlO1xuICAgICAgICB0aGlzLnVwc2VydCA9IHVwc2VydDtcbiAgICAgICAgdGhpcy5zZXQgPSBzZXQ7XG4gICAgICAgIHRoaXMudXBkYXRlID0gdXBkYXRlO1xuICAgICAgICB0aGlzLnNvcnQgPSBzb3J0O1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICBleGVjdXRlKGRiLCBjb250ZXh0KSB7XG5cbiAgICAgICAgdmFyIHdoZXJlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIGZpZWxkcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBvcHRpb25zID0geyByZXR1cm5PcmlnaW5hbDogdGhpcy5vcmlnaW5hbCwgdXBzZXJ0OiB0aGlzLnVwc2VydCB9O1xuICAgICAgICB2YXIgdXBkYXRlID0gdGhpcy51cGRhdGUuYXNWYWx1ZShjb250ZXh0KTtcblxuICAgICAgICB1cGRhdGUgPSB0aGlzLnNldCA/IHsgJHNldDogdXBkYXRlIH0gOiB1cGRhdGU7XG5cbiAgICAgICAgd2hlcmUgPSB0aGlzLndoZXJlLnJlZHVjZSgocHJldiwgY3VycikgPT4gY3Vyci5hcHBseShwcmV2LCBjb250ZXh0KSwgd2hlcmUpO1xuXG4gICAgICAgIGlmICh0aGlzLmZpZWxkcy5sZW5ndGggPiAwKVxuICAgICAgICAgICAgb3B0aW9ucy5wcm9qZWN0aW9uID0gdGhpcy5maWVsZHMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBjdXJyLmFwcGx5KHByZXYsIGNvbnRleHQpLCBmaWVsZHMpO1xuXG4gICAgICAgIGlmICh0aGlzLnNvcnQpXG4gICAgICAgICAgICBvcHRpb25zLnNvcnQgPSB0aGlzLnNvcnQuYXNWYWx1ZShjb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gZGIuY29sbGVjdGlvbih0aGlzLmNvbGxlY3Rpb24uYXNWYWx1ZShjb250ZXh0KSkuXG4gICAgICAgIGZpbmRPbmVBbmRVcGRhdGUod2hlcmUsIHVwZGF0ZSwgb3B0aW9ucyk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmluZEFuZE1vZGlmeVN0YXRlbWVudFxuIl19