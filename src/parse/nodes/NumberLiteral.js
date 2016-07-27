import Node from './Node';

/**
 * NumberLiteral 
 */
class NumberLiteral extends Node {

    constructor(value, location) {
        super();
        this.type = 'number-literal';
        this.value = value;
        this.location = location;

    }

    asValue(context) {

        return parseFloat(this.value);

    }

    transpile() {

        return parseFloat(this.value);

    }

    compile(o) {

        return this.sourceNode(o.fileName, parseFloat(this.value));

    }

}

export default NumberLiteral
