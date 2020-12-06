const Controller = require('./controller');
const CustomerModel = require('../models/customer');
const { encrypt } = require('../utils/encryption');

class CustomerController extends Controller {
  constructor() {
    super(CustomerModel);
  }

  async getCustomerById(id) {
    return await this.model.GetById(id);
  }

  async getCustomerByEmail(email) {
    return await this.model.GetByEmail(email);
  }

  async createCustomer(firstName, lastName, email, address, password) {
    const existingCustomer = await this.getCustomerByEmail(email);
    const encryptedPassword = await encrypt(password)

    if (existingCustomer) {
      throw new Error('email address already in use');
    }

    const customer = new CustomerModel(firstName, lastName, email, address, encryptedPassword);
    console.log(customer);
    return this.model.Insert(customer);
  }
}

module.exports = CustomerController;
