const express = require('express');
const renderFile = require('ejs').renderFile;

class Server {
  _app;
  _port = process.env.PORT || 8080;
  _ip = process.env.IP;

  constructor() {
    this._app = express();
    this._app.engine('html', renderFile);
    this._app.use(express.static('public'));
  }

  get app() {
    return this._app;
  }

  start() {
    this._app.listen(this._port, this._ip, () => {
      console.log(`server is listening on ${this._port}`);
    });
  }
}

module.exports = Server;
