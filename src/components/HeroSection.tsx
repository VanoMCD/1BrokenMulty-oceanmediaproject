import { Button } from "@/components/ui/button";
import { Play, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-underwater.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Underwater coral reef scene" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-float">
          OCEAN MEDIA PROJECT
        </h1>
        <h2 className="text-xl md:text-3xl mb-8 text-primary-foreground/90 font-light">
          НОВОЕ ИЗМЕРЕНИЕ ВИДЕО: RELAX И AMBIENT КОНТЕНТ ДЛЯ ВАШЕГО БИЗНЕСА
        </h2>
        <div className="text-lg md:text-xl mb-12 text-primary-foreground/80 max-w-3xl mx-auto space-y-2">
          <p>📌 Профессиональная видеотека с глобальными правами</p>
          <p>📌 Уникальные видео подводного и окружающего мира</p>
          <p>📌 Контент для TV, Digital Signage, рекламы, SPA, отелей и других сфер</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="https://www.youtube.com/@OceanMediaProject"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white shadow-depth hover:shadow-ocean transition-all duration-500 transform hover:scale-105"
            >
              <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              YouTube
            </Button>
          </a>
          <a 
            href="https://rutube.ru/channel/61735052/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-depth hover:shadow-ocean transition-all duration-500 transform hover:scale-105"
            >
              <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.7 7.3c-.4-.4-1-.4-1.4 0L12 13.6 5.7 7.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l7 7c.2.2.4.3.7.3s.5-.1.7-.3l7-7c.4-.4.4-1 0-1.4z"/>
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
              RuTube
            </Button>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <ArrowDown className="h-6 w-6 text-primary-foreground animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;