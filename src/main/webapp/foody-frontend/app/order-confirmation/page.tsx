"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { DashboardLayout } from "@/components/home/DashboardLayout";
import { getPlacedOrder, PlacedOrder } from "@/lib/order-confirmation";

export default function OrderConfirmationPage() {
  const router = useRouter();
  const hasRedirected = useRef(false);
  const [order] = useState<PlacedOrder | null>(() => getPlacedOrder());

  useEffect(() => {
    if (!order && !hasRedirected.current) {
      hasRedirected.current = true;
      router.replace("/");
    }
  }, [order, router]);

  if (!order) {
    return (
      <DashboardLayout>
        <div className="flex min-h-[300px] items-center justify-center">
          <p className="text-sm text-zinc-500">Loading confirmation...</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl border border-zinc-100 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-3xl">
            ✓
          </div>
          <h1 className="mt-4 text-2xl font-bold text-zinc-900">
            Order Confirmed!
          </h1>
          <p className="mt-2 text-sm text-zinc-500">
            Thank you, {order.customerName}. Your order has been placed
            successfully.
          </p>
          <p className="mt-1 text-xs text-zinc-400">
            Order ID: {order.orderId}
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-zinc-900">Order Details</h2>

          <div className="mt-4 space-y-4">
            {order.items.map((item) => (
              <div key={item.cartId} className="flex items-center gap-4">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-zinc-50">
				<Image
				  src={item.imageUrl}
				  alt={item.itemName}
                    fill
                    className="object-contain p-1"
                    sizes="56px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-zinc-900">{item.itemName}</p>
                  <p className="text-xs text-zinc-400">
                    {item.quantity}x · {item.restaurantName}
                  </p>
                </div>
                <span className="text-sm font-semibold text-zinc-900">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-5 space-y-2 border-t border-zinc-100 pt-4 text-sm">
            <div className="flex justify-between text-zinc-600">
              <span>Subtotal</span>
              <span>₹{order.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-zinc-600">
              <span>Delivery fee</span>
              <span>₹{order.deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-zinc-900">
              <span>Total paid</span>
              <span>₹{order.total.toFixed(2)}</span>
            </div>
          </div>

          <p className="mt-4 text-sm text-zinc-500">
            Delivering to: {order.address}
          </p>
          <p className="mt-1 text-xs text-zinc-400">
            Estimated delivery: 30–40 minutes
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/orders"
            className="rounded-full bg-brand px-6 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
          >
            View Orders
          </Link>
          <Link
            href="/"
            className="rounded-full border border-zinc-200 px-6 py-2.5 text-center text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-50"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
}
