const service = require('../services/universityService');

const populate = async (_req, res) => {
  const response = await service.populate();

  return res.status(response.statusCode).json(response);
};

const getAll = async (req, res) => {
  const response = await service.getAll(req.query);

  return res.status(response.statusCode).json(response);
};

const getOne = async (req, res) => {
  const response = await service.getOne(req.params);
  return res.status(response.statusCode).json(response);
};

const create = async (req, res) => {
  const response = await service.create(req.body);

  return res.status(response.statusCode).json(response);
};

const update = async (req, res) => {
  const response = await service.update(req.params, req.body);

  return res.status(response.statusCode).json(response);
};

const destroy = async (req, res) => {
  const response = await service.destroy(req.params);
  return res.status(response.statusCode).json(response);
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  destroy,
  populate,
};
