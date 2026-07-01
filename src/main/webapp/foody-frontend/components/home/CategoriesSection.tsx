import Link from "next/link";
import { categories } from "@/lib/home-data";
import { CategoryCard } from "./CategoryCard";

export function CategoriesSection() {
  return (
    <section className="mt-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-zinc-900">Categories</h2>
        <Link
          href="/categories"
          className="text-sm font-medium text-brand hover:underline"
        >
          View All
        </Link>
      </div>

      <div className="-mx-4 overflow-x-auto px-4 pb-1 [scrollbar-width:none] lg:-mx-6 lg:px-6 [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max gap-3">
          {categories.map((category) => (
            <div
              key={category.name}
              className="w-[112px] shrink-0 sm:w-[120px]"
            >
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
