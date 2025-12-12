import { MapPin, Heart, Grid3X3, List } from "lucide-react";
import { useState } from "react";

interface ListingItem {
  id: number;
  title: string;
  price: string;
  location: string;
  image: string;
  tags: string[];
  yearsOnJiji?: string;
}

const TrendingSection = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const listings: ListingItem[] = [
    {
      id: 1,
      title: "BMW X6 Sports Activity Coupe 2008 Black",
      price: "TSh 32,000,000",
      location: "Dar es Salaam, Kinondoni",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop",
      tags: ["Local Used", "Automatic"],
      yearsOnJiji: "5+ YEARS ON JIJI",
    },
    {
      id: 2,
      title: "Toyota Vanguard 2008 Black",
      price: "TSh 28,500,000",
      location: "Dar es Salaam, Kinondoni",
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=400&h=300&fit=crop",
      tags: ["Local Used", "Automatic"],
    },
    {
      id: 3,
      title: "BMW 1 Series 2013 Blue",
      price: "TSh 14,800,000",
      location: "Dar es Salaam, Kinondoni",
      image: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=400&h=300&fit=crop",
      tags: ["Local Used", "Automatic"],
      yearsOnJiji: "3+ YEARS ON JIJI",
    },
    {
      id: 4,
      title: "Toyota Corolla Fielder 2009 Black",
      price: "TSh 12,500,000",
      location: "Dar es Salaam, Kinondoni",
      image: "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?w=400&h=300&fit=crop",
      tags: ["Local Used", "Automatic"],
    },
    {
      id: 5,
      title: "iPhone 14 Pro Max 256GB",
      price: "TSh 2,800,000",
      location: "Dar es Salaam, Ilala",
      image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=400&h=300&fit=crop",
      tags: ["Brand New"],
    },
    {
      id: 6,
      title: "Samsung Galaxy S23 Ultra",
      price: "TSh 2,200,000",
      location: "Dar es Salaam, Temeke",
      image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop",
      tags: ["Brand New"],
    },
  ];

  return (
    <section className="container px-4 py-4">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-foreground">Trending ads</h2>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === "grid" 
                ? "bg-primary/10 text-primary" 
                : "text-muted-foreground hover:bg-muted"
            }`}
          >
            <Grid3X3 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === "list" 
                ? "bg-primary/10 text-primary" 
                : "text-muted-foreground hover:bg-muted"
            }`}
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Listings Grid */}
      <div className={`grid gap-4 ${
        viewMode === "grid" 
          ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" 
          : "grid-cols-1"
      }`}>
        {listings.map((listing, index) => (
          <article
            key={listing.id}
            className={`bg-card rounded-xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 group animate-slide-up ${
              viewMode === "list" ? "flex" : ""
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Image */}
            <div className={`relative overflow-hidden ${
              viewMode === "list" ? "w-32 h-28 flex-shrink-0" : "aspect-[4/3]"
            }`}>
              <img
                src={listing.image}
                alt={listing.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {listing.yearsOnJiji && (
                <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-[10px] font-semibold px-2 py-0.5 rounded-full">
                  {listing.yearsOnJiji}
                </span>
              )}
              <button className="absolute top-2 right-2 w-8 h-8 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-card transition-colors opacity-0 group-hover:opacity-100">
                <Heart className="w-4 h-4 text-muted-foreground hover:text-destructive" />
              </button>
            </div>

            {/* Content */}
            <div className={`p-3 ${viewMode === "list" ? "flex-1 flex flex-col justify-center" : ""}`}>
              <p className="text-primary font-bold text-sm mb-1">
                {listing.price}
              </p>
              <h3 className="text-foreground text-xs font-medium line-clamp-2 mb-2">
                {listing.title}
              </h3>
              
              <div className="flex items-center gap-1 text-muted-foreground mb-2">
                <MapPin className="w-3 h-3" />
                <span className="text-[10px] truncate">{listing.location}</span>
              </div>

              <div className="flex flex-wrap gap-1">
                {listing.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] bg-muted text-muted-foreground px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;
