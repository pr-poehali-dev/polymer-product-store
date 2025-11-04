import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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

export default function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const categories = ['Все', 'Лавочки', 'Урны', 'Кашпо'];

  const filteredProducts = selectedCategory === 'Все' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
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
  );
}
