"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import { DashboardLayout } from "@/components/home/DashboardLayout";
import { PageHeader } from "@/components/home/PageHeader";
import { QuantityStepper } from "@/components/restaurant/QuantityStepper";

import {
  getCart,
  updateCartItem,
  removeCartItem,
  clearCart,
} from "@/lib/cart-api";

import { CartResponse } from "@/lib/cart-types";

export default function CartPage() {

  const [items, setItems] = useState<CartResponse[]>([]);

  const [userId, setUserId] = useState(0);

  async function loadCart() {

    console.log("UserId =", userId);

    if (!userId) {
      console.log("UserId is 0");
      return;
    }

    try {

      const data = await getCart(userId);

      console.log("Cart Data =", data);

      setItems(data);

    } catch (error) {

      console.error("Load Cart Error:", error);

    }
  }
  useEffect(() => {

    const id = Number(localStorage.getItem("userId"));

    console.log("LocalStorage UserId =", id);

    setUserId(id);

  }, []);

  useEffect(() => {

    if (userId > 0) {
      loadCart();
    }

  }, [userId]);
  async function changeQuantity(
    cartId: number,
    quantity: number
  ) {

    try {

      if (quantity <= 0) {

        await removeCartItem(cartId);

      } else {

        await updateCartItem(
          cartId,
          quantity
        );

      }

      await loadCart();

    } catch (error) {

      console.error(error);

    }

  }

  async function removeItem(
    cartId: number
  ) {

    try {

      await removeCartItem(cartId);

      await loadCart();

    } catch (error) {

      console.error(error);

    }

  }

  async function clearAll() {

    try {

      await clearCart(userId);

      await loadCart();

    } catch (error) {

      console.error(error);

    }

  }

  const subtotal = useMemo(() => {

    return items.reduce(

      (sum, item) =>

        sum + item.price * item.quantity,

      0

    );

  }, [items]);

  const deliveryFee =
    items.length > 0 ? 5 : 0;

  const total =
    subtotal + deliveryFee;

  return (<DashboardLayout>

	  <PageHeader
	    title="Your Cart"
	    description={
	      items.length > 0
	        ? `${items.length} item${items.length > 1 ? "s" : ""} in your cart`
	        : "Your cart is empty"
	    }
	  />

	  {items.length === 0 ? (

	    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-200 bg-white py-16 text-center">

	      <p className="text-lg font-semibold text-zinc-900">
	        No items in your cart
	      </p>

	      <p className="mt-2 text-sm text-zinc-500">
	        Browse restaurants and add something delicious.
	      </p>

	      <Link
	        href="/restaurants"
	        className="mt-6 rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
	      >
	        Browse Restaurants
	      </Link>

	    </div>

	  ) : (

	    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">

	      <div className="space-y-4">

	        {items.map((item) => (

	          <article
	            key={item.cartId}
	            className="flex gap-4 rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm"
	          >

	            <div className="relative h-20 w-20 overflow-hidden rounded-xl bg-zinc-50">

	              <Image
	                src={item.imageUrl}
	                alt={item.itemName}
	                fill
	                className="object-contain p-1"
	                sizes="80px"
	              />

	            </div>

	            <div className="flex-1">

	              <div className="flex items-start justify-between">

	                <div>

	                  <h3 className="font-semibold text-zinc-900">
	                    {item.itemName}
	                  </h3>

	                  <p className="mt-1 text-xs text-zinc-400">
	                    {item.restaurantName}
	                  </p>

	                </div>

	                <button
	                  type="button"
	                  onClick={() => removeItem(item.cartId)}
	                  className="text-xs font-medium text-red-500 hover:text-red-700"
	                >
	                  Remove
	                </button>

	              </div>

	              <div className="mt-3 flex items-center justify-between">

				  <QuantityStepper
				    value={item.quantity}
				    onChange={(qty) => {
				      console.log("Stepper clicked");
				      console.log("Quantity =", qty);
				      changeQuantity(item.cartId, qty);
				    }}
				    size="sm"
				  />

	                <span className="font-semibold text-zinc-900">
	                  ₹{(item.price * item.quantity).toFixed(2)}
	                </span>

	              </div>

	            </div>

	          </article>

	        ))}

	        <button
	          type="button"
	          onClick={clearAll}
	          className="text-sm font-medium text-red-500 hover:text-red-700"
	        >
	          Clear Cart
	        </button>

	      </div>
		      <aside className="h-fit rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm">

		        <h2 className="text-lg font-bold text-zinc-900">
		          Order Summary
		        </h2>

		        <div className="mt-4 space-y-3 text-sm">

		          <div className="flex justify-between text-zinc-600">
		            <span>Subtotal</span>
		            <span>₹{subtotal.toFixed(2)}</span>
		          </div>

		          <div className="flex justify-between text-zinc-600">
		            <span>Delivery Fee</span>
		            <span>₹{deliveryFee.toFixed(2)}</span>
		          </div>

		          <div className="flex justify-between border-t border-zinc-100 pt-3 font-semibold text-zinc-900">
		            <span>Total</span>
		            <span>₹{total.toFixed(2)}</span>
		          </div>

		        </div>

		        <Link
		          href="/checkout"
		          className="mt-6 block w-full rounded-xl bg-brand py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
		        >
		          Proceed to Checkout
		        </Link>

		      </aside>

		    </div>

		  )}
		      </DashboardLayout>

		    );

		  }