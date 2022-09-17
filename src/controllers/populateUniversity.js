const services = require('../services/populateUniversity');

const populateDBController = async (_req, res) => {
  const result = await services.populateMongoDB();

  return res.status(200).json(result);
};

const getUniversityIDController = async (req, res) => {
  const result = await services.getUniversityID(req.params);

  return res.status(200).json(result);
};

const createUniversityController = async (req, res) => {
  const result = await services.createUniversity(req.body);

  return res.status(201).json(result);
};

module.exports = { populateDBController, getUniversityIDController, createUniversityController };
