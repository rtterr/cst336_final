const Controller = require('./controller');
const UserModel = require('../models/user');

class UserController extends Controller {
  constructor() {
    super(UserModel);
  }

  async getByUsername(username) {
    const user = await this.model.getByUsername(username);
    console.log(user);
    return user;
  }
}

module.exports = UserController;
