import React from 'react';

const Map: React.FC = () => {
  return (
    <div className="w-full h-[300px] rounded-lg overflow-hidden shadow-sm">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.3261440359087!2d-75.7351884!3d-14.0676697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9110e2ba6c1c1bb7%3A0x9c2e2161f1c8f0a1!2sIca%2C%20Peru!5e0!3m2!1sen!2s!4v1645000000000!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;