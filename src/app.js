require('express-async-errors');

const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const { route } = require('./routes/route');
const { swaggerConfig } = require('./docs/swagger.config');

const app = express();
app.use(express.json());
const swaggerDoc = swaggerJSDoc(swaggerConfig);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use(route);

module.exports = app;
