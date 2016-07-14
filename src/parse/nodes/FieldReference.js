import Node from './Node';

/**
 * FieldReference 
 */
class FieldReference extends Node {


    constructor(name, include, location) {

        super();
        this.type = 'field-reference';
        this.name = name;
        this.include = include;
        this.location = location;

    }
}

export default FieldReference
