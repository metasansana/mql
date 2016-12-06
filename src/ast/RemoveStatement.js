import Statement from './Statement';
import DefaultResultHandler from '../DefaultResultHandler';
import DefaultErrorHandler from '../DefaultErrorHandler';

/**
 * RemoveStatement
 */
class RemoveStatement extends Statement {

    constructor(collection, where, one, location) {

        super();
        this.type = 'remove-statement';
        this.collection = collection;
        this.where = where;
        this.one = one;
        this.location = location;
        this.db = null;

    }

    clone() {

        return new RemoveStatement(this.collection, this.where, this.one, this.location);

    }


    execute(context = this.context,
        resultHandler = DefaultResultHandler,
        errorHandler = DefaultErrorHandler) {

        var where = {};
        var db = this.db;

        where = this.where.reduce((prev, curr) => curr.apply(prev, context), where);

        return ((this.one) ?
            db.collection(this.collection.asValue(context)).deleteOne(where) :
            db.collection(this.collection.asValue(context)).deleteMany(where)).
        then(result => resultHandler.onResult(result)).
        catch(e => errorHandler.onError(e));


    }

}

export default RemoveStatement
