const fetch = require('node-fetch');
const config = require('config');

const { googlePlaces: { getGroceryUrl, getPhotoUrl } } = config;

const headers = {
  'Content-Type': 'application/json'
};

function initGooglePlaces(app) {
  app.get('/nearbyGrocery', async (req, res) => {
    try {
      const response = await fetch(getGroceryUrl, { method: 'POST', headers });
      const json = await response.json();
      res.json(json);
    }
    catch (error) {
      console.error(error);
      _sendServerError(res);
    }
  });

  app.get('/groceryPhoto/:id', async (req, res) => {
    const { id } = req.params;

    if (!id) {
      _sendClientError(res);
      return;
    }

    try {
      const url = getPhotoUrl + id;
      const { url: photoUrl } = await fetch(url);
      res.json({ url: photoUrl });
    }
    catch (error) {
      console.error(error);
      _sendServerError(res);
    }
  });
}

function _sendServerError(res) {
  res.statusCode = 500;
  res.json({ message: 'Google Places error' });
}

function _sendClientError(res) {
  res.statusCode = 400;
  res.json({ message: 'invalid request' });
}

module.exports = initGooglePlaces;
