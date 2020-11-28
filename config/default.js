const GOOGLE_CLOUD_KEY = process.env.GOOGLE_CLOUD_KEY;

module.exports = {
  googlePlaces: {
    getGroceryUrl: `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Grocery%Store&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=${GOOGLE_CLOUD_KEY}`,
    getPhotoUrl: `https://maps.googleapis.com/maps/api/place/photo?key=${GOOGLE_CLOUD_KEY}&maxwidth=600&photoreference=`
  }
};
