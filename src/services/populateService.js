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
  if (verifyBD.length > 0) return 'Banco já Populado';
  const request = await api.requestAPI();
  const formated = await formatUniversities(request);
  const result = await model.insertMany(formated);
  return result.length;
};

module.exports = { populateMongoDB };