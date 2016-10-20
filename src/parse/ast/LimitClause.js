import Node from './Node';

/**
 * LimitClause 
 */
class LimitClause extends Node {

    constructor(value, location) {

        super();
        this.type = 'limit-clause'
        this.value = value;
        this.location = location;

    }

}
export default LimitClause
