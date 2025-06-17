import express from 'express';
import {
  getAllCopCatering,
  getCopCateringById,
  createCopCatering,
  updateCopCatering,
  deleteCopCatering
} from '../controllers/CorporateCateringController.js';

const router = express.Router();

// Route to get all cop catering
router.get('/', getAllCopCatering);

// Route to get cop catering by id
router.get('/:id', getCopCateringById);

// Route to create a new cop catering (consider removing :id from POST unless intentional)
router.post('/', createCopCatering);

// Route to update an existing cop catering (add :id)
router.put('/:id', updateCopCatering);

// Route to delete cop catering
router.delete('/:id', deleteCopCatering);

export default router;
