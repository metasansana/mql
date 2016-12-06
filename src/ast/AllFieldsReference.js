import Node from './Node';

/**
 * AllFieldsReference
 */
class AllFieldsReference extends Node {

  constructor(location) {

    super();
    this.type = 'all-fields-reference';
    this.location = location;

  }

  apply(fields, context) {

    return {
      _id: false
    };

  }

}

export default AllFieldsReference

