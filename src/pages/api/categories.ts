import { NextApiResponse } from 'next';
import { CategoriesData } from '@constants';

export default function handler(res: NextApiResponse) {
  res.status(200).json(CategoriesData);
}
