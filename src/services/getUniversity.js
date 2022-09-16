const api = require('../requestApi/request');

const getUniversity = async (params) => {
  const result = await api.requestAPI(params);
  return result;
};

module.exports = { getUniversity };
