import { Waves, Phone } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gradient-ocean text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-stretch gap-8 mb-8">
            {/* Logo and Description */}
            <div className="flex flex-col space-y-4 max-w-md">
              <div className="flex items-center space-x-2">
                <Waves className="h-6 w-6 text-accent animate-ocean-wave" />
                <span className="text-lg font-bold">OCEAN MEDIA PROJECT</span>
              </div>
              <p className="text-primary-foreground/80 text-sm leading-relaxed flex-1 text-justify">
                Our company offers hundreds of hours of relaxation videos in any required duration, as well as streaming services that transform screens into business tools. We create custom video content adapted to your industry: TV, advertising, online services, medical clinics, wellness, hotels and SPAs. All content comes with full copyrights and licenses. A ready-made solution that saves time and adds new value to your business!
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-6 w-6 text-white animate-ocean-wave" />
                <span className="text-lg font-bold">CONTACT US</span>
              </div>
              <div className="space-y-2 text-sm text-primary-foreground/80 flex-1">
                <div>📧 Email: <a href="mailto:o666699999@gmail.com" className="hover:text-white hover:underline transition-colors">o666699999@gmail.com</a></div>
                <div>📱 WhatsApp: <a href="https://wa.me/381666699999" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors">+381 66 66 999 99</a></div>
                <div>📱 Telegram: <a href="https://t.me/+381666699999" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors">+381 66 66 999 99</a></div>
                <div>🌍 Website: <a href="https://www.oceanmediaproject.com" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors">www.oceanmediaproject.com</a></div>
                <div>💼 LinkedIn: <a href="https://linkedin.com/in/oceanmediaproject" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors">Ocean Media Project</a></div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
              <div>
                © {currentYear} Ocean Media Project. All rights reserved.
              </div>
              <div className="flex flex-wrap gap-4 justify-center md:justify-end mt-4 md:mt-0 text-xs">
                <a href="https://www.youtube.com/@OceanMediaProject" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors">YouTube</a>
                <a href="https://rutube.ru/channel/61735052/" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors">Rutube</a>
                <a href="https://stock.adobe.com/contributor/205029892/videodive" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors">Adobe Stock</a>
                <a href="https://istockphoto.com/ru/portfolio/VIDEODIVE?assettype=film" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors">iStockphoto</a>
                <a href="https://pond5.com/artist/vmsartstudio619" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors">Pond5</a>
                <a href="https://shutterstock.com/ru/g/vmsartstudio/video?rid=371249757" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors">Shutterstock</a>
                <a href="https://creator-en.pixtastock.com/@videoton/footage" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors">Pixtastock</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;