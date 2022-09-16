const axios = require('axios');

const requestAPI = async () => {
  const coutries = ['argentina', 'brazil', 'chile', 'colombia', 'paraguay', 'peru', 'suriname', 'uruguay'];
  const result = Promise.all(coutries.map(async (pais) => {
    const { data } = await axios.get(`http://universities.hipolabs.com/search?country=${pais}`);
    return data;
  }));
  return result;
};
module.exports = { requestAPI };
