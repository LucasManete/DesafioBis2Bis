const { Router } = require('express');

const ApiController = require('../controllers/universityController');
const UniversitySchema = require('../schemas/universitySchema');
const ApiService = require('../services/universityService');

const universityService = new ApiService(UniversitySchema);
const universityController = new ApiController(universityService);

const universityBDRouter = Router();

universityBDRouter.get('/populate', universityController.populate);

universityBDRouter.get('/', universityController.getAll);

universityBDRouter.get('/:id', universityController.getOne);

universityBDRouter.post('/', universityController.create);

universityBDRouter.put('/:id', universityController.update);

universityBDRouter.delete('/:id', universityController.delete);

module.exports = { universityBDRouter };
