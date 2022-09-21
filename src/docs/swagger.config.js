const swaggerConfig = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'DesafioBis2Bis API com Swagger',
      description: 'Api desenvolvida para o desafio técnico da Bis2Bis',
      version: '1.0',
    },
    servers: [{
      url: 'http://localhost:3001',
      description: 'servidor local',
    }],
  },
  apis: ['./src/routes/university.router.js'],
};

module.exports = { swaggerConfig };
