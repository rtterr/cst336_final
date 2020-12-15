const OrderController = require('../controllers/order');

function initOrder(app) {
  const orderController = new OrderController;

  app.post('/orders', async (req, res) => {
    console.log(req.body);
    const { username, storeId } = req.body;
    const orderId = await orderController.create(username, storeId);
    res.json({ orderId });
  });

  app.post('/orders/items', async (req, res) => {
    console.log(req.body);
    const { orderId, storeId, itemDescription, itemImage } = req.body;
    const orderItemID = await orderController.createItem({ orderId, storeId, itemDescription, itemImage });
    res.json({ orderItemID });
  });
}

module.exports = initOrder;
