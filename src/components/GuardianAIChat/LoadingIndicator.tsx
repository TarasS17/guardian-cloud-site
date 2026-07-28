
import React from 'react';

interface LoadingIndicatorProps {
    specialistAvatar: string;
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ specialistAvatar }) => {
  return (
    <div className="flex items-end gap-3">
      <div className="flex-shrink-0 w-8 h-8 rounded-full shadow-lg">
        <img src={specialistAvatar} alt="Bot Avatar" className="w-full h-full rounded-full object-cover" />
      </div>
      <div className="px-4 py-3 rounded-2xl rounded-bl-none bg-slate-700 flex items-center space-x-1.5">
        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  );
};

export default LoadingIndicator;
