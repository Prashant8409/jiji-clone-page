import { 
  PlusCircle, 
  Flame, 
  Car, 
  Home, 
  Laptop, 
  Sofa, 
  Shirt, 
  Smartphone, 
  Sparkles,
  Baby,
  Briefcase,
  Wrench
} from "lucide-react";

const CategoryGrid = () => {
  const categories = [
    { name: "Post ad", icon: PlusCircle, highlight: true },
    { name: "Trending", icon: Flame, hot: true },
    { name: "Vehicles", icon: Car },
    { name: "Property", icon: Home },
    { name: "Electronics", icon: Laptop },
    { name: "Furniture", icon: Sofa },
    { name: "Fashion", icon: Shirt },
    { name: "Phones", icon: Smartphone },
    { name: "Beauty", icon: Sparkles },
    { name: "Kids", icon: Baby },
    { name: "Services", icon: Briefcase },
    { name: "Repair", icon: Wrench },
  ];

  return (
    <section className="container px-4 py-2">
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
        {categories.map((category, index) => (
          <button
            key={category.name}
            className="flex flex-col items-center gap-2 group animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div 
              className={`
                w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-200
                ${category.highlight 
                  ? 'bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105' 
                  : category.hot 
                    ? 'bg-accent/10 text-accent hover:bg-accent/20' 
                    : 'bg-card shadow-card hover:shadow-md hover:scale-105'
                }
              `}
            >
              <category.icon 
                className={`w-6 h-6 ${
                  category.highlight 
                    ? 'text-primary-foreground' 
                    : category.hot 
                      ? 'text-accent' 
                      : 'text-muted-foreground group-hover:text-primary'
                } transition-colors`} 
              />
            </div>
            <span className={`text-xs font-medium text-center leading-tight ${
              category.highlight ? 'text-primary' : 'text-foreground'
            }`}>
              {category.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
