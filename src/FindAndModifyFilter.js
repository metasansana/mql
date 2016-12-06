import assert from 'assert';

/**
 * FindAndModifyResultFilter
 * @param {UpdateResultFilter.UpdateCompleteHandler} handler
 * implements {ResultHandler}
 */
class FindAndModifyResultFilter {

    constructor(handler) {

        this._handler = handler;

    }

    onResult(result) {

        assert.equal(result.ok === 1);

        if(!result.value)
            return this._handler.onWriteMissed(result);

        return this._handler.onWriteComplete(result.value);

    }

}

export { FindAndModifyCompleteHandler }
export default FindAndModifyResultFilter
