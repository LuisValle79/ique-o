import React from 'react';
import { X, Download, ChevronRight } from 'lucide-react';
import { jsPDF } from 'jspdf';

interface ProductModalProps {
  product: {
    name: string;
    description: string;
    image: string;
    price: number;
    specifications: {
      label: string;
      value: string;
    }[];
    features: string[];
    dimensions: {
      width: number;
      height: number;
      depth: number;
      weight: number;
    };
  } | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Añadir título
    doc.setFontSize(20);
    doc.text(product.name, 20, 20);
    
    // Añadir imagen
    doc.addImage(product.image, 'JPEG', 20, 30, 170, 100);
    
    // Añadir descripción
    doc.setFontSize(12);
    doc.text('Descripción:', 20, 140);
    doc.setFontSize(10);
    const descriptionLines = doc.splitTextToSize(product.description, 170);
    doc.text(descriptionLines, 20, 150);
    
    // Añadir especificaciones
    doc.setFontSize(12);
    doc.text('Especificaciones:', 20, 170);
    doc.setFontSize(10);
    product.specifications.forEach((spec, index) => {
      doc.text(`${spec.label}: ${spec.value}`, 20, 180 + (index * 10));
    });
    
    // Añadir precio
    doc.setFontSize(12);
    doc.text(`Precio: S/. ${product.price.toLocaleString()}`, 20, 240);
    
    // Guardar PDF
    doc.save(`${product.name.toLowerCase().replace(/ /g, '_')}.pdf`);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg w-full max-w-4xl">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-tractor-300">{product.name}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Imagen */}
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[300px] object-cover rounded-lg shadow-lg"
              />
              <div className="mt-4 flex justify-between items-center">
                <span className="text-2xl font-bold text-tractor-200">
                  S/. {product.price.toLocaleString()}
                </span>
                <button
                  onClick={generatePDF}
                  className="bg-tractor-200 text-white px-4 py-2 rounded-lg flex items-center hover:bg-tractor-300 transition duration-300"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Descargar Ficha
                </button>
              </div>
            </div>

            {/* Detalles */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Descripción</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Especificaciones</h3>
                <div className="grid grid-cols-2 gap-4">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-sm text-gray-500">{spec.label}</span>
                      <p className="font-medium text-gray-900">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Características</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <ChevronRight className="h-4 w-4 text-tractor-200 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Dimensiones</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="text-sm text-gray-500">Ancho</span>
                    <p className="font-medium text-gray-900">{product.dimensions.width} cm</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="text-sm text-gray-500">Alto</span>
                    <p className="font-medium text-gray-900">{product.dimensions.height} cm</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="text-sm text-gray-500">Profundidad</span>
                    <p className="font-medium text-gray-900">{product.dimensions.depth} cm</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="text-sm text-gray-500">Peso</span>
                    <p className="font-medium text-gray-900">{product.dimensions.weight} kg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal; 