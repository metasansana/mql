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
            var fields = {
                _id: false
            };

            fields = this.fields.reduce(function (prev, curr) {
                return curr.apply(prev, context);
            }, fields);

            this.where.forEach(function (w) {
                return w.apply(where, context);
            });

            cursor = db.collection(this.collection.asValue(context)).find(where, fields);

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3QvT3V0ZXJKb2luU3RhdGVtZW50LmpzIl0sIm5hbWVzIjpbIk91dGVySm9pblN0YXRlbWVudCIsImZpZWxkcyIsImNvbGxlY3Rpb24iLCJhbGlhcyIsIndoZXJlIiwibW9kaWZpZXJzIiwiY29uZGl0aW9uIiwibG9jYXRpb24iLCJ0eXBlIiwiZGF0YSIsImRiIiwiY29udGV4dCIsImN1cnNvciIsImFzVmFsdWUiLCJfaWQiLCJyZWR1Y2UiLCJwcmV2IiwiY3VyciIsImFwcGx5IiwiZm9yRWFjaCIsInciLCJmaW5kIiwibSIsInRvQXJyYXkiLCJ0aGVuIiwiYm91bmRhcnkiLCJsZW5ndGgiLCJuZXdEb2NzIiwiY29uY2F0IiwiZG9jcyIsImpvaW5lZCIsIm1hcCIsIm5ld0RvYyIsImluZGV4Iiwic2V0IiwiZmlsdGVyIiwiZG9jIiwiaSIsImNvbXBhcmUiLCJwdXNoIiwiaW5kZXhPZiIsIm8iLCJyaWdodENvbXBhcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUE7OztJQUdNQSxrQjs7O0FBRUYsZ0NBQVlDLE1BQVosRUFBb0JDLFVBQXBCLEVBQWdDQyxLQUFoQyxFQUF1Q0MsS0FBdkMsRUFBOENDLFNBQTlDLEVBQXlEQyxTQUF6RCxFQUFvRUMsUUFBcEUsRUFBOEU7QUFBQTs7QUFBQTs7QUFHMUUsY0FBS0MsSUFBTCxHQUFZLFlBQVo7QUFDQSxjQUFLTixVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLGNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGNBQUtGLE1BQUwsR0FBY0EsTUFBZDtBQUNBLGNBQUtHLEtBQUwsR0FBYUEsS0FBYjtBQUNBLGNBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsY0FBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxjQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjs7QUFWMEU7QUFZN0U7Ozs7OEJBRUtFLEksRUFBTUMsRSxFQUFJQyxPLEVBQVM7QUFBQTs7QUFFckIsZ0JBQUlDLE1BQUo7QUFDQSxnQkFBSVQsUUFBUSxLQUFLQSxLQUFMLENBQVdVLE9BQVgsRUFBWjtBQUNBLGdCQUFJVCxRQUFRLEVBQVo7QUFDTixnQkFBSUgsU0FBUztBQUNIYSxxQkFBSztBQURGLGFBQWI7O0FBSU1iLHFCQUFTLEtBQUtBLE1BQUwsQ0FBWWMsTUFBWixDQUFtQixVQUFDQyxJQUFELEVBQU9DLElBQVA7QUFBQSx1QkFBZ0JBLEtBQUtDLEtBQUwsQ0FBV0YsSUFBWCxFQUFpQkwsT0FBakIsQ0FBaEI7QUFBQSxhQUFuQixFQUE4RFYsTUFBOUQsQ0FBVDs7QUFFQSxpQkFBS0csS0FBTCxDQUFXZSxPQUFYLENBQW1CO0FBQUEsdUJBQUtDLEVBQUVGLEtBQUYsQ0FBUWQsS0FBUixFQUFlTyxPQUFmLENBQUw7QUFBQSxhQUFuQjs7QUFFQUMscUJBQVNGLEdBQUdSLFVBQUgsQ0FBYyxLQUFLQSxVQUFMLENBQWdCVyxPQUFoQixDQUF3QkYsT0FBeEIsQ0FBZCxFQUNUVSxJQURTLENBQ0pqQixLQURJLEVBQ0dILE1BREgsQ0FBVDs7QUFHQSxpQkFBS0ksU0FBTCxDQUFlYyxPQUFmLENBQXVCO0FBQUEsdUJBQUtHLEVBQUVKLEtBQUYsQ0FBUU4sTUFBUixDQUFMO0FBQUEsYUFBdkI7O0FBRUEsbUJBQU9BLE9BQU9XLE9BQVAsR0FDUEMsSUFETyxDQUNGLGdCQUFROztBQUVULG9CQUFJQyxXQUFXaEIsS0FBS2lCLE1BQXBCO0FBQ0Esb0JBQUlDLFVBQVVsQixLQUFLbUIsTUFBTCxDQUFZQyxJQUFaLENBQWQ7QUFDQSxvQkFBSUMsU0FBUyxFQUFiOztBQUVBLHVCQUFPSCxRQUFRSSxHQUFSLENBQVksVUFBQ0MsTUFBRCxFQUFTQyxLQUFULEVBQW1COztBQUVsQyx3QkFBSUEsUUFBUVIsUUFBWixFQUFzQjs7QUFFbEIsK0NBQVNTLEdBQVQsQ0FBYUYsTUFBYixFQUFxQjdCLEtBQXJCLEVBQTRCMEIsS0FBS00sTUFBTCxDQUFZLFVBQUNDLEdBQUQsRUFBTUMsQ0FBTixFQUFZOztBQUVoRCxnQ0FBSSxPQUFLL0IsU0FBTCxDQUFlZ0MsT0FBZixDQUF1Qk4sTUFBdkIsRUFBK0JJLEdBQS9CLENBQUosRUFBeUM7QUFDckNOLHVDQUFPUyxJQUFQLENBQVlGLENBQVo7QUFDQSx1Q0FBTyxJQUFQO0FBQ0g7QUFFSix5QkFQMkIsQ0FBNUI7O0FBU0EsK0JBQU9MLE1BQVA7QUFFSCxxQkFiRCxNQWFPOztBQUdILDRCQUFJRixPQUFPVSxPQUFQLENBQWVQLFFBQVFSLFFBQXZCLElBQW1DLENBQUMsQ0FBeEMsRUFBMkM7O0FBRXZDLG1DQUFPLElBQVA7QUFFSCx5QkFKRCxNQUlPOztBQUVILGdDQUFJZ0IsSUFBSSxFQUFSO0FBQ0E7QUFDQTtBQUNBLG1EQUFTUCxHQUFULENBQWFPLENBQWIsRUFBZ0J0QyxLQUFoQixFQUF1QjBCLEtBQUtNLE1BQUwsQ0FBWSxVQUFDQyxHQUFELEVBQU1DLENBQU4sRUFBWTs7QUFFM0Msb0NBQUksT0FBSy9CLFNBQUwsQ0FBZW9DLFlBQWYsQ0FBNEJWLE1BQTVCLEVBQW9DSSxHQUFwQyxDQUFKLEVBQThDO0FBQzFDTiwyQ0FBT1MsSUFBUCxDQUFZRixDQUFaO0FBQ0EsMkNBQU9ELEdBQVA7QUFDSDtBQUVKLDZCQVBzQixDQUF2Qjs7QUFTQSxtQ0FBT0ssQ0FBUDtBQUVIO0FBRUo7QUFFSixpQkExQ00sRUEwQ0pOLE1BMUNJLENBMENHO0FBQUEsMkJBQUtNLENBQUw7QUFBQSxpQkExQ0gsQ0FBUDtBQTJDSCxhQWxETSxDQUFQO0FBb0RIOzs7Ozs7a0JBSVV6QyxrQiIsImZpbGUiOiJPdXRlckpvaW5TdGF0ZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuaW1wb3J0IFByb3BlcnR5IGZyb20gJ3Byb3BlcnR5LXNlZWsnO1xuXG4vKipcbiAqIE91dGVySm9pblN0YXRlbWVudFxuICovXG5jbGFzcyBPdXRlckpvaW5TdGF0ZW1lbnQgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGZpZWxkcywgY29sbGVjdGlvbiwgYWxpYXMsIHdoZXJlLCBtb2RpZmllcnMsIGNvbmRpdGlvbiwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAnb3V0ZXItam9pbic7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbiA9IGNvbGxlY3Rpb247XG4gICAgICAgIHRoaXMuYWxpYXMgPSBhbGlhcztcbiAgICAgICAgdGhpcy5maWVsZHMgPSBmaWVsZHM7XG4gICAgICAgIHRoaXMud2hlcmUgPSB3aGVyZTtcbiAgICAgICAgdGhpcy5tb2RpZmllcnMgPSBtb2RpZmllcnM7XG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgICAgICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb247XG5cbiAgICB9XG5cbiAgICBhcHBseShkYXRhLCBkYiwgY29udGV4dCkge1xuXG4gICAgICAgIHZhciBjdXJzb3I7XG4gICAgICAgIHZhciBhbGlhcyA9IHRoaXMuYWxpYXMuYXNWYWx1ZSgpO1xuICAgICAgICB2YXIgd2hlcmUgPSB7fTtcbiAgdmFyIGZpZWxkcyA9IHtcbiAgICAgICAgICAgIF9pZDogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICBmaWVsZHMgPSB0aGlzLmZpZWxkcy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IGN1cnIuYXBwbHkocHJldiwgY29udGV4dCksIGZpZWxkcyk7XG5cbiAgICAgICAgdGhpcy53aGVyZS5mb3JFYWNoKHcgPT4gdy5hcHBseSh3aGVyZSwgY29udGV4dCkpO1xuXG4gICAgICAgIGN1cnNvciA9IGRiLmNvbGxlY3Rpb24odGhpcy5jb2xsZWN0aW9uLmFzVmFsdWUoY29udGV4dCkpLlxuICAgICAgICBmaW5kKHdoZXJlLCBmaWVsZHMpO1xuXG4gICAgICAgIHRoaXMubW9kaWZpZXJzLmZvckVhY2gobSA9PiBtLmFwcGx5KGN1cnNvcikpO1xuXG4gICAgICAgIHJldHVybiBjdXJzb3IudG9BcnJheSgpLlxuICAgICAgICB0aGVuKGRvY3MgPT4ge1xuXG4gICAgICAgICAgICB2YXIgYm91bmRhcnkgPSBkYXRhLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciBuZXdEb2NzID0gZGF0YS5jb25jYXQoZG9jcyk7XG4gICAgICAgICAgICB2YXIgam9pbmVkID0gW107XG5cbiAgICAgICAgICAgIHJldHVybiBuZXdEb2NzLm1hcCgobmV3RG9jLCBpbmRleCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4IDwgYm91bmRhcnkpIHtcblxuICAgICAgICAgICAgICAgICAgICBQcm9wZXJ0eS5zZXQobmV3RG9jLCBhbGlhcywgZG9jcy5maWx0ZXIoKGRvYywgaSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25kaXRpb24uY29tcGFyZShuZXdEb2MsIGRvYykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqb2luZWQucHVzaChpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ld0RvYztcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cblxuICAgICAgICAgICAgICAgICAgICBpZiAoam9pbmVkLmluZGV4T2YoaW5kZXggLSBib3VuZGFyeSkgPiAtMSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9Db21iaW5lIGFsbCB0aGF0IHdvdWxkIGpvaW4gb24gdGhlIHNhbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vb2JqZWN0IGlmIHRoYXQgb2JqZWN0IGV4aXN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb3BlcnR5LnNldChvLCBhbGlhcywgZG9jcy5maWx0ZXIoKGRvYywgaSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29uZGl0aW9uLnJpZ2h0Q29tcGFyZShuZXdEb2MsIGRvYykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgam9pbmVkLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkb2M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSkuZmlsdGVyKG8gPT4gbyk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE91dGVySm9pblN0YXRlbWVudFxuIl19