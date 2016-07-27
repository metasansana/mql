import Property from 'property-seek';
import Node from './Node';

/**
 * ContextReference 
 * @param {Expression} expression 
 * @param {array<Filter>} filters 
 * @param {Location} location 
 */
class ContextReference extends Node {

    constructor(key, location) {

        super();
        this.type = 'context-reference';
        this.key = key;

    }

    asValue(context) {

      return Property.get(context, this.key) || null;

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

export default ContextReference
