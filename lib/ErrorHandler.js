"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * ErrorHandler
 * @interface
 */
var ErrorHandler = function () {
  function ErrorHandler() {
    _classCallCheck(this, ErrorHandler);
  }

  _createClass(ErrorHandler, [{
    key: "onError",


    /**
     * onError is called when executing the statement yields an
     * exception.
     * @param {Error} e
     * @returns {Error}
     */
    value: function onError() {}
  }]);

  return ErrorHandler;
}();

exports.default = ErrorHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9FcnJvckhhbmRsZXIuanMiXSwibmFtZXMiOlsiRXJyb3JIYW5kbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7SUFJTUEsWTs7Ozs7Ozs7O0FBRUY7Ozs7Ozs4QkFNVSxDQUVUOzs7Ozs7a0JBSVVBLFkiLCJmaWxlIjoiRXJyb3JIYW5kbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBFcnJvckhhbmRsZXJcbiAqIEBpbnRlcmZhY2VcbiAqL1xuY2xhc3MgRXJyb3JIYW5kbGVyIHtcblxuICAgIC8qKlxuICAgICAqIG9uRXJyb3IgaXMgY2FsbGVkIHdoZW4gZXhlY3V0aW5nIHRoZSBzdGF0ZW1lbnQgeWllbGRzIGFuXG4gICAgICogZXhjZXB0aW9uLlxuICAgICAqIEBwYXJhbSB7RXJyb3J9IGVcbiAgICAgKiBAcmV0dXJucyB7RXJyb3J9XG4gICAgICovXG4gICAgb25FcnJvcigpIHtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvckhhbmRsZXJcbiJdfQ==