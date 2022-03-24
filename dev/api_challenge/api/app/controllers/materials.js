const { Material, Category, Users, Supplier } = require('../models');

exports.getAll = async (req, res) => {
  try {
    const materials = await Material.findAll({
      include: [{ model: Category }, { model: Supplier }],
    });
    res.status(200).json(materials);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.getOne = async (req, res) => {
  try {
    const material = await Material.findByPk(req.params.id);

    if (!material) {
      res.set('Content-Type', 'application/json');
      res.status(404).json({
        error: 'No material found',
      });
    } else if (material) {
      res.set('Content-Type', 'application/json');
      res.status(200).json(material);
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
  console.log(req.body);
  try {
    const material = await Material.create(req.body);
    res.set('Content-Type', 'application/json');
    res.status(201).json(material);
  } catch (err) {
    if (err.name === 'SequelizeDatabaseError') {
      res.set('Content-Type', 'application/json');
      res.status(400).json({
        error: err.errors[0].message,
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
    const material = await Material.findByPk(req.params.id);

    if (!material) {
      res.set('Content-Type', 'application/json');
      res.status(404).json({
        error: 'No material found',
      });
    } else if (material) {
      await material.update(req.body);
      res.set('Content-Type', 'application/json');
      res.status(200).json(material);
    }
  } catch (err) {
    if (err.name === 'SequelizeDatabaseError') {
      res.set('Content-Type', 'application/json');
      res.status(400).json({
        error: 'Bad request',
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
    const material = await Material.findByPk(req.params.id);

    if (!material) {
      res.set('Content-Type', 'application/json');
      res.status(404).json({
        error: 'No material found',
      });
    } else if (material) {
      await material.destroy();
      res.set('Content-Type', 'application/json');
      res.status(204).json();
    }
  } catch (err) {
    if (err.name === 'SequelizeDatabaseError') {
      res.set('Content-Type', 'application/json');
      res.status(400).json({
        error: 'Bad request',
      });
    } else {
      res.set('Content-Type', 'application/json');
      res.status(500).json({
        error: 'Internal server error',
      });
    }
  }
};
