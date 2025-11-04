import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const products = [
  {
    id: 1,
    name: 'Скамейка "Парковая"',
    category: 'Лавочки',
    price: 'от 15 000 ₽',
    description: 'Прочная садово-парковая скамейка из полимер-песчаного композита',
    features: ['Срок службы 50+ лет', 'Не требует покраски', 'Устойчива к влаге'],
    image: 'https://cdn.poehali.dev/projects/f0fdb6ed-b114-4cd9-b40c-7d90b8d57750/files/df076b1c-ebbe-4710-b9a6-e7998b53e5d9.jpg'
  },
  {
    id: 2,
    name: 'Урна "Стандарт"',
    category: 'Урны',
    price: 'от 8 500 ₽',
    description: 'Вместительная урна для общественных пространств',
    features: ['Объем 50л', 'Легко чистится', 'Антивандальная'],
    image: 'https://cdn.poehali.dev/projects/f0fdb6ed-b114-4cd9-b40c-7d90b8d57750/files/a1caf967-1c7c-4020-a2d2-2aaa7336a6a9.jpg'
  },
  {
    id: 3,
    name: 'Кашпо "Эко"',
    category: 'Кашпо',
    price: 'от 12 000 ₽',
    description: 'Декоративное кашпо для озеленения территории',
    features: ['Разные размеры', 'Морозостойкое', 'Эко-материал'],
    image: 'https://cdn.poehali.dev/projects/f0fdb6ed-b114-4cd9-b40c-7d90b8d57750/files/20c4118b-c280-492e-994b-5e1ae71bb81e.jpg'
  },
  {
    id: 4,
    name: 'Скамейка "Комфорт"',
    category: 'Лавочки',
    price: 'от 18 500 ₽',
    description: 'Эргономичная скамейка с увеличенной спинкой',
    features: ['Анатомическая форма', 'Выдерживает 400кг', 'Не выгорает'],
    image: 'https://cdn.poehali.dev/projects/f0fdb6ed-b114-4cd9-b40c-7d90b8d57750/files/df076b1c-ebbe-4710-b9a6-e7998b53e5d9.jpg'
  },
  {
    id: 5,
    name: 'Урна "Премиум"',
    category: 'Урны',
    price: 'от 11 000 ₽',
    description: 'Урна с пепельницей и декоративными элементами',
    features: ['Объем 75л', 'Встроенная пепельница', 'Дизайнерская'],
    image: 'https://cdn.poehali.dev/projects/f0fdb6ed-b114-4cd9-b40c-7d90b8d57750/files/a1caf967-1c7c-4020-a2d2-2aaa7336a6a9.jpg'
  },
  {
    id: 6,
    name: 'Кашпо "Модерн"',
    category: 'Кашпо',
    price: 'от 16 500 ₽',
    description: 'Стильное кашпо для современных ландшафтов',
    features: ['Минималистичный дизайн', 'Высота 80см', 'UV-защита'],
    image: 'https://cdn.poehali.dev/projects/f0fdb6ed-b114-4cd9-b40c-7d90b8d57750/files/20c4118b-c280-492e-994b-5e1ae71bb81e.jpg'
  }
];

const projects = [
  {
    title: 'Благоустройство парка "Центральный"',
    location: 'г. Москва',
    items: '120 единиц малых архитектурных форм',
    image: '/placeholder.svg'
  },
  {
    title: 'Жилой комплекс "Зеленая долина"',
    location: 'г. Санкт-Петербург',
    items: '85 единиц продукции',
    image: '/placeholder.svg'
  },
  {
    title: 'Набережная реки Волга',
    location: 'г. Нижний Новгород',
    items: '200+ единиц',
    image: '/placeholder.svg'
  }
];

const advantages = [
  {
    icon: 'Shield',
    title: 'Долговечность 50+ лет',
    description: 'Полимер-песчаный композит не подвержен коррозии и гниению'
  },
  {
    icon: 'Droplets',
    title: 'Влагостойкость',
    description: 'Материал не впитывает воду, не деформируется при заморозке'
  },
  {
    icon: 'Paintbrush',
    title: 'Не требует обслуживания',
    description: 'Не нужна покраска, лакировка или специальный уход'
  },
  {
    icon: 'Leaf',
    title: 'Экологичность',
    description: 'Изготовлено из переработанных материалов, безопасно для природы'
  },
  {
    icon: 'Award',
    title: 'Гарантия качества',
    description: 'Официальная гарантия 10 лет на все изделия'
  },
  {
    icon: 'Truck',
    title: 'Доставка по РФ',
    description: 'Собственная логистика и партнеры в регионах'
  }
];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const categories = ['Все', 'Лавочки', 'Урны', 'Кашпо'];

  const filteredProducts = selectedCategory === 'Все' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
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

      <section id="catalog" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-secondary mb-4">Каталог продукции</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Широкий ассортимент изделий для благоустройства любых территорий
            </p>
          </div>

          <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {categories.map(cat => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(cat)}
                className="px-6"
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, idx) => (
              <Card 
                key={product.id} 
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in overflow-hidden"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative overflow-hidden bg-gray-100 aspect-[4/3]">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary">{product.category}</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="font-heading text-xl group-hover:text-primary transition-colors">
                      {product.name}
                    </CardTitle>
                    <span className="text-xl font-bold text-primary whitespace-nowrap">{product.price}</span>
                  </div>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <Icon name="CheckCircle2" size={16} className="text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full group-hover:bg-secondary">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-secondary mb-4">
              Преимущества наших изделий
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Полимер-песчаный композит — современный материал будущего
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon name={advantage.icon} size={28} className="text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-secondary mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-secondary mb-4">
              Реализованные проекты
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Более 500 объектов по всей России
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <Card 
                key={idx}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative overflow-hidden bg-gray-100 aspect-[4/3]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-heading text-lg group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="space-y-1">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="MapPin" size={14} className="text-primary" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Package" size={14} className="text-primary" />
                      {project.items}
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

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

      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-secondary mb-4">
                Свяжитесь с нами
              </h2>
              <p className="text-lg text-gray-600">
                Ответим на все вопросы и подберем оптимальное решение
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6 animate-scale-in">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-1">Телефон</h3>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                    <p className="text-sm text-gray-500">Пн-Пт: 9:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">info@polimerforms.ru</p>
                    <p className="text-sm text-gray-500">Ответим в течение часа</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-1">Адрес</h3>
                    <p className="text-gray-600">г. Москва, ул. Производственная, д. 12</p>
                    <p className="text-sm text-gray-500">Производство и офис продаж</p>
                  </div>
                </div>
              </div>

              <Card className="animate-scale-in" style={{ animationDelay: '100ms' }}>
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">Оставить заявку</CardTitle>
                  <CardDescription>Мы перезвоним в течение 15 минут</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <Input placeholder="Телефон" type="tel" />
                    </div>
                    <div>
                      <Input placeholder="Email" type="email" />
                    </div>
                    <div>
                      <Textarea placeholder="Комментарий" rows={4} />
                    </div>
                    <Button className="w-full" size="lg">
                      <Icon name="Send" size={18} className="mr-2" />
                      Отправить заявку
                    </Button>
                    <p className="text-xs text-gray-500 text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
}