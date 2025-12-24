import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const products = [
  {
    id: "1",
    name: "Stetson Leather Backpack Premium",
    price: 0.14,
    originalPrice: 84.00,
    image: "🎒",
    rating: 4.8,
    reviews: 234,
    badge: "-98%",
    badgeColor: "coral" as const,
  },
  {
    id: "2",
    name: "OnePlus 11 5G Smartphone",
    price: 24.00,
    originalPrice: 50.00,
    image: "📱",
    rating: 4.9,
    reviews: 456,
    badge: "New",
    badgeColor: "mint" as const,
  },
  {
    id: "3",
    name: "Apple iPad Pro M2 12.9\"",
    price: 714.00,
    originalPrice: 854.00,
    image: "📲",
    rating: 4.7,
    reviews: 189,
    badge: "Hot",
    badgeColor: "peach" as const,
  },
  {
    id: "4",
    name: "Samsung Galaxy S24 Ultra",
    price: 899.00,
    originalPrice: 1099.00,
    image: "📱",
    rating: 4.8,
    reviews: 567,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">
            Top Categories <span className="text-muted-foreground font-normal">Of the Week</span>
          </h2>
          <div className="flex items-center gap-4">
            <Link to="/products?sort=trending" className="text-coral font-medium text-sm hover:text-coral/80 transition-colors">
              Browse Hankers
            </Link>
            <Link to="/products" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
              Starter Packs →
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <div key={product.id} style={{ animationDelay: `${index * 100}ms` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
