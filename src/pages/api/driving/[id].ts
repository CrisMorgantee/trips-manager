import { Driving, PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function tripHandler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    body,
    query: { id }
  } = _req
  const prisma = new PrismaClient()

  switch (method) {
    case 'GET': {
      const getDriving = async () => {
        try {
          const driving = await prisma.driving.findFirst({
            where: { id: Number(id) }
          })

          if (driving === null)
            return res.status(400).json({ message: 'Driving not exists!' })

          return res.status(200).json(driving)
        } catch (error) {
          res.status(404).json(error)
        }
      }
      return getDriving()
    }

    case 'PUT': {
      const updateDriving = async () => {
        try {
          const { user_id, date, start, stop }: Driving = body

          const driving = await prisma.driving.findFirst({
            where: { id: Number(id) }
          })

          if (driving === null)
            return res.status(400).json({ message: 'Driving not exists!' })

          const updatedDriving = await prisma.driving.update({
            where: { id: Number(id) },
            data: { user_id, date, start, stop }
          })

          return res.status(200).json(updatedDriving)
        } catch (error) {
          res.status(500).json(error)
        }
      }
      return updateDriving()
    }

    case 'DELETE': {
      const deleteDriving = async () => {
        try {
          const driving = await prisma.driving.findFirst({
            where: { id: Number(id) }
          })

          if (driving === null)
            return res.status(400).json({ message: 'Driving not exists!' })

          const deletedDriving = await prisma.driving.delete({
            where: { id: Number(id) }
          })

          return res.status(200).json({ deleted_trip: deletedDriving })
        } catch (error) {
          res.status(500).json(error)
        }
      }
      return deleteDriving()
    }

    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
