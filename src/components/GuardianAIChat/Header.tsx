
import React from 'react';
import { languageOptions, LanguageCode } from './i18n';
import { SpeakerOnIcon, SpeakerOffIcon, CloseIcon } from './Icons';

interface HeaderProps {
  currentLanguage: LanguageCode;
  onLanguageChange: (newLang: LanguageCode) => void;
  isSpeechEnabled: boolean;
  onToggleSpeech: () => void;
  onClose: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentLanguage, onLanguageChange, isSpeechEnabled, onToggleSpeech, onClose }) => {
  return (
    <header className="p-3 border-b border-slate-700 shadow-lg bg-slate-900/50 backdrop-blur-sm flex justify-between items-center z-10 flex-shrink-0">
      <h1 className="text-md font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        GuardianAI Assistant
      </h1>
      <div className="flex items-center gap-3">
        <button 
          onClick={onToggleSpeech} 
          className="text-slate-400 hover:text-white transition-colors"
          aria-label={isSpeechEnabled ? "Disable speech" : "Enable speech"}
        >
          {isSpeechEnabled ? <SpeakerOnIcon className="w-5 h-5" /> : <SpeakerOffIcon className="w-5 h-5" />}
        </button>
        <div className="relative">
          <select
            value={currentLanguage}
            onChange={(e) => onLanguageChange(e.target.value as LanguageCode)}
            className="bg-slate-800 border border-slate-600 rounded-md pl-2 pr-7 py-1 text-xs text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer"
            aria-label="Select language"
          >
            {Object.entries(languageOptions).map(([code, name]) => (
              <option key={code} value={code}>{name}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="text-slate-400 hover:text-white transition-colors"
          aria-label="Close chat"
        >
          <CloseIcon className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;
