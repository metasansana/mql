"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * ReadCompleteHandler
 */
var ReadCompleteHandler = function () {
    function ReadCompleteHandler() {
        _classCallCheck(this, ReadCompleteHandler);
    }

    _createClass(ReadCompleteHandler, [{
        key: "onReadComplete",


        /**
         * onComplete
         * @param {array<object>|object} result
         */
        value: function onReadComplete() {}

        /**
         * onReadEmpty
         */

    }, {
        key: "onReadEmpty",
        value: function onReadEmpty() {}
    }]);

    return ReadCompleteHandler;
}();

/**
 * ReadResultFilter filters a find result for a cleaner API.
 * @param {ReadCompleteHandler} handler
 * @implements ResultHandler
 */


var ReadResultFilter = function () {
    function ReadResultFilter(handler) {
        _classCallCheck(this, ReadResultFilter);

        this._handler = handler;
    }

    _createClass(ReadResultFilter, [{
        key: "onResult",
        value: function onResult(result) {

            if (Array.isArray(result)) {
                if (result.length > 0) return this._handler.onReadComplete(result);
            } else if (result != null) {

                return this._handler.onReadComplete(result);
            }

            return this._handler.onReadEmpty(result);
        }
    }]);

    return ReadResultFilter;
}();

exports.ReadCompleteHandler = ReadCompleteHandler;
exports.default = ReadResultFilter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9SZWFkUmVzdWx0RmlsdGVyLmpzIl0sIm5hbWVzIjpbIlJlYWRDb21wbGV0ZUhhbmRsZXIiLCJSZWFkUmVzdWx0RmlsdGVyIiwiaGFuZGxlciIsIl9oYW5kbGVyIiwicmVzdWx0IiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwib25SZWFkQ29tcGxldGUiLCJvblJlYWRFbXB0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7SUFHTUEsbUI7Ozs7Ozs7OztBQUVGOzs7O3lDQUlpQixDQUVoQjs7QUFFRDs7Ozs7O3NDQUdjLENBRWI7Ozs7OztBQUlMOzs7Ozs7O0lBS01DLGdCO0FBRUYsOEJBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFFakIsYUFBS0MsUUFBTCxHQUFnQkQsT0FBaEI7QUFFSDs7OztpQ0FFUUUsTSxFQUFROztBQUViLGdCQUFJQyxNQUFNQyxPQUFOLENBQWNGLE1BQWQsQ0FBSixFQUEyQjtBQUN2QixvQkFBSUEsT0FBT0csTUFBUCxHQUFnQixDQUFwQixFQUNJLE9BQU8sS0FBS0osUUFBTCxDQUFjSyxjQUFkLENBQTZCSixNQUE3QixDQUFQO0FBRVAsYUFKRCxNQUlPLElBQUlBLFVBQVUsSUFBZCxFQUFvQjs7QUFFdkIsdUJBQU8sS0FBS0QsUUFBTCxDQUFjSyxjQUFkLENBQTZCSixNQUE3QixDQUFQO0FBRUg7O0FBRUQsbUJBQU8sS0FBS0QsUUFBTCxDQUFjTSxXQUFkLENBQTBCTCxNQUExQixDQUFQO0FBRUg7Ozs7OztRQUdJSixtQixHQUFBQSxtQjtrQkFDTUMsZ0IiLCJmaWxlIjoiUmVhZFJlc3VsdEZpbHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmVhZENvbXBsZXRlSGFuZGxlclxuICovXG5jbGFzcyBSZWFkQ29tcGxldGVIYW5kbGVyIHtcblxuICAgIC8qKlxuICAgICAqIG9uQ29tcGxldGVcbiAgICAgKiBAcGFyYW0ge2FycmF5PG9iamVjdD58b2JqZWN0fSByZXN1bHRcbiAgICAgKi9cbiAgICBvblJlYWRDb21wbGV0ZSgpIHtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIG9uUmVhZEVtcHR5XG4gICAgICovXG4gICAgb25SZWFkRW1wdHkoKSB7XG5cbiAgICB9XG5cbn1cblxuLyoqXG4gKiBSZWFkUmVzdWx0RmlsdGVyIGZpbHRlcnMgYSBmaW5kIHJlc3VsdCBmb3IgYSBjbGVhbmVyIEFQSS5cbiAqIEBwYXJhbSB7UmVhZENvbXBsZXRlSGFuZGxlcn0gaGFuZGxlclxuICogQGltcGxlbWVudHMgUmVzdWx0SGFuZGxlclxuICovXG5jbGFzcyBSZWFkUmVzdWx0RmlsdGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKGhhbmRsZXIpIHtcblxuICAgICAgICB0aGlzLl9oYW5kbGVyID0gaGFuZGxlcjtcblxuICAgIH1cblxuICAgIG9uUmVzdWx0KHJlc3VsdCkge1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlc3VsdCkpIHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlci5vblJlYWRDb21wbGV0ZShyZXN1bHQpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAocmVzdWx0ICE9IG51bGwpIHtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZXIub25SZWFkQ29tcGxldGUocmVzdWx0KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZXIub25SZWFkRW1wdHkocmVzdWx0KTtcblxuICAgIH1cblxufVxuZXhwb3J0IHsgUmVhZENvbXBsZXRlSGFuZGxlciB9XG5leHBvcnQgZGVmYXVsdCBSZWFkUmVzdWx0RmlsdGVyXG4iXX0=