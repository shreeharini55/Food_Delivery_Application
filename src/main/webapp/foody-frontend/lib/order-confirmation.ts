import { CartItem } from "./cart-types";

export type PlacedOrder = {
  orderId: string;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  customerName: string;
  address: string;
  placedAt: string;
};

const STORAGE_KEY = "bringes-orders";

export function savePlacedOrder(order: PlacedOrder) {

  const existing = getPlacedOrders();

  existing.unshift(order);

  sessionStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(existing)
  );
}

export function getPlacedOrders(): PlacedOrder[] {

  if (typeof window === "undefined") {
    return [];
  }

  try {

    const data = sessionStorage.getItem(STORAGE_KEY);

    return data ? JSON.parse(data) : [];

  } catch {

    return [];
  }
}

export function getPlacedOrder(): PlacedOrder | null {

  const orders = getPlacedOrders();

  return orders.length > 0 ? orders[0] : null;
}

export function generateOrderId() {

  return `ORD-${Date.now().toString().slice(-6)}`;
}