'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FindAndModifyCompleteHandler = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * FindAndModifyResultFilter
 * @param {UpdateResultFilter.UpdateCompleteHandler} handler
 * implements {ResultHandler}
 */
var FindAndModifyResultFilter = function () {
    function FindAndModifyResultFilter(handler) {
        _classCallCheck(this, FindAndModifyResultFilter);

        this._handler = handler;
    }

    _createClass(FindAndModifyResultFilter, [{
        key: 'onResult',
        value: function onResult(result) {

            _assert2.default.equal(result.ok === 1);

            if (!result.value) return this._handler.onWriteMissed(result);

            return this._handler.onWriteComplete(result.value);
        }
    }]);

    return FindAndModifyResultFilter;
}();

exports.FindAndModifyCompleteHandler = FindAndModifyCompleteHandler;
exports.default = FindAndModifyResultFilter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9GaW5kQW5kTW9kaWZ5RmlsdGVyLmpzIl0sIm5hbWVzIjpbIkZpbmRBbmRNb2RpZnlSZXN1bHRGaWx0ZXIiLCJoYW5kbGVyIiwiX2hhbmRsZXIiLCJyZXN1bHQiLCJlcXVhbCIsIm9rIiwidmFsdWUiLCJvbldyaXRlTWlzc2VkIiwib25Xcml0ZUNvbXBsZXRlIiwiRmluZEFuZE1vZGlmeUNvbXBsZXRlSGFuZGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O0FBRUE7Ozs7O0lBS01BLHlCO0FBRUYsdUNBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFFakIsYUFBS0MsUUFBTCxHQUFnQkQsT0FBaEI7QUFFSDs7OztpQ0FFUUUsTSxFQUFROztBQUViLDZCQUFPQyxLQUFQLENBQWFELE9BQU9FLEVBQVAsS0FBYyxDQUEzQjs7QUFFQSxnQkFBRyxDQUFDRixPQUFPRyxLQUFYLEVBQ0ksT0FBTyxLQUFLSixRQUFMLENBQWNLLGFBQWQsQ0FBNEJKLE1BQTVCLENBQVA7O0FBRUosbUJBQU8sS0FBS0QsUUFBTCxDQUFjTSxlQUFkLENBQThCTCxPQUFPRyxLQUFyQyxDQUFQO0FBRUg7Ozs7OztRQUlJRyw0QixHQUFBQSw0QjtrQkFDTVQseUIiLCJmaWxlIjoiRmluZEFuZE1vZGlmeUZpbHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhc3NlcnQgZnJvbSAnYXNzZXJ0JztcblxuLyoqXG4gKiBGaW5kQW5kTW9kaWZ5UmVzdWx0RmlsdGVyXG4gKiBAcGFyYW0ge1VwZGF0ZVJlc3VsdEZpbHRlci5VcGRhdGVDb21wbGV0ZUhhbmRsZXJ9IGhhbmRsZXJcbiAqIGltcGxlbWVudHMge1Jlc3VsdEhhbmRsZXJ9XG4gKi9cbmNsYXNzIEZpbmRBbmRNb2RpZnlSZXN1bHRGaWx0ZXIge1xuXG4gICAgY29uc3RydWN0b3IoaGFuZGxlcikge1xuXG4gICAgICAgIHRoaXMuX2hhbmRsZXIgPSBoYW5kbGVyO1xuXG4gICAgfVxuXG4gICAgb25SZXN1bHQocmVzdWx0KSB7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKHJlc3VsdC5vayA9PT0gMSk7XG5cbiAgICAgICAgaWYoIXJlc3VsdC52YWx1ZSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVyLm9uV3JpdGVNaXNzZWQocmVzdWx0KTtcblxuICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlci5vbldyaXRlQ29tcGxldGUocmVzdWx0LnZhbHVlKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgeyBGaW5kQW5kTW9kaWZ5Q29tcGxldGVIYW5kbGVyIH1cbmV4cG9ydCBkZWZhdWx0IEZpbmRBbmRNb2RpZnlSZXN1bHRGaWx0ZXJcbiJdfQ==