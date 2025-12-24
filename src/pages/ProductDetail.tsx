import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useParams, Link } from "react-router-dom";
import { Heart, ShoppingCart, Star, Truck, Shield, RotateCcw, Minus, Plus, ChevronRight } from "lucide-react";
import { useState } from "react";
import ProductCard from "@/components/home/ProductCard";
import { useWishlistContext } from "@/contexts/WishlistContext";
import { toast } from "sonner";

const productData: Record<string, {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviews: number;
  description: string;
  features: string[];
  colors: string[];
  storage: string[];
}> = {
  "1": {
    id: "1",
    name: "Stetson Leather Backpack Premium Edition",
    price: 84.00,
    originalPrice: 120.00,
    image: "🎒",
    rating: 4.8,
    reviews: 234,
    description: "Sac à dos en cuir premium avec compartiment laptop, design élégant et fonctionnel pour le quotidien ou les voyages.",
    features: ["Cuir véritable premium", "Compartiment laptop 15\"", "Poches multiples", "Bretelles rembourrées", "Imperméable"],
    colors: ["Marron", "Noir", "Cognac"],
    storage: [],
  },
  "2": {
    id: "2",
    name: "OnePlus 11 5G Smartphone",
    price: 649.00,
    originalPrice: 799.00,
    image: "📱",
    rating: 4.9,
    reviews: 456,
    description: "Le OnePlus 11 5G offre des performances exceptionnelles avec le processeur Snapdragon 8 Gen 2 et un écran AMOLED 120Hz.",
    features: ["Snapdragon 8 Gen 2", "Écran AMOLED 6.7\"", "Camera Hasselblad 50MP", "Charge rapide 100W", "5G"],
    colors: ["Noir", "Vert"],
    storage: ["128GB", "256GB"],
  },
};

const relatedProducts = [
  { id: "5", name: "AirPods Pro 2nd Gen", price: 199.00, originalPrice: 249.00, image: "🎧", rating: 4.9, reviews: 892 },
  { id: "6", name: "Apple Watch Series 9", price: 349.00, originalPrice: 429.00, image: "⌚", rating: 4.8, reviews: 445 },
  { id: "8", name: "Sony WH-1000XM5", price: 278.00, originalPrice: 399.00, image: "🎧", rating: 4.7, reviews: 334 },
  { id: "12", name: "Anker PowerBank 26800", price: 45.00, originalPrice: 65.00, image: "🔋", rating: 4.8, reviews: 789 },
];

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedStorage, setSelectedStorage] = useState(0);
  const { isInWishlist, toggleWishlist } = useWishlistContext();

  const product = productData[id || "2"] || productData["2"];
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  const inWishlist = isInWishlist(product.id);

  const handleWishlistToggle = () => {
    toggleWishlist({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      rating: product.rating,
      reviews: product.reviews,
    });
    if (inWishlist) {
      toast.success(`${product.name} retiré des favoris`);
    } else {
      toast.success(`${product.name} ajouté aux favoris`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-coral transition-colors">Accueil</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/products" className="hover:text-coral transition-colors">Produits</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{product.name}</span>
          </nav>

          {/* Product Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-square bg-card rounded-3xl border border-border flex items-center justify-center relative overflow-hidden">
                <Badge className="absolute top-4 left-4 bg-coral text-primary-foreground">
                  -{discount}%
                </Badge>
                <span className="text-[12rem] animate-float">{product.image}</span>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-card rounded-xl border border-border flex items-center justify-center cursor-pointer hover:border-coral transition-colors">
                    <span className="text-4xl">{product.image}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className={`h-5 w-5 ${star <= Math.floor(product.rating) ? "fill-peach text-peach" : "text-muted"}`} />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">
                      {product.rating} ({product.reviews} avis)
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">{product.description}</p>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-foreground">${product.price.toFixed(2)}</span>
                <span className="text-xl text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
                <Badge className="bg-coral text-primary-foreground">Économisez ${(product.originalPrice - product.price).toFixed(2)}</Badge>
              </div>

              {/* Colors */}
              {product.colors.length > 0 && (
                <div>
                  <h3 className="font-medium text-foreground mb-3">Couleur: {product.colors[selectedColor]}</h3>
                  <div className="flex gap-3">
                    {product.colors.map((color, idx) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(idx)}
                        className={`px-4 py-2 rounded-lg border-2 transition-all ${selectedColor === idx ? "border-coral bg-coral-light" : "border-border hover:border-muted-foreground"}`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Storage */}
              {product.storage.length > 0 && (
                <div>
                  <h3 className="font-medium text-foreground mb-3">Stockage: {product.storage[selectedStorage]}</h3>
                  <div className="flex gap-3">
                    {product.storage.map((size, idx) => (
                      <button
                        key={size}
                        onClick={() => setSelectedStorage(idx)}
                        className={`px-4 py-2 rounded-lg border-2 transition-all ${selectedStorage === idx ? "border-coral bg-coral-light" : "border-border hover:border-muted-foreground"}`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div>
                <h3 className="font-medium text-foreground mb-3">Quantité</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-border rounded-xl">
                    <Button variant="ghost" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <Button variant="ghost" size="icon" onClick={() => setQuantity(quantity + 1)}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-4">
                <Button variant="coral" size="xl" className="flex-1">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Ajouter au panier
                </Button>
                <Button 
                  variant="outline" 
                  size="xl" 
                  onClick={handleWishlistToggle}
                  className={inWishlist ? "border-coral bg-coral-light" : ""}
                >
                  <Heart className={`h-5 w-5 ${inWishlist ? "fill-coral text-coral" : ""}`} />
                </Button>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto bg-mint/30 rounded-xl flex items-center justify-center mb-2">
                    <Truck className="h-6 w-6 text-mint-dark" />
                  </div>
                  <p className="text-xs text-muted-foreground">Livraison gratuite</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto bg-coral-light rounded-xl flex items-center justify-center mb-2">
                    <Shield className="h-6 w-6 text-coral" />
                  </div>
                  <p className="text-xs text-muted-foreground">Garantie 2 ans</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto bg-sage/50 rounded-xl flex items-center justify-center mb-2">
                    <RotateCcw className="h-6 w-6 text-foreground" />
                  </div>
                  <p className="text-xs text-muted-foreground">Retour 14 jours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Caractéristiques</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {product.features.map((feature, idx) => (
                <div key={idx} className="bg-card rounded-xl p-4 border border-border text-center">
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Related Products */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Produits similaires</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
