import ObjectLiteral from './ObjectLiteral';
import BooleanLiteral from './BooleanLiteral';
import NumberLiteral from './NumberLiteral';
import StringLiteral from './StringLiteral';
import ArrayLiteral from './ArrayLiteral';
import FindStatement from './FindStatement';
import InsertStatement from './InsertStatement';
import UpdateStatement from './UpdateStatement';
import RemoveStatement from './RemoveStatement';
import LogicFilter from './LogicFilter';
import Filter from './Filter';
import FieldReference from './FieldReference';
import AllFieldsReference from './AllFieldsReference';
import LimitClause from './LimitClause';
import ContextReference from './ContextReference';
import Identifier from './Identifier';
import InnerJoinStatement from './InnerJoinStatement';
import LeftJoinStatement from './LeftJoinStatement';
import OuterJoinStatement from './OuterJoinStatement';
import JoinCondition from './JoinCondition';
import SortClause from './SortClause';
import FieldSort from './FieldSort';

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
    this.LogicFilter = LogicFilter;
    this.Filter = Filter;
    this.FieldReference = FieldReference;
    this.AllFieldsReference = AllFieldsReference;
    this.ContextReference = ContextReference;
    this.Identifier = Identifier;
    this.LimitClause = LimitClause;
    this.InnerJoinStatement = InnerJoinStatement;
    this.LeftJoinStatement = LeftJoinStatement;
    this.OuterJoinStatement = OuterJoinStatement;
    this.JoinCondition = JoinCondition;
    this.SortClause = SortClause;
    this.FieldSort = FieldSort;

  }

}

export default AbstractSyntaxTree

