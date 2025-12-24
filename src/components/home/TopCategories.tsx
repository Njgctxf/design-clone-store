import { Link } from "react-router-dom";

const categories = [
  { name: "Montres Connectées", icon: "⌚", color: "bg-coral-light" },
  { name: "Écouteurs Bluetooth", icon: "🎧", color: "bg-mint" },
  { name: "Smartwatch Fitness", icon: "💪", color: "bg-sage" },
  { name: "Sacs à dos Tech", icon: "🎒", color: "bg-muted" },
  { name: "Montres", icon: "⏱️", color: "bg-coral-light" },
];

const TopCategories = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">
            Top Categories <span className="text-muted-foreground font-normal">Of the Month</span>
          </h2>
          <Link to="/products" className="text-coral hover:text-coral/80 text-sm font-medium transition-colors">
            Voir tout →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              to={`/products?category=${category.name.toLowerCase()}`}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`${category.color} rounded-2xl p-6 aspect-square flex flex-col items-center justify-center gap-3 group-hover:scale-105 transition-transform duration-300`}>
                <span className="text-4xl group-hover:scale-110 transition-transform">{category.icon}</span>
              </div>
              <p className="text-sm font-medium text-foreground text-center mt-3">{category.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
