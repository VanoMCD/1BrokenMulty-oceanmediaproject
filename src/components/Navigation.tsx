import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Waves } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Главная" },
    { href: "#about", label: "О нас" },
    { href: "#portfolio", label: "Каталог" },
    { href: "#clients", label: "Для кого" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Waves className="h-8 w-8 text-accent animate-ocean-wave" />
            <span className="text-xl font-bold text-primary">OCEAN MEDIA GROUP</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-accent transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
            <Button variant="default" className="bg-gradient-ocean text-primary-foreground shadow-ocean hover:shadow-depth transition-all duration-300">
              Связаться
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-accent transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="default" className="bg-gradient-ocean text-primary-foreground w-full">
                Связаться
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;