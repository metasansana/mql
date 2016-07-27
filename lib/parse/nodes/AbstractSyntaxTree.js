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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9BYnN0cmFjdFN5bnRheFRyZWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBOzs7O0lBR00sa0IsR0FFRiw4QkFBYztBQUFBOztBQUVWLFNBQUssY0FBTDtBQUNBLFNBQUssYUFBTDtBQUNBLFNBQUssYUFBTDtBQUNBLFNBQUssWUFBTDtBQUNBLFNBQUssYUFBTDtBQUNBLFNBQUssYUFBTDtBQUNBLFNBQUssZUFBTDtBQUNBLFNBQUssZUFBTDtBQUNBLFNBQUssZUFBTDtBQUNBLFNBQUssV0FBTDtBQUNBLFNBQUssTUFBTDtBQUNBLFNBQUssY0FBTDtBQUNBLFNBQUssZ0JBQUw7QUFDQSxTQUFLLFVBQUw7QUFDQSxTQUFLLFdBQUw7QUFDQSxTQUFLLGtCQUFMO0FBQ0EsU0FBSyxpQkFBTDtBQUNBLFNBQUssa0JBQUw7QUFDQSxTQUFLLGFBQUw7QUFDQSxTQUFLLFVBQUw7QUFDQSxTQUFLLFNBQUw7QUFFSCxDOztrQkFJVSxrQiIsImZpbGUiOiJBYnN0cmFjdFN5bnRheFRyZWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgT2JqZWN0TGl0ZXJhbCBmcm9tICcuL09iamVjdExpdGVyYWwnO1xuaW1wb3J0IEJvb2xlYW5MaXRlcmFsIGZyb20gJy4vQm9vbGVhbkxpdGVyYWwnO1xuaW1wb3J0IE51bWJlckxpdGVyYWwgZnJvbSAnLi9OdW1iZXJMaXRlcmFsJztcbmltcG9ydCBTdHJpbmdMaXRlcmFsIGZyb20gJy4vU3RyaW5nTGl0ZXJhbCc7XG5pbXBvcnQgQXJyYXlMaXRlcmFsIGZyb20gJy4vQXJyYXlMaXRlcmFsJztcbmltcG9ydCBGaW5kU3RhdGVtZW50IGZyb20gJy4vRmluZFN0YXRlbWVudCc7XG5pbXBvcnQgSW5zZXJ0U3RhdGVtZW50IGZyb20gJy4vSW5zZXJ0U3RhdGVtZW50JztcbmltcG9ydCBVcGRhdGVTdGF0ZW1lbnQgZnJvbSAnLi9VcGRhdGVTdGF0ZW1lbnQnO1xuaW1wb3J0IFJlbW92ZVN0YXRlbWVudCBmcm9tICcuL1JlbW92ZVN0YXRlbWVudCc7XG5pbXBvcnQgTG9naWNGaWx0ZXIgZnJvbSAnLi9Mb2dpY0ZpbHRlcic7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4vRmlsdGVyJztcbmltcG9ydCBGaWVsZFJlZmVyZW5jZSBmcm9tICcuL0ZpZWxkUmVmZXJlbmNlJztcbmltcG9ydCBMaW1pdENsYXVzZSBmcm9tICcuL0xpbWl0Q2xhdXNlJztcbmltcG9ydCBDb250ZXh0UmVmZXJlbmNlIGZyb20gJy4vQ29udGV4dFJlZmVyZW5jZSc7XG5pbXBvcnQgSWRlbnRpZmllciBmcm9tICcuL0lkZW50aWZpZXInO1xuaW1wb3J0IElubmVySm9pblN0YXRlbWVudCBmcm9tICcuL0lubmVySm9pblN0YXRlbWVudCc7XG5pbXBvcnQgTGVmdEpvaW5TdGF0ZW1lbnQgZnJvbSAnLi9MZWZ0Sm9pblN0YXRlbWVudCc7XG5pbXBvcnQgT3V0ZXJKb2luU3RhdGVtZW50IGZyb20gJy4vT3V0ZXJKb2luU3RhdGVtZW50JztcbmltcG9ydCBKb2luQ29uZGl0aW9uIGZyb20gJy4vSm9pbkNvbmRpdGlvbic7XG5pbXBvcnQgU29ydENsYXVzZSBmcm9tICcuL1NvcnRDbGF1c2UnO1xuaW1wb3J0IEZpZWxkU29ydCBmcm9tICcuL0ZpZWxkU29ydCc7XG5cbi8qKlxuICogQWJzdHJhY3RTeW50YXhUcmVlIFxuICovXG5jbGFzcyBBYnN0cmFjdFN5bnRheFRyZWUge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgdGhpcy5Cb29sZWFuTGl0ZXJhbCA9IEJvb2xlYW5MaXRlcmFsO1xuICAgICAgICB0aGlzLk51bWJlckxpdGVyYWwgPSBOdW1iZXJMaXRlcmFsO1xuICAgICAgICB0aGlzLlN0cmluZ0xpdGVyYWwgPSBTdHJpbmdMaXRlcmFsO1xuICAgICAgICB0aGlzLkFycmF5TGl0ZXJhbCA9IEFycmF5TGl0ZXJhbDtcbiAgICAgICAgdGhpcy5PYmplY3RMaXRlcmFsID0gT2JqZWN0TGl0ZXJhbDtcbiAgICAgICAgdGhpcy5GaW5kU3RhdGVtZW50ID0gRmluZFN0YXRlbWVudDtcbiAgICAgICAgdGhpcy5JbnNlcnRTdGF0ZW1lbnQgPSBJbnNlcnRTdGF0ZW1lbnQ7XG4gICAgICAgIHRoaXMuVXBkYXRlU3RhdGVtZW50ID0gVXBkYXRlU3RhdGVtZW50O1xuICAgICAgICB0aGlzLlJlbW92ZVN0YXRlbWVudCA9IFJlbW92ZVN0YXRlbWVudDtcbiAgICAgICAgdGhpcy5Mb2dpY0ZpbHRlciA9IExvZ2ljRmlsdGVyO1xuICAgICAgICB0aGlzLkZpbHRlciA9IEZpbHRlcjtcbiAgICAgICAgdGhpcy5GaWVsZFJlZmVyZW5jZSA9IEZpZWxkUmVmZXJlbmNlO1xuICAgICAgICB0aGlzLkNvbnRleHRSZWZlcmVuY2UgPSBDb250ZXh0UmVmZXJlbmNlO1xuICAgICAgICB0aGlzLklkZW50aWZpZXIgPSBJZGVudGlmaWVyO1xuICAgICAgICB0aGlzLkxpbWl0Q2xhdXNlID0gTGltaXRDbGF1c2U7XG4gICAgICAgIHRoaXMuSW5uZXJKb2luU3RhdGVtZW50ID0gSW5uZXJKb2luU3RhdGVtZW50O1xuICAgICAgICB0aGlzLkxlZnRKb2luU3RhdGVtZW50ID0gTGVmdEpvaW5TdGF0ZW1lbnQ7XG4gICAgICAgIHRoaXMuT3V0ZXJKb2luU3RhdGVtZW50ID0gT3V0ZXJKb2luU3RhdGVtZW50O1xuICAgICAgICB0aGlzLkpvaW5Db25kaXRpb24gPSBKb2luQ29uZGl0aW9uO1xuICAgICAgICB0aGlzLlNvcnRDbGF1c2UgPSBTb3J0Q2xhdXNlO1xuICAgICAgICB0aGlzLkZpZWxkU29ydCA9IEZpZWxkU29ydDtcblxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBBYnN0cmFjdFN5bnRheFRyZWVcbiJdfQ==