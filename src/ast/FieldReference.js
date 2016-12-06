import Node from './Node';

/**
 * FieldReference
 */
class FieldReference extends Node {

  constructor(field, include, location) {

    super();
    this.type = 'field-reference';
    this.field = field;
    this.include = include;
    this.location = location;

  }

  apply(o, context) {

    o[this.field] =  this.include;
    return o;

  }

}

export default FieldReference

