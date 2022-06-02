import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { NextApiRequest, NextApiResponse } from 'next';

const options = {
  providers: [],
  debug: false
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options)
