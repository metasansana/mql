import Node from './Node';

/**
 * LogicalExpression 
 */
class LogicalExpression extends Node {

    constructor(left, operator, right, location) {

        super();
        this.type = 'logical-expression'
        this.left = left;
        this.operator = operator;
        this.right = right;
        this.location = location;

    }

}
export default LogicalExpression
