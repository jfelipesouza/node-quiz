import { Response, Request } from 'express'

import { prisma } from 'utils/database/prisma-conection'

export const findQuestions = async (req: Request, res: Response) => {
  const { quant } = req.body

  if (typeof quant === 'number' && quant > 0) {
    const data = await prisma.question.findMany({
      orderBy: {
        create_at: 'asc'
      },
      take: quant,
      where: {
        id: {
          in: (
            await prisma.$queryRawUnsafe<{ id: string }[]>(
              `SELECT id FROM "Question" ORDER BY RANDOM() LIMIT ${quant}`
            )
          ).map(q => q.id)
        }
      },
      select: {
        title: true,
        choices: true,
        right_choice: true,
        id: true
      }
    })

    const questions = data.map(({ choices, id, right_choice, title }) => ({
      id,
      title,
      choices,
      rightChoice: right_choice
    }))

    res.status(200).send({ questions })
  }

  res.status(500).send({ message: 'erro' })
}
