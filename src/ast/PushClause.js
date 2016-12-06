import Node from './Node';

/**
 * PushClause
 */
class PushClause extends Node {


    constructor(field, update, location) {

        super();
        this.type = 'push-clause';
        this.field = field;
        this.update = update;
        this.location = location;

    }

    apply(update, context) {

        update.$push = {

            [this.field]: this.update.asValue(context)

        }

        return update;

    }

}

export default PushClause
