import { useState } from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Poslovni centar Zagreb",
      category: "Građevinski radovi",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92157aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Kompletan građevinski projekt uključujući fasadne radove i unutarnje instalacije"
    },
    {
      id: 2,
      title: "Industrijski kompleks Rijeka",
      category: "Elektrotehničke instalacije",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Kompletne elektrotehničke instalacije za proizvodni pogon"
    },
    {
      id: 3,
      title: "Obiteljska kuća Split",
      category: "Privatni projekt",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Izgradnja moderne obiteljske kuće s kompletnim instalacijama"
    },
    {
      id: 4,
      title: "Rekonstrukcija ureda Osijek",
      category: "Građevinski radovi",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Potpuna rekonstrukcija poslovnog prostora s modernim dizajnom"
    },
    {
      id: 5,
      title: "Parking garaža Zadar",
      category: "Beton i iskopi",
      image: "https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Betoniranje i iskopi za podzemnu parking garažu"
    },
    {
      id: 6,
      title: "Trgovački centar Dubrovnik",
      category: "Nadzor projekta",
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Tehnički nadzor izgradnje velikog trgovačkog centra"
    }
  ];

  const categories = ["Svi projekti", "Građevinski radovi", "Elektrotehničke instalacije", "Privatni projekt", "Beton i iskopi", "Nadzor projekta"];
  const [activeCategory, setActiveCategory] = useState("Svi projekti");

  const filteredProjects = activeCategory === "Svi projekti" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Naši <span className="text-primary">projekti</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Pogledajte neke od naših uspješno završenih projekata. 
              Svaki projekt predstavlja našu predanost kvaliteti i profesionalnosti.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-foreground hover:bg-primary/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="project-card hover-lift group"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div
                  className="h-64 bg-cover bg-center rounded-xl"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="project-overlay">
                    <div className="project-title">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-white/80 mb-2">{project.category}</p>
                      <p className="text-sm text-white/70">{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Završenih projekata</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Zadovoljnih klijenata</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">6+</div>
              <div className="text-muted-foreground">Godina iskustva</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Podrška</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;