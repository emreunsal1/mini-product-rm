import { NextApiResponse, NextApiRequest } from 'next';
import { getProduct, like, unlike } from '../../../src/api/server/product';

export enum LikeTypes {
  LIKE = 'like',
  UNLIKE = 'unlike',
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { token } = req.cookies;
    const { id } = req.query;

    if (req.method === 'GET') {
      const repsonse = await getProduct({ token: token as string, productId: id as string });
      res.send(repsonse.data);
      return;
    }
    if (req.method === 'PATCH') {
      const { type } = req.body;
      if (type === LikeTypes.LIKE) {
        await like({ token: token as string, productId: id as string });
      } else {
        await unlike({ token: token as string, productId: id as string });
      }
      res.send({ success: true });
    }
  } catch (err) {
    res.status(401).send({ message: 'Get products fail' });
  }
}
