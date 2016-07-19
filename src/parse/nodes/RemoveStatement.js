import Node from './Node';

/**
 * RemoveStatement 
 */
class RemoveStatement extends Node {

    constructor(collection, where_conditions, one, location) {

        super();
        this.type = 'remove-statement';
        this.collection = collection;
        this.where_condition = where_conditions;
        this.one = one;
        this.location = location;

    }

}

export default RemoveStatement
