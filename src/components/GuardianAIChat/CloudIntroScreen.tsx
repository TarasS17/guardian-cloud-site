
import React, { useEffect, useRef } from 'react';
import { videoData, translations } from './i18n';

interface CloudIntroScreenProps {
  onChoice: (choice: 'video' | 'chat') => void;
}

const CloudIntroScreen: React.FC<CloudIntroScreenProps> = ({ onChoice }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      setShowButtons(true);
    };

    video.addEventListener('ended', handleVideoEnd);
    video.play().catch(e => {
        console.warn("Cloud intro video autoplay failed", e);
        setShowButtons(true);
    });

    return () => video.removeEventListener('ended', handleVideoEnd);
  }, []);

  const t = translations['ru'].buttons;

  return (
    <div className="w-full h-full bg-black flex flex-col items-center justify-center relative">
      <video
        ref={videoRef}
        src={videoData.logo.path}
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover absolute inset-0"
      />
      {showButtons && (
        <div className="z-10 flex flex-col gap-4 p-8 bg-black/50 rounded-lg fade-in-up">
          <button 
            onClick={() => onChoice('video')}
            className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-6 rounded-lg transition-colors text-lg"
          >
            {t.learnTechnology}
          </button>
          <button 
            onClick={() => onChoice('chat')}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg transition-colors text-lg"
          >
            {t.startChat}
          </button>
        </div>
      )}
    </div>
  );
};

export default CloudIntroScreen;
