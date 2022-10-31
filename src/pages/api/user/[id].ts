import type { NextApiRequest, NextApiResponse } from 'next'

export default function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id, name },
    method
  } = req

  switch (method) {
    case 'GET':
      // Get data from your database
      return res.status(200).json({ id, name: `User ${id}` })

    case 'POST':
      // Update or create data in your database
      return res.status(200).json({ id, name: name || `User ${id}` })

    case 'PUT':
      // Update or create data in your database
      return res.status(200).json({ id, name: name || `User ${id}` })

    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
