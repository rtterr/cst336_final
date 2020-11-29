const initViews = require('./views');
const initGooglePlaces = require('./googlePlaces');
const initProductSearch = require('./productSearch');
const initUser = require('./user');
const initCart = require('./cart');

function initRoutes(app) {
  initViews(app);
  initGooglePlaces(app);
  initProductSearch(app);
  // initUser(app);
  // initCart(app);
}

module.exports = initRoutes;
