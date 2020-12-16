const initViews = require('./views');
const initGooglePlaces = require('./googlePlaces');
const initProductSearch = require('./productSearch');
const initOrder = require('./order');
const initUser = require('./user');
const { pool } = require('../data-sources/connections');
const bcrypt = require('bcrypt');

function initRoutes(app) {
  initViews(app);
  initGooglePlaces(app);
  initProductSearch(app);
  initOrder(app);
  initUser(app);

  app.get('/', function (req, res) {
    console.log('app.get: ' + req.session.id);
    res.render('index', { active: 'home' });
  });

  app.post('/', async function (req, res) {
    let action = req.body.action;
    let username = req.body.username;
    let password = req.body.password;
    let result;
    //check if username already exists

    console.log('action: ' + action);
    switch (action) {
      case 'login':
        console.log('User Login');
        result = await checkUsername(username);
        let hashedPwd = '';

        if (result.length > 0) {
          hashedPwd = result[0].password;
        }

        let passwordMatch = await checkPassword(password, hashedPwd);

        if (passwordMatch) {
          req.session.authenticated = true;
          req.session.username = username;

          console.log('app.post req.session.id: ' + req.session.id);
          res.redirect('/welcome');
        }
        else {
          console.log('account error');
          res.render('index', { active: 'home', 'loginError': true });
        }
        break;
      case 'create':

        //check for existing user
        let userExists = await checkUsername(username);

        if (userExists.length > 0) {
          console.log('UserExists(' + username + '): ' + userExists.length);
          res.render('index', { active: 'home', 'loginError': true });
        }
        else {
          let hashedPass = await hashPassword(password);
          result = await addUsername(username, hashedPass);
          req.session.authenticated = true;
          req.session.username = username;
          res.redirect('/welcome');
        }
        break;
    }//switch


  });

  function checkUsername(username) {
    let sql = 'SELECT * FROM Users WHERE username = ?';
    let sqlParams = [username];

    return new Promise(function (resolve, reject) {
      pool.query(sql, sqlParams, function (err, rows, fields) {
        if (err) throw err;
        resolve(rows);
      }); //query
    }); //promise
  }

  function addUsername(username, password) {
    let sql = 'INSERT INTO Users (username, password) VALUES (?,?)';
    let sqlParams = [username, password];

    return new Promise(function (resolve, reject) {
      pool.query(sql, sqlParams, function (err, rows, fields) {
        if (err) throw err;
        resolve(rows);
      }); //query
    });
  }

  function hashPassword(password) {
    return new Promise(function (resolve, reject) {
      bcrypt.hash(password, 10, function (err, result) {
        console.log('Result: ' + result);
        resolve(result);
      });
    });
  }

  function checkPassword(password, hashedValue) {
    return new Promise(function (resolve, reject) {
      bcrypt.compare(password, hashedValue, function (err, result) {
        resolve(result);
      });
    });
  }

  app.get('/welcome', isAuthenticated, function (req, res) {
    console.log('/myAccount req.session.id: ' + req.session.id);
    let username = req.session.username;
    console.log('Username: ' + username);
    //res.render("welcome", );
    res.render('welcome', { active: 'home', 'logged': true, 'username': username });
  });

  app.get('/logout', function (req, res) {
    console.log('req.session.id' + req.session.id);
    req.session.destroy();
    res.redirect('/');
  });

  function isAuthenticated(req, res, next) {
    console.log('isAuthenticated req.session.id: ' + req.session.id);
    if (!req.session.authenticated) {
      console.log('!req.session.authenticated');
      res.redirect('/');
    }
    else {
      console.log('next() req.session.authenticated: ' + req.session.authenticated);
      console.log('user: ' + req.body.username);
      next();
    }
  }

  app.get('/store', function (req, res) {
    res.render('store', { active: 'store' });
  });

  app.get('/item', function (req, res) {
    res.render('item', { active: 'item' });
  });

  app.get('/cart', function (req, res) {
    res.render('cart', { active: 'cart' });
  });
}

module.exports = initRoutes;
