import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Waves, Heart, Monitor, Tv, Play, Youtube, Users } from "lucide-react";
import clientsImage from "@/assets/clients-showcase.jpg";

const ClientsSection = () => {
  const clientTypes = [
    {
      icon: <Building2 className="h-8 w-8" />,
      title: "Отели и курорты",
      description: "Фоновое видео для лобби, создание атмосферы роскоши",
      use: "Демонстрация в зонах ожидания и релаксации"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Wellness-центры",
      description: "SPA, йога-студии, центры медитации",
      use: "Релакс-контент для процедур и занятий"
    },
    {
      icon: <Waves className="h-8 w-8" />,
      title: "Медицинские клиники",
      description: "Стоматологии, клиники, медицинские центры",
      use: "Успокаивающие видео для пациентов"
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Digital Signage",
      description: "Компании цифровой рекламы и дисплеев",
      use: "Эксклюзивный контент для демонстраций"
    },
    {
      icon: <Tv className="h-8 w-8" />,
      title: "Производители дисплеев",
      description: "OLED-дисплеи, видеостены, мониторы",
      use: "Демонстрация качества изображения"
    },
    {
      icon: <Play className="h-8 w-8" />,
      title: "Телеканалы",
      description: "Продакшн-студии, телевизионные каналы",
      use: "Профессиональный контент для эфира"
    },
    {
      icon: <Youtube className="h-8 w-8" />,
      title: "Стриминговые сервисы",
      description: "Онлайн-платформы, потоковые сервисы",
      use: "Контент для релакс-каналов"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Контент-мейкеры",
      description: "YouTube-каналы, социальные сети",
      use: "Фоновый контент для видео"
    }
  ];

  return (
    <section id="clients" className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Для кого</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Наш контент идеально подходит для создания атмосферы, демонстрации качества изображения 
              и фонового оформления в различных сферах бизнеса
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {clientTypes.map((client, index) => (
              <Card key={index} className="text-center shadow-ocean hover:shadow-depth transition-all duration-300 group border-accent/20 hover:border-accent/40">
                <CardContent className="pt-8">
                  <div className="text-accent mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {client.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-3">{client.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{client.description}</p>
                  <div className="text-xs text-accent font-medium bg-accent/10 rounded-full px-3 py-1">
                    {client.use}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-card rounded-xl p-8 shadow-ocean mb-16">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">Почему выбирают нас</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">4K/8K</div>
                <div className="text-sm text-muted-foreground">Качество изображения</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Часов контента</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Авторские права</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-deep rounded-xl p-12 text-primary-foreground">
            <h3 className="text-3xl font-bold mb-4">Готовы к сотрудничеству?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Подберем и подготовим контент под ваш бизнес. Напишите нам для получения каталога и тестовых материалов!
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