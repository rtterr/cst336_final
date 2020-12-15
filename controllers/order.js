const Controller = require('./controller');
const OrderModel = require('../models/order');
const UserController = require('./user');

const userController = new UserController();

class OrderController extends Controller {
  constructor() {
    super(OrderModel);
  }

  async create(username, storeId) {
    console.log({ username, storeId });
    const { userid: userId } = userController.getByUsername(username);
    return await this.model.create({ userId, storeId });
  }

  async createItem({ orderId, storeId, itemDescription, itemImage }) {
    const orderItemId = await this.model.createItem({ orderId, storeId, itemDescription, itemImage });
    console.log(orderItemId);
    return orderItemId;
  }
}

module.exports = OrderController;
