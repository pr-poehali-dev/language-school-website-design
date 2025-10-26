import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Спасибо! Мы свяжемся с вами в ближайшее время 🎉');
    setFormData({ name: '', phone: '', message: '' });
  };

  const courses = [
    {
      title: 'Английский язык',
      description: 'От начального до продвинутого уровня. Разговорная практика с носителями.',
      image: 'https://cdn.poehali.dev/projects/884758cc-9f49-41ca-96aa-4d80fd1bd666/files/e549d00c-c5ff-4e2d-80d5-b7d82bc93df7.jpg',
      duration: '6-9 месяцев',
      level: 'A1-C2',
      icon: 'Globe',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Китайский язык',
      description: 'Изучение иероглифов, грамматики и культуры Китая с опытными преподавателями.',
      image: 'https://cdn.poehali.dev/projects/884758cc-9f49-41ca-96aa-4d80fd1bd666/files/3cf29b1f-adae-4390-a17b-8ee3811364d4.jpg',
      duration: '8-12 месяцев',
      level: 'HSK 1-6',
      icon: 'Languages',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Испанский язык',
      description: 'Живой испанский с погружением в культуру и традиции латиноамериканских стран.',
      image: 'https://cdn.poehali.dev/projects/884758cc-9f49-41ca-96aa-4d80fd1bd666/files/efb3aedd-6e04-4c98-a702-fc8a3c6c3656.jpg',
      duration: '6-9 месяцев',
      level: 'A1-C2',
      icon: 'Music',
      gradient: 'from-orange-500 to-pink-500'
    }
  ];

  const benefits = [
    {
      icon: 'Users',
      title: 'Малые группы',
      description: 'До 6 человек для максимального внимания каждому студенту',
      color: 'text-purple-600'
    },
    {
      icon: 'Video',
      title: 'Онлайн и офлайн',
      description: 'Выбирайте удобный формат обучения или комбинируйте их',
      color: 'text-blue-600'
    },
    {
      icon: 'Award',
      title: 'Сертификат',
      description: 'Официальный документ о прохождении курса',
      color: 'text-pink-600'
    },
    {
      icon: 'Clock',
      title: 'Гибкий график',
      description: 'Утренние, дневные и вечерние группы на выбор',
      color: 'text-indigo-600'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10 animate-gradient-shift" style={{ backgroundSize: '200% 200%' }}></div>
        
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center animate-fade-in">
            <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-7xl">
              <span className="gradient-text">Говори свободно</span>
              <br />
              на любом языке
            </h1>
            <p className="mb-8 text-lg text-gray-600 md:text-xl">
              Современные методики обучения, опытные преподаватели и дружелюбная атмосфера. 
              Первое занятие — бесплатно!
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button 
                size="lg" 
                className="gradient-primary text-lg shadow-xl hover:scale-105 transition-transform"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="Sparkles" className="mr-2" size={20} />
                Записаться на пробное занятие
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 text-lg hover:scale-105 transition-transform"
                onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Посмотреть курсы
                <Icon name="ArrowDown" className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-1 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      <section id="courses" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center animate-fade-in">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Наши <span className="gradient-text">курсы</span>
            </h2>
            <p className="text-lg text-gray-600">
              Выберите язык и начните путь к свободному общению
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-90`}></div>
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="h-full w-full object-cover mix-blend-overlay"
                  />
                  <div className="absolute top-4 right-4 rounded-full bg-white/90 p-3 shadow-lg">
                    <Icon name={course.icon as any} className="text-purple-600" size={24} />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-2xl font-bold">{course.title}</h3>
                  <p className="mb-4 text-gray-600">{course.description}</p>
                  <div className="mb-4 flex gap-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Icon name="Clock" size={16} />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Icon name="Target" size={16} />
                      {course.level}
                    </div>
                  </div>
                  <Button className="w-full gradient-primary hover:scale-105 transition-transform">
                    Узнать подробнее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Почему <span className="gradient-text">выбирают нас</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-pink-100">
                    <Icon name={benefit.icon as any} className={benefit.color} size={32} />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                Запишитесь на <span className="gradient-text">бесплатное</span> занятие
              </h2>
              <p className="text-lg text-gray-600">
                Оставьте заявку, и мы свяжемся с вами в течение часа
              </p>
            </div>

            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="mb-2 block text-sm font-semibold">Ваше имя</label>
                    <Input
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold">Телефон</label>
                    <Input
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold">Какой язык хотите изучать?</label>
                    <Textarea
                      placeholder="Расскажите о ваших целях и предпочтениях"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full gradient-primary text-lg hover:scale-105 transition-transform"
                  >
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-xl font-bold">Языковая школа</h3>
              <p className="text-gray-400">
                Обучаем языкам с 2010 года. Более 5000 выпускников.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-lg font-semibold">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@languageschool.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Примерная, 123
                </p>
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-lg font-semibold">Социальные сети</h4>
              <div className="flex gap-4">
                <Button size="icon" variant="outline" className="hover:scale-110 transition-transform">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="hover:scale-110 transition-transform">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="hover:scale-110 transition-transform">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Языковая школа. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
