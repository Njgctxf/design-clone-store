import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Users, ShoppingCart, TrendingUp, Heart, DollarSign } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Admin = () => {
  const stats = [
    { title: "Produits", value: "156", icon: Package, change: "+12%" },
    { title: "Utilisateurs", value: "2,847", icon: Users, change: "+8%" },
    { title: "Commandes", value: "423", icon: ShoppingCart, change: "+23%" },
    { title: "Revenus", value: "€45,231", icon: DollarSign, change: "+18%" },
    { title: "Wishlist items", value: "1,892", icon: Heart, change: "+15%" },
    { title: "Taux de conversion", value: "3.2%", icon: TrendingUp, change: "+0.5%" },
  ];

  const recentOrders = [
    { id: "#12847", customer: "Jean Dupont", amount: "€129.99", status: "Livré" },
    { id: "#12846", customer: "Marie Martin", amount: "€89.50", status: "En cours" },
    { id: "#12845", customer: "Pierre Bernard", amount: "€245.00", status: "En préparation" },
    { id: "#12844", customer: "Sophie Leroy", amount: "€67.99", status: "Livré" },
    { id: "#12843", customer: "Lucas Moreau", amount: "€199.99", status: "En cours" },
  ];

  const topProducts = [
    { name: "iPhone 15 Pro Max", sales: 89, revenue: "€98,711" },
    { name: "Samsung Galaxy S24", sales: 67, revenue: "€53,633" },
    { name: "AirPods Pro 2", sales: 124, revenue: "€30,876" },
    { name: "Apple Watch Series 9", sales: 45, revenue: "€20,205" },
    { name: "iPad Air M2", sales: 34, revenue: "€23,766" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Dashboard Admin</h1>
          <p className="text-muted-foreground mt-1">Vue d'ensemble de votre boutique AMERA</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.title} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold text-foreground mt-1">{stat.value}</p>
                    <p className="text-sm text-green-500 mt-1">{stat.change} ce mois</p>
                  </div>
                  <div className="h-12 w-12 rounded-full bg-coral/10 flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-coral" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Orders */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Commandes récentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                    <div>
                      <p className="font-medium text-foreground">{order.id}</p>
                      <p className="text-sm text-muted-foreground">{order.customer}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-foreground">{order.amount}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        order.status === "Livré" 
                          ? "bg-green-500/10 text-green-500" 
                          : order.status === "En cours"
                          ? "bg-yellow-500/10 text-yellow-500"
                          : "bg-blue-500/10 text-blue-500"
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Products */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Produits populaires</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={product.name} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                    <div className="flex items-center gap-3">
                      <span className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-sm font-medium text-foreground">
                        {index + 1}
                      </span>
                      <div>
                        <p className="font-medium text-foreground">{product.name}</p>
                        <p className="text-sm text-muted-foreground">{product.sales} ventes</p>
                      </div>
                    </div>
                    <p className="font-medium text-coral">{product.revenue}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
