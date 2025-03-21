import React from 'react';
import { MessageCircle } from 'lucide-react';

const advisors = [
  {
    id: 1,
    name: 'Karla Albites la doña ',
    position: 'Asesora Técnica Senior',
    image: 'https://scontent.flim2-5.fna.fbcdn.net/v/t39.30808-6/464010589_8665536853507713_780792639015757338_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9eae26&_nc_eui2=AeGua0NXKA0XK2AJqsL6XqEUpRpKAHMPhD2lGkoAcw-EPZrHf44C8sq85uFFDT5qIPWintedtl_8Q5pqSQOWHEN2&_nc_ohc=A2e7AeRry_8Q7kNvgEk9-4J&_nc_oc=AdnCrfPsI49ECA_cLC85Ltrippu05CMr9BHfgXFXKy1CxSXHZUFZH8wiTdBMv5Zkfb797uFbU5P8QA7AMdFKbL2e&_nc_zt=23&_nc_ht=scontent.flim2-5.fna&_nc_gid=-MmRgZkYR3USb6rRNew-3g&oh=00_AYGJj90MPfa_CLWIpkckzicesyYgm_gjU_YB0PIibjHCmg&oe=67E0F0AC',
    whatsapp: '986202012',
    specialties: ['Maquinaria Industrial', 'Mantenimiento Preventivo', 'Diseño Técnico']
  },
  {
    id: 2,
    name: 'luis valle - gerente general ',
    position: 'Asesora Comercial',
    image: 'https://scontent.flim2-3.fna.fbcdn.net/v/t39.30808-6/481186828_1679767832616540_7617886849727677736_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEJFY5BN2cNHPUaZqgvBZG3n7Cz8Nsq_T2fsLPw2yr9PXH0bEh4BjXgPccKlEUQYyduXHBTB8wUc6W9rTuOlbdX&_nc_ohc=TjkmxR-ylL4Q7kNvgFdXt6R&_nc_oc=AdnWusRlQmXozaw79etUzbX450iP0DJ5u1TaiUJHS0GAYzZavkfpcpMOO93Wx7vYarG7wvze_Of5nAi3zwm3w6sG&_nc_zt=23&_nc_ht=scontent.flim2-3.fna&_nc_gid=CP2iBGZu3mNq5BY0VjDqvg&oh=00_AYFgoFWab52lGFpNAe5Hu3Qr08SETUiwqrWgH3cwX4ngTA&oe=67E3603B',
    whatsapp: '985928062',
    specialties: ['Ventas Corporativas', 'Proyectos Especiales', 'Servicio al Cliente']
  }
];

const Advisors: React.FC = () => {
  const handleWhatsAppClick = (phone: string) => {
    window.open(`https://wa.me/51${phone}`, '_blank');
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
      {advisors.map(advisor => (
        <div key={advisor.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <div className="relative">
            <img
              src={advisor.image}
              alt={advisor.name}
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h3 className="text-white text-2xl font-bold">{advisor.name}</h3>
              <p className="text-gray-200">{advisor.position}</p>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Especialidades:</h4>
              <div className="flex flex-wrap gap-2">
                {advisor.specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
            
            <button
              onClick={() => handleWhatsAppClick(advisor.whatsapp)}
              className="w-full bg-green-500 text-white py-3 px-4 rounded-lg hover:bg-green-600 transition duration-300 flex items-center justify-center"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Contactar por WhatsApp
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Advisors;
