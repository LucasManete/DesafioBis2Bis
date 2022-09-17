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
  const verifyBD = await model.find();
  if (verifyBD.length > 0) {
    return 'Banco já Populado';
  }
  const request = await api.requestAPI();
  const formated = await formatUniversities(request);
  await model.insertMany(formated);
  return 'Dados Inseridos com sucesso';
};

const getUniversityID = async (id) => {
  const result = await model.findById(id);
  return result;
};

const createUniversity = async (body) => {
  const findUniversity = await model.findOne(body);
  if (findUniversity) return 'Universidade já cadastrada';

  const result = await model.create(body);
  return result;
};

const updateUniversity = async (id, body) => {
  await model.findByIdAndUpdate(id, body);
  return 'Dados atualizados com sucesso';
};

const deleteUniversity = async (id, body) => {
  await model.findByIdAndDelete(id, body);
  return 'Dados excluidos com sucesso';
};

module.exports = {
  populateMongoDB,
  getUniversityID,
  createUniversity,
  updateUniversity,
  deleteUniversity,
};
