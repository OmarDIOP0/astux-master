import exprees from 'express';
import { addClass } from '../controllers/classe.controller.js';

const router = exprees.Router();

router.post('/add-classes',addClass);

export default router;