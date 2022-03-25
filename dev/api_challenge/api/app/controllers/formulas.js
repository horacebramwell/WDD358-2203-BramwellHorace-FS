const { Formula } = require('../models');

exports.getAll = async (req, res) => {
  try {
    const formulas = await Formula.findAll();
    res.status(200).json(formulas);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.getOne = async (req, res) => {
  try {
    const formula = await Formula.findByPk(req.params.id);

    if (!formula) {
      res.set('Content-Type', 'application/json');
      res.status(404).json({
        error: 'No formula found',
      });
    } else if (formula) {
      res.set('Content-Type', 'application/json');
      res.status(200).json(formula);
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
    const formula = await Formula.create(req.body);
    res.set('Content-Type', 'application/json');
    res.status(201).json(formula);
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
    const formula = await Formula.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!formula) {
      res.set('Content-Type', 'application/json');
      res.status(404).json({
        error: 'No formula found',
      });
    } else if (formula) {
      res.set('Content-Type', 'application/json');
      res.status(200).json(formula);
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

exports.delete = async (req, res) => {
  try {
    const formula = await Formula.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!formula) {
      res.set('Content-Type', 'application/json');
      res.status(404).json({
        error: 'No formula found',
      });
    } else if (formula) {
      res.set('Content-Type', 'application/json');
      res.status(200).json(formula);
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
