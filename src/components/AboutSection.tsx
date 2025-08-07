import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Globe, Zap } from "lucide-react";
import teamImage from "@/assets/about-team.jpg";

const AboutSection = () => {
  const advantages = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Высочайшее качество",
      description: "4K и 8K разрешение для идеальной картинки"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Глобальные права",
      description: "Полные авторские права на весь контент"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Быстрая доставка",
      description: "Мгновенная передача цифровых файлов"
    }
  ];

  const features = [
    "Авторский контент с доказательствами легальности",
    "RAW-файлы и портфолио на Pond5, Shutterstock, Adobe Stock",
    "Индивидуальная адаптация: озвучка, музыка, субтитры",
    "Сотни часов профессиональной съемки"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">О нас</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ocean Media Group — команда профессионалов, создающая высококачественный видеоконтент 
              с уникальными кадрами подводного мира, дикой природы и городских пейзажей.
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
                <h3 className="text-2xl font-bold text-primary mb-4">Наша миссия</h3>
                <p className="text-muted-foreground text-lg">
                  Предоставлять уникальный видеоконтент для различных сфер бизнеса, 
                  помогая создавать атмосферу релаксации и профессионализма.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Наша команда</h3>
                <p className="text-muted-foreground text-lg">
                  Мы — команда профессионалов. Наши операторы — не просто видеооператоры, 
                  а настоящие режиссеры, которые создают по-настоящему ценный контент.
                </p>
              </div>
            </div>
          </div>

          {/* Advantages */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center shadow-ocean hover:shadow-depth transition-all duration-300 border-accent/20">
                <CardContent className="pt-8">
                  <div className="text-accent mb-4 flex justify-center">
                    {advantage.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-primary mb-2">{advantage.title}</h4>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Features */}
          <div className="bg-card rounded-xl p-8 shadow-ocean">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">Доказательства легальности</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-6 justify-center">
              <Badge variant="secondary">Pond5</Badge>
              <Badge variant="secondary">Shutterstock</Badge>
              <Badge variant="secondary">Adobe Stock</Badge>
              <Badge variant="secondary">Getty Images</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;