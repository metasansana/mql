import Node from './Node';
import Property from 'property-seek';

/**
 * InflateStatement
 * @param {array} fields
 * @param {string} collection
 * @param {string} alias
 */
class InflateStatement extends Node {

    constructor(fields, collection, alias, where, modifiers, condition, location) {

        super();
        this.type = 'inflate-statement';
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
        var target = this.condition.lkey.asValue(context);
        var alias = (this.alias) ? this.alias.asValue(context) : target;
        var where = this.condition.getWhereClause(data);
        var fields = {
            _id: false
        };

        fields = this.fields.reduce((prev, curr) => curr.apply(prev, context), fields);

        this.where.forEach(w => w.apply(where, context));

        cursor = db.collection(this.collection.asValue(context)).find(where, fields);

        this.modifiers.forEach(m => m.apply(cursor));

        return cursor.toArray().
        then(docs => {

                return data.map(owner => {

                        if (!Array.isArray(Property.get(owner, alias)))
                            Property.set(owner, target, []);

                        Property.set(owner, alias, Property.get(owner, target).map(valToReplace =>
                                docs.reduce((prev, curr) =>
                                    ((valToReplace != null) &&
                                        (valToReplace === Property.get(curr, this.condition.rkey.asValue(context)))) ?
                                        curr : prev, null)));

                            return owner;

                        });

                });

        }
    }

    export default InflateStatement
