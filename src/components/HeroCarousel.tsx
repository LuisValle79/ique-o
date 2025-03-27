import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    url: 'https://thumbs.dreamstime.com/b/el-grupo-de-almacenes-f%C3%A1bricas-empleados-e-ingenieros-plantas-industriales-equipo-trabajadores-ingeniero-en-f%C3%A1brica-producci%C3%B3n-254018176.jpg',
    title: 'Implementos Agrícolas de Alta Calidad'
  },
  {
    url: 'https://agrolink.com.ar/wp-content/uploads/2020/08/maquinaria-agr%C3%ADcola-scaled.jpg',
    title: 'Maquinaria de Última Generación'
  },
  {
    url: 'https://th.bing.com/th/id/R.ab67800874782372cdaae6a6360deee3?rik=h60NITsFuftNmw&pid=ImgRaw&r=0',
    title: 'Soluciones para el Campo'
  },
  {
    url: 'https://bloglatam.jacto.com/wp-content/uploads/2023/01/operador-de-maquinaria-agricola.jpg',
    title: 'Experiencia y Calidad'
  }
];

const HeroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    goToSlide(newIndex);
  };

  return (
    <div className="relative h-[90vh] overflow-hidden">
      {/* Imágenes del carrusel */}
      <div className="relative h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${image.url})` }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
        ))}
      </div>

      {/* Contenido */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 transition-opacity duration-500">
              {images[currentIndex].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Especialistas en maquinaria agrícola y soluciones para el campo desde hace más de 20 años
            </p>
            <div className="flex gap-4">
              <a 
                href="#contacto"
                className="bg-machinery-200 text-tractor-400 px-8 py-3 rounded-lg font-semibold hover:bg-machinery-300 transition duration-300 inline-flex items-center"
              >
                Contáctanos
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#maquinarias"
                className="bg-tractor-200 text-white px-8 py-3 rounded-lg font-semibold hover:bg-tractor-300 transition duration-300 inline-flex items-center"
              >
                Ver Productos
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="https://www.implementosagricolasfsi.com/images/catalogo.pdf"
                className="bg-machinery-200 text-tractor-400 px-8 py-3 rounded-lg font-semibold hover:bg-machinery-300 transition duration-300 inline-flex items-center"
              >
                Ver Catálogo de Productos
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Controles del carrusel */}
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button
          onClick={goToPrevious}
          className="bg-black bg-opacity-50 text-white p-2 m-4 rounded-full hover:bg-opacity-75 transition-all"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          onClick={goToNext}
          className="bg-black bg-opacity-50 text-white p-2 m-4 rounded-full hover:bg-opacity-75 transition-all"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-white scale-125'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel; 
