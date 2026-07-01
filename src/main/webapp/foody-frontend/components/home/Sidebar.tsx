"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/home-data";
import {
  ArrowRightIcon,
  GridIcon,
  HeartIcon,
  HelpIcon,
  HomeIcon,
  OrdersIcon,
  RestaurantIcon,
  TagIcon,
} from "./icons";

const iconMap = {
  home: HomeIcon,
  restaurant: RestaurantIcon,
  categories: GridIcon,
  orders: OrdersIcon,
  favorites: HeartIcon,
  offers: TagIcon,
  help: HelpIcon,
};

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden h-full w-[240px] shrink-0 flex-col border-r border-zinc-100 bg-white px-4 py-6 lg:flex">
      <nav className="space-y-1">
        {navItems.map((item) => {
          const Icon = iconMap[item.icon];
          const active = isActive(pathname, item.href);

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                active
                  ? "bg-brand-light text-brand"
                  : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
              }`}
            >
              <Icon className="h-5 w-5 shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto rounded-2xl bg-brand-light p-4">
        <p className="text-sm font-bold leading-snug text-zinc-900">
          Get 50% OFF on your first order
        </p>
        <p className="mt-1 text-xs text-zinc-500">Use code: FOOD50</p>

        <div className="relative mx-auto mt-3 h-36 w-full">
          <Image
            src="/images/burger-coke-fires.png"
            alt="Burger, coke and fries"
            fill
            className="object-contain object-center"
            sizes="240px"
          />
        </div>

        <button
          type="button"
          className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-hover"
        >
          Order Now
          <ArrowRightIcon className="h-4 w-4" />
        </button>
      </div>
    </aside>
  );
}
