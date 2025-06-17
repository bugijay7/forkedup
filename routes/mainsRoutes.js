import express from 'express';
import { getAllMainDishes, getMainDishById, createMainDish, updateMainDish, deleteMainDish, getMainDishByName  } from '../controllers/mainController.js';
import { validateMainDish } from '../middlewares/validateMainDish.js';
const router = express.Router();


// Route to get all main dishes
router.get('/', getAllMainDishes);
// Route to get a specific main dish by ID
router.get('/:id', getMainDishById);
// Route to create a new main dish
router.post('/', validateMainDish, createMainDish);
// Route to update an existing main dish
router.put('/:id', validateMainDish, updateMainDish);
// Route to delete a main dish
router.delete('/:id', deleteMainDish);
// Route to get an accompaniment by name
router.get('/search/:name', getMainDishByName);

export default router;