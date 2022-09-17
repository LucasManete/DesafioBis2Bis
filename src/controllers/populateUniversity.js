const services = require('../services/populateUniversity');

const populateDBController = async (_req, res) => {
  const result = await services.populateMongoDB();

  return res.status(200).json(result);
};

module.exports = { populateDBController };
