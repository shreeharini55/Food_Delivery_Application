export type PlaceOrderRequest = {
  userId: number;
  customerName: string;
  address: string;
  subtotal: number;
  deliveryFee: number;
  total: number;
};

const BASE_URL =
  "http://localhost:8080/Food_Delivery_Application/order";

export async function placeOrder(
  order: PlaceOrderRequest
) {

  const body = new URLSearchParams();

  body.append("userId", String(order.userId));
  body.append("customerName", order.customerName);
  body.append("address", order.address);
  body.append("subtotal", String(order.subtotal));
  body.append("deliveryFee", String(order.deliveryFee));
  body.append("total", String(order.total));

  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type":
        "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });

  if (!response.ok) {
    throw new Error("Unable to place order");
  }

  return Number(await response.text());
}