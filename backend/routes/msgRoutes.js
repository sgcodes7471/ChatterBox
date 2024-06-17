import express from 'express'
import { GetMsg, SendMsg } from '../controllers/msgController.js'
import authMiddleware from '../middleware/authMiddleware.js'
const router = express.Router()

router.post('/send/:toId', authMiddleware , SendMsg)
router.get('/get/:toId', authMiddleware , GetMsg)
export default router