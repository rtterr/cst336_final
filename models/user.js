const Model = require('./model');

class UserModel extends Model {
  static getByUsername(username) {
    return new Promise((resolve, reject) => {
      console.log(username);
      try {
        const sql = 'SELECT * FROM Users WHERE username = ?';
        this.pool.query(sql, [username], function (err, rows) {
          console.log(rows);
          resolve(rows[0]);
        });
      }
      catch (error) {
        console.error(error);
        reject(error);
      }
    });
  }
}

module.exports = UserModel;
