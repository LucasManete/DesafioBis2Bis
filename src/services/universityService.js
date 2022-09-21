const {
  notFoundException,
  conflictException,
  sucessException,
  createException,
} = require('../HttpCatalog/httpCatalog');

const formatUniversities = require('../utils/formatAPI');
const api = require('../requestApi/request');
const model = require('../schemas/universitySchema');

const getAll = async (query) => {
  const { page = 1, limit = 20, country } = query;
  const options = { page, limit, select: ['_id', 'name', 'country', 'state_province'] };
  const filters = {};

  if (limit > 20) {
    options.limit = 20;
  }

  if (country) {
    Object.assign(filters, { country });
  }
  const result = await model.paginate(filters, options);
  if (result.docs.length === 0) return notFoundException('País não econtrado');

  return sucessException(result);
};

const getOne = async ({ id }) => {
  const result = await model.findById(id);
  if (!result) { return notFoundException('Universidade não econtrada'); }
  return sucessException(result);
};

const create = async (body) => {
  const findUniversity = await model.findOne({
    name: body.name,
    country: body.country,
    state_province: body.state_province,
  });

  if (findUniversity) { return conflictException('Universidade já cadastrada'); }

  const result = await model.create(body);
  return createException(result);
};

const update = async ({ id }, body) => {
  const university = await model.findByIdAndUpdate(id, body);
  if (!university) {
    return notFoundException('Universidade não econtrada');
  }
  return sucessException('Dados atualizados com sucesso');
};

const destroy = async ({ id }) => {
  const university = await model.findByIdAndDelete(id);
  if (!university) {
    return notFoundException('Universidade não econtrada');
  }
  return sucessException('Universidade Deletada com sucesso');
};

const populate = async () => {
  const verifyBD = await model.find();
  if (verifyBD.length > 0) return conflictException('Banco já populado');
  const request = await api.requestAPI();
  const formated = await formatUniversities(request);
  const result = await model.insertMany(formated);
  return sucessException(`Banco foi polulado com ${result.length} registros`);
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  destroy,
  populate,
};
