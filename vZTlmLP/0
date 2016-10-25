import Statement from './Statement';

/**
 * FindAndModifyStatement
 */
class FindAndModifyStatement extends Statement {

    constructor(collection, original, fields, where, upsert,  update, sort, location) {

        super();
        this.type = 'find-and-modify-statement';
        this.collection = collection;
        this.original = original;
        this.fields = fields;
        this.where = where;
        this.upsert = upsert;
        this.update = update;
        this.sort = sort;
        this.location = location;

    }

    execute(db, context) {

        var where = {};
        var options = { returnOriginal: this.original, upsert:this.upsert };
        var update = this.update.asValue(context);

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
