const { material, category } = require('../models');
const { v4: uuid } = require('uuid');

exports.getAll = async (req, res) => {
  try {
    const materials = await material.findAll({
      include: [
        {
          model: category,
          as: 'category',
        },
      ],
    });

    if (materials) {
      res.status(200).json(materials);
    } else {
      res.status(404).json({
        message: 'Materials not found',
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
    const materialObj = await material.findOne({
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

    if (materialObj) {
      res.status(200).json(materialObj);
    } else {
      res.status(404).json({
        message: 'Material not found',
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
    const materialObj = await material.create({
      id: uuid(),
      name: req.body.name,
    });

    if (materialObj) {
      res.status(201).json(materialObj);
    } else {
      res.status(400).json({
        message: 'Material not created',
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
    const materialObj = await material.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (materialObj) {
      res.status(201).json(materialObj);
    } else {
      res.status(400).json({
        message: 'Material not updated',
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
    const materialObj = await material.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (materialObj) {
      res.status(200).json({
        message: 'Material deleted',
      });
    } else {
      res.status(400).json({
        message: 'Material not deleted',
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
