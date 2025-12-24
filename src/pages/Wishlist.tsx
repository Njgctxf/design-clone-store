import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Trash2, Star, ArrowRight } from "lucide-react";
import { useWishlistContext } from "@/contexts/WishlistContext";
import { toast } from "sonner";

const Wishlist = () => {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlistContext();

  const handleRemove = (id: string, name: string) => {
    removeFromWishlist(id);
    toast.success(`${name} retiré de vos favoris`);
  };

  const handleAddToCart = (name: string) => {
    toast.success(`${name} ajouté au panier`);
  };

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="w-24 h-24 mx-auto bg-coral-light rounded-full flex items-center justify-center mb-6">
              <Heart className="h-12 w-12 text-coral" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Votre liste de souhaits est vide</h1>
            <p className="text-muted-foreground mb-8">Parcourez nos produits et ajoutez vos favoris ici</p>
            <Link to="/products">
              <Button variant="coral" size="lg">
                Découvrir les produits
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Ma liste de souhaits</h1>
              <p className="text-muted-foreground">{wishlist.length} produit{wishlist.length > 1 ? "s" : ""}</p>
            </div>
            <Button variant="outline" onClick={clearWishlist}>
              <Trash2 className="h-4 w-4 mr-2" />
              Tout supprimer
            </Button>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlist.map((item, index) => {
              const discount = item.originalPrice 
                ? Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100) 
                : 0;

              return (
                <div 
                  key={item.id} 
                  className="bg-card rounded-2xl p-4 border border-border hover:shadow-lg transition-all duration-300 animate-fade-in group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Image */}
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-muted mb-4">
                    <Link to={`/product/${item.id}`}>
                      <div className="w-full h-full flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                        {item.image}
                      </div>
                    </Link>
                    
                    {/* Remove button */}
                    <Button 
                      variant="secondary" 
                      size="icon" 
                      className="absolute top-2 right-2 h-8 w-8 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => handleRemove(item.id, item.name)}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>

                    {discount > 0 && (
                      <div className="absolute top-2 left-2 bg-coral text-primary-foreground text-xs font-medium px-2 py-1 rounded-full">
                        -{discount}%
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <Link to={`/product/${item.id}`} className="block space-y-2 mb-4">
                    <h3 className="font-medium text-foreground line-clamp-2 group-hover:text-coral transition-colors">
                      {item.name}
                    </h3>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-peach text-peach" />
                      <span className="text-sm text-muted-foreground">
                        {item.rating} ({item.reviews} avis)
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-foreground">${item.price.toFixed(2)}</span>
                      {item.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${item.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </Link>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button 
                      variant="coral" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => handleAddToCart(item.name)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Ajouter au panier
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Continue Shopping */}
          <div className="text-center mt-12">
            <Link to="/products">
              <Button variant="outline" size="lg">
                Continuer mes achats
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Wishlist;
