import Statement from './Statement';
import DefaultResultHandler from '../DefaultResultHandler';
import DefaultErrorHandler from '../DefaultErrorHandler';

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
        this.db = null;
        this.context = null;

    }

    clone() {

        return new FindAndModifyStatement(
            this.collection,
            this.original,
            this.fields,
            this.where,
            this.upsert,
            this.set,
            this.update,
            this.sort,
            this.location);

    }

    execute(context = this.context,
        resultHandler = DefaultResultHandler,
        errorHandler = DefaultErrorHandler) {

        var db = this.db;
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
        findOneAndUpdate(where, update, options).
        then(result => resultHandler.onResult(result)).
        catch(e => errorHandler.onError(e));

    }

}

export default FindAndModifyStatement
