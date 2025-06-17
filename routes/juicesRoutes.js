import express from 'express';

import { getAllJuices, getJuiceById, createJuice, updateJuice, deleteJuice, getJuicesByName } from '../controllers/juicesController.js';
import { validateJuice } from '../middlewares/validateJuice.js';

const router = express.Router();

// Route to get all juices
router.get('/', getAllJuices);
// Route to get a specific juice by ID
router.get('/:id', getJuiceById);
// Route to create a new juice
router.post('/', validateJuice, createJuice);
// Route to update an existing juice
router.put('/:id', validateJuice, updateJuice);
// Route to delete a juice
router.delete('/:id', deleteJuice); 
//Route to get juices by name
router.get('/search/:name', getJuicesByName);


export default router;