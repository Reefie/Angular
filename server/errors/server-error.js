class ServerError extends Error{

    // Actual usage :    
    // 1. THE USERS throws the error, due to a failed validation.
    // in such a case, the user ONLY supplies the : errorType + (optional) the message   
    // 2. A 3rd party exception occurs, in such a case we'd like to wrap that exception 
    // with a ServerError, YET (!!) without losing the information on the INITIAL 
    // cause (the first error). So the 2nd version is when we WRAP an internal (inner) exception
    constructor(errorType, message, innerError){
        super(message);
        this.errorType = errorType;
        this.innerError = innerError;
    }

}

module.exports = ServerError;