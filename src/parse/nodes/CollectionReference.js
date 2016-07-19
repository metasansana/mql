import Node from './Node';

/**
 * CollectionReference 
 */
class CollectionReference extends Node {

    constructor(collection, alias, location) {

        super();
        this.type = 'collection-reference';
        this.collection = collection;
        this.alias = alias;
        this.location = location;

    }
}

export default CollectionReference
