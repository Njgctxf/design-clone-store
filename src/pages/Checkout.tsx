import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Link } from "react-router-dom";
import { ArrowLeft, CreditCard, Truck, Shield, ChevronRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const cartItems: CartItem[] = [
  { id: "2", name: "OnePlus 11 5G Smartphone", price: 649.00, quantity: 1, image: "📱" },
  { id: "5", name: "AirPods Pro 2nd Gen", price: 199.00, quantity: 2, image: "🎧" },
  { id: "6", name: "Apple Watch Series 9", price: 349.00, quantity: 1, image: "⌚" },
];

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "France",
  });

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 9.99;
  const total = subtotal + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Commande confirmée ! Vous recevrez un email de confirmation.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/cart" className="flex items-center gap-1 hover:text-coral transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Retour au panier
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">Checkout</span>
          </div>

          <h1 className="text-3xl font-bold text-foreground mb-8">Finaliser la commande</h1>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left: Forms */}
              <div className="lg:col-span-2 space-y-8">
                {/* Shipping Address */}
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-coral/10 rounded-full flex items-center justify-center">
                      <Truck className="h-5 w-5 text-coral" />
                    </div>
                    <h2 className="text-xl font-bold text-foreground">Adresse de livraison</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Prénom</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="Jean"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nom</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Dupont"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="jean.dupont@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+33 6 12 34 56 78"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="address">Adresse</Label>
                      <Input
                        id="address"
                        name="address"
                        placeholder="123 Rue de la Paix"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">Ville</Label>
                      <Input
                        id="city"
                        name="city"
                        placeholder="Paris"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="postalCode">Code postal</Label>
                      <Input
                        id="postalCode"
                        name="postalCode"
                        placeholder="75001"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-mint/30 rounded-full flex items-center justify-center">
                      <CreditCard className="h-5 w-5 text-mint-dark" />
                    </div>
                    <h2 className="text-xl font-bold text-foreground">Mode de paiement</h2>
                  </div>

                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                    <div className="flex items-center space-x-3 p-4 border border-border rounded-xl hover:border-coral/50 transition-colors cursor-pointer">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex-1 cursor-pointer">
                        <span className="font-medium">Carte bancaire</span>
                        <span className="block text-sm text-muted-foreground">Visa, Mastercard, American Express</span>
                      </Label>
                      <div className="flex gap-1">
                        <div className="w-8 h-5 bg-muted rounded flex items-center justify-center text-xs">💳</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border border-border rounded-xl hover:border-coral/50 transition-colors cursor-pointer">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <Label htmlFor="paypal" className="flex-1 cursor-pointer">
                        <span className="font-medium">PayPal</span>
                        <span className="block text-sm text-muted-foreground">Paiement sécurisé via PayPal</span>
                      </Label>
                      <div className="w-8 h-5 bg-muted rounded flex items-center justify-center text-xs">🅿️</div>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border border-border rounded-xl hover:border-coral/50 transition-colors cursor-pointer">
                      <RadioGroupItem value="apple" id="apple" />
                      <Label htmlFor="apple" className="flex-1 cursor-pointer">
                        <span className="font-medium">Apple Pay</span>
                        <span className="block text-sm text-muted-foreground">Paiement rapide et sécurisé</span>
                      </Label>
                      <div className="w-8 h-5 bg-muted rounded flex items-center justify-center text-xs">🍎</div>
                    </div>
                  </RadioGroup>

                  {paymentMethod === "card" && (
                    <div className="mt-6 pt-6 border-t border-border space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Numéro de carte</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Date d'expiration</Label>
                          <Input
                            id="expiry"
                            placeholder="MM/AA"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input
                            id="cvv"
                            placeholder="123"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right: Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card rounded-2xl p-6 border border-border sticky top-24">
                  <h2 className="text-xl font-bold text-foreground mb-6">Récapitulatif</h2>

                  {/* Items */}
                  <div className="space-y-4 mb-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-3">
                        <div className="w-14 h-14 bg-muted rounded-lg flex items-center justify-center shrink-0">
                          <span className="text-2xl">{item.image}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground line-clamp-1">{item.name}</p>
                          <p className="text-sm text-muted-foreground">Qté: {item.quantity}</p>
                        </div>
                        <span className="font-medium text-foreground">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border pt-4 space-y-3 mb-6">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Sous-total</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Livraison</span>
                      <span>{shipping === 0 ? "Gratuite" : `$${shipping.toFixed(2)}`}</span>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4 mb-6">
                    <div className="flex justify-between text-lg font-bold text-foreground">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <Button type="submit" variant="coral" size="xl" className="w-full">
                    Confirmer la commande
                  </Button>

                  <div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground">
                    <Shield className="h-4 w-4" />
                    <span>Paiement 100% sécurisé</span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
