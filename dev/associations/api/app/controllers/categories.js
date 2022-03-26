const { category } = require('../models');
const { v4: uuid } = require('uuid');

exports.getAll = async (req, res) => {
  try {
    const categories = await category.findAll();

    if (categories) {
      res.status(200).json(categories);
    } else {
      res.status(404).json({
        message: 'Categories not found',
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
    const categoryObj = await category.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (categoryObj) {
      res.status(200).json(categoryObj);
    } else {
      res.status(404).json({
        message: 'Category not found',
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
    console.log(req.body);
    const newCategory = await category.create({
      id: uuid(),
      name: req.body.name,
    });

    if (newCategory) {
      res.status(201).json(newCategory);
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
    const categoryUpdate = await category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (categoryUpdate) {
      res.status(201).json(categoryUpdate);
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
    const categoryDelete = await category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (categoryDelete) {
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
