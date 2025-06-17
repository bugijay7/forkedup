import express from 'express';

import { getAllCoffees, getCoffeeById, createCoffee, updateCoffee, deleteCoffee, getCoffeeByName } from '../controllers/coffeeController.js';
import { validateCoffee } from '../middlewares/validateCoffee.js';
const router = express.Router();

// Route to get all coffee
router.get('/', getAllCoffees);
// Route to get a specific coffee by ID
router.get('/:id', getCoffeeById);
// Route to create a new coffee
router.post('/', validateCoffee, createCoffee);
// Route to update an existing coffee
router.put('/:id', validateCoffee, updateCoffee);
// Route to delete a coffee
router.delete('/:id', deleteCoffee);
//Route to get coffee by name
router.get('/search/:name', getCoffeeByName);

export default router;