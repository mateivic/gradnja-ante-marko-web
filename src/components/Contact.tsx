import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Loader2 } from "lucide-react";
import { WEBHOOK_CONFIG } from '@/config/webhook';

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
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

    setIsLoading(true);

    try {
      // Prepare data to send
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Nije naveden',
        message: formData.message,
        sendTo: "mateivic3007@gmail.com",
        timestamp: new Date().toISOString(),
        source: 'Website Contact Form'
      };

      // Send POST request to webhook
      const response = await fetch(WEBHOOK_CONFIG.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': WEBHOOK_CONFIG.authCredential
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        toast({
          title: "Uspješno poslano!",
          description: "Vaša poruka je uspješno poslana. Kontaktirat ćemo vas uskoro.",
          variant: "success",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

    } catch (error) {
      console.error('Error sending to webhook:', error);
      toast({
        title: "Greška",
        description: "Dogodila se greška prilikom slanja poruke. Molimo pokušajte ponovno.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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
      content: ["+385 99 4321 645", "+385 98 203 758"],
      subtitle: ["Ante Brajković", "Marko Mandušić"],
      link: ["tel:+385994321645", "tel:+38598203758"]
    },
    {
      icon: Mail,
      title: "E-mail",
      content: ["anbrajko@fesb.hr", "marko.mandusic8@gmail.com"],
      link: ["mailto:anbrajko@fesb.hr", "mailto:marko.mandusic8@gmail.com"]
    },
    {
      icon: MapPin,
      title: "Adresa",
      content: "Grahovo Donje 21",
      subtitle: "22222 Skradin, Hrvatska",
      link: null
    }
  ];

  return (
    <section id="kontakt" className="py-20 bg-background">
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

                <Button type="submit" className="btn-construction w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Šalje se...
                    </>
                  ) : (
                    "Pošalji poruku"
                  )}
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
                        {info.link && info.link.length > 0 ? (
                          info.link.map((link, index) => (
                            <div key={index}>
                              <a
                                href={link}
                                className="text-primary hover:text-primary/80 transition-colors font-medium"
                              >
                                {info.content[index]}
                              </a>
                              <p className="text-sm text-muted-foreground">
                                {info.subtitle && info.subtitle.length > 0 ? info.subtitle[index] : info.subtitle}
                              </p>
                            </div>

                          ))
                        ) : (
                          <div>
                            <p className="text-foreground font-medium">
                              {info.content}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {info.subtitle}
                            </p>
                          </div>
                        )}

                      </div>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Contact;