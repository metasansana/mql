import Node from './Node';

/**
 * Condition 
 */
class Condition extends Node {


    constructor(left, operator, right, location) {

        super();
        this.type = 'condition';
        this.left = left;
        this.operator = operator;
        this.right = right;
        this.location = location;

    }
}

export default Condition
