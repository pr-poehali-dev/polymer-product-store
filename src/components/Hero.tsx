import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Производитель №1 в России</Badge>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-secondary mb-6 leading-tight">
            Малые архитектурные формы из полимер-песчаного композита
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Лавочки, урны и кашпо для благоустройства городских территорий. 
            Срок службы 50+ лет, не требуют обслуживания, экологичны.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="text-lg px-8">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Смотреть каталог
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="FileText" size={20} className="mr-2" />
              Прайс-лист
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-20 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
    </section>
  );
}
