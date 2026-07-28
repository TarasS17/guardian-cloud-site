# ТЗ для Claude Chat — переписать AI Studio landing copy (v2)

**От:** Гл. конструктор (Claude VSCode). **Кому:** Claude Chat. **Источник истины:** `docs/ТД/TD_jarvis-council.md` (приложен) + этот ТЗ. **Дедлайна нет** (финансирование закрыто — GCP Startup; делаем правильно, не на скорость). Структура/тон твоего v1 — отличные, оставляем. Ниже — **точные правки**, иначе порвут на GCP/инвестор-аудите.

---

## 1. КОНФИДЕНЦИАЛЬНОСТЬ — РАЗВОРОТ (стало нашей сильнейшей картой)

**Что было неверно в v1:** «By default your code stays inside our infrastructure / EU perimeter» — это **противоречило коду** (дефолт был external ON) и **собственному скриншоту тумблера**.

**Что СТАЛО (реализовано + задеплоено 06-27):**
- **Air-gap — это КОНТРАКТНАЯ ГАРАНТИЯ, не «switch».** Подписанный MSA **§3.3 «Air-Gap Guarantee»**: *«customer data… and proprietary source code shall NEVER be transmitted to external, public, or third-party AI APIs… processed entirely within the Provider's EU-based infrastructure.»* Нарушение = **material breach, liability cap НЕ применяется**, клиент может расторгнуть + взыскать ущерб.
- **По умолчанию внешний (Claude) валидатор ДРЕМЛЕТ.** Совет работает полностью на наших EU self-hosted моделях. High-risk изменения проверяются **вторым air-gapped локальным проходом** — наружу не уходит ничего.
- **Внешняя валидация (Claude) — опциональна, по явному запросу клиента**, и даже тогда уходит **только обезличенный код** (секреты/токены/email/IP/URL/хэши редактируются перед отправкой).

**Как написать секцию (рекомендация):**
- Заголовок: что-то вроде *«Your code never leaves the EU. It's not a setting — it's a contractual guarantee.»*
- Тело: гарантия §3.3 + uncapped liability как доказательство серьёзности; «watch the AI work, and know it never phones home».
- **Убрать карточку «Validator (Claude)» как дефолтного 4-го агента** (на Guardian-Cloud-странице Claude дремлет). Совет = **3 локальных агента (Orchestrator / Generator / Reviewer)** + air-gapped второй проход на high-risk. Claude можно упомянуть **одной строкой** как опциональный, по запросу, de-identified (или вынести в standalone-трек).
- «By default stays inside EU» теперь **ПРАВДА** — можно говорить уверенно.

## 2. УБРАТЬ ВЫДУМАННЫЕ ЧИСЛА (нарушают твоё же правило «no unverified numbers»)
- ❌ **«750 billion parameter capacity»** — выдумано, у нас нет верифицированного числа. → просто *«self-hosted GLM-5.2 + Gemma-4 + Qwen3»* без суммы параметров.
- ❌ **«1 million token context — your entire repository»** — модель Qwen2.5-14B-1M **удалена**; оркестратор = Gemma-4. Контекст репо = **paths-only structural map (cap ~800 файлов)**, не «весь репо в 1M токенов». → переписать как *«a structural map of your whole repository»* (без «1M tokens»).

## 3. ЦЕНЫ — точные (Section 7)
- **Включённые места по тирам:** Monitor 0 · Server **1** · Cluster **3** · **Platform 10** (не 5!) · Enterprise custom/unlimited.
- **Уровни мест = ЧАСЫ/неделю на локальной модели:** **S1 = 10ч · S2 = 20ч · S3 = 40ч · S4 = 100ч** в неделю.
- **Доп.места по S-уровню:** **S1 $25 · S2 $50 · S3 $75 · S4 $100 /мес** (НЕ «$20–100»), + **$50 setup** за место сверх нетто.
- Внешние модели (если клиент включит opt-in) = токены по себестоимости **+20%**.

## 4. СМЯГЧИТЬ overclaim (нарушают «no superlatives / no unbuilt claims»)
- «most capable open-weight coding model» → **«a leading open-weight coding model»**.
- «Built on Gemma-4 **with our doctrine**» — доктрина (s-rag) в совет **ещё не вшита** → «grounded in our engineering doctrine (rolling out)» или просто Gemma-4.
- Section 7 «**can be invoked** by ITDR/Sysadmin» — multi-agent routing **не построен** → будущее время / «designed to» / roadmap-бейдж.

---

## ЧТО ОСТАВИТЬ (было сильно)
Структура (10 секций), тон (direct, no fluff), «COPY DELIBERATELY OMITTED» дисциплина, VISUAL DIRECTION, i18n NOTES, CTA inventory — **всё хорошо, не трогай.** Hero «The AI engineering council. Always in the room with you.» + «Cursor wrote your code in a black box. We invite you into the meeting.» — **оставить.**

## HONEST FRAMING (guardrails — это и есть наша репутация)
- **Архитектура совета + человек-в-контуре + air-gap (P1) — РЕАЛЬНЫ** (заявлять можно).
- **Рассуждения моделей — на mock** до GPU (~5 дн) → **«private beta — launching with the platform»** + maturity-badge. **НЕ** «AI live now».

## ПОЗИЦИОНИРОВАНИЕ
- **🆎 Both tracks, integrated-first.** Сейчас: AI Studio **включён в тарифы Guardian Cloud (Server+)**. Standalone (self-serve подписка) = **pre-register, Q4 2026**.
- Маршрут: **`/studio`** (top-level) + короткая `/cloud/ai-studio` (Cloud→AI Studio connection, ссылка на /studio).

## ФАКТЫ ДЛЯ ИСПОЛЬЗОВАНИЯ (из TD_jarvis-council)
- Совет: orchestrator (Gemma-4) → generator (GLM-5.2) → reviewer (GLM-5.2) → [air-gapped local 2nd pass на high-risk].
- Участие: continue / «why?» (агент отвечает из reasoning, записанного в момент решения) / steer / stop — на планировании И написании.
- Инварианты: CRITICAL не авто-применяется; «действуй» = реплика; human-on-the-loop.
- Категория: **observable + interruptible council** vs batch-mode Cursor/Windsurf/Copilot.

**Перепиши v1 с этими правками. Структуру и тон сохрани. Вопросы — через Тараса.**
