import Node from './Node';

/**
 * SetClause
 */
class SetClause extends Node {

    constructor(update, location) {

        super();
        this.type = 'set-clause';
        this.update = update;
        this.location = location;

    }

    apply(update, context) {

        update.$set = this.update.asValue(context);
        return update;

    }

}

export default SetClause
