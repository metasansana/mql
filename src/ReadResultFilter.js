/**
 * ReadCompleteHandler
 */
class ReadCompleteHandler {

    /**
     * onComplete
     * @param {array<object>|object} result
     */
    onReadComplete() {

    }

    /**
     * onReadEmpty
     */
    onReadEmpty() {

    }

}

/**
 * ReadResultFilter filters a find result for a cleaner API.
 * @param {ReadCompleteHandler} handler
 * @implements ResultHandler
 */
class ReadResultFilter {

    constructor(handler) {

        this._handler = handler;

    }

    onResult(result) {

        if (Array.isArray(result)) {
            if (result.length > 0)
                return this._handler.onReadComplete(result);

        } else if (result != null) {

            return this._handler.onReadComplete(result);

        }

        return this._handler.onReadEmpty(result);

    }

}
export { ReadCompleteHandler }
export default ReadResultFilter
