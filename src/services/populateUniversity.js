const api = require('../requestApi/request');
const model = require('../schemas/universitySchema');

async function formatUniversities(universities) {
  const allUniversities = [];

  universities.forEach((country) => {
    allUniversities.push(...country.data);
  });

  return allUniversities;
}

const populateMongoDB = async () => {
  // const verifyBD = await model.find();
  // if (verifyBD.length > 0) return 'Banco já Populado';
  const request = await api.requestAPI();
  const formated = await formatUniversities(request);
  const result = await model.insertMany(formated);
  return result.length;
};

const getAllUniversity = async (query) => {
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
  return result;
};

const getUniversityID = async (id) => {
  const result = await model.findById(id);
  return result;
};

const createUniversity = async (body) => {
  const findUniversity = await model.findOne({
    name: body.name,
    country: body.country,
    state_province: body.state_province,
  });

  if (findUniversity) return 'Universidade já cadastrada';

  const result = await model.create(body);
  return result;
};

const updateUniversity = async (id, body) => {
  await model.findByIdAndUpdate(id, body);
  return 'Dados atualizados com sucesso';
};

const notFoundException = (message) => ({ statusCode: 404, message, error: true });

const deleteUniversity = async (id) => {
  const teste = await model.findByIdAndDelete(id);
  if (!teste) {
    return notFoundException('aklsjdklasjdlkasjdklad');
  }
  return { statusCode: 400, message: 'Facuade existe', error: true };
};

module.exports = {
  populateMongoDB,
  getUniversityID,
  createUniversity,
  updateUniversity,
  deleteUniversity,
  getAllUniversity,
};
