import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Carlos Rodríguez',
    company: 'Industrias del Sur',
    content: 'Excelente servicio y calidad en la fabricación de nuestras máquinas industriales. El equipo de El Iqueño SAC demostró gran profesionalismo.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 2,
    name: 'María González',
    company: 'Metalúrgica Central',
    content: 'Trabajamos con El Iqueño SAC en varios proyectos y siempre entregan a tiempo y con la calidad prometida.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 3,
    name: 'Jorge Mendoza',
    company: 'Constructora del Norte',
    content: 'Su experiencia en metalistería es incomparable. Han sido un socio clave en nuestros proyectos de construcción.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map(testimonial => (
        <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center mb-4">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div>
              <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
              <p className="text-gray-600 text-sm">{testimonial.company}</p>
            </div>
          </div>
          <p className="text-gray-700 italic">"{testimonial.content}"</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;