import React from 'react';
import { Play, X } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: 'Proceso de Fabricación',
    description: 'Testimonio de cliente sobre nuestro proceso de fabricación de maquinaria industrial.',
    thumbnail: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/your-video-id-1'
  },
  {
    id: 2,
    title: 'Calidad en Servicio',
    description: 'Cliente compartiendo su experiencia con nuestro servicio de mantenimiento.',
    thumbnail: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/your-video-id-2'
  },
  {
    id: 3,
    title: 'Innovación Tecnológica',
    description: 'Demostración de nuestras últimas innovaciones en maquinaria industrial.',
    thumbnail: 'https://images.unsplash.com/photo-1565034946487-077786996e27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.youtube.com/embed/your-video-id-3'
  }
];

const VideoGallery: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = React.useState<number | null>(null);

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-8">
        {videos.map(video => (
          <div 
            key={video.id} 
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <div className="relative">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover"
              />
              <button
                onClick={() => setSelectedVideo(video.id)}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity hover:bg-opacity-40"
              >
                <Play className="h-12 w-12 text-white" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {video.title}
              </h3>
              <p className="text-gray-600">
                {video.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl">
            <div className="p-4 border-b">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">
                  {videos.find(v => v.id === selectedVideo)?.title}
                </h3>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={videos.find(v => v.id === selectedVideo)?.videoUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;