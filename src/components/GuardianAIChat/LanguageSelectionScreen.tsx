
import React from 'react';
import { languageOptions, LanguageCode } from './i18n';

interface LanguageSelectionScreenProps {
  onLanguageSelect: (lang: LanguageCode) => void;
}

const LanguageSelectionScreen: React.FC<LanguageSelectionScreenProps> = ({ onLanguageSelect }) => {
  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-gray-900 to-slate-900 text-white overflow-hidden">
      <div className="text-center p-4 flex-shrink-0">
        <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-1">
          Welcome to GuardianAI
        </h1>
        <p className="text-sm text-slate-300">Choose Your Language</p>
      </div>
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <div className="grid grid-cols-2 gap-3">
          {(Object.keys(languageOptions) as LanguageCode[]).map((code) => (
            <button
              key={code}
              onClick={() => onLanguageSelect(code)}
              className="p-3 bg-slate-800 rounded-lg shadow-lg text-center text-slate-200 font-semibold text-sm transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
            >
              {languageOptions[code]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelectionScreen;
