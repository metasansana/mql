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

    function FindAndModifyStatement(collection, original, fields, where, upsert, update, sort, location) {
        _classCallCheck(this, FindAndModifyStatement);

        var _this = _possibleConstructorReturn(this, (FindAndModifyStatement.__proto__ || Object.getPrototypeOf(FindAndModifyStatement)).call(this));

        _this.type = 'find-and-modify-statement';
        _this.collection = collection;
        _this.original = original;
        _this.fields = fields;
        _this.where = where;
        _this.upsert = upsert;
        _this.update = update;
        _this.sort = sort;
        _this.location = location;

        return _this;
    }

    _createClass(FindAndModifyStatement, [{
        key: 'execute',
        value: function execute(db, context) {

            var where = {};
            var options = { returnOriginal: this.original, upsert: this.upsert };
            var update = this.update.asValue(context);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9hc3QvRmluZEFuZE1vZGlmeVN0YXRlbWVudC5qcyJdLCJuYW1lcyI6WyJGaW5kQW5kTW9kaWZ5U3RhdGVtZW50IiwiY29sbGVjdGlvbiIsIm9yaWdpbmFsIiwiZmllbGRzIiwid2hlcmUiLCJ1cHNlcnQiLCJ1cGRhdGUiLCJzb3J0IiwibG9jYXRpb24iLCJ0eXBlIiwiZGIiLCJjb250ZXh0Iiwib3B0aW9ucyIsInJldHVybk9yaWdpbmFsIiwiYXNWYWx1ZSIsInJlZHVjZSIsInByZXYiLCJjdXJyIiwiYXBwbHkiLCJsZW5ndGgiLCJwcm9qZWN0aW9uIiwiZmluZE9uZUFuZFVwZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxzQjs7O0FBRUYsb0NBQVlDLFVBQVosRUFBd0JDLFFBQXhCLEVBQWtDQyxNQUFsQyxFQUEwQ0MsS0FBMUMsRUFBaURDLE1BQWpELEVBQTBEQyxNQUExRCxFQUFrRUMsSUFBbEUsRUFBd0VDLFFBQXhFLEVBQWtGO0FBQUE7O0FBQUE7O0FBRzlFLGNBQUtDLElBQUwsR0FBWSwyQkFBWjtBQUNBLGNBQUtSLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxjQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxjQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxjQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxjQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxjQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxjQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjs7QUFYOEU7QUFhakY7Ozs7Z0NBRU9FLEUsRUFBSUMsTyxFQUFTOztBQUVqQixnQkFBSVAsUUFBUSxFQUFaO0FBQ0EsZ0JBQUlRLFVBQVUsRUFBRUMsZ0JBQWdCLEtBQUtYLFFBQXZCLEVBQWlDRyxRQUFPLEtBQUtBLE1BQTdDLEVBQWQ7QUFDQSxnQkFBSUMsU0FBUyxLQUFLQSxNQUFMLENBQVlRLE9BQVosQ0FBb0JILE9BQXBCLENBQWI7O0FBRUFQLG9CQUFRLEtBQUtBLEtBQUwsQ0FBV1csTUFBWCxDQUFrQixVQUFDQyxJQUFELEVBQU9DLElBQVA7QUFBQSx1QkFBZ0JBLEtBQUtDLEtBQUwsQ0FBV0YsSUFBWCxFQUFpQkwsT0FBakIsQ0FBaEI7QUFBQSxhQUFsQixFQUE2RFAsS0FBN0QsQ0FBUjs7QUFFQSxnQkFBSSxLQUFLRCxNQUFMLENBQVlnQixNQUFaLEdBQXFCLENBQXpCLEVBQ0lQLFFBQVFRLFVBQVIsR0FBcUIsS0FBS2pCLE1BQUwsQ0FBWVksTUFBWixDQUFtQixVQUFDQyxJQUFELEVBQU9DLElBQVA7QUFBQSx1QkFBZ0JBLEtBQUtDLEtBQUwsQ0FBV0YsSUFBWCxFQUFpQkwsT0FBakIsQ0FBaEI7QUFBQSxhQUFuQixFQUE4RFIsTUFBOUQsQ0FBckI7O0FBRUosZ0JBQUksS0FBS0ksSUFBVCxFQUNJSyxRQUFRTCxJQUFSLEdBQWUsS0FBS0EsSUFBTCxDQUFVTyxPQUFWLENBQWtCSCxPQUFsQixDQUFmOztBQUVKLG1CQUFPRCxHQUFHVCxVQUFILENBQWMsS0FBS0EsVUFBTCxDQUFnQmEsT0FBaEIsQ0FBd0JILE9BQXhCLENBQWQsRUFDUFUsZ0JBRE8sQ0FDVWpCLEtBRFYsRUFDaUJFLE1BRGpCLEVBQ3lCTSxPQUR6QixDQUFQO0FBR0g7Ozs7OztrQkFJVVosc0IiLCJmaWxlIjoiRmluZEFuZE1vZGlmeVN0YXRlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdGF0ZW1lbnQgZnJvbSAnLi9TdGF0ZW1lbnQnO1xuXG4vKipcbiAqIEZpbmRBbmRNb2RpZnlTdGF0ZW1lbnRcbiAqL1xuY2xhc3MgRmluZEFuZE1vZGlmeVN0YXRlbWVudCBleHRlbmRzIFN0YXRlbWVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb2xsZWN0aW9uLCBvcmlnaW5hbCwgZmllbGRzLCB3aGVyZSwgdXBzZXJ0LCAgdXBkYXRlLCBzb3J0LCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdmaW5kLWFuZC1tb2RpZnktc3RhdGVtZW50JztcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uID0gY29sbGVjdGlvbjtcbiAgICAgICAgdGhpcy5vcmlnaW5hbCA9IG9yaWdpbmFsO1xuICAgICAgICB0aGlzLmZpZWxkcyA9IGZpZWxkcztcbiAgICAgICAgdGhpcy53aGVyZSA9IHdoZXJlO1xuICAgICAgICB0aGlzLnVwc2VydCA9IHVwc2VydDtcbiAgICAgICAgdGhpcy51cGRhdGUgPSB1cGRhdGU7XG4gICAgICAgIHRoaXMuc29ydCA9IHNvcnQ7XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIGV4ZWN1dGUoZGIsIGNvbnRleHQpIHtcblxuICAgICAgICB2YXIgd2hlcmUgPSB7fTtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7IHJldHVybk9yaWdpbmFsOiB0aGlzLm9yaWdpbmFsLCB1cHNlcnQ6dGhpcy51cHNlcnQgfTtcbiAgICAgICAgdmFyIHVwZGF0ZSA9IHRoaXMudXBkYXRlLmFzVmFsdWUoY29udGV4dCk7XG5cbiAgICAgICAgd2hlcmUgPSB0aGlzLndoZXJlLnJlZHVjZSgocHJldiwgY3VycikgPT4gY3Vyci5hcHBseShwcmV2LCBjb250ZXh0KSwgd2hlcmUpO1xuXG4gICAgICAgIGlmICh0aGlzLmZpZWxkcy5sZW5ndGggPiAwKVxuICAgICAgICAgICAgb3B0aW9ucy5wcm9qZWN0aW9uID0gdGhpcy5maWVsZHMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBjdXJyLmFwcGx5KHByZXYsIGNvbnRleHQpLCBmaWVsZHMpO1xuXG4gICAgICAgIGlmICh0aGlzLnNvcnQpXG4gICAgICAgICAgICBvcHRpb25zLnNvcnQgPSB0aGlzLnNvcnQuYXNWYWx1ZShjb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gZGIuY29sbGVjdGlvbih0aGlzLmNvbGxlY3Rpb24uYXNWYWx1ZShjb250ZXh0KSkuXG4gICAgICAgIGZpbmRPbmVBbmRVcGRhdGUod2hlcmUsIHVwZGF0ZSwgb3B0aW9ucyk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmluZEFuZE1vZGlmeVN0YXRlbWVudFxuIl19