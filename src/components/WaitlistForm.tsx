'use client';

import { useState } from 'react';
import { useLocale } from '@/lib/i18n/LocaleContext';

// Самодостаточная форма предрегистрации (waitlist). Ни от чат-бота, ни от AI-бэкенда не зависит.
// Шлёт лид в рабочий /api/contact (nodemailer → GMAIL_USER). Вставляется в любую вёрстку: <WaitlistForm />.
// Копирайт — placeholder RU/EN/ZH, заменяется без правки логики.

type Status = 'idle' | 'sending' | 'ok' | 'error';

/** 'launch' — ранний доступ к запуску (ComingSoon, страницы AI Studio).
 *  'updates' — подписка на новости о разработках (главная, сбор лидов).
 *  'registration' — регистрация в Cloud временно закрыта (баннер в CloudCta):
 *                   сообщим, когда откроется. */
export type WaitlistVariant = 'launch' | 'updates' | 'registration';

interface Copy {
  emailPh: string; namePh: string; btn: string; sending: string; ok: string; err: string; note: string;
}

const COPY: Record<WaitlistVariant, Record<string, Copy>> = {
  launch: {
    ru: {
      emailPh: 'Ваш email', namePh: 'Имя (необязательно)', btn: 'Ранний доступ', sending: 'Отправляю…',
      ok: 'Готово! Вы в списке — сообщим о запуске первыми.', err: 'Не отправилось. Попробуйте ещё раз.',
      note: 'Оставьте email — узнаете о запуске раньше всех.',
    },
    en: {
      emailPh: 'Your email', namePh: 'Name (optional)', btn: 'Get early access', sending: 'Sending…',
      ok: "You're in — we'll let you know first at launch.", err: "Couldn't send. Please try again.",
      note: 'Leave your email — be first to know at launch.',
    },
    zh: {
      emailPh: '您的郵箱', namePh: '姓名（選填）', btn: '搶先體驗', sending: '提交中…',
      ok: '已加入！我們會第一時間通知您上線。', err: '發送失敗，請重試。',
      note: '留下郵箱——第一時間獲取上線通知。',
    },
    fr: { emailPh: 'Votre e-mail', namePh: 'Nom (facultatif)', btn: 'Accès anticipé', sending: 'Envoi…', ok: "Vous y êtes — on vous préviendra en premier au lancement.", err: "Échec de l'envoi. Réessayez.", note: 'Laissez votre e-mail — soyez informé en premier au lancement.' },
    de: { emailPh: 'Ihre E-Mail', namePh: 'Name (optional)', btn: 'Frühzugang', sending: 'Wird gesendet…', ok: 'Sie sind dabei — wir informieren Sie als Erstes beim Start.', err: 'Senden fehlgeschlagen. Bitte erneut versuchen.', note: 'Hinterlassen Sie Ihre E-Mail — erfahren Sie als Erstes vom Start.' },
    es: { emailPh: 'Tu correo', namePh: 'Nombre (opcional)', btn: 'Acceso anticipado', sending: 'Enviando…', ok: 'Ya estás dentro — te avisaremos primero en el lanzamiento.', err: 'No se pudo enviar. Inténtalo de nuevo.', note: 'Deja tu correo — sé el primero en enterarte del lanzamiento.' },
    it: { emailPh: 'La tua e-mail', namePh: 'Nome (facoltativo)', btn: 'Accesso anticipato', sending: 'Invio…', ok: 'Fatto! Ti avviseremo per primo al lancio.', err: 'Invio non riuscito. Riprova.', note: "Lascia la tua e-mail — sarai il primo a sapere del lancio." },
    ja: { emailPh: 'メールアドレス', namePh: '名前（任意）', btn: '早期アクセス', sending: '送信中…', ok: '登録完了！ローンチを一番にお知らせします。', err: '送信できませんでした。もう一度お試しください。', note: 'メールを残せば、ローンチを一番にお知らせします。' },
    uk: { emailPh: 'Ваш email', namePh: "Ім'я (необов'язково)", btn: 'Ранній доступ', sending: 'Надсилаю…', ok: 'Готово! Повідомимо про запуск першими.', err: 'Не вдалося надіслати. Спробуйте ще раз.', note: 'Залиште email — дізнаєтесь про запуск першими.' },
    sr: { emailPh: 'Ваш имејл', namePh: 'Име (опционо)', btn: 'Рани приступ', sending: 'Шаљем…', ok: 'Готово! Обавестићемо вас први о покретању.', err: 'Слање није успело. Покушајте поново.', note: 'Оставите имејл — сазнајте о покретању први.' },
    pt: { emailPh: 'O seu e-mail', namePh: 'Nome (opcional)', btn: 'Acesso antecipado', sending: 'A enviar…', ok: 'Pronto! Avisamo-lo em primeiro lugar no lançamento.', err: 'Não foi possível enviar. Tente novamente.', note: 'Deixe o seu e-mail — seja o primeiro a saber do lançamento.' },
    hi: { emailPh: 'आपका ईमेल', namePh: 'नाम (वैकल्पिक)', btn: 'शीघ्र पहुँच', sending: 'भेज रहे हैं…', ok: 'हो गया! लॉन्च की जानकारी आपको सबसे पहले देंगे।', err: 'भेज नहीं सका। कृपया पुनः प्रयास करें।', note: 'अपना ईमेल छोड़ें — लॉन्च की जानकारी सबसे पहले पाएं।' },
    tr: { emailPh: 'E-postanız', namePh: 'Ad (isteğe bağlı)', btn: 'Erken erişim', sending: 'Gönderiliyor…', ok: 'Tamamdır! Lansmanı ilk size haber vereceğiz.', err: 'Gönderilemedi. Lütfen tekrar deneyin.', note: 'E-postanızı bırakın — lansmanı ilk siz öğrenin.' },
    ar: { emailPh: 'بريدك الإلكتروني', namePh: 'الاسم (اختياري)', btn: 'وصول مبكر', sending: 'جارٍ الإرسال…', ok: 'تم! سنخبرك أولاً عند الإطلاق.', err: 'تعذر الإرسال. حاول مرة أخرى.', note: 'اترك بريدك الإلكتروني — كن أول من يعلم بالإطلاق.' },
    el: { emailPh: 'Το e-mail σας', namePh: 'Όνομα (προαιρετικό)', btn: 'Πρώιμη πρόσβαση', sending: 'Αποστολή…', ok: 'Έτοιμο! Θα σας ενημερώσουμε πρώτους για την κυκλοφορία.', err: 'Αποτυχία αποστολής. Δοκιμάστε ξανά.', note: 'Αφήστε το e-mail σας — μάθετε πρώτοι για την κυκλοφορία.' },
  },
  registration: {
    ru: {
      emailPh: 'Ваш email', namePh: 'Имя (необязательно)', btn: 'Сообщить мне', sending: 'Отправляю…',
      ok: 'Готово. Напишем вам, как только регистрация откроется.', err: 'Не отправилось. Попробуйте ещё раз.',
      note: '',
    },
    en: {
      emailPh: 'Your email', namePh: 'Name (optional)', btn: 'Notify me', sending: 'Sending…',
      ok: 'Done. We will write the moment registration reopens.', err: "Couldn't send. Please try again.",
      note: '',
    },
    zh: {
      emailPh: '您的郵箱', namePh: '姓名（選填）', btn: '通知我', sending: '提交中…',
      ok: '完成。開放註冊時我們會立即通知您。', err: '發送失敗，請重試。',
      note: '',
    },
    fr: { emailPh: 'Votre e-mail', namePh: 'Nom (facultatif)', btn: 'Me prévenir', sending: 'Envoi…', ok: "C'est noté. Nous écrirons dès la réouverture des inscriptions.", err: "Échec de l'envoi. Réessayez.", note: '' },
    de: { emailPh: 'Ihre E-Mail', namePh: 'Name (optional)', btn: 'Benachrichtigen', sending: 'Wird gesendet…', ok: 'Erledigt. Wir schreiben, sobald die Registrierung wieder öffnet.', err: 'Senden fehlgeschlagen. Bitte erneut versuchen.', note: '' },
    es: { emailPh: 'Tu correo', namePh: 'Nombre (opcional)', btn: 'Avisarme', sending: 'Enviando…', ok: 'Hecho. Te escribiremos en cuanto se reabra el registro.', err: 'No se pudo enviar. Inténtalo de nuevo.', note: '' },
    it: { emailPh: 'La tua e-mail', namePh: 'Nome (facoltativo)', btn: 'Avvisami', sending: 'Invio…', ok: 'Fatto. Ti scriveremo non appena riaprono le registrazioni.', err: 'Invio non riuscito. Riprova.', note: '' },
    ja: { emailPh: 'メールアドレス', namePh: '名前（任意）', btn: '通知を受け取る', sending: '送信中…', ok: '完了です。登録が再開され次第ご連絡します。', err: '送信できませんでした。もう一度お試しください。', note: '' },
    uk: { emailPh: 'Ваш email', namePh: "Ім'я (необов'язково)", btn: 'Повідомити мене', sending: 'Надсилаю…', ok: 'Готово. Напишемо, щойно реєстрація відкриється.', err: 'Не вдалося надіслати. Спробуйте ще раз.', note: '' },
    sr: { emailPh: 'Ваш имејл', namePh: 'Име (опционо)', btn: 'Обавести ме', sending: 'Шаљем…', ok: 'Готово. Јавићемо се чим се регистрација отвори.', err: 'Слање није успело. Покушајте поново.', note: '' },
    pt: { emailPh: 'O seu e-mail', namePh: 'Nome (opcional)', btn: 'Avisar-me', sending: 'A enviar…', ok: 'Feito. Escrevemos assim que o registo reabrir.', err: 'Não foi possível enviar. Tente novamente.', note: '' },
    hi: { emailPh: 'आपका ईमेल', namePh: 'नाम (वैकल्पिक)', btn: 'मुझे सूचित करें', sending: 'भेज रहे हैं…', ok: 'हो गया। पंजीकरण फिर से खुलते ही हम लिखेंगे।', err: 'भेज नहीं सका। कृपया पुनः प्रयास करें।', note: '' },
    tr: { emailPh: 'E-postanız', namePh: 'Ad (isteğe bağlı)', btn: 'Beni bilgilendir', sending: 'Gönderiliyor…', ok: 'Tamam. Kayıtlar yeniden açılır açılmaz yazacağız.', err: 'Gönderilemedi. Lütfen tekrar deneyin.', note: '' },
    ar: { emailPh: 'بريدك الإلكتروني', namePh: 'الاسم (اختياري)', btn: 'أبلغني', sending: 'جارٍ الإرسال…', ok: 'تم. سنكتب لك بمجرد إعادة فتح التسجيل.', err: 'تعذر الإرسال. حاول مرة أخرى.', note: '' },
    el: { emailPh: 'Το e-mail σας', namePh: 'Όνομα (προαιρετικό)', btn: 'Ειδοποιήστε με', sending: 'Αποστολή…', ok: 'Έγινε. Θα σας γράψουμε μόλις ανοίξουν ξανά οι εγγραφές.', err: 'Αποτυχία αποστολής. Δοκιμάστε ξανά.', note: '' },
  },
  updates: {
    ru: {
      emailPh: 'Ваш email', namePh: 'Имя (необязательно)', btn: 'Подписаться', sending: 'Отправляю…',
      ok: 'Готово. Будем держать вас в курсе.', err: 'Не отправилось. Попробуйте ещё раз.',
      note: 'Оставьте email — напишем, когда появится что-то стоящее.',
    },
    en: {
      emailPh: 'Your email', namePh: 'Name (optional)', btn: 'Subscribe', sending: 'Sending…',
      ok: 'Done. We will keep you informed.', err: "Couldn't send. Please try again.",
      note: 'Leave your email and we will write when there is something worth reading.',
    },
    zh: {
      emailPh: '您的郵箱', namePh: '姓名（選填）', btn: '訂閱', sending: '提交中…',
      ok: '完成。我們會持續讓您掌握進度。', err: '發送失敗，請重試。',
      note: '留下郵箱，有值得一讀的進展時我們會通知您。',
    },
    fr: { emailPh: 'Votre e-mail', namePh: 'Nom (facultatif)', btn: "S'abonner", sending: 'Envoi…', ok: 'Fait. Nous vous tiendrons informé.', err: "Échec de l'envoi. Réessayez.", note: 'Laissez votre e-mail et nous vous écrirons quand il y aura quelque chose à lire.' },
    de: { emailPh: 'Ihre E-Mail', namePh: 'Name (optional)', btn: 'Abonnieren', sending: 'Wird gesendet…', ok: 'Erledigt. Wir halten Sie auf dem Laufenden.', err: 'Senden fehlgeschlagen. Bitte erneut versuchen.', note: 'Hinterlassen Sie Ihre E-Mail, wir schreiben, wenn es etwas Lesenswertes gibt.' },
    es: { emailPh: 'Tu correo', namePh: 'Nombre (opcional)', btn: 'Suscribirse', sending: 'Enviando…', ok: 'Hecho. Te mantendremos informado.', err: 'No se pudo enviar. Inténtalo de nuevo.', note: 'Deja tu correo y te escribiremos cuando haya algo que valga la pena leer.' },
    it: { emailPh: 'La tua e-mail', namePh: 'Nome (facoltativo)', btn: 'Iscriviti', sending: 'Invio…', ok: 'Fatto. Ti terremo informato.', err: 'Invio non riuscito. Riprova.', note: "Lascia la tua e-mail e ti scriveremo quando ci sarà qualcosa di interessante." },
    ja: { emailPh: 'メールアドレス', namePh: '名前（任意）', btn: '購読する', sending: '送信中…', ok: '完了です。最新情報をお届けします。', err: '送信できませんでした。もう一度お試しください。', note: '読む価値のある情報があればメールでお知らせします。' },
    uk: { emailPh: 'Ваш email', namePh: "Ім'я (необов'язково)", btn: 'Підписатися', sending: 'Надсилаю…', ok: 'Готово. Триматимемо вас в курсі.', err: 'Не вдалося надіслати. Спробуйте ще раз.', note: 'Залиште email — напишемо, коли з’явиться щось варте уваги.' },
    sr: { emailPh: 'Ваш имејл', namePh: 'Име (опционо)', btn: 'Претплати се', sending: 'Шаљем…', ok: 'Готово. Обавештаваћемо вас.', err: 'Слање није успело. Покушајте поново.', note: 'Оставите имејл — јавићемо се када буде нечег вредног.' },
    pt: { emailPh: 'O seu e-mail', namePh: 'Nome (opcional)', btn: 'Subscrever', sending: 'A enviar…', ok: 'Feito. Mantê-lo-emos informado.', err: 'Não foi possível enviar. Tente novamente.', note: 'Deixe o seu e-mail e escrevemos quando houver algo que valha a pena.' },
    hi: { emailPh: 'आपका ईमेल', namePh: 'नाम (वैकल्पिक)', btn: 'सदस्यता लें', sending: 'भेज रहे हैं…', ok: 'हो गया। हम आपको सूचित रखेंगे।', err: 'भेज नहीं सका। कृपया पुनः प्रयास करें।', note: 'अपना ईमेल छोड़ें, कुछ पढ़ने लायक होने पर हम लिखेंगे।' },
    tr: { emailPh: 'E-postanız', namePh: 'Ad (isteğe bağlı)', btn: 'Abone ol', sending: 'Gönderiliyor…', ok: 'Tamam. Sizi bilgilendirmeye devam edeceğiz.', err: 'Gönderilemedi. Lütfen tekrar deneyin.', note: 'E-postanızı bırakın, okumaya değer bir şey olduğunda yazarız.' },
    ar: { emailPh: 'بريدك الإلكتروني', namePh: 'الاسم (اختياري)', btn: 'اشترك', sending: 'جارٍ الإرسال…', ok: 'تم. سنبقيك على اطلاع.', err: 'تعذر الإرسال. حاول مرة أخرى.', note: 'اترك بريدك الإلكتروني وسنكتب عندما يكون هناك ما يستحق القراءة.' },
    el: { emailPh: 'Το e-mail σας', namePh: 'Όνομα (προαιρετικό)', btn: 'Εγγραφή', sending: 'Αποστολή…', ok: 'Έγινε. Θα σας κρατάμε ενήμερους.', err: 'Αποτυχία αποστολής. Δοκιμάστε ξανά.', note: 'Αφήστε το e-mail σας — θα γράψουμε όταν υπάρχει κάτι αξιόλογο.' },
  },
};

export default function WaitlistForm({
  className = '',
  variant = 'launch',
}: { className?: string; variant?: WaitlistVariant }) {
  const { locale } = useLocale();
  const set = COPY[variant] ?? COPY.launch;
  const c = set[locale] ?? set.en;
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || status === 'sending') return;
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: name.trim() || email.split('@')[0],
          lastName: '',
          email: email.trim(),
          businessSphere:
            variant === 'updates'
              ? 'Newsletter — product updates (home page)'
              : 'Waitlist — pre-registration (Product Hunt)',
        }),
      });
      setStatus(res.ok ? 'ok' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'ok') {
    return (
      <div className={`text-center ${className}`}>
        <p className="text-lg font-medium text-cyan-300">✓ {c.ok}</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className={`mx-auto w-full max-w-md ${className}`}>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={c.emailPh}
          className="flex-1 rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-cyan-500"
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          className="rounded-lg bg-cyan-500 px-6 py-3 font-bold text-gray-900 transition-colors hover:bg-cyan-400 disabled:opacity-60"
        >
          {status === 'sending' ? c.sending : c.btn}
        </button>
      </div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={c.namePh}
        className="mt-3 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition focus:border-cyan-500"
      />
      <p className="mt-3 text-sm text-white/50">{c.note}</p>
      {status === 'error' && <p className="mt-2 text-sm text-red-400">{c.err}</p>}
    </form>
  );
}
