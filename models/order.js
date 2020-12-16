const Model = require('./model');

class OrderModel extends Model {
  static create({ userId, storeId }) {
    return new Promise((resolve, reject) => {
      const orderId = this.generateIntId();
      try {
        const sql = '' +
          'INSERT INTO Orders (userID, storeID, orderID) ' +
          'VALUES (?, ?, ?);';
        this.pool.query(sql, [userId, storeId, orderId], function (err, rows) {
          console.log(rows);
          resolve(orderId);
        });
      }
      catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }

  static createItem({ orderId, storeId, itemDescription, itemImage }) {
    return new Promise((resolve, reject) => {
      const orderItemId = this.generateIntId();
      try {
        const sql = '' +
          'INSERT INTO OrderItem (orderID, storeID, itemDescription, itemImage, orderItemID) ' +
          'VALUES (?, ?, ?, ?, ?);';
        this.pool.query(sql, [orderId, storeId, itemDescription, itemImage, orderItemId], function (err, rows) {
          console.log(rows);
          resolve(orderItemId);
        });
      }
      catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }

  static deleteByImageUrl(itemImage) {
    return new Promise((resolve, reject) => {
      try {
        const sql = 'DELETE FROM OrderItem WHERE itemImage = ?';
        this.pool.query(sql, [itemImage], function (err, rows) {
          console.log(rows);
          resolve(true);
        });
      }
      catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }
}

module.exports = OrderModel;
