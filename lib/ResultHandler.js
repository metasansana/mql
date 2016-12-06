"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * ResultHandler
 * @interface
 */
var ResultHandler = function () {
  function ResultHandler() {
    _classCallCheck(this, ResultHandler);
  }

  _createClass(ResultHandler, [{
    key: "onResult",


    /**
     * onResult is called with the results
     * of executing a Statement.
     * @param {Object} result
     * @returns {Promise}
     */
    value: function onResult() {}
  }]);

  return ResultHandler;
}();

exports.default = ResultHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9SZXN1bHRIYW5kbGVyLmpzIl0sIm5hbWVzIjpbIlJlc3VsdEhhbmRsZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztJQUlNQSxhOzs7Ozs7Ozs7QUFFRjs7Ozs7OytCQU1XLENBRVY7Ozs7OztrQkFJVUEsYSIsImZpbGUiOiJSZXN1bHRIYW5kbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZXN1bHRIYW5kbGVyXG4gKiBAaW50ZXJmYWNlXG4gKi9cbmNsYXNzIFJlc3VsdEhhbmRsZXIge1xuXG4gICAgLyoqXG4gICAgICogb25SZXN1bHQgaXMgY2FsbGVkIHdpdGggdGhlIHJlc3VsdHNcbiAgICAgKiBvZiBleGVjdXRpbmcgYSBTdGF0ZW1lbnQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlc3VsdFxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIG9uUmVzdWx0KCkge1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3VsdEhhbmRsZXJcbiJdfQ==