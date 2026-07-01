import { RestaurantMenu } from "./restaurant-menus";

export type MenuResponse = {
  menuId: number;
  restaurantId: number;
  itemName: string;
  description: string;
  price: number;
  calories: number;
  imageUrl: string;
  fat: string;
  saturates: string;
  sugars: string;
  salt: string;
  featured: boolean;
};

export async function getMenuBySlug(
  slug: string
): Promise<RestaurantMenu> {

  const response = await fetch(
    `http://localhost:8080/Food_Delivery_Application/menu?slug=${slug}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch menu");
  }

  const data: MenuResponse[] = await response.json();

  const featured =
    data.find((item) => item.featured) || data[0];

  return {
    featured: {
      id: String(featured.menuId),
      name: featured.itemName,
      description: featured.description,
      price: featured.price,
      calories: featured.calories,
      image: featured.imageUrl,
      nutrition: {
        fat: featured.fat,
        saturates: featured.saturates,
        sugars: featured.sugars,
        salt: featured.salt,
      },
      featured: true,
    },

    items: data
      .filter((item) => !item.featured)
      .map((item) => ({
        id: String(item.menuId),
        name: item.itemName,
        description: item.description,
        price: item.price,
        calories: item.calories,
        image: item.imageUrl,
        nutrition: {
          fat: item.fat,
          saturates: item.saturates,
          sugars: item.sugars,
          salt: item.salt,
        },
      })),
  };
}