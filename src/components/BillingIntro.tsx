'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import StatusBadge from '@/components/StatusBadge';

type Intro = { sub: string; paras: string[]; trialLabel: string; trial: string };

const INTRO: Record<string, Intro> = {
  en: {
    sub: 'one platform, sized to your fleet',
    paras: [
      'A per-server subscription with a hard billing gate: capacity is onboarded only when it is paid for, and every gate decision is written to your service history.',
      'Five plans — from a single server to a data center. Every plan includes Cloud AI, ITDR, SIEM and RAG; plans differ by how many servers you monitor and automate.',
    ],
    trialLabel: 'Free trial',
    trial: 'After you register — 10 days free: 1 automated + 1 monitoring server to get to know the platform. When the trial ends, choose and connect your plan right in your dashboard.',
  },
  ru: {
    sub: 'одна платформа под размер вашего парка',
    paras: [
      'Подписка по числу серверов с жёстким billing-гейтом: мощность подключается только когда оплачена, и каждое решение гейта пишется в вашу Историю обслуживания.',
      'Пять тарифов — от одного сервера до дата-центра. На каждом тарифе включены Cloud AI, ITDR, SIEM и RAG; тарифы различаются числом серверов на мониторинге и автоматизации.',
    ],
    trialLabel: 'Бесплатный период',
    trial: 'После регистрации — 10 дней бесплатно: 1 автоматизированный + 1 мониторинговый сервер, чтобы познакомиться с работой платформы. По окончании пробного периода выберите и подключите свой тариф прямо в своём дашборде.',
  },
  zh: {
    sub: '一個平台，依您的規模量身而設',
    paras: [
      '按伺服器數計費，並設有硬性計費閘門：唯有付費後才會接入相應容量，且每一次閘門決策都會寫入您的維運歷史。',
      '五種方案——從單一伺服器到資料中心。每一種方案皆包含 Cloud AI、ITDR、SIEM 與 RAG；方案之間的差異在於可監控與自動化的伺服器數量。',
    ],
    trialLabel: '免費試用',
    trial: '註冊後——10 天免費：1 台自動 + 1 台監控伺服器，讓您熟悉平台運作。試用期結束後，直接在您的儀表板中選擇並開通方案。',
  },
  fr: {
    sub: 'une plateforme, adaptée à votre parc',
    paras: [
      'Un abonnement par serveur avec un billing gate strict : la capacité n\'est activée que si elle est payée, et chaque décision du gate est consignée dans votre historique de service.',
      'Cinq plans — d\'un seul serveur à un data center entier. Chaque plan inclut Cloud AI, ITDR, SIEM et RAG ; les plans diffèrent par le nombre de serveurs surveillés et automatisés.',
    ],
    trialLabel: 'Essai gratuit',
    trial: 'Après inscription — 10 jours gratuits : 1 serveur automatisé + 1 serveur en surveillance pour découvrir la plateforme. À la fin de l\'essai, choisissez et activez votre plan directement depuis votre tableau de bord.',
  },
  de: {
    sub: 'eine Plattform, passend zu Ihrer Flotte',
    paras: [
      'Ein Abonnement pro Server mit einem strikten Billing-Gate: Kapazität wird nur freigeschaltet, wenn sie bezahlt ist, und jede Gate-Entscheidung wird in Ihrer Service-Historie protokolliert.',
      'Fünf Pläne — von einem einzelnen Server bis zum Rechenzentrum. Jeder Plan enthält Cloud AI, ITDR, SIEM und RAG; die Pläne unterscheiden sich in der Anzahl überwachter und automatisierter Server.',
    ],
    trialLabel: 'Kostenlose Testphase',
    trial: 'Nach der Registrierung — 10 Tage kostenlos: 1 automatisierter + 1 überwachter Server, um die Plattform kennenzulernen. Nach Ablauf der Testphase wählen und aktivieren Sie Ihren Plan direkt im Dashboard.',
  },
  es: {
    sub: 'una plataforma, a la medida de su flota',
    paras: [
      'Una suscripción por servidor con un billing gate estricto: la capacidad solo se habilita cuando está pagada, y cada decisión del gate queda registrada en su historial de servicio.',
      'Cinco planes — desde un único servidor hasta un centro de datos. Todos los planes incluyen Cloud AI, ITDR, SIEM y RAG; los planes difieren en cuántos servidores monitoriza y automatiza.',
    ],
    trialLabel: 'Prueba gratuita',
    trial: 'Tras registrarse — 10 días gratis: 1 servidor automatizado + 1 servidor en monitorización para conocer la plataforma. Al finalizar la prueba, elija y active su plan directamente desde su panel.',
  },
  it: {
    sub: 'una piattaforma, su misura per la vostra flotta',
    paras: [
      'Un abbonamento per server con un billing gate rigoroso: la capacità viene attivata solo se pagata, e ogni decisione del gate viene scritta nella cronologia del servizio.',
      'Cinque piani — da un singolo server a un data center. Ogni piano include Cloud AI, ITDR, SIEM e RAG; i piani differiscono per il numero di server monitorati e automatizzati.',
    ],
    trialLabel: 'Prova gratuita',
    trial: 'Dopo la registrazione — 10 giorni gratis: 1 server automatizzato + 1 server in monitoraggio per conoscere la piattaforma. Al termine della prova, scegliete e attivate il vostro piano direttamente dalla dashboard.',
  },
  ja: {
    sub: '規模に合わせた1つのプラットフォーム',
    paras: [
      'サーバー単位のサブスクリプションと厳格な課金ゲート——容量は支払われた分だけオンボードされ、すべてのゲート判断はサービス履歴に記録されます。',
      '5つのプラン——単一サーバーからデータセンターまで。すべてのプランに Cloud AI、ITDR、SIEM、RAG が含まれ、監視・自動化するサーバー台数で差別化されます。',
    ],
    trialLabel: '無料トライアル',
    trial: '登録後——10日間無料：自動化サーバー1台＋監視サーバー1台でプラットフォームをお試しいただけます。トライアル終了後は、ダッシュボードから直接プランを選択・接続できます。',
  },
  uk: {
    sub: 'одна платформа під розмір вашого парку',
    paras: [
      'Підписка за кількістю серверів із жорстким billing-гейтом: потужність підключається лише коли оплачена, і кожне рішення гейта записується у вашу Історію обслуговування.',
      'П\'ять тарифів — від одного сервера до дата-центру. У кожному тарифі включені Cloud AI, ITDR, SIEM та RAG; тарифи різняться кількістю серверів на моніторингу та автоматизації.',
    ],
    trialLabel: 'Безкоштовний період',
    trial: 'Після реєстрації — 10 днів безкоштовно: 1 автоматизований + 1 моніторинговий сервер, щоб познайомитися з роботою платформи. Після завершення пробного періоду оберіть і підключіть свій тариф прямо у своєму дашборді.',
  },
  sr: {
    sub: 'jedna platforma, prilagođena vašoj floti',
    paras: [
      'Pretplata po serveru sa strogim billing gate-om: kapacitet se aktivira tek kada je plaćen, a svaka odluka gate-a se upisuje u vašu istoriju servisa.',
      'Pet planova — od jednog servera do čitavog data centra. Svaki plan uključuje Cloud AI, ITDR, SIEM i RAG; planovi se razlikuju po broju servera koje pratite i automatizujete.',
    ],
    trialLabel: 'Besplatan probni period',
    trial: 'Nakon registracije — 10 dana besplatno: 1 automatizovan + 1 server u monitoringu da upoznate platformu. Kada probni period istekne, izaberite i povežite svoj plan direktno u dashboard-u.',
  },
  pt: {
    sub: 'uma plataforma, dimensionada para sua frota',
    paras: [
      'Uma assinatura por servidor com um billing gate rígido: a capacidade só é ativada quando está paga, e cada decisão do gate é registrada no seu histórico de serviço.',
      'Cinco planos — de um único servidor a um data center. Todo plano inclui Cloud AI, ITDR, SIEM e RAG; os planos diferem pelo número de servidores monitorados e automatizados.',
    ],
    trialLabel: 'Teste gratuito',
    trial: 'Após o registro — 10 dias grátis: 1 servidor automatizado + 1 servidor em monitoramento para conhecer a plataforma. Ao final do teste, escolha e conecte seu plano diretamente no painel.',
  },
  hi: {
    sub: 'एक प्लेटफ़ॉर्म, आपके फ़्लीट के अनुरूप',
    paras: [
      'सख़्त बिलिंग गेट के साथ प्रति-सर्वर सब्सक्रिप्शन: क्षमता केवल भुगतान होने पर ही ऑनबोर्ड होती है, और हर गेट निर्णय आपके सर्विस इतिहास में दर्ज होता है।',
      'पाँच योजनाएँ — एक सर्वर से लेकर पूरे डेटा सेंटर तक। हर योजना में Cloud AI, ITDR, SIEM और RAG शामिल हैं; योजनाएँ मॉनिटर व ऑटोमेट किए गए सर्वरों की संख्या में भिन्न होती हैं।',
    ],
    trialLabel: 'मुफ़्त ट्रायल',
    trial: 'पंजीकरण के बाद — 10 दिन मुफ़्त: 1 ऑटोमेटेड + 1 मॉनिटरिंग सर्वर, प्लेटफ़ॉर्म को जानने के लिए। ट्रायल समाप्त होने पर, अपने डैशबोर्ड से सीधे अपनी योजना चुनें और जोड़ें।',
  },
  tr: {
    sub: 'filonuzun boyutuna göre tek platform',
    paras: [
      "Sıkı bir billing gate ile sunucu başına abonelik: kapasite yalnızca ödendiğinde etkinleştirilir ve her gate kararı hizmet geçmişinize yazılır.",
      'Beş plan — tek bir sunucudan veri merkezine kadar. Her plan Cloud AI, ITDR, SIEM ve RAG içerir; planlar izlenen ve otomatikleştirilen sunucu sayısına göre farklılaşır.',
    ],
    trialLabel: 'Ücretsiz deneme',
    trial: "Kayıttan sonra — 10 gün ücretsiz: platformu tanımak için 1 otomatik + 1 izleme sunucusu. Deneme süresi bitince, planınızı doğrudan panonuzdan seçip bağlayın.",
  },
  ar: {
    sub: 'منصة واحدة، بحجم أسطولك',
    paras: [
      'اشتراك لكل خادم مع بوابة فوترة صارمة: يتم تفعيل السعة فقط عند الدفع، ويتم تسجيل كل قرار للبوابة في سجل الخدمة الخاص بك.',
      'خمس خطط — من خادم واحد إلى مركز بيانات كامل. تتضمن كل خطة Cloud AI وITDR وSIEM وRAG؛ تختلف الخطط في عدد الخوادم التي تراقبها وتؤتمتها.',
    ],
    trialLabel: 'تجربة مجانية',
    trial: 'بعد التسجيل — 10 أيام مجانية: خادم آلي واحد + خادم مراقبة واحد للتعرف على المنصة. عند انتهاء التجربة، اختر وصل خطتك مباشرة من لوحة التحكم.',
  },
  el: {
    sub: 'μία πλατφόρμα, στο μέγεθος του στόλου σας',
    paras: [
      'Συνδρομή ανά διακομιστή με αυστηρή πύλη χρέωσης: η χωρητικότητα ενεργοποιείται μόνο όταν πληρωθεί, και κάθε απόφαση της πύλης καταγράφεται στο ιστορικό υπηρεσίας σας.',
      'Πέντε πλάνα — από έναν διακομιστή έως ολόκληρο data center. Κάθε πλάνο περιλαμβάνει Cloud AI, ITDR, SIEM και RAG· τα πλάνα διαφέρουν στον αριθμό διακομιστών που παρακολουθείτε και αυτοματοποιείτε.',
    ],
    trialLabel: 'Δωρεάν δοκιμή',
    trial: 'Μετά την εγγραφή — 10 ημέρες δωρεάν: 1 αυτοματοποιημένος + 1 διακομιστής παρακολούθησης για να γνωρίσετε την πλατφόρμα. Όταν λήξει η δοκιμή, επιλέξτε και συνδέστε το πλάνο σας απευθείας από τον πίνακα ελέγχου.',
  },
};

/** Static (non-video) hero + intro for the Billing page. */
export default function BillingIntro() {
  const { locale } = useLocale();
  const t = INTRO[locale] ?? INTRO.en;

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/35 via-gray-950 to-violet-900/25" />
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <linearGradient id="bh-bar" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="bh-bar2" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.45" />
            </linearGradient>
            <linearGradient id="bh-line" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>

          {/* faint grid */}
          <g stroke="#ffffff" strokeOpacity="0.05">
            <line x1="0" y1="140" x2="1440" y2="140" />
            <line x1="0" y1="240" x2="1440" y2="240" />
            <line x1="0" y1="340" x2="1440" y2="340" />
            <line x1="0" y1="440" x2="1440" y2="440" />
            <line x1="0" y1="540" x2="1440" y2="540" />
          </g>

          {/* big faint currency glyphs */}
          <text x="640" y="330" fill="#ffffff" fillOpacity="0.03" fontSize="420" fontWeight="800" textAnchor="middle">$</text>

          {/* growth bars, bottom-right */}
          <g>
            <rect x="980" y="470" width="40" height="70" rx="6" fill="url(#bh-bar)" />
            <rect x="1044" y="440" width="40" height="100" rx="6" fill="url(#bh-bar2)" />
            <rect x="1108" y="450" width="40" height="90" rx="6" fill="url(#bh-bar)" />
            <rect x="1172" y="390" width="40" height="150" rx="6" fill="url(#bh-bar2)" />
            <rect x="1236" y="400" width="40" height="140" rx="6" fill="url(#bh-bar)" />
            <rect x="1300" y="340" width="40" height="200" rx="6" fill="url(#bh-bar2)" />
            <rect x="1364" y="290" width="40" height="250" rx="6" fill="url(#bh-bar)" />
          </g>

          {/* upward trend line */}
          <g style={{ filter: 'drop-shadow(0 0 8px rgba(34,211,238,0.4))' }}>
            <polyline points="0,470 240,452 480,460 720,408 960,360 1200,300 1380,252" fill="none" stroke="url(#bh-line)" strokeWidth="3" strokeOpacity="0.7" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="720" cy="408" r="5" fill="#22d3ee" />
            <circle cx="960" cy="360" r="5" fill="#38bdf8" />
            <circle cx="1200" cy="300" r="5" fill="#a855f7" />
          </g>

          {/* invoice / plan cards, top-left */}
          <g>
            <rect x="150" y="180" width="250" height="160" rx="16" fill="#a855f7" fillOpacity="0.05" stroke="#a855f7" strokeOpacity="0.2" />
            <rect x="110" y="120" width="250" height="160" rx="16" fill="#22d3ee" fillOpacity="0.06" stroke="#22d3ee" strokeOpacity="0.25" />
            <rect x="134" y="150" width="120" height="12" rx="6" fill="#ffffff" fillOpacity="0.14" />
            <rect x="134" y="182" width="202" height="7" rx="3.5" fill="#ffffff" fillOpacity="0.08" />
            <rect x="134" y="200" width="170" height="7" rx="3.5" fill="#ffffff" fillOpacity="0.08" />
            <rect x="134" y="218" width="190" height="7" rx="3.5" fill="#ffffff" fillOpacity="0.08" />
            <text x="312" y="258" fill="#22d3ee" fillOpacity="0.5" fontSize="34" fontWeight="800" textAnchor="end">$</text>
          </g>
        </svg>
        <div className="container relative z-10 mx-auto max-w-5xl px-4 py-24 text-center md:py-28">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400/80">
            Guardian Cloud · Module
          </p>
          <div className="mb-4 flex flex-wrap items-center justify-center gap-4">
            <h1 className="gradient-text text-5xl font-bold md:text-7xl">Tariffs &amp; Billing</h1>
            <StatusBadge status="live" />
          </div>
          <p className="text-2xl font-semibold text-cyan-300">{t.sub}</p>
        </div>
      </section>

      <section className="border-b border-white/5 py-16">
        <div className="container mx-auto max-w-4xl space-y-6 px-4 text-lg leading-relaxed text-white/80">
          {t.paras.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <div className="rounded-2xl border border-emerald-400/40 bg-gradient-to-br from-emerald-900/25 to-gray-900/30 p-6">
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-emerald-300">{t.trialLabel}</p>
            <p className="text-base text-white/85">{t.trial}</p>
          </div>
        </div>
      </section>
    </>
  );
}
