
import { useState, useCallback } from 'react';
import { LanguageCode } from '../types';
import { langCodeMap } from '../i18n';

export const useSpeech = () => {
    const [isSpeaking, setIsSpeaking] = useState(false);

    const getVoices = (): Promise<SpeechSynthesisVoice[]> => {
        return new Promise((resolve) => {
            let voices = window.speechSynthesis.getVoices();
            if (voices.length > 0) {
                resolve(voices);
                return;
            }

            // Ждём события загрузки голосов
            window.speechSynthesis.onvoiceschanged = () => {
                voices = window.speechSynthesis.getVoices();
                resolve(voices);
            };
        });
    };

    const speak = useCallback(async (text: string, lang: LanguageCode, onEnd?: () => void) => {
        if (!window.speechSynthesis || !text) {
            if(onEnd) onEnd();
            return;
        }

        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        const targetLang = langCodeMap[lang] || 'en-US';
        utterance.lang = targetLang;

        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => {
            setIsSpeaking(false);
            if (onEnd) onEnd();
        };
        utterance.onerror = () => {
            setIsSpeaking(false);
            if (onEnd) onEnd();
        };

        // Ждём загрузки голосов
        const voices = await getVoices();

        // Ищем женский голос (все специалисты теперь женщины)
        let voice = voices.find(v => {
            const name = v.name.toLowerCase();
            const lang = v.lang.toLowerCase();
            return (lang.startsWith(targetLang.toLowerCase().split('-')[0]) &&
                   (name.includes('female') ||
                    name.includes('woman') ||
                    name.includes('milena') ||
                    name.includes('tatiana')));
        });

        // Если не нашли женский голос, берём любой для данного языка
        if (!voice) {
            voice = voices.find(v => v.lang.toLowerCase().startsWith(targetLang.toLowerCase().split('-')[0]));
        }

        if (voice) {
            utterance.voice = voice;
            console.log(`Selected voice (${targetLang}):`, voice.name);
        } else {
            console.warn(`No suitable voice found for ${targetLang}, using default`);
        }

        window.speechSynthesis.speak(utterance);
    }, []);

    const cancel = useCallback(() => {
        if (window.speechSynthesis) {
            setIsSpeaking(false);
            window.speechSynthesis.cancel();
        }
    }, []);

    return { speak, cancel, isSpeaking };
};
