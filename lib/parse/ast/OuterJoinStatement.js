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

        var _this = _possibleConstructorReturn(this, (OuterJoinStatement.__proto__ || Object.getPrototypeOf(OuterJoinStatement)).call(this));

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9hc3QvT3V0ZXJKb2luU3RhdGVtZW50LmpzIl0sIm5hbWVzIjpbIk91dGVySm9pblN0YXRlbWVudCIsImZpZWxkcyIsImNvbGxlY3Rpb24iLCJhbGlhcyIsIndoZXJlIiwibW9kaWZpZXJzIiwiY29uZGl0aW9uIiwibG9jYXRpb24iLCJ0eXBlIiwiZGF0YSIsImRiIiwiY29udGV4dCIsImN1cnNvciIsImFzVmFsdWUiLCJmb3JFYWNoIiwidyIsImFwcGx5IiwiZmluZCIsIm0iLCJ0b0FycmF5IiwidGhlbiIsImJvdW5kYXJ5IiwibGVuZ3RoIiwibmV3RG9jcyIsImNvbmNhdCIsImRvY3MiLCJqb2luZWQiLCJtYXAiLCJuZXdEb2MiLCJpbmRleCIsInNldCIsImZpbHRlciIsImRvYyIsImkiLCJjb21wYXJlIiwicHVzaCIsImluZGV4T2YiLCJvIiwicmlnaHRDb21wYXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7SUFHTUEsa0I7OztBQUVGLGdDQUFZQyxNQUFaLEVBQW9CQyxVQUFwQixFQUFnQ0MsS0FBaEMsRUFBdUNDLEtBQXZDLEVBQThDQyxTQUE5QyxFQUF5REMsU0FBekQsRUFBb0VDLFFBQXBFLEVBQThFO0FBQUE7O0FBQUE7O0FBRzFFLGNBQUtDLElBQUwsR0FBWSxZQUFaO0FBQ0EsY0FBS04sVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxjQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxjQUFLRixNQUFMLEdBQWNBLE1BQWQ7QUFDQSxjQUFLRyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxjQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLGNBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsY0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7O0FBVjBFO0FBWTdFOzs7OzhCQUVLRSxJLEVBQU1DLEUsRUFBSUMsTyxFQUFTO0FBQUE7O0FBRXJCLGdCQUFJQyxNQUFKO0FBQ0EsZ0JBQUlULFFBQVEsS0FBS0EsS0FBTCxDQUFXVSxPQUFYLEVBQVo7QUFDQSxnQkFBSVQsUUFBUSxFQUFaOztBQUVBLGlCQUFLQSxLQUFMLENBQVdVLE9BQVgsQ0FBbUI7QUFBQSx1QkFBS0MsRUFBRUMsS0FBRixDQUFRWixLQUFSLEVBQWVPLE9BQWYsQ0FBTDtBQUFBLGFBQW5COztBQUVBQyxxQkFBU0YsR0FBR1IsVUFBSCxDQUFjLEtBQUtBLFVBQUwsQ0FBZ0JXLE9BQWhCLENBQXdCRixPQUF4QixDQUFkLEVBQ1RNLElBRFMsQ0FDSmIsS0FESSxFQUNHLEtBQUtILE1BRFIsQ0FBVDs7QUFHQSxpQkFBS0ksU0FBTCxDQUFlUyxPQUFmLENBQXVCO0FBQUEsdUJBQUtJLEVBQUVGLEtBQUYsQ0FBUUosTUFBUixDQUFMO0FBQUEsYUFBdkI7O0FBRUEsbUJBQU9BLE9BQU9PLE9BQVAsR0FDUEMsSUFETyxDQUNGLGdCQUFROztBQUVULG9CQUFJQyxXQUFXWixLQUFLYSxNQUFwQjtBQUNBLG9CQUFJQyxVQUFVZCxLQUFLZSxNQUFMLENBQVlDLElBQVosQ0FBZDtBQUNBLG9CQUFJQyxTQUFTLEVBQWI7O0FBRUEsdUJBQU9ILFFBQVFJLEdBQVIsQ0FBWSxVQUFDQyxNQUFELEVBQVNDLEtBQVQsRUFBbUI7O0FBRWxDLHdCQUFJQSxRQUFRUixRQUFaLEVBQXNCOztBQUVsQiwrQ0FBU1MsR0FBVCxDQUFhRixNQUFiLEVBQXFCekIsS0FBckIsRUFBNEJzQixLQUFLTSxNQUFMLENBQVksVUFBQ0MsR0FBRCxFQUFNQyxDQUFOLEVBQVk7O0FBRWhELGdDQUFJLE9BQUszQixTQUFMLENBQWU0QixPQUFmLENBQXVCTixNQUF2QixFQUErQkksR0FBL0IsQ0FBSixFQUF5QztBQUNyQ04sdUNBQU9TLElBQVAsQ0FBWUYsQ0FBWjtBQUNBLHVDQUFPLElBQVA7QUFDSDtBQUVKLHlCQVAyQixDQUE1Qjs7QUFTQSwrQkFBT0wsTUFBUDtBQUVILHFCQWJELE1BYU87O0FBR0gsNEJBQUlGLE9BQU9VLE9BQVAsQ0FBZVAsUUFBUVIsUUFBdkIsSUFBbUMsQ0FBQyxDQUF4QyxFQUEyQzs7QUFFdkMsbUNBQU8sSUFBUDtBQUVILHlCQUpELE1BSU87O0FBRUgsZ0NBQUlnQixJQUFJLEVBQVI7QUFDQTtBQUNBO0FBQ0EsbURBQVNQLEdBQVQsQ0FBYU8sQ0FBYixFQUFnQmxDLEtBQWhCLEVBQXVCc0IsS0FBS00sTUFBTCxDQUFZLFVBQUNDLEdBQUQsRUFBTUMsQ0FBTixFQUFZOztBQUUzQyxvQ0FBSSxPQUFLM0IsU0FBTCxDQUFlZ0MsWUFBZixDQUE0QlYsTUFBNUIsRUFBb0NJLEdBQXBDLENBQUosRUFBOEM7QUFDMUNOLDJDQUFPUyxJQUFQLENBQVlGLENBQVo7QUFDQSwyQ0FBT0QsR0FBUDtBQUNIO0FBRUosNkJBUHNCLENBQXZCOztBQVNBLG1DQUFPSyxDQUFQO0FBRUg7QUFFSjtBQUVKLGlCQTFDTSxFQTBDSk4sTUExQ0ksQ0EwQ0c7QUFBQSwyQkFBS00sQ0FBTDtBQUFBLGlCQTFDSCxDQUFQO0FBMkNILGFBbERNLENBQVA7QUFvREg7Ozs7OztrQkFJVXJDLGtCIiwiZmlsZSI6Ik91dGVySm9pblN0YXRlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5pbXBvcnQgUHJvcGVydHkgZnJvbSAncHJvcGVydHktc2Vlayc7XG5cbi8qKlxuICogT3V0ZXJKb2luU3RhdGVtZW50IFxuICovXG5jbGFzcyBPdXRlckpvaW5TdGF0ZW1lbnQgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGZpZWxkcywgY29sbGVjdGlvbiwgYWxpYXMsIHdoZXJlLCBtb2RpZmllcnMsIGNvbmRpdGlvbiwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnb3V0ZXItam9pbic7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbiA9IGNvbGxlY3Rpb247XG4gICAgICAgIHRoaXMuYWxpYXMgPSBhbGlhcztcbiAgICAgICAgdGhpcy5maWVsZHMgPSBmaWVsZHM7XG4gICAgICAgIHRoaXMud2hlcmUgPSB3aGVyZTtcbiAgICAgICAgdGhpcy5tb2RpZmllcnMgPSBtb2RpZmllcnM7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICBhcHBseShkYXRhLCBkYiwgY29udGV4dCkge1xuXG4gICAgICAgIHZhciBjdXJzb3I7XG4gICAgICAgIHZhciBhbGlhcyA9IHRoaXMuYWxpYXMuYXNWYWx1ZSgpO1xuICAgICAgICB2YXIgd2hlcmUgPSB7fTtcblxuICAgICAgICB0aGlzLndoZXJlLmZvckVhY2godyA9PiB3LmFwcGx5KHdoZXJlLCBjb250ZXh0KSk7XG5cbiAgICAgICAgY3Vyc29yID0gZGIuY29sbGVjdGlvbih0aGlzLmNvbGxlY3Rpb24uYXNWYWx1ZShjb250ZXh0KSkuXG4gICAgICAgIGZpbmQod2hlcmUsIHRoaXMuZmllbGRzKTtcblxuICAgICAgICB0aGlzLm1vZGlmaWVycy5mb3JFYWNoKG0gPT4gbS5hcHBseShjdXJzb3IpKTtcblxuICAgICAgICByZXR1cm4gY3Vyc29yLnRvQXJyYXkoKS5cbiAgICAgICAgdGhlbihkb2NzID0+IHtcblxuICAgICAgICAgICAgdmFyIGJvdW5kYXJ5ID0gZGF0YS5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgbmV3RG9jcyA9IGRhdGEuY29uY2F0KGRvY3MpO1xuICAgICAgICAgICAgdmFyIGpvaW5lZCA9IFtdO1xuXG4gICAgICAgICAgICByZXR1cm4gbmV3RG9jcy5tYXAoKG5ld0RvYywgaW5kZXgpID0+IHtcblxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IGJvdW5kYXJ5KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgUHJvcGVydHkuc2V0KG5ld0RvYywgYWxpYXMsIGRvY3MuZmlsdGVyKChkb2MsIGkpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29uZGl0aW9uLmNvbXBhcmUobmV3RG9jLCBkb2MpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgam9pbmVkLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXdEb2M7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGpvaW5lZC5pbmRleE9mKGluZGV4IC0gYm91bmRhcnkpID4gLTEpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG8gPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vQ29tYmluZSBhbGwgdGhhdCB3b3VsZCBqb2luIG9uIHRoZSBzYW1lIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy9vYmplY3QgaWYgdGhhdCBvYmplY3QgZXhpc3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvcGVydHkuc2V0KG8sIGFsaWFzLCBkb2NzLmZpbHRlcigoZG9jLCBpKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25kaXRpb24ucmlnaHRDb21wYXJlKG5ld0RvYywgZG9jKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqb2luZWQucHVzaChpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRvYztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG87XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KS5maWx0ZXIobyA9PiBvKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgT3V0ZXJKb2luU3RhdGVtZW50XG4iXX0=