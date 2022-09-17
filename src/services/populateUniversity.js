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
  const request = await api.requestAPI();
  const formated = await formatUniversities(request);
  await model.insertMany(formated);
  return 'Dados Inseridos com sucesso';
};

module.exports = { populateMongoDB };
