const services = require('../services/populateUniversity');

const populateDB = async (_req, res) => {
  const result = await services.populateMongoDB();

  return res.status(200).json(result);
};

const getUniversityID = async (req, res) => {
  const result = await services.getUniversityID(req.params);

  return res.status(200).json(result);
};

const createUniversity = async (req, res) => {
  const result = await services.createUniversity(req.body);

  return res.status(201).json(result);
};

const updateUniversity = async (req, res) => {
  const result = await services.updateUniversity(req.params, req.body);

  return res.status(204).json(result);
};

const deleteUniversity = async (req, res) => {
  const result = await services.deleteUniversity(req.params, req.body);
  return res.status(204).json(result);
};

module.exports = {
  populateDB,
  getUniversityID,
  createUniversity,
  updateUniversity,
  deleteUniversity,
};
