import Node from './Node';

/**
 * ContextReference 
 */
class ContextReference extends Node {


    constructor(field,  location) {

        super();
        this.type = 'context-reference';
        this.field = field;
        this.location = location;

    }
}

export default ContextReference
