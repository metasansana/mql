import Node from './Node';

/**
 * BooleanLiteral 
 */
class BooleanLiteral extends Node {

    constructor(value, location) {

      super();
      this.type = 'boolean-literal';
        this.value = value;
        this.location = location;

    }

    asValue() {

      return Boolean(this.value);

    }

    transpile() {

      return this.value;

    }

    compile(o) {

      return this.sourceNode(o.fileName, this.value);

    }

}

export default BooleanLiteral
