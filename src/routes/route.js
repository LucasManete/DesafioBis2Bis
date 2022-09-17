const { Router } = require('express');

const controller = require('../controllers/populateUniversity');

const route = Router();

route.get('/populate', controller.populateDBController);
route.get('/universities/:_id', controller.getUniversityIDController);
route.post('/universities', controller.createUniversityController);

module.exports = route;
