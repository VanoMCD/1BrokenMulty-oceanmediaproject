import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Eye } from "lucide-react";
const PortfolioSection = () => {
  const platforms = [{
    name: "📺 YouTube-канал",
    link: "https://www.youtube.com/@OceanMediaProject",
    description: "Качественный контент для просмотра"
  }, {
    name: "📺 Rutube-канал", 
    link: "https://rutube.ru/channel/61735052/",
    description: "Российская видеоплатформа"
  }, {
    name: "🎞️ Shutterstock",
    link: "https://shutterstock.com/ru/g/vmsartstudio/video?rid=371249757",
    description: "Премиум-контент для профессионалов"
  }, {
    name: "🎥 Pond5 (Videodive)",
    link: "https://pond5.com/artist/videodive", 
    description: "Videodive контент"
  }, {
    name: "🎥 Pond5 (Videoton)",
    link: "https://pond5.com/artist/videoton", 
    description: "Videoton контент"
  }, {
    name: "🎥 Pond5 (Vmsartstudio619)",
    link: "https://pond5.com/artist/vmsartstudio619", 
    description: "Vmsartstudio619 контент"
  }, {
    name: "📽 Adobe Stock",
    link: "https://stock.adobe.com/contributor/205029892/videodive",
    description: "Качественный контент для креативных проектов"
  }, {
    name: "📷 iStockphoto",
    link: "https://istockphoto.com/ru/portfolio/VIDEODIVE?assettype=film",
    description: "Профессиональные видеоматериалы"
  }];

  const contentTypes = [{
    emoji: "🧘",
    title: "Relaxation videos",
    description: "визуальные практики для отдыха и восстановления"
  }, {
    emoji: "☯️",
    title: "Zen videos", 
    description: "атмосфера спокойствия и медитации"
  }, {
    emoji: "🌿",
    title: "Wellness visuals",
    description: "для SPA, йоги и оздоровительных центров"
  }, {
    emoji: "🎶",
    title: "Soothing visuals",
    description: "фоновая эстетика для гармоничной атмосферы"
  }, {
    emoji: "🌌",
    title: "Ambient videos",
    description: "универсальный контент для Digital Signage и ТВ"
  }, {
    emoji: "🌍",
    title: "Nature relaxation films",
    description: "пейзажи, природа, элементы"
  }];
  return <section id="portfolio" className="pt-6 pb-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">ГДЕ УЖЕ МОЖНО ПОСМОТРЕТЬ НАШ КОНТЕНТ?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Подписывайтесь и наслаждайтесь качественным контентом!
            </p>
            
            {/* Platforms Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {platforms.map((platform, index) => (
                <a 
                  key={index} 
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card border border-accent/20 rounded-lg p-4 text-center hover:border-accent/40 transition-colors duration-300 group"
                >
                  <div className="font-semibold text-primary group-hover:text-accent transition-colors">{platform.name}</div>
                  <div className="text-sm text-muted-foreground">{platform.description}</div>
                </a>
              ))}
            </div>
          </div>

          {/* Content Types Section */}
          <div>
            <h3 className="text-3xl font-bold text-primary text-center mb-8">Направления нашего контента</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contentTypes.map((content, index) => (
                <a 
                  key={index}
                  href="https://www.youtube.com/@OceanMediaProject"
                  target="_blank"
                  rel="noopener noreferrer"
                   className="bg-card border border-accent/20 rounded-lg p-3 text-center hover:border-accent/40 transition-colors duration-300 group"
                >
                  <div className="text-2xl mb-2">{content.emoji}</div>
                  <h4 className="text-lg font-semibold text-primary mb-1 group-hover:text-accent transition-colors">{content.title}</h4>
                  <p className="text-muted-foreground text-xs">{content.description}</p>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>;
};
export default PortfolioSection;