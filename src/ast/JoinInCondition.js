import Property from 'property-seek';
import Node from './Node';

/**
 * JoinInCondition
 */
class JoinInCondition extends Node {


    constructor(rkey, lkey, location) {

        super();
        this.type = 'join-in-condition';
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

            $in: [].concat.apply([], (data.map(doc => {
                var target = Property.get(doc, this.lkey.asValue(context));
                return Array.isArray(target) ? target : [];
            })))

        };

        return where;

    }

}

export default JoinInCondition
