import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Partners() {
  return (
    <section id="partners" className="py-20 bg-gradient-to-br from-secondary to-secondary/90 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
              Информация для партнеров
            </h2>
            <p className="text-lg text-white/90">
              Выгодные условия сотрудничества для дилеров и строительных компаний
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl animate-scale-in">
              <Icon name="TrendingUp" size={32} className="mb-4" />
              <h3 className="font-heading text-2xl font-bold mb-3">Дилерские условия</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="flex-shrink-0 mt-0.5" />
                  <span>Скидки до 40% для партнеров</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="flex-shrink-0 mt-0.5" />
                  <span>Маркетинговая поддержка</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="flex-shrink-0 mt-0.5" />
                  <span>Эксклюзивные территории</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="flex-shrink-0 mt-0.5" />
                  <span>Отсрочка платежа до 60 дней</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl animate-scale-in" style={{ animationDelay: '100ms' }}>
              <Icon name="Building2" size={32} className="mb-4" />
              <h3 className="font-heading text-2xl font-bold mb-3">Для строителей</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="flex-shrink-0 mt-0.5" />
                  <span>Крупнооптовые цены</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="flex-shrink-0 mt-0.5" />
                  <span>Помощь в проектировании</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="flex-shrink-0 mt-0.5" />
                  <span>Производство под заказ</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="flex-shrink-0 mt-0.5" />
                  <span>Гибкая система оплаты</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Icon name="FileDown" size={20} className="mr-2" />
              Скачать коммерческое предложение
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
