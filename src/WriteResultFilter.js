/**
 * WriteCompleteHandler
 */
class WriteCompleteHandler {

    /**
     * onWriteComplete
     */
    onWriteComplete() {

    }

}


/**
 * WriteResultFilter
 * @param {WriteCompleteHandler} handler
 * implements {ResultHandler}
 */
class WriteResultFilter {

    constructor(handler) {

        this._handler = handler;

    }

    onResult(result) {

       return this._handler.onWriteComplete(result);

    }

}

export { WriteCompleteHandler }
export default WriteResultFilter
