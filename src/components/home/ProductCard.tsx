import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useWishlistContext } from "@/contexts/WishlistContext";
import { toast } from "sonner";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
  badgeColor?: "coral" | "mint" | "peach";
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviews,
  badge,
  badgeColor = "coral",
}: ProductCardProps) => {
  const { isInWishlist, toggleWishlist } = useWishlistContext();
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;
  const inWishlist = isInWishlist(id);
  
  const badgeStyles = {
    coral: "bg-coral text-primary-foreground",
    mint: "bg-mint text-mint-dark",
    peach: "bg-peach text-primary-foreground",
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist({ id, name, price, originalPrice, image, rating, reviews });
    if (inWishlist) {
      toast.success(`${name} retiré des favoris`);
    } else {
      toast.success(`${name} ajouté aux favoris`);
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast.success(`${name} ajouté au panier`);
  };

  return (
    <div className="group bg-card rounded-2xl p-4 border border-border hover:shadow-lg transition-all duration-300 animate-fade-in">
      {/* Image Container */}
      <div className="relative aspect-square rounded-xl overflow-hidden bg-muted mb-4">
        {badge && (
          <Badge className={`absolute top-2 left-2 z-10 ${badgeStyles[badgeColor]}`}>
            {badge}
          </Badge>
        )}
        <Link to={`/product/${id}`}>
          <div className="w-full h-full flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
            {image}
          </div>
        </Link>
        
        {/* Quick Actions */}
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <Button 
            variant="secondary" 
            size="icon" 
            className={`h-8 w-8 rounded-full shadow-md transition-all ${inWishlist ? "bg-coral-light" : "opacity-0 group-hover:opacity-100"}`}
            onClick={handleWishlistToggle}
          >
            <Heart className={`h-4 w-4 ${inWishlist ? "fill-coral text-coral" : ""}`} />
          </Button>
        </div>
        
        <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button variant="coral" size="sm" className="w-full" onClick={handleAddToCart}>
            <ShoppingCart className="h-4 w-4 mr-2" />
            Ajouter
          </Button>
        </div>
      </div>

      {/* Content */}
      <Link to={`/product/${id}`} className="block space-y-2">
        <h3 className="font-medium text-foreground line-clamp-2 group-hover:text-coral transition-colors">
          {name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-peach text-peach" />
          <span className="text-sm text-muted-foreground">
            {rating} ({reviews} avis)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-foreground">${price.toFixed(2)}</span>
          {originalPrice && (
            <>
              <span className="text-sm text-muted-foreground line-through">${originalPrice.toFixed(2)}</span>
              <span className="text-xs text-coral font-medium">-{discount}%</span>
            </>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
