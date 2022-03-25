const { Production, Product } = require('../models');

exports.getAll = async (req, res, next) => {
  try {
    const productions = await Production.findAll({
      include: [
        {
          model: Product,
          attributes: ['name'],
        },
      ],
    });
    res.status(200).json(productions);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const production = await Production.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          attributes: ['name'],
        },
      ],
    });

    if (!production) {
      res.set('Content-Type', 'application/json');
      res.status(404).json({
        error: 'No production found',
      });
    } else if (production) {
      res.set('Content-Type', 'application/json');
      res.status(200).json(production);
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

exports.create = async (req, res, next) => {
  try {
    const production = await Production.create(req.body);
    res.set('Content-Type', 'application/json');
    res.status(201).json(production);
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

exports.update = async (req, res, next) => {
  try {
    const production = await Production.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!production) {
      res.set('Content-Type', 'application/json');
      res.status(404).json({
        error: 'No production found',
      });
    } else if (production) {
      res.set('Content-Type', 'application/json');
      res.status(200).json(production);
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


exports.delete = async (req, res, next) => {
  try {
    const production = await Production.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!production) {
      res.set('Content-Type', 'application/json');
      res.status(404).json({
        error: 'No production found',
      });
    } else if (production) {
      res.set('Content-Type', 'application/json');
      res.status(200).json(production);
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
