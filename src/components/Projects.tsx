import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const projects = [
  {
    title: 'Городское благоустройство',
    location: 'г. Улан-Удэ',
    items: 'Скамейки и урны из ДПК',
    image: 'https://cdn.poehali.dev/files/e1eb8084-16a1-4ae6-a721-3bfcdbebb94b.jpg'
  },
  {
    title: 'Парковая зона',
    location: 'г. Улан-Удэ',
    items: 'Комплект скамеек со столом',
    image: 'https://cdn.poehali.dev/files/6cde4aa6-f7b9-44ac-8e8b-35a089970290.jpg'
  },
  {
    title: 'Зона отдыха',
    location: 'г. Улан-Удэ',
    items: 'Скамейки и урны',
    image: 'https://cdn.poehali.dev/files/57905ffc-9e81-49ca-afb2-97f6b46c6ca5.jpg'
  },
  {
    title: 'Парковка',
    location: 'г. Улан-Удэ',
    items: 'Скамейки и урны из композита',
    image: 'https://cdn.poehali.dev/files/82b4ccfe-7092-4f72-bc8c-4b1a2d026194.jpg'
  },
  {
    title: 'Вазон-контейнер',
    location: 'г. Улан-Удэ',
    items: 'Декоративная клумба ДПК',
    image: 'https://cdn.poehali.dev/files/d8ed047e-12d3-4355-9744-367c818cdf65.jpg'
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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