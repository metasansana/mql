import Node from './Node';
import Property from 'property-seek';

/**
 * OuterJoinStatement
 */
class OuterJoinStatement extends Node {

    constructor(fields, collection, alias, where, modifiers, condition, location) {

        super();
        this.type = 'outer-join';
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
        var where = {};
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

            var boundary = data.length;
            var newDocs = data.concat(docs);
            var joined = [];

            return newDocs.map((newDoc, index) => {

                if (index < boundary) {

                    Property.set(newDoc, alias, docs.filter((doc, i) => {

                        if (this.condition.compare(newDoc, doc)) {
                            joined.push(i);
                            return true;
                        }

                    }));

                    return newDoc;

                } else {


                    if (joined.indexOf(index - boundary) > -1) {

                        return null;

                    } else {

                        var o = {};
                        //Combine all that would join on the same
                        //object if that object existed
                        Property.set(o, alias, docs.filter((doc, i) => {

                            if (this.condition.rightCompare(newDoc, doc)) {
                                joined.push(i);
                                return doc;
                            }

                        }));

                        return o;

                    }

                }

            }).filter(o => o);
        });

    }

}

export default OuterJoinStatement
