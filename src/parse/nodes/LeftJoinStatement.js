import Node from './Node';

/**
 * LeftJoinStatement 
 */
class LeftJoinStatement extends Node {

    constructor(collection, field_selection, where_conditions, modifiers, location) {

        super();
        this.type = 'inner-join';
        this.collection = collection;
        this.field_selection = field_selection;
        this.where_condition = where_conditions;
        this.modifiers = modifiers;
        this.location = location;

    }

}
export default LeftJoinStatement
