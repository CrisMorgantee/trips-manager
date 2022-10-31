import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const { method } = _req

  switch (method) {
    case 'GET':
      // Get data from your database
      return res.status(200).json('GET')

    case 'POST':
      // Update or create data in your database
      return res.status(200).json('POST')

    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
