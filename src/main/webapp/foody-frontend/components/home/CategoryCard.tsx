import Image from "next/image";
import { Category } from "@/lib/home-data";

type CategoryCardProps = {
  category: Category;
};

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <button
      type="button"
      className="rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative mx-auto h-16 w-16 overflow-hidden rounded-full">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover"
          sizes="64px"
        />
      </div>
      <p className="mt-3 text-center text-sm font-semibold text-zinc-900">
        {category.name}
      </p>
      <p className="mt-0.5 text-center text-xs text-zinc-400">
        {category.count} Restaurants
      </p>
    </button>
  );
}
