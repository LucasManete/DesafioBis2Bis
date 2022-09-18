const { Router } = require('express');
const universityDB = require('../controllers/universityController');

const universityBDRouter = Router();

universityBDRouter.get('/', universityDB.getAll);
universityBDRouter.get('/:id', universityDB.getUniversityID);
universityBDRouter.post('/', universityDB.createUniversity);
universityBDRouter.put('/:id', universityDB.updateUniversity);
universityBDRouter.delete('/:id', universityDB.deleteUniversity);
module.exports = { universityBDRouter };
