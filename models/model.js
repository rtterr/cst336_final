const { pool } = require('../data-sources/connections');
const generateId = require('../utils/generateId');

/**
 * base model class
 */
class Model {
  type;
  static _pool = pool;

  static get pool() {
    return this._pool;
  }

  static generateId(type) {
    return generateId(type);
  }

  static generateIntId() {
    return Math.floor(Math.random() * Math.floor(90000));
  }
}

module.exports = Model;
