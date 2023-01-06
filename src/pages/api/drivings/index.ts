import { Driving, PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = _req

  switch (method) {
    case 'GET': {
      const getDrivings = async () => {
        const drivings = await prisma.driving.findMany({
          include: {
            user: {
              select: {
                name: true,
                email: true,
                avatar: true
              }
            },
            trip: {
              select: {
                city: true,
                departure_day: true,
                arrival_day: true
              }
            }
          }
        })

        return res.status(200).json(drivings)
      }
      return getDrivings()
    }

    case 'POST': {
      const createDriving = async () => {
        try {
          const { user_id, trip_id, date, start, stop }: Driving = body

          const driving = await prisma.driving.create({
            data: {
              user_id,
              trip_id,
              date,
              start,
              stop
            }
          })

          return res.status(200).json(driving)
        } catch (error) {
          res.status(200).json(error)
        }
      }
      return createDriving()
    }

    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
