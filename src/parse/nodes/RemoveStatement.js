import Node from './Node';

/**
 * RemoveStatement 
 */
class RemoveStatement extends Node {

    constructor(collection, where, one, location) {

        super();
        this.type = 'remove-statement';
        this.collection = collection;
        this.where = where;
        this.one = one;
        this.location = location;

    }

    execute(db, context) {

        var where = {};
        var cursor;

        this.where.forEach(w => w.apply(where, context));

        return (this.one) ?
            db.collection(this.collection.asValue(context)).deleteOne(where) :
            db.collection(this.collection.asValue(context)).deleteMany(where);

    }

}

export default RemoveStatement
