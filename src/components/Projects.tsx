import { useState } from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Uređenje stepenica Skradin",
      category: "Građevinski radovi",
      image: "skale-skradin.jpg",
      description: "Radovi na kulturnom dobru - uređenje stepenica u ulici Mate Klarića"
    },
    {
      id: 2,
      title: "Dječje igralište Dubravice",
      category: "Građevinski radovi",
      image: "park-graovo.jpg",
      description: "Kompletni građevinski radovi na izgradnji dječjeg igrališta u Dubravicama"
    },
    {
      id: 3,
      title: "Javna rasvjeta Dubravice",
      category: "Elektrotehničke instalacije",
      image: "rasvjeta-graovo.jpg",
      description: "Izgradnja javne rasvjete uz županijsku cestu u Dubravicama"
    },
    {
      id: 4,
      title: "Rasvjeta Mala Jaruga",
      category: "Elektrotehničke instalacije",
      image: "rasvjeta-skradin.jpg",
      description: "Izgradnja rasvjete u komunalnoj luci Mala Jaruga u Skradinu"
    },
    {
      id: 5,
      title: "Rasvjeta riva Skradin",
      category: "Elektrotehničke instalacije",
      image: "skradin-gat-2.jpg",
      description: "Izgradnja rasvjete na gradskoj rivi u Skradinu"
    },
    {
      id: 6,
      title: "Rasvjeta na stadionu NK Sošk",
      category: "Elektrotehničke instalacije",
      image: "stadion-sosk.jpg",
      description: "Građevinski i elektroinstalaterski radovi ugradnje reflektora na stadionu NK Sošk"
    },
    {
      id: 7,
      title: "Uređenje trafostanice",
      category: "Elektrotehničke instalacije",
      image: "trafostanica.jpg",
      description: "Elektromontažni radovi na trafostanici i uređenje okoliša trafostanice"
    },
    {
      id: 8,
      title: "Gabionski zid",
      category: "Građevinski radovi",
      image: "zid.jpg",
      description: "Izrada potpornog gabionskog zida i sanacija prometnice"
    }
  ];

  const categories = ["Svi projekti", "Građevinski radovi", "Elektrotehničke instalacije"];
  const [activeCategory, setActiveCategory] = useState("Svi projekti");

  const filteredProjects = activeCategory === "Svi projekti"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projekti" className="py-20 bg-secondary/20">
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
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
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
                  style={{ backgroundImage: `url(/assets/${project.image})` }}
                >
                  <div className="project-overlay">
                    <div className="project-title">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-white/70">{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 text-center max-md:[&>*:last-child]:col-span-2 max-md:[&>*:last-child]:mx-auto max-md:[&>*:last-child]:max-w-fit">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Završenih projekata</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">30+</div>
              <div className="text-muted-foreground">Zadovoljnih klijenata</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">7+</div>
              <div className="text-muted-foreground">Godina iskustva</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;