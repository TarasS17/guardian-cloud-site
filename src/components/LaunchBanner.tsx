'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import RegisterCta from '@/components/RegisterCta';


type Data = { eyebrow: string; h: string; body: string; offer: string; cta: string };

const DATA: Record<string, Data> = {
  en: {
    eyebrow: 'Get started',
    h: 'Connect your servers',
    body: 'Guardian Cloud takes over administration and defence of your infrastructure. Connecting takes minutes.',
    offer: 'The first 100 clients to connect get 50% off the annual service plan.',
    cta: 'Register',
  },
  ru: {
    eyebrow: 'Начало работы',
    h: 'Подключите свои серверы',
    body: 'Guardian Cloud берёт администрирование и защиту вашей инфраструктуры на себя. Подключение занимает минуты.',
    offer: 'Первые 100 подключившихся клиентов получают 50% скидку на годовой тариф обслуживания.',
    cta: 'Зарегистрироваться',
  },
  zh: {
    eyebrow: '開始使用',
    h: '接入您的伺服器',
    body: 'Guardian Cloud 將全面接管您基礎設施的維運與防護。接入僅需幾分鐘。',
    offer: '前 100 名接入服務的客戶，可享年度服務方案 50% 折扣。',
    cta: '立即註冊',
  },
  fr: { eyebrow: 'Commencer', h: 'Connectez vos serveurs', body: 'Guardian Cloud prend en charge l\'administration et la défense de votre infrastructure. La connexion prend quelques minutes.', offer: 'Les 100 premiers clients connectés bénéficient de 50% de réduction sur le forfait annuel.', cta: "S'inscrire" },
  de: { eyebrow: 'Loslegen', h: 'Verbinden Sie Ihre Server', body: 'Guardian Cloud übernimmt die Administration und Verteidigung Ihrer Infrastruktur. Die Verbindung dauert nur wenige Minuten.', offer: 'Die ersten 100 verbundenen Kunden erhalten 50% Rabatt auf den Jahresplan.', cta: 'Registrieren' },
  es: { eyebrow: 'Empezar', h: 'Conecta tus servidores', body: 'Guardian Cloud se encarga de la administración y defensa de tu infraestructura. Conectar toma minutos.', offer: 'Los primeros 100 clientes conectados obtienen 50% de descuento en el plan anual.', cta: 'Registrarse' },
  it: { eyebrow: 'Inizia', h: 'Collega i tuoi server', body: 'Guardian Cloud si occupa dell\'amministrazione e della difesa della tua infrastruttura. Il collegamento richiede pochi minuti.', offer: 'I primi 100 clienti collegati ottengono il 50% di sconto sul piano annuale.', cta: 'Registrati' },
  ja: { eyebrow: 'はじめに', h: 'サーバーを接続する', body: 'Guardian Cloudがインフラの運用と防御を引き受けます。接続は数分で完了します。', offer: '最初の100社の接続クライアントは年間プランが50%割引になります。', cta: '登録する' },
  uk: { eyebrow: 'Початок роботи', h: "Підключіть свої сервери", body: 'Guardian Cloud бере на себе адміністрування та захист вашої інфраструктури. Підключення займає лічені хвилини.', offer: 'Перші 100 підключених клієнтів отримують знижку 50% на річний тариф.', cta: 'Зареєструватися' },
  sr: { eyebrow: 'Почетак рада', h: 'Повежите своје сервере', body: 'Guardian Cloud преузима администрацију и одбрану ваше инфраструктуре. Повезивање траје неколико минута.', offer: 'Првих 100 повезаних клијената добија 50% попуста на годишњи план.', cta: 'Региструј се' },
  pt: { eyebrow: 'Começar', h: 'Ligue os seus servidores', body: 'O Guardian Cloud assume a administração e defesa da sua infraestrutura. A ligação demora minutos.', offer: 'Os primeiros 100 clientes ligados recebem 50% de desconto no plano anual.', cta: 'Registar' },
  hi: { eyebrow: 'शुरू करें', h: 'अपने सर्वर कनेक्ट करें', body: 'Guardian Cloud आपके इन्फ्रास्ट्रक्चर के प्रबंधन और सुरक्षा की जिम्मेदारी लेता है। कनेक्ट करने में मिनट लगते हैं।', offer: 'पहले 100 जुड़ने वाले ग्राहकों को वार्षिक योजना पर 50% छूट मिलती है।', cta: 'पंजीकरण करें' },
  tr: { eyebrow: 'Başlayın', h: "Sunucularınızı bağlayın", body: 'Guardian Cloud, altyapınızın yönetimini ve savunmasını üstlenir. Bağlantı dakikalar sürer.', offer: 'Bağlanan ilk 100 müşteri yıllık planda %50 indirim kazanır.', cta: 'Kayıt ol' },
  ar: { eyebrow: 'ابدأ الآن', h: 'قم بتوصيل خوادمك', body: 'يتولى Guardian Cloud إدارة والدفاع عن بنيتك التحتية. يستغرق الاتصال دقائق معدودة.', offer: 'يحصل أول 100 عميل متصل على خصم 50% على الخطة السنوية.', cta: 'سجّل الآن' },
  el: { eyebrow: 'Ξεκινήστε', h: 'Συνδέστε τους διακομιστές σας', body: 'Το Guardian Cloud αναλαμβάνει τη διαχείριση και άμυνα της υποδομής σας. Η σύνδεση διαρκεί λίγα λεπτά.', offer: 'Οι πρώτοι 100 συνδεδεμένοι πελάτες λαμβάνουν 50% έκπτωση στο ετήσιο πρόγραμμα.', cta: 'Εγγραφή' },
};

export default function LaunchBanner() {
  const { locale } = useLocale();
  const d = DATA[locale] ?? DATA.en;

  return (
    <section className="py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-500/40 bg-gradient-to-br from-cyan-900/40 via-gray-900/40 to-violet-900/30 p-8 text-center shadow-[0_10px_40px_rgba(34,211,238,0.18)] md:p-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-300/80">{d.eyebrow}</p>
          <h2 className="gradient-text mb-4 text-3xl font-bold md:text-5xl">{d.h}</h2>
          <p className="mx-auto mb-6 max-w-2xl text-lg text-white/80">{d.body}</p>

          <div className="mx-auto mb-8 max-w-2xl rounded-2xl border border-emerald-400/40 bg-emerald-400/10 px-5 py-4">
            <span className="text-base font-semibold text-emerald-200">{d.offer}</span>
          </div>

          <RegisterCta className="inline-block rounded-lg bg-cyan-500 px-10 py-4 text-lg font-bold text-gray-900 transition-colors hover:bg-cyan-400">
            {d.cta}
          </RegisterCta>
        </div>
      </div>
    </section>
  );
}
