const notFoundException = (message) => ({ statusCode: 404, message, error: true });
const sucessException = (message) => ({ statusCode: 200, message, error: false });
const conflictException = (message) => ({ statusCode: 409, message, error: true });
const createException = (message) => ({ statusCode: 201, message, error: false });

module.exports = {
  notFoundException,
  sucessException,
  conflictException,
  createException,
};
