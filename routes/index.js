const initViews = require('./views');
const initGooglePlaces = require('./googlePlaces');
const initProductSearch = require('./productSearch');

function initRoutes(app) {
  initViews(app);
  initGooglePlaces(app);
  initProductSearch(app);
}

module.exports = initRoutes;
