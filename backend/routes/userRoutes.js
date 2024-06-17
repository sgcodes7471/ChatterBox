import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js'
import { Dashboard, Login, Logout, Search, Signup } from '../controllers/userController.js'
const router = express.Router()

router.post('/Login' , Login)
router.post('/Signup' ,Signup)
router.post('/Logout' , authMiddleware ,Logout)
router.get('/Dashboard' , authMiddleware , Dashboard)
router.post('/Search' , authMiddleware , Search)
export default router