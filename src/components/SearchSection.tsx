import { Search, MapPin } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const tanzanianLocations = [
  { value: "all", label: "All Tanzania" },
  { value: "dar-es-salaam", label: "Dar es Salaam" },
  { value: "arusha", label: "Arusha" },
  { value: "mwanza", label: "Mwanza" },
  { value: "dodoma", label: "Dodoma" },
  { value: "zanzibar", label: "Zanzibar" },
  { value: "mbeya", label: "Mbeya" },
  { value: "morogoro", label: "Morogoro" },
  { value: "tanga", label: "Tanga" },
  { value: "kilimanjaro", label: "Kilimanjaro" },
  { value: "iringa", label: "Iringa" },
  { value: "kigoma", label: "Kigoma" },
  { value: "mtwara", label: "Mtwara" },
  { value: "tabora", label: "Tabora" },
  { value: "geita", label: "Geita" },
  { value: "shinyanga", label: "Shinyanga" },
  { value: "kagera", label: "Kagera" },
  { value: "pwani", label: "Pwani" },
];

const SearchSection = () => {
  const [location, setLocation] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="bg-primary pb-8 pt-4">
      <div className="container px-4">
        <h2 className="text-primary-foreground text-center text-lg font-semibold mb-4">
          What are you looking for?
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-2">
          {/* Location Dropdown */}
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger className="flex items-center gap-2 bg-card border-0 rounded-lg px-4 py-3 min-w-[160px] h-auto hover:bg-card/90 transition-colors">
              <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border z-50">
              {tanzanianLocations.map((loc) => (
                <SelectItem key={loc.value} value={loc.value}>
                  {loc.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

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
