import { useState, useRef, useEffect } from 'react';
import { translations, LanguageCode } from '../i18n';
import { Interest } from '../types';

export const classifyInterest = async (text: string): Promise<Interest> => {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'classifyInterest', text })
    });
    const json = await response.json();
    return json.interest as Interest;
  } catch (error) {
    console.error("Error classifying interest:", error);
    return 'General';
  }
};

export const matchQuestionToFAQ = async (userQuestion: string, faqList: {q: string, a: string}[]): Promise<number> => {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'matchFAQ', userQuestion, faqList })
    });
    const json = await response.json();
    const matchIndex = json.matchIndex;
    return matchIndex > 0 ? matchIndex - 1 : -1;
  } catch (error) {
    console.error("Error matching FAQ:", error);
    return -1;
  }
};

const useGeminiChat = (language: LanguageCode) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const historyRef = useRef<{ role: string; parts: { text: string }[] }[]>([]);

  // When language changes, we reset the history
  useEffect(() => {
    historyRef.current = [];
  }, [language]);

  const sendMessage = async (message: string, systemInstruction: string, onStreamUpdate: (chunk: string) => void, onError: (errorMessage: string) => void) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'chat',
          message,
          history: historyRef.current,
          systemInstruction: systemInstruction || ''
        })
      });

      if (!response.ok) {
        throw new Error(await response.text() || 'Failed to fetch');
      }

      const reader = response.body?.getReader();
      if (!reader) throw new Error('No response body');

      const decoder = new TextDecoder();
      let fullResponse = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        fullResponse += chunk;
        onStreamUpdate(chunk);
      }

      // Update history with the user message and the model's response
      historyRef.current.push(
        { role: 'user', parts: [{ text: message }] },
        { role: 'model', parts: [{ text: fullResponse }] }
      );

    } catch (e) {
      console.error("Error sending message:", e);
      onError(`An error occurred.`);
    } finally {
      setIsLoading(false);
    }
  };

  return { sendMessage, isLoading, error };
};

export default useGeminiChat;
