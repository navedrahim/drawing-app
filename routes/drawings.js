import { Router } from 'express'
import * as controllers from '../controllers/drawings.js'

const router = Router()

router.get('/drawings', controllers.getDrawings)
router.get('/drawings/:id', controllers.getDrawing)
router.post('/drawings', controllers.createDrawing)
router.put('/drawings/:id', controllers.updateDrawing)
router.delete('/drawings/:id', controllers.deleteDrawing)

export default router