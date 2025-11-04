import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Trees" size={28} className="text-primary" />
              <span className="font-heading text-xl font-bold">ПолимерФормы</span>
            </div>
            <p className="text-white/80 text-sm">
              Производитель малых архитектурных форм из полимер-песчаного композита
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Продукция</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-primary transition-colors">Лавочки</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Урны</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Кашпо</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Прайс-лист</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Проекты</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Партнерам</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>+7 (495) 123-45-67</li>
              <li>info@polimerforms.ru</li>
              <li>г. Москва, ул. Производственная, 12</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p>© 2024 ПолимерФормы. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
