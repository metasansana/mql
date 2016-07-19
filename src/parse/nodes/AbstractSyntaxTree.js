import ObjectLiteral from './ObjectLiteral';
import BooleanLiteral from './BooleanLiteral';
import NumberLiteral from './NumberLiteral';
import StringLiteral from './StringLiteral';
import ArrayLiteral from './ArrayLiteral';
import FindStatement from './FindStatement';
import InsertStatement from './InsertStatement';
import UpdateStatement from './UpdateStatement';
import RemoveStatement from './RemoveStatement';
import LogicalExpression from './LogicalExpression';
import ComparisonExpression from './ComparisonExpression';
import FieldReference from './FieldReference';
import LimitClause from './LimitClause';
import ContextReference from './ContextReference';
import VariableReference from './VariableReference';
import Identifier from './Identifier';
import InnerJoinStatement from './InnerJoinStatement';
import LeftJoinStatement from './LeftJoinStatement';
import OuterJoinStatement from './OuterJoinStatement';
import SortClause from './SortClause';
import FieldSort from './FieldSort';
import CollectionReference from './CollectionReference';

/**
 * AbstractSyntaxTree 
 */
class AbstractSyntaxTree {

    constructor() {

        this.BooleanLiteral = BooleanLiteral;
        this.NumberLiteral = NumberLiteral;
        this.StringLiteral = StringLiteral;
        this.ArrayLiteral = ArrayLiteral;
        this.ObjectLiteral = ObjectLiteral;
        this.FindStatement = FindStatement;
        this.InsertStatement = InsertStatement;
        this.UpdateStatement = UpdateStatement;
        this.RemoveStatement = RemoveStatement;
        this.LogicalExpression = LogicalExpression;
        this.ComparisonExpression = ComparisonExpression;
        this.FieldReference = FieldReference;
        this.ContextReference = ContextReference;
        this.VariableReference = VariableReference;
        this.Identifier = Identifier;
        this.LimitClause = LimitClause;
        this.InnerJoinStatement = InnerJoinStatement;
        this.LeftJoinStatement = LeftJoinStatement;
        this.OuterJoinStatement = OuterJoinStatement;
        this.SortClause = SortClause;
        this.FieldSort = FieldSort;
        this.CollectionReference = CollectionReference;

    }

}

export default AbstractSyntaxTree
