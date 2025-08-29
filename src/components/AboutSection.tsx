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
    <section id="about" className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">✨ КТО МЫ</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ocean Media Project – команда профессионалов, создающая эксклюзивный видеоконтент для бизнеса и медиа
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
              🎥 Наши операторы – мастера съемочного процесса, отбирающие лучшие кадры и превращающие часы видеоматериала в минуты завораживающего контента
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
                <h3 className="text-2xl font-bold text-primary mb-4">ЧТО МЫ ПРЕДЛАГАЕМ?</h3>
                <div className="space-y-3">
                  <p className="text-muted-foreground">✅ <strong>Готовый видео-контент</strong> – сотни часов релакс роликов и 24/7 стрим</p>
                  <p className="text-muted-foreground">✅ <strong>Любые виды лицензий и сроки</strong> – зарабатывайте, не думая о правовых рисках</p>
                  <p className="text-muted-foreground">✅ <strong>Разрешение HD, FHD, 2K…</strong> – возможности есть, вопрос договоренностей</p>
                  <p className="text-muted-foreground">✅ <strong>Индивидуальная адаптация</strong> – наложение звука, музыки, речи, текста</p>
                </div>
              </div>
            </div>
          </div>


          {/* Content Categories */}
          <div className="bg-gradient-ocean rounded-xl p-8 text-primary-foreground mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">📹 ОСНОВА НАШЕЙ ВИДЕОТЕКИ:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Fish className="h-5 w-5 text-accent" />
                  <p><strong>Подводный мир:</strong> коралловые рифы, уникальные рыбы и подводные обитатели</p>
                </div>
                <div className="flex items-center gap-3">
                  <Sailboat className="h-5 w-5 text-accent" />
                  <p><strong>Прибрежные виды:</strong> умиротворяющие виды водных видов спорта и яхт</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Trees className="h-5 w-5 text-accent" />
                  <p><strong>Природные красоты:</strong> побережья, леса, реки, каньоны, водопады</p>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="h-5 w-5 text-accent" />
                  <p><strong>Уникальные события:</strong> захватывающие кадры салютов и фейерверков</p>
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