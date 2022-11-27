import { serialize } from 'cookie';
import { NextApiResponse, NextApiRequest } from 'next';
import { login } from '../../../src/api/server/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(404).send('');
  }
  try {
    const { email, password } = req.body as any;
    const response = await login({ email, password });
    res.setHeader('Set-Cookie', serialize('token', response.data.token, { path: '/' }));
    res.status(200).send({ message: 'Login Successfull' });
  } catch (err) {
    res.send({ message: 'Login fail' });
  }
}
