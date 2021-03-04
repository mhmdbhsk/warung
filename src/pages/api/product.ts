import { NextApiResponse } from 'next';
import { ProductsData } from '@constants';

export default function handler(res: NextApiResponse) {
  res.status(200).json(ProductsData);
}
