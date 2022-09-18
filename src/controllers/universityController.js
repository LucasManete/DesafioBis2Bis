const services = require('../services/universityService');

const getAll = async (req, res) => {
  const result = await services.getAllUniversity(req.query);

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

  return res.status(200).json({ message: result });
};

const deleteUniversity = async (req, res) => {
  const response = await services.deleteUniversity(req.params);
  return res.status(response.statusCode).json(response);
};

module.exports = {
  getAll,
  getUniversityID,
  createUniversity,
  updateUniversity,
  deleteUniversity,
};
