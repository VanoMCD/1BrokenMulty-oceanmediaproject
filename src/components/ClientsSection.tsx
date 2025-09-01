import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Waves, Heart, Monitor, Tv, Play, Youtube, Users } from "lucide-react";
import clientsImage from "@/assets/clients-showcase.jpg";

const ClientsSection = () => {
  const clientTypes = [
    {
      icon: <Play className="h-8 w-8" />,
      title: "📡 Телеканалы и продакшн-студии",
      description: "вставки в передачи, документальные проекты",
      use: "Профессиональный контент для эфира"
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "📺 Digital Signage компании", 
      description: "контент для видеопанелей",
      use: "Эксклюзивный контент для демонстраций"
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "🏨 Отели и курорты",
      description: "фоновое видео для лобби и номеров",
      use: "Создание атмосферы роскоши"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "🧘 Wellness-центры, SPA, йога-студии",
      description: "релакс-контент для атмосферы",
      use: "Контент для процедур и занятий"
    },
    {
      icon: <Waves className="h-8 w-8" />,
      title: "🏥 Медицинские клиники, стоматологии",
      description: "успокаивающие видео для пациентов",
      use: "Снижение стресса пациентов"
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "🏢 Корпоративные офисы и коворкинги",
      description: "атмосфера уют для сотрудников",
      use: "Улучшение рабочей среды"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "🎭 Музеи, выставки, арт-пространства",
      description: "визуальное сопровождение экспозиций",
      use: "Дополнение к экспозициям"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "📹 YouTube-каналы и контент-мейкеры",
      description: "видео для блогов, ASMR и медитаций",
      use: "Фоновый контент для видео"
    },
    {
      icon: <Youtube className="h-8 w-8" />,
      title: "🎬 Стриминговые сервисы и VOD платформы",
      description: "каталоги видео для подписчиков",
      use: "Контент для релакс-каналов"
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "📢 Рекламные агентства",
      description: "закупки контента для портфолио и продажи клиентам, вставки в кампании",
      use: "Контент для рекламных проектов"
    }
  ];

  return (
    <section id="clients" className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">КОМУ ЭТО ПОДОЙДЁТ?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Наш контент идеально подходит для различных сфер бизнеса и развлечений
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
          <div className="text-center bg-gradient-deep rounded-xl p-12 text-primary-foreground">
            <h3 className="text-3xl font-bold mb-4">Готовы к сотрудничеству?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              📩 Свяжитесь с нами — подберем и подготовим контент под Ваш бизнес! Готовы к сотрудничеству? Напишите нам для получения каталога и тестовых материалов!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Получить каталог
              </Button>
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Запросить тест-материалы
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;