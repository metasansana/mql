import ObjectLiteral from './ObjectLiteral';
import BooleanLiteral from './BooleanLiteral';
import NumberLiteral from './NumberLiteral';
import StringLiteral from './StringLiteral';
import ArrayLiteral from './ArrayLiteral';
import FindStatement from './FindStatement';
import LogicalExpression from './LogicalExpression';
import Condition from './Condition';
import FieldReference from './FieldReference';
import Identifier from './Identifier';
/**
 * AbstractSyntaxTree 
 */
class AbstractSyntaxTree {

    constructor() {

        this.BooleanLiteral = BooleanLiteral;
        this.NumberLiteral = NumberLiteral;
        this.StringLiteral = StringLiteral;
        this.ArrayLiteral = ArrayLiteral;
        this.FindStatement = FindStatement;
        this.LogicalExpression = LogicalExpression;
        this.Condition = Condition;
        this.FieldReference = FieldReference;
        this.Identifier = Identifier;

    }

}

export default AbstractSyntaxTree
