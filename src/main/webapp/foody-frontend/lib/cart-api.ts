import { CartResponse } from "./cart-types";

const BASE_URL =
  "http://localhost:8080/Food_Delivery_Application/cart";

export async function getCart(
  userId: number
): Promise<CartResponse[]> {

  const response = await fetch(
    `${BASE_URL}?userId=${userId}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch cart");
  }

  return response.json();
}

export async function addCartItem(
  userId: number,
  menuId: number,
  quantity: number
) {

  const body = new URLSearchParams();

  body.append("userId", String(userId));
  body.append("menuId", String(menuId));
  body.append("quantity", String(quantity));

  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type":
        "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });

  if (!response.ok) {
    throw new Error("Unable to add item");
  }

  return response.text();
}

export async function updateCartItem(
  cartId: number,
  quantity: number
) {

  const body = new URLSearchParams();

  body.append("cartId", String(cartId));
  body.append("quantity", String(quantity));

  const response = await fetch(BASE_URL, {
    method: "PUT",
    headers: {
      "Content-Type":
        "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });

  if (!response.ok) {
    throw new Error("Unable to update quantity");
  }

  return response.text();
}

export async function removeCartItem(
  cartId: number
) {

  const response = await fetch(
    `${BASE_URL}?cartId=${cartId}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error("Unable to remove item");
  }

  return response.text();
}

export async function clearCart(
  userId: number
) {

  const response = await fetch(
    `${BASE_URL}?userId=${userId}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error("Unable to clear cart");
  }

  return response.text();
}