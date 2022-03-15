const { Category } = require('../models');

exports.getAll = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.getOne = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);

    if (!category) {
      res.set('Content-Type', 'application/json');
      res.status(404).json({
        error: 'No category found',
      });
    } else if (category) {
      res.set('Content-Type', 'application/json');
      res.status(200).json(category);
    }
  } catch (err) {
    if (err.name === 'SequelizeDatabaseError') {
      res.set('Content-Type', 'application/json');
      res.status(400).json({
        error: 'Bad request',
      });
    }
  }
};

exports.create = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.set('Content-Type', 'application/json');
    res.status(201).json(category);
  } catch (err) {
    if (err.name === 'SequelizeDatabaseError') {
      res.set('Content-Type', 'application/json');
      res.status(400).json({
        error: err.message,
      });
    } else {
      res.set('Content-Type', 'application/json');
      res.status(500).json({
        error: 'Internal server error',
      });
    }
  }
};

exports.update = async (req, res) => {
  try {
    const category = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.set('Content-Type', 'application/json');
    res.status(200).json(category);
  } catch (err) {
    if (err.name === 'SequelizeDatabaseError') {
      res.set('Content-Type', 'application/json');
      res.status(400).json({
        error: 'Bad request',
      });
    }
  }
};

exports.delete = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);

    if (!category) {
      res.set('Content-Type', 'application/json');
      res.status(404).json({
        error: 'No category found',
      });
    } else if (category) {
      await category.destroy();
      res.set('Content-Type', 'application/json');
      res.status(200).json(category);
    }
  } catch (err) {
    if (err.name === 'SequelizeDatabaseError') {
      res.set('Content-Type', 'application/json');
      res.status(400).json({
        error: 'Bad request',
      });
    }
  }
};
