import express from 'express';
import { addClass } from '../controllers/classe.controller.js';

const router = express.Router();

router.post('/new-class',addClass);

export default router;