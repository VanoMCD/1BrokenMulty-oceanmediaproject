import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Waves, Heart, Monitor, Tv, Play, Youtube, Users, Utensils } from "lucide-react";
import clientsImage from "@/assets/clients-showcase.jpg";

const ClientsSection = () => {
  const clientTypes = [
    {
      icon: <Play className="h-8 w-8" />,
      title: "📡 TV Channels & Production Studios",
      description: "content for shows, documentary projects",
      use: "Professional broadcast content"
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "📺 Digital Signage Companies", 
      description: "content for video panels",
      use: "Exclusive display content"
    },
    {
      icon: <Utensils className="h-8 w-8" />,
      title: "🍽️ HoReCa Background Video for Lobbies, Restaurants & Cafes",
      description: "",
      use: "Creating a welcoming atmosphere for guests"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "🧘 Wellness Centers, SPAs, Yoga Studios",
      description: "relaxation content for ambiance",
      use: "Content for treatments and sessions"
    },
    {
      icon: <Waves className="h-8 w-8" />,
      title: "🏥 Medical Clinics, Dental Offices",
      description: "calming videos for patients",
      use: "Reducing patient stress"
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "🏢 Corporate Offices & Coworking Spaces",
      description: "comfortable atmosphere for employees",
      use: "Improving work environment"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "🎭 Museums, Exhibitions, Art Spaces",
      description: "visual accompaniment for exhibitions",
      use: "Complementing exhibitions"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "📹 YouTube Channels & Content Creators",
      description: "videos for blogs, ASMR and meditations",
      use: "Background content for videos"
    },
    {
      icon: <Youtube className="h-8 w-8" />,
      title: "🎬 Streaming Services & VOD Platforms",
      description: "video catalogs for subscribers",
      use: "Content for relaxation channels"
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "📢 Advertising Agencies",
      description: "content acquisition for portfolio and client sales, campaign insertions",
      use: "Content for advertising projects"
    }
  ];

  return (
    <section id="clients" className="pt-1 pb-20 bg-gradient-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">WHO IS THIS FOR?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our content is perfect for various business and entertainment sectors
            </p>
          </div>

          {/* Showcase Image */}
          <div className="mb-16">
            <img 
              src={clientsImage} 
              alt="Luxury environment with nature video displays" 
              className="w-full h-96 object-cover rounded-xl shadow-depth"
            />
          </div>

          {/* Client Types Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mb-16">
            {clientTypes.map((client, index) => (
              <Card key={index} className="text-center shadow-ocean hover:shadow-depth transition-all duration-300 group border-accent/20 hover:border-accent/40">
                <CardContent className="pt-4 pb-4">
                  <div className="text-accent mb-2 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="scale-75">{client.icon}</div>
                  </div>
                  <h4 className="text-sm font-semibold text-primary mb-2 leading-tight">{client.title}</h4>
                  <p className="text-xs text-muted-foreground mb-2 leading-snug">{client.description}</p>
                  <div className="text-xs text-accent font-medium bg-accent/10 rounded-full px-2 py-1">
                    {client.use}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-ocean rounded-xl p-12 text-primary-foreground">
            <h3 className="text-3xl font-bold mb-4">Ready to Collaborate?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto text-center">
              📩 Write to us in any language!<br />
              We'll select and prepare content for your business!
            </p>
            <div className="flex justify-center">
              <a 
                href="mailto:o666699999@gmail.com?subject=WEB%20Request&body=Hello!%0A%0AWe%20are%20interested%20in%20Relax%20content%20for%20display%20on%20...%0AWe%20need%20approximately%20...%20hours%0ATerritories%20of%20use%20-%20..."
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors duration-300 w-full max-w-md"
              >
                Send Request
              </a>
            </div>
          </div>

          {/* Content Types Section */}
          <div className="mt-5">
            <h3 className="text-3xl font-bold text-primary text-center mb-8">Our Content Categories</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a 
                href="https://www.youtube.com/@OceanMediaProject"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-accent/20 rounded-lg p-3 text-center hover:border-accent/40 transition-colors duration-300 group"
              >
                <div className="text-2xl mb-2">🧘</div>
                <h4 className="text-lg font-semibold text-primary mb-1 group-hover:text-accent transition-colors">Relaxation videos</h4>
                <p className="text-muted-foreground text-xs">visual practices for rest and recovery</p>
              </a>
              <a 
                href="https://www.youtube.com/@OceanMediaProject"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-accent/20 rounded-lg p-3 text-center hover:border-accent/40 transition-colors duration-300 group"
              >
                <div className="text-2xl mb-2">☯️</div>
                <h4 className="text-lg font-semibold text-primary mb-1 group-hover:text-accent transition-colors">Zen videos</h4>
                <p className="text-muted-foreground text-xs">atmosphere of calm and meditation</p>
              </a>
              <a 
                href="https://www.youtube.com/@OceanMediaProject"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-accent/20 rounded-lg p-3 text-center hover:border-accent/40 transition-colors duration-300 group"
              >
                <div className="text-2xl mb-2">🌿</div>
                <h4 className="text-lg font-semibold text-primary mb-1 group-hover:text-accent transition-colors">Wellness visuals</h4>
                <p className="text-muted-foreground text-xs">for SPAs, yoga and wellness centers</p>
              </a>
              <a 
                href="https://www.youtube.com/@OceanMediaProject"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-accent/20 rounded-lg p-3 text-center hover:border-accent/40 transition-colors duration-300 group"
              >
                <div className="text-2xl mb-2">🎶</div>
                <h4 className="text-lg font-semibold text-primary mb-1 group-hover:text-accent transition-colors">Soothing visuals</h4>
                <p className="text-muted-foreground text-xs">background aesthetics for harmonious atmosphere</p>
              </a>
              <a 
                href="https://www.youtube.com/@OceanMediaProject"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-accent/20 rounded-lg p-3 text-center hover:border-accent/40 transition-colors duration-300 group"
              >
                <div className="text-2xl mb-2">🌌</div>
                <h4 className="text-lg font-semibold text-primary mb-1 group-hover:text-accent transition-colors">Ambient videos</h4>
                <p className="text-muted-foreground text-xs">universal content for Digital Signage and TV</p>
              </a>
              <a 
                href="https://www.youtube.com/@OceanMediaProject"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-accent/20 rounded-lg p-3 text-center hover:border-accent/40 transition-colors duration-300 group"
              >
                <div className="text-2xl mb-2">🌍</div>
                <h4 className="text-lg font-semibold text-primary mb-1 group-hover:text-accent transition-colors">Nature relaxation films</h4>
                <p className="text-muted-foreground text-xs">landscapes, nature, elements</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
