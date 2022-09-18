const populateBDService = require('../services/populateService');

const populateDBController = async (_req, res) => {
  const result = await populateBDService.populateMongoDB();

  return res.status(200).json({ message: result });
};

module.exports = { populateDBController };
