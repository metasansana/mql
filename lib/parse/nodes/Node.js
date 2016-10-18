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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9Ob2RlLmpzIl0sIm5hbWVzIjpbIk5vZGUiLCJmaWxlIiwiY2h1bmsiLCJTb3VyY2VOb2RlIiwibG9jYXRpb24iLCJmaXJzdF9saW5lIiwiZmlyc3RfY29sdW1uIiwibGlzdCIsIm1hcCIsIm0iLCJ0cmFuc3BpbGUiLCJqb2luIiwibm9kZSIsIm8iLCJmb3JFYWNoIiwiYSIsImkiLCJhbGwiLCJhZGQiLCJjb21waWxlIiwibGVuZ3RoIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7QUFFQTs7O0lBR01BLEk7Ozs7Ozs7bUNBRVNDLEksRUFBTUMsSyxFQUFPOztBQUVwQixtQkFBTyxJQUFJLG9CQUFVQyxVQUFkLENBQXlCLEtBQUtDLFFBQUwsQ0FBY0MsVUFBdkMsRUFDSCxLQUFLRCxRQUFMLENBQWNFLFlBRFgsRUFFSEwsSUFGRyxFQUdIQyxTQUFTLElBSE4sQ0FBUDtBQUtIOzs7c0NBRWFLLEksRUFBTTtBQUNoQixtQkFBT0EsS0FBS0MsR0FBTCxDQUFTO0FBQUEsdUJBQUtDLEVBQUVDLFNBQUYsRUFBTDtBQUFBLGFBQVQsRUFBNkJDLElBQTdCLENBQWtDLEdBQWxDLEtBQTBDLEVBQWpEO0FBRUg7OztvQ0FFV0osSSxFQUFNSyxJLEVBQU1DLEMsRUFBRzs7QUFFdkJOLGlCQUFLTyxPQUFMLENBQWEsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQU9DLEdBQVAsRUFBZTs7QUFFeEJMLHFCQUFLTSxHQUFMLENBQVNILEVBQUVJLE9BQUYsQ0FBVU4sQ0FBVixDQUFUOztBQUVBLG9CQUFJRyxJQUFJQyxJQUFJRyxNQUFKLEdBQWEsQ0FBckIsRUFDSVIsS0FBS00sR0FBTCxDQUFTLEdBQVQ7QUFFUCxhQVBEOztBQVNBLG1CQUFPTixJQUFQO0FBRUg7OzttQ0FFVTs7QUFFUCxtQkFBT1MsS0FBS0MsU0FBTCxDQUFlLElBQWYsQ0FBUDtBQUVIOzs7Ozs7a0JBR1V0QixJIiwiZmlsZSI6Ik5vZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc291cmNlTWFwIGZyb20gJ3NvdXJjZS1tYXAnO1xuXG4vKipcbiAqIE5vZGUgcGFyZW50IG9mIGFsbCB0aGUgbm9kZXNcbiAqL1xuY2xhc3MgTm9kZSB7XG5cbiAgICBzb3VyY2VOb2RlKGZpbGUsIGNodW5rKSB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBzb3VyY2VNYXAuU291cmNlTm9kZSh0aGlzLmxvY2F0aW9uLmZpcnN0X2xpbmUsXG4gICAgICAgICAgICB0aGlzLmxvY2F0aW9uLmZpcnN0X2NvbHVtbixcbiAgICAgICAgICAgIGZpbGUsXG4gICAgICAgICAgICBjaHVuayB8fCBudWxsKTtcblxuICAgIH1cblxuICAgIHRyYW5zcGlsZUxpc3QobGlzdCkge1xuICAgICAgICByZXR1cm4gbGlzdC5tYXAobSA9PiBtLnRyYW5zcGlsZSgpKS5qb2luKCcsJykgfHwgJyc7XG5cbiAgICB9XG5cbiAgICBjb21waWxlTGlzdChsaXN0LCBub2RlLCBvKSB7XG5cbiAgICAgICAgbGlzdC5mb3JFYWNoKChhLCBpLCBhbGwpID0+IHtcblxuICAgICAgICAgICAgbm9kZS5hZGQoYS5jb21waWxlKG8pKVxuXG4gICAgICAgICAgICBpZiAoaSA8IGFsbC5sZW5ndGggLSAxKVxuICAgICAgICAgICAgICAgIG5vZGUuYWRkKCcsJyk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG5cbiAgICB9XG5cbiAgICB0b1N0cmluZygpIHtcblxuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcyk7XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vZGVcbiJdfQ==