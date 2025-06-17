import express from 'express';
import { getAllSides, getSideById, createSide, updateSide, deleteSide, getSideByName } from '../controllers/sidesController.js';
import { validateSide } from '../middlewares/validateSide.js';

const router = express.Router();

// Route to get all sides
router.get('/', getAllSides);
// Route to get a specific side by ID
router.get('/:id', getSideById);
// Route to create a new side
router.post('/', validateSide, createSide);
// Route to update an existing side
router.put('/:id', validateSide, updateSide);
// Route to delete a side
router.delete('/:id', deleteSide);  
//Route to get snack by name
router.get('/search/:name', getSideByName);

export default router;