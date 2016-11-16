import Node from './Node';

/**
 * SortClause
 */
class SortClause extends Node {

    constructor(fields, location) {

        super();
        this.type = 'sort-clause'
        this.fields = fields;
        this.location = location;

    }

    apply(cursor, context) {

        return cursor.sort(this.fields.asValue());

    }

}
export default SortClause
