import { serialize } from 'cookie';
import { NextApiResponse, NextApiRequest } from 'next';
import { register } from '../../../src/api/server/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.status(404).send('');
  }
  try {
    const {
      email, password, name, surname, phone,
    } = req.body as any;
    const response = await register({
      email, password, name, surname, phone,
    });
    res.setHeader('Set-Cookie', serialize('token', response.data.token, { path: '/' }));
    res.status(200).send({ message: 'Register Successfull' });
  } catch (err) {
    res.send({ message: 'Register fail' });
  }
}
