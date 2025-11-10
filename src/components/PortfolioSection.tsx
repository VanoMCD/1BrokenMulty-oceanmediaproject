
const PortfolioSection = () => {
  const platforms = [{
    name: "YouTube Channel",
    link: "https://www.youtube.com/@OceanMediaProject",
    description: "Watch our latest underwater adventures!",
    icon: "https://cdn.simpleicons.org/youtube/FF0000"
  }, {
    name: "Vimeo", 
    link: "https://vimeo.com/oceanmediaproject",
    description: "Discover premium ocean cinematography",
    icon: "https://cdn.simpleicons.org/vimeo/1AB7EA"
  }, {
    name: "Shutterstock",
    link: "https://shutterstock.com/ru/g/vmsartstudio/video?rid=371249757",
    description: "License professional footage for your projects",
    icon: "https://cdn.simpleicons.org/shutterstock/EE3124"
  }, {
    name: "Pond5 (Videodive)",
    link: "https://pond5.com/artist/videodive", 
    description: "Explore our Videodive collection",
    icon: "https://cdn.simpleicons.org/pond5/00A3E0"
  }, {
    name: "iStockphoto",
    link: "https://istockphoto.com/ru/portfolio/VIDEODIVE?assettype=film",
    description: "Get stunning stock videos instantly",
    icon: "https://logo.clearbit.com/istockphoto.com"
  }, {
    name: "Pond5 (Videoton)",
    link: "https://pond5.com/artist/videoton", 
    description: "Browse our Videoton portfolio",
    icon: "https://cdn.simpleicons.org/pond5/00A3E0"
  }, {
    name: "Adobe Stock",
    link: "https://stock.adobe.com/contributor/205029892/videodive",
    description: "Download high-quality footage for creatives",
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FF0000'%3E%3Cpath d='M9.002 0L6 12l1.998 12h6L12 12 14.002 0h-5zm9.998 0L17.002 12 19 24h5L22.002 12 24 0h-5.002z'/%3E%3C/svg%3E"
  }, {
    name: "Pond5 (Vmsartstudio619)",
    link: "https://pond5.com/artist/vmsartstudio619", 
    description: "Check out Vmsartstudio619 exclusive content",
    icon: "https://cdn.simpleicons.org/pond5/00A3E0"
  }, {
    name: "Pixtastock",
    link: "https://creator-en.pixtastock.com/@videoton/footage",
    description: "Access our Japanese market collection",
    icon: "https://cdn.simpleicons.org/pixiv/0096FA"
  }];

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
                  className="bg-card border border-accent/20 rounded-lg p-4 text-center hover:border-accent/40 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <img src={platform.icon} alt={platform.name} className="w-6 h-6" />
                    <h4 className="font-semibold text-primary group-hover:text-accent transition-colors">{platform.name}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{platform.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default PortfolioSection;
