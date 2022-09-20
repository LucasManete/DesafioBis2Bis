const MockGetOne = {
  statusCode: 200,
  message: {
    _id: '6329fd3c2c9153770c2adaee',
    domains: [
      'atlantida.edu.ar',
    ],
    alpha_two_code: 'AR',
    country: 'Argentina',
    web_pages: [
      'http://www.atlantida.edu.ar/',
    ],
    name: 'Universidad Atlantida Argentina',
    state_province: 'Buenos Aires',
    __v: 0,
  },
  error: false,
};

const MockCreate = {
  statusCode: 200,
  message: {
    domains: [
      'teste.edu.ar',
    ],
    alpha_two_code: 'ARtete',
    country: 'ArgentinaTeste',
    web_pages: [
      'http://www.teste.edu.ar/',
    ],
    name: 'Universidad teste Argentina',
    state_province: 'Buenos Teste',
    __v: 0,
  },
  error: false,
};

const MockGetAll = {
  docs: [
    {
      _id: '632a26221ec706b6f695f495',
      country: 'Brazil',
      name: 'Centro Universitário Barao de Maua',
      state_province: null,
    },
    {
      _id: '632a26221ec706b6f695f496',
      country: 'Brazil',
      name: 'Universidade Braz Cubas',
      state_province: null,
    },
    {
      _id: '632a26221ec706b6f695f497',
      country: 'Brazil',
      name: 'Universidade Candido Mendes',
      state_province: null,
    },
  ],
};

module.exports = { MockGetOne, MockCreate, MockGetAll };
