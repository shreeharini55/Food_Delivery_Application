"use client";

import Link from "next/link";
import { DashboardLayout } from "@/components/home/DashboardLayout";
import { PageHeader } from "@/components/home/PageHeader";
import { getPlacedOrders } from "@/lib/order-confirmation";

export default function OrdersPage() {
  const orders = getPlacedOrders();

  return (
    <DashboardLayout>
      <PageHeader
        title="My Orders"
        description={
          orders.length > 0
            ? `${orders.length} order${orders.length > 1 ? "s" : ""}`
            : "No orders placed yet"
        }
      />

      {orders.length === 0 ? (
        <div className="rounded-2xl border border-zinc-200 bg-white p-10 text-center">
          <h2 className="text-xl font-bold">
            No Orders Yet
          </h2>

          <p className="mt-2 text-zinc-500">
            Place your first order to see it here.
          </p>

          <Link
            href="/restaurants"
            className="mt-6 inline-block rounded-xl bg-brand px-6 py-3 font-semibold text-white"
          >
            Browse Restaurants
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.orderId}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold">
                    {order.orderId}
                  </h2>

                  <p className="text-sm text-zinc-500">
                    {new Date(order.placedAt).toLocaleString()}
                  </p>
                </div>

                <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
                  Delivered
                </span>
              </div>

              <div className="mt-5 space-y-3">
                {order.items.map((item) => (
                  <div
                    key={item.cartId}
                    className="flex justify-between border-b pb-2"
                  >
                    <div>
                      <p className="font-medium">
                        {item.itemName}
                      </p>

                      <p className="text-sm text-zinc-500">
                        {item.restaurantName}
                      </p>

                      <p className="text-sm">
                        Qty : {item.quantity}
                      </p>
                    </div>

                    <div className="font-semibold">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex justify-between border-t pt-4 font-bold">
                <span>Total Paid</span>

                <span>
                  ₹{order.total.toFixed(2)}
                </span>
              </div>

              <div className="mt-2 text-sm text-zinc-500">
                Delivered to:
                <br />
                {order.customerName}
                <br />
                {order.address}
              </div>
            </div>
          ))}
        </div>
      )}
    </DashboardLayout>
  );
}