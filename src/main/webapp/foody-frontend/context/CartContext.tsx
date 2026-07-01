"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  addCartItem,
  clearCart as clearCartApi,
  getCart,
  removeCartItem,
  updateCartItem,
} from "@/lib/cart-api";

import { AddToCartInput } from "@/lib/cart-types";

export type CartItem = {
  cartId: number;
  menuId: number;
  quantity: number;
  itemName: string;
  price: number;
  imageUrl: string;
  restaurantName: string;
};

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;

  addToCart: (
    item: AddToCartInput
  ) => Promise<void>;

  updateQuantity: (
    cartId: number,
    quantity: number
  ) => Promise<void>;

  removeFromCart: (
    cartId: number
  ) => Promise<void>;

  clearCart: () => Promise<void>;

  refreshCart: () => Promise<void>;
};

const CartContext =
  createContext<CartContextValue | null>(null);

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {

  const [items, setItems] =
    useState<CartItem[]>([]);

  const userId =
    typeof window !== "undefined"
      ? Number(localStorage.getItem("userId"))
      : 0;
	  async function refreshCart() {

	    if (!userId) {
	      setItems([]);
	      return;
	    }

	    try {

	      const data = await getCart(userId);

	      setItems(data);

	    } catch (error) {

	      console.error("Load Cart Error:", error);
	    }
	  }

	  useEffect(() => {
	    const load = async () => {
	      await refreshCart();
	    };

	    load();
	  }, []);
	  const itemCount = useMemo(() => {

	    return items.reduce(
	      (sum, item) => sum + item.quantity,
	      0
	    );

	  }, [items]);

	  const subtotal = useMemo(() => {

	    return items.reduce(
	      (sum, item) =>
	        sum + item.price * item.quantity,
	      0
	    );

	  }, [items]);
	  async function addToCart(item: AddToCartInput) {

	    if (!userId) {

	      alert("Please login first");
	      return;
	    }

	    try {

	      await addCartItem(
	        userId,
	        Number(item.menuItemId),
	        item.quantity
	      );

	      await refreshCart();

	    } catch (error) {

	      console.error("Add Cart Error:", error);
	    }
	  }

	  async function updateQuantity(
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

	      await refreshCart();

	    } catch (error) {

	      console.error(
	        "Update Quantity Error:",
	        error
	      );
	    }
	  }
	    async function removeFromCart(
	      cartId: number
	    ) {

	      try {

	        await removeCartItem(cartId);

	        await refreshCart();

	      } catch (error) {

	        console.error(
	          "Remove Cart Error:",
	          error
	        );
	      }
	    }

	    async function clearCart() {

	      if (!userId) return;

	      try {

	        await clearCartApi(userId);

	        await refreshCart();

	      } catch (error) {

	        console.error(
	          "Clear Cart Error:",
	          error
	        );
	      }
	    }

	    return (

	      <CartContext.Provider
	        value={{
	          items,
	          itemCount,
	          subtotal,
	          addToCart,
	          updateQuantity,
	          removeFromCart,
	          clearCart,
	          refreshCart,
	        }}
	      >

	        {children}

	      </CartContext.Provider>

	    );
	  }
	  export function useCart() {

	    const context =
	      useContext(CartContext);

	    if (!context) {

	      throw new Error(
	        "useCart must be used within CartProvider"
	      );
	    }

	    return context;
	  }