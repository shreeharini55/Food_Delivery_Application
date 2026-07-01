export type RestaurantResponse = {
restaurantId: number;
slug: string;
name: string;
rating: number;
tags: string;
deliveryTime: string;
deliveryFee: string;
imageUrl: string;
};

export async function getRestaurants(): Promise<RestaurantResponse[]> {

const response = await fetch(
"http://localhost:8080/Food_Delivery_Application/restaurants",
{
cache: "no-store",
}
);

if (!response.ok) {
throw new Error("Failed to fetch restaurants");
}

return await response.json();
}
