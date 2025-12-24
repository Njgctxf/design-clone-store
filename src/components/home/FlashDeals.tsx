import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Timer } from "lucide-react";

const flashDeals = [
  {
    id: "5",
    name: "AirPods Pro 2nd Gen",
    price: 199.00,
    originalPrice: 249.00,
    image: "🎧",
    rating: 4.9,
    reviews: 892,
    badge: "Flash",
    badgeColor: "coral" as const,
  },
  {
    id: "6",
    name: "Apple Watch Series 9",
    price: 349.00,
    originalPrice: 429.00,
    image: "⌚",
    rating: 4.8,
    reviews: 445,
    badge: "Flash",
    badgeColor: "coral" as const,
  },
  {
    id: "7",
    name: "MacBook Air M3",
    price: 999.00,
    originalPrice: 1199.00,
    image: "💻",
    rating: 4.9,
    reviews: 678,
    badge: "Flash",
    badgeColor: "coral" as const,
  },
  {
    id: "8",
    name: "Sony WH-1000XM5",
    price: 278.00,
    originalPrice: 399.00,
    image: "🎧",
    rating: 4.7,
    reviews: 334,
    badge: "Flash",
    badgeColor: "coral" as const,
  },
];

const FlashDeals = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold text-foreground">Top Flash Deals</h2>
            <div className="flex items-center gap-2 text-coral">
              <Timer className="h-5 w-5" />
              <span className="font-medium">Mounting Derage</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/products?sort=featured" className="text-coral font-medium text-sm hover:text-coral/80 transition-colors">
              Favourites
            </Link>
            <Link to="/products?sort=latest" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
              Latest/Alerts →
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {flashDeals.map((product, index) => (
            <div key={product.id} style={{ animationDelay: `${index * 100}ms` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashDeals;
