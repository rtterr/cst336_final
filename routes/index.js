const initViews = require('./views');
const initGooglePlaces = require('./googlePlaces');

function initRoutes(app) {
  initViews(app);
  initGooglePlaces(app);
}

module.exports = initRoutes;
