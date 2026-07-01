export type Nutrition = {
  fat: string;
  saturates: string;
  sugars: string;
  salt: string;
};

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  calories: number;
  image: string;
  nutrition: Nutrition;
  featured?: boolean;
};

export type RestaurantMenu = {
  featured: MenuItem;
  items: MenuItem[];
};

const burgerMenu: RestaurantMenu = {
  featured: {
    id: "classic-burger",
    name: "Classic Burger",
    description:
      "The Classic Burger is a simple and delicious burger with a beef patty, cheese, lettuce, tomato, and onion. It is a classic burger that is sure to satisfy your cravings.",
    price: 16,
    calories: 472,
    image: "/images/home/burger.jpg",
    nutrition: {
      fat: "26g",
      saturates: "10g",
      sugars: "18g",
      salt: "1g",
    },
    featured: true,
  },
  items: [
    {
      id: "double-burger",
      name: "Double Burger",
      description:
        "The Double Burger is a delicious burger with two beef patties, cheese, lettuce, tomato, and onion. It is a classic burger that is sure to satisfy your cravings...",
      price: 18,
      calories: 326,
      image: "/images/home/restaurant-1.jpg",
      nutrition: { fat: "22g", saturates: "9g", sugars: "12g", salt: "1.2g" },
    },
    {
      id: "green-burger",
      name: "Green Burger",
      description:
        "The Green Burger is a delicious burger with a beef patty, cheese, lettuce, tomato, and onion. It is a classic burger that is sure to satisfy your cravings...",
      price: 14,
      calories: 368,
      image: "/images/home/hero-salad.jpg",
      nutrition: { fat: "14g", saturates: "5g", sugars: "8g", salt: "0.9g" },
    },
    {
      id: "taj-chili-burger",
      name: "Taj Chili Burger",
      description:
        "The Taj Chili Burger is a delicious burger with a beef patty, cheese, lettuce, tomato, and onion. It is a classic burger that is sure to satisfy your cravings...",
      price: 18,
      calories: 334,
      image: "/images/home/promo-burger.jpg",
      nutrition: { fat: "20g", saturates: "8g", sugars: "10g", salt: "1.1g" },
    },
    {
      id: "healthy-burger",
      name: "Healthy Burger",
      description:
        "The Healthy Burger is a delicious burger with a beef patty, cheese, lettuce, tomato, and onion. It is a classic burger that is sure to satisfy your cravings...",
      price: 13,
      calories: 296,
      image: "/images/home/salad.jpg",
      nutrition: { fat: "11g", saturates: "4g", sugars: "6g", salt: "0.8g" },
    },
  ],
};

const pizzaMenu: RestaurantMenu = {
  featured: {
    id: "margherita",
    name: "Margherita Pizza",
    description:
      "A timeless Italian classic with fresh mozzarella, ripe tomatoes, and fragrant basil on a hand-tossed crust baked to perfection in our stone oven.",
    price: 15,
    calories: 420,
    image: "/images/home/pizza.jpg",
    nutrition: { fat: "18g", saturates: "8g", sugars: "6g", salt: "1.4g" },
    featured: true,
  },
  items: [
    {
      id: "pepperoni",
      name: "Pepperoni Feast",
      description:
        "Loaded with spicy pepperoni slices and melted cheese on a crispy golden crust. A crowd favourite for any pizza night...",
      price: 17,
      calories: 510,
      image: "/images/home/restaurant-2.jpg",
      nutrition: { fat: "24g", saturates: "11g", sugars: "5g", salt: "1.8g" },
    },
    {
      id: "veggie",
      name: "Veggie Supreme",
      description:
        "Fresh bell peppers, mushrooms, olives, and onions over a rich tomato base. A colourful and satisfying vegetarian option...",
      price: 14,
      calories: 380,
      image: "/images/home/salad.jpg",
      nutrition: { fat: "12g", saturates: "5g", sugars: "8g", salt: "1.1g" },
    },
    {
      id: "bbq-chicken",
      name: "BBQ Chicken",
      description:
        "Smoky BBQ sauce, grilled chicken, red onions, and cilantro on a cheesy base. Sweet, savoury, and utterly delicious...",
      price: 18,
      calories: 465,
      image: "/images/home/restaurant-1.jpg",
      nutrition: { fat: "20g", saturates: "9g", sugars: "12g", salt: "1.6g" },
    },
    {
      id: "four-cheese",
      name: "Four Cheese",
      description:
        "A rich blend of mozzarella, cheddar, parmesan, and gorgonzola melted over our signature thin crust. Pure cheesy indulgence...",
      price: 16,
      calories: 490,
      image: "/images/home/restaurant-2.jpg",
      nutrition: { fat: "28g", saturates: "14g", sugars: "4g", salt: "1.9g" },
    },
  ],
};

const defaultMenus: Record<string, RestaurantMenu> = {
  "burger-house": burgerMenu,
  "pizza-palace": pizzaMenu,
  "classic-diner": burgerMenu,
  "grill-master": burgerMenu,
};

function cloneMenu(menu: RestaurantMenu, imageOverrides?: Partial<MenuItem>): RestaurantMenu {
  return {
    featured: { ...menu.featured, ...imageOverrides },
    items: menu.items.map((item) => ({ ...item })),
  };
}

export function getMenuBySlug(slug: string): RestaurantMenu {
  if (defaultMenus[slug]) {
    return defaultMenus[slug];
  }

  return cloneMenu(burgerMenu, {
    name: slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ")
      + " Special",
  });
}
