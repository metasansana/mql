/**
 * UpdateCompleteHandler
 */
class UpdateCompleteHandler {

    /**
     * onWriteComplete
     */
    onWriteComplete() {

    }

    /**
     * onUpdateMissed
     */
    onWriteMissed() {

    }

}


/**
 * UpdateResultFilter
 * @param {UpdateCompleteHandler} handler
 * implements {ResultHandler}
 */
class UpdateResultFilter {

    constructor(handler) {

        this._handler = handler;

    }

    onResult(result) {

        if (result.matchedCount === 0)
            return this._handler.onWriteMissed(result);

        return this._handler.onWriteComplete(result);

    }

}

export { UpdateCompleteHandler }
export default UpdateResultFilter
