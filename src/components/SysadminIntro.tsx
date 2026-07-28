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
  fr: {
    sub: 'votre administrateur système IA',
    paras: [
      'Sysadmin prend en charge vos serveurs de bout en bout : il les connecte, effectue un audit complet, surveille leur état en continu et corrige lui-même tout ce qui peut l’être au niveau que vous lui accordez — pour le reste, il vous demande votre décision.',
      'Ce n’est pas un moniteur de plus qui vous signale que « quelque chose est cassé ». Il comprend la cause, propose une solution et — avec votre autorisation — l’exécute. La routine, les astreintes et les alertes à 3 heures du matin cessent d’être votre problème.',
      'Plus encore, il peut moderniser lui-même votre système : avec votre accord, il mobilise tous les outils de la plateforme, applique les changements, exécute les tests et met la mise à jour en production.',
      'Et s’il détecte une cyberattaque ou un virus, il appelle lui-même le module ITDR — qui bloque et repousse automatiquement l’attaque ou élimine le virus dans votre système.',
      'Le dernier mot vous revient toujours : toute action risquée n’est exécutée qu’après votre approbation.',
    ],
  },
  de: {
    sub: 'Ihr KI-Systemadministrator',
    paras: [
      'Sysadmin übernimmt Ihre Server vollständig: Er verbindet sie, führt ein komplettes Audit durch, überwacht ihren Zustand rund um die Uhr und behebt selbstständig alles, was auf der von Ihnen festgelegten Ebene behoben werden kann — bei allem anderen holt er Ihre Entscheidung ein.',
      'Das ist kein weiterer Monitor, der Ihnen meldet, dass „etwas kaputt ist“. Er versteht die Ursache, schlägt eine Lösung vor und führt sie — mit Ihrer Erlaubnis — aus. Routine, Bereitschaftsdienste und Alarme um drei Uhr nachts hören auf, Ihr Problem zu sein.',
      'Mehr noch, er kann Ihr System selbst modernisieren: Mit Ihrer Zustimmung nutzt er alle Werkzeuge der Plattform, nimmt die Änderungen vor, führt die Tests aus und bringt das Update in Produktion.',
      'Und erkennt er einen Cyberangriff oder einen Virus, ruft er selbstständig das ITDR-Modul auf — das den Angriff automatisch blockiert und abwehrt oder den Virus in Ihrem System eliminiert.',
      'Das letzte Wort haben immer Sie: Alles Riskante wird erst nach Ihrer Freigabe ausgeführt.',
    ],
  },
  es: {
    sub: 'su administrador de sistemas con IA',
    paras: [
      'Sysadmin se hace cargo por completo de sus servidores: los conecta, realiza una auditoría completa, vigila su estado las 24 horas y corrige por sí mismo todo lo que pueda resolverse en el nivel que usted le asigne; para el resto, solicita su decisión.',
      'No es otro monitor más que le avisa de que "algo se ha roto". Entiende la causa, propone una solución y, con su permiso, la ejecuta. La rutina, las guardias y las alertas a las 3 de la madrugada dejan de ser su problema.',
      'Es más, puede modernizar el sistema por sí mismo: con su aprobación, utiliza todas las herramientas de la plataforma, aplica los cambios, ejecuta las pruebas y pone la actualización en producción.',
      'Y si detecta un ciberataque o un virus, llama por sí mismo al módulo ITDR, que bloquea y repele automáticamente el ataque o elimina el virus de su sistema.',
      'La última palabra siempre es suya: cualquier acción de riesgo solo se ejecuta con su aprobación.',
    ],
  },
  it: {
    sub: 'il vostro amministratore di sistema IA',
    paras: [
      'Sysadmin si occupa interamente dei vostri server: li collega, esegue un audit completo, ne monitora lo stato 24 ore su 24 e risolve autonomamente tutto ciò che può essere risolto al livello che gli assegnate — per il resto, chiede la vostra decisione.',
      'Non è l’ennesimo monitor che vi avvisa che "qualcosa si è rotto". Capisce la causa, propone una soluzione e — con il vostro permesso — la esegue. La routine, i turni di reperibilità e gli allarmi alle 3 del mattino smettono di essere un vostro problema.',
      'Inoltre, può modernizzare da solo il vostro sistema: con la vostra approvazione, utilizza tutti gli strumenti della piattaforma, applica le modifiche, esegue i test e mette l’aggiornamento in produzione.',
      'E se rileva un attacco informatico o un virus, chiama autonomamente il modulo ITDR, che blocca e respinge automaticamente l’attacco o elimina il virus dal vostro sistema.',
      'L’ultima parola spetta sempre a voi: ogni azione rischiosa viene eseguita solo dopo la vostra approvazione.',
    ],
  },
  ja: {
    sub: 'あなたのAIシステム管理者',
    paras: [
      'Sysadminはサーバー管理をすべて引き受けます——接続、完全な監査の実施、24時間体制の状態監視、そしてあなたが設定した権限の範囲内で対応可能な問題は自動的に修復します。それ以外は、あなたの判断を仰ぎます。',
      '「何かが壊れました」と通知するだけの従来型モニターではありません。原因を理解し、解決策を提案し、あなたの許可を得て実行します。日常業務、当番制、深夜のアラートはもうあなたの負担ではなくなります。',
      'さらに、システム自体を自ら近代化することもできます。あなたの承認のもと、プラットフォームのあらゆるツールを使い、変更を加え、テストを実行し、更新を本番環境に反映します。',
      'サイバー攻撃やウイルスを検知した場合は、自らITDRモジュールを呼び出し、攻撃を自動的にブロック・撃退するか、システム内のウイルスを排除します。',
      '最終判断は常にあなたに委ねられます——リスクを伴う操作は、あなたの承認を得てからのみ実行されます。',
    ],
  },
  uk: {
    sub: 'ваш AI-системний адміністратор',
    paras: [
      'Sysadmin бере на себе ваші сервери повністю: підключає, проводить повний аудит, цілодобово стежить за станом і сам усуває те, що можна усунути на рівні, який ви йому визначите, — а щодо решти запитує ваше рішення.',
      'Це не ще один монітор, який шле «щось зламалося». Він розуміє причину, пропонує рішення і — з вашого дозволу — виконує його. Рутина, чергування та нічні тривоги перестають бути вашим болем.',
      'Більше того, він може сам модернізувати вашу систему: з вашого схвалення він задіює всі інструменти платформи, вносить зміни, проганяє тести і запускає оновлення в експлуатацію.',
      'А якщо він виявить кібератаку чи вірус — він сам викликає модуль ITDR, який в автоматичному режимі блокує й відбиває атаку або знищує вірус у системі.',
      'Останнє слово завжди за вами: усе ризиковане робиться лише після вашого схвалення.',
    ],
  },
  sr: {
    sub: 'vaš AI sistem administrator',
    paras: [
      'Sysadmin preuzima potpunu odgovornost za vaše servere: povezuje ih, sprovodi kompletnu reviziju, prati njihovo stanje 24 sata dnevno i samostalno otklanja sve što se može otkloniti na nivou koji mu vi odredite — za sve ostalo traži vašu odluku.',
      'Ovo nije još jedan monitor koji vam javlja da je „nešto pokvareno“. On razume uzrok, predlaže rešenje i — uz vašu dozvolu — sprovodi ga. Rutina, dežurstva i alarmi u 3 ujutru prestaju da budu vaš problem.',
      'Štaviše, može sam da modernizuje vaš sistem: uz vaše odobrenje koristi sve alate na platformi, unosi izmene, pokreće testove i pušta ažuriranje u produkciju.',
      'A ako otkrije sajber-napad ili virus, sam poziva ITDR modul — koji automatski blokira i odbija napad ili uklanja virus iz vašeg sistema.',
      'Poslednja reč je uvek na vama: sve rizično se sprovodi tek nakon vašeg odobrenja.',
    ],
  },
  pt: {
    sub: 'o seu administrador de sistemas com IA',
    paras: [
      'O Sysadmin assume totalmente os seus servidores: liga-os, realiza uma auditoria completa, monitoriza o seu estado 24 horas por dia e corrige por conta própria tudo o que pode ser corrigido ao nível que lhe atribuir — para o resto, pede a sua decisão.',
      'Não é mais um monitor que lhe avisa que "algo quebrou". Ele compreende a causa, propõe uma solução e — com a sua permissão — executa-a. A rotina, as escalas de plantão e os alertas às 3 da manhã deixam de ser o seu problema.',
      'Mais do que isso, pode modernizar o próprio sistema: com a sua aprovação, utiliza todas as ferramentas da plataforma, aplica as alterações, executa os testes e coloca a atualização em produção.',
      'E se detetar um ciberataque ou um vírus, aciona por conta própria o módulo ITDR — que bloqueia e repele automaticamente o ataque ou elimina o vírus do seu sistema.',
      'A última palavra é sempre sua: qualquer ação de risco só é executada após a sua aprovação.',
    ],
  },
  hi: {
    sub: 'आपका AI सिस्टम एडमिनिस्ट्रेटर',
    paras: [
      'Sysadmin आपके सर्वरों की पूरी जिम्मेदारी लेता है: उन्हें कनेक्ट करता है, पूर्ण ऑडिट करता है, चौबीसों घंटे स्थिति पर नज़र रखता है, और आपके द्वारा तय स्तर पर जो भी ठीक किया जा सकता है उसे खुद ठीक करता है — बाकी सब के लिए आपकी राय माँगता है।',
      'यह एक और मॉनिटर नहीं है जो सिर्फ बताए कि "कुछ टूट गया"। यह कारण समझता है, समाधान सुझाता है, और आपकी अनुमति से उसे लागू करता है। रूटीन काम, ऑन-कॉल ड्यूटी और रात 3 बजे के अलर्ट अब आपकी समस्या नहीं रहते।',
      'इससे भी बढ़कर, यह आपके सिस्टम को खुद आधुनिक बना सकता है: आपकी मंजूरी से यह प्लेटफ़ॉर्म के हर टूल का उपयोग करता है, बदलाव करता है, टेस्ट चलाता है और अपडेट को प्रोडक्शन में लागू करता है।',
      'और अगर यह किसी साइबर हमले या वायरस का पता लगाता है, तो यह खुद ITDR मॉड्यूल को बुलाता है — जो स्वचालित रूप से हमले को रोकता और खदेड़ता है या सिस्टम से वायरस हटा देता है।',
      'अंतिम निर्णय हमेशा आपका होता है: कोई भी जोखिम भरा काम केवल आपकी मंजूरी के बाद ही किया जाता है।',
    ],
  },
  tr: {
    sub: 'sizin AI sistem yöneticiniz',
    paras: [
      'Sysadmin sunucularınızın tüm sorumluluğunu üstlenir: onları bağlar, tam bir denetim yapar, durumlarını 7/24 izler ve sizin belirlediğiniz seviyede düzeltilebilecek her şeyi kendi başına düzeltir — gerisi için sizden karar ister.',
      'Bu, size sadece "bir şeyler bozuldu" diyen bir izleme aracı değildir. Nedeni anlar, bir çözüm önerir ve izninizle bunu uygular. Rutin işler, nöbetler ve gece 3 uyarıları artık sizin sorununuz olmaktan çıkar.',
      'Dahası, sistemi kendi başına modernize edebilir: onayınızla platformdaki tüm araçları kullanır, değişiklikleri yapar, testleri çalıştırır ve güncellemeyi üretime alır.',
      'Bir siber saldırı veya virüs tespit ederse, kendisi ITDR modülünü çağırır — bu modül saldırıyı otomatik olarak engelleyip püskürtür veya sisteminizdeki virüsü ortadan kaldırır.',
      'Son söz her zaman sizindir: riskli her işlem yalnızca sizin onayınızdan sonra gerçekleştirilir.',
    ],
  },
  ar: {
    sub: 'مسؤول نظام الذكاء الاصطناعي الخاص بك',
    paras: [
      'يتولى Sysadmin المسؤولية الكاملة عن خوادمك: يصلها، ويجري تدقيقًا كاملاً، ويراقب حالتها على مدار الساعة، ويصلح بنفسه كل ما يمكن إصلاحه ضمن المستوى الذي تحدده له — وبالنسبة لكل ما عدا ذلك، يطلب قرارك.',
      'هذه ليست أداة مراقبة أخرى تُخبرك بأن "شيئًا ما تعطّل". إنه يفهم السبب، ويقترح حلاً، وينفّذه بإذنك. تتوقف الأعمال الروتينية ونوبات الحراسة وتنبيهات الساعة الثالثة فجرًا عن كونها عبئًا عليك.',
      'والأهم من ذلك، يمكنه تحديث نظامك بنفسه: بموافقتك، يستخدم كل أداة على المنصة، ويجري التغييرات، ويشغّل الاختبارات، ويطلق التحديث في بيئة الإنتاج.',
      'وإذا اكتشف هجومًا إلكترونيًا أو فيروسًا، فإنه يستدعي بنفسه وحدة ITDR — التي تحجب وتصد الهجوم تلقائيًا أو تقضي على الفيروس في نظامك.',
      'الكلمة الأخيرة تبقى دائمًا لك: أي إجراء ينطوي على مخاطرة لا يُنفَّذ إلا بعد موافقتك.',
    ],
  },
  el: {
    sub: 'ο δικός σας διαχειριστής συστήματος AI',
    paras: [
      'Το Sysadmin αναλαμβάνει πλήρως τους διακομιστές σας: τους συνδέει, διενεργεί πλήρη έλεγχο, παρακολουθεί την κατάστασή τους όλο το εικοσιτετράωρο και διορθώνει μόνο του ό,τι μπορεί να διορθωθεί στο επίπεδο που εσείς ορίζετε — για όλα τα υπόλοιπα, ζητά την απόφασή σας.',
      'Δεν πρόκειται για ακόμη ένα εργαλείο παρακολούθησης που σας ειδοποιεί ότι «κάτι χάλασε». Κατανοεί την αιτία, προτείνει λύση και — με την άδειά σας — την εφαρμόζει. Η ρουτίνα, οι βάρδιες επιφυλακής και οι ειδοποιήσεις στις 3 τα ξημερώματα παύουν να είναι δικό σας πρόβλημα.',
      'Ακόμη περισσότερο, μπορεί να εκσυγχρονίσει μόνο του το σύστημά σας: με την έγκρισή σας, χρησιμοποιεί όλα τα εργαλεία της πλατφόρμας, εφαρμόζει τις αλλαγές, εκτελεί τα tests και θέτει την ενημέρωση σε παραγωγική λειτουργία.',
      'Κι αν εντοπίσει κυβερνοεπίθεση ή ιό, καλεί μόνο του τη μονάδα ITDR — η οποία αποκλείει και αποκρούει αυτόματα την επίθεση ή εξαλείφει τον ιό από το σύστημά σας.',
      'Ο τελευταίος λόγος ανήκει πάντα σε εσάς: κάθε ενέργεια με ρίσκο εκτελείται μόνο μετά την έγκρισή σας.',
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
