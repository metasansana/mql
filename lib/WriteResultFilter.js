"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * WriteCompleteHandler
 */
var WriteCompleteHandler = function () {
  function WriteCompleteHandler() {
    _classCallCheck(this, WriteCompleteHandler);
  }

  _createClass(WriteCompleteHandler, [{
    key: "onWriteComplete",


    /**
     * onWriteComplete
     */
    value: function onWriteComplete() {}
  }]);

  return WriteCompleteHandler;
}();

/**
 * WriteResultFilter
 * @param {WriteCompleteHandler} handler
 * implements {ResultHandler}
 */


var WriteResultFilter = function () {
  function WriteResultFilter(handler) {
    _classCallCheck(this, WriteResultFilter);

    this._handler = handler;
  }

  _createClass(WriteResultFilter, [{
    key: "onResult",
    value: function onResult(result) {

      return this._handler.onWriteComplete(result);
    }
  }]);

  return WriteResultFilter;
}();

exports.WriteCompleteHandler = WriteCompleteHandler;
exports.default = WriteResultFilter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Xcml0ZVJlc3VsdEZpbHRlci5qcyJdLCJuYW1lcyI6WyJXcml0ZUNvbXBsZXRlSGFuZGxlciIsIldyaXRlUmVzdWx0RmlsdGVyIiwiaGFuZGxlciIsIl9oYW5kbGVyIiwicmVzdWx0Iiwib25Xcml0ZUNvbXBsZXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7OztJQUdNQSxvQjs7Ozs7Ozs7O0FBRUY7OztzQ0FHa0IsQ0FFakI7Ozs7OztBQUtMOzs7Ozs7O0lBS01DLGlCO0FBRUYsNkJBQVlDLE9BQVosRUFBcUI7QUFBQTs7QUFFakIsU0FBS0MsUUFBTCxHQUFnQkQsT0FBaEI7QUFFSDs7Ozs2QkFFUUUsTSxFQUFROztBQUVkLGFBQU8sS0FBS0QsUUFBTCxDQUFjRSxlQUFkLENBQThCRCxNQUE5QixDQUFQO0FBRUY7Ozs7OztRQUlJSixvQixHQUFBQSxvQjtrQkFDTUMsaUIiLCJmaWxlIjoiV3JpdGVSZXN1bHRGaWx0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFdyaXRlQ29tcGxldGVIYW5kbGVyXG4gKi9cbmNsYXNzIFdyaXRlQ29tcGxldGVIYW5kbGVyIHtcblxuICAgIC8qKlxuICAgICAqIG9uV3JpdGVDb21wbGV0ZVxuICAgICAqL1xuICAgIG9uV3JpdGVDb21wbGV0ZSgpIHtcblxuICAgIH1cblxufVxuXG5cbi8qKlxuICogV3JpdGVSZXN1bHRGaWx0ZXJcbiAqIEBwYXJhbSB7V3JpdGVDb21wbGV0ZUhhbmRsZXJ9IGhhbmRsZXJcbiAqIGltcGxlbWVudHMge1Jlc3VsdEhhbmRsZXJ9XG4gKi9cbmNsYXNzIFdyaXRlUmVzdWx0RmlsdGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKGhhbmRsZXIpIHtcblxuICAgICAgICB0aGlzLl9oYW5kbGVyID0gaGFuZGxlcjtcblxuICAgIH1cblxuICAgIG9uUmVzdWx0KHJlc3VsdCkge1xuXG4gICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZXIub25Xcml0ZUNvbXBsZXRlKHJlc3VsdCk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IHsgV3JpdGVDb21wbGV0ZUhhbmRsZXIgfVxuZXhwb3J0IGRlZmF1bHQgV3JpdGVSZXN1bHRGaWx0ZXJcbiJdfQ==