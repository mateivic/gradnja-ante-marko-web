import { Users, Award, Clock, Shield } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Users,
      title: "Iskusni tim",
      description: "Ante i Marko, dugogodišnji prijatelji s bogatim iskustvom u građevinarstvu"
    },
    {
      icon: Award,
      title: "Kvaliteta rada",
      description: "Koristimo najkvalitetnije materijale i najnovije tehnologije u svim projektima"
    },
    {
      icon: Clock,
      title: "Na vrijeme",
      description: "Poštujemo dogovorene rokove i završavamo projekte prema planu"
    },
    {
      icon: Shield,
      title: "Pouzdanost",
      description: "Svi radovi su osigurani i imaju garanciju prema zakonskim propisima"
    }
  ];

  return (
    <section id="o-nama" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              O <span className="text-primary">nama</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Osnovali smo tvrtku 2018. godine s ciljem pružanja vrhunskih građevinskih
              i elektrotehničkih usluga.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Vaš pouzdani partner u građevinarstvu
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Ante i Marko su dugogodišnji prijatelji koji su spojili svoju strast
                  prema građevinarstvu i stručnost u jednu uspješnu tvrtku. Naša misija
                  je pružiti klijentima usluge najviše kvalitete uz poštovanje rokova i budžeta.
                </p>
                <p>
                  Specijalizirani smo za izvođenje građevinskih radova, elektrotehničke
                  instalacije i stručni nadzor projekata. Bez obzira na veličinu projekta,
                  pristupamo svakom poslu s istom pažnjom i profesionalnošću.
                </p>
                <p>
                  Naši klijenti uključuju poslovne subjekte koji traže pouzdane partnere
                  za svoje projekte, kao i privatne osobe koje žele kvalitetno obaviti
                  radove na svojim projektima.
                </p>
              </div>
            </div>

            {/* Image placeholder - could be replaced with actual photo */}
            <div className="relative">
              <div
                className="h-80 bg-cover bg-center bg-no-repeat rounded-xl"
                style={{
                  backgroundImage: `url(/assets/ante-marko.jpg)`,
                }}
              />
              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="construction-card hover-lift text-center group"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;