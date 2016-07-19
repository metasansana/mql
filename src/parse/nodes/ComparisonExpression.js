import Node from './Node';

/**
 * ComparisonExpression 
 */
class ComparisonExpression extends Node {


    constructor(left, operator, right, location) {

        super();
        this.type = 'comparison-expression';
        this.left = left;
        this.operator = operator;
        this.right = right;
        this.location = location;

    }
}

export default ComparisonExpression
