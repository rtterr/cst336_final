function initViews(app) {
  app.get('/', function (req, res) {
    res.render('index.html');
  });
}

module.exports = initViews;
