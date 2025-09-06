import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Globe, Zap, Fish, Sailboat, Trees, Sparkles } from "lucide-react";
import teamImage from "@/assets/about-team.jpg";

const AboutSection = () => {
  const advantages = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "HD качество с AI улучшением",
      description: "Оригинальный контент с возможностью AI-улучшения качества"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Полные коммерческие права",
      description: "Лицензии для продажи, аренды или эксклюзивных сделок"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Водная тематика",
      description: "Специализация на подводных мирах и водных пейзажах"
    }
  ];

  const features = [
    "Подводные миры (кораллы, морская живность)",
    "Кайтбординг и водные виды спорта", 
    "Водопады, реки, водные пейзажи",
    "Океаны, моря, водные потоки",
    "Полные коммерческие права на весь контент",
    "Гибкие условия с мультиязычной поддержкой"
  ];

  return (
    <section id="about" className="pt-10 pb-10 bg-gradient-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">КТО МЫ</h2>
            <p className="text-xl max-w-3xl mx-auto mb-6 font-medium">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold">Ocean Media Project</span> <span className="text-foreground">– команда профессионалов, создающая эксклюзивный видеоконтент для бизнеса и медиа</span>
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
              🎥 Наши операторы-постановщики ловят лучшие кадры, а режиссеры монтажа превращают их в цельную историю, где часы съёмок складываются в минуты уникального завораживающего видео.
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
                <h3 className="text-2xl font-bold text-primary mb-6 text-center">Мы предлагаем</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-primary">Готовый видео-контент</p>
                          <p className="text-muted-foreground text-sm">сотни часов релакс роликов и 24/7 стрим</p>
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
                          <p className="font-semibold text-primary">Любые виды лицензий и сроки</p>
                          <p className="text-muted-foreground text-sm">зарабатывайте, не думая о правовых рисках</p>
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
                          <p className="font-semibold text-primary">Разрешение HD, FHD, 2K…</p>
                          <p className="text-muted-foreground text-sm">возможности есть, вопрос договоренностей</p>
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
                          <p className="font-semibold text-primary">Индивидуальная адаптация</p>
                          <p className="text-muted-foreground text-sm">наложение звука, музыки, речи, текста</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>


          {/* Content Categories */}
          <div className="bg-gradient-ocean rounded-xl p-8 text-primary-foreground">
            <h3 className="text-2xl font-bold mb-6 text-center">📹 ОСНОВА НАШЕЙ ВИДЕОТЕКИ:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-primary-foreground/10 rounded-lg p-4 border border-primary-foreground/20 hover:border-accent/50 transition-colors">
                <div className="flex items-center gap-3">
                  <Fish className="h-5 w-5 text-accent" />
                  <div>
                    <h4 className="font-bold text-primary-foreground">Подводный мир</h4>
                    <p className="text-sm text-primary-foreground/80">коралловые рифы, уникальные рыбы и подводные обитатели</p>
                  </div>
                </div>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-4 border border-primary-foreground/20 hover:border-accent/50 transition-colors">
                <div className="flex items-center gap-3">
                  <Sailboat className="h-5 w-5 text-accent" />
                  <div>
                    <h4 className="font-bold text-primary-foreground">Прибрежные виды</h4>
                    <p className="text-sm text-primary-foreground/80">умиротворяющие виды водных видов спорта и яхт</p>
                  </div>
                </div>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-4 border border-primary-foreground/20 hover:border-accent/50 transition-colors">
                <div className="flex items-center gap-3">
                  <Trees className="h-5 w-5 text-accent" />
                  <div>
                    <h4 className="font-bold text-primary-foreground">Природные красоты</h4>
                    <p className="text-sm text-primary-foreground/80">побережья, леса, реки, каньоны, водопады</p>
                  </div>
                </div>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-4 border border-primary-foreground/20 hover:border-accent/50 transition-colors">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-accent" />
                  <div>
                    <h4 className="font-bold text-primary-foreground">Уникальные события</h4>
                    <p className="text-sm text-primary-foreground/80">захватывающие кадры салютов и фейерверков</p>
                  </div>
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