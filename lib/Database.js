'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _beof = require('beof');

var _beof2 = _interopRequireDefault(_beof);

var _Parser = require('./Parser');

var _Parser2 = _interopRequireDefault(_Parser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Database wraps around the node mongodb api
 * to allow statements to be parsed from strings.
 *
 * If parsing statments per request, the cache option should be used
 * so to avoid repeating the same computation per request.
 * @param {mongodb.Database} mdb
 * @param {boolean} [cache=true]
 */
var Database = function () {
    function Database(mdb) {
        var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        _classCallCheck(this, Database);

        (0, _beof2.default)({ mdb: mdb }).optional().object();

        this._mdb = mdb;
        this.shouldCache = cache;
        this.cache = Object.create(null);
    }

    _createClass(Database, [{
        key: 'use',


        /**
         * use a different database connection, cached statements will continue to use
         * the database they were created with.
         * @param {mongodb.Database} db
         */
        value: function use(db) {

            this._mdb = db;
            return this;
        }

        /**
         * parse a statement, optionally caching it if configured to
         * do so.
         * @param {string} str
         * @param {object} [context=null] - optional context to create the statement with.
         * @returns {Statement}
         */

    }, {
        key: 'parse',
        value: function parse(str) {
            var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


            var stmt;

            if (this.shouldCache = false) {

                stmt = _Parser2.default.parse(str);
            } else {

                if (this.cache[str]) stmt = this.cache[str];else stmt = _Parser2.default.parse(str);
            }

            stmt.db = this._mdb;
            stmt.context = context;
            return stmt;
        }
    }], [{
        key: 'wrap',
        value: function wrap(db) {
            var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


            return new Database(db, cache);
        }
    }]);

    return Database;
}();

exports.default = Database;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9EYXRhYmFzZS5qcyJdLCJuYW1lcyI6WyJEYXRhYmFzZSIsIm1kYiIsImNhY2hlIiwib3B0aW9uYWwiLCJvYmplY3QiLCJfbWRiIiwic2hvdWxkQ2FjaGUiLCJPYmplY3QiLCJjcmVhdGUiLCJkYiIsInN0ciIsImNvbnRleHQiLCJzdG10IiwicGFyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7QUFHQTs7Ozs7Ozs7O0lBU01BLFE7QUFFRixzQkFBWUMsR0FBWixFQUFnQztBQUFBLFlBQWZDLEtBQWUsdUVBQVAsS0FBTzs7QUFBQTs7QUFFNUIsNEJBQUssRUFBRUQsUUFBRixFQUFMLEVBQWNFLFFBQWQsR0FBeUJDLE1BQXpCOztBQUVBLGFBQUtDLElBQUwsR0FBWUosR0FBWjtBQUNBLGFBQUtLLFdBQUwsR0FBbUJKLEtBQW5CO0FBQ0EsYUFBS0EsS0FBTCxHQUFhSyxPQUFPQyxNQUFQLENBQWMsSUFBZCxDQUFiO0FBRUg7Ozs7OztBQVFEOzs7Ozs0QkFLSUMsRSxFQUFJOztBQUVKLGlCQUFLSixJQUFMLEdBQVlJLEVBQVo7QUFDQSxtQkFBTyxJQUFQO0FBRUg7O0FBRUQ7Ozs7Ozs7Ozs7OEJBT01DLEcsRUFBcUI7QUFBQSxnQkFBaEJDLE9BQWdCLHVFQUFOLElBQU07OztBQUV2QixnQkFBSUMsSUFBSjs7QUFFQSxnQkFBSSxLQUFLTixXQUFMLEdBQW1CLEtBQXZCLEVBQThCOztBQUUxQk0sdUJBQU8saUJBQU9DLEtBQVAsQ0FBYUgsR0FBYixDQUFQO0FBRUgsYUFKRCxNQUlPOztBQUVILG9CQUFJLEtBQUtSLEtBQUwsQ0FBV1EsR0FBWCxDQUFKLEVBQ0lFLE9BQU8sS0FBS1YsS0FBTCxDQUFXUSxHQUFYLENBQVAsQ0FESixLQUdJRSxPQUFPLGlCQUFPQyxLQUFQLENBQWFILEdBQWIsQ0FBUDtBQUVQOztBQUVERSxpQkFBS0gsRUFBTCxHQUFVLEtBQUtKLElBQWY7QUFDQU8saUJBQUtELE9BQUwsR0FBZUEsT0FBZjtBQUNBLG1CQUFPQyxJQUFQO0FBRUg7Ozs2QkE5Q1dILEUsRUFBbUI7QUFBQSxnQkFBZlAsS0FBZSx1RUFBUCxLQUFPOzs7QUFFM0IsbUJBQU8sSUFBSUYsUUFBSixDQUFhUyxFQUFiLEVBQWlCUCxLQUFqQixDQUFQO0FBRUg7Ozs7OztrQkE4Q1VGLFEiLCJmaWxlIjoiRGF0YWJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmVvZiBmcm9tICdiZW9mJztcbmltcG9ydCBQYXJzZXIgZnJvbSAnLi9QYXJzZXInO1xuXG5cbi8qKlxuICogRGF0YWJhc2Ugd3JhcHMgYXJvdW5kIHRoZSBub2RlIG1vbmdvZGIgYXBpXG4gKiB0byBhbGxvdyBzdGF0ZW1lbnRzIHRvIGJlIHBhcnNlZCBmcm9tIHN0cmluZ3MuXG4gKlxuICogSWYgcGFyc2luZyBzdGF0bWVudHMgcGVyIHJlcXVlc3QsIHRoZSBjYWNoZSBvcHRpb24gc2hvdWxkIGJlIHVzZWRcbiAqIHNvIHRvIGF2b2lkIHJlcGVhdGluZyB0aGUgc2FtZSBjb21wdXRhdGlvbiBwZXIgcmVxdWVzdC5cbiAqIEBwYXJhbSB7bW9uZ29kYi5EYXRhYmFzZX0gbWRiXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtjYWNoZT10cnVlXVxuICovXG5jbGFzcyBEYXRhYmFzZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihtZGIsIGNhY2hlID0gZmFsc2UpIHtcblxuICAgICAgICBiZW9mKHsgbWRiIH0pLm9wdGlvbmFsKCkub2JqZWN0KCk7XG5cbiAgICAgICAgdGhpcy5fbWRiID0gbWRiO1xuICAgICAgICB0aGlzLnNob3VsZENhY2hlID0gY2FjaGU7XG4gICAgICAgIHRoaXMuY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gICAgfVxuXG4gICAgc3RhdGljIHdyYXAoZGIsIGNhY2hlID0gZmFsc2UpIHtcblxuICAgICAgICByZXR1cm4gbmV3IERhdGFiYXNlKGRiLCBjYWNoZSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB1c2UgYSBkaWZmZXJlbnQgZGF0YWJhc2UgY29ubmVjdGlvbiwgY2FjaGVkIHN0YXRlbWVudHMgd2lsbCBjb250aW51ZSB0byB1c2VcbiAgICAgKiB0aGUgZGF0YWJhc2UgdGhleSB3ZXJlIGNyZWF0ZWQgd2l0aC5cbiAgICAgKiBAcGFyYW0ge21vbmdvZGIuRGF0YWJhc2V9IGRiXG4gICAgICovXG4gICAgdXNlKGRiKSB7XG5cbiAgICAgICAgdGhpcy5fbWRiID0gZGI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcGFyc2UgYSBzdGF0ZW1lbnQsIG9wdGlvbmFsbHkgY2FjaGluZyBpdCBpZiBjb25maWd1cmVkIHRvXG4gICAgICogZG8gc28uXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbY29udGV4dD1udWxsXSAtIG9wdGlvbmFsIGNvbnRleHQgdG8gY3JlYXRlIHRoZSBzdGF0ZW1lbnQgd2l0aC5cbiAgICAgKiBAcmV0dXJucyB7U3RhdGVtZW50fVxuICAgICAqL1xuICAgIHBhcnNlKHN0ciwgY29udGV4dCA9IG51bGwpIHtcblxuICAgICAgICB2YXIgc3RtdDtcblxuICAgICAgICBpZiAodGhpcy5zaG91bGRDYWNoZSA9IGZhbHNlKSB7XG5cbiAgICAgICAgICAgIHN0bXQgPSBQYXJzZXIucGFyc2Uoc3RyKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAodGhpcy5jYWNoZVtzdHJdKVxuICAgICAgICAgICAgICAgIHN0bXQgPSB0aGlzLmNhY2hlW3N0cl1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBzdG10ID0gUGFyc2VyLnBhcnNlKHN0cik7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHN0bXQuZGIgPSB0aGlzLl9tZGI7XG4gICAgICAgIHN0bXQuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHJldHVybiBzdG10O1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFiYXNlXG4iXX0=