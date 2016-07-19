import Node from './Node';

/**
 * UpdateStatement 
 */
class UpdateStatement extends Node {

    constructor(collection, values,  where_conditions, location) {

        super();
        this.type = 'update-statement';
        this.collection = collection;
        this.values = values;
        this.where_condition = where_conditions;
        this.location = location;

    }

}

export default UpdateStatement
