const OrderController = require('../controllers/order');

function initOrder(app) {
  const orderController = new OrderController;

  app.post('/orders', async (req, res) => {
    console.log(req.body);
    const { storeId } = req.body;
    const orderId = await orderController.create(req.session.username, storeId);
    res.json({ orderId });
  });

  app.post('/orders/items', async (req, res) => {
    console.log(req.body);
    const { orderId, storeId, itemDescription, itemImage } = req.body;
    const orderItemId = await orderController.createItem({ orderId, storeId, itemDescription, itemImage });
    res.json({ orderItemId });
  });

  app.delete('/orders/items', async (req, res) => {
    console.log(req.body);
    const imageUrl = req.body.imageUrl;
    const isDeleted = await orderController.deleteByImageUrl(imageUrl);
    res.send(isDeleted);
  });
}

module.exports = initOrder;
