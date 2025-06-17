import express from 'express';
 import { getAllOffCatering, getOffCateringById, createOffCatering, updateOffCatering, deleteOffCatering } from '../controllers/offsiteController.js';

 const router = express.Router();

 router.get('/', getAllOffCatering);

 router.get('/:d', getOffCateringById );

 router.post('/', createOffCatering );

 router.put('/:id', updateOffCatering );

 router.delete('/:id', deleteOffCatering ); 

 export default router;