import beof from 'beof';
import Node from './Node';

/**
 * Statement
 */
class Statement extends Node {

  /**
   * setCollection changes the value of the collection.
   * @param {string} collection
   * @returns {FindStatement}
   */
  setCollection(collection) {

    beof({
      collection
    }).string();

    this.collection = {

      asValue() {

        return collection;

      }

    }

    return this;

  }

}

export default Statement

