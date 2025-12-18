export type ProductsResponse = {
  attributes: Product[];
  meta: ProductsMeta;
};

export type Product = {
  _id: string;
  category: string;
  company: string;
  createdAt: string;
  description: string;
  featured: boolean;
  image: string;
  price: string;
  publishedAt: string;
  user: string;
  shipping: boolean;
  title: string;
  updatedAt: string;
  colors: string[];
};

export type ProductsMeta = {
  categories: string[];
  companies: string[];
  pagination: Pagination;
};

export type Pagination = {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
};

export type Params = {
  search?: string;
  category?: string;
  company?: string;
  order?: string;
  price?: string;
  shipping?: string;
  page?: number;
};

export type ProductsResponseWithParams = ProductsResponse & { params: Params };

export type SingleProductResponse = {
  attributes: Product;
  meta: {};
};

export type CartItem = {
  cartID: string;
  productID: string;
  image: string;
  title: string;
  price: string;
  amount: number;
  productColor: string;
  company: string;
};

export type CartState = {
  cartItems: CartItem[];
  numItemsInCart: number;
  cartTotal: number;
  shipping: number;
  tax: number;
  orderTotal: number;
};

export type Checkout = {
  name: string;
  address: string;
  chargeTotal: number;
  orderTotal: string;
  cartItems: CartItem[];
  numItemsInCart: number;
};

export type Order = {
  _id: string;
  address: string;
  cartItems: CartItem[];
  createdAt: string;
  name: string;
  numItemsInCart: number;
  orderTotal: string;
  publishedAt: string;
  updatedAt: string;
};

export type OrdersMeta = {
  pagination: Pagination;
};

export type OrdersResponse = {
  order: Order[];
  meta: OrdersMeta;
};
