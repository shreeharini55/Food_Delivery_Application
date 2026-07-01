import { FeaturedMenuCard } from "@/components/restaurant/FeaturedMenuCard";
import { MenuItemCard } from "@/components/restaurant/MenuItemCard";
import { RestaurantMenu } from "@/lib/restaurant-menus";

type RestaurantMenuGridProps = {
  menu: RestaurantMenu;
  restaurantSlug: string;
  restaurantName: string;
};

export function RestaurantMenuGrid({
  menu,
  restaurantSlug,
  restaurantName,
}: RestaurantMenuGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
      <FeaturedMenuCard
        item={menu.featured}
        restaurantSlug={restaurantSlug}
        restaurantName={restaurantName}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4">
        {menu.items.map((item) => (
          <MenuItemCard
            key={item.id}
            item={item}
            restaurantSlug={restaurantSlug}
            restaurantName={restaurantName}
          />
        ))}
      </div>
    </div>
  );
}
