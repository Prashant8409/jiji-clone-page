import Header from "@/components/Header";
import SearchSection from "@/components/SearchSection";
import InfoCards from "@/components/InfoCards";
import CategoryGrid from "@/components/CategoryGrid";
import TrendingSection from "@/components/TrendingSection";
import CategorySidebar from "@/components/CategorySidebar";
import BottomNav from "@/components/BottomNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />
      <SearchSection />
      
      <main className="lg:container lg:px-4 lg:py-6">
        <div className="lg:flex lg:gap-6">
          {/* Sidebar - Desktop only */}
          <CategorySidebar />
          
          {/* Main Content */}
          <div className="flex-1">
            <InfoCards />
            <CategoryGrid />
            <TrendingSection />
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Index;
