"use client";

import Image from "next/image";
import { useState } from "react";
import { MenuItem } from "@/lib/restaurant-menus";
import { addCartItem } from "@/lib/cart-api";
import { MenuDots, ShoppingCartIcon } from "./MenuIcons";
import { QuantityStepper } from "./QuantityStepper";

type MenuItemCardProps = {
  item: MenuItem;
  restaurantSlug: string;
  restaurantName: string;
};

export function MenuItemCard({
  item,
  restaurantSlug,
  restaurantName,
}: MenuItemCardProps) {

  const [quantity, setQuantity] = useState(0);
  const [added, setAdded] = useState(false);

  async function handleAddToCart() {
	console.log("handleAddToCart called:", item.id, item.name);

    const userId = Number(localStorage.getItem("userId"));

    if (!userId) {
      alert("Please login first");
      return;
    }

    try {

      setAdded(true);

      console.log("User ID :", userId);
      console.log("Menu ID :", item.id);
      console.log("Quantity:", quantity);

      await addCartItem(
        userId,
        Number(item.id),
        quantity
      );

      alert(`${item.name} added to cart`);

    } catch (error) {

      console.error("Add Cart Error:", error);
      alert("Unable to add item to cart");

    } finally {

      setTimeout(() => {
        setAdded(false);
      }, 1000);

    }
  }

  return (
    <article className="flex flex-col rounded-3xl bg-white p-4 shadow-[0_2px_16px_rgba(0,0,0,0.06)] sm:p-5">

      <div className="flex items-start justify-between">
        <MenuDots />
        <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-[11px] text-zinc-500">
          {item.calories} kcal
        </span>
      </div>

      <div className="relative mx-auto mt-3 h-24 w-full sm:h-28">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-contain"
          sizes="200px"
        />
      </div>

      <h3 className="mt-3 text-center font-serif text-xl font-bold text-zinc-900">
        {item.name}
      </h3>

      <p className="mt-2 line-clamp-2 flex-1 text-center text-xs leading-relaxed text-zinc-500">
        {item.description}
      </p>

      <div className="mt-4 flex items-center justify-between gap-2">

        <QuantityStepper
          value={quantity}
          onChange={setQuantity}
          size="sm"
        />

        <span className="text-xl font-bold text-zinc-900">
          ₹{item.price}
        </span>

        <button
          type="button"
          onClick={handleAddToCart}
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
            added
              ? "bg-brand text-white"
              : "bg-[#c8ddb8] text-zinc-800 hover:bg-[#b8d0a5]"
          }`}
          aria-label={`Add ₹{item.name} to cart`}
        >
          <ShoppingCartIcon className="h-4 w-4" />
        </button>

      </div>

    </article>
  );
}