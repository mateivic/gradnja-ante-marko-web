import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Mail, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Početna", href: "#home" },
    { label: "O nama", href: "#about" },
    { label: "Usluge", href: "#services" },
    { label: "Projekti", href: "#projects" },
    { label: "Kontakt", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">AM</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">
                Gradnja Ante i Marko
              </h1>
              <p className="text-sm text-muted-foreground hidden sm:block">
                Od 2018. godine
              </p>
            </div>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-6 text-sm">
            <a
              href="mailto:info@gradnja-am.hr"
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={16} />
              <span>info@gradnja-am.hr</span>
            </a>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-card/95 backdrop-blur-md border-t border-border mt-4 rounded-lg">
            <nav className="flex flex-col space-y-4 p-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="border-t border-border pt-4">
                <a
                  href="mailto:info@gradnja-am.hr"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={16} />
                  <span>info@gradnja-am.hr</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;