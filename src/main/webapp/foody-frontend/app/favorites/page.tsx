import { DashboardLayout } from "@/components/home/DashboardLayout";
import { PageHeader } from "@/components/home/PageHeader";
import { RestaurantGrid } from "@/components/home/RestaurantGrid";
import { favorites } from "@/lib/home-data";

export default function FavoritesPage() {
  return (
    <DashboardLayout>
      <PageHeader
        title="Favorites"
        description="Your saved restaurants for quick ordering."
      />
      <RestaurantGrid items={favorites} />
    </DashboardLayout>
  );
}
