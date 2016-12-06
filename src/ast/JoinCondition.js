import Property from 'property-seek';
import Node from './Node';

/**
 * JoinCondition
 */
class JoinCondition extends Node {


    constructor(rkey, lkey, location) {

        super();
        this.type = 'join-condition';
        this.rkey = rkey;
        this.lkey = lkey;
        this.location = location;

    }

    /**
     * getWhereClause
     */
    getWhereClause(data, context) {

        var where = {};
        where[this.rkey.asValue(context)] = {
            $in: data.map(doc => Property.get(doc, this.lkey.asValue(context))).
            filter(doc => (doc != null))
        };
        return where;

    }

    compare(ldoc, rdoc) {

        var left = Property.get(ldoc, this.lkey.asValue({}));
        var right = Property.get(rdoc, this.rkey.asValue({}));

        if (left == null)
            return false;

        if (right == null)
            return false;

        return (left === right);

    }

}

export default JoinCondition
