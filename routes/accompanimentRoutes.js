import express from 'express';
import { getAllAccompaniments, getAccompanimentById, createAccompaniment, updateAccompaniment, deleteAccompaniment, getAccompanimentByName } from '../controllers/accompanimentController.js';
import { validateAccompaniment } from '../middlewares/validateAccompaniment.js';

const router = express.Router();

// Route to get all accompaniments
router.get('/', getAllAccompaniments);

// Route to get accompaniment by name (search) — put this BEFORE '/:id'
router.get('/search/:name', getAccompanimentByName);

// Route to get a specific accompaniment by ID
router.get('/:id', getAccompanimentById);

// Route to create a new accompaniment
router.post('/', validateAccompaniment, createAccompaniment);

// Route to update an existing accompaniment
router.put('/:id', validateAccompaniment, updateAccompaniment);

// Route to delete an accompaniment
router.delete('/:id', deleteAccompaniment);

export default router;
