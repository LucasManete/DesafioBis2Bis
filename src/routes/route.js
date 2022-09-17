const { Router } = require('express');

const controller = require('../controllers/populateUniversity');

const route = Router();

route.get('/populate', controller.populateDBController);

module.exports = route;
