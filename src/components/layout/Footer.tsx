import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">AMERA</h3>
            <p className="text-sm text-muted-foreground">
              Votre destination pour les smartphones haut de gamme et accessoires tech.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Boutique</h4>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-sm text-muted-foreground hover:text-coral transition-colors">Tous les produits</Link></li>
              <li><Link to="/products?category=smartphones" className="text-sm text-muted-foreground hover:text-coral transition-colors">Smartphones</Link></li>
              <li><Link to="/products?category=accessories" className="text-sm text-muted-foreground hover:text-coral transition-colors">Accessoires</Link></li>
              <li><Link to="/products?category=deals" className="text-sm text-muted-foreground hover:text-coral transition-colors">Offres Flash</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-sm text-muted-foreground hover:text-coral transition-colors">Centre d'aide</Link></li>
              <li><Link to="/shipping" className="text-sm text-muted-foreground hover:text-coral transition-colors">Livraison</Link></li>
              <li><Link to="/returns" className="text-sm text-muted-foreground hover:text-coral transition-colors">Retours</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-coral transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Légal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-sm text-muted-foreground hover:text-coral transition-colors">Confidentialité</Link></li>
              <li><Link to="/terms" className="text-sm text-muted-foreground hover:text-coral transition-colors">CGV</Link></li>
              <li><Link to="/cookies" className="text-sm text-muted-foreground hover:text-coral transition-colors">Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 AMERA. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Paiement sécurisé</span>
            <div className="flex items-center gap-2">
              <div className="h-6 w-10 bg-muted rounded flex items-center justify-center text-xs font-medium">VISA</div>
              <div className="h-6 w-10 bg-muted rounded flex items-center justify-center text-xs font-medium">MC</div>
              <div className="h-6 w-10 bg-muted rounded flex items-center justify-center text-xs font-medium">PP</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
