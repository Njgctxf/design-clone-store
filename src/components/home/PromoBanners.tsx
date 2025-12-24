import { Link } from "react-router-dom";

const banners = [
  {
    id: 1,
    title: "Livraison gratuite",
    subtitle: "Mobile & accessoires à partir de 50€",
    cta: "Voir plus",
    bg: "bg-coral",
    icon: "📱",
  },
  {
    id: 2,
    title: "Paiement 4x",
    subtitle: "Le remboursement paiement passe",
    cta: "Paid partout",
    bg: "bg-mint",
    icon: "💳",
  },
  {
    id: 3,
    title: "Politique de retour",
    subtitle: "Retour sous 14 jours gratuits",
    cta: "En savoir plus",
    bg: "bg-peach",
    icon: "📦",
  },
];

const PromoBanners = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {banners.map((banner, index) => (
            <Link
              key={banner.id}
              to="/products"
              className={`${banner.bg} rounded-2xl p-6 text-primary-foreground hover:scale-[1.02] transition-transform duration-300 animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{banner.title}</h3>
                  <p className="text-sm opacity-90">{banner.subtitle}</p>
                  <span className="inline-block text-sm font-medium underline underline-offset-2 mt-2">
                    {banner.cta}
                  </span>
                </div>
                <span className="text-4xl opacity-80">{banner.icon}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoBanners;
