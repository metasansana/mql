/**
 * RemoveCompleteHandler
 */
class RemoveCompleteHandler {

    /**
     * onRemoveComplete
     */
    onRemoveComplete() {

    }

    /**
     * onRemoveMissed
     */
    onRemoveMissed() {

    }

}
/**
 * RemoveResultFilter
 * @param {RemoveCompleteHandler} handler
 * @implements {ResultHandler}
 */
class RemoveResultFilter {

    constructor(handler) {

        this._handler = handler;

    }

    onResult(result) {

  if (result.deletedCount === 0)
            return this._handler.onRemoveMissed(result);

       return this._handler.onRemoveComplete(result);

    }

}

export default RemoveResultFilter
