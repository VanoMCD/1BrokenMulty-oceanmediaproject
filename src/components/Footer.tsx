import { Waves } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gradient-deep text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-8">
            {/* Logo and Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Waves className="h-8 w-8 text-accent animate-ocean-wave" />
                <span className="text-xl font-bold">OCEAN MEDIA PROJECT</span>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Профессиональный видеоконтент высочайшего качества для вашего бизнеса. 
                Эксклюзивные кадры подводного мира и природы.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Свяжитесь с нами</h4>
              <div className="space-y-2 text-sm text-primary-foreground/80">
                <div>📧 Email: <a href="mailto:o666699999@gmail.com" className="hover:text-accent transition-colors">o666699999@gmail.com</a></div>
                <div>📱 WhatsApp: <a href="https://wa.me/381666699999" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">+381 66 66 999 99</a></div>
                <div>📱 Telegram: <a href="https://t.me/+381666699999" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">+381 66 66 999 99</a></div>
                <div>🌍 Сайт: <a href="https://www.oceanmediaproject.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">www.oceanmediaproject.com</a></div>
                <div>💼 LinkedIn: <a href="https://linkedin.com/in/oceanmediaproject" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Ocean Media Project</a></div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
              <div>
                © {currentYear} Ocean Media Project. Все права защищены.
              </div>
              <div className="flex flex-wrap gap-4 justify-center md:justify-end mt-4 md:mt-0 text-xs">
                <a href="https://www.youtube.com/@OceanMediaProject" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">YouTube</a>
                <a href="https://rutube.ru/channel/61735052/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Rutube</a>
                <a href="https://stock.adobe.com/contributor/205029892/videodive" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Adobe Stock</a>
                <a href="https://istockphoto.com/ru/portfolio/VIDEODIVE?assettype=film" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">iStockphoto</a>
                <a href="https://pond5.com/artist/vmsartstudio619" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Pond5</a>
                <a href="https://shutterstock.com/ru/g/vmsartstudio/video?rid=371249757" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Shutterstock</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;