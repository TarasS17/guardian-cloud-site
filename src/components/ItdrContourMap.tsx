'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import { DefsSheen, SvgNode, SvgLink } from '@/components/diagramParts';

const HEAD: Record<string, { h: string; lead: string }> = {
  en: {
    h: 'The detection-and-response contour',
    lead: 'ITDR is one disciplined contour: the shields catch the signal, the officer decides by doctrine, and the system responds — from containment to graduated retaliation — learning from every incident.',
  },
  ru: {
    h: 'Архитектура контура',
    lead: 'ITDR — это слаженный контур: щиты ловят сигнал, офицер принимает решение по доктрине, а система отвечает — от сдерживания до удара возмездия — и учится на каждом инциденте.',
  },
  zh: {
    h: '偵測與回應防禦鏈架構',
    lead: 'ITDR 是一條協同運作的防禦鏈：護盾捕捉訊號，安全官依守則裁決，系統隨即回應——從圍堵到分級反制——並從每一次事件中學習。',
  },
  fr: {
    h: 'Le contour de détection et de réponse',
    lead: 'ITDR est un contour discipliné : les boucliers captent le signal, l’officier décide selon la doctrine, et le système répond — du confinement à la représaille graduée — en apprenant de chaque incident.',
  },
  de: {
    h: 'Der Erkennungs- und Reaktionsumriss',
    lead: 'ITDR ist ein diszipliniertes Gesamtsystem: Die Schilde fangen das Signal ab, der Offizier entscheidet nach Doktrin, und das System reagiert — von der Eindämmung bis zur gestuften Vergeltung — und lernt aus jedem Vorfall.',
  },
  es: {
    h: 'El contorno de detección y respuesta',
    lead: 'ITDR es un contorno disciplinado: los escudos captan la señal, el oficial decide según la doctrina, y el sistema responde — desde la contención hasta la represalia graduada — aprendiendo de cada incidente.',
  },
  it: {
    h: 'Il contorno di rilevamento e risposta',
    lead: 'ITDR è un contorno disciplinato: gli scudi catturano il segnale, l’ufficiale decide secondo la dottrina, e il sistema risponde — dal contenimento alla rappresaglia graduata — imparando da ogni incidente.',
  },
  ja: {
    h: '検知・対応コンター',
    lead: 'ITDRは規律あるひとつのコンターです。シールドが信号を捉え、オフィサーがドクトリンに基づいて判断し、システムが対応します——封じ込めから段階的報復まで——そしてすべてのインシデントから学習します。',
  },
  uk: {
    h: 'Архітектура контуру виявлення та реагування',
    lead: 'ITDR — це злагоджений контур: щити ловлять сигнал, офіцер приймає рішення за доктриною, а система відповідає — від стримування до градуйованого удару відплати — і навчається на кожному інциденті.',
  },
  sr: {
    h: 'Kontura otkrivanja i odgovora',
    lead: 'ITDR je disciplinovana celina: štitovi hvataju signal, oficir odlučuje prema doktrini, a sistem odgovara — od obuzdavanja do stepenovane odmazde — učeći iz svakog incidenta.',
  },
  pt: {
    h: 'O contorno de deteção e resposta',
    lead: 'O ITDR é um contorno disciplinado: os escudos captam o sinal, o oficial decide segundo a doutrina, e o sistema responde — da contenção à retaliação graduada — aprendendo com cada incidente.',
  },
  hi: {
    h: 'पहचान-और-प्रतिक्रिया संरचना',
    lead: 'ITDR एक अनुशासित संरचना है: शील्ड सिग्नल पकड़ते हैं, अधिकारी सिद्धांत के अनुसार निर्णय लेता है, और सिस्टम जवाब देता है — रोकथाम से लेकर चरणबद्ध प्रतिशोध तक — हर घटना से सीखते हुए।',
  },
  tr: {
    h: 'Tespit ve yanıt hattı',
    lead: 'ITDR disiplinli tek bir hattır: kalkanlar sinyali yakalar, subay doktrine göre karar verir ve sistem yanıt verir — sınırlamadan kademeli misillemeye kadar — her olaydan öğrenerek.',
  },
  ar: {
    h: 'خط الكشف والاستجابة',
    lead: 'ITDR هو خط منضبط واحد: الدروع تلتقط الإشارة، والضابط يقرر وفق العقيدة، والنظام يستجيب — من الاحتواء إلى الانتقام المتدرج — متعلماً من كل حادثة.',
  },
  el: {
    h: 'Το περίγραμμα ανίχνευσης και απόκρισης',
    lead: 'Το ITDR είναι ένα πειθαρχημένο σύνολο: οι ασπίδες συλλαμβάνουν το σήμα, ο αξιωματικός αποφασίζει βάσει του δόγματος, και το σύστημα αποκρίνεται — από τον περιορισμό έως τη διαβαθμισμένη αντεκδίκηση — μαθαίνοντας από κάθε περιστατικό.',
  },
};

export default function ItdrContourMap() {
  const { locale } = useLocale();
  const t = HEAD[locale] ?? HEAD.en;

  const shields = [
    { cx: 180, color: '#fb7185', title: 'Root-abuse shield' },
    { cx: 410, color: '#f59e0b', title: 'Credential shield' },
    { cx: 640, color: '#a855f7', title: 'Privilege shield' },
  ];

  return (
    <section className="border-b border-white/5 py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">{t.h}</h2>
        <p className="mb-8 max-w-3xl text-lg leading-relaxed text-white/80">{t.lead}</p>

        <div className="overflow-x-auto rounded-2xl border border-cyan-500/25 bg-gray-950/60 p-4">
          <p className="mb-1 px-2 pt-2 text-center text-xs uppercase tracking-widest text-white/40">
            ITDR contour — shields · officer · doctrine · response
          </p>
          <svg viewBox="0 0 1000 560" className="h-auto w-full min-w-[760px]" role="img" aria-label="ITDR contour map">
            <DefsSheen />
            <rect x="0" y="0" width="1000" height="560" rx="18" fill="#070a12" />

            {/* links: shields -> officer */}
            {shields.map((s) => (
              <SvgLink key={`l-${s.title}`} d={`M${s.cx} 118 C${s.cx} 175, ${480 + (s.cx - 410) * 0.2} 200, 480 228`} color={s.color} />
            ))}
            {/* antivirus -> officer */}
            <SvgLink d="M880 118 C880 200, 700 230, 612 258" color="#34d399" />
            {/* officer <-> doctrine */}
            <SvgLink d="M350 270 L242 270" color="#38bdf8" />
            {/* officer -> response row */}
            <SvgLink d="M430 312 C360 380, 250 400, 230 432" color="#fb7185" />
            <SvgLink d="M500 312 L500 432" color="#f97316" />
            <SvgLink d="M560 312 C660 380, 760 400, 790 432" color="#818cf8" />
            {/* debrief loop: forensics -> doctrine */}
            <SvgLink d="M790 488 C790 545, 140 545, 140 308" color="#22d3ee" dashed />
            <text x="470" y="538" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="11">debrief → doctrine learns</text>

            {/* shields */}
            {shields.map((s) => (
              <SvgNode key={s.title} cx={s.cx} cy={90} w={188} h={56} color={s.color} title={s.title} />
            ))}
            {/* antivirus */}
            <SvgNode cx={880} cy={90} w={184} h={56} color="#34d399" title="Antivirus" sub="ClamAV · quarantine" />
            {/* officer */}
            <SvgNode cx={480} cy={270} w={262} h={86} color="#22d3ee" title="ITDR Officer" sub="Gemma-4 · ROE doctrine" big />
            {/* doctrine */}
            <SvgNode cx={140} cy={270} w={208} h={72} color="#38bdf8" title="Doctrine" sub="ROE · playbooks · intel" />
            {/* response row */}
            <SvgNode cx={230} cy={460} w={208} h={56} color="#fb7185" title="Containment" sub="block · isolate" />
            <SvgNode cx={500} cy={460} w={240} h={56} color="#f97316" title="Graduated response" sub="ROE levels L1–L4" />
            <SvgNode cx={790} cy={460} w={220} h={56} color="#818cf8" title="Forensics & debrief" />
          </svg>
        </div>
      </div>
    </section>
  );
}
