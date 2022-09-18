const { Router } = require('express');
const populateDB = require('../controllers/populateController');

const populationBDRouter = Router();

populationBDRouter.get('/', populateDB.populateDBController);

module.exports = { populationBDRouter };
