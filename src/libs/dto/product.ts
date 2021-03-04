export interface ProductType {
  id: number;
  name: string;
  category_id: number;
  category_name: string;
  stock_status: string;
  price: string;
  regular_price: string;
  sale_price: string | null;
  description: string;
  thumbnail_url: string;
}
