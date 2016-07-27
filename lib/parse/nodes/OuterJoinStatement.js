'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node2 = require('./Node');

var _Node3 = _interopRequireDefault(_Node2);

var _propertySeek = require('property-seek');

var _propertySeek2 = _interopRequireDefault(_propertySeek);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * OuterJoinStatement 
 */

var OuterJoinStatement = function (_Node) {
    _inherits(OuterJoinStatement, _Node);

    function OuterJoinStatement(fields, collection, alias, where, modifiers, condition, location) {
        _classCallCheck(this, OuterJoinStatement);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(OuterJoinStatement).call(this));

        _this.type = 'outer-join';
        _this.collection = collection;
        _this.alias = alias;
        _this.fields = fields;
        _this.where = where;
        _this.modifiers = modifiers;
        _this.condition = condition;
        _this.location = location;

        return _this;
    }

    _createClass(OuterJoinStatement, [{
        key: 'apply',
        value: function apply(data, db, context) {
            var _this2 = this;

            var cursor;
            var alias = this.alias.asValue();
            var where = {};

            this.where.forEach(function (w) {
                return w.apply(where, context);
            });

            cursor = db.collection(this.collection.asValue(context)).find(where, this.fields);

            this.modifiers.forEach(function (m) {
                return m.apply(cursor);
            });

            return cursor.toArray().then(function (docs) {

                var boundary = data.length;
                var newDocs = data.concat(docs);
                var joined = [];

                return newDocs.map(function (newDoc, index) {

                    if (index < boundary) {

                        _propertySeek2.default.set(newDoc, alias, docs.filter(function (doc, i) {

                            if (_this2.condition.compare(newDoc, doc)) {
                                joined.push(i);
                                return true;
                            }
                        }));

                        return newDoc;
                    } else {

                        if (joined.indexOf(index - boundary) > -1) {

                            return null;
                        } else {

                            var o = {};
                            //Combine all that would join on the same 
                            //object if that object existed
                            _propertySeek2.default.set(o, alias, docs.filter(function (doc, i) {

                                if (_this2.condition.rightCompare(newDoc, doc)) {
                                    joined.push(i);
                                    return doc;
                                }
                            }));

                            return o;
                        }
                    }
                }).filter(function (o) {
                    return o;
                });
            });
        }
    }]);

    return OuterJoinStatement;
}(_Node3.default);

exports.default = OuterJoinStatement;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9PdXRlckpvaW5TdGF0ZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7OztJQUdNLGtCOzs7QUFFRixnQ0FBWSxNQUFaLEVBQW9CLFVBQXBCLEVBQWdDLEtBQWhDLEVBQXVDLEtBQXZDLEVBQThDLFNBQTlDLEVBQXlELFNBQXpELEVBQW9FLFFBQXBFLEVBQThFO0FBQUE7O0FBQUE7O0FBRzFFLGNBQUssSUFBTCxHQUFZLFlBQVo7QUFDQSxjQUFLLFVBQUwsR0FBa0IsVUFBbEI7QUFDQSxjQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0EsY0FBSyxNQUFMLEdBQWMsTUFBZDtBQUNBLGNBQUssS0FBTCxHQUFhLEtBQWI7QUFDQSxjQUFLLFNBQUwsR0FBaUIsU0FBakI7QUFDQSxjQUFLLFNBQUwsR0FBaUIsU0FBakI7QUFDQSxjQUFLLFFBQUwsR0FBZ0IsUUFBaEI7O0FBVjBFO0FBWTdFOzs7OzhCQUVLLEksRUFBTSxFLEVBQUksTyxFQUFTO0FBQUE7O0FBRXJCLGdCQUFJLE1BQUo7QUFDQSxnQkFBSSxRQUFRLEtBQUssS0FBTCxDQUFXLE9BQVgsRUFBWjtBQUNBLGdCQUFJLFFBQVEsRUFBWjs7QUFFQSxpQkFBSyxLQUFMLENBQVcsT0FBWCxDQUFtQjtBQUFBLHVCQUFLLEVBQUUsS0FBRixDQUFRLEtBQVIsRUFBZSxPQUFmLENBQUw7QUFBQSxhQUFuQjs7QUFFQSxxQkFBUyxHQUFHLFVBQUgsQ0FBYyxLQUFLLFVBQUwsQ0FBZ0IsT0FBaEIsQ0FBd0IsT0FBeEIsQ0FBZCxFQUNULElBRFMsQ0FDSixLQURJLEVBQ0csS0FBSyxNQURSLENBQVQ7O0FBR0EsaUJBQUssU0FBTCxDQUFlLE9BQWYsQ0FBdUI7QUFBQSx1QkFBSyxFQUFFLEtBQUYsQ0FBUSxNQUFSLENBQUw7QUFBQSxhQUF2Qjs7QUFFQSxtQkFBTyxPQUFPLE9BQVAsR0FDUCxJQURPLENBQ0YsZ0JBQVE7O0FBRVQsb0JBQUksV0FBVyxLQUFLLE1BQXBCO0FBQ0Esb0JBQUksVUFBVSxLQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWQ7QUFDQSxvQkFBSSxTQUFTLEVBQWI7O0FBRUEsdUJBQU8sUUFBUSxHQUFSLENBQVksVUFBQyxNQUFELEVBQVMsS0FBVCxFQUFtQjs7QUFFbEMsd0JBQUksUUFBUSxRQUFaLEVBQXNCOztBQUVsQiwrQ0FBUyxHQUFULENBQWEsTUFBYixFQUFxQixLQUFyQixFQUE0QixLQUFLLE1BQUwsQ0FBWSxVQUFDLEdBQUQsRUFBTSxDQUFOLEVBQVk7O0FBRWhELGdDQUFJLE9BQUssU0FBTCxDQUFlLE9BQWYsQ0FBdUIsTUFBdkIsRUFBK0IsR0FBL0IsQ0FBSixFQUF5QztBQUNyQyx1Q0FBTyxJQUFQLENBQVksQ0FBWjtBQUNBLHVDQUFPLElBQVA7QUFDSDtBQUVKLHlCQVAyQixDQUE1Qjs7QUFTQSwrQkFBTyxNQUFQO0FBRUgscUJBYkQsTUFhTzs7QUFHSCw0QkFBSSxPQUFPLE9BQVAsQ0FBZSxRQUFRLFFBQXZCLElBQW1DLENBQUMsQ0FBeEMsRUFBMkM7O0FBRXZDLG1DQUFPLElBQVA7QUFFSCx5QkFKRCxNQUlPOztBQUVILGdDQUFJLElBQUksRUFBUjtBQUNBO0FBQ0E7QUFDQSxtREFBUyxHQUFULENBQWEsQ0FBYixFQUFnQixLQUFoQixFQUF1QixLQUFLLE1BQUwsQ0FBWSxVQUFDLEdBQUQsRUFBTSxDQUFOLEVBQVk7O0FBRTNDLG9DQUFJLE9BQUssU0FBTCxDQUFlLFlBQWYsQ0FBNEIsTUFBNUIsRUFBb0MsR0FBcEMsQ0FBSixFQUE4QztBQUMxQywyQ0FBTyxJQUFQLENBQVksQ0FBWjtBQUNBLDJDQUFPLEdBQVA7QUFDSDtBQUVKLDZCQVBzQixDQUF2Qjs7QUFTQSxtQ0FBTyxDQUFQO0FBRUg7QUFFSjtBQUVKLGlCQTFDTSxFQTBDSixNQTFDSSxDQTBDRztBQUFBLDJCQUFLLENBQUw7QUFBQSxpQkExQ0gsQ0FBUDtBQTJDSCxhQWxETSxDQUFQO0FBb0RIOzs7Ozs7a0JBSVUsa0IiLCJmaWxlIjoiT3V0ZXJKb2luU3RhdGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcbmltcG9ydCBQcm9wZXJ0eSBmcm9tICdwcm9wZXJ0eS1zZWVrJztcblxuLyoqXG4gKiBPdXRlckpvaW5TdGF0ZW1lbnQgXG4gKi9cbmNsYXNzIE91dGVySm9pblN0YXRlbWVudCBleHRlbmRzIE5vZGUge1xuXG4gICAgY29uc3RydWN0b3IoZmllbGRzLCBjb2xsZWN0aW9uLCBhbGlhcywgd2hlcmUsIG1vZGlmaWVycywgY29uZGl0aW9uLCBsb2NhdGlvbikge1xuXG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudHlwZSA9ICdvdXRlci1qb2luJztcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uID0gY29sbGVjdGlvbjtcbiAgICAgICAgdGhpcy5hbGlhcyA9IGFsaWFzO1xuICAgICAgICB0aGlzLmZpZWxkcyA9IGZpZWxkcztcbiAgICAgICAgdGhpcy53aGVyZSA9IHdoZXJlO1xuICAgICAgICB0aGlzLm1vZGlmaWVycyA9IG1vZGlmaWVycztcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIGFwcGx5KGRhdGEsIGRiLCBjb250ZXh0KSB7XG5cbiAgICAgICAgdmFyIGN1cnNvcjtcbiAgICAgICAgdmFyIGFsaWFzID0gdGhpcy5hbGlhcy5hc1ZhbHVlKCk7XG4gICAgICAgIHZhciB3aGVyZSA9IHt9O1xuXG4gICAgICAgIHRoaXMud2hlcmUuZm9yRWFjaCh3ID0+IHcuYXBwbHkod2hlcmUsIGNvbnRleHQpKTtcblxuICAgICAgICBjdXJzb3IgPSBkYi5jb2xsZWN0aW9uKHRoaXMuY29sbGVjdGlvbi5hc1ZhbHVlKGNvbnRleHQpKS5cbiAgICAgICAgZmluZCh3aGVyZSwgdGhpcy5maWVsZHMpO1xuXG4gICAgICAgIHRoaXMubW9kaWZpZXJzLmZvckVhY2gobSA9PiBtLmFwcGx5KGN1cnNvcikpO1xuXG4gICAgICAgIHJldHVybiBjdXJzb3IudG9BcnJheSgpLlxuICAgICAgICB0aGVuKGRvY3MgPT4ge1xuXG4gICAgICAgICAgICB2YXIgYm91bmRhcnkgPSBkYXRhLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciBuZXdEb2NzID0gZGF0YS5jb25jYXQoZG9jcyk7XG4gICAgICAgICAgICB2YXIgam9pbmVkID0gW107XG5cbiAgICAgICAgICAgIHJldHVybiBuZXdEb2NzLm1hcCgobmV3RG9jLCBpbmRleCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4IDwgYm91bmRhcnkpIHtcblxuICAgICAgICAgICAgICAgICAgICBQcm9wZXJ0eS5zZXQobmV3RG9jLCBhbGlhcywgZG9jcy5maWx0ZXIoKGRvYywgaSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25kaXRpb24uY29tcGFyZShuZXdEb2MsIGRvYykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqb2luZWQucHVzaChpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ld0RvYztcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cblxuICAgICAgICAgICAgICAgICAgICBpZiAoam9pbmVkLmluZGV4T2YoaW5kZXggLSBib3VuZGFyeSkgPiAtMSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9Db21iaW5lIGFsbCB0aGF0IHdvdWxkIGpvaW4gb24gdGhlIHNhbWUgXG4gICAgICAgICAgICAgICAgICAgICAgICAvL29iamVjdCBpZiB0aGF0IG9iamVjdCBleGlzdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9wZXJ0eS5zZXQobywgYWxpYXMsIGRvY3MuZmlsdGVyKChkb2MsIGkpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbmRpdGlvbi5yaWdodENvbXBhcmUobmV3RG9jLCBkb2MpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpvaW5lZC5wdXNoKGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZG9jO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbztcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pLmZpbHRlcihvID0+IG8pO1xuICAgICAgICB9KTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBPdXRlckpvaW5TdGF0ZW1lbnRcbiJdfQ==