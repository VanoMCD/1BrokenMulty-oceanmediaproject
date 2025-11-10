
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Eye, Video, Image, Film } from "lucide-react";

const PortfolioSection = () => {
  const platforms = [
    {
      name: "YouTube-канал",
      subtitle: "Смотрите нас на YouTube",
      link: "https://www.youtube.com/@OceanMediaProject",
      bgColor: "bg-red-50 dark:bg-red-950/20",
      iconColor: "text-red-600",
      iconBg: "bg-white",
      icon: <Play className="h-6 w-6" fill="currentColor" />
    },
    {
      name: "Vimeo",
      subtitle: "Наша коллекция на Vimeo",
      link: "https://vimeo.com/oceanmediaproject",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      iconColor: "text-blue-600",
      iconBg: "bg-white",
      icon: <Video className="h-6 w-6" />
    },
    {
      name: "Pixtastock",
      subtitle: "Японская платформа для стокового контента",
      link: "https://creator-en.pixtastock.com/@videoton/footage",
      bgColor: "bg-pink-50 dark:bg-pink-950/20",
      iconColor: "text-pink-600",
      iconBg: "bg-white",
      icon: <Image className="h-6 w-6" />
    },
    {
      name: "iStockphoto",
      subtitle: "Профессиональные видеоматериалы",
      link: "https://istockphoto.com/ru/portfolio/VIDEODIVE?assettype=film",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/20",
      iconColor: "text-emerald-600",
      iconBg: "bg-white",
      icon: <Film className="h-6 w-6" />
    },
    {
      name: "Adobe Stock - Ocean Media",
      subtitle: "Ocean Media Project контент",
      link: "https://stock.adobe.com/contributor/205029892/videodive",
      bgColor: "bg-rose-50 dark:bg-rose-950/20",
      iconColor: "text-rose-700",
      iconBg: "bg-white",
      icon: <Film className="h-6 w-6" />
    },
    {
      name: "Pond5 - Vmsartstudio",
      subtitle: "Vmsartstudio619 контент",
      link: "https://pond5.com/artist/vmsartstudio619",
      bgColor: "bg-cyan-50 dark:bg-cyan-950/20",
      iconColor: "text-cyan-600",
      iconBg: "bg-white",
      icon: <Video className="h-6 w-6" />
    },
    {
      name: "Adobe Stock - Videodive",
      subtitle: "Качественный контент для креативных проектов",
      link: "https://stock.adobe.com/contributor/205029892/videodive",
      bgColor: "bg-rose-50 dark:bg-rose-950/20",
      iconColor: "text-rose-700",
      iconBg: "bg-white",
      icon: <Film className="h-6 w-6" />
    },
    {
      name: "Shutterstock",
      subtitle: "Премиум-контент для профессионалов",
      link: "https://shutterstock.com/ru/g/vmsartstudio/video?rid=371249757",
      bgColor: "bg-red-50 dark:bg-red-950/20",
      iconColor: "text-red-600",
      iconBg: "bg-white",
      icon: <Eye className="h-6 w-6" />
    },
    {
      name: "Pond5 - Videodive",
      subtitle: "Videodive контент",
      link: "https://pond5.com/artist/videodive",
      bgColor: "bg-cyan-50 dark:bg-cyan-950/20",
      iconColor: "text-cyan-600",
      iconBg: "bg-white",
      icon: <Video className="h-6 w-6" />
    }
  ];

  return <section id="platforms" className="pt-1 pb-5 bg-gradient-portfolio">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">WHERE CAN YOU VIEW OUR CONTENT?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Subscribe and enjoy quality content!
            </p>
            
            {/* Platforms Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {platforms.map((platform, index) => (
                <a 
                  key={index} 
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${platform.bgColor} border border-primary/10 rounded-xl p-5 hover:shadow-lg transition-all duration-300 group cursor-pointer`}
                >
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className={`${platform.iconBg} ${platform.iconColor} p-3 rounded-full`}>
                      {platform.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-base mb-1">{platform.name}</h4>
                      <p className="text-sm text-muted-foreground">{platform.subtitle}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default PortfolioSection;
