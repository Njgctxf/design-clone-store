import { Search, ShoppingCart, User, Heart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useWishlistContext } from "@/contexts/WishlistContext";

const Header = () => {
  const [cartCount] = useState(3);
  const { wishlistCount } = useWishlistContext();
  
  const navLinks = [
    { name: "Smartphones", href: "/products?category=smartphones" },
    { name: "Entreprises", href: "/products?category=enterprise" },
    { name: "Curations", href: "/products?category=curations" },
    { name: "Help", href: "/help" },
    { name: "Corporates", href: "/corporates" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3">
        {/* Top Row */}
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-foreground tracking-tight">AMERA</span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for products..."
                className="pl-11 pr-24 h-11 rounded-full bg-muted border-none focus-visible:ring-coral"
              />
              <Button 
                variant="coral" 
                size="sm" 
                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full h-9"
              >
                Chercher
              </Button>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <Link to="/wishlist">
              <Button variant="ghost" size="icon" className="hidden md:flex relative">
                <Heart className="h-5 w-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-coral text-primary-foreground text-xs flex items-center justify-center font-medium">
                    {wishlistCount}
                  </span>
                )}
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-coral text-primary-foreground text-xs flex items-center justify-center font-medium">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center justify-between mt-3 pt-3 border-t border-border/50">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link to="/products" className="text-sm text-coral font-medium hover:text-coral/80 transition-colors">
            2k Stores →
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
