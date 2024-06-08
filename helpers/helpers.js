function Respond(res, data, success, message, errorCode, statusCode) {
    const response = {
      meta: {
        success: success,
        message: message,
        error_code: errorCode,
      },
      data: data,
    };
  
    res.status(statusCode).json(response);
  }
  
  module.exports = {
    Respond,
  };

  