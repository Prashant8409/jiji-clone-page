import { Home, Bookmark, PlusSquare, MessageSquare, User } from "lucide-react";
import { useState } from "react";

const BottomNav = () => {
  const [activeTab, setActiveTab] = useState("home");

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "saved", label: "Saved", icon: Bookmark },
    { id: "sell", label: "Sell", icon: PlusSquare, highlight: true },
    { id: "messages", label: "Messages", icon: MessageSquare },
    { id: "profile", label: "Profile", icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border md:hidden z-50">
      <div className="flex items-center justify-around py-2 px-2 safe-area-inset-bottom">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center gap-0.5 py-1 px-3 rounded-lg transition-all ${
              item.highlight
                ? "text-primary"
                : activeTab === item.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <div className={`relative ${item.highlight ? "" : ""}`}>
              <item.icon 
                className={`w-5 h-5 ${
                  item.highlight 
                    ? "text-primary" 
                    : activeTab === item.id 
                      ? "text-primary" 
                      : ""
                }`} 
              />
              {item.highlight && (
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-accent rounded-full" />
              )}
            </div>
            <span className={`text-[10px] font-medium ${
              activeTab === item.id || item.highlight ? "text-primary" : ""
            }`}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
