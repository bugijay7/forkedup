import express from 'express';
import { getAllTeas, getTeaById, createTea, updateTea, deleteTea, getTeaByName } from '../controllers/teasController.js';
import { validateTea } from '../middlewares/validateTea.js';
const router = express.Router();

// Route to get all teas
router.get('/', getAllTeas);
// Route to get a specific tea by ID
router.get('/:id', getTeaById);
// Route to create a new tea
router.post('/', validateTea, createTea);
// Route to update an existing tea
router.put('/:id', validateTea, updateTea);
// Route to delete a tea
router.delete('/:id', deleteTea);
//Route to get tea by name
router.get('/search/:name', getTeaByName);
export default router;