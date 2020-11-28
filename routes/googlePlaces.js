const fetch = require('node-fetch');
const config = require('config');

const { googlePlaces: { getGroceryUrl, getPhotoUrl, mapsUrl } } = config;

const headers = {
  'Content-Type': 'application/json'
};

function initGooglePlaces(app) {
  app.get('/grocery/nearby/:lat/:long', async (req, res) => {
    const { lat, long } = req.params;

    if (!lat || !long) {
      _sendClientError(res);
      return;
    }

    const url = getGroceryUrl + `&location=${lat},${long}`;
    try {
      const response = await fetch(url, { method: 'POST', headers });
      const json = await response.json();
      const mappedResults = json.results.map((location) => {
        location.mapsUrl = generateMapsLink(location.place_id);
        return location;
      });
      res.json(mappedResults);
    }
    catch (error) {
      console.error(error);
      _sendServerError(res);
    }
  });

  app.get('/grocery/photo/:id', async (req, res) => {
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

function generateMapsLink(placeId) {
  return mapsUrl + placeId;
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
