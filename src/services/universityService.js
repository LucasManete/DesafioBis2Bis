const { notFoundException, sucessDelete } = require('../HttpCatalog/httpCatalog');
const model = require('../schemas/universitySchema');

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

const getUniversityID = async ({ id }) => {
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

const updateUniversity = async ({ id }, body) => {
  await model.findByIdAndUpdate(id, body);
  return 'Dados atualizados com sucesso';
};

const deleteUniversity = async ({ id }) => {
  const university = await model.findByIdAndDelete(id);
  if (!university) {
    return notFoundException('Universidade não econtrada');
  }
  return sucessDelete('Universidade Deletada com sucesso');
};

module.exports = {
  getAllUniversity,
  getUniversityID,
  createUniversity,
  updateUniversity,
  deleteUniversity,
};
