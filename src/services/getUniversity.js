const api = require('../requestApi/request');

const getUniversity = async () => {
  const result = await api.requestAPI();
  return result;
};

module.exports = { getUniversity };
