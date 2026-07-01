"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect } from "react";
import { Input } from "@/components/auth/Input";
import { DashboardLayout } from "@/components/home/DashboardLayout";
import { PageHeader } from "@/components/home/PageHeader";
import { useCart } from "@/context/CartContext";
import { generateOrderId, savePlacedOrder } from "@/lib/order-confirmation";

export default function CheckoutPage() {
  const router = useRouter();
  
  const {
    items,
    subtotal,
    clearCart,
    refreshCart,
  } = useCart();
  useEffect(() => {
    refreshCart();
  }, []);

  const deliveryFee = items.length > 0 ? 5 : 0;
  const total = subtotal + deliveryFee;

  async function handleSubmit(
    e: FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const customerName = String(formData.get("fullName") ?? "");
    const address = [
      formData.get("address"),
      formData.get("city"),
      formData.get("postalCode"),
    ]
      .filter(Boolean)
      .join(", ");

    savePlacedOrder({
      orderId: generateOrderId(),
      items: [...items],
      subtotal,
      deliveryFee,
      total,
      customerName,
      address,
      placedAt: new Date().toISOString(),
    });

	await clearCart();

	router.push("/order-confirmation");
  }

  if (items.length === 0) {
    return (
      <DashboardLayout>
        <PageHeader
          title="Checkout"
          description="Your cart is empty. Add items before checking out."
        />
        <Link
          href="/cart"
          className="inline-flex rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
        >
          Back to Cart
        </Link>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <PageHeader
        title="Checkout"
        description="Enter your delivery details to complete your order."
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm"
        >
          <h2 className="text-lg font-bold text-zinc-900">Delivery Details</h2>

          <Input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Full name"
            autoComplete="name"
            required
          />
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Phone number"
            autoComplete="tel"
            required
          />
          <Input
            id="address"
            name="address"
            type="text"
            placeholder="Delivery address"
            autoComplete="street-address"
            required
          />
          <Input
            id="city"
            name="city"
            type="text"
            placeholder="City"
            autoComplete="address-level2"
            required
          />
          <Input
            id="postalCode"
            name="postalCode"
            type="text"
            placeholder="Postal code"
            autoComplete="postal-code"
            required
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-brand py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
          >
            Place Order · ₹{total.toFixed(2)}
          </button>
        </form>

        <aside className="h-fit rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-zinc-900">Order Summary</h2>

          <div className="mt-4 space-y-3">
            {items.map((item) => (
              <div
                key={item.cartId}
                className="flex items-start justify-between gap-3 text-sm"
              >
                <div>
                  <p className="font-medium text-zinc-900">{item.itemName}</p>
                  <p className="text-xs text-zinc-400">
                    {item.quantity}x · {item.restaurantName}
                  </p>
                </div>
                <span className="font-medium text-zinc-700">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 space-y-3 border-t border-zinc-100 pt-4 text-sm">
            <div className="flex justify-between text-zinc-600">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-zinc-600">
              <span>Delivery fee</span>
              <span>₹{deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-zinc-900">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>
        </aside>
      </div>
    </DashboardLayout>
  );
}
