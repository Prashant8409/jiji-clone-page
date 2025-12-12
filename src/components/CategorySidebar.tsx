import { 
  Car, 
  Home, 
  Smartphone, 
  Tv, 
  Sofa, 
  Shirt, 
  Sparkles, 
  Briefcase, 
  Wrench,
  Package,
  Gamepad2,
  Baby,
  Wheat,
  PawPrint
} from "lucide-react";

const CategorySidebar = () => {
  const categories = [
    { name: "Vehicles", count: "36,730", icon: Car },
    { name: "Property", count: "27,549", icon: Home },
    { name: "Mobile Phones & Tablets", count: "30,591", icon: Smartphone },
    { name: "Electronics", count: "59,401", icon: Tv },
    { name: "Home, Furniture & Appliances", count: "73,124", icon: Sofa },
    { name: "Fashion", count: "33,211", icon: Shirt },
    { name: "Beauty & Personal Care", count: "7,805", icon: Sparkles },
    { name: "Services", count: "1,476", icon: Briefcase },
    { name: "Repair & Construction", count: "13,838", icon: Wrench },
    { name: "Commercial Equipment", count: "6,691", icon: Package },
    { name: "Leisure & Activities", count: "6,925", icon: Gamepad2 },
    { name: "Babies & Kids", count: "2,921", icon: Baby },
    { name: "Food & Agriculture", count: "1,148", icon: Wheat },
    { name: "Animals & Pets", count: "208", icon: PawPrint },
  ];

  return (
    <aside className="hidden lg:block w-64 bg-card rounded-xl shadow-card p-4 h-fit sticky top-24">
      <h3 className="font-bold text-foreground mb-4">Categories</h3>
      <nav className="space-y-1">
        {categories.map((category) => (
          <button
            key={category.name}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left hover:bg-muted transition-colors group"
          >
            <category.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
                {category.name}
              </p>
              <p className="text-xs text-muted-foreground">{category.count} ads</p>
            </div>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default CategorySidebar;
