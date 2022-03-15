const { Users, Material, Category } = require('../models');

// GET /users
exports.getAll = async (req, res) => {
  try {
    const users = await Users.findAll({
      include: [{ model: Material }, { model: Category }],
    });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// GET /users/:id
exports.getOne = async (req, res) => {
  try {
    const user = await Users.findByPk(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    if (err.name === 'SequelizeValidationError') {
      res.status(400).json({
        message: err.message,
      });
    } else {
      res.status(500).json({
        message: err.message,
      });
    }
  }
};

// POST /users
exports.create = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password || !req.body.name) {
      throw new Error('Missing required fields');
    } else {
      const user = await Users.create(req.body);
      res.status(201).json(user);
    }
  } catch (err) {
    if (err.name === 'SequelizeValidationError') {
      res.status(400).json({
        message: err.message,
      });
    } else {
      res.status(500).json({
        message: err.message,
      });
    }
  }
};

// PUT /users/:id
exports.update = async (req, res) => {
  try {
    const user = await Users.findByPk(req.params.id);
    if (user) {
      await user.update(req.body);
      res.status(200).json(user);
    } else {
      res.status(404).json({
        message: 'User not found',
      });
    }
  } catch (err) {
    if (err.name === 'SequelizeValidationError') {
      res.status(400).json({
        message: err.message,
      });
    } else {
      res.status(500).json({
        message: err.message,
      });
    }
  }
};

// DELETE /users/:id
exports.delete = async (req, res) => {
  try {
    const user = await Users.findByPk(req.params.id);
    if (user) {
      await user.destroy();
      res.status(200).json({
        message: 'User deleted',
      });
    } else {
      res.status(404).json({
        message: 'User not found',
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
