import { notFound } from "next/navigation";
import { DashboardLayout } from "@/components/home/DashboardLayout";
import { PageHeader } from "@/components/home/PageHeader";
import { RestaurantMenuGrid } from "@/components/restaurant/RestaurantMenuGrid";

import { getRestaurants } from "@/lib/restaurant-api";
import { getMenuBySlug } from "@/lib/menu-api";

type RestaurantPageProps = {
  params: Promise<{ "restaurant-name": string }>;
};

export async function generateStaticParams() {

  const restaurants = await getRestaurants();

  return restaurants.map((restaurant) => ({
    "restaurant-name": restaurant.slug,
  }));
}

export default async function RestaurantPage({
  params,
}: RestaurantPageProps) {

  const { "restaurant-name": slug } = await params;

  const restaurants = await getRestaurants();

  const restaurant = restaurants.find((r) => r.slug === slug);

  if (!restaurant) {
    notFound();
  }

  const menu = await getMenuBySlug(slug);

  return (
    <DashboardLayout>
      <PageHeader
        title={restaurant.name}
        description={`${restaurant.tags} · ${restaurant.deliveryTime} · ${restaurant.deliveryFee}`}
      />

      <RestaurantMenuGrid
        menu={menu}
        restaurantSlug={restaurant.slug}
        restaurantName={restaurant.name}
      />
    </DashboardLayout>
  );
}