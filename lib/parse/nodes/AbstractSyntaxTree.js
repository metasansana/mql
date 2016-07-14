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

var _LogicalExpression = require('./LogicalExpression');

var _LogicalExpression2 = _interopRequireDefault(_LogicalExpression);

var _Condition = require('./Condition');

var _Condition2 = _interopRequireDefault(_Condition);

var _FieldReference = require('./FieldReference');

var _FieldReference2 = _interopRequireDefault(_FieldReference);

var _Identifier = require('./Identifier');

var _Identifier2 = _interopRequireDefault(_Identifier);

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
    this.FindStatement = _FindStatement2.default;
    this.LogicalExpression = _LogicalExpression2.default;
    this.Condition = _Condition2.default;
    this.FieldReference = _FieldReference2.default;
    this.Identifier = _Identifier2.default;
};

exports.default = AbstractSyntaxTree;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wYXJzZS9ub2Rlcy9BYnN0cmFjdFN5bnRheFRyZWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBQ0E7Ozs7SUFHTSxrQixHQUVGLDhCQUFjO0FBQUE7O0FBRVYsU0FBSyxjQUFMO0FBQ0EsU0FBSyxhQUFMO0FBQ0EsU0FBSyxhQUFMO0FBQ0EsU0FBSyxZQUFMO0FBQ0EsU0FBSyxhQUFMO0FBQ0EsU0FBSyxpQkFBTDtBQUNBLFNBQUssU0FBTDtBQUNBLFNBQUssY0FBTDtBQUNBLFNBQUssVUFBTDtBQUVILEM7O2tCQUlVLGtCIiwiZmlsZSI6IkFic3RyYWN0U3ludGF4VHJlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBPYmplY3RMaXRlcmFsIGZyb20gJy4vT2JqZWN0TGl0ZXJhbCc7XG5pbXBvcnQgQm9vbGVhbkxpdGVyYWwgZnJvbSAnLi9Cb29sZWFuTGl0ZXJhbCc7XG5pbXBvcnQgTnVtYmVyTGl0ZXJhbCBmcm9tICcuL051bWJlckxpdGVyYWwnO1xuaW1wb3J0IFN0cmluZ0xpdGVyYWwgZnJvbSAnLi9TdHJpbmdMaXRlcmFsJztcbmltcG9ydCBBcnJheUxpdGVyYWwgZnJvbSAnLi9BcnJheUxpdGVyYWwnO1xuaW1wb3J0IEZpbmRTdGF0ZW1lbnQgZnJvbSAnLi9GaW5kU3RhdGVtZW50JztcbmltcG9ydCBMb2dpY2FsRXhwcmVzc2lvbiBmcm9tICcuL0xvZ2ljYWxFeHByZXNzaW9uJztcbmltcG9ydCBDb25kaXRpb24gZnJvbSAnLi9Db25kaXRpb24nO1xuaW1wb3J0IEZpZWxkUmVmZXJlbmNlIGZyb20gJy4vRmllbGRSZWZlcmVuY2UnO1xuaW1wb3J0IElkZW50aWZpZXIgZnJvbSAnLi9JZGVudGlmaWVyJztcbi8qKlxuICogQWJzdHJhY3RTeW50YXhUcmVlIFxuICovXG5jbGFzcyBBYnN0cmFjdFN5bnRheFRyZWUge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgdGhpcy5Cb29sZWFuTGl0ZXJhbCA9IEJvb2xlYW5MaXRlcmFsO1xuICAgICAgICB0aGlzLk51bWJlckxpdGVyYWwgPSBOdW1iZXJMaXRlcmFsO1xuICAgICAgICB0aGlzLlN0cmluZ0xpdGVyYWwgPSBTdHJpbmdMaXRlcmFsO1xuICAgICAgICB0aGlzLkFycmF5TGl0ZXJhbCA9IEFycmF5TGl0ZXJhbDtcbiAgICAgICAgdGhpcy5GaW5kU3RhdGVtZW50ID0gRmluZFN0YXRlbWVudDtcbiAgICAgICAgdGhpcy5Mb2dpY2FsRXhwcmVzc2lvbiA9IExvZ2ljYWxFeHByZXNzaW9uO1xuICAgICAgICB0aGlzLkNvbmRpdGlvbiA9IENvbmRpdGlvbjtcbiAgICAgICAgdGhpcy5GaWVsZFJlZmVyZW5jZSA9IEZpZWxkUmVmZXJlbmNlO1xuICAgICAgICB0aGlzLklkZW50aWZpZXIgPSBJZGVudGlmaWVyO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFic3RyYWN0U3ludGF4VHJlZVxuIl19