import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Trees" size={32} className="text-primary" />
            <span className="font-heading text-2xl font-bold text-secondary">ПолимерФормы</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#catalog" className="text-gray-700 hover:text-primary transition-colors font-medium">Каталог</a>
            <a href="#projects" className="text-gray-700 hover:text-primary transition-colors font-medium">Проекты</a>
            <a href="#advantages" className="text-gray-700 hover:text-primary transition-colors font-medium">Преимущества</a>
            <a href="#partners" className="text-gray-700 hover:text-primary transition-colors font-medium">Партнерам</a>
            <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors font-medium">Контакты</a>
          </nav>
          <Button className="hidden md:flex">
            <Icon name="Phone" size={18} className="mr-2" />
            Связаться
          </Button>
        </div>
      </div>
    </header>
  );
}
