
import React, { useEffect, useRef } from 'react';

interface SplashScreenProps {
  onFinished: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinished }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      onFinished();
    };

    video.addEventListener('ended', handleVideoEnd);
    const timer = setTimeout(onFinished, 8000);

    video.play().catch(error => {
      console.warn("Splash video autoplay was prevented:", error);
      setTimeout(onFinished, 500);
    });

    return () => {
      clearTimeout(timer);
      video.removeEventListener('ended', handleVideoEnd);
    };
  }, [onFinished]);

  return (
    <div className="w-full h-full bg-black flex items-center justify-center">
      <video
        ref={videoRef}
        src="/videos/logo1.mp4"
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default SplashScreen;
