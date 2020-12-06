require('dotenv').config();
const { postgres } = require('./data-sources/connections');
const Server = require('./server');
const initRoutes = require('./routes');

async function bootUp() {
  await postgres.connect();
  const server = new Server();
  await server.start();
  initRoutes(server.app);
}

bootUp().then(() => {
  console.log('application is running...');
});
