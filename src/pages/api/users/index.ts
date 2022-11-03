import { PrismaClient, User } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = _req

  switch (method) {
    case 'GET': {
      const getUsers = async () => {
        const users = await prisma.user.findMany({
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

        return res.status(200).json(users)
      }
      return getUsers()
    }

    case 'POST': {
      const createUser = async () => {
        const { name, email, password, avatar, is_active, is_admin }: User =
          body

        const userExists = await prisma.user.findUnique({ where: { email } })

        if (userExists)
          return res.status(400).json({ message: 'User already exists' })

        const user = await prisma.user.create({
          data: {
            avatar,
            name,
            email,
            password,
            is_admin,
            is_active
          }
        })

        return res.status(201).json(user)
      }
      return createUser()
    }

    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
