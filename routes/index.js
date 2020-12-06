const initViews = require('./views');
const initGooglePlaces = require('./googlePlaces');
const initProductSearch = require('./productSearch');
const initCustomer = require('./customer');
const initAuth = require('./auth');
const initCart = require('./order');

function initRoutes(app) {
  initViews(app);
  initGooglePlaces(app);
  initProductSearch(app);
  initCustomer(app);
  initAuth(app);
  // initCart(app);
}

module.exports = initRoutes;
