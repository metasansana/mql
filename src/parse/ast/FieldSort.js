import Node from './Node';

/**
 * FieldSort 
 */
class FieldSort extends Node {

    constructor(field, direction,  location) {

        super();
        this.type = 'field-sort'
        this.field = field;
        this.direction = direction;
        this.location = location;

    }

}
export default FieldSort
