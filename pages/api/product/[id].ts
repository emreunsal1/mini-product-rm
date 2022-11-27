import { NextApiResponse, NextApiRequest } from 'next';
import { like, unlike } from '../../../src/api/server/product';

export enum LikeTypes {
  LIKE = 'like',
  UNLIKE = 'unlike',
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'PATCH') {
    res.status(404).send('');
  }

  try {
    const { token } = req.cookies;
    const { id } = req.query;
    const { type } = req.body;

    if (type === LikeTypes.LIKE) {
      await like({ token: token as string, productId: id as string });
    } else {
      await unlike({ token: token as string, productId: id as string });
    }
    res.send({ success: true });
  } catch (err) {
    res.send({ message: 'Get products fail' });
  }
}
