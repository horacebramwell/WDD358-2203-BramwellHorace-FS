const { product, category } = require('../models');

exports.getAll = async (req, res) => {
  try {
    const products = await product.findAll({
      include: [
        {
          model: category,
          as: 'category',
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
    const product = await product.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: category,
          as: 'category',
        },
      ],
    });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.create = async (req, res) => {
  try {
    const product = await product.create(req.body);

    if (product) {
      res.status(201).json(product);
    } else {
      res.status(400).json({
        message: 'Product not created',
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.update = async (req, res) => {
  try {
    const product = await product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (product) {
      res.status(200).json(product);
    } else {
      res.status(400).json({
        message: 'Product not updated',
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const product = await product.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (product) {
      res.status(200).json(product);
    } else {
      res.status(400).json({
        message: 'Product not deleted',
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
