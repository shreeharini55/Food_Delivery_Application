import Link from "next/link";
import { RestaurantGrid } from "./RestaurantGrid";
import { getRestaurants } from "@/lib/restaurant-api";

type RestaurantResponse = {
  slug: string;
  name: string;
  rating: number;
  tags: string;
  deliveryTime: string;
  deliveryFee: string;
  imageUrl: string;
};

export async function PopularRestaurants() {

  const data: RestaurantResponse[] = await getRestaurants();

  const restaurants = data.map((r) => ({
    slug: r.slug,
    name: r.name,
    rating: r.rating,
    tags: r.tags,
    time: r.deliveryTime,
    fee: r.deliveryFee,
    image: r.imageUrl,
  }));

  return (
    <section className="mt-8 pb-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-zinc-900">
          Popular Restaurants
        </h2>

        <Link
          href="/restaurants"
          className="text-sm font-medium text-brand hover:underline"
        >
          View All
        </Link>
      </div>

      <RestaurantGrid items={restaurants} />
    </section>
  );
}