import { PrismaClient, Service } from '@prisma/client'
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
      const getService = async () => {
        try {
          const service = await prisma.service.findFirst({
            where: { id: Number(id) }
          })

          if (service === null)
            return res.status(400).json({ message: 'Service not exists!' })

          return res.status(200).json(service)
        } catch (error) {
          res.status(404).json(error)
        }
      }
      return getService()
    }

    case 'PUT': {
      const updateService = async () => {
        try {
          const { user_id, trip_id, name, invoice, notes }: Service = body

          const service = await prisma.service.findFirst({
            where: { id: Number(id) }
          })

          if (service === null)
            return res.status(400).json({ message: 'Service not exists!' })

          const updatedService = await prisma.service.update({
            where: { id: Number(id) },
            data: { user_id, trip_id, name, invoice, notes }
          })

          return res.status(200).json(updatedService)
        } catch (error) {
          res.status(500).json(error)
        }
      }
      return updateService()
    }

    case 'DELETE': {
      const deleteService = async () => {
        try {
          const service = await prisma.service.findFirst({
            where: { id: Number(id) }
          })

          if (service === null)
            return res.status(400).json({ message: 'Service not exists!' })

          const deletedService = await prisma.service.delete({
            where: { id: Number(id) }
          })

          return res.status(200).json({ deleted_service: deletedService })
        } catch (error) {
          res.status(500).json(error)
        }
      }
      return deleteService()
    }

    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
