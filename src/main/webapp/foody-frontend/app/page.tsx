import { CategoriesSection } from "@/components/home/CategoriesSection";
import { DashboardLayout } from "@/components/home/DashboardLayout";
import { HeroBanner } from "@/components/home/HeroBanner";
import { PopularRestaurants } from "@/components/home/PopularRestaurants";

export default function Home() {
  return (
    <DashboardLayout>
      <HeroBanner />
      <CategoriesSection />
      <PopularRestaurants />
    </DashboardLayout>
  );
}
