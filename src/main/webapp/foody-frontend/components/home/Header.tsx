"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { CartButton } from "./CartButton";
import {
  ChevronDownIcon,
  MapPinIcon,
  SearchIcon,
} from "./icons";

export function Header() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const [userEmail] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("userEmail") || "Guest";
    }
    return "Guest";
  });

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    router.push("/login");
  };

  return (
    <header className="z-30 flex h-[72px] shrink-0 items-center gap-4 border-b border-zinc-100 bg-white px-4 lg:px-6">
      <Link href="/" className="shrink-0">
        <Image
          src="/logo/logo.svg"
          alt="BringEs"
          width={120}
          height={36}
          className="h-9 w-auto"
          priority
        />
      </Link>

      <button
        type="button"
        className="hidden items-center gap-2 rounded-full border border-zinc-200 px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 sm:flex"
      >
        <MapPinIcon className="h-4 w-4 text-brand" />
        <span>Bengaluru, India</span>
        <ChevronDownIcon className="h-4 w-4 text-zinc-400" />
      </button>

      <div className="relative mx-auto hidden max-w-xl flex-1 md:block">
        <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />

        <input
          type="search"
          placeholder="Search for food, restaurants, cuisines..."
          className="h-11 w-full rounded-full border border-zinc-200 bg-zinc-50 pl-11 pr-4 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-colors focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/10"
        />
      </div>

      <div className="ml-auto flex items-center gap-3 lg:gap-4">
        <CartButton />

        <div className="relative">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 rounded-full border border-zinc-200 py-1.5 pl-1.5 pr-3 transition-colors hover:bg-zinc-50"
          >
            <Image
              src="/images/home/avatar.jpg"
              alt="User"
              width={32}
              height={32}
              className="h-8 w-8 rounded-full object-cover"
            />

            <span className="hidden text-sm font-medium text-zinc-800 sm:inline">
              {userEmail}
            </span>

            <ChevronDownIcon className="hidden h-4 w-4 text-zinc-400 sm:block" />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 rounded-lg border border-zinc-200 bg-white shadow-lg">
              <div className="border-b border-zinc-100 px-4 py-3">
                <p className="text-sm font-medium text-zinc-900">
                  {userEmail}
                </p>
              </div>

              <Link
                href="/profile"
                className="block px-4 py-3 text-sm hover:bg-zinc-50"
              >
                Profile
              </Link>

              <Link
                href="/orders"
                className="block px-4 py-3 text-sm hover:bg-zinc-50"
              >
                My Orders
              </Link>

              <button
                onClick={handleLogout}
                className="w-full px-4 py-3 text-left text-sm text-red-600 hover:bg-zinc-50"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}