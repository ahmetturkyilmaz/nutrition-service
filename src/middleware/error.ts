import ErrorResponse from "../exception/ErrorResponse";

const errorHandler = (err, req, res, next) => {
    let error;
    error.message = err.message;
    console.log(err);
    if (err.name === 'CastError') {
        const message = `Object not found with id of ${err.value}`
        error = new ErrorResponse(message, 404)
    }
    if (err.code === 1100) {
        const message = 'Duplicate field value entered'
        error = new ErrorResponse(message, 400);
    }
    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors);
        error = new ErrorResponse(message, 400)
    }
    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error'
    })

};

module.exports = errorHandler;
