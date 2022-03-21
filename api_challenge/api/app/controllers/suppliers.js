const { Supplier } = require('../models');

exports.getAll = async (req, res) => {
  try {
    const suppliers = await Supplier.findAll();
    res.status(200).json(suppliers);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.getOne = async (req, res) => {
  try {
    const supplier = await Supplier.findByPk(req.params.id);

    if (!supplier) {
      res.set('Content-Type', 'application/json');
      res.status(404).json({
        error: 'No supplier found',
      });
    } else if (supplier) {
      res.set('Content-Type', 'application/json');
      res.status(200).json(supplier);
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
    const supplier = await Supplier.create(req.body);
    res.set('Content-Type', 'application/json');
    res.status(201).json(supplier);
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
    const supplier = await Supplier.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.set('Content-Type', 'application/json');
    res.status(200).json(supplier);
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
    const supplier = await Supplier.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!supplier) {
      res.set('Content-Type', 'application/json');
      res.status(404).json({
        error: 'No supplier found',
      });
    } else if (supplier) {
      res.set('Content-Type', 'application/json');
      res.status(200).json(supplier);
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
