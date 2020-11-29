function sendClientError(res) {
  res.statusCode = 400;
  res.json({ message: 'invalid request' });
}

function sendServerError(res, message) {
  res.statusCode = 500;
  res.json({ message });
}

module.exports = {
  sendClientError,
  sendServerError
};
