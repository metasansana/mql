import Node from './Node';

/**
 * UpdateStatement 
 */
class UpdateStatement extends Node {

    constructor(collection, values, where, once, location) {

        super();
        this.type = 'update-statement';
        this.collection = collection;
        this.values = values;
        this.where = where;
        this.once = once;
        this.location = location;

    }

    execute(db, context) {

        var where = {};
        var update = {
            $set: this.values.asValue(context)
        };

        this.where.forEach(w => w.apply(where, context));

        return (this.once) ?
            db.collection(this.collection.asValue(context)).updateOne(where, update) :
            db.collection(this.collection.asValue(context)).updateMany(where, update);

    }

}

export default UpdateStatement
