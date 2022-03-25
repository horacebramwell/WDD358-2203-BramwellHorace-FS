const { material, category } = require('../models');

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
    res.status(200).json(materials);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.getOne = async (req, res) => {
  try {
    const material = await material.findOne({
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
    res.status(200).json(material);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.create = async (req, res) => {
  try {
    const material = await material.create(req.body);

    if (material) {
      res.status(201).json(material);
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
    const material = await material.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(material);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const material = await material.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(material);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// exports.getOne = async (req, res) => {
//   try {
//     const material = await material.findByPk(req.params.id);
//     res.status(200).json(material);
//   } catch (err) {
//     res.status(500).json({
//       message: err.message,
//     });
//   }
// };

// exports.create = async (req, res) => {
//   try {
//     const material = await material.create(req.body);
//     res.status(201).json(material);
//   } catch (err) {
//     res.status(500).json({
//       message: err.message,
//     });
//   }
// };

// exports.update = async (req, res) => {
//   try {
//     const material = await material.findByPk(req.params.id);
//     await material.update(req.body);
//     res.status(200).json(material);
//   } catch (err) {
//     res.status(500).json({
//       message: err.message,
//     });
//   }
// };

// exports.delete = async (req, res) => {
//   try {
//     const material = await material.findByPk(req.params.id);
//     await material.destroy();
//     res.status(200).json({
//       message: 'Material deleted',
//     });
//   } catch (err) {
//     res.status(500).json({
//       message: err.message,
//     });
//   }
// };
