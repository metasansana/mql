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
 * PopulateStatement
 * @param {array} fields
 * @param {string} collection
 * @param {string} alias
 */
var PopulateStatement = function (_Node) {
    _inherits(PopulateStatement, _Node);

    function PopulateStatement(fields, collection, alias, where, modifiers, condition, location) {
        _classCallCheck(this, PopulateStatement);

        var _this = _possibleConstructorReturn(this, (PopulateStatement.__proto__ || Object.getPrototypeOf(PopulateStatement)).call(this));

        _this.type = 'populate-statement';
        _this.collection = collection;
        _this.alias = alias;
        _this.fields = fields;
        _this.where = where;
        _this.modifiers = modifiers;
        _this.condition = condition;
        _this.location = location;

        return _this;
    }

    _createClass(PopulateStatement, [{
        key: 'apply',
        value: function apply(data, db, context) {
            var _this2 = this;

            var cursor;
            var target = this.condition.lkey.asValue(context);
            var alias = this.alias ? this.alias.asValue(context) : target;
            var where = this.condition.getWhereClause(data);
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
                return data.map(function (d) {

                    var found = false;

                    docs.forEach(function (doc) {

                        if (_this2.condition.compare(d, doc)) {

                            _propertySeek2.default.set(d, alias, doc);
                            found = true;
                        }
                    });

                    if (!found) _propertySeek2.default.set(d, alias, null);

                    return d;
                });
            });
        }
    }]);

    return PopulateStatement;
}(_Node3.default);

exports.default = PopulateStatement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3QvUG9wdWxhdGVTdGF0ZW1lbnQuanMiXSwibmFtZXMiOlsiUG9wdWxhdGVTdGF0ZW1lbnQiLCJmaWVsZHMiLCJjb2xsZWN0aW9uIiwiYWxpYXMiLCJ3aGVyZSIsIm1vZGlmaWVycyIsImNvbmRpdGlvbiIsImxvY2F0aW9uIiwidHlwZSIsImRhdGEiLCJkYiIsImNvbnRleHQiLCJjdXJzb3IiLCJ0YXJnZXQiLCJsa2V5IiwiYXNWYWx1ZSIsImdldFdoZXJlQ2xhdXNlIiwiX2lkIiwicmVkdWNlIiwicHJldiIsImN1cnIiLCJhcHBseSIsImZvckVhY2giLCJ3IiwiZmluZCIsIm0iLCJ0b0FycmF5IiwidGhlbiIsIm1hcCIsImZvdW5kIiwiZG9jcyIsImNvbXBhcmUiLCJkIiwiZG9jIiwic2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBOzs7Ozs7SUFNTUEsaUI7OztBQUVGLCtCQUFZQyxNQUFaLEVBQW9CQyxVQUFwQixFQUFnQ0MsS0FBaEMsRUFBdUNDLEtBQXZDLEVBQThDQyxTQUE5QyxFQUF5REMsU0FBekQsRUFBb0VDLFFBQXBFLEVBQThFO0FBQUE7O0FBQUE7O0FBRzFFLGNBQUtDLElBQUwsR0FBWSxvQkFBWjtBQUNBLGNBQUtOLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsY0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsY0FBS0YsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsY0FBS0csS0FBTCxHQUFhQSxLQUFiO0FBQ0EsY0FBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxjQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLGNBQUtDLFFBQUwsR0FBZ0JBLFFBQWhCOztBQVYwRTtBQVk3RTs7Ozs4QkFFS0UsSSxFQUFNQyxFLEVBQUlDLE8sRUFBUztBQUFBOztBQUVyQixnQkFBSUMsTUFBSjtBQUNBLGdCQUFJQyxTQUFTLEtBQUtQLFNBQUwsQ0FBZVEsSUFBZixDQUFvQkMsT0FBcEIsQ0FBNEJKLE9BQTVCLENBQWI7QUFDQSxnQkFBSVIsUUFBUyxLQUFLQSxLQUFOLEdBQWUsS0FBS0EsS0FBTCxDQUFXWSxPQUFYLENBQW1CSixPQUFuQixDQUFmLEdBQTZDRSxNQUF6RDtBQUNBLGdCQUFJVCxRQUFRLEtBQUtFLFNBQUwsQ0FBZVUsY0FBZixDQUE4QlAsSUFBOUIsQ0FBWjtBQUNBLGdCQUFJUixTQUFTO0FBQ1RnQixxQkFBSztBQURJLGFBQWI7O0FBSUFoQixxQkFBUyxLQUFLQSxNQUFMLENBQVlpQixNQUFaLENBQW1CLFVBQUNDLElBQUQsRUFBT0MsSUFBUDtBQUFBLHVCQUFnQkEsS0FBS0MsS0FBTCxDQUFXRixJQUFYLEVBQWlCUixPQUFqQixDQUFoQjtBQUFBLGFBQW5CLEVBQThEVixNQUE5RCxDQUFUOztBQUVBLGlCQUFLRyxLQUFMLENBQVdrQixPQUFYLENBQW1CO0FBQUEsdUJBQUtDLEVBQUVGLEtBQUYsQ0FBUWpCLEtBQVIsRUFBZU8sT0FBZixDQUFMO0FBQUEsYUFBbkI7O0FBRUFDLHFCQUFTRixHQUFHUixVQUFILENBQWMsS0FBS0EsVUFBTCxDQUFnQmEsT0FBaEIsQ0FBd0JKLE9BQXhCLENBQWQsRUFBZ0RhLElBQWhELENBQXFEcEIsS0FBckQsRUFBNERILE1BQTVELENBQVQ7O0FBRUEsaUJBQUtJLFNBQUwsQ0FBZWlCLE9BQWYsQ0FBdUI7QUFBQSx1QkFBS0csRUFBRUosS0FBRixDQUFRVCxNQUFSLENBQUw7QUFBQSxhQUF2Qjs7QUFFQSxtQkFBT0EsT0FBT2MsT0FBUCxHQUNQQyxJQURPLENBQ0YsZ0JBQVE7QUFDVCx1QkFBT2xCLEtBQUttQixHQUFMLENBQVMsYUFBSzs7QUFFakIsd0JBQUlDLFFBQVEsS0FBWjs7QUFFQUMseUJBQUtSLE9BQUwsQ0FBYSxlQUFPOztBQUVoQiw0QkFBSSxPQUFLaEIsU0FBTCxDQUFleUIsT0FBZixDQUF1QkMsQ0FBdkIsRUFBMEJDLEdBQTFCLENBQUosRUFBb0M7O0FBRWhDLG1EQUFTQyxHQUFULENBQWFGLENBQWIsRUFBZ0I3QixLQUFoQixFQUF1QjhCLEdBQXZCO0FBQ0FKLG9DQUFRLElBQVI7QUFFSDtBQUVKLHFCQVREOztBQVdBLHdCQUFJLENBQUNBLEtBQUwsRUFBWSx1QkFBU0ssR0FBVCxDQUFhRixDQUFiLEVBQWdCN0IsS0FBaEIsRUFBdUIsSUFBdkI7O0FBRVosMkJBQU82QixDQUFQO0FBRUgsaUJBbkJNLENBQVA7QUFxQkgsYUF2Qk0sQ0FBUDtBQXlCSDs7Ozs7O2tCQUdVaEMsaUIiLCJmaWxlIjoiUG9wdWxhdGVTdGF0ZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuaW1wb3J0IFByb3BlcnR5IGZyb20gJ3Byb3BlcnR5LXNlZWsnO1xuXG4vKipcbiAqIFBvcHVsYXRlU3RhdGVtZW50XG4gKiBAcGFyYW0ge2FycmF5fSBmaWVsZHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb2xsZWN0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gYWxpYXNcbiAqL1xuY2xhc3MgUG9wdWxhdGVTdGF0ZW1lbnQgZXh0ZW5kcyBOb2RlIHtcblxuICAgIGNvbnN0cnVjdG9yKGZpZWxkcywgY29sbGVjdGlvbiwgYWxpYXMsIHdoZXJlLCBtb2RpZmllcnMsIGNvbmRpdGlvbiwgbG9jYXRpb24pIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnR5cGUgPSAncG9wdWxhdGUtc3RhdGVtZW50JztcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uID0gY29sbGVjdGlvbjtcbiAgICAgICAgdGhpcy5hbGlhcyA9IGFsaWFzO1xuICAgICAgICB0aGlzLmZpZWxkcyA9IGZpZWxkcztcbiAgICAgICAgdGhpcy53aGVyZSA9IHdoZXJlO1xuICAgICAgICB0aGlzLm1vZGlmaWVycyA9IG1vZGlmaWVycztcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcblxuICAgIH1cblxuICAgIGFwcGx5KGRhdGEsIGRiLCBjb250ZXh0KSB7XG5cbiAgICAgICAgdmFyIGN1cnNvcjtcbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMuY29uZGl0aW9uLmxrZXkuYXNWYWx1ZShjb250ZXh0KTtcbiAgICAgICAgdmFyIGFsaWFzID0gKHRoaXMuYWxpYXMpID8gdGhpcy5hbGlhcy5hc1ZhbHVlKGNvbnRleHQpIDogdGFyZ2V0O1xuICAgICAgICB2YXIgd2hlcmUgPSB0aGlzLmNvbmRpdGlvbi5nZXRXaGVyZUNsYXVzZShkYXRhKTtcbiAgICAgICAgdmFyIGZpZWxkcyA9IHtcbiAgICAgICAgICAgIF9pZDogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICBmaWVsZHMgPSB0aGlzLmZpZWxkcy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IGN1cnIuYXBwbHkocHJldiwgY29udGV4dCksIGZpZWxkcyk7XG5cbiAgICAgICAgdGhpcy53aGVyZS5mb3JFYWNoKHcgPT4gdy5hcHBseSh3aGVyZSwgY29udGV4dCkpO1xuXG4gICAgICAgIGN1cnNvciA9IGRiLmNvbGxlY3Rpb24odGhpcy5jb2xsZWN0aW9uLmFzVmFsdWUoY29udGV4dCkpLmZpbmQod2hlcmUsIGZpZWxkcyk7XG5cbiAgICAgICAgdGhpcy5tb2RpZmllcnMuZm9yRWFjaChtID0+IG0uYXBwbHkoY3Vyc29yKSk7XG5cbiAgICAgICAgcmV0dXJuIGN1cnNvci50b0FycmF5KCkuXG4gICAgICAgIHRoZW4oZG9jcyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YS5tYXAoZCA9PiB7XG5cbiAgICAgICAgICAgICAgICB2YXIgZm91bmQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGRvY3MuZm9yRWFjaChkb2MgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbmRpdGlvbi5jb21wYXJlKGQsIGRvYykpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvcGVydHkuc2V0KGQsIGFsaWFzLCBkb2MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFmb3VuZCkgUHJvcGVydHkuc2V0KGQsIGFsaWFzLCBudWxsKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBkO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9wdWxhdGVTdGF0ZW1lbnRcbiJdfQ==