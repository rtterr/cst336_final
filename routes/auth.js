const CustomerController = require('../controllers/customer');
const { generateJwt } = require('../utils/auth');
const { sendClientError, sendServerError, sendUnauthorized } = require('../utils/error');
const { comparePasswords } = require('../utils/encryption');

function initAuth(app) {
  app.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const customerController = new CustomerController();

      if (!email || !password) {
        console.error('missing auth fields');
        sendClientError(res);
      }

      const customer = await customerController.getCustomerByEmail(email);
      console.log(customer);
      const match = await comparePasswords(password, customer.password);

      if (!match) {
        sendUnauthorized(res);
      }

      const jwt = generateJwt(customer);
      res.statusCode = 200;
      res.json({ jwt });
    }
    catch (error) {
      console.error(error);
      sendServerError(res, error.message);
    }
  });
}

module.exports = initAuth;
