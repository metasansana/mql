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

var _LogicalExpression = require('./LogicalExpression');

var _LogicalExpression2 = _interopRequireDefault(_LogicalExpression);

var _ComparisonExpression = require('./ComparisonExpression');

var _ComparisonExpression2 = _interopRequireDefault(_ComparisonExpression);

var _FieldReference = require('./FieldReference');

var _FieldReference2 = _interopRequireDefault(_FieldReference);

var _LimitClause = require('./LimitClause');

var _LimitClause2 = _interopRequireDefault(_LimitClause);

var _ContextReference = require('./ContextReference');

var _ContextReference2 = _interopRequireDefault(_ContextReference);

var _VariableReference = require('./VariableReference');

var _VariableReference2 = _interopRequireDefault(_VariableReference);

var _Identifier = require('./Identifier');

var _Identifier2 = _interopRequireDefault(_Identifier);

var _InnerJoinStatement = require('./InnerJoinStatement');

var _InnerJoinStatement2 = _interopRequireDefault(_InnerJoinStatement);

var _LeftJoinStatement = require('./LeftJoinStatement');

var _LeftJoinStatement2 = _interopRequireDefault(_LeftJoinStatement);

var _OuterJoinStatement = require('./OuterJoinStatement');

var _OuterJoinStatement2 = _interopRequireDefault(_OuterJoinStatement);

var _SortClause = require('./SortClause');

var _SortClause2 = _interopRequireDefault(_SortClause);

var _FieldSort = require('./FieldSort');

var _FieldSort2 = _interopRequireDefault(_FieldSort);

var _CollectionReference = require('./CollectionReference');

var _CollectionReference2 = _interopRequireDefault(_CollectionReference);

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
    this.LogicalExpression = _LogicalExpression2.default;
    this.ComparisonExpression = _ComparisonExpression2.default;
    this.FieldReference = _FieldReference2.default;
    this.ContextReference = _ContextReference2.default;
    this.VariableReference = _VariableReference2.default;
    this.Identifier = _Identifier2.default;
    this.LimitClause = _LimitClause2.default;
    this.InnerJoinStatement = _InnerJoinStatement2.default;
    this.LeftJoinStatement = _LeftJoinStatement2.default;
    this.OuterJoinStatement = _OuterJoinStatement2.default;
    this.SortClause = _SortClause2.default;
    this.FieldSort = _FieldSort2.default;
    this.CollectionReference = _CollectionReference2.default;
};

exports.default = AbstractSyntaxTree;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9BYnN0cmFjdFN5bnRheFRyZWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUE7Ozs7SUFHTSxrQixHQUVGLDhCQUFjO0FBQUE7O0FBRVYsU0FBSyxjQUFMO0FBQ0EsU0FBSyxhQUFMO0FBQ0EsU0FBSyxhQUFMO0FBQ0EsU0FBSyxZQUFMO0FBQ0EsU0FBSyxhQUFMO0FBQ0EsU0FBSyxhQUFMO0FBQ0EsU0FBSyxlQUFMO0FBQ0EsU0FBSyxlQUFMO0FBQ0EsU0FBSyxlQUFMO0FBQ0EsU0FBSyxpQkFBTDtBQUNBLFNBQUssb0JBQUw7QUFDQSxTQUFLLGNBQUw7QUFDQSxTQUFLLGdCQUFMO0FBQ0EsU0FBSyxpQkFBTDtBQUNBLFNBQUssVUFBTDtBQUNBLFNBQUssV0FBTDtBQUNBLFNBQUssa0JBQUw7QUFDQSxTQUFLLGlCQUFMO0FBQ0EsU0FBSyxrQkFBTDtBQUNBLFNBQUssVUFBTDtBQUNBLFNBQUssU0FBTDtBQUNBLFNBQUssbUJBQUw7QUFFSCxDOztrQkFJVSxrQiIsImZpbGUiOiJBYnN0cmFjdFN5bnRheFRyZWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgT2JqZWN0TGl0ZXJhbCBmcm9tICcuL09iamVjdExpdGVyYWwnO1xuaW1wb3J0IEJvb2xlYW5MaXRlcmFsIGZyb20gJy4vQm9vbGVhbkxpdGVyYWwnO1xuaW1wb3J0IE51bWJlckxpdGVyYWwgZnJvbSAnLi9OdW1iZXJMaXRlcmFsJztcbmltcG9ydCBTdHJpbmdMaXRlcmFsIGZyb20gJy4vU3RyaW5nTGl0ZXJhbCc7XG5pbXBvcnQgQXJyYXlMaXRlcmFsIGZyb20gJy4vQXJyYXlMaXRlcmFsJztcbmltcG9ydCBGaW5kU3RhdGVtZW50IGZyb20gJy4vRmluZFN0YXRlbWVudCc7XG5pbXBvcnQgSW5zZXJ0U3RhdGVtZW50IGZyb20gJy4vSW5zZXJ0U3RhdGVtZW50JztcbmltcG9ydCBVcGRhdGVTdGF0ZW1lbnQgZnJvbSAnLi9VcGRhdGVTdGF0ZW1lbnQnO1xuaW1wb3J0IFJlbW92ZVN0YXRlbWVudCBmcm9tICcuL1JlbW92ZVN0YXRlbWVudCc7XG5pbXBvcnQgTG9naWNhbEV4cHJlc3Npb24gZnJvbSAnLi9Mb2dpY2FsRXhwcmVzc2lvbic7XG5pbXBvcnQgQ29tcGFyaXNvbkV4cHJlc3Npb24gZnJvbSAnLi9Db21wYXJpc29uRXhwcmVzc2lvbic7XG5pbXBvcnQgRmllbGRSZWZlcmVuY2UgZnJvbSAnLi9GaWVsZFJlZmVyZW5jZSc7XG5pbXBvcnQgTGltaXRDbGF1c2UgZnJvbSAnLi9MaW1pdENsYXVzZSc7XG5pbXBvcnQgQ29udGV4dFJlZmVyZW5jZSBmcm9tICcuL0NvbnRleHRSZWZlcmVuY2UnO1xuaW1wb3J0IFZhcmlhYmxlUmVmZXJlbmNlIGZyb20gJy4vVmFyaWFibGVSZWZlcmVuY2UnO1xuaW1wb3J0IElkZW50aWZpZXIgZnJvbSAnLi9JZGVudGlmaWVyJztcbmltcG9ydCBJbm5lckpvaW5TdGF0ZW1lbnQgZnJvbSAnLi9Jbm5lckpvaW5TdGF0ZW1lbnQnO1xuaW1wb3J0IExlZnRKb2luU3RhdGVtZW50IGZyb20gJy4vTGVmdEpvaW5TdGF0ZW1lbnQnO1xuaW1wb3J0IE91dGVySm9pblN0YXRlbWVudCBmcm9tICcuL091dGVySm9pblN0YXRlbWVudCc7XG5pbXBvcnQgU29ydENsYXVzZSBmcm9tICcuL1NvcnRDbGF1c2UnO1xuaW1wb3J0IEZpZWxkU29ydCBmcm9tICcuL0ZpZWxkU29ydCc7XG5pbXBvcnQgQ29sbGVjdGlvblJlZmVyZW5jZSBmcm9tICcuL0NvbGxlY3Rpb25SZWZlcmVuY2UnO1xuXG4vKipcbiAqIEFic3RyYWN0U3ludGF4VHJlZSBcbiAqL1xuY2xhc3MgQWJzdHJhY3RTeW50YXhUcmVlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIHRoaXMuQm9vbGVhbkxpdGVyYWwgPSBCb29sZWFuTGl0ZXJhbDtcbiAgICAgICAgdGhpcy5OdW1iZXJMaXRlcmFsID0gTnVtYmVyTGl0ZXJhbDtcbiAgICAgICAgdGhpcy5TdHJpbmdMaXRlcmFsID0gU3RyaW5nTGl0ZXJhbDtcbiAgICAgICAgdGhpcy5BcnJheUxpdGVyYWwgPSBBcnJheUxpdGVyYWw7XG4gICAgICAgIHRoaXMuT2JqZWN0TGl0ZXJhbCA9IE9iamVjdExpdGVyYWw7XG4gICAgICAgIHRoaXMuRmluZFN0YXRlbWVudCA9IEZpbmRTdGF0ZW1lbnQ7XG4gICAgICAgIHRoaXMuSW5zZXJ0U3RhdGVtZW50ID0gSW5zZXJ0U3RhdGVtZW50O1xuICAgICAgICB0aGlzLlVwZGF0ZVN0YXRlbWVudCA9IFVwZGF0ZVN0YXRlbWVudDtcbiAgICAgICAgdGhpcy5SZW1vdmVTdGF0ZW1lbnQgPSBSZW1vdmVTdGF0ZW1lbnQ7XG4gICAgICAgIHRoaXMuTG9naWNhbEV4cHJlc3Npb24gPSBMb2dpY2FsRXhwcmVzc2lvbjtcbiAgICAgICAgdGhpcy5Db21wYXJpc29uRXhwcmVzc2lvbiA9IENvbXBhcmlzb25FeHByZXNzaW9uO1xuICAgICAgICB0aGlzLkZpZWxkUmVmZXJlbmNlID0gRmllbGRSZWZlcmVuY2U7XG4gICAgICAgIHRoaXMuQ29udGV4dFJlZmVyZW5jZSA9IENvbnRleHRSZWZlcmVuY2U7XG4gICAgICAgIHRoaXMuVmFyaWFibGVSZWZlcmVuY2UgPSBWYXJpYWJsZVJlZmVyZW5jZTtcbiAgICAgICAgdGhpcy5JZGVudGlmaWVyID0gSWRlbnRpZmllcjtcbiAgICAgICAgdGhpcy5MaW1pdENsYXVzZSA9IExpbWl0Q2xhdXNlO1xuICAgICAgICB0aGlzLklubmVySm9pblN0YXRlbWVudCA9IElubmVySm9pblN0YXRlbWVudDtcbiAgICAgICAgdGhpcy5MZWZ0Sm9pblN0YXRlbWVudCA9IExlZnRKb2luU3RhdGVtZW50O1xuICAgICAgICB0aGlzLk91dGVySm9pblN0YXRlbWVudCA9IE91dGVySm9pblN0YXRlbWVudDtcbiAgICAgICAgdGhpcy5Tb3J0Q2xhdXNlID0gU29ydENsYXVzZTtcbiAgICAgICAgdGhpcy5GaWVsZFNvcnQgPSBGaWVsZFNvcnQ7XG4gICAgICAgIHRoaXMuQ29sbGVjdGlvblJlZmVyZW5jZSA9IENvbGxlY3Rpb25SZWZlcmVuY2U7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJzdHJhY3RTeW50YXhUcmVlXG4iXX0=