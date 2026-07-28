
import React, { useState, useCallback, useEffect } from 'react';
import { ChatMessage, LanguageCode, FlowState, LeadData, VideoPlayerState, Specialist, Interest } from './types';
import { translations, getSpecialistData } from './i18n';
import useGeminiChat, { matchQuestionToFAQ } from './hooks/useGeminiChat';
import { useSpeech } from './hooks/useSpeech';
import ChatWindow from './ChatWindow';
import Header from './Header';
import LanguageSelectionScreen from './LanguageSelectionScreen';
import LeadCaptureForm from './LeadCaptureForm';
import VideoPlayerModal from './VideoPlayerModal';
import SplashScreen from './SplashScreen';
import CloudIntroScreen from './CloudIntroScreen';
import { submitLead } from './services/api';

interface AppProps {
  onClose: () => void;
}

const App: React.FC<AppProps> = ({ onClose }) => {
  const [flowState, setFlowState] = useState<FlowState>(FlowState.SELECTING_LANGUAGE);
  const [language, setLanguage] = useState<LanguageCode>('ru');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isSpeechEnabled, setIsSpeechEnabled] = useState(true);
  const [leadData, setLeadData] = useState<LeadData | null>(null);
  const [showHandoffButton, setShowHandoffButton] = useState<Interest | null>(null);
  const [showVideoOfferButton, setShowVideoOfferButton] = useState(false);
  const [showSpecialistSelectButtons, setShowSpecialistSelectButtons] = useState(false);
  const [videoPlayerState, setVideoPlayerState] = useState<VideoPlayerState>({ isOpen: false, videoKey: null });
  const [currentSpecialist, setCurrentSpecialist] = useState<Specialist>('ceo');
  
  const { sendMessage, isLoading } = useGeminiChat(language);
  const { speak, cancel, isSpeaking } = useSpeech();

  // Останавливаем речь при закрытии компонента
  useEffect(() => {
    return () => {
      cancel();
    };
  }, [cancel]);

  const addMessage = (text: string, sender: 'bot' | 'user', onSpeakEnd?: () => void) => {
    const newMessage: ChatMessage = { id: `${sender}-${Date.now()}`, text, sender };
    setMessages(prev => [...prev, newMessage]);
    if (sender === 'bot' && isSpeechEnabled) {
      // Все специалисты женщины - используем женский голос
      speak(text, language, onSpeakEnd);
    } else if (onSpeakEnd) {
      onSpeakEnd();
    }
  };

  useEffect(() => {
    if (flowState === FlowState.CEO_WELCOME) {
      cancel();
      const welcomeMsg = translations[language].ceoWelcome;
      addMessage(welcomeMsg, 'bot', () => setTimeout(() => setFlowState(FlowState.SHOWING_FORM), 500));
    }
  }, [flowState, language, isSpeechEnabled]);

  const handleInitialLanguageSelect = (selectedLang: LanguageCode) => {
    setLanguage(selectedLang);
    setFlowState(FlowState.CEO_WELCOME);
  };

  const handleFormSubmit = async (data: LeadData) => {
    setLeadData(data);
    try { await submitLead(data); } catch (error) { console.error("Failed to submit lead:", error); }
    setFlowState(FlowState.POST_FORM_CHAT);
    const postFormMsg = translations[language].postFormMessage(data.firstName);
    addMessage(postFormMsg, 'bot', () => {
      // После приветствия показываем кнопки
      setShowVideoOfferButton(true);
    });
  };

  const startSpecialistChat = (specialist: Specialist) => {
    setCurrentSpecialist(specialist);
    setMessages([]);
    const specialistData = getSpecialistData(language, specialist);
    const greeting = specialistData.greeting(leadData?.firstName || 'there');
    addMessage(greeting, 'bot');
    const chatState = specialist === 'cloud' ? FlowState.CLOUD_CHAT : specialist === 'ops' ? FlowState.OPS_CHAT : FlowState.REFERRAL_CHAT;
    setFlowState(chatState);
  };

  const handleHandoff = (interest: Interest) => {
    setShowHandoffButton(null);
    if (interest === 'Cloud') {
      setFlowState(FlowState.CLOUD_INTRO);
    } else if (interest === 'Ops') {
      startSpecialistChat('ops');
    } else if (interest === 'Referral') {
      startSpecialistChat('referral');
    }
  };

  const handleSendMessage = useCallback(async (inputText: string) => {
    if (!inputText.trim() || isLoading) return;
    cancel();
    addMessage(inputText, 'user');
    setShowVideoOfferButton(false);
    setShowSpecialistSelectButtons(false);
    setShowHandoffButton(null);

    // Для всех специалистов используем Gemini
    const specialistData = getSpecialistData(language, currentSpecialist);
    const faqMatchIndex = specialistData.faq && specialistData.faq.length > 0
      ? await matchQuestionToFAQ(inputText, specialistData.faq)
      : -1;

    if (faqMatchIndex !== -1) {
      addMessage(specialistData.faq[faqMatchIndex].a, 'bot');
    } else {
      const botMessageId = `bot-${Date.now()}`;
      setMessages(prev => [...prev, { id: botMessageId, text: '', sender: 'bot' }]);
      let fullResponse = '';
      
      // Get specialized system instruction if it exists
      const systemInstruction = specialistData.systemInstruction || translations[language]?.systemInstruction || translations.en.systemInstruction || '';

      await sendMessage(inputText, systemInstruction,
        (chunk) => {
          fullResponse += chunk;
          setMessages(prev => prev.map(msg => msg.id === botMessageId ? { ...msg, text: msg.text + chunk } : msg));
        },
        (err) => setMessages(prev => prev.map(msg => msg.id === botMessageId ? { ...msg, text: err, isError: true } : msg))
      );
      // После завершения streaming произносим полный ответ
      if (fullResponse && isSpeechEnabled) {
        speak(fullResponse, language);
      }
    }
  }, [isLoading, cancel, language, currentSpecialist, isSpeechEnabled, speak]);
  
  const handleVideoModalClose = () => {
    setVideoPlayerState({ isOpen: false, videoKey: null });
    addMessage(translations[language].postVideoFollowUp, 'bot');
    setFlowState(FlowState.POST_FORM_CHAT);
  };

  const specialistData = getSpecialistData(language, currentSpecialist);

  const renderContent = () => {
    const mainChatContent = (
      <>
        <Header currentLanguage={language} onLanguageChange={() => {}} isSpeechEnabled={isSpeechEnabled} onToggleSpeech={() => setIsSpeechEnabled(p => !p)} onClose={onClose} />
        <ChatWindow messages={messages} onSendMessage={handleSendMessage} isLoading={isLoading} isSpeaking={isSpeaking} placeholder={translations[language].placeholder} language={language} specialist={specialistData} />
        {(showHandoffButton || showVideoOfferButton || showSpecialistSelectButtons) && (
          <div className="p-4 border-t border-slate-700 bg-slate-900/70 space-y-2">
            {showHandoffButton && <button onClick={() => handleHandoff(showHandoffButton!)} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg transition-colors">{translations[language].buttons.switchToSpecialist}</button>}
            {showVideoOfferButton && !showSpecialistSelectButtons && (
              <>
                <button onClick={() => setVideoPlayerState({ isOpen: true, videoKey: null })} className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-lg transition-colors">{translations[language].buttons.watchVideos}</button>
                <button onClick={() => setShowSpecialistSelectButtons(true)} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg transition-colors">{translations[language].buttons.talkToSpecialist}</button>
              </>
            )}
            {showSpecialistSelectButtons && (
              <div className="space-y-2">
                <button onClick={() => { startSpecialistChat('cloud'); setShowSpecialistSelectButtons(false); }} className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-lg transition-colors">{translations[language].buttons.selectGuardianCloud}</button>
                <button onClick={() => { startSpecialistChat('ops'); setShowSpecialistSelectButtons(false); }} className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-lg transition-colors">{translations[language].buttons.selectGuardianOps}</button>
                <button onClick={() => { startSpecialistChat('referral'); setShowSpecialistSelectButtons(false); }} className="w-full bg-pink-600 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-lg transition-colors">{translations[language].buttons.selectReferralProgram}</button>
              </div>
            )}
          </div>
        )}
      </>
    );

    switch (flowState) {
      case FlowState.SPLASH_SCREEN:
        return <SplashScreen onFinished={() => setFlowState(FlowState.SELECTING_LANGUAGE)} />;
      case FlowState.SELECTING_LANGUAGE:
        return <LanguageSelectionScreen onLanguageSelect={handleInitialLanguageSelect} />;
      case FlowState.SHOWING_FORM:
        return <LeadCaptureForm language={language} onSubmit={handleFormSubmit} />;
      case FlowState.CLOUD_INTRO:
        return <CloudIntroScreen onChoice={(choice) => choice === 'chat' ? startSpecialistChat('cloud') : setFlowState(FlowState.CLOUD_CHOICE)} />;
      case FlowState.CLOUD_CHOICE:
         return <VideoPlayerModal initialVideoKey="cloud_intro" language={language} onClose={() => startSpecialistChat('cloud')} />;
      default:
        return mainChatContent;
    }
  };

  return (
    <div className="flex flex-col h-full w-full bg-gradient-to-b from-gray-900 to-slate-900 rounded-xl shadow-2xl overflow-hidden">
      {renderContent()}
      {videoPlayerState.isOpen && !videoPlayerState.videoKey && (
        <VideoPlayerModal initialVideoKey={null} language={language} onClose={handleVideoModalClose} />
      )}
    </div>
  );
};

export default App;
