import Node from './Node';

/**
 * InputStatement 
 */
class InputStatement extends Node {

    constructor(values, collection, location) {

        super();
        this.type = 'insert-statement';
        this.values = values;
        this.collection = collection;
        this.location = location;

    }

}
export default InputStatement
