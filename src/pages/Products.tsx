import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/home/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { SlidersHorizontal, Grid3X3, LayoutList } from "lucide-react";
import { useState } from "react";

const allProducts = [
  { id: "1", name: "Stetson Leather Backpack Premium", price: 84.00, originalPrice: 120.00, image: "🎒", rating: 4.8, reviews: 234, badge: "Sale", badgeColor: "coral" as const },
  { id: "2", name: "OnePlus 11 5G Smartphone", price: 649.00, originalPrice: 799.00, image: "📱", rating: 4.9, reviews: 456, badge: "New", badgeColor: "mint" as const },
  { id: "3", name: "Apple iPad Pro M2", price: 714.00, originalPrice: 854.00, image: "📲", rating: 4.7, reviews: 189, badge: "Hot", badgeColor: "peach" as const },
  { id: "4", name: "Samsung Galaxy S24 Ultra", price: 899.00, originalPrice: 1099.00, image: "📱", rating: 4.8, reviews: 567 },
  { id: "5", name: "AirPods Pro 2nd Gen", price: 199.00, originalPrice: 249.00, image: "🎧", rating: 4.9, reviews: 892 },
  { id: "6", name: "Apple Watch Series 9", price: 349.00, originalPrice: 429.00, image: "⌚", rating: 4.8, reviews: 445 },
  { id: "7", name: "MacBook Air M3", price: 999.00, originalPrice: 1199.00, image: "💻", rating: 4.9, reviews: 678, badge: "Popular", badgeColor: "mint" as const },
  { id: "8", name: "Sony WH-1000XM5", price: 278.00, originalPrice: 399.00, image: "🎧", rating: 4.7, reviews: 334 },
  { id: "9", name: "Google Pixel 8 Pro", price: 799.00, originalPrice: 899.00, image: "📱", rating: 4.6, reviews: 223 },
  { id: "10", name: "Samsung Galaxy Watch 6", price: 299.00, originalPrice: 349.00, image: "⌚", rating: 4.5, reviews: 178 },
  { id: "11", name: "JBL Flip 6 Speaker", price: 99.00, originalPrice: 129.00, image: "🔊", rating: 4.7, reviews: 456, badge: "Sale", badgeColor: "coral" as const },
  { id: "12", name: "Anker PowerBank 26800", price: 45.00, originalPrice: 65.00, image: "🔋", rating: 4.8, reviews: 789 },
];

const categories = ["Tous", "Smartphones", "Tablettes", "Audio", "Montres", "Accessoires"];
const brands = ["Apple", "Samsung", "Sony", "Google", "OnePlus", "JBL", "Anker"];

const Products = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [priceRange, setPriceRange] = useState([0, 1500]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Tous les produits</h1>
            <p className="text-muted-foreground">Découvrez notre sélection de produits tech</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:w-64 shrink-0">
              <div className="bg-card rounded-2xl p-6 border border-border sticky top-24">
                <div className="flex items-center gap-2 mb-6">
                  <SlidersHorizontal className="h-5 w-5 text-coral" />
                  <h3 className="font-semibold text-foreground">Filtres</h3>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <h4 className="font-medium text-foreground mb-3">Catégories</h4>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <Button key={cat} variant="pill" size="sm" className="mr-2 mb-2">
                        {cat}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="font-medium text-foreground mb-3">Prix</h4>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={1500}
                    step={10}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                {/* Brands */}
                <div className="mb-6">
                  <h4 className="font-medium text-foreground mb-3">Marques</h4>
                  <div className="space-y-2">
                    {brands.map((brand) => (
                      <label key={brand} className="flex items-center gap-2 cursor-pointer">
                        <Checkbox />
                        <span className="text-sm text-muted-foreground">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <Button variant="coral" className="w-full">
                  Appliquer les filtres
                </Button>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-6 bg-card rounded-xl p-4 border border-border">
                <span className="text-sm text-muted-foreground">
                  {allProducts.length} produits trouvés
                </span>
                <div className="flex items-center gap-4">
                  <Select defaultValue="popular">
                    <SelectTrigger className="w-40">
                      <SelectValue placeholder="Trier par" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">Populaires</SelectItem>
                      <SelectItem value="newest">Plus récents</SelectItem>
                      <SelectItem value="price-asc">Prix croissant</SelectItem>
                      <SelectItem value="price-desc">Prix décroissant</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="flex items-center gap-1 border border-border rounded-lg p-1">
                    <Button
                      variant={viewMode === "grid" ? "secondary" : "ghost"}
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => setViewMode("grid")}
                    >
                      <Grid3X3 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "secondary" : "ghost"}
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => setViewMode("list")}
                    >
                      <LayoutList className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Products */}
              <div className={`grid gap-4 md:gap-6 ${viewMode === "grid" ? "grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
                {allProducts.map((product, index) => (
                  <div key={product.id} style={{ animationDelay: `${index * 50}ms` }}>
                    <ProductCard {...product} />
                  </div>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  Charger plus de produits
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
