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
            filter(doc => (doc !== undefined) || (doc !== null))
        };
        return where;

    }

    compare(d, doc) {

        var left = Property.get(d, this.lkey.asValue({}));
        var right = Property.get(doc, this.rkey.asValue({}));

        if ((left === undefined) || (left === null))
            return false;

        if ((right === undefined) || (right === null))
            return false;

        return (left === right);

    }


    rightCompare(right1, right2) {

        var key = this.rkey.asValue({});

        return ((Property.get(right1, key)) === (Property.get(right2, key)));

    }
}

export default JoinCondition
