const { Router } = require('express');

const controller = require('../controllers/populateUniversity');

const route = Router();

route.get('/populate', controller.populateDB);
route.get('/', controller.getAll);
route.get('/universities/:_id', controller.getUniversityID);
route.post('/universities', controller.createUniversity);
route.put('/universities/:_id', controller.updateUniversity);
route.delete('/universities/:_id', controller.deleteUniversity);

module.exports = route;
