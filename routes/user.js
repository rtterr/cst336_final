const UserController = require('../controllers/user');

function initUser(app) {
  const userController = new UserController();

  app.get('/users/:username', async (req, res) => {
    const { username } = req.params;
    const user = await userController.getByUsername(username);
    res.json(user);
  });
}

module.exports = initUser;
