import type { NextApiRequest, NextApiResponse } from 'next'
import { connection } from 'services/database'

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const response = await connection.query('SELECT NOW()')

  return res.status(200).json({ message: 'pong', time: response.rows[0].now })
}
