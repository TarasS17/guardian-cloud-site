'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import FlowMap from '@/components/FlowMap';

type Data = { h: string; lead: string; cardH: string; items: string[] };

const DATA: Record<string, Data> = {
  en: {
    h: 'How the billing gate works',
    lead: 'Billing is enforced the moment a server is connected — not after the fact.',
    cardH: 'A hard gate, fully audited',
    items: [
      'On connect, the platform checks whether the client can add this server',
      'If capacity is unpaid, onboarding is blocked and the client is sent to billing',
      'The denial is written to service history — nothing is silent',
      'Once paid, the server registers and provisioning continues automatically',
    ],
  },
  ru: {
    h: 'Как работает billing-гейт',
    lead: 'Оплата проверяется в момент подключения сервера — не постфактум.',
    cardH: 'Жёсткий гейт, полностью под аудитом',
    items: [
      'При подключении платформа проверяет, может ли клиент добавить этот сервер',
      'Если ёмкость не оплачена, онбординг блокируется, клиент отправляется в billing',
      'Отказ пишется в Историю обслуживания — ничего по-тихому',
      'После оплаты сервер регистрируется и провижининг продолжается автоматически',
    ],
  },
  zh: {
    h: '計費閘門如何運作',
    lead: '計費在伺服器連接的當下即強制執行——而非事後補算。',
    cardH: '硬性閘門，全程稽核',
    items: [
      '連接時，平台會檢查客戶是否可新增此伺服器',
      '若容量未付費，接入將被攔截，並引導客戶前往計費',
      '拒絕記錄會寫入維運歷史——絕不靜默',
      '付費後，伺服器即註冊，並自動繼續配置建置',
    ],
  },
  fr: {
    h: 'Comment fonctionne le billing gate',
    lead: 'La facturation est vérifiée au moment même où un serveur est connecté — pas après coup.',
    cardH: 'Un gate strict, entièrement audité',
    items: [
      'À la connexion, la plateforme vérifie si le client peut ajouter ce serveur',
      'Si la capacité n\'est pas payée, l\'onboarding est bloqué et le client est renvoyé vers la facturation',
      'Le refus est écrit dans l\'historique de service — rien n\'est silencieux',
      'Une fois payé, le serveur s\'enregistre et le provisioning continue automatiquement',
    ],
  },
  de: {
    h: 'Wie das Billing-Gate funktioniert',
    lead: 'Die Abrechnung wird im Moment der Serververbindung geprüft — nicht im Nachhinein.',
    cardH: 'Ein striktes Gate, vollständig auditiert',
    items: [
      'Beim Verbinden prüft die Plattform, ob der Kunde diesen Server hinzufügen darf',
      'Ist die Kapazität unbezahlt, wird das Onboarding blockiert und der Kunde zur Abrechnung geleitet',
      'Die Ablehnung wird in der Service-Historie protokolliert — nichts geschieht stillschweigend',
      'Nach Zahlung registriert sich der Server, und das Provisioning läuft automatisch weiter',
    ],
  },
  es: {
    h: 'Cómo funciona el billing gate',
    lead: 'La facturación se verifica en el momento en que se conecta un servidor — no después.',
    cardH: 'Un gate estricto, totalmente auditado',
    items: [
      'Al conectar, la plataforma comprueba si el cliente puede añadir este servidor',
      'Si la capacidad no está pagada, el onboarding se bloquea y el cliente es enviado a facturación',
      'La denegación se escribe en el historial de servicio — nada queda en silencio',
      'Una vez pagado, el servidor se registra y el aprovisionamiento continúa automáticamente',
    ],
  },
  it: {
    h: 'Come funziona il billing gate',
    lead: 'La fatturazione viene verificata nel momento in cui un server viene connesso — non a posteriori.',
    cardH: 'Un gate rigoroso, completamente sottoposto ad audit',
    items: [
      'Alla connessione, la piattaforma verifica se il cliente può aggiungere questo server',
      'Se la capacità non è pagata, l\'onboarding viene bloccato e il cliente viene indirizzato alla fatturazione',
      'Il rifiuto viene scritto nella cronologia del servizio — nulla resta silenzioso',
      'Una volta pagato, il server si registra e il provisioning prosegue automaticamente',
    ],
  },
  ja: {
    h: '課金ゲートの仕組み',
    lead: '課金はサーバー接続の瞬間にチェックされます——後から確認するのではありません。',
    cardH: '厳格なゲート、完全に監査可能',
    items: [
      '接続時、プラットフォームはクライアントがこのサーバーを追加できるかを確認',
      '容量が未払いの場合、オンボーディングはブロックされ、クライアントは課金画面へ誘導される',
      '拒否はサービス履歴に記録される——サイレントな処理は一切ない',
      '支払い完了後、サーバーは登録され、プロビジョニングが自動的に継続される',
    ],
  },
  uk: {
    h: 'Як працює billing-гейт',
    lead: 'Оплата перевіряється в момент підключення сервера — не постфактум.',
    cardH: 'Жорсткий гейт, повністю під аудитом',
    items: [
      'При підключенні платформа перевіряє, чи може клієнт додати цей сервер',
      'Якщо ємність не оплачена, онбординг блокується, клієнта скеровує до білінгу',
      'Відмова записується в Історію обслуговування — нічого потайки',
      'Після оплати сервер реєструється, і провіжинінг продовжується автоматично',
    ],
  },
  sr: {
    h: 'Kako funkcioniše billing gate',
    lead: 'Naplata se proverava u trenutku povezivanja servera — ne naknadno.',
    cardH: 'Strog gate, potpuno pod audit-om',
    items: [
      'Prilikom povezivanja platforma proverava da li klijent može da doda ovaj server',
      'Ako kapacitet nije plaćen, onboarding se blokira i klijent se šalje na naplatu',
      'Odbijanje se upisuje u istoriju servisa — ništa se ne dešava tiho',
      'Nakon plaćanja server se registruje i provizioning se automatski nastavlja',
    ],
  },
  pt: {
    h: 'Como funciona o billing gate',
    lead: 'A cobrança é verificada no momento em que o servidor é conectado — não depois.',
    cardH: 'Um gate rígido, totalmente auditado',
    items: [
      'Ao conectar, a plataforma verifica se o cliente pode adicionar este servidor',
      'Se a capacidade não estiver paga, o onboarding é bloqueado e o cliente é direcionado à cobrança',
      'A recusa é registrada no histórico de serviço — nada acontece silenciosamente',
      'Uma vez pago, o servidor se registra e o provisionamento continua automaticamente',
    ],
  },
  hi: {
    h: 'बिलिंग गेट कैसे काम करता है',
    lead: 'सर्वर जुड़ने के उसी क्षण बिलिंग जाँची जाती है — बाद में नहीं।',
    cardH: 'एक सख़्त गेट, पूरी तरह ऑडिट किया गया',
    items: [
      'कनेक्ट होते ही, प्लेटफ़ॉर्म जाँचता है कि क्लाइंट यह सर्वर जोड़ सकता है या नहीं',
      'यदि क्षमता का भुगतान नहीं हुआ है, तो ऑनबोर्डिंग रोक दी जाती है और क्लाइंट को बिलिंग पर भेजा जाता है',
      'अस्वीकृति सर्विस इतिहास में दर्ज होती है — कुछ भी चुपचाप नहीं होता',
      'भुगतान के बाद, सर्वर पंजीकृत हो जाता है और प्रोविज़निंग स्वतः जारी रहती है',
    ],
  },
  tr: {
    h: 'Billing gate nasıl çalışır',
    lead: 'Faturalandırma, bir sunucu bağlandığı anda uygulanır — sonradan değil.',
    cardH: 'Sıkı bir kapı, tamamen denetlenmiş',
    items: [
      'Bağlantı sırasında platform, müşterinin bu sunucuyu ekleyip ekleyemeyeceğini kontrol eder',
      'Kapasite ödenmemişse, ekleme engellenir ve müşteri faturalandırmaya yönlendirilir',
      'Ret, hizmet geçmişine yazılır — hiçbir şey sessizce olmaz',
      'Ödendikten sonra sunucu kaydedilir ve yapılandırma otomatik olarak devam eder',
    ],
  },
  ar: {
    h: 'كيف تعمل بوابة الفوترة',
    lead: 'يتم فرض الفوترة لحظة توصيل الخادم — وليس بعد ذلك.',
    cardH: 'بوابة صارمة، خاضعة للتدقيق الكامل',
    items: [
      'عند الاتصال، تتحقق المنصة مما إذا كان بإمكان العميل إضافة هذا الخادم',
      'إذا لم تُدفع السعة، يُحظر الإعداد ويُوجَّه العميل إلى الفوترة',
      'يُسجَّل الرفض في سجل الخدمة — لا شيء يحدث بصمت',
      'بعد الدفع، يُسجَّل الخادم ويستمر التزويد تلقائيًا',
    ],
  },
  el: {
    h: 'Πώς λειτουργεί η πύλη χρέωσης',
    lead: 'Η χρέωση επιβάλλεται τη στιγμή που συνδέεται ένας διακομιστής — όχι εκ των υστέρων.',
    cardH: 'Μια αυστηρή πύλη, πλήρως ελεγμένη',
    items: [
      'Κατά τη σύνδεση, η πλατφόρμα ελέγχει αν ο πελάτης μπορεί να προσθέσει αυτόν τον διακομιστή',
      'Αν η χωρητικότητα δεν έχει πληρωθεί, η ένταξη μπλοκάρεται και ο πελάτης παραπέμπεται στη χρέωση',
      'Η άρνηση καταγράφεται στο ιστορικό υπηρεσίας — τίποτα δεν γίνεται σιωπηλά',
      'Μόλις πληρωθεί, ο διακομιστής καταχωρείται και η παροχή συνεχίζεται αυτόματα',
    ],
  },
};

const FLOW = ['Connect a server', 'Check subscription / capacity', 'Paid → register & provision', 'Unpaid → blocked + recorded'];

export default function BillingGate() {
  const { locale } = useLocale();
  const d = DATA[locale] ?? DATA.en;

  return (
    <section className="border-b border-white/5 py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">{d.h}</h2>
        <p className="mb-8 max-w-3xl text-lg leading-relaxed text-white/80">{d.lead}</p>

        <FlowMap caption="Connect-time billing gate" items={FLOW} colors={['#22d3ee', '#38bdf8', '#34d399', '#fb7185']} />

        <div className="rounded-2xl border border-cyan-500/25 bg-gradient-to-b from-cyan-900/15 to-gray-900/30 p-6">
          <h3 className="mb-3 text-lg font-bold text-white">{d.cardH}</h3>
          <ul className="space-y-2">
            {d.items.map((it) => (
              <li key={it} className="flex gap-2 text-sm text-white/75">
                <span className="mt-0.5 text-cyan-400">▸</span>
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
