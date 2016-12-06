import beof from 'beof';
import Statement from './Statement';
import DefaultResultHandler from '../DefaultResultHandler';
import DefaultErrorHandler from '../DefaultErrorHandler';

/**
 * FindStatement
 */
class FindStatement extends Statement {

    constructor(collection, fields, where, modifiers, joins, one, location) {

        super();
        this.type = 'find-statement';
        this.collection = collection;
        this.fields = fields;
        this.where = where;
        this.modifiers = modifiers;
        this.joins = joins;
        this.one = one || false;
        this.location = location;
        this.db = null;

    }

    clone() {

        return new FindStatement(
            this.collection,
            this.fields,
            this.where,
            this.modifiers,
            this.joins,
            this.one,
            this.location);

    }

    getCursor(context = this.context) {

        var fields = {
            _id: false
        };
        var where = {};
        var cursor;
        var db = this.db;

        where = this.where.reduce((prev, curr) => curr.apply(prev, context), where);

        fields = this.fields.reduce((prev, curr) => curr.apply(prev, context), fields);

        cursor = db.collection(this.collection.asValue(context)).find(where).project(fields);

        cursor = this.modifiers.reduce((prev, curr) => curr.apply(prev, context), cursor);

    }

    execute(context = this.context,
        resultHandler = DefaultResultHandler,
        errorHandler = DefaultErrorHandler) {

        return this.joins.reduce((p, join) => p.then((data) =>
            join.apply(data, db, context)), this.getCursor(context).toArray()).
        then(data => (this.one) ? data[0] : data).
        then(result => resultHandler.onResult(result)).
        catch(e => errorHandler.onError(e));

    }

}

export default FindStatement
