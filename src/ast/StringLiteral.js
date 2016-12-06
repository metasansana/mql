import Node from './Node';

/**
 * StringLiteral 
 */
class StringLiteral extends Node {

    constructor(value, location) {

        super();
        this.type = 'string-literal';
        this.value = value;
        this.location = location;

    }

    asValue(context) {

      return this.value.substring(1, this.value.length - 1);

    }

    transpile() {

        return this.value;

    }

    compile(o) {

        return this.sourceNode(o.fileName, this.value);

    }

}

export default StringLiteral
