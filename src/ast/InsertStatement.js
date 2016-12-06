import Statement from './Statement';
import DefaultResultHandler from '../DefaultResultHandler';
import DefaultErrorHandler from '../DefaultErrorHandler';

/**
 * InsertStatement
 */
class InsertStatement extends Statement {

    constructor(collection, values, location) {

        super();
        this.type = 'insert-statement';
        this.collection = collection;
        this.values = values;
        this.location = location;
        this.db = null;

    }

    clone() {

        return new InsertStatement(this.collection, this.values, this.location);

    }

    execute(context = this.context,
        resultHandler = DefaultResultHandler,
        errorHandler = DefaultErrorHandler) {

        var db = this.db;

        return db.collection(this.collection.asValue(context)).
        insertOne(this.values.asValue(context)).
        then(result => resultHandler.onResult(result)).
        catch(e => errorHandler.onError(e));

    }

}

export default InsertStatement
