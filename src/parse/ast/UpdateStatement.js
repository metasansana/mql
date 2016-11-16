import Statement from './Statement';

/**
 * UpdateStatement
 */
class UpdateStatement extends Statement {

    constructor(collection, changes, where, once, location) {

        super();
        this.type = 'update-statement';
        this.collection = collection;
        this.changes = changes;
        this.where = where;
        this.once = once;
        this.location = location;

    }

    execute(db, context) {

        var where = {};
        var update = {};

        update = this.changes.reduce((prev, curr) => curr.apply(prev, context), update);
        where = this.where.reduce((prev, curr) => curr.apply(prev, context), where);

        return (this.once) ?
            db.collection(this.collection.asValue(context)).updateOne(where, update) :
            db.collection(this.collection.asValue(context)).updateMany(where, update);

    }

}

export default UpdateStatement
