import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

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

export default function Projects() {
  return (
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
  );
}
