'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import ModuleCard from '@/components/ModuleCard';
import { ModuleStatus } from '@/components/StatusBadge';

const HEAD: Record<string, { h: string; lead: string; sub: string }> = {
  en: {
    h: 'Platform modules',
    lead: 'This section holds the technical detail of the Guardian Cloud platform’s systems.',
    sub: 'Each module lists the functions we have actually implemented, the architecture behind them and our end-to-end test results. A maturity badge marks what is live and proven versus what is still in design — so you can judge for yourself.',
  },
  ru: {
    h: 'Модули платформы',
    lead: 'В этом блоке — техническая информация о системах платформы Guardian Cloud.',
    sub: 'В каждом модуле — функции, которые мы реально реализовали, их архитектура и результаты сквозного тестирования. Бейдж зрелости показывает, что уже работает и проверено, а что ещё в проекте, — чтобы вы судили сами.',
  },
  zh: {
    h: '平台模組',
    lead: '本區塊提供 Guardian Cloud 平台各系統的技術資訊。',
    sub: '每個模組都列出我們已實際實作的功能、其背後的架構，以及我們的端到端測試結果。成熟度標章標示出哪些已上線並經過驗證、哪些仍在設計階段——讓您自行判斷。',
  },
};

type Localized = { tagline: string; points: string[] };

interface Module {
  title: string;
  href: string;
  status: ModuleStatus;
  t: Record<string, Localized>;
}

const MODULES: Module[] = [
  {
    title: 'Sysadmin',
    href: '/sysadmin',
    status: 'live',
    t: {
      en: {
        tagline:
          'An AI system administrator for your server fleet — onboarding, audit, monitoring and risk-gated remediation.',
        points: [
          'One-command provisioning with billing gate and per-client service history',
          'Initial AI audit: 18 signals → structured risk report and action plan',
          'Continuous monitoring with prioritised recommendations',
          'Automated remediation, dry-run first, human approval on HIGH/CRITICAL',
        ],
      },
      ru: {
        tagline:
          'AI-системный администратор для вашего парка серверов — онбординг, аудит, мониторинг и remediation с контролем риска.',
        points: [
          'Подключение в один шаг с billing-гейтом и Историей обслуживания по каждому клиенту',
          'Начальный AI-аудит: 18 сигналов → структурированный отчёт о рисках и план действий',
          'Непрерывный мониторинг с приоритизированными рекомендациями',
          'Автоматический remediation: сначала dry-run, для HIGH/CRITICAL — подтверждение человеком',
        ],
      },
      zh: {
        tagline: '為您的伺服器叢集服務的 AI 系統管理員——上線部署、稽核、監控與風險分級的自動修復。',
        points: [
          '一鍵部署，內建計費門檻與各客戶的維運歷史',
          '首次 AI 稽核：18 項訊號 → 結構化風險報告與行動計畫',
          '持續監控，並提供分優先級的建議',
          '自動修復：預設先模擬運行，HIGH/CRITICAL 變更需人工核准',
        ],
      },
    },
  },
  {
    title: 'ITDR',
    href: '/itdr',
    status: 'live',
    t: {
      en: {
        tagline:
          'Intrusion detection & response plus malware defense — detection shields, an AI officer, doctrine and rules of engagement.',
        points: [
          'Three detection shields (root / credential / privilege abuse)',
          'AI officer reasoning → confirmed-threat verdict and containment',
          'Built-in malware defense: scheduled ClamAV, quarantine-not-delete',
          'Graduated, human-governed rules of engagement',
        ],
      },
      ru: {
        tagline:
          'Обнаружение вторжений и реагирование плюс защита от вредоносного ПО — щиты-детекторы, AI-офицер, доктрина и правила применения.',
        points: [
          'Три щита-детектора (root / учётные данные / эскалация привилегий)',
          'Рассуждение AI-офицера → вердикт «подтверждённая угроза» и сдерживание',
          'Встроенная защита от вредоносов: плановый ClamAV, карантин вместо удаления',
          'Ступенчатые правила применения под контролем человека',
        ],
      },
      zh: {
        tagline: '入侵偵測與回應，外加惡意軟體防禦——偵測護盾、AI 安全官、知識庫與交戰守則。',
        points: [
          '三重偵測護盾（root／憑證／權限濫用）',
          'AI 安全官推理 → 確認威脅判定與圍堵',
          '內建惡意軟體防禦：排程 ClamAV，隔離而非刪除',
          '分級、由人類掌控的交戰守則',
        ],
      },
    },
  },
  {
    title: 'Fleet of AI Models',
    href: '/ai-models',
    status: 'live',
    t: {
      en: {
        tagline:
          'The fleet of specialised models behind the platform — audit officer, ITDR officer, detection shields, cloud specialists, coding models and the doctrine embedder.',
        points: [
          'A model per job, self-hosted on GPU',
          'Cloud specialists validated at 97% / 94% / 91%',
          'Your telemetry and code stay inside your contour',
        ],
      },
      ru: {
        tagline:
          'Флот специализированных моделей за платформой — офицер аудита, офицер ITDR, щиты-детекторы, облачные специалисты, кодинг-модели и эмбеддер доктрины.',
        points: [
          'Своя модель под каждую задачу, на собственных GPU',
          'Облачные специалисты с точностью 97% / 94% / 91%',
          'Ваша телеметрия и код остаются внутри вашего контура',
        ],
      },
      zh: {
        tagline:
          '平台背後的專用模型艦隊——稽核安全官、ITDR 安全官、偵測護盾、雲端專家、編碼模型與知識庫嵌入模型。',
        points: [
          '每項任務專屬一個模型，自建於 GPU 上',
          '雲端專家經驗證達 97%／94%／91%',
          '您的遙測資料與程式碼留在您的安全邊界內',
        ],
      },
    },
  },
  {
    title: 'Doctrine',
    href: '/doctrine',
    status: 'live',
    t: {
      en: {
        tagline:
          'A living, governed knowledge base the AI reasons with — rules of engagement, playbooks, verified intel and incident lessons.',
        points: [
          'Two-stage semantic retrieval (recall + rerank)',
          'Layered, review-gated knowledge with an evolve loop',
          'Continuously enriched from open malware databases',
        ],
      },
      ru: {
        tagline:
          'Живая управляемая база знаний, с которой рассуждает AI — правила применения, плейбуки, проверенная разведка и уроки инцидентов.',
        points: [
          'Двухстадийный семантический поиск (recall + rerank)',
          'Слоистые знания с гейтингом по ревью и петлёй развития',
          'Непрерывное обогащение из открытых баз вредоносного ПО',
        ],
      },
      zh: {
        tagline:
          '一個持續演進、受治理的知識庫，供 AI 推理使用——交戰守則、應對手冊、經驗證的情報與事件教訓。',
        points: [
          '兩階段語意檢索（召回 + 重排）',
          '分層、需審核把關的知識，並具備演進迴路',
          '持續從開放惡意軟體資料庫擴充',
        ],
      },
    },
  },
  {
    title: 'Tariffs & Billing',
    href: '/billing',
    status: 'live',
    t: {
      en: {
        tagline: 'Subscription model and the billing gate that governs onboarding and capacity.',
        points: [
          'Per-server subscription with a hard billing gate on connect',
          'Tier model from single servers to data centres and white-label',
        ],
      },
      ru: {
        tagline: 'Модель подписки и billing-гейт, который управляет подключением и ёмкостью.',
        points: [
          'Подписка на каждый сервер с жёстким billing-гейтом при подключении',
          'Тарифная модель от одиночных серверов до дата-центров и white-label',
        ],
      },
      zh: {
        tagline: '訂閱模式，以及掌控上線與容量的計費門檻。',
        points: [
          '依伺服器計費的訂閱，連接時設有硬性計費門檻',
          '方案涵蓋從單台伺服器到資料中心與白標',
        ],
      },
    },
  },
];

/** Localized "Platform modules" grid for the Guardian Cloud hub. */
export default function CloudModules() {
  const { locale } = useLocale();
  const head = HEAD[locale] ?? HEAD.en;

  return (
    <section className="py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="mb-3 text-center text-3xl font-bold md:text-4xl">{head.h}</h2>
        <p className="mx-auto mb-2 max-w-3xl text-center text-lg text-white/80">{head.lead}</p>
        <p className="mx-auto mb-10 max-w-3xl text-center text-white/65">{head.sub}</p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((m) => {
            const t = m.t[locale] ?? m.t.en;
            return (
              <ModuleCard
                key={m.href}
                title={m.title}
                href={m.href}
                status={m.status}
                tagline={t.tagline}
                points={t.points}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
