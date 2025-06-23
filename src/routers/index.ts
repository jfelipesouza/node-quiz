import { Router } from 'express'
import type { Request, Response } from 'express'
import { questionsRouter } from './questions'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.status(200).send({
    message: 'Ok'
  })
})

router.use('/questions', questionsRouter)

export { router }
