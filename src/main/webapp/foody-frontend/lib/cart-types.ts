export type CartItem = {
  cartId: number;
  menuId: number;
  itemName: string;
  price: number;
  imageUrl: string;
  quantity: number;
  restaurantName: string;
};

export type AddToCartInput = {
  menuItemId: number;
  quantity: number;
};

export type CartResponse = {
  cartId: number;
  menuId: number;
  quantity: number;
  itemName: string;
  price: number;
  imageUrl: string;
  restaurantName: string;
};