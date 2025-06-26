import { Request, Response } from 'express'
import { prisma } from 'utils/database/prisma-conection'

type Question = {
  title: string
  choices: string[]
  rightChoice: string
}
type BodyManyQuestion = {
  questions: Question[]
}

export const createQuestion = async (req: Request, res: Response) => {
  const { title, choices, rightChoice } = req.body

  const isExist = await prisma.question.findFirst({
    where: {
      title
    }
  })
  if (isExist) {
    res.status(400).send({ message: 'Pergunta já existe no banco' })
    return
  }
  const data = await prisma.question.create({
    data: { title, choices, right_choice: rightChoice }
  })

  res.status(201).send({ data })
}

export const createManyQuestion = async (req: Request, res: Response) => {
  const { questions } = req.body as BodyManyQuestion

  if (questions) {
    const refactQuestion = questions.map(({ title, choices, rightChoice }) => ({
      title,
      choices,
      right_choice: rightChoice
    }))
    const data = await prisma.question.createMany({
      data: refactQuestion
    })
    res.status(201).send({ data })
  }

  res.status(400).send({ message: 'Não foi possivel salvar' })
}
