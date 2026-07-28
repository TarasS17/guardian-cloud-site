
import { languageOptions, videoData } from "./i18n";

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  isError?: boolean;
}

export type LanguageCode = keyof typeof languageOptions;

export enum FlowState {
  SPLASH_SCREEN,
  SELECTING_LANGUAGE,
  CEO_WELCOME,
  SHOWING_FORM,
  POST_FORM_CHAT,
  SUGGESTING_HANDOFF,
  // New states for the specialist flows
  CLOUD_INTRO,
  CLOUD_CHOICE,
  CLOUD_CHAT,
  OPS_CHAT,
  REFERRAL_CHAT,
}

export interface LeadData {
  firstName: string;
  lastName: string;
  country: string;
  city: string;
  state: string;
  businessSphere: string;
  otherSphere: string;
  companyName: string;
  position: string;
  website: string;
  email: string;
  phone: string;
}

export type Interest = 'Cloud' | 'Ops' | 'Referral' | 'General';

export type VideoKey = keyof typeof videoData;

export interface VideoPlayerState {
  isOpen: boolean;
  videoKey: VideoKey | null;
}

export type Specialist = 'ceo' | 'cloud' | 'ops' | 'referral';
