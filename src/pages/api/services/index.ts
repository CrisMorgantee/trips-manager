import { PrismaClient, Service } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = _req

  switch (method) {
    case 'GET': {
      const getServices = async () => {
        const services = await prisma.service.findMany({
          include: {
            user: {
              select: {
                id: true
              }
            },
            trip: {
              select: {
                id: true
              }
            }
          }
        })

        return res.status(200).json(services)
      }
      return getServices()
    }

    case 'POST': {
      const createService = async () => {
        try {
          const { user_id, trip_id, name, invoice, notes }: Service = body

          const services = await prisma.service.create({
            data: {
              user_id,
              trip_id,
              name,
              invoice,
              notes
            }
          })

          return res.status(200).json(services)
        } catch (error) {
          res.status(200).json(error)
        }
      }
      return createService()
    }

    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
