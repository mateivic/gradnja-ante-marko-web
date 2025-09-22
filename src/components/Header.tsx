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
    { label: "Početna", href: "home" },
    { label: "O nama", href: "o-nama" },
    { label: "Usluge", href: "usluge" },
    { label: "Projekti", href: "projekti" },
    { label: "Kontakt", href: "kontakt" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-md shadow-lg safe-area-inset-top`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer"
            onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: 'smooth' })}>
            <img
              src="/src/assets/logo.png"
              alt="Gradnja Ante i Marko logo"
              className="h-12 w-auto"
            />
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => document.getElementById(item.href)?.scrollIntoView({ behavior: 'smooth' })}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex flex-col items-start space-y-1 text-sm">
            <a
              href="mailto:anbrajko@fesb.hr"
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={16} />
              <span>anbrajko@fesb.hr</span>
            </a>
            <a
              href="mailto:marko.mandusic8@gmail.com"
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={16} />
              <span>marko.mandusic8@gmail.com</span>
            </a>
          </div>

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
                <button
                  key={item.label}
                  onClick={() => {
                    document.getElementById(item.href)?.scrollIntoView({ behavior: 'smooth' });
                    setIsMenuOpen(false);
                  }}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-left"
                >
                  {item.label}
                </button>
              ))}
              <div className="border-t border-border pt-4">
                <a
                  href="mailto:anbrajko@fesb.hr"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={16} />
                  <span>anbrajko@fesb.hr</span>
                </a>
                <a
                  href="mailto:marko.mandusic8@gmail.com"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={16} />
                  <span>marko.mandusic8@gmail.com</span>
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