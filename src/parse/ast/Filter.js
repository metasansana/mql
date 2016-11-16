import Node from './Node';

/**
 * Filter
 */
class Filter extends Node {


    constructor(field, operator, value, location) {

        super();
        this.type = 'filter';
        this.field = field;
        this.operator = operator;
        this.value = value;
        this.location = location;

    }

    apply(o, context) {

        var field = this.field;
        o[field] = o[field] || {};

        switch (this.operator) {

            case '?':
                o[field] = {
                    $regex: this.value.asValue(context).
                    replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                    $options: 'i'
                };
                break;
            case '$elemMatch':
                o[field] = {$elemMatch:  this.value.asValue(context)};
                break;
            default:
                o[field][this.operator] = this.value.asValue(context);
                break;

        }

        return o;
    }
}

export default Filter
