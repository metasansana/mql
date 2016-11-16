import beof from 'beof';
import Statement from './Statement';

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

    }

    /**
     * execute this statement
     * @param {mongodb.Connection} db
     * @param {object} context
     * @returns {Promise}
     */
    execute(db, context) {

        var fields = {
            _id: false
        };
        var where = {};
        var cursor;

        where = this.where.reduce((prev, curr) => curr.apply(prev, context), where);

        fields = this.fields.reduce((prev, curr) => curr.apply(prev, context), fields);

        cursor = db.collection(this.collection.asValue(context)).find(where).project(fields);

        cursor = this.modifiers.reduce((prev, curr) => curr.apply(prev, context), cursor);

        return this.joins.reduce((p, join) => p.then((data) =>
            join.apply(data, db, context)), cursor.toArray()).
        then(data => (this.one) ? data[0] : data);

    }

}

export default FindStatement
