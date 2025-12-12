import { Search, ChevronDown, MapPin } from "lucide-react";
import { useState } from "react";

const SearchSection = () => {
  const [location, setLocation] = useState("All Tanzania");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="bg-primary pb-8 pt-4">
      <div className="container px-4">
        <h2 className="text-primary-foreground text-center text-lg font-semibold mb-4">
          What are you looking for?
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-2">
          {/* Location Dropdown */}
          <button className="flex items-center gap-2 bg-card rounded-lg px-4 py-3 min-w-[140px] hover:bg-card/90 transition-colors">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <span className="text-foreground text-sm font-medium truncate flex-1 text-left">
              {location}
            </span>
            <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          </button>

          {/* Search Input */}
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="I am looking for..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-card rounded-lg px-4 py-3 pr-12 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-primary hover:text-primary/80 transition-colors">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
