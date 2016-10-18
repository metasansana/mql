'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ObjectLiteral = require('./ObjectLiteral');

var _ObjectLiteral2 = _interopRequireDefault(_ObjectLiteral);

var _BooleanLiteral = require('./BooleanLiteral');

var _BooleanLiteral2 = _interopRequireDefault(_BooleanLiteral);

var _NumberLiteral = require('./NumberLiteral');

var _NumberLiteral2 = _interopRequireDefault(_NumberLiteral);

var _StringLiteral = require('./StringLiteral');

var _StringLiteral2 = _interopRequireDefault(_StringLiteral);

var _ArrayLiteral = require('./ArrayLiteral');

var _ArrayLiteral2 = _interopRequireDefault(_ArrayLiteral);

var _FindStatement = require('./FindStatement');

var _FindStatement2 = _interopRequireDefault(_FindStatement);

var _InsertStatement = require('./InsertStatement');

var _InsertStatement2 = _interopRequireDefault(_InsertStatement);

var _UpdateStatement = require('./UpdateStatement');

var _UpdateStatement2 = _interopRequireDefault(_UpdateStatement);

var _RemoveStatement = require('./RemoveStatement');

var _RemoveStatement2 = _interopRequireDefault(_RemoveStatement);

var _LogicFilter = require('./LogicFilter');

var _LogicFilter2 = _interopRequireDefault(_LogicFilter);

var _Filter = require('./Filter');

var _Filter2 = _interopRequireDefault(_Filter);

var _FieldReference = require('./FieldReference');

var _FieldReference2 = _interopRequireDefault(_FieldReference);

var _LimitClause = require('./LimitClause');

var _LimitClause2 = _interopRequireDefault(_LimitClause);

var _ContextReference = require('./ContextReference');

var _ContextReference2 = _interopRequireDefault(_ContextReference);

var _Identifier = require('./Identifier');

var _Identifier2 = _interopRequireDefault(_Identifier);

var _InnerJoinStatement = require('./InnerJoinStatement');

var _InnerJoinStatement2 = _interopRequireDefault(_InnerJoinStatement);

var _LeftJoinStatement = require('./LeftJoinStatement');

var _LeftJoinStatement2 = _interopRequireDefault(_LeftJoinStatement);

var _OuterJoinStatement = require('./OuterJoinStatement');

var _OuterJoinStatement2 = _interopRequireDefault(_OuterJoinStatement);

var _JoinCondition = require('./JoinCondition');

var _JoinCondition2 = _interopRequireDefault(_JoinCondition);

var _SortClause = require('./SortClause');

var _SortClause2 = _interopRequireDefault(_SortClause);

var _FieldSort = require('./FieldSort');

var _FieldSort2 = _interopRequireDefault(_FieldSort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * AbstractSyntaxTree 
 */
var AbstractSyntaxTree = function AbstractSyntaxTree() {
    _classCallCheck(this, AbstractSyntaxTree);

    this.BooleanLiteral = _BooleanLiteral2.default;
    this.NumberLiteral = _NumberLiteral2.default;
    this.StringLiteral = _StringLiteral2.default;
    this.ArrayLiteral = _ArrayLiteral2.default;
    this.ObjectLiteral = _ObjectLiteral2.default;
    this.FindStatement = _FindStatement2.default;
    this.InsertStatement = _InsertStatement2.default;
    this.UpdateStatement = _UpdateStatement2.default;
    this.RemoveStatement = _RemoveStatement2.default;
    this.LogicFilter = _LogicFilter2.default;
    this.Filter = _Filter2.default;
    this.FieldReference = _FieldReference2.default;
    this.ContextReference = _ContextReference2.default;
    this.Identifier = _Identifier2.default;
    this.LimitClause = _LimitClause2.default;
    this.InnerJoinStatement = _InnerJoinStatement2.default;
    this.LeftJoinStatement = _LeftJoinStatement2.default;
    this.OuterJoinStatement = _OuterJoinStatement2.default;
    this.JoinCondition = _JoinCondition2.default;
    this.SortClause = _SortClause2.default;
    this.FieldSort = _FieldSort2.default;
};

exports.default = AbstractSyntaxTree;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9BYnN0cmFjdFN5bnRheFRyZWUuanMiXSwibmFtZXMiOlsiQWJzdHJhY3RTeW50YXhUcmVlIiwiQm9vbGVhbkxpdGVyYWwiLCJOdW1iZXJMaXRlcmFsIiwiU3RyaW5nTGl0ZXJhbCIsIkFycmF5TGl0ZXJhbCIsIk9iamVjdExpdGVyYWwiLCJGaW5kU3RhdGVtZW50IiwiSW5zZXJ0U3RhdGVtZW50IiwiVXBkYXRlU3RhdGVtZW50IiwiUmVtb3ZlU3RhdGVtZW50IiwiTG9naWNGaWx0ZXIiLCJGaWx0ZXIiLCJGaWVsZFJlZmVyZW5jZSIsIkNvbnRleHRSZWZlcmVuY2UiLCJJZGVudGlmaWVyIiwiTGltaXRDbGF1c2UiLCJJbm5lckpvaW5TdGF0ZW1lbnQiLCJMZWZ0Sm9pblN0YXRlbWVudCIsIk91dGVySm9pblN0YXRlbWVudCIsIkpvaW5Db25kaXRpb24iLCJTb3J0Q2xhdXNlIiwiRmllbGRTb3J0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUE7OztJQUdNQSxrQixHQUVGLDhCQUFjO0FBQUE7O0FBRVYsU0FBS0MsY0FBTDtBQUNBLFNBQUtDLGFBQUw7QUFDQSxTQUFLQyxhQUFMO0FBQ0EsU0FBS0MsWUFBTDtBQUNBLFNBQUtDLGFBQUw7QUFDQSxTQUFLQyxhQUFMO0FBQ0EsU0FBS0MsZUFBTDtBQUNBLFNBQUtDLGVBQUw7QUFDQSxTQUFLQyxlQUFMO0FBQ0EsU0FBS0MsV0FBTDtBQUNBLFNBQUtDLE1BQUw7QUFDQSxTQUFLQyxjQUFMO0FBQ0EsU0FBS0MsZ0JBQUw7QUFDQSxTQUFLQyxVQUFMO0FBQ0EsU0FBS0MsV0FBTDtBQUNBLFNBQUtDLGtCQUFMO0FBQ0EsU0FBS0MsaUJBQUw7QUFDQSxTQUFLQyxrQkFBTDtBQUNBLFNBQUtDLGFBQUw7QUFDQSxTQUFLQyxVQUFMO0FBQ0EsU0FBS0MsU0FBTDtBQUVILEM7O2tCQUlVckIsa0IiLCJmaWxlIjoiQWJzdHJhY3RTeW50YXhUcmVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE9iamVjdExpdGVyYWwgZnJvbSAnLi9PYmplY3RMaXRlcmFsJztcbmltcG9ydCBCb29sZWFuTGl0ZXJhbCBmcm9tICcuL0Jvb2xlYW5MaXRlcmFsJztcbmltcG9ydCBOdW1iZXJMaXRlcmFsIGZyb20gJy4vTnVtYmVyTGl0ZXJhbCc7XG5pbXBvcnQgU3RyaW5nTGl0ZXJhbCBmcm9tICcuL1N0cmluZ0xpdGVyYWwnO1xuaW1wb3J0IEFycmF5TGl0ZXJhbCBmcm9tICcuL0FycmF5TGl0ZXJhbCc7XG5pbXBvcnQgRmluZFN0YXRlbWVudCBmcm9tICcuL0ZpbmRTdGF0ZW1lbnQnO1xuaW1wb3J0IEluc2VydFN0YXRlbWVudCBmcm9tICcuL0luc2VydFN0YXRlbWVudCc7XG5pbXBvcnQgVXBkYXRlU3RhdGVtZW50IGZyb20gJy4vVXBkYXRlU3RhdGVtZW50JztcbmltcG9ydCBSZW1vdmVTdGF0ZW1lbnQgZnJvbSAnLi9SZW1vdmVTdGF0ZW1lbnQnO1xuaW1wb3J0IExvZ2ljRmlsdGVyIGZyb20gJy4vTG9naWNGaWx0ZXInO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuL0ZpbHRlcic7XG5pbXBvcnQgRmllbGRSZWZlcmVuY2UgZnJvbSAnLi9GaWVsZFJlZmVyZW5jZSc7XG5pbXBvcnQgTGltaXRDbGF1c2UgZnJvbSAnLi9MaW1pdENsYXVzZSc7XG5pbXBvcnQgQ29udGV4dFJlZmVyZW5jZSBmcm9tICcuL0NvbnRleHRSZWZlcmVuY2UnO1xuaW1wb3J0IElkZW50aWZpZXIgZnJvbSAnLi9JZGVudGlmaWVyJztcbmltcG9ydCBJbm5lckpvaW5TdGF0ZW1lbnQgZnJvbSAnLi9Jbm5lckpvaW5TdGF0ZW1lbnQnO1xuaW1wb3J0IExlZnRKb2luU3RhdGVtZW50IGZyb20gJy4vTGVmdEpvaW5TdGF0ZW1lbnQnO1xuaW1wb3J0IE91dGVySm9pblN0YXRlbWVudCBmcm9tICcuL091dGVySm9pblN0YXRlbWVudCc7XG5pbXBvcnQgSm9pbkNvbmRpdGlvbiBmcm9tICcuL0pvaW5Db25kaXRpb24nO1xuaW1wb3J0IFNvcnRDbGF1c2UgZnJvbSAnLi9Tb3J0Q2xhdXNlJztcbmltcG9ydCBGaWVsZFNvcnQgZnJvbSAnLi9GaWVsZFNvcnQnO1xuXG4vKipcbiAqIEFic3RyYWN0U3ludGF4VHJlZSBcbiAqL1xuY2xhc3MgQWJzdHJhY3RTeW50YXhUcmVlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIHRoaXMuQm9vbGVhbkxpdGVyYWwgPSBCb29sZWFuTGl0ZXJhbDtcbiAgICAgICAgdGhpcy5OdW1iZXJMaXRlcmFsID0gTnVtYmVyTGl0ZXJhbDtcbiAgICAgICAgdGhpcy5TdHJpbmdMaXRlcmFsID0gU3RyaW5nTGl0ZXJhbDtcbiAgICAgICAgdGhpcy5BcnJheUxpdGVyYWwgPSBBcnJheUxpdGVyYWw7XG4gICAgICAgIHRoaXMuT2JqZWN0TGl0ZXJhbCA9IE9iamVjdExpdGVyYWw7XG4gICAgICAgIHRoaXMuRmluZFN0YXRlbWVudCA9IEZpbmRTdGF0ZW1lbnQ7XG4gICAgICAgIHRoaXMuSW5zZXJ0U3RhdGVtZW50ID0gSW5zZXJ0U3RhdGVtZW50O1xuICAgICAgICB0aGlzLlVwZGF0ZVN0YXRlbWVudCA9IFVwZGF0ZVN0YXRlbWVudDtcbiAgICAgICAgdGhpcy5SZW1vdmVTdGF0ZW1lbnQgPSBSZW1vdmVTdGF0ZW1lbnQ7XG4gICAgICAgIHRoaXMuTG9naWNGaWx0ZXIgPSBMb2dpY0ZpbHRlcjtcbiAgICAgICAgdGhpcy5GaWx0ZXIgPSBGaWx0ZXI7XG4gICAgICAgIHRoaXMuRmllbGRSZWZlcmVuY2UgPSBGaWVsZFJlZmVyZW5jZTtcbiAgICAgICAgdGhpcy5Db250ZXh0UmVmZXJlbmNlID0gQ29udGV4dFJlZmVyZW5jZTtcbiAgICAgICAgdGhpcy5JZGVudGlmaWVyID0gSWRlbnRpZmllcjtcbiAgICAgICAgdGhpcy5MaW1pdENsYXVzZSA9IExpbWl0Q2xhdXNlO1xuICAgICAgICB0aGlzLklubmVySm9pblN0YXRlbWVudCA9IElubmVySm9pblN0YXRlbWVudDtcbiAgICAgICAgdGhpcy5MZWZ0Sm9pblN0YXRlbWVudCA9IExlZnRKb2luU3RhdGVtZW50O1xuICAgICAgICB0aGlzLk91dGVySm9pblN0YXRlbWVudCA9IE91dGVySm9pblN0YXRlbWVudDtcbiAgICAgICAgdGhpcy5Kb2luQ29uZGl0aW9uID0gSm9pbkNvbmRpdGlvbjtcbiAgICAgICAgdGhpcy5Tb3J0Q2xhdXNlID0gU29ydENsYXVzZTtcbiAgICAgICAgdGhpcy5GaWVsZFNvcnQgPSBGaWVsZFNvcnQ7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJzdHJhY3RTeW50YXhUcmVlXG4iXX0=