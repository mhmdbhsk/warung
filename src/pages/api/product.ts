import { NextApiRequest, NextApiResponse } from 'next';
import { ProductsData, FeaturedData } from '@constants';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // const { query: featured } = req;

  // if (featured) {
  //   res.status(200).json(FeaturedData);
  // } else {
  res.status(200).json(ProductsData);
  // }
}
