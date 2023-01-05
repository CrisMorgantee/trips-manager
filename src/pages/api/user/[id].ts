import { PrismaClient, User } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function userHandler(
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
      const getUser = async () => {
        try {
          const user = await prisma.user.findFirst({
            where: { id: Number(id) },
            include: {
              Trip: {
                select: {
                  city: true,
                  departure_day: true,
                  arrival_day: true,
                  is_driving: true
                }
              }
            }
          })

          if (user === null)
            return res.status(400).json({ message: 'User not exists!' })

          return res.status(200).json(user)
        } catch (error) {
          res.status(404).json(error)
        }
      }
      return getUser()
    }

    case 'PUT': {
      const updateUser = async () => {
        try {
          const { name, email, password, avatar, is_active, is_admin }: User =
            body

          const user = await prisma.user.findFirst({
            where: { id: Number(id) }
          })

          if (user === null)
            return res.status(400).json({ message: 'User not exists!' })

          const updatedUser = await prisma.user.update({
            where: { id: Number(id) },
            data: { name, email, password, avatar, is_active, is_admin }
          })

          return res.status(200).json(updatedUser)
        } catch (error) {
          res.status(500).json(error)
        }
      }
      return updateUser()
    }

    case 'DELETE': {
      const deleteUser = async () => {
        try {
          const user = await prisma.user.findFirst({
            where: { id: Number(id) }
          })

          if (user === null)
            return res.status(400).json({ message: 'User not exists!' })

          const deletedUser = await prisma.user.delete({
            where: { id: Number(id) }
          })

          return res.status(200).json({ deleted_user: deletedUser })
        } catch (error) {
          res.status(500).json(error)
        }
      }
      return deleteUser()
    }

    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
