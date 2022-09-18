const notFoundException = (message) => ({ statusCode: 404, message, error: true });
const sucessDelete = (message) => ({ statusCode: 400, message, error: false });
module.exports = { notFoundException, sucessDelete };
