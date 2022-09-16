const { Router } = require('express');

const controller = require('../controllers/university');

const route = Router();

route.get('/:country', controller.getUniversityController);

module.exports = route;
