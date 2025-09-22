import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-700 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex flex-col items-start space-y-2 mb-4">
                <div>
                  <img
                    src="/src/assets/logo.png"
                    alt="Gradnja Ante i Marko logo"
                    className="h-12"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Gradnja Ante i Marko d.o.o.</h3>
                  <p className="text-sm text-white/70">OIB: 76240959263</p>
                </div>
              </div>
              <p className="text-white/80 mb-4">
                Vaš pouzdani partner za građevinske i elektrotehničke radove od 2018. godine
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-white/80">Grahovo Donje 21, 22 222 Skradin</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <a
                    href="mailto:anbrajko@fesb.hr"
                    className="text-white/80 hover:text-primary transition-colors"
                  >
                    anbrajko@fesb.hr
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <a
                    href="mailto:marko.mandusic8@gmail.com"
                    className="text-white/80 hover:text-primary transition-colors"
                  >
                    marko.mandusic8@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary">Brze veze</h4>
              <ul className="space-y-2">
                {[
                  { label: "Početna", href: "home" },
                  { label: "O nama", href: "o-nama" },
                  { label: "Usluge", href: "usluge" },
                  { label: "Projekti", href: "projekti" },
                  { label: "Kontakt", href: "kontakt" },
                ].map((link) => (
                  <li key={link.label}>
                    <button onClick={() => document.getElementById(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-white/80 hover:text-primary transition-colors duration-300">
                      {link.label}
                    </button>

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
                  "Stručni nadzor projekata",
                  "Najam mehanizacije i prijevoz"
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
              <div className="flex flex-col items-center md:items-start">
                <p className="text-white/60 text-sm">
                  © {currentYear} Gradnja Ante i Marko. Sva prava pridržana.
                </p>
                <p className="text-white/60 text-sm">
                  Izrada: MIsense
                </p>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <span className="text-white/60">
                  Ante: <a href="tel:+385994321645" className="text-white/80 hover:text-primary">+385 99 432 1645</a>
                </span>
                <span className="text-white/60">
                  Marko: <a href="tel:+38598203758" className="text-white/80 hover:text-primary">+385 98 203 758</a>
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