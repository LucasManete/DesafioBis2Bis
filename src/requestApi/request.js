const axios = require('axios');

const requestAPI = async ({ country }) => {
  const request = await axios.get(`http://universities.hipolabs.com/search?country=${country}`);
  return request.data;
};
module.exports = { requestAPI };
