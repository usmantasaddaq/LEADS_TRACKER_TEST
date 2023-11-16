import express from 'express';
import { createLead, deleteLead, getLeadById, getLeads, updateLead } from '../controllers/LeadController.js';

const router = express.Router();

// API routes /api/lead

router.get('/all', getLeads);

router.post('/', createLead);

router.get('/:id', getLeadById);

router.patch('/:id', updateLead);

router.delete('/:id', deleteLead);

export default router;

