import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { createRoom, enterRoom, joinRoom, leaveRoom, sendMsgRoom } from '../controllers/roomControllers.js'

const router = express.Router()

router.post('/room/create' , authMiddleware , createRoom)
router.post('/room/:roomId/join' , authMiddleware , joinRoom)
router.get('/room/:roomId/enter' , authMiddleware , enterRoom)
router.post('/room/:roomId/leave' , authMiddleware , leaveRoom)
router.post('/room/:roomId/send' , authMiddleware , sendMsgRoom)

export default router