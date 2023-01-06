import { PrismaClient, Trip } from '@prisma/client'
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
      const getTrip = async () => {
        try {
          const trip = await prisma.trip.findFirst({
            where: { id: Number(id) }
          })

          if (trip === null)
            return res.status(400).json({ message: 'Trip not exists!' })

          return res.status(200).json(trip)
        } catch (error) {
          res.status(404).json(error)
        }
      }
      return getTrip()
    }

    case 'PUT': {
      const updateTrip = async () => {
        try {
          const {
            city,
            arrival_day,
            departure_day,
            is_driving,
            user_id
          }: Trip = body

          const trip = await prisma.trip.findFirst({
            where: { id: Number(id) }
          })

          if (trip === null)
            return res.status(400).json({ message: 'Trip not exists!' })

          const updatedTrip = await prisma.trip.update({
            where: { id: Number(id) },
            data: { city, arrival_day, departure_day, is_driving, user_id }
          })

          return res.status(200).json(updatedTrip)
        } catch (error) {
          res.status(500).json(error)
        }
      }
      return updateTrip()
    }

    case 'DELETE': {
      const deleteTrip = async () => {
        try {
          const trip = await prisma.trip.findFirst({
            where: { id: Number(id) }
          })

          if (trip === null)
            return res.status(400).json({ message: 'Trip not exists!' })

          const deletedTrip = await prisma.trip.delete({
            where: { id: Number(id) }
          })

          return res.status(200).json({ deleted_trip: deletedTrip })
        } catch (error) {
          res.status(500).json(error)
        }
      }
      return deleteTrip()
    }

    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
