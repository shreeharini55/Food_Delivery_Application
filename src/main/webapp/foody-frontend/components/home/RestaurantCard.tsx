import Link from "next/link";
import Image from "next/image";
import { Restaurant } from "@/lib/home-data";
import { ClockIcon, DollarIcon, StarIcon } from "./icons";

type RestaurantCardProps = {
  restaurant: Restaurant;
};

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <Link
      href={`/restaurant/${restaurant.slug}`}
      className="block overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <article>
        <div className="relative h-40">
          <Image
            src={restaurant.image}
            alt={restaurant.name}
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 50vw, 25vw"
          />
        </div>

        <div className="p-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-zinc-900">{restaurant.name}</h3>
            <span className="flex shrink-0 items-center gap-1 text-sm font-medium text-zinc-700">
              <StarIcon className="h-3.5 w-3.5 text-amber-400" />
              {restaurant.rating}
            </span>
          </div>

          <p className="mt-1 text-xs text-zinc-400">{restaurant.tags}</p>

          <div className="mt-3 flex items-center justify-between gap-2 text-xs text-zinc-500">
            <span className="flex items-center gap-1">
              <ClockIcon className="h-3.5 w-3.5" />
              {restaurant.time}
            </span>
            <span className="flex items-center gap-1">
              <DollarIcon className="h-3.5 w-3.5" />
              {restaurant.fee}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
