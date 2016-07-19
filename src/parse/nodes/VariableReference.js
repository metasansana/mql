import Node from './Node';

/**
 * VariableReference 
 * @param {Expression} expression 
 * @param {array<Filter>} filters 
 * @param {Location} location 
 */
class VariableReference extends Node {

    constructor(variable, location) {

        super();
        this.type = 'variable-reference';
        this.variable = variable;

    }

    transpile() {

        return this.filters.reduce((prev, current) => current.addValue(prev),
            this.expression).transpile();

    }

    compile(o) {

        return this.sourceNode(o.fileName, '').
        add(this.filters.reduce((prev, current) => current.addValue(prev),
            this.expression).compile(o));

    }

}

export default VariableReference
