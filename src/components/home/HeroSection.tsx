import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  "Accessoires",
  "Montres connectées",
  "Écouteurs Bluetooth",
  "Coques et étuis",
  "Chargeurs",
  "Accessoires audio",
  "Protection écran",
  "Supports",
];

const HeroSection = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Categories */}
          <div className="hidden lg:block bg-card rounded-2xl p-4 shadow-sm border border-border">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-6 h-6 bg-coral/10 rounded flex items-center justify-center">
                <span className="text-coral text-sm">☰</span>
              </span>
              PARCOUREZ
            </h3>
            <ul className="space-y-1">
              {categories.map((category) => (
                <li key={category}>
                  <Link
                    to={`/products?category=${category.toLowerCase()}`}
                    className="flex items-center justify-between py-2 px-2 rounded-lg text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors group"
                  >
                    <span>{category}</span>
                    <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hero Banner */}
          <div className="lg:col-span-3">
            <div className="relative gradient-hero rounded-3xl overflow-hidden h-[380px] md:h-[400px]">
              {/* Background decorations */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute bottom-0 left-1/4 w-32 h-48 bg-mint/30 rounded-full blur-3xl" />
                <div className="absolute top-10 right-1/4 w-40 h-40 bg-sage/30 rounded-full blur-3xl" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col md:flex-row items-center justify-between p-8 md:p-12">
                <div className="space-y-4 z-10 text-center md:text-left">
                  <span className="text-sm text-muted-foreground font-medium">Top du moment</span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                    HIGH-END<br />
                    <span className="text-coral">PHONE</span>
                  </h1>
                  <p className="text-muted-foreground">Publicité promo 5 jours</p>
                  <Link to="/products?category=smartphones">
                    <Button variant="coral" size="xl" className="mt-4">
                      Découvrir
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>

                {/* Phone Image Placeholder */}
                <div className="relative mt-6 md:mt-0 animate-float">
                  <div className="w-48 h-80 md:w-56 md:h-96 bg-gradient-to-br from-mint to-sage rounded-[3rem] shadow-2xl flex items-center justify-center overflow-hidden border-4 border-card/50">
                    <div className="w-[90%] h-[95%] bg-foreground/90 rounded-[2.5rem] flex items-center justify-center">
                      <div className="text-center text-card p-4">
                        <div className="w-12 h-12 mx-auto mb-2 bg-coral rounded-xl flex items-center justify-center">
                          <span className="text-2xl">📱</span>
                        </div>
                        <span className="text-sm font-medium">iPhone 15 Pro</span>
                      </div>
                    </div>
                  </div>
                  {/* Floating elements */}
                  <div className="absolute -right-8 top-8 w-16 h-16 bg-card rounded-2xl shadow-lg flex items-center justify-center animate-pulse">
                    <span className="text-2xl">🎧</span>
                  </div>
                  <div className="absolute -left-6 bottom-16 w-14 h-14 bg-card rounded-2xl shadow-lg flex items-center justify-center">
                    <span className="text-xl">⌚</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
