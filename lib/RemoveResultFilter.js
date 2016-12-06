"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * RemoveCompleteHandler
 */
var RemoveCompleteHandler = function () {
  function RemoveCompleteHandler() {
    _classCallCheck(this, RemoveCompleteHandler);
  }

  _createClass(RemoveCompleteHandler, [{
    key: "onRemoveComplete",


    /**
     * onRemoveComplete
     */
    value: function onRemoveComplete() {}

    /**
     * onRemoveMissed
     */

  }, {
    key: "onRemoveMissed",
    value: function onRemoveMissed() {}
  }]);

  return RemoveCompleteHandler;
}();
/**
 * RemoveResultFilter
 * @param {RemoveCompleteHandler} handler
 * @implements {ResultHandler}
 */


var RemoveResultFilter = function () {
  function RemoveResultFilter(handler) {
    _classCallCheck(this, RemoveResultFilter);

    this._handler = handler;
  }

  _createClass(RemoveResultFilter, [{
    key: "onResult",
    value: function onResult(result) {

      if (result.deletedCount === 0) return this._handler.onRemoveMissed(result);

      return this._handler.onRemoveComplete(result);
    }
  }]);

  return RemoveResultFilter;
}();

exports.default = RemoveResultFilter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9SZW1vdmVSZXN1bHRGaWx0ZXIuanMiXSwibmFtZXMiOlsiUmVtb3ZlQ29tcGxldGVIYW5kbGVyIiwiUmVtb3ZlUmVzdWx0RmlsdGVyIiwiaGFuZGxlciIsIl9oYW5kbGVyIiwicmVzdWx0IiwiZGVsZXRlZENvdW50Iiwib25SZW1vdmVNaXNzZWQiLCJvblJlbW92ZUNvbXBsZXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7OztJQUdNQSxxQjs7Ozs7Ozs7O0FBRUY7Ozt1Q0FHbUIsQ0FFbEI7O0FBRUQ7Ozs7OztxQ0FHaUIsQ0FFaEI7Ozs7O0FBR0w7Ozs7Ozs7SUFLTUMsa0I7QUFFRiw4QkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUVqQixTQUFLQyxRQUFMLEdBQWdCRCxPQUFoQjtBQUVIOzs7OzZCQUVRRSxNLEVBQVE7O0FBRW5CLFVBQUlBLE9BQU9DLFlBQVAsS0FBd0IsQ0FBNUIsRUFDVSxPQUFPLEtBQUtGLFFBQUwsQ0FBY0csY0FBZCxDQUE2QkYsTUFBN0IsQ0FBUDs7QUFFTCxhQUFPLEtBQUtELFFBQUwsQ0FBY0ksZ0JBQWQsQ0FBK0JILE1BQS9CLENBQVA7QUFFRjs7Ozs7O2tCQUlVSCxrQiIsImZpbGUiOiJSZW1vdmVSZXN1bHRGaWx0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlbW92ZUNvbXBsZXRlSGFuZGxlclxuICovXG5jbGFzcyBSZW1vdmVDb21wbGV0ZUhhbmRsZXIge1xuXG4gICAgLyoqXG4gICAgICogb25SZW1vdmVDb21wbGV0ZVxuICAgICAqL1xuICAgIG9uUmVtb3ZlQ29tcGxldGUoKSB7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBvblJlbW92ZU1pc3NlZFxuICAgICAqL1xuICAgIG9uUmVtb3ZlTWlzc2VkKCkge1xuXG4gICAgfVxuXG59XG4vKipcbiAqIFJlbW92ZVJlc3VsdEZpbHRlclxuICogQHBhcmFtIHtSZW1vdmVDb21wbGV0ZUhhbmRsZXJ9IGhhbmRsZXJcbiAqIEBpbXBsZW1lbnRzIHtSZXN1bHRIYW5kbGVyfVxuICovXG5jbGFzcyBSZW1vdmVSZXN1bHRGaWx0ZXIge1xuXG4gICAgY29uc3RydWN0b3IoaGFuZGxlcikge1xuXG4gICAgICAgIHRoaXMuX2hhbmRsZXIgPSBoYW5kbGVyO1xuXG4gICAgfVxuXG4gICAgb25SZXN1bHQocmVzdWx0KSB7XG5cbiAgaWYgKHJlc3VsdC5kZWxldGVkQ291bnQgPT09IDApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlci5vblJlbW92ZU1pc3NlZChyZXN1bHQpO1xuXG4gICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZXIub25SZW1vdmVDb21wbGV0ZShyZXN1bHQpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbW92ZVJlc3VsdEZpbHRlclxuIl19