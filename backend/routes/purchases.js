import express from 'express'
import { createPurchase, getAllPurchase, getPurchase } from '../Controllers/PurchaseController.js'
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'

const router = express.Router()

router.post('/', verifyUser, createPurchase)
router.get('/:id', verifyUser, getPurchase)
router.get('/', verifyAdmin, getAllPurchase)

export default router