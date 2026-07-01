import { Category } from "@/lib/home-data";
import { CategoryCard } from "./CategoryCard";

type CategoryGridProps = {
  items: Category[];
};

export function CategoryGrid({ items }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
      {items.map((category) => (
        <CategoryCard key={category.name} category={category} />
      ))}
    </div>
  );
}
