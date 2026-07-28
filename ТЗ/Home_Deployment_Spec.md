# ТЗ для Claude Code — Home Page Rebuild

**Проект:** ALFACAN Defence Group — Refactoring Home Page
**Дата:** 1 июля 2026
**Приоритет:** HIGH
**URL:** https://guardian.alfa-can.com/ (главная страница)
**Языки:** RU (master), EN, ZH

---

## 🎯 ЦЕЛЬ

Полностью переработать главную страницу сайта под новую brand architecture AlfaCan Defence Group. Home становится страницей-визиткой компании со всеми четырьмя направлениями: Guardian Cloud, ALFACAN Mercanon, AI Studio, BlackWings + партнёрская программа.

---

## 📦 ФАЙЛЫ

Три JSON файла (RU / EN / ZH) с полным контентом:

```
/public/locales/ru/home.json
/public/locales/en/home.json
/public/locales/zh/home.json
```

Все три файла **структурно идентичны** (103 ключа каждый). Используем существующий `useLocale()` i18n паттерн, как для /studio.

---

## 🏗️ АРХИТЕКТУРА СТРАНИЦЫ

### Общая структура (сверху вниз)

```
1. Hero — только логотип, ничего больше
2. Section 1 — Кто мы (5 параграфов)
3. Section 2 — Что мы видим (4 параграфа)
4. Section 3 — Meta (почему говорим так) (1 параграф)
5. Section 4 — Method (как работаем) (1 параграф)
6. Section 5 — Platform Features (2 параграфа)
7. Section 6 — Products Block 1 (Облачная инфраструктура)
    - Guardian Cloud card
    - ALFACAN Mercanon card
8. Section 7 — Products Block 2 (AI Studio)
    - ALFACAN AI Studio umbrella
    - G-Coder card
    - G-Tester card
    - G-Studio card (Coming Soon)
9. Section 8 — Products Block 3 (BlackWings)
    - ALFACAN BlackWings umbrella
    - BlackWings Architect card (Coming Soon 2026-2027)
    - BlackWings Arsenal card (Coming Soon 2026-2027)
    - BlackWings Training Center card (Coming Soon 2026-2027)
10. Section 9 — Партнёрская программа
    - Two CTAs: Стать партнёром + Узнать условия
11. Footer (существующий, не трогаем)
```

---

## 🎨 ДИЗАЙН-РЕКОМЕНДАЦИИ

### Общий стиль

🎯 **Наследуем визуальную идентичность от существующих страниц** (/cloud, /studio). Не изобретаем новую палитру, шрифты, спейсинг.

🎯 **Воздух между секциями важнее любых картинок.** Каждая секция должна дышать. Не плотный текст подряд, а читаемый поток с паузами.

🎯 **Никаких буллетов** в основном тексте манифестной части (Sections 1-5). Только карточки продуктов имеют структурированный формат.

🎯 **Никакого жирного выделения** в основном тексте кроме названий продуктов и их подзаголовков.

### Hero

- **Только логотип по центру** на большом воздухе
- Никаких tagline, subtitle, CTA
- Логотип должен быть **величественным**, не маленьким
- Фон — как на существующих страницах (чёрный / тёмный gradient)
- Прокрутка вниз ведёт к Section 1

### Секции 1-5 (манифест)

- **Длинные предложения с запятыми** — важно! Не разбивать текст на короткие предложения
- Разговорные мостики через "это", "просто", "именно" — сохранять всё как в JSON
- Каждый параграф — отдельный `<p>` с воздухом сверху/снизу
- Никаких иконок, никаких иллюстраций между параграфами
- Только текст, только воздух

### Секции 6-8 (карточки продуктов)

**Формат карточки продукта:**

```
[Название продукта — крупно]
[Подзаголовок — курсив, серым]

[Описание — параграф(ы)]

[Статус — если есть, справа сверху карточки]

→ узнать больше [CTA link]
```

**Для umbrella продукта (AI Studio, BlackWings):**
- Сначала показываем umbrella карточку
- Ниже вложенные карточки суб-продуктов
- Визуально показать иерархию (indent или структурный отступ)

**Hero-изображения для продуктов:**
- Использовать существующие hero-visuals из `/public/images/`:
  - `hero-cloud.jpg` для Guardian Cloud
  - `hero-mercanon.jpg` для Mercanon (если нет, использовать placeholder)
  - `hero-studio.jpg` для AI Studio
  - `hero-coder.jpg` для G-Coder
  - `hero-tester.jpg` для G-Tester
  - `hero-g_studio.jpg` для G-Studio
  - `bw2.png` для BlackWings umbrella
  - `BLACKWINGS-Architect.png` для Architect
  - `BLACKWINGS-Arsenal.png` для Arsenal
  - `BLACKWINGS-Training-Center.png` для Training Center

**Layout hero изображений:**
- Project G продукты: яркие неоновые сцены, hero сверху карточки
- BlackWings продукты: логотип по центру карточки на тёмном фоне

### Секция 9 (Партнёрка)

- **Два CTA-баттона** — Primary (Стать партнёром) + Secondary (Узнать условия)
- Оба ведут на `/referral` (secondary с якорем `#terms`)
- Стиль CTAs — согласовать с существующими баттонами на сайте

---

## 🎭 ТИПОГРАФИКА И ПУНКТУАЦИЯ

### Критически важно для сохранения voice

🔴 **Не разбивать длинные предложения на короткие.** Русский мастер намеренно использует длинные потоки мысли с запятыми. Если переводчик/редактор поставил точки, где я использовала запятые — вернуть запятые.

🔴 **Разговорные мостики сохранять.** "Это", "просто", "именно" в начале предложений — это авторский стиль, не грамматическая ошибка.

🔴 **Многоточие (…) — единый символ**, не три точки (...).

🔴 **Длинное тире (—)**, не короткий дефис (-). Между тире и словом — пробелы.

🔴 **Ё сохранять** в русском тексте.

---

## 🌐 i18n ЗАМЕТКИ

### RU (мастер)

- 103 ключа в JSON
- Все переводы делались с этого файла
- **Не менять** без обсуждения с автором (Таras)

### EN

- Британский регистр (не американский)
- "labour", "realised", "programme" — но НЕ "programme" в контексте партнёрской программы (там "program" — устоявшийся term)
- "data centre" (не "data center") в тексте, но URL остаётся стандартный

### ZH

- Классический литературный регистр (wenyan-style элементы)
- Формальность сохраняется, но не чрезмерная вежливость
- Все технические термины стандартные (神经网络, 人工智能, 云基础设施)

### Что НЕ переводить

- **ALFACAN Defence Group** — во всех языках как есть
- **Guardian Cloud** — во всех языках как есть
- **ALFACAN Mercanon** — во всех языках как есть
- **ALFACAN AI Studio** — во всех языках как есть
- **ALFACAN BlackWings** — во всех языках как есть
- **G-Coder, G-Tester, G-Studio** — во всех языках как есть
- **BlackWings Architect / Arsenal / Training Center** — во всех языках как есть
- **AlfaCan** — во всех языках как есть
- **MSP** — аббревиатура, сохраняется как есть

---

## 🔗 РОУТИНГ И CTAs

Все CTA ведут на существующие или планируемые страницы:

| CTA в JSON | URL | Статус страницы |
|---|---|---|
| Guardian Cloud → узнать больше | `/cloud` | ✅ существует |
| Mercanon → узнать больше | `/mercanon` | ⏳ пока не создан (создать placeholder или redirect) |
| AI Studio (umbrella link) | `/studio` | ✅ существует |
| G-Coder → узнать больше | `/studio/g-coder` | ⏳ создать или использовать `/studio#g-coder` |
| G-Tester → узнать больше | `/studio/g-tester` | ⏳ создать или использовать `/studio#g-tester` |
| G-Studio → узнать больше | `/studio/g-studio` | ⏳ создать или использовать `/studio#g-studio` |
| BlackWings (umbrella link) | `/blackwings` | ⏳ создать placeholder |
| BlackWings Architect | `/blackwings/architect` | ⏳ создать placeholder |
| BlackWings Arsenal | `/blackwings/arsenal` | ⏳ создать placeholder |
| BlackWings Training Center | `/blackwings/training-center` | ⏳ создать placeholder |
| Стать партнёром | `/referral` | ✅ существует |
| Узнать условия | `/referral#terms` | ✅ существует |

**Для несуществующих страниц:**
- Если страница ещё не готова, показать простую заглушку с логотипом продукта + "Скоро · 2026-2027" + email для связи
- НЕ делать 404 error

---

## 🚨 GuardianOps → RENAME

Существующий URL `/ops` (GuardianOps) должен быть **переименован в `/mercanon`**. Все внутренние ссылки, меню, footer — обновить на `Mercanon` вместо `GuardianOps`.

Возможно нужен **redirect** с `/ops` на `/mercanon` для тех у кого сохранены старые ссылки.

---

## 📱 АДАПТИВНОСТЬ

🎯 **Mobile-first подход** — большинство reader'ов будут на телефоне

🎯 **Длинные параграфы** на mobile могут показаться слишком плотными — увеличить `line-height` и `padding` между параграфами на мобильных

🎯 **Карточки продуктов** — на mobile идут в **одну колонку**, hero-изображение сверху карточки

🎯 **Меню** — hamburger на mobile

---

## ⚙️ ОБНОВЛЕНИЕ ГЛАВНОГО МЕНЮ

Текущее меню содержит: `Home · Guardian Cloud · AI Studio · GuardianOps · Referral · Team · Contact`

**Новое меню:**

```
Home · Guardian Cloud · AI Studio · Mercanon · BlackWings · Partners · Team · Contact
```

Где:
- **BlackWings** — новый пункт меню
- **Mercanon** — вместо GuardianOps
- **Partners** — вместо Referral (или оставить Referral, если так удобнее)

---

## 🧪 ТЕСТИРОВАНИЕ

### Что проверить перед деплоем

- [ ] Все три языка (RU/EN/ZH) корректно отображаются
- [ ] Ё в русском тексте сохраняется
- [ ] Многоточие (…) отображается как единый символ
- [ ] Длинное тире (—) отображается корректно
- [ ] Длинные предложения не переносятся некрасиво
- [ ] Все CTAs работают и ведут на правильные URL
- [ ] Hero-изображения загружаются
- [ ] Mobile-версия читается без горизонтальной прокрутки
- [ ] Language switcher переключает языки без reload
- [ ] Footer обновлён (если нужно)
- [ ] Metadata (title, description) обновлены для SEO
- [ ] OG-image для social sharing работает
- [ ] Скорость загрузки не деградировала

### SEO Metadata (мой draft)

**RU:**
```
<title>ALFACAN Defence Group — Автономный AI для систем, где ошибка недопустима</title>
<meta name="description" content="Британская AI компания, создающая автономные нейросети для облачной инфраструктуры, e-commerce, разработки и физического мира. Guardian Cloud, Mercanon, AI Studio, BlackWings.">
```

**EN:**
```
<title>ALFACAN Defence Group — Autonomous AI for Systems Where Error is Unacceptable</title>
<meta name="description" content="British AI company building autonomous neural networks for cloud infrastructure, e-commerce, development and the physical world. Guardian Cloud, Mercanon, AI Studio, BlackWings.">
```

**ZH:**
```
<title>ALFACAN Defence Group — 为不容有失的系统打造的自主人工智能</title>
<meta name="description" content="英国人工智能公司,为云基础设施、电子商务、开发和物理世界打造自主神经网络。Guardian Cloud、Mercanon、AI Studio、BlackWings。">
```

---

## 🎯 ПРИОРИТЕТ РАБОТ

### Фаза 1 (Немедленно — до конца недели)

1. ✅ Задеплоить обновлённые Home JSON файлы (RU/EN/ZH)
2. ✅ Обновить главное меню
3. ✅ Rename `/ops` → `/mercanon` (с redirect)
4. ✅ Создать placeholder страницы для `/mercanon`, `/blackwings*`
5. ✅ Проверить всех три языка на прод

### Фаза 2 (Следующая неделя)

1. Создать полноценные страницы `/mercanon`, `/blackwings`
2. Разделить `/studio` на подстраницы `/studio/g-coder`, `/studio/g-tester`, `/studio/g-studio`
3. Обновить hero-визуалы если нужно

### Фаза 3 (Позже, в очередь)

1. A/B тестирование Home разных вариантов hero
2. Analytics на конверсию по CTAs
3. SEO оптимизация после сбора реальных данных

---

## 📋 ИЗМЕНЕНИЯ В ПЕРЕВОДАХ (для истории)

Я сделала точечные правки к переводам от переводчика:

### EN правки

1. `"you might say"` → `"you will say"` — усиление риторического приёма
2. `"specialists in many spheres of not only business"` → `"specialists in many spheres, not only of business"` — более естественная грамматика
3. `"9 out of 10 cases"` → `"nine out of ten cases"` — литературный регистр
4. `"oh, just another AI"` → `"ah, another AI"` — усталое пренебрежение, не лёгкое удивление
5. `"resides"` (для машин) → `"operates"` — машины работают, а не резидируют
6. `"labor"` → `"labour"` — британский регистр
7. `"realized"` → `"realised"` — британский регистр
8. `"data center"` → `"data centre"` — британский регистр
9. `"specific business; we do not"` → `"specific business, we do not"` — русская пунктуация с запятой сохранена
10. Тире `—` заменены на запятые в местах где переводчик разрывал мысль

### ZH правки

1. `绝不允许出错 System` → `绝不允许出错的系统` — исправлена опечатка с латинским словом
2. `这只是因为,战争重构了` → `只是那场战争重构了` — убран извинительный оттенок
3. `最核心的资产` → `最重要的东西` — убран корпоративный оттенок
4. `回扣` → `佣金` — убран негативный оттенок (kickback → commission)
5. `你项目代码诞生的环境` → `这是你项目代码诞生的环境` — добавлена структура полного предложения
6. Аналогично для всех подкарточек — добавлено `这是` для полноты предложений
7. Добавлены пробелы вокруг чисел (2026 → 2026 году) для лучшей типографики

---

## 🔒 БЕЗОПАСНОСТЬ И ПРОИЗВОДИТЕЛЬНОСТЬ

- ✅ Все ссылки должны быть проверены на HTTPS
- ✅ Изображения должны быть оптимизированы (WebP формат где возможно)
- ✅ Fonts должны быть с `font-display: swap` для быстрой загрузки
- ✅ Lazy loading для изображений ниже fold

---

## 📞 КОНТАКТЫ

Автор ТЗ: Claude (в сотрудничестве с Тарасом Сафоновым)
Дата: 1 июля 2026
Версия: 1.0

Если возникнут вопросы по контенту, тону, брендингу — обращайтесь к Тарасу.
Если возникнут вопросы по i18n структуре или деплою — можете применять best practices, не мешая существующему `useLocale()` паттерну.

---

**Готово к деплою. Швейцарские часы.**
