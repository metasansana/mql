import Node from './Node';

/**
 * FieldReference 
 */
class FieldReference extends Node {


    constructor(value, include, location) {

        super();
        this.type = 'field-reference';
        this.value = value;
        this.include = include;
        this.location = location;

    }
}

export default FieldReference
