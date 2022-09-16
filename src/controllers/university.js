const services = require('../services/getUniversity');

const getUniversityController = async (req, res) => {
  const result = await services.getUniversity();
  res.status(200).json(result);
};

module.exports = { getUniversityController };
