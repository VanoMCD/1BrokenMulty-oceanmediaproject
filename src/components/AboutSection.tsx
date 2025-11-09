import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Globe, Zap, Fish, Sailboat, Trees, Sparkles } from "lucide-react";
import teamImage from "@/assets/about-team.jpg";

const AboutSection = () => {
  const advantages = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "HD Quality with AI Enhancement",
      description: "Original content with AI quality enhancement capabilities"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Full Commercial Rights",
      description: "Licenses for sale, rental, or exclusive deals"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Aquatic Theme",
      description: "Specializing in underwater worlds and water landscapes"
    }
  ];

  const features = [
    "Underwater worlds (corals, marine life)",
    "Kiteboarding and water sports", 
    "Waterfalls, rivers, water landscapes",
    "Oceans, seas, water flows",
    "Full commercial rights for all content",
    "Flexible terms with multilingual support"
  ];

  return (
    <section id="about" className="pt-10 pb-10 bg-gradient-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">WHO WE ARE</h2>
            <p className="text-xl max-w-3xl mx-auto mb-6 font-medium">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold">Ocean Media Project</span> <span className="text-foreground">– a team of professionals creating exclusive video content for business and media</span>
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
              🎥 Our cinematographers capture the finest footage, while our editors transform it into a cohesive story, where hours of filming become minutes of unique, captivating video.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src={teamImage} 
                alt="Professional video production team" 
                className="rounded-xl shadow-ocean w-full"
              />
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6 text-center">What We Offer</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-primary">Ready-Made Video Content</p>
                          <p className="text-muted-foreground text-sm">hundreds of hours of relaxation videos and 24/7 streaming</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="p-4 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Award className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-primary">All Types of Licenses & Terms</p>
                          <p className="text-muted-foreground text-sm">monetize without worrying about legal risks</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="p-4 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Globe className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-primary">HD, UHD, 4K Formats</p>
                          <p className="text-muted-foreground text-sm">material adapted to your requirements</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="p-4 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Zap className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-primary">Custom Adaptation</p>
                          <p className="text-muted-foreground text-sm">music overlay, voiceover, text, multilingual support</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>


          {/* Content Categories */}
          <div id="portfolio" className="bg-gradient-ocean rounded-xl p-8 text-primary-foreground scroll-mt-20">
            <h3 className="text-2xl font-bold mb-6 text-center">📹 FOUNDATION OF OUR VIDEO LIBRARY:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-primary-foreground/10 rounded-lg p-4 border border-primary-foreground/20 hover:border-accent/50 transition-colors">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="flex items-center gap-2">
                    <Fish className="h-5 w-5 text-emerald-300" />
                    <h4 className="font-bold text-primary-foreground">Underwater World</h4>
                  </div>
                  <p className="text-sm text-primary-foreground/80">coral reefs, unique fish and marine creatures</p>
                </div>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-4 border border-primary-foreground/20 hover:border-accent/50 transition-colors">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="flex items-center gap-2">
                    <Sailboat className="h-5 w-5 text-emerald-300" />
                    <h4 className="font-bold text-primary-foreground">Coastal Views</h4>
                  </div>
                  <p className="text-sm text-primary-foreground/80">serene water sports and yachting scenes</p>
                </div>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-4 border border-primary-foreground/20 hover:border-accent/50 transition-colors">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="flex items-center gap-2">
                    <Trees className="h-5 w-5 text-emerald-300" />
                    <h4 className="font-bold text-primary-foreground">Natural Beauty</h4>
                  </div>
                  <p className="text-sm text-primary-foreground/80">coastlines, forests, rivers, canyons, waterfalls</p>
                </div>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-4 border border-primary-foreground/20 hover:border-accent/50 transition-colors">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-emerald-300" />
                    <h4 className="font-bold text-primary-foreground">Unique Events</h4>
                  </div>
                  <p className="text-sm text-primary-foreground/80">spectacular fireworks and celebration footage</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;