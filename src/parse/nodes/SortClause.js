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

}
export default SortClause
