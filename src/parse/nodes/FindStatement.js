import Node from './Node';

/**
 * FindStatement 
 */
class FindStatement extends Node {

    constructor(collection, fields, where, modifiers, joins, location) {

        super();
        this.type = 'find-statement';
        this.collection = collection;
        this.fields = fields;
        this.where = where;
        this.modifiers = modifiers;
        this.joins = joins;
        this.location = location;

    }

    /**
     * execute this statement
     * @param {mongodb.Connection} db 
     * @param {object} context 
     * @returns {Promise}
     */
    execute(db, context) {

        var fields = this.fields;
        var where = {};
        var cursor;

        this.where.forEach(w => w.apply(where, context));
        cursor = db.collection(this.collection.asValue(context)).find(where, fields);
        this.modifiers.forEach(m => m.apply(cursor));

        return this.joins.reduce((p, join) => p.then((data) =>
            join.apply(data, db, context)), cursor.toArray());

    }

}

export default FindStatement
