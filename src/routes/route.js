const { Router } = require('express');
const { populationBDRouter } = require('./populationBD.router');
const { universityBDRouter } = require('./university.router');

const route = Router();

route.use('/populate', populationBDRouter);
route.use('/universities', universityBDRouter);

module.exports = { route };
