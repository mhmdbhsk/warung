import { NextApiRequest, NextApiResponse } from 'next';
import { CategoriesData } from '@constants';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(CategoriesData);
}
