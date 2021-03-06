import Node from './Node';

/**
 * Identifier 
 */
class Identifier extends Node {

    constructor(value, location) {

      super();
        this.type = 'identifier';
        this.value = value;
        this.location = location;

    }

    asValue(context) {

      return this.value;

    }

    transpile() {

        return this.value;

    }

    compile(o) {

        return this.sourceNode(o.fileName, this.value);

    }

}

export default Identifier
