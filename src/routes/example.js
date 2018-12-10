import { Router } from 'express'
import * as controller from '../controllers/exampleController'

const router = Router()

router.post('/', controller.exampleCreate)

export default router
