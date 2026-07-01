import { DashboardLayout } from "@/components/home/DashboardLayout";
import { PageHeader } from "@/components/home/PageHeader";
import { RestaurantGrid } from "@/components/home/RestaurantGrid";
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

export default async function RestaurantsPage() {

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
    <DashboardLayout>
      <PageHeader
        title="Restaurants"
        description="Browse all restaurants near you and order your favorites."
      />

      <RestaurantGrid items={restaurants} />
    </DashboardLayout>
  );
}