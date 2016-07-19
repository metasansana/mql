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
        var where = this.where.toObject();

        var cursor = db[this.collection].find(where, fields);

        this.modifiers.forEach(m => m.apply(cursor));

        return this.joins.reduce(function(p, join) {

            return p.then(function(data) {
                return join.execute(db, context, data);
            });

        }, cursor.toArray());

    }

}

export default FindStatement
