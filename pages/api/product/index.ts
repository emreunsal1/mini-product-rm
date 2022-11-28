import { NextApiResponse, NextApiRequest } from 'next';
import { getProducts } from '../../../src/api/server/product';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const token = req.cookies.token as string;
    if (req.method !== 'GET') {
      res.status(404).send('');
    }
    const response = await getProducts({ token });
    res.send(response.data.products);
  } catch (err) {
    res.status(401).send({ message: 'Get products fail' });
  }
}
