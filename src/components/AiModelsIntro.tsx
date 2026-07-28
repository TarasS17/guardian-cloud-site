'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import VideoBackground from '@/components/VideoBackground';
import StatusBadge from '@/components/StatusBadge';

type Intro = { sub: string; paras: string[] };

const INTRO: Record<string, Intro> = {
  en: {
    sub: 'specialised models, self-hosted on GPU',
    paras: [
      'Guardian doesn’t call one general model for everything. It runs a fleet of specialised models — each trained or tuned for a single job — self-hosted on GPU in your region, so your data never leaves the contour.',
      'Detection is fast, reasoning is deep, command generation is platform-aware, and source-code work is kept apart from system administration. The right model answers each question — and a frontier cloud model is consulted only on the highest-risk changes.',
      'Every model is validated on real GPUs before it touches a server — and keeps learning through our daily briefings.',
    ],
  },
  ru: {
    sub: 'специализированные модели на собственных GPU',
    paras: [
      'Guardian не зовёт одну универсальную модель на всё. Он держит парк специализированных моделей — каждая обучена или дотюнена под одну задачу — на собственных GPU в вашем регионе, поэтому ваши данные не покидают контур.',
      'Детекция быстрая, reasoning глубокий, генерация команд знает вашу платформу, а работа с исходным кодом отделена от системного администрирования. На каждый вопрос отвечает своя модель — а флагманская облачная модель подключается только на изменениях наивысшего риска.',
      'Каждая модель проверена на реальных GPU, прежде чем коснуться сервера — и постоянно учится на наших ежедневных брифингах.',
    ],
  },
  zh: {
    sub: '自託管於 GPU 的專業化模型',
    paras: [
      'Guardian 不會用單一通用模型處理一切。它運行一支專業化模型艦隊——每一個模型都針對單一任務訓練或微調——自託管於您所在區域的 GPU 上，您的資料絕不離開防禦邊界。',
      '偵測求快、推理求深、指令生成貼合您的平台，而原始碼工作則與系統管理分離。每個問題都由專屬模型作答——僅在風險最高的變更上，才會引入頂尖雲端模型把關。',
      '每一個模型在接觸伺服器之前都會在真實 GPU 上完成驗證——並透過我們的每日簡報持續學習。',
    ],
  },
};

/** Localized hero + intro for the AI Models module page (en / ru / zh). */
export default function AiModelsIntro() {
  const { locale } = useLocale();
  const t = INTRO[locale] ?? INTRO.en;

  return (
    <>
      <VideoBackground
        videoSrc="/videos/fm_hero.mp4"
        loop={false}
        objectFit="contain"
        className="flex min-h-[68vh] items-center border-b border-white/5"
      >
        <div className="container mx-auto max-w-5xl px-4 py-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400/80">
            Guardian Cloud · Module
          </p>
          <div className="mb-4 flex flex-wrap items-center justify-center gap-4">
            <h1 className="gradient-text text-5xl font-bold md:text-7xl">AI Models</h1>
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
