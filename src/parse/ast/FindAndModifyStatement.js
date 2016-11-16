import Statement from './Statement';

/**
 * FindAndModifyStatement
 */
class FindAndModifyStatement extends Statement {

    constructor(collection, original, fields, where, upsert, set, update, sort, location) {

        super();
        this.type = 'find-and-modify-statement';
        this.collection = collection;
        this.original = original;
        this.fields = fields;
        this.where = where;
        this.upsert = upsert;
        this.set = set;
        this.update = update;
        this.sort = sort;
        this.location = location;

    }

    execute(db, context) {

        var where = Object.create(null);
        var fields = Object.create(null);
        var options = { returnOriginal: this.original, upsert: this.upsert };
        var update = this.update.asValue(context);

        update = this.set ? { $set: update } : update;

        where = this.where.reduce((prev, curr) => curr.apply(prev, context), where);

        if (this.fields.length > 0)
            options.projection = this.fields.reduce((prev, curr) => curr.apply(prev, context), fields);

        if (this.sort)
            options.sort = this.sort.asValue(context);

        return db.collection(this.collection.asValue(context)).
        findOneAndUpdate(where, update, options);

    }

}

export default FindAndModifyStatement
