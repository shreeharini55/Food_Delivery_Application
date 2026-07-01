"use client";

import Image from "next/image";
import { useState } from "react";
import { MenuItem } from "@/lib/restaurant-menus";
import { addCartItem } from "@/lib/cart-api";
import { MenuDots, ShoppingCartIcon } from "./MenuIcons";
import { QuantityStepper } from "./QuantityStepper";

type FeaturedMenuCardProps = {
  item: MenuItem;
  restaurantSlug: string;
  restaurantName: string;
};

export function FeaturedMenuCard({
  item,
  restaurantSlug,
  restaurantName,
}: FeaturedMenuCardProps) {

  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  async function handleAddToCart() {
	console.log("handleAddToCart called:", item.id, item.name);

    const userId = Number(localStorage.getItem("userId"));

    if (!userId) {
      alert("Please login first");
      return;
    }

    try {

      console.log("Featured Item:", item.id, item.name);

      await addCartItem(
        userId,
        Number(item.id),
        quantity
      );

      setAdded(true);

      setTimeout(() => {
        setAdded(false);
      }, 1500);

      alert(`₹{item.name} added to cart!`);

    } catch (error) {

      console.error("Add Cart Error:", error);
      alert("Unable to add item to cart");

    }
  }

  return (
    <article className="flex h-full flex-col rounded-3xl bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.06)] sm:p-6">

      <div className="flex items-start justify-between">
        <MenuDots />
        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-500">
          {item.calories} kcal
        </span>
      </div>

      <div className="relative mx-auto mt-4 h-48 w-full max-w-sm sm:h-56">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-contain"
          sizes="400px"
          priority
        />
      </div>

      <h2 className="mt-6 font-serif text-3xl font-bold text-zinc-900 sm:text-4xl">
        {item.name}
      </h2>

      <div className="mt-4 flex flex-wrap gap-2">
        {[
          { label: "Fat", value: item.nutrition.fat },
          { label: "Saturates", value: item.nutrition.saturates },
          { label: "Sugars", value: item.nutrition.sugars },
          { label: "Salt", value: item.nutrition.salt },
        ].map((nutrient) => (
          <span
            key={nutrient.label}
            className="rounded-full bg-zinc-100 px-3 py-1.5 text-xs text-zinc-600"
          >
            {nutrient.label} - {nutrient.value}
          </span>
        ))}
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-500">
        {item.description}
      </p>

      <div className="mt-6 flex items-center gap-4">

        <QuantityStepper
          value={quantity}
          onChange={setQuantity}
        />

        <span className="text-3xl font-bold text-zinc-900">
          ₹{item.price}
        </span>

        <button
          type="button"
          onClick={handleAddToCart}
          className={`ml-auto flex items-center gap-3 rounded-full px-5 py-3 text-sm font-medium transition-colors ${
            added
              ? "bg-brand text-white"
              : "bg-[#c8ddb8] text-zinc-800 hover:bg-[#b8d0a5]"
          }`}
        >
          <ShoppingCartIcon />
          <span className="hidden h-5 w-px bg-zinc-400/50 sm:block" />
          <span>{added ? "Added!" : "Add to Cart"}</span>
        </button>

      </div>

    </article>
  );
}