import { Restaurant } from "@/lib/home-data";
import { RestaurantCard } from "./RestaurantCard";

type RestaurantGridProps = {
  items: Restaurant[];
};

export function RestaurantGrid({ items }: RestaurantGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((restaurant) => (
        <RestaurantCard key={restaurant.name} restaurant={restaurant} />
      ))}
    </div>
  );
}
