import express from 'express';
import { getAllSnacks, getSnackById, createSnack, updateSnack, deleteSnack, getSnacksByName } from '../controllers/snacksController.js';
import { validateSnack } from '../middlewares/validateSnack.js';
const router = express.Router();


// Route to get all snacks
router.get('/', getAllSnacks);
// Route to get a specific snack by ID
router.get('/:id', getSnackById);
// Route to create a new snack
router.post('/', validateSnack, createSnack);
// Route to update an existing snack
router.put('/:id', validateSnack, updateSnack);
// Route to delete a snack
router.delete('/:id', deleteSnack); 
//Route to get snack by name
router.get('/search/:name', getSnacksByName);

export default router;