const Model = require('./model');

class CustomerModel extends Model {
  id;
  firstName;
  lastName;
  email;
  address;

  constructor(firsName, lastName, email, address, password) {
    super('customer');
    this.id = this.generateId();
    this.firstName = firsName;
    this.lastName = lastName;
    this.email = email;
    this.address = address;
    this.password = password;
  }

  static async GetById(id) {
    try {
      const rows = await this.postgres.query(
        'SELECT id, first_name AS "firstName", last_name AS "lastName", email, address ' +
        'FROM customers ' +
        'WHERE id = $1;',
        [id]
      );
      return rows[0];
    }
    catch (error) {
      console.error({ id, error }, 'error getting customer');
      return {};
    }
  }

  static async GetByEmail(email) {
    try {
      const rows = await this.postgres.query(
        'SELECT id, first_name AS "firstName", last_name AS "lastName", email, address, password  ' +
        'FROM customers ' +
        'WHERE email = $1;',
        [email]
      );
      return rows[0];
    }
    catch (error) {
      console.error({ email, error }, 'error getting customer');
      return {};
    }
  }

  static async Insert(customer) {
    try {
      const { id, firstName, lastName, email, address, password } = customer;
      await this.postgres.query(
        'INSERT INTO customers (id, first_name, last_name, email, address, password)'
        + 'VALUES ($1, $2, $3, $4, $5, $6);',
        [id, firstName, lastName, email, address, password]
      );
      return { id };
    }
    catch (error) {
      console.error({ customer, error }, 'error creating customer');
      return {};
    }
  }
}

module.exports = CustomerModel;
