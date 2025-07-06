export interface ProductProps {
  name: string;
  sku: string;
  description: string;
  price: number;
  cost: number;
  tax_rate: number;
  discount: number;
  quantity: number;
  is_active: boolean;
  image: File[];
}
