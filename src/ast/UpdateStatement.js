import Statement from './Statement';
import DefaultResultHandler from '../DefaultResultHandler';
import DefaultErrorHandler from '../DefaultErrorHandler';

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
        this.db = null;

    }

    clone() {

        return new UpdateStatement(this.collection, this.changes, this.where, this.once, this.location);

    }

    execute(context = this.context,
        resultHandler = DefaultResultHandler,
        errorHandler = DefaultErrorHandler) {

        var where = {};
        var update = {};
        var db = this.db;

        update = this.changes.reduce((prev, curr) => curr.apply(prev, context), update);
        where = this.where.reduce((prev, curr) => curr.apply(prev, context), where);

        return ((this.once) ?
            db.collection(this.collection.asValue(context)).updateOne(where, update) :
            db.collection(this.collection.asValue(context)).updateMany(where, update)).
        then(result => resultHandler.onResult(result)).
        catch(e => errorHandler.onError(e));



    }

}

export default UpdateStatement
