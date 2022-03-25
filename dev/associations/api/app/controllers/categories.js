const { category } = require('../models');

exports.getAll = async (req, res) => {
  try {
    const categories = await category.findAll();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.getOne = async (req, res) => {
  try {
    const category = await category.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.create = async (req, res) => {
  try {
    const category = await category.create(req.body);

    if (category) {
      res.status(201).json(category);
    } else {
      res.status(400).json({
        message: 'Category not created',
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
    const category = await category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (category) {
      res.status(201).json(category);
    } else {
      res.status(400).json({
        message: 'Category not updated',
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
    const category = await category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (category) {
      res.status(200).json({
        message: 'Category deleted',
      });
    } else {
      res.status(400).json({
        message: 'Category not deleted',
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
