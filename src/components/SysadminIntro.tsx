'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import VideoBackground from '@/components/VideoBackground';
import StatusBadge from '@/components/StatusBadge';

type Intro = { sub: string; paras: string[] };

const INTRO: Record<string, Intro> = {
  en: {
    sub: 'your AI system administrator',
    paras: [
      'Sysadmin takes full charge of your servers: it connects them, runs a complete audit, watches their state around the clock, and fixes on its own whatever can be fixed at the level you set for it — and for everything else, it asks for your decision.',
      'This is not another monitor that pings you that “something broke.” It understands the cause, proposes a fix and — with your permission — carries it out. Routine, on-call rotations and 3 a.m. alerts stop being your pain.',
      'More than that, it can modernize your system itself: with your approval it uses every tool on the platform, makes the changes, runs the tests and puts the update into production.',
      'And if it detects a cyber-attack or a virus, it calls the ITDR module on its own — which automatically blocks and repels the attack or eliminates the virus in your system.',
      'The final word always stays with you: anything risky is done only after your approval.',
    ],
  },
  ru: {
    sub: 'ваш AI-системный администратор',
    paras: [
      'Sysadmin берёт на себя ваши серверы целиком: подключает, проводит полный аудит, круглосуточно следит за состоянием и сам устраняет то, что можно устранить на том уровне, который вы ему зададите, — а по остальному запрашивает ваше решение.',
      'Это не ещё один монитор, который шлёт «что-то сломалось». Он понимает причину, предлагает решение и — с вашего разрешения — выполняет его. Рутина, дежурства и ночные тревоги перестают быть вашей болью.',
      'Более того, он может сам модернизировать вашу систему: с вашего одобрения он задействует все инструменты платформы, вносит изменения, прогоняет тесты и запускает обновление в эксплуатацию.',
      'А если он обнаружит кибератаку или вирус — он сам вызывает модуль ITDR, который в автоматическом режиме блокирует и отражает атаку или уничтожает вирус в системе.',
      'Последнее слово всегда за вами: всё рискованное делается только после вашего одобрения.',
    ],
  },
  zh: {
    sub: '您的 AI 智慧系統管理員',
    paras: [
      'Sysadmin 模組能全權接管您的伺服器：從串聯部署、全方位安全稽核，到 24 小時不間斷的狀態監控。在您授權的權限範圍內，它能自動修復所有可處理的故障；而超出範圍的複雜問題，則會即時請求您的決策。',
      '這絕非另一個只會發送「系統出錯」通知的傳統監控工具。它能精準洞察問題根源、提供解決方案，並在獲得您的許可後直接執行修復。從此，繁瑣的日常庶務、輪班值日與深夜的告警焦慮將不再是您的痛苦。',
      '更重要的是，它具備自主升級系統的能力：在獲得您的批准後，它會調動平台內的所有工具鏈、執行變更、跑完完整測試，並將更新正式上線投入運行。',
      '一旦偵測到網路攻擊或惡意病毒，它會自動觸發並調用 ITDR（身分威脅偵測與回應）模組，以全自動化模式進行精準攔截、擊退防禦，並徹底清除系統中的病毒。',
      '最終決定權始終在您手中：任何高風險的操作，均必須在取得您的明確授權後才會執行。',
    ],
  },
};

/** Localized hero + intro for the Sysadmin module page (en / ru / zh). */
export default function SysadminIntro() {
  const { locale } = useLocale();
  const t = INTRO[locale] ?? INTRO.en;

  return (
    <>
      <VideoBackground
        videoSrc="/videos/sysadmin_hero.mp4"
        loop={false}
        objectFit="contain"
        className="flex min-h-[68vh] items-center border-b border-white/5"
      >
        <div className="container mx-auto max-w-5xl px-4 py-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400/80">
            Guardian Cloud · Module
          </p>
          <div className="mb-4 flex flex-wrap items-center justify-center gap-4">
            <h1 className="gradient-text text-5xl font-bold md:text-7xl">Sysadmin</h1>
            <StatusBadge status="live" />
          </div>
          <p className="text-2xl font-semibold text-cyan-300">{t.sub}</p>
        </div>
      </VideoBackground>

      <section className="border-b border-white/5 py-16">
        <div className="container mx-auto max-w-4xl space-y-6 px-4 text-lg leading-relaxed text-white/80">
          {t.paras.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>
    </>
  );
}
