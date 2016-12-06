import Node from './Node';

/**
 * SkipClause
 */
class SkipClause extends Node {

    constructor(value, location) {

        super();
        this.type = 'limit-clause'
        this.value = value;
        this.location = location;

    }

    apply(cursor, context) {

         return cursor.skip(Number(this.value));

    }

}

export default SkipClause
