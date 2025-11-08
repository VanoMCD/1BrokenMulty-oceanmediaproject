import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Waves } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#portfolio", label: "Catalog" },
    { href: "#clients", label: "For Whom" },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Waves className="h-8 w-8 text-accent animate-ocean-wave" />
            <span className="text-xl font-bold text-primary">OCEAN MEDIA PROJECT</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="text-foreground hover:text-accent transition-colors duration-300 cursor-pointer"
              >
                {item.label}
              </a>
            ))}
            <a href="mailto:o666699999@gmail.com?subject=WEB%20Request&body=Hello!%0A%0AWe%20are%20interested%20in%20Relax%20content%20for%20display%20on%20...%0AWe%20need%20approximately%20...%20hours%0ATerritories%20of%20use%20-%20...">
              <Button variant="default" className="bg-gradient-ocean text-primary-foreground shadow-ocean hover:shadow-depth transition-all duration-300">
                Contact Us
              </Button>
            </a>
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
                  onClick={(e) => handleClick(e, item.href)}
                  className="text-foreground hover:text-accent transition-colors duration-300 cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
              <a href="mailto:o666699999@gmail.com?subject=WEB%20Request&body=Hello!%0A%0AWe%20are%20interested%20in%20Relax%20content%20for%20display%20on%20...%0AWe%20need%20approximately%20...%20hours%0ATerritories%20of%20use%20-%20...">
                <Button variant="default" className="bg-gradient-ocean text-primary-foreground w-full">
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;