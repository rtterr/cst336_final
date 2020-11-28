const GOOGLE_CLOUD_KEY = process.env.GOOGLE_CLOUD_KEY;

module.exports = {
  googlePlaces: {
    getGroceryUrl: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?radius=3000&type=grocery&key=${GOOGLE_CLOUD_KEY}&keyword=grocery`,
    getPhotoUrl: `https://maps.googleapis.com/maps/api/place/photo?key=${GOOGLE_CLOUD_KEY}&maxwidth=600&photoreference=`,
    mapsUrl: `https://www.google.com/maps/place/?q=place_id:`
  }
};
