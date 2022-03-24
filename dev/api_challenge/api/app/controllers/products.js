const { Product, Category, Material } = require('../models');

exports.getAll = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        {
          model: Category,
          attributes: ['name'],
        },
        {
          model: Material,
          attributes: ['name'],
        },
      ],
    });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.getOne = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [
        {
          model: Category,
          attributes: ['name'],
        },
        {
          model: Material,
          attributes: ['name'],
        },
      ],
    });

    if (!product) {
      res.set('Content-Type', 'application/json');
      res.status(404).json({
        error: 'No product found',
      });
    } else if (product) {
      res.set('Content-Type', 'application/json');
      res.status(200).json(product);
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
    const product = await Product.create(req.body);
    res.set('Content-Type', 'application/json');
    res.status(201).json(product);
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
    const product = await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!product) {
      res.set('Content-Type', 'application/json');
      res.status(404).json({
        error: 'No product found',
      });
    } else if (product) {
      res.set('Content-Type', 'application/json');
      res.status(200).json(product);
    }
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

exports.delete = async (req, res) => {
  try {
    const product = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!product) {
      res.set('Content-Type', 'application/json');
      res.status(404).json({
        error: 'No product found',
      });
    } else if (product) {
      res.set('Content-Type', 'application/json');
      res.status(200).json(product);
    }
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
