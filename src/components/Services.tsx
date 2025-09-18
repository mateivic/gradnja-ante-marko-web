import { Building, Zap, Eye, Shovel, Home, Factory } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Građevinski radovi",
      description: "Kompletan spektar građevinskih usluga - od temelja do krova",
      features: ["Betoniranje", "Zidanje", "Fasadni radovi", "Krovni radovi"]
    },
    {
      icon: Zap,
      title: "Elektrotehničke instalacije",
      description: "Profesionalne elektro instalacije za sve vrste objekata",
      features: ["Unutarnje instalacije", "Vanjska rasvjeta", "Industrijske instalacije", "Servis i održavanje"]
    },
    {
      icon: Eye,
      title: "Nadzor projekata",
      description: "Stručni nadzor nad izvođenjem radova",
      features: ["Tehnički nadzor", "Koordinacija izvođača", "Kontrola kvalitete", "Izvještavanje"]
    },
    {
      icon: Shovel,
      title: "Iskopi i zemljani radovi",
      description: "Precizni iskopi i priprema terena",
      features: ["Strojni iskopi", "Ručni iskopi", "Priprema terena", "Odvoz materijala"]
    }
  ];

  const clientTypes = [
    {
      icon: Factory,
      title: "Poslovni subjekti",
      description: "Kompleksni projekti za tvrtke i institucije"
    },
    {
      icon: Home,
      title: "Privatni klijenti",
      description: "Obiteljske kuće i privatne nekretnine"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Naše <span className="text-primary">usluge</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pružamo kompletan spektar građevinskih i elektrotehničkih usluga 
              za sve vrste projekata - od malih popravaka do velikih gradilišta.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <div
                key={index}
                className="construction-card hover-lift group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Client Types */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Radimo za sve vrste klijenata
            </h3>
            <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {clientTypes.map((type, index) => (
                <div
                  key={index}
                  className="construction-card hover-lift text-center group"
                >
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                    <type.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    {type.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {type.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Trebate ponudu za svoj projekt?
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-construction"
            >
              Kontaktirajte nas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;