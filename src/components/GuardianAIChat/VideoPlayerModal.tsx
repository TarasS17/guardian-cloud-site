
import React, { useState } from 'react';
import { LanguageCode, VideoKey } from './types';
import { translations, videoData, languageOptions } from './i18n';
import { PlayCircleIcon, BackArrowIcon } from './Icons';

interface VideoPlayerModalProps {
  initialVideoKey: VideoKey | null;
  language: LanguageCode;
  onClose: () => void;
}

const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({ initialVideoKey, language, onClose }) => {
  const [selectedVideo, setSelectedVideo] = useState<VideoKey | null>(initialVideoKey);
  const t = translations[language];

  const handleSelectVideo = (key: VideoKey) => {
    setSelectedVideo(key);
  };

  const renderVideoSelection = () => (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-white">{t.videoPlayer.title}</h2>
      <div className="grid grid-cols-2 gap-4">
        {(Object.keys(videoData) as VideoKey[]).filter(k => k !== 'logo' && k !== 'cloud_intro').map(key => (
          <button
            key={key}
            onClick={() => handleSelectVideo(key as VideoKey)}
            className="group bg-slate-700 rounded-lg p-4 text-center text-white transition-all hover:bg-slate-600"
          >
            <PlayCircleIcon className="w-12 h-12 mx-auto mb-2 text-slate-400 group-hover:text-blue-400 transition-colors" />
            <span className="font-semibold">{videoData[key as VideoKey].title}</span>
          </button>
        ))}
      </div>
    </div>
  );

  const renderVideoPlayer = () => {
    if (!selectedVideo) return null;
    const videoInfo = videoData[selectedVideo];
    const videoFileName = videoInfo.path.split('/').pop()?.replace('.mp4', '');
    const subtitleSrc = `/videos/subtitles/${videoFileName}_${language}.vtt`;

    return (
      <div className="w-full h-full flex flex-col bg-black">
        <div className="p-2 flex items-center justify-between bg-slate-800">
            <button onClick={() => setSelectedVideo(null)} className="flex items-center gap-2 text-slate-300 hover:text-white">
                <BackArrowIcon className="w-5 h-5" />
                <span>{t.videoPlayer.back}</span>
            </button>
        </div>
        <div className="flex-grow flex items-center justify-center">
            <video
                key={videoInfo.path}
                className="w-full h-auto"
                controls
                autoPlay
                muted
                crossOrigin="anonymous"
                onEnded={onClose}
            >
                <source src={videoInfo.path} type="video/mp4" />
                <track
                    label={languageOptions[language]}
                    kind="subtitles"
                    srcLang={language}
                    src={subtitleSrc}
                    default
                />
                Your browser does not support the video tag.
            </video>
        </div>
      </div>
    );
  };

  return (
    <div className="absolute inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center fade-in-up">
      <div className="relative w-full h-full max-w-4xl max-h-[90vh] bg-slate-800 rounded-lg shadow-2xl">
        <button onClick={onClose} className="absolute top-2 right-2 text-slate-400 hover:text-white z-10">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        {selectedVideo ? renderVideoPlayer() : renderVideoSelection()}
      </div>
    </div>
  );
};

export default VideoPlayerModal;
