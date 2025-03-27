import React from 'react';
import { MessageCircle } from 'lucide-react';

const advisors = [
  {
    id: 1,
    name: 'Karla Albites',
    position: 'Asistente Administrativo , contable y ventas',
    image: 'https://scontent.flim2-2.fna.fbcdn.net/v/t1.6435-9/36504850_1746462018769059_3838715436996755456_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeGkinGIeflGVeZir2sXUewf5zwtIDi3SQrnPC0gOLdJChkZUbQCrP-z6TSxpAFdrHtMba8xFsd6GFckgCWytFXh&_nc_ohc=PHlnWAg7tFQQ7kNvgEc6u2c&_nc_oc=AdkiO54aIS2mSMLNvSLig2q6mum6zADs0_NAbmBmNI2Iz5rRed7msKB7J0wUpVUqrwWTYADiXt6QpSYLBR6H6IRp&_nc_zt=23&_nc_ht=scontent.flim2-2.fna&_nc_gid=rsW1PbjTiG6UR_rLiRBrUg&oh=00_AYFdTHi6iIv2C1a44JJPbU9H119b-DvLUlrUrGMrtbByUw&oe=680C3440',
    whatsapp: '958840599',
    specialties: ['Ventas Corporativas', 'Asesoria de Productos Agricolas', 'Servicio al Cliente']
  },
  {
    id: 2,
    name: 'Veronica Meneses',
    position: 'Administradora',
    image: 'https://scontent.flim2-5.fna.fbcdn.net/v/t1.6435-9/49612756_1975355469167145_3073386607408054272_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeGHHPIWB9ZedhMYYygrVjHis_M2AeNgFWaz8zYB42AVZqe7PNfckhgG74z1ZXl5kB7mO_i4DMg1JRVvakQQLjLI&_nc_ohc=rqScLARprGUQ7kNvgFzEl_t&_nc_oc=Adl7tPpKlUCa0W7wxXuDIKRMTE5jFs9J2BMKwOJPqfL6XmC8TXuOBpQPHLg3k4yT_LGtC3RJ6ROp2nI0dJW42LGv&_nc_zt=23&_nc_ht=scontent.flim2-5.fna&_nc_gid=R6adXHbM15Tu-SZF-eGZkw&oh=00_AYFRkoXGppHcU_rSTLAL6K0oU9TeH_K7eiDmdvQ5xyk9Tg&oe=680C0BC8',
    whatsapp: '963792905',
    specialties: ['Maquinarias Agricolas', 'Proyectos Especiales', 'Servicio al Cliente']
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
