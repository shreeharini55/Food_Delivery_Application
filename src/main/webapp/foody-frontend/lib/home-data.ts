export type Restaurant = {
  slug: string;
  name: string;
  rating: number;
  tags: string;
  time: string;
  fee: string;
  image: string;
};

export type Category = {
  name: string;
  count: number;
  image: string;
};

export const categories: Category[] = [
  { name: "Pizza", count: 32, image: "/images/home/pizza.jpg" },
  { name: "Burgers", count: 24, image: "/images/home/burger.jpg" },
  { name: "Desserts", count: 18, image: "/images/home/dessert.jpg" },
  { name: "Sushi", count: 15, image: "/images/home/sushi.jpg" },
  { name: "Drinks", count: 20, image: "/images/home/drinks.jpg" },
  { name: "Salads", count: 12, image: "/images/home/salad.jpg" },
  { name: "Pasta", count: 21, image: "/images/home/restaurant-2.jpg" },
  { name: "Chinese", count: 19, image: "/images/home/restaurant-3.jpg" },
  { name: "Mexican", count: 14, image: "/images/home/restaurant-1.jpg" },
  { name: "BBQ", count: 11, image: "/images/home/promo-burger.jpg" },
];

export const restaurants: Restaurant[] = [
  {
    slug: "burger-house",
    name: "Burger House",
    rating: 4.6,
    tags: "Burgers, Fast Food",
    time: "30-40 min",
    fee: "₹5.0 Delivery",
    image: "/images/home/restaurant-1.jpg",
  },
  {
    slug: "pizza-palace",
    name: "Pizza Palace",
    rating: 4.8,
    tags: "Pizza, Italian",
    time: "25-35 min",
    fee: "₹4.0 Delivery",
    image: "/images/home/restaurant-2.jpg",
  },
  {
    slug: "sushi-world",
    name: "Sushi World",
    rating: 4.7,
    tags: "Sushi, Japanese",
    time: "35-45 min",
    fee: "₹6.0 Delivery",
    image: "/images/home/restaurant-3.jpg",
  },
  {
    slug: "green-bowl",
    name: "Green Bowl",
    rating: 4.5,
    tags: "Salads, Healthy",
    time: "20-30 min",
    fee: "₹3.5 Delivery",
    image: "/images/home/salad.jpg",
  },
  {
    slug: "taco-fiesta",
    name: "Taco Fiesta",
    rating: 4.4,
    tags: "Mexican, Tacos",
    time: "25-35 min",
    fee: "₹4.5 Delivery",
    image: "/images/home/taco.jpg",
  },
  {
    slug: "pasta-corner",
    name: "Pasta Corner",
    rating: 4.6,
    tags: "Pasta, Italian",
    time: "30-40 min",
    fee: "₹5.0 Delivery",
    image: "/images/home/pizza.jpg",
  },
  {
    slug: "grill-master",
    name: "Grill Master",
    rating: 4.3,
    tags: "BBQ, Grills",
    time: "35-50 min",
    fee: "₹6.5 Delivery",
    image: "/images/home/burger.jpg",
  },
  {
    slug: "sweet-treats",
    name: "Sweet Treats",
    rating: 4.9,
    tags: "Desserts, Bakery",
    time: "15-25 min",
    fee: "₹3.0 Delivery",
    image: "/images/home/dessert.jpg",
  },
  {
    slug: "ocean-bite",
    name: "Ocean Bite",
    rating: 4.5,
    tags: "Seafood, Grilled",
    time: "30-45 min",
    fee: "₹7.0 Delivery",
    image: "/images/home/sushi.jpg",
  },
  {
    slug: "juice-bar",
    name: "Juice Bar",
    rating: 4.2,
    tags: "Drinks, Smoothies",
    time: "10-20 min",
    fee: "₹2.5 Delivery",
    image: "/images/home/drinks.jpg",
  },
  {
    slug: "fresh-harvest",
    name: "Fresh Harvest",
    rating: 4.7,
    tags: "Salads, Organic",
    time: "20-30 min",
    fee: "₹4.0 Delivery",
    image: "/images/home/hero-salad.jpg",
  },
  {
    slug: "classic-diner",
    name: "Classic Diner",
    rating: 4.4,
    tags: "American, Diner",
    time: "25-35 min",
    fee: "₹5.5 Delivery",
    image: "/images/home/promo-burger.jpg",
  },
];

export function getRestaurantBySlug(slug: string) {
  return restaurants.find((restaurant) => restaurant.slug === slug);
}

export const favorites = restaurants.filter((_, index) =>
  [0, 1, 3, 4, 7, 10].includes(index),
);

export const orders = [
  {
    id: "ORD-1024",
    restaurant: "Burger House",
    items: "2x Classic Burger, 1x Fries",
    date: "Jun 24, 2026",
    total: "₹24.50",
    status: "Delivered" as const,
    image: "/images/home/restaurant-1.jpg",
  },
  {
    id: "ORD-1023",
    restaurant: "Pizza Palace",
    items: "1x Margherita Pizza, 1x Garlic Bread",
    date: "Jun 22, 2026",
    total: "₹18.90",
    status: "Delivered" as const,
    image: "/images/home/restaurant-2.jpg",
  },
  {
    id: "ORD-1022",
    restaurant: "Sushi World",
    items: "1x Salmon Roll, 1x Miso Soup",
    date: "Jun 20, 2026",
    total: "₹32.00",
    status: "Cancelled" as const,
    image: "/images/home/restaurant-3.jpg",
  },
  {
    id: "ORD-1021",
    restaurant: "Taco Fiesta",
    items: "3x Beef Tacos, 1x Nachos",
    date: "Jun 18, 2026",
    total: "₹21.75",
    status: "Delivered" as const,
    image: "/images/home/taco.jpg",
  },
  {
    id: "ORD-1020",
    restaurant: "Sweet Treats",
    items: "2x Chocolate Cake, 1x Latte",
    date: "Jun 15, 2026",
    total: "₹16.40",
    status: "Delivered" as const,
    image: "/images/home/dessert.jpg",
  },
];

export type Offer = {
  brand: string;
  logo: string;
  offerPrefix?: string;
  offerValue: string;
  offerSuffix?: string;
  expires: string;
  code: string;
};

export const offers: Offer[] = [
  {
    brand: "BURGER HOUSE",
    logo: "/images/home/restaurant-1.jpg",
    offerPrefix: "₹",
    offerValue: "10",
    offerSuffix: "COUPON",
    expires: "31 Jul 2026",
    code: "BURGER10",
  },
  {
    brand: "PIZZA PALACE",
    logo: "/images/home/pizza.jpg",
    offerValue: "25",
    offerSuffix: "% OFF",
    expires: "01 Aug 2026",
    code: "PIZZA25",
  },
  {
    brand: "SUSHI WORLD",
    logo: "/images/home/sushi.jpg",
    offerPrefix: "BUY",
    offerValue: "1",
    offerSuffix: "GET FREE",
    expires: "05 Aug 2026",
    code: "SUSHI1",
  },
  {
    brand: "TACO FIESTA",
    logo: "/images/home/taco.jpg",
    offerPrefix: "ANY TACO",
    offerValue: "50",
    offerSuffix: "% OFF",
    expires: "05 Sep 2026",
    code: "TACO50",
  },
  {
    brand: "BRINGES",
    logo: "/logo/logo.svg",
    offerValue: "50",
    offerSuffix: "% OFF",
    expires: "31 Jul 2026",
    code: "FOOD50",
  },
  {
    brand: "SWEET TREATS",
    logo: "/images/home/dessert.jpg",
    offerPrefix: "₹",
    offerValue: "5",
    offerSuffix: "COUPON",
    expires: "15 Aug 2026",
    code: "SWEET5",
  },
];

export const helpTopics = [
  {
    question: "How do I track my order?",
    answer:
      "Go to the Orders page to see live status updates from preparation to delivery.",
  },
  {
    question: "Can I cancel my order?",
    answer:
      "Orders can be cancelled within 5 minutes of placing. After that, contact support.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept credit/debit cards, UPI, and cash on delivery in supported areas.",
  },
  {
    question: "How do I apply a promo code?",
    answer:
      "Enter your code at checkout in the offers field before confirming payment.",
  },
  {
    question: "How do I contact support?",
    answer:
      "Email support@bringes.com or call +1 (800) 555-0199. We respond within 24 hours.",
  },
];

export const navItems = [
  { label: "Home", href: "/", icon: "home" as const },
  { label: "Restaurants", href: "/restaurants", icon: "restaurant" as const },
  { label: "Categories", href: "/categories", icon: "categories" as const },
  { label: "Orders", href: "/orders", icon: "orders" as const },
  { label: "Favorites", href: "/favorites", icon: "favorites" as const },
  { label: "Offers", href: "/offers", icon: "offers" as const },
  { label: "Help Center", href: "/help-center", icon: "help" as const },
];
