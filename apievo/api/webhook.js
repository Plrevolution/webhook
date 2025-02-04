import express from 'express';
import { body, validationResult } from 'express-validator';
import { saveWebhookEvent } from '../services/webhook.js';
import { validateWebhookSignature } from '../middleware/auth.js';

const router = express.Router();

// Validation middleware
const validateWebhookBody = [
  body('event').notEmpty().trim(),
  body('data').notEmpty().isObject(),
  body('timestamp').optional().isISO8601(),
];

// Kirvano webhooks
router.post(
  '/kirvano',
  validateWebhookSignature('KIRVANO_WEBHOOK_SECRET'),
  validateWebhookBody,
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      await saveWebhookEvent('kirvano', req.body);
      res.status(200).json({ status: 'success' });
    } catch (error) {
      console.error('Kirvano webhook error:', error);
      res.status(500).json({ error: 'Failed to process webhook' });
    }
  }
);

// Cakto webhooks
router.post(
  '/cakto',
  validateWebhookSignature('CAKTO_WEBHOOK_SECRET'),
  validateWebhookBody,
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      await saveWebhookEvent('cakto', req.body);
      res.status(200).json({ status: 'success' });
    } catch (error) {
      console.error('Cakto webhook error:', error);
      res.status(500).json({ error: 'Failed to process webhook' });
    }
  }
);

// Kiwify webhooks
router.post(
  '/kiwify',
  validateWebhookSignature('KIWIFY_WEBHOOK_SECRET'),
  validateWebhookBody,
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      await saveWebhookEvent('kiwify', req.body);
      res.status(200).json({ status: 'success' });
    } catch (error) {
      console.error('Kiwify webhook error:', error);
      res.status(500).json({ error: 'Failed to process webhook' });
    }
  }
);

export default router;