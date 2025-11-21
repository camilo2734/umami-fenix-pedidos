export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description?: string;
  image: string; // Path to local asset or URL
  isNew?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface UserInfo {
  name: string;
  address: string;
  notes: string;
}