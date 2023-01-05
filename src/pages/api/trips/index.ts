import { PrismaClient, Trip } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = _req

  switch (method) {
    case 'GET': {
      const getTrips = async () => {
        const trips = await prisma.trip.findMany({
          include: {
            user: {
              select: {
                name: true,
                email: true,
                avatar: true
              }
            }
          }
        })

        return res.status(200).json(trips)
      }
      return getTrips()
    }

    case 'POST': {
      const createTrip = async () => {
        try {
          const {
            user_id,
            city,
            departure_day,
            arrival_day,
            is_driving
          }: Trip = body

          const trip = await prisma.trip.create({
            data: {
              user_id,
              city,
              departure_day,
              arrival_day,
              is_driving
            }
          })

          return res.status(200).json(trip)
        } catch (error) {
          res.status(200).json(error)
        }
      }
      return createTrip()
    }

    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
