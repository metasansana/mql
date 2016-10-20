import Statement from './Statement';

/**
 * InsertStatement
 */
class InsertStatement extends Statement {

  constructor(collection, values, location) {

    super();
    this.type = 'insert-statement';
    this.collection = collection;
    this.values = values;
    this.location = location;

  }

  execute(db, context) {

    return db.collection(this.collection.asValue(context)).
    insertOne(this.values.asValue(context));

  }

}

export default InsertStatement

