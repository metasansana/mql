import Node from './Node';

/**
 * FindStatement 
 */
class FindStatement extends Node {

    constructor(collection, field_selection, where_conditions, modifiers, location) {

        super();
        this.type = 'find-statement';
        this.collection = collection;
        this.field_selection = field_selection;
        this.where_conditions = where_conditions;
        this.modifiers = modifiers;
        this.location = location;

    }

}
export default FindStatement
