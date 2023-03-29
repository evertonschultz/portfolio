// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import server from '@/pages/api/server.json'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { repos } = server
  res.status(200).json(repos)
}
