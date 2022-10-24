import type { NextApiRequest, NextApiResponse } from 'next'

export type UserProps = {
  id: number
  name?: string
}

// Fake users data
const users: UserProps[] = [
  { id: 1, name: 'Cristiano Morgante' },
  { id: 2, name: 'Alice' },
  { id: 3, name: 'Alvaro' }
]

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  // Get data from your database
  res.status(200).json(users)
}
