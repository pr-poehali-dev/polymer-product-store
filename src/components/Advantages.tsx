import Icon from '@/components/ui/icon';

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

export default function Advantages() {
  return (
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
  );
}
