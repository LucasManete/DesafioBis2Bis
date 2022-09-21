const { Router } = require('express');
const { universityBDRouter } = require('./university.router');

const route = Router();

route.use('/universities', universityBDRouter);

module.exports = { route };
