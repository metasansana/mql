/**
 * ErrorHandler
 * @interface
 */
class ErrorHandler {

    /**
     * onError is called when executing the statement yields an
     * exception.
     * @param {Error} e
     * @returns {Error}
     */
    onError() {

    }

}

export default ErrorHandler
