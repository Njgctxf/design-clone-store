import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useState } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  quantity: number;
  color?: string;
}

const initialCart: CartItem[] = [
  { id: "2", name: "OnePlus 11 5G Smartphone", price: 649.00, originalPrice: 799.00, image: "📱", quantity: 1, color: "Noir" },
  { id: "5", name: "AirPods Pro 2nd Gen", price: 199.00, originalPrice: 249.00, image: "🎧", quantity: 2 },
  { id: "6", name: "Apple Watch Series 9", price: 349.00, originalPrice: 429.00, image: "⌚", quantity: 1, color: "Silver" },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCart);
  const [promoCode, setPromoCode] = useState("");

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const savings = cartItems.reduce((sum, item) => sum + (item.originalPrice - item.price) * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 9.99;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="w-24 h-24 mx-auto bg-muted rounded-full flex items-center justify-center mb-6">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Votre panier est vide</h1>
            <p className="text-muted-foreground mb-8">Découvrez nos produits et ajoutez-les à votre panier</p>
            <Link to="/products">
              <Button variant="coral" size="lg">
                Découvrir les produits
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
          <h1 className="text-3xl font-bold text-foreground mb-8">Votre Panier ({cartItems.length})</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-card rounded-2xl p-4 md:p-6 border border-border flex flex-col md:flex-row gap-4 animate-fade-in">
                  {/* Image */}
                  <div className="w-24 h-24 bg-muted rounded-xl flex items-center justify-center shrink-0">
                    <span className="text-4xl">{item.image}</span>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <Link to={`/product/${item.id}`} className="font-medium text-foreground hover:text-coral transition-colors line-clamp-2">
                      {item.name}
                    </Link>
                    {item.color && (
                      <p className="text-sm text-muted-foreground mt-1">Couleur: {item.color}</p>
                    )}
                    <div className="flex items-center gap-2 mt-2">
                      <span className="font-bold text-foreground">${item.price.toFixed(2)}</span>
                      <span className="text-sm text-muted-foreground line-through">${item.originalPrice.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4">
                    {/* Quantity */}
                    <div className="flex items-center border border-border rounded-lg">
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, -1)}>
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center font-medium text-sm">{item.quantity}</span>
                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, 1)}>
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    {/* Total */}
                    <span className="font-bold text-foreground w-20 text-right">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>

                    {/* Remove */}
                    <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive/80" onClick={() => removeItem(item.id)}>
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              ))}

              {/* Continue Shopping */}
              <Link to="/products" className="inline-flex items-center gap-2 text-coral hover:text-coral/80 transition-colors mt-4">
                ← Continuer vos achats
              </Link>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl p-6 border border-border sticky top-24">
                <h2 className="text-xl font-bold text-foreground mb-6">Résumé de la commande</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Sous-total</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-mint-dark">
                    <span>Économies</span>
                    <span>-${savings.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Livraison</span>
                    <span>{shipping === 0 ? "Gratuite" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-xs text-muted-foreground">
                      Livraison gratuite à partir de $100
                    </p>
                  )}
                </div>

                {/* Promo Code */}
                <div className="flex gap-2 mb-6">
                  <Input
                    placeholder="Code promo"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1"
                  />
                  <Button variant="outline">Appliquer</Button>
                </div>

                <div className="border-t border-border pt-4 mb-6">
                  <div className="flex justify-between text-lg font-bold text-foreground">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <Link to="/checkout">
                  <Button variant="coral" size="xl" className="w-full">
                    Passer la commande
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  Paiement sécurisé • Livraison sous 3-5 jours
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
