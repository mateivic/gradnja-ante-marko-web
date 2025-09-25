import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  // Array of hero images
  const heroImages = [
    "/assets/hero-background-1.jpg",
    "/assets/hero-background-2.jpg",
    "/assets/hero-background-3.jpg",
    "/assets/hero-background-4.jpg",
    "/assets/hero-background-5.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % heroImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Images with Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-2000 ease-in-out ${index === currentImageIndex
              ? 'opacity-100 scale-100 animate-zoom-in'
              : 'opacity-0 scale-105'
              }`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center sm:text-left">
        <div className="max-w-7xl mx-auto flex flex-col sm:items-start">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="block">GRADNJA</span>
            <span className="text-primary block mt-2">ANTE I MARKO</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-xl  font-light">
            Vaš pouzdani partner za građevinske i elektrotehničke radove od 2018. godine
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="btn-construction group w-60 py-4 text-lg"
              onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Zatražite ponudu
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="btn-construction-outline w-60 py-4 text-lg"
              onClick={() => document.getElementById('projekti')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Naši projekti
            </Button>
          </div>

          {/*
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">6+</div>
              <div className="text-white/80">Godina iskustva</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-white/80">Završenih projekata</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-white/80">Podrška klijentima</div>
            </div>
          </div> */}
        </div>
      </div>
      {/* 
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;