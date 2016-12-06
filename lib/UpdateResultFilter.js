"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * UpdateCompleteHandler
 */
var UpdateCompleteHandler = function () {
    function UpdateCompleteHandler() {
        _classCallCheck(this, UpdateCompleteHandler);
    }

    _createClass(UpdateCompleteHandler, [{
        key: "onWriteComplete",


        /**
         * onWriteComplete
         */
        value: function onWriteComplete() {}

        /**
         * onUpdateMissed
         */

    }, {
        key: "onWriteMissed",
        value: function onWriteMissed() {}
    }]);

    return UpdateCompleteHandler;
}();

/**
 * UpdateResultFilter
 * @param {UpdateCompleteHandler} handler
 * implements {ResultHandler}
 */


var UpdateResultFilter = function () {
    function UpdateResultFilter(handler) {
        _classCallCheck(this, UpdateResultFilter);

        this._handler = handler;
    }

    _createClass(UpdateResultFilter, [{
        key: "onResult",
        value: function onResult(result) {

            if (result.matchedCount === 0) return this._handler.onWriteMissed(result);

            return this._handler.onWriteComplete(result);
        }
    }]);

    return UpdateResultFilter;
}();

exports.UpdateCompleteHandler = UpdateCompleteHandler;
exports.default = UpdateResultFilter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9VcGRhdGVSZXN1bHRGaWx0ZXIuanMiXSwibmFtZXMiOlsiVXBkYXRlQ29tcGxldGVIYW5kbGVyIiwiVXBkYXRlUmVzdWx0RmlsdGVyIiwiaGFuZGxlciIsIl9oYW5kbGVyIiwicmVzdWx0IiwibWF0Y2hlZENvdW50Iiwib25Xcml0ZU1pc3NlZCIsIm9uV3JpdGVDb21wbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7SUFHTUEscUI7Ozs7Ozs7OztBQUVGOzs7MENBR2tCLENBRWpCOztBQUVEOzs7Ozs7d0NBR2dCLENBRWY7Ozs7OztBQUtMOzs7Ozs7O0lBS01DLGtCO0FBRUYsZ0NBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFFakIsYUFBS0MsUUFBTCxHQUFnQkQsT0FBaEI7QUFFSDs7OztpQ0FFUUUsTSxFQUFROztBQUViLGdCQUFJQSxPQUFPQyxZQUFQLEtBQXdCLENBQTVCLEVBQ0ksT0FBTyxLQUFLRixRQUFMLENBQWNHLGFBQWQsQ0FBNEJGLE1BQTVCLENBQVA7O0FBRUosbUJBQU8sS0FBS0QsUUFBTCxDQUFjSSxlQUFkLENBQThCSCxNQUE5QixDQUFQO0FBRUg7Ozs7OztRQUlJSixxQixHQUFBQSxxQjtrQkFDTUMsa0IiLCJmaWxlIjoiVXBkYXRlUmVzdWx0RmlsdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVcGRhdGVDb21wbGV0ZUhhbmRsZXJcbiAqL1xuY2xhc3MgVXBkYXRlQ29tcGxldGVIYW5kbGVyIHtcblxuICAgIC8qKlxuICAgICAqIG9uV3JpdGVDb21wbGV0ZVxuICAgICAqL1xuICAgIG9uV3JpdGVDb21wbGV0ZSgpIHtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIG9uVXBkYXRlTWlzc2VkXG4gICAgICovXG4gICAgb25Xcml0ZU1pc3NlZCgpIHtcblxuICAgIH1cblxufVxuXG5cbi8qKlxuICogVXBkYXRlUmVzdWx0RmlsdGVyXG4gKiBAcGFyYW0ge1VwZGF0ZUNvbXBsZXRlSGFuZGxlcn0gaGFuZGxlclxuICogaW1wbGVtZW50cyB7UmVzdWx0SGFuZGxlcn1cbiAqL1xuY2xhc3MgVXBkYXRlUmVzdWx0RmlsdGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKGhhbmRsZXIpIHtcblxuICAgICAgICB0aGlzLl9oYW5kbGVyID0gaGFuZGxlcjtcblxuICAgIH1cblxuICAgIG9uUmVzdWx0KHJlc3VsdCkge1xuXG4gICAgICAgIGlmIChyZXN1bHQubWF0Y2hlZENvdW50ID09PSAwKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZXIub25Xcml0ZU1pc3NlZChyZXN1bHQpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVyLm9uV3JpdGVDb21wbGV0ZShyZXN1bHQpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCB7IFVwZGF0ZUNvbXBsZXRlSGFuZGxlciB9XG5leHBvcnQgZGVmYXVsdCBVcGRhdGVSZXN1bHRGaWx0ZXJcbiJdfQ==