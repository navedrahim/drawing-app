import { Router } from 'express'
import * as controllers from '../controllers/drawings.js'

const router = Router()

router.get('/drawings', controllers.getDrawings)

export default router