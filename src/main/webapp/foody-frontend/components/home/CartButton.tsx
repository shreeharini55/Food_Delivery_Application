"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { CartIcon } from "./icons";

export function CartButton() {
  const { itemCount } = useCart();

  return (
    <Link
      href="/cart"
      className="relative flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-colors hover:bg-zinc-50"
      aria-label="Cart"
    >
      <CartIcon className="h-5 w-5" />
      {itemCount > 0 && (
        <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand px-1 text-[10px] font-semibold text-white">
          {itemCount}
        </span>
      )}
    </Link>
  );
}
