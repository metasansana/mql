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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3QvTm9kZS5qcyJdLCJuYW1lcyI6WyJOb2RlIiwiZmlsZSIsImNodW5rIiwiU291cmNlTm9kZSIsImxvY2F0aW9uIiwiZmlyc3RfbGluZSIsImZpcnN0X2NvbHVtbiIsImxpc3QiLCJtYXAiLCJtIiwidHJhbnNwaWxlIiwiam9pbiIsIm5vZGUiLCJvIiwiZm9yRWFjaCIsImEiLCJpIiwiYWxsIiwiYWRkIiwiY29tcGlsZSIsImxlbmd0aCIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O0FBRUE7OztJQUdNQSxJOzs7Ozs7O21DQUVTQyxJLEVBQU1DLEssRUFBTzs7QUFFcEIsbUJBQU8sSUFBSSxvQkFBVUMsVUFBZCxDQUF5QixLQUFLQyxRQUFMLENBQWNDLFVBQXZDLEVBQ0gsS0FBS0QsUUFBTCxDQUFjRSxZQURYLEVBRUhMLElBRkcsRUFHSEMsU0FBUyxJQUhOLENBQVA7QUFLSDs7O3NDQUVhSyxJLEVBQU07QUFDaEIsbUJBQU9BLEtBQUtDLEdBQUwsQ0FBUztBQUFBLHVCQUFLQyxFQUFFQyxTQUFGLEVBQUw7QUFBQSxhQUFULEVBQTZCQyxJQUE3QixDQUFrQyxHQUFsQyxLQUEwQyxFQUFqRDtBQUVIOzs7b0NBRVdKLEksRUFBTUssSSxFQUFNQyxDLEVBQUc7O0FBRXZCTixpQkFBS08sT0FBTCxDQUFhLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFPQyxHQUFQLEVBQWU7O0FBRXhCTCxxQkFBS00sR0FBTCxDQUFTSCxFQUFFSSxPQUFGLENBQVVOLENBQVYsQ0FBVDs7QUFFQSxvQkFBSUcsSUFBSUMsSUFBSUcsTUFBSixHQUFhLENBQXJCLEVBQ0lSLEtBQUtNLEdBQUwsQ0FBUyxHQUFUO0FBRVAsYUFQRDs7QUFTQSxtQkFBT04sSUFBUDtBQUVIOzs7bUNBRVU7O0FBRVAsbUJBQU9TLEtBQUtDLFNBQUwsQ0FBZSxJQUFmLENBQVA7QUFFSDs7Ozs7O2tCQUdVdEIsSSIsImZpbGUiOiJOb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNvdXJjZU1hcCBmcm9tICdzb3VyY2UtbWFwJztcblxuLyoqXG4gKiBOb2RlIHBhcmVudCBvZiBhbGwgdGhlIG5vZGVzXG4gKi9cbmNsYXNzIE5vZGUge1xuXG4gICAgc291cmNlTm9kZShmaWxlLCBjaHVuaykge1xuXG4gICAgICAgIHJldHVybiBuZXcgc291cmNlTWFwLlNvdXJjZU5vZGUodGhpcy5sb2NhdGlvbi5maXJzdF9saW5lLFxuICAgICAgICAgICAgdGhpcy5sb2NhdGlvbi5maXJzdF9jb2x1bW4sXG4gICAgICAgICAgICBmaWxlLFxuICAgICAgICAgICAgY2h1bmsgfHwgbnVsbCk7XG5cbiAgICB9XG5cbiAgICB0cmFuc3BpbGVMaXN0KGxpc3QpIHtcbiAgICAgICAgcmV0dXJuIGxpc3QubWFwKG0gPT4gbS50cmFuc3BpbGUoKSkuam9pbignLCcpIHx8ICcnO1xuXG4gICAgfVxuXG4gICAgY29tcGlsZUxpc3QobGlzdCwgbm9kZSwgbykge1xuXG4gICAgICAgIGxpc3QuZm9yRWFjaCgoYSwgaSwgYWxsKSA9PiB7XG5cbiAgICAgICAgICAgIG5vZGUuYWRkKGEuY29tcGlsZShvKSlcblxuICAgICAgICAgICAgaWYgKGkgPCBhbGwubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgICAgICBub2RlLmFkZCgnLCcpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBub2RlO1xuXG4gICAgfVxuXG4gICAgdG9TdHJpbmcoKSB7XG5cbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMpO1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb2RlXG4iXX0=