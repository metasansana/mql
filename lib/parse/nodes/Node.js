'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sourceMap = require('source-map');

var _sourceMap2 = _interopRequireDefault(_sourceMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Node parent of all the nodes
 */

var Node = function () {
    function Node() {
        _classCallCheck(this, Node);
    }

    _createClass(Node, [{
        key: 'sourceNode',
        value: function sourceNode(file, chunk) {

            return new _sourceMap2.default.SourceNode(this.location.first_line, this.location.first_column, file, chunk || null);
        }
    }, {
        key: 'transpileList',
        value: function transpileList(list) {
            return list.map(function (m) {
                return m.transpile();
            }).join(',') || '';
        }
    }, {
        key: 'compileList',
        value: function compileList(list, node, o) {

            list.forEach(function (a, i, all) {

                node.add(a.compile(o));

                if (i < all.length - 1) node.add(',');
            });

            return node;
        }
    }, {
        key: 'toString',
        value: function toString() {

            return JSON.stringify(this);
        }
    }]);

    return Node;
}();

exports.default = Node;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9Ob2RlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O0FBRUE7Ozs7SUFHTSxJOzs7Ozs7O21DQUVTLEksRUFBTSxLLEVBQU87O0FBRXBCLG1CQUFPLElBQUksb0JBQVUsVUFBZCxDQUF5QixLQUFLLFFBQUwsQ0FBYyxVQUF2QyxFQUNILEtBQUssUUFBTCxDQUFjLFlBRFgsRUFFSCxJQUZHLEVBR0gsU0FBUyxJQUhOLENBQVA7QUFLSDs7O3NDQUVhLEksRUFBTTtBQUNoQixtQkFBTyxLQUFLLEdBQUwsQ0FBUztBQUFBLHVCQUFLLEVBQUUsU0FBRixFQUFMO0FBQUEsYUFBVCxFQUE2QixJQUE3QixDQUFrQyxHQUFsQyxLQUEwQyxFQUFqRDtBQUVIOzs7b0NBRVcsSSxFQUFNLEksRUFBTSxDLEVBQUc7O0FBRXZCLGlCQUFLLE9BQUwsQ0FBYSxVQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sR0FBUCxFQUFlOztBQUV4QixxQkFBSyxHQUFMLENBQVMsRUFBRSxPQUFGLENBQVUsQ0FBVixDQUFUOztBQUVBLG9CQUFJLElBQUksSUFBSSxNQUFKLEdBQWEsQ0FBckIsRUFDSSxLQUFLLEdBQUwsQ0FBUyxHQUFUO0FBRVAsYUFQRDs7QUFTQSxtQkFBTyxJQUFQO0FBRUg7OzttQ0FFVTs7QUFFUCxtQkFBTyxLQUFLLFNBQUwsQ0FBZSxJQUFmLENBQVA7QUFFSDs7Ozs7O2tCQUdVLEkiLCJmaWxlIjoiTm9kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzb3VyY2VNYXAgZnJvbSAnc291cmNlLW1hcCc7XG5cbi8qKlxuICogTm9kZSBwYXJlbnQgb2YgYWxsIHRoZSBub2Rlc1xuICovXG5jbGFzcyBOb2RlIHtcblxuICAgIHNvdXJjZU5vZGUoZmlsZSwgY2h1bmspIHtcblxuICAgICAgICByZXR1cm4gbmV3IHNvdXJjZU1hcC5Tb3VyY2VOb2RlKHRoaXMubG9jYXRpb24uZmlyc3RfbGluZSxcbiAgICAgICAgICAgIHRoaXMubG9jYXRpb24uZmlyc3RfY29sdW1uLFxuICAgICAgICAgICAgZmlsZSxcbiAgICAgICAgICAgIGNodW5rIHx8IG51bGwpO1xuXG4gICAgfVxuXG4gICAgdHJhbnNwaWxlTGlzdChsaXN0KSB7XG4gICAgICAgIHJldHVybiBsaXN0Lm1hcChtID0+IG0udHJhbnNwaWxlKCkpLmpvaW4oJywnKSB8fCAnJztcblxuICAgIH1cblxuICAgIGNvbXBpbGVMaXN0KGxpc3QsIG5vZGUsIG8pIHtcblxuICAgICAgICBsaXN0LmZvckVhY2goKGEsIGksIGFsbCkgPT4ge1xuXG4gICAgICAgICAgICBub2RlLmFkZChhLmNvbXBpbGUobykpXG5cbiAgICAgICAgICAgIGlmIChpIDwgYWxsLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgICAgbm9kZS5hZGQoJywnKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbm9kZTtcblxuICAgIH1cblxuICAgIHRvU3RyaW5nKCkge1xuXG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzKTtcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTm9kZVxuIl19