import { Router } from 'express'
import { createManyQuestion, createQuestion } from './create'
import { findQuestions } from './find-question'
import { exportTableToJson } from './download'

const questionsRouter = Router()

questionsRouter.post('/create', createQuestion)
questionsRouter.post('/createManyQuestions', createManyQuestion)
questionsRouter.post('/find', findQuestions)
questionsRouter.get('/download', exportTableToJson)

export { questionsRouter }
