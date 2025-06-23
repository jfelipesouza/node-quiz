import type { Request, Response } from 'express'
import { prisma } from 'utils/database/prisma-conection'

export const exportTableToJson = async (req: Request, res: Response) => {
  try {
    const data = await prisma.question.findMany()
    const jsonData = JSON.stringify(data, null, 2)

    res.setHeader('Content-Disposition', 'attachment; filename=export.json')
    res.setHeader('Content-Type', 'application/json')

    res.send(jsonData)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao exportar JSON' })
  }
}
