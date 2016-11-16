import Node from './Node';

/**
 * LogicFilter
 */
class LogicFilter extends Node {

    constructor(left, operator, right, location) {

        super();
        this.type = 'logical-filter'
        this.left = left;
        this.operator = operator.toLowerCase();
        this.right = right;
        this.location = location;

    }

    apply(o, context) {

        var op = `$${this.operator}`;

        o[op] = o[op] || [];
        o[op].push(this.left.apply({}, context));
        o[op].push(this.right.apply({}, context));
        return o;

    }


}

export default LogicFilter
