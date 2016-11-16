import Node from './Node';
import Property from 'property-seek';

/**
 * LeftJoinStatement
 * @param {array} fields
 * @param {string} collection
 * @param {string} alias
 */
class LeftJoinStatement extends Node {

    constructor(fields, collection, alias, where, modifiers, condition, location) {

        super();
        this.type = 'left-join';
        this.collection = collection;
        this.alias = alias;
        this.fields = fields;
        this.where = where;
        this.modifiers = modifiers;
        this.condition = condition;
        this.location = location;

    }

    apply(data, db, context) {

        var cursor;
        var alias = this.alias.asValue();
        var where = this.condition.getWhereClause(data);
        var fields = {
            _id: false
        };

        fields = this.fields.reduce((prev, curr) => curr.apply(prev, context), fields);

        this.where.forEach(w => w.apply(where, context));

        cursor = db.collection(this.collection.asValue(context)).
        find(where, fields);
        this.modifiers.forEach(m => m.apply(cursor));

        return cursor.toArray().
        then(docs => {
            return data.map(d => {

                if (!Array.isArray(Property.get(d, alias)))
                    Property.set(d, alias, []);

                docs.forEach(doc => {

                    if (this.condition.compare(d, doc))
                        Property.get(d, alias).push(doc);

                });

                return d;

            });

        });

    }
}

export default LeftJoinStatement
