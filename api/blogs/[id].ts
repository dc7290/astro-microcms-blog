import type { VercelRequest, VercelResponse } from '@vercel/node'

import { getBlog } from '../_lib/getContents'

const blogs = async (req: VercelRequest, res: VercelResponse) => {
  switch (req.method) {
    case 'GET': {
      const id = req.query.id

      if (typeof id !== 'string') {
        return res.status(400)
      }

      const content = await getBlog({
        depth: 2,
        draftKey: req.query.draftKey?.toString(),
      })(id)

      return res.status(200).json(content)
    }

    default: {
      return res.status(400).json({ message: 'Invalid request.' })
    }
  }
}

export default blogs
