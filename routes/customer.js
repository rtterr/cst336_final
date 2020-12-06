const CustomerController = require('../controllers/customer');
const { sendClientError, sendServerError } = require('../utils/error');

function initCustomer(app) {
  app.get('/customer/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const customerController = new CustomerController();

      if (!id) {
        console.error('missing customer id');
        sendClientError(res);
      }

      const customer = await customerController.getCustomerById(id);
      res.statusCode = 200;
      res.json({ ...customer });
    }
    catch (error) {
      console.error(error);
      sendServerError(res, error.message);
    }
  });

  app.post('/customer', async (req, res) => {
    try {
      const { firstName, lastName, email, address, password } = req.body;
      const customerController = new CustomerController();

      if (!firstName || !lastName || !email || !address || !password) {
        console.error('missing customer fields');
        sendClientError(res);
      }

      const { id } = await customerController.createCustomer(firstName, lastName, email, address, password);
      res.statusCode = 200;
      res.json({ id });
    }
    catch (error) {
      console.error(error);
      sendServerError(res, error.message);
    }
  });
}

module.exports = initCustomer;
