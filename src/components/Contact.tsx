import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Greška",
        description: "Molimo unesite sva obavezna polja.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData);
    
    toast({
      title: "Uspješno poslano!",
      description: "Vaša poruka je uspješno poslana. Kontaktirat ćemo vas uskoro.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      content: "+385 99 123 4567",
      subtitle: "Ante - Voditelj projekata",
      link: "tel:+38599123456"
    },
    {
      icon: Phone,
      title: "Telefon",
      content: "+385 99 765 4321",
      subtitle: "Marko - Tehnički direktor",
      link: "tel:+385997654321"
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "info@gradnja-am.hr",
      subtitle: "Pošaljite nam poruku",
      link: "mailto:info@gradnja-am.hr"
    },
    {
      icon: MapPin,
      title: "Adresa",
      content: "Vukovarska 123",
      subtitle: "10000 Zagreb, Hrvatska",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              <span className="text-primary">Kontakt</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Spremni smo odgovoriti na sva vaša pitanja i dati procjenu za vaš projekt. 
              Kontaktirajte nas danas!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="construction-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Pošaljite nam poruku
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Ime i prezime *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-secondary/50 border-border"
                      placeholder="Vaše ime i prezime"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Telefon
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-secondary/50 border-border"
                      placeholder="Vaš broj telefona"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-secondary/50 border-border"
                    placeholder="vaš@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Poruka *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}  
                    className="bg-secondary/50 border-border min-h-[120px]"
                    placeholder="Opište nam vaš projekt ili postavite pitanje..."
                    required
                  />
                </div>

                <Button type="submit" className="btn-construction w-full">
                  Pošalji poruku
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  * Obavezna polja
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Kontakt informacije
              </h3>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="construction-card hover-lift">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground mb-1">
                          {info.title}
                        </h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-primary hover:text-primary/80 transition-colors font-medium"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">
                            {info.content}
                          </p>
                        )}
                        <p className="text-sm text-muted-foreground">
                          {info.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Working Hours */}
                <div className="construction-card">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Radno vrijeme
                      </h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Ponedjeljak - Petak:</span>
                          <span className="text-foreground">07:00 - 17:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Subota:</span>
                          <span className="text-foreground">08:00 - 14:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Nedjelja:</span>
                          <span className="text-foreground">Zatvoreno</span>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Za hitne slučajeve dostupni smo 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;