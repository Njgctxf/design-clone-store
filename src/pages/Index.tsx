import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import CategoryPills from "@/components/home/CategoryPills";
import PromoBanners from "@/components/home/PromoBanners";
import TopCategories from "@/components/home/TopCategories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import FlashDeals from "@/components/home/FlashDeals";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CategoryPills />
        <PromoBanners />
        <TopCategories />
        <FeaturedProducts />
        <FlashDeals />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
