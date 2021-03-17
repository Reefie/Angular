
let errorHandler = (e, request, response, next) => {
    if (e.name === 'UnauthorizedError') {
        // jwt authentication error
        return response.status(401).json({ message: 'Invalid Token' });
    }

    // e = my Server error --> IT HAS AN ENUM INSIDE (!!) called errorType
    if (e.errorType != undefined && e.errorType.isShowStackTrace) {
        console.error(e);
        response.status(e.errorType.httpCode).json({ error: e.errorType.message });
        return;
    }
    response.status(700).json({ error: "General error" });
}

module.exports = errorHandler;

