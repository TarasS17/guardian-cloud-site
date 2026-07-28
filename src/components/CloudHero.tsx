'use client';

import Link from 'next/link';
import { useLocale } from '@/lib/i18n/LocaleContext';
import VideoBackground from '@/components/VideoBackground';
import RegisterCta from '@/components/RegisterCta';


type Hero = { sub: string; body: string; cta1: string; cta2: string };

const HERO: Record<string, Hero> = {
  en: {
    sub: 'An autonomous AI operations & security team for your servers',
    body: 'One lightweight agent runs a full AI sysadmin and security contour on your infrastructure — audit, monitoring, remediation, intrusion response and malware defense — with a human kept in the loop on every change.',
    cta1: 'Explore the modules',
    cta2: 'Get started',
  },
  ru: {
    sub: 'Автономная AI-команда эксплуатации и безопасности для ваших серверов',
    body: 'Один лёгкий агент разворачивает полный AI-контур сисадминства и безопасности на вашей инфраструктуре — аудит, мониторинг, исправления, реакция на вторжения и защита от вирусов — с человеком в контуре на каждом изменении.',
    cta1: 'Изучить модули',
    cta2: 'Начать',
  },
  zh: {
    sub: '為您的伺服器而生的自主 AI 維運與安全團隊',
    body: '一個輕量化 Agent 即可在您的基礎設施上運行完整的 AI 系統管理與安全防禦鏈——稽核、監控、修復、入侵回應與惡意軟體防禦——且每一次變更都有人工參與把關。',
    cta1: '探索模組',
    cta2: '立即開始',
  },
  fr: {
    sub: 'Une équipe IA autonome d’exploitation et de sécurité pour vos serveurs',
    body: 'Un agent léger unique déploie sur votre infrastructure un contour complet d’administration système et de sécurité par IA — audit, supervision, remédiation, réponse aux intrusions et défense antimalware — avec un humain gardant la main sur chaque changement.',
    cta1: 'Découvrir les modules',
    cta2: 'Commencer',
  },
  de: {
    sub: 'Ein autonomes KI-Team für Betrieb und Sicherheit Ihrer Server',
    body: 'Ein einziger schlanker Agent betreibt auf Ihrer Infrastruktur einen vollständigen KI-Systemadministrations- und Sicherheitskontur — Audit, Monitoring, Behebung, Reaktion auf Eindringlinge und Malware-Abwehr — wobei ein Mensch jede Änderung im Blick behält.',
    cta1: 'Module entdecken',
    cta2: 'Jetzt starten',
  },
  es: {
    sub: 'Un equipo autónomo de IA para operaciones y seguridad de sus servidores',
    body: 'Un único agente ligero ejecuta en su infraestructura un contorno completo de administración de sistemas y seguridad con IA — auditoría, monitoreo, remediación, respuesta a intrusiones y defensa contra malware — con un humano supervisando cada cambio.',
    cta1: 'Explorar los módulos',
    cta2: 'Empezar ahora',
  },
  it: {
    sub: 'Un team IA autonomo per operazioni e sicurezza dei vostri server',
    body: 'Un unico agente leggero esegue sulla vostra infrastruttura un contorno completo di system administration e sicurezza basato su IA — audit, monitoraggio, remediation, risposta alle intrusioni e difesa dai malware — con un umano che supervisiona ogni modifica.',
    cta1: 'Esplora i moduli',
    cta2: 'Inizia ora',
  },
  ja: {
    sub: 'サーバーのための自律型AI運用・セキュリティチーム',
    body: '軽量なエージェントひとつで、インフラ上に完全なAIシステム管理・セキュリティ体制を構築します——監査、監視、修復、侵入対応、マルウェア防御まで。すべての変更は人間の確認を経て実行されます。',
    cta1: 'モジュールを見る',
    cta2: '今すぐ始める',
  },
  uk: {
    sub: 'Автономна AI-команда експлуатації та безпеки для ваших серверів',
    body: 'Один легкий агент розгортає повний AI-контур системного адміністрування та безпеки на вашій інфраструктурі — аудит, моніторинг, усунення проблем, реагування на вторгнення та захист від шкідливого ПЗ — з людиною в контурі на кожній зміні.',
    cta1: 'Переглянути модулі',
    cta2: 'Почати',
  },
  sr: {
    sub: 'Autonomni AI tim za operacije i bezbednost vaših servera',
    body: 'Jedan lagani agent pokreće kompletan AI sistem administracije i bezbednosti na vašoj infrastrukturi — reviziju, monitoring, otklanjanje problema, odgovor na upade i odbranu od malvera — uz čoveka koji nadgleda svaku promenu.',
    cta1: 'Istražite module',
    cta2: 'Započnite',
  },
  pt: {
    sub: 'Uma equipa autónoma de IA para operações e segurança dos seus servidores',
    body: 'Um único agente leve executa na sua infraestrutura um contorno completo de administração de sistemas e segurança com IA — auditoria, monitorização, remediação, resposta a intrusões e defesa contra malware — com um humano a supervisionar cada alteração.',
    cta1: 'Explorar os módulos',
    cta2: 'Começar agora',
  },
  hi: {
    sub: 'आपके सर्वर के लिए एक स्वायत्त AI संचालन और सुरक्षा टीम',
    body: 'एक हल्का एजेंट आपके इंफ्रास्ट्रक्चर पर पूरा AI सिसएडमिन और सुरक्षा कॉन्टूर चलाता है — ऑडिट, मॉनिटरिंग, समाधान, घुसपैठ प्रतिक्रिया और मैलवेयर रक्षा — हर बदलाव पर इंसान की निगरानी के साथ।',
    cta1: 'मॉड्यूल देखें',
    cta2: 'शुरू करें',
  },
  tr: {
    sub: 'Sunucularınız için otonom bir AI operasyon ve güvenlik ekibi',
    body: 'Tek bir hafif ajan, altyapınızda tam bir AI sistem yönetimi ve güvenlik konturu çalıştırır — denetim, izleme, düzeltme, saldırı müdahalesi ve kötü amaçlı yazılım savunması — her değişiklikte insan gözetimi korunarak.',
    cta1: 'Modülleri keşfedin',
    cta2: 'Hemen başlayın',
  },
  ar: {
    sub: 'فريق ذكاء اصطناعي مستقل للتشغيل والأمن لخوادمك',
    body: 'يشغّل عميل واحد خفيف الوزن كنتورًا كاملاً لإدارة النظام والأمن بالذكاء الاصطناعي على بنيتك التحتية — التدقيق والمراقبة والمعالجة والاستجابة للاختراقات والدفاع ضد البرمجيات الخبيثة — مع بقاء إنسان مطّلع على كل تغيير.',
    cta1: 'استكشف الوحدات',
    cta2: 'ابدأ الآن',
  },
  el: {
    sub: 'Μια αυτόνομη ομάδα AI για λειτουργία και ασφάλεια των διακομιστών σας',
    body: 'Ένας ελαφρύς agent εκτελεί στην υποδομή σας ένα πλήρες περίγραμμα διαχείρισης συστημάτων και ασφάλειας βασισμένο σε AI — έλεγχο, παρακολούθηση, αποκατάσταση, απόκριση σε εισβολές και άμυνα κατά κακόβουλου λογισμικού — με άνθρωπο να επιβλέπει κάθε αλλαγή.',
    cta1: 'Εξερευνήστε τα modules',
    cta2: 'Ξεκινήστε τώρα',
  },
};

/** Localized hub hero for /cloud (en / ru / zh). Brand title stays as-is. */
export default function CloudHero() {
  const { locale } = useLocale();
  const t = HERO[locale] ?? HERO.en;

  return (
    <VideoBackground videoSrc="/videos/cloud_h.mp4" loop={false} className="flex min-h-[62vh] items-center">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="gradient-text mb-5 text-5xl font-bold md:text-7xl">Guardian Cloud</h1>
        <p className="mx-auto mb-4 max-w-3xl text-2xl font-semibold text-cyan-300">{t.sub}</p>
        <p className="mx-auto mb-10 max-w-3xl text-lg text-white/80">{t.body}</p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/sysadmin"
            className="rounded-lg bg-cyan-500 px-8 py-4 text-lg font-bold text-gray-900 transition-colors hover:bg-cyan-400"
          >
            {t.cta1}
          </Link>
          <RegisterCta className="rounded-lg border border-cyan-500 px-8 py-4 text-lg font-bold text-cyan-300 transition-colors hover:bg-cyan-500/10">
            {t.cta2}
          </RegisterCta>
        </div>
      </div>
    </VideoBackground>
  );
}
