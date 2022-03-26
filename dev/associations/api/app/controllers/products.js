const { product, category } = require('../models');
const { v4: uuid } = require('uuid');

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

    if (products) {
      res.status(200).json(products);
    } else {
      res.status(404).json({
        message: 'Products not found',
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.getOne = async (req, res) => {
  try {
    const productObj = await product.findOne({
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

    if (productObj) {
      res.status(200).json(productObj);
    } else {
      res.status(404).json({
        message: 'Product not found',
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.create = async (req, res) => {
  try {
    const productObj = await product.create({
      id: uuid(),
      ...req.body,
    });

    if (productObj) {
      res.status(201).json(productObj);
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
    const productObj = await product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (productObj) {
      res.status(200).json(productObj);
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
    const productObj = await product.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (productObj) {
      res.status(200).json(productObj);
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
