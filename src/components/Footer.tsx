import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-construction-darker text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">AM</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Gradnja Ante i Marko</h3>
                  <p className="text-sm text-white/70">Od 2018. godine</p>
                </div>
              </div>
              <p className="text-white/80 mb-4">
                Vaš pouzdani partner za građevinske i elektrotehničke radove. 
                Kvaliteta, pouzdanost i profesionalnost u svakom projektu.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-white/80">Vukovarska 123, 10000 Zagreb</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <a 
                    href="mailto:info@gradnja-am.hr"
                    className="text-white/80 hover:text-primary transition-colors"
                  >
                    info@gradnja-am.hr
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary">Brze veze</h4>
              <ul className="space-y-2">
                {[
                  { label: "Početna", href: "#home" },
                  { label: "O nama", href: "#about" },
                  { label: "Usluge", href: "#services" },
                  { label: "Projekti", href: "#projects" },
                  { label: "Kontakt", href: "#contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-primary transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary">Naše usluge</h4>
              <ul className="space-y-2">
                {[
                  "Građevinski radovi",
                  "Elektrotehničke instalacije",
                  "Nadzor projekata",
                  "Iskopi i zemljani radovi",
                  "Betoniranje",
                  "Rekonstrukcije"
                ].map((service) => (
                  <li key={service}>
                    <span className="text-white/80 text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white/60 text-sm">
                © {currentYear} Gradnja Ante i Marko. Sva prava pridržana.
              </p>
              <div className="flex items-center space-x-6 text-sm">
                <span className="text-white/60">
                  Ante: <a href="tel:+385991234567" className="text-white/80 hover:text-primary">+385 99 123 4567</a>
                </span>
                <span className="text-white/60">
                  Marko: <a href="tel:+385997654321" className="text-white/80 hover:text-primary">+385 99 765 4321</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;