'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';

type Mode = { h: string; tagline: string; items: string[] };
type Data = { h: string; lead: string; monitoring: Mode; automation: Mode };

const DATA: Record<string, Data> = {
  en: {
    h: 'Automated server vs monitoring',
    lead: 'Each server you connect runs in one of two modes. Plans are sized by how many of each you get.',
    monitoring: {
      h: 'Monitoring',
      tagline: 'watches and advises — never changes anything',
      items: [
        'Watches the server 24/7: metrics, health, logs',
        'Detects anomalies, attacks and viruses (ITDR/SIEM)',
        'Raises alerts and prioritized recommendations',
        'Does not act on its own — you (or your team) apply the advice',
      ],
    },
    automation: {
      h: 'Automated maintenance',
      tagline: 'the AI team actually administers the server',
      items: [
        'Runs the initial AI audit and a structured plan',
        'Applies fixes — dry-run first, your approval on anything risky',
        'Continuous remediation and optimization',
        'ITDR auto-blocks and repels attacks, removes malware, then restores the server',
        'A human stays in the loop on every risky change',
      ],
    },
  },
  ru: {
    h: 'Автоматическое обслуживание vs мониторинг',
    lead: 'Каждый подключённый сервер работает в одном из двух режимов. Тарифы различаются тем, сколько серверов каждого типа вы получаете.',
    monitoring: {
      h: 'Мониторинг',
      tagline: 'наблюдает и советует — ничего сам не меняет',
      items: [
        'Следит за сервером 24/7: метрики, здоровье, логи',
        'Обнаруживает аномалии, атаки и вирусы (ITDR/SIEM)',
        'Поднимает алерты и приоритизированные рекомендации',
        'Сам не действует — вы (или ваша команда) применяете советы',
      ],
    },
    automation: {
      h: 'Автоматическое обслуживание',
      tagline: 'AI-команда реально администрирует сервер',
      items: [
        'Проводит первичный AI-аудит и строит структурированный план',
        'Применяет исправления — сначала dry-run, ваше одобрение на рискованном',
        'Непрерывное устранение проблем и оптимизация',
        'ITDR автоматически блокирует и отражает атаки, удаляет вирусы и восстанавливает сервер',
        'Человек в контуре на каждом рискованном изменении',
      ],
    },
  },
  zh: {
    h: '自動化維運 vs 監控',
    lead: '您連接的每一台伺服器都以兩種模式之一運行。方案的差異在於各類型伺服器的數量。',
    monitoring: {
      h: '監控',
      tagline: '觀察並給出建議——絕不擅自更改',
      items: [
        '全天候監看伺服器：指標、健康狀態、日誌',
        '偵測異常、攻擊與病毒（ITDR/SIEM）',
        '發出告警與具優先級的建議',
        '不會自行採取行動——由您（或您的團隊）執行建議',
      ],
    },
    automation: {
      h: '自動化維運',
      tagline: 'AI 團隊真正地管理伺服器',
      items: [
        '執行首次 AI 稽核並產出結構化藍圖',
        '套用修復——先 Dry-run，高風險操作需您核准',
        '持續修復與優化',
        'ITDR 自動攔截並擊退攻擊、清除病毒，並還原伺服器',
        '每一次高風險變更皆有人工參與把關',
      ],
    },
  },
  fr: {
    h: 'Serveur automatisé vs surveillance',
    lead: 'Chaque serveur connecté fonctionne selon l\'un de ces deux modes. Les plans se dimensionnent selon le nombre de chaque type.',
    monitoring: {
      h: 'Surveillance',
      tagline: 'observe et conseille — ne modifie jamais rien',
      items: [
        'Surveille le serveur 24/7 : métriques, santé, journaux',
        'Détecte anomalies, attaques et virus (ITDR/SIEM)',
        'Génère des alertes et des recommandations priorisées',
        'N\'agit pas seul — vous (ou votre équipe) appliquez les conseils',
      ],
    },
    automation: {
      h: 'Maintenance automatisée',
      tagline: 'l\'équipe IA administre réellement le serveur',
      items: [
        'Réalise l\'audit IA initial et un plan structuré',
        'Applique les correctifs — d\'abord en dry-run, votre approbation pour tout risque',
        'Remédiation et optimisation continues',
        'ITDR bloque et repousse automatiquement les attaques, supprime les malwares, puis restaure le serveur',
        'Un humain reste dans la boucle sur chaque changement risqué',
      ],
    },
  },
  de: {
    h: 'Automatisierte Wartung vs. Überwachung',
    lead: 'Jeder verbundene Server läuft in einem von zwei Modi. Die Pläne unterscheiden sich in der Anzahl je Typ.',
    monitoring: {
      h: 'Überwachung',
      tagline: 'beobachtet und berät — ändert nie etwas selbst',
      items: [
        'Überwacht den Server rund um die Uhr: Metriken, Zustand, Logs',
        'Erkennt Anomalien, Angriffe und Viren (ITDR/SIEM)',
        'Löst Alarme und priorisierte Empfehlungen aus',
        'Handelt nicht selbstständig — Sie (oder Ihr Team) setzen die Empfehlungen um',
      ],
    },
    automation: {
      h: 'Automatisierte Wartung',
      tagline: 'das KI-Team administriert den Server tatsächlich',
      items: [
        'Führt das initiale KI-Audit und einen strukturierten Plan aus',
        'Wendet Fixes an — zuerst als Dry-Run, Ihre Freigabe bei Risiko',
        'Kontinuierliche Behebung und Optimierung',
        'ITDR blockiert und wehrt Angriffe automatisch ab, entfernt Malware und stellt den Server wieder her',
        'Ein Mensch bleibt bei jeder riskanten Änderung eingebunden',
      ],
    },
  },
  es: {
    h: 'Mantenimiento automatizado vs. monitorización',
    lead: 'Cada servidor conectado funciona en uno de estos dos modos. Los planes se dimensionan según cuántos de cada tipo se incluyen.',
    monitoring: {
      h: 'Monitorización',
      tagline: 'observa y aconseja — nunca cambia nada por sí sola',
      items: [
        'Vigila el servidor 24/7: métricas, estado, registros',
        'Detecta anomalías, ataques y virus (ITDR/SIEM)',
        'Genera alertas y recomendaciones priorizadas',
        'No actúa por sí misma — usted (o su equipo) aplica los consejos',
      ],
    },
    automation: {
      h: 'Mantenimiento automatizado',
      tagline: 'el equipo de IA administra realmente el servidor',
      items: [
        'Ejecuta la auditoría de IA inicial y un plan estructurado',
        'Aplica correcciones — primero en dry-run, con su aprobación para lo arriesgado',
        'Remediación y optimización continuas',
        'ITDR bloquea y repele ataques automáticamente, elimina malware y restaura el servidor',
        'Un humano permanece en el bucle en cada cambio de riesgo',
      ],
    },
  },
  it: {
    h: 'Manutenzione automatizzata vs monitoraggio',
    lead: 'Ogni server connesso opera in una di queste due modalità. I piani si dimensionano in base al numero di ciascun tipo.',
    monitoring: {
      h: 'Monitoraggio',
      tagline: 'osserva e consiglia — non cambia mai nulla da solo',
      items: [
        'Monitora il server 24/7: metriche, stato, log',
        'Rileva anomalie, attacchi e virus (ITDR/SIEM)',
        'Genera avvisi e raccomandazioni prioritizzate',
        'Non agisce da solo — voi (o il vostro team) applicate i consigli',
      ],
    },
    automation: {
      h: 'Manutenzione automatizzata',
      tagline: 'il team AI amministra davvero il server',
      items: [
        'Esegue l\'audit AI iniziale e un piano strutturato',
        'Applica correzioni — prima in dry-run, con vostra approvazione per il rischio',
        'Rimedio e ottimizzazione continui',
        'ITDR blocca e respinge automaticamente gli attacchi, rimuove il malware e ripristina il server',
        'Un essere umano resta coinvolto in ogni modifica rischiosa',
      ],
    },
  },
  ja: {
    h: '自動化サーバー vs 監視',
    lead: '接続された各サーバーは2つのモードのいずれかで動作します。プランはそれぞれの台数によって規模が決まります。',
    monitoring: {
      h: '監視',
      tagline: '観察し助言する——自ら何も変更しない',
      items: [
        'サーバーを24時間365日監視：メトリクス、状態、ログ',
        '異常・攻撃・ウイルスを検知（ITDR/SIEM）',
        'アラートと優先順位付けされた推奨事項を提示',
        '自ら行動しない——あなた（またはチーム）が助言を適用',
      ],
    },
    automation: {
      h: '自動化メンテナンス',
      tagline: 'AIチームが実際にサーバーを管理',
      items: [
        '初期AI監査と構造化された計画を実行',
        '修正を適用——まずドライラン、リスクがある場合は承認が必要',
        '継続的な是正と最適化',
        'ITDRが攻撃を自動でブロック・撃退し、マルウェアを除去してサーバーを復元',
        'リスクのある変更には常に人間が関与',
      ],
    },
  },
  uk: {
    h: 'Автоматичне обслуговування vs моніторинг',
    lead: 'Кожен підключений сервер працює в одному з двох режимів. Тарифи різняться кількістю серверів кожного типу.',
    monitoring: {
      h: 'Моніторинг',
      tagline: 'спостерігає і радить — нічого сам не змінює',
      items: [
        'Стежить за сервером 24/7: метрики, стан, логи',
        'Виявляє аномалії, атаки та віруси (ITDR/SIEM)',
        'Формує алерти та пріоритизовані рекомендації',
        'Сам не діє — ви (або ваша команда) застосовуєте поради',
      ],
    },
    automation: {
      h: 'Автоматичне обслуговування',
      tagline: 'AI-команда реально адмініструє сервер',
      items: [
        'Проводить первинний AI-аудит і будує структурований план',
        'Застосовує виправлення — спочатку dry-run, ваше схвалення на ризикованому',
        'Безперервне усунення проблем та оптимізація',
        'ITDR автоматично блокує й відбиває атаки, видаляє віруси та відновлює сервер',
        'Людина в контурі на кожній ризикованій зміні',
      ],
    },
  },
  sr: {
    h: 'Automatizovano održavanje vs monitoring',
    lead: 'Svaki povezani server radi u jednom od dva režima. Planovi se razlikuju po broju servera svakog tipa.',
    monitoring: {
      h: 'Monitoring',
      tagline: 'posmatra i savetuje — nikad ništa ne menja sam',
      items: [
        'Prati server 24/7: metrike, zdravlje, logove',
        'Otkriva anomalije, napade i viruse (ITDR/SIEM)',
        'Podiže alarme i prioritizovane preporuke',
        'Ne deluje samostalno — vi (ili vaš tim) primenjujete savete',
      ],
    },
    automation: {
      h: 'Automatizovano održavanje',
      tagline: 'AI tim zaista administrira server',
      items: [
        'Sprovodi početnu AI reviziju i strukturirani plan',
        'Primenjuje ispravke — prvo dry-run, vaše odobrenje za rizično',
        'Kontinuirano otklanjanje problema i optimizacija',
        'ITDR automatski blokira i odbija napade, uklanja malver i vraća server u normalu',
        'Čovek ostaje u petlji kod svake rizične izmene',
      ],
    },
  },
  pt: {
    h: 'Manutenção automatizada vs monitoramento',
    lead: 'Cada servidor conectado opera em um destes dois modos. Os planos se dimensionam pela quantidade de cada tipo.',
    monitoring: {
      h: 'Monitoramento',
      tagline: 'observa e aconselha — nunca muda nada sozinho',
      items: [
        'Acompanha o servidor 24/7: métricas, saúde, logs',
        'Detecta anomalias, ataques e vírus (ITDR/SIEM)',
        'Gera alertas e recomendações priorizadas',
        'Não age por conta própria — você (ou sua equipe) aplica os conselhos',
      ],
    },
    automation: {
      h: 'Manutenção automatizada',
      tagline: 'a equipe de IA realmente administra o servidor',
      items: [
        'Executa a auditoria de IA inicial e um plano estruturado',
        'Aplica correções — primeiro em dry-run, com sua aprovação para o que é arriscado',
        'Remediação e otimização contínuas',
        'ITDR bloqueia e repele ataques automaticamente, remove malware e restaura o servidor',
        'Um humano permanece no loop em cada mudança arriscada',
      ],
    },
  },
  hi: {
    h: 'ऑटोमेटेड रखरखाव बनाम मॉनिटरिंग',
    lead: 'आपका हर जुड़ा हुआ सर्वर इन दो मोड में से किसी एक में चलता है। योजनाएँ हर प्रकार के सर्वरों की संख्या के अनुसार तय होती हैं।',
    monitoring: {
      h: 'मॉनिटरिंग',
      tagline: 'निगरानी और सलाह देता है — कभी कुछ खुद नहीं बदलता',
      items: [
        'सर्वर की 24/7 निगरानी: मेट्रिक्स, स्वास्थ्य, लॉग्स',
        'विसंगतियों, हमलों और वायरस का पता लगाता है (ITDR/SIEM)',
        'अलर्ट और प्राथमिकता-आधारित सिफ़ारिशें उठाता है',
        'खुद कार्रवाई नहीं करता — आप (या आपकी टीम) सलाह लागू करती है',
      ],
    },
    automation: {
      h: 'ऑटोमेटेड रखरखाव',
      tagline: 'AI टीम वास्तव में सर्वर का प्रबंधन करती है',
      items: [
        'प्रारंभिक AI ऑडिट और एक संरचित योजना चलाता है',
        'फिक्स लागू करता है — पहले ड्राई-रन, जोख़िम भरे किसी भी काम पर आपकी मंज़ूरी',
        'निरंतर सुधार और अनुकूलन',
        'ITDR हमलों को स्वतः ब्लॉक और विफल करता है, मैलवेयर हटाता है, फिर सर्वर को बहाल करता है',
        'हर जोख़िम भरे बदलाव में इंसान लूप में बना रहता है',
      ],
    },
  },
  tr: {
    h: 'Otomatik bakım ve izleme karşılaştırması',
    lead: 'Bağladığınız her sunucu iki moddan birinde çalışır. Planlar her birinden kaç adet aldığınıza göre boyutlandırılır.',
    monitoring: {
      h: 'İzleme',
      tagline: 'izler ve tavsiye eder — hiçbir şeyi kendi başına değiştirmez',
      items: [
        'Sunucuyu 7/24 izler: metrikler, sağlık, günlükler',
        'Anormallikleri, saldırıları ve virüsleri tespit eder (ITDR/SIEM)',
        'Uyarılar ve önceliklendirilmiş öneriler sunar',
        'Kendi başına harekete geçmez — siz (veya ekibiniz) önerileri uygularsınız',
      ],
    },
    automation: {
      h: 'Otomatik bakım',
      tagline: 'AI ekibi sunucuyu gerçekten yönetir',
      items: [
        'İlk AI denetimini ve yapılandırılmış bir planı çalıştırır',
        'Düzeltmeleri uygular — önce deneme çalıştırması, riskli olan her şey için onayınız',
        'Sürekli iyileştirme ve optimizasyon',
        'ITDR saldırıları otomatik engeller ve püskürtür, kötü amaçlı yazılımı kaldırır, ardından sunucuyu geri yükler',
        'Riskli her değişiklikte bir insan döngüde kalır',
      ],
    },
  },
  ar: {
    h: 'الصيانة الآلية مقابل المراقبة',
    lead: 'يعمل كل خادم توصله في أحد وضعين. تُحدد الخطط حسب عدد كل نوع تحصل عليه.',
    monitoring: {
      h: 'المراقبة',
      tagline: 'تراقب وتنصح — لا تغيّر شيئًا أبدًا',
      items: [
        'تراقب الخادم على مدار الساعة: المقاييس والصحة والسجلات',
        'تكتشف الحالات الشاذة والهجمات والفيروسات (ITDR/SIEM)',
        'تصدر تنبيهات وتوصيات ذات أولوية',
        'لا تتصرف من تلقاء نفسها — أنت (أو فريقك) تطبق النصيحة',
      ],
    },
    automation: {
      h: 'الصيانة الآلية',
      tagline: 'فريق الذكاء الاصطناعي يدير الخادم فعليًا',
      items: [
        'يُجري التدقيق الأولي بالذكاء الاصطناعي وخطة منظمة',
        'يطبق الإصلاحات — تشغيل تجريبي أولاً، وموافقتك على أي أمر محفوف بالمخاطر',
        'إصلاح وتحسين مستمر',
        'يحظر ITDR الهجمات ويصدها تلقائيًا، ويزيل البرمجيات الخبيثة، ثم يستعيد الخادم',
        'يبقى إنسان في الحلقة عند كل تغيير محفوف بالمخاطر',
      ],
    },
  },
  el: {
    h: 'Αυτοματοποιημένη συντήρηση εναντίον παρακολούθησης',
    lead: 'Κάθε διακομιστής που συνδέετε λειτουργεί σε μία από τις δύο λειτουργίες. Τα πλάνα κλιμακώνονται ανάλογα με το πόσους από κάθε τύπο έχετε.',
    monitoring: {
      h: 'Παρακολούθηση',
      tagline: 'παρακολουθεί και συμβουλεύει — δεν αλλάζει ποτέ τίποτα',
      items: [
        'Παρακολουθεί τον διακομιστή 24/7: μετρικά, υγεία, logs',
        'Εντοπίζει ανωμαλίες, επιθέσεις και ιούς (ITDR/SIEM)',
        'Εκδίδει ειδοποιήσεις και συστάσεις με προτεραιότητα',
        'Δεν ενεργεί μόνη της — εσείς (ή η ομάδα σας) εφαρμόζετε τη συμβουλή',
      ],
    },
    automation: {
      h: 'Αυτοματοποιημένη συντήρηση',
      tagline: 'η ομάδα AI διαχειρίζεται πραγματικά τον διακομιστή',
      items: [
        'Εκτελεί τον αρχικό έλεγχο AI και ένα δομημένο σχέδιο',
        'Εφαρμόζει διορθώσεις — πρώτα δοκιμαστική εκτέλεση, έγκρισή σας για οτιδήποτε επικίνδυνο',
        'Συνεχής αποκατάσταση και βελτιστοποίηση',
        'Το ITDR μπλοκάρει και απωθεί αυτόματα επιθέσεις, αφαιρεί κακόβουλο λογισμικό, κατόπιν επαναφέρει τον διακομιστή',
        'Ένας άνθρωπος παραμένει στον βρόχο σε κάθε επικίνδυνη αλλαγή',
      ],
    },
  },
};

export default function BillingModes() {
  const { locale } = useLocale();
  const d = DATA[locale] ?? DATA.en;

  return (
    <section className="border-b border-white/5 py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">{d.h}</h2>
        <p className="mb-8 max-w-3xl text-lg leading-relaxed text-white/80">{d.lead}</p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-sky-500/30 bg-gradient-to-b from-sky-900/15 to-gray-900/30 p-6">
            <h3 className="text-lg font-bold text-white">{d.monitoring.h}</h3>
            <p className="mb-3 text-xs text-sky-300/80">{d.monitoring.tagline}</p>
            <ul className="space-y-2">
              {d.monitoring.items.map((it) => (
                <li key={it} className="flex gap-2 text-sm text-white/75">
                  <span className="mt-0.5 text-sky-400">▸</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-emerald-500/40 bg-gradient-to-b from-emerald-900/20 to-gray-900/30 p-6">
            <h3 className="text-lg font-bold text-white">{d.automation.h}</h3>
            <p className="mb-3 text-xs text-emerald-300/80">{d.automation.tagline}</p>
            <ul className="space-y-2">
              {d.automation.items.map((it) => (
                <li key={it} className="flex gap-2 text-sm text-white/75">
                  <span className="mt-0.5 text-emerald-400">▸</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
