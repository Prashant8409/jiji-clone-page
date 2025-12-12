import { User } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-primary sticky top-0 z-50">
      <div className="container flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-extrabold text-primary-foreground tracking-tight">
            Jiji
          </h1>
        </div>

        {/* Tagline - Hidden on mobile */}
        <p className="hidden md:block text-primary-foreground/90 text-sm font-medium uppercase tracking-wider">
          Sell faster, Buy smarter
        </p>

        {/* Profile Icon */}
        <button 
          className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
          aria-label="Profile"
        >
          <User className="w-5 h-5 text-primary-foreground" />
        </button>
      </div>
    </header>
  );
};

export default Header;
