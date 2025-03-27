import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, AlertTriangle, MessageCircle, Users, Building, Target, Eye } from 'lucide-react';
import ContactForm from './components/ContactForm';
import MachineGallery from './components/MachineGallery';
import Testimonials from './components/Testimonials';
import Alert from './components/Alert';
import VideoGallery from './components/VideoGallery';
import Advisors from './components/Advisors';
import AboutUs from './components/AboutUs';
import Map from './components/Map';
import Logo from './components/Logo';
import HeroCarousel from './components/HeroCarousel';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleContactSuccess = () => {
    setAlertMessage('Mensaje enviado correctamente. Nos pondremos en contacto pronto.');
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  const menuItems = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#quienes-somos', label: 'Quiénes Somos' },
    { href: '#maquinarias', label: 'Maquinarias' },
    { href: '#videos', label: 'Videos' },
    { href: '#testimonios', label: 'Testimonios' },
    { href: '#asesores', label: 'Asesores' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <div className="min-h-screen bg-tractor-50">
      {/* Navigation */}
      <nav className="bg-tractor-200 text-white fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Logo height={60} />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                {menuItems.map((item) => (
                  <a 
                    key={item.href} 
                    href={item.href} 
                    className="hover:text-machinery-200 px-3 py-2 transition duration-300"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="p-2">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40">
            <div className="bg-tractor-200 h-full w-3/4 max-w-sm p-6 transform transition-transform duration-300">
              <div className="flex justify-between items-center mb-8">
                <Logo height={40} />
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:bg-tractor-300 rounded-lg transition-colors duration-300"
                >
                  <X className="h-6 w-6 text-white" />
                </button>
              </div>
              <div className="space-y-4">
              {menuItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                    className="block px-4 py-3 text-white hover:bg-tractor-300 rounded-lg transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
                <div className="pt-6 border-t border-tractor-300">
                  <a 
                    href="#contacto"
                    className="block px-4 py-3 bg-machinery-200 text-tractor-400 rounded-lg text-center font-semibold hover:bg-machinery-300 transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contáctanos
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio">
        <HeroCarousel />
      </section>

      {/* About Us Section */}
      <section id="quienes-somos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-tractor-200">
            Quiénes Somos
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-tractor-300">Nuestra Historia</h3>
              <p className="text-gray-600 mb-6">
                FSI Implementos Agrícolas es una empresa peruana que nace como respuesta a la necesidad de 
todos los agricultores y empresas agroindustriales del país en 
hacer más fácil la tarea del agricultor y realizarlo en menos 
tiempo. 
Más de 30 años de experiencia fabricando maquinaria e 
implementos agrícolas para el campo peruano a los mejores 
precios. 
F.S.I SAC, desarrolla, innova, fabrica implementos y maquinaria 
agrícola para tractor.
              </p>
              <h3 className="text-2xl font-bold mb-4 text-tractor-300">Nuestra Misión</h3>
              <p className="text-gray-600 mb-6">
                Proporcionar implementos agrícolas de la más alta calidad que mejoren la eficiencia y 
                productividad de nuestros clientes, contribuyendo al desarrollo del sector agrícola.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-tractor-50 p-6 rounded-lg text-center">
                  <h4 className="text-4xl font-bold text-tractor-200 mb-2">20+</h4>
                  <p className="text-gray-600">Años de Experiencia</p>
                </div>
                <div className="bg-machinery-50 p-6 rounded-lg text-center">
                  <h4 className="text-4xl font-bold text-machinery-400 mb-2">1000+</h4>
                  <p className="text-gray-600">Clientes Satisfechos</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1589923188900-85dae523342b" alt="Tractor en campo" className="rounded-lg shadow-lg" />
                <img src="https://th.bing.com/th/id/OIP.pIf1cCLg8Mq7Y9UvKPQeBwHaE8?rs=1&pid=ImgDetMain" alt="Implemento agrícola" className="rounded-lg shadow-lg" />
              </div>
              <div className="space-y-4 mt-8">
                <img src="https://th.bing.com/th/id/OIP.mzkswmVHnONp3nRPx-PFBAHaE6?rs=1&pid=ImgDetMain" alt="Trabajo en campo" className="rounded-lg shadow-lg" />
                <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449" alt="Maquinaria agrícola" className="rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-tractor-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-tractor-200">
            Nuestros Servicios
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-tractor-200 rounded-full flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-tractor-300">Fabricación</h3>
              <p className="text-gray-600">
                Fabricamos implementos agrícolas a medida, adaptados a las necesidades específicas de cada cliente.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-machinery-200 rounded-full flex items-center justify-center mb-4">
                <Building className="h-6 w-6 text-tractor-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-tractor-300">Mantenimiento</h3>
              <p className="text-gray-600">
                Servicio técnico especializado y mantenimiento preventivo para mantener su maquinaria en óptimas condiciones.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-tractor-200 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-tractor-300">Asesoría</h3>
              <p className="text-gray-600">
                Asesoramiento técnico personalizado para la selección y uso óptimo de implementos agrícolas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
{/* Products Section */}
<section id="maquinarias" className="py-20 bg-white w-full">
  <div className="w-full px-4">
    <h2 className="text-3xl font-bold text-center mb-12 text-tractor-200">
      Nuestros Productos
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 w-full">
      {/* Product cards */}
      <MachineGallery />
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-16 bg-tractor-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Necesitas un implemento específico?
          </h2>
          <p className="text-tractor-50 text-xl mb-8">
            Contáctanos y te ayudaremos a encontrar la solución perfecta para tu necesidad
          </p>
          <a 
            href="#contacto"
            className="bg-machinery-200 text-tractor-400 px-8 py-3 rounded-lg font-semibold hover:bg-machinery-300 transition duration-300 inline-flex items-center"
          >
            Solicitar Cotización
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section id="videos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-tractor-200">
            Videos de Clientes Satisfechos
          </h2>
          <VideoGallery />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 bg-tractor-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-tractor-200">
            Testimonios de Clientes
          </h2>
          <Testimonials />
        </div>
      </section>

      {/* Advisors Section */}
      <section id="asesores" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-tractor-200">
            Nuestros Asesores
          </h2>
          <Advisors />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-tractor-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-tractor-200">
            Contáctanos
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ContactForm onSuccess={handleContactSuccess} />
            </div>
            <div className="space-y-6">
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <Phone className="h-6 w-6 text-tractor-200 mr-3" />
                <span>+51 958 840 599</span>
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <Mail className="h-6 w-6 text-tractor-200 mr-3" />
                <span>eliquenosac.lili@gmail.com</span>
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <MapPin className="h-6 w-6 text-tractor-200 mr-3" />
                <span>Jr. Augusto B. Leguia n 523. Imperial cañete Lima Perú</span>
              </div>
              <Map />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-tractor-200 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Logo height={32} />
              </h3>
              <p className="text-tractor-50">
                Expertos en soluciones metalúrgicas industriales
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="text-tractor-50 hover:text-white transition duration-300">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Horario de Atención</h3>
              <p className="text-tractor-50">
                Lunes a Viernes: 8:00 AM - 01:00 PM<br />
                                 03:00 PM - 06:00 PM<br />
                Sábados: 8:00 AM - 1:00 PM
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-tractor-300 text-center">
            <p className="text-tractor-50">
              © {new Date().getFullYear()} El Iqueño SAC. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Alert Component */}
      {showAlert && (
        <Alert message={alertMessage} onClose={() => setShowAlert(false)} />
      )}
    </div>
  );
}

export default App;
