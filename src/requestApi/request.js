const axios = require('axios');

const requestAPI = async () => {
  const coutries = ['argentina', 'brazil', 'chile', 'colombia', 'paraguay', 'peru', 'suriname', 'uruguay'];

  const endpoint = 'http://universities.hipolabs.com/search';

  const promises = coutries.map(async (country) => axios.get(`${endpoint}?country=${country}`));

  return Promise.all(promises);
};

module.exports = { requestAPI };
