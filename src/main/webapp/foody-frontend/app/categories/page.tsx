import { CategoryGrid } from "@/components/home/CategoryGrid";
import { DashboardLayout } from "@/components/home/DashboardLayout";
import { PageHeader } from "@/components/home/PageHeader";
import { categories } from "@/lib/home-data";

export default function CategoriesPage() {
  return (
    <DashboardLayout>
      <PageHeader
        title="Categories"
        description="Explore food categories and find the perfect meal."
      />
      <CategoryGrid items={categories} />
    </DashboardLayout>
  );
}
