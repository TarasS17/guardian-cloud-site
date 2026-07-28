# Guardian AI - Чеклист развёртывания

## 📋 ПЕРЕД РАЗВЁРТЫВАНИЕМ НА VERCEL

### 1. ✅ Подготовка файлов
- [x] `TESTING_REPORT.md` - Полный отчёт тестирования
- [x] `public/sitemap.xml` - Sitemap для поисковых систем
- [x] `public/robots.txt` - Инструкции для краулеров
- [x] `vercel.json` - Конфигурация Vercel с Security Headers

### 2. ✅ Код и тесты
- [x] Build прошёл успешно без ошибок
- [x] Все маршруты работают
- [x] API endpoints настроены
- [x] Нет console errors
- [ ] ESLint issues проверены
- [ ] TypeScript errors проверены (игнорируются в build)

### 3. ✅ Окружение и переменные
- [x] `.env.local` содержит `NEXT_PUBLIC_UMAMI_WEBSITE_ID`
- [x] Vercel Dashboard имеет все необходимые переменные
- [ ] Production домен настроен в Vercel
- [ ] SSL сертификат автоматически выпущен

### 4. ✅ SEO и мета-данные
- [x] Meta title и description установлены
- [x] Keywords добавлены
- [x] `sitemap.xml` создан
- [x] `robots.txt` создан
- [ ] Open Graph теги добавлены (рекомендуется)
- [ ] Schema.org разметка добавлена (рекомендуется)
- [ ] Яндекс.Вебмастер подтверждение (при необходимости)

### 5. ✅ Безопасность
- [x] HTTPS будет включён (Vercel)
- [x] Security Headers настроены в `vercel.json`
- [x] CORS настроен для API
- [x] Email валидация в контактной форме
- [ ] Rate limiting для API (Optional)
- [ ] DDoS protection от Vercel (автоматически)

### 6. ✅ Аналитика и мониторинг
- [x] Umami analytics настроена
- [x] Tracking ID добавлен
- [ ] Vercel Analytics включена (Optional)
- [ ] Google Search Console настроена
- [ ] Яндекс.Метрика настроена (если нужна)

### 7. ✅ Производительность
- [x] Шрифты оптимизированы (local fonts)
- [x] Изображения оптимизированы (Next.js Image)
- [x] Bundle size в норме (< 150KB shared)
- [ ] Lighthouse score > 80 (Need verification)
- [ ] Core Web Vitals оптимизированы (Need verification)

### 8. ✅ Совместимость
- [x] Адаптивный дизайн (Tailwind CSS)
- [x] Мобильное меню работает
- [x] Видео фоны работают
- [ ] Тестировано в Chrome (Need verification)
- [ ] Тестировано в Firefox (Need verification)
- [ ] Тестировано в Safari (Need verification)
- [ ] Тестировано на мобильных (Need verification)

### 9. ✅ Интеграции
- [x] Resend email API настроена
- [x] LinkedIn proxy работает
- [x] Umami аналитика интегрирована
- [ ] Email уведомления отправляются корректно
- [ ] LinkedIn новости загружаются

### 10. ✅ Контент
- [x] Все видео доступны
- [x] Все изображения загружаются
- [x] Текстовый контент корректный
- [x] Ссылки работают
- [ ] Проверены внешние ссылки (Need verification)

---

## 🚀 ЭТАПЫ РАЗВЁРТЫВАНИЯ

### Этап 1: Подготовка репозитория
```bash
# 1. Убедитесь, что все файлы закоммичены
git add -A
git commit -m "feat: добавлены sitemap, robots, vercel config"

# 2. Убедитесь, что нет unsaved changes
git status

# 3. Push в GitHub
git push origin main
```

### Этап 2: Развёртывание на Vercel
```bash
# Вариант 1: Через Vercel Dashboard (рекомендуется)
# 1. Зайдите на https://vercel.com
# 2. Нажмите "New Project"
# 3. Выберите GitHub репозиторий
# 4. Vercel автоматически обнаружит Next.js и настроит build

# Вариант 2: Через Vercel CLI
npm install -g vercel
vercel --prod
```

### Этап 3: Настройка переменных в Vercel
```
Dashboard → Settings → Environment Variables

Добавьте:
- NEXT_PUBLIC_UMAMI_WEBSITE_ID = c4268d28-e516-4a0d-8450-97ea0a31d9e1
- Любые другие API ключи (если используются)
```

### Этап 4: Настройка домена
```
Dashboard → Settings → Domains

1. Добавьте свой домен
2. Обновите DNS записи (инструкции Vercel)
3. Дождитесь SSL сертификата (обычно <10 минут)
```

### Этап 5: Проверка после развёртывания
```bash
# 1. Проверьте, что сайт доступен
curl -I https://guardian-ai.com

# 2. Проверьте Security Headers
curl -I https://guardian-ai.com | grep -i "strict-transport"

# 3. Проверьте sitemap
https://guardian-ai.com/sitemap.xml

# 4. Проверьте robots.txt
https://guardian-ai.com/robots.txt

# 5. Проверьте страницы
https://guardian-ai.com/
https://guardian-ai.com/cloud
https://guardian-ai.com/ops
https://guardian-ai.com/referral
https://guardian-ai.com/team
https://guardian-ai.com/contact
```

---

## 📊 POST-РАЗВЁРТЫВАНИЕ ПРОВЕРКИ

### 1. Search Engine Submission
```
1. Google Search Console:
   - Зайдите на https://search.google.com/search-console
   - Добавьте ваш домен
   - Загрузите sitemap.xml
   - Запросите индексацию

2. Яндекс.Вебмастер (если нужна локализация):
   - https://webmaster.yandex.ru
   - Добавьте домен
   - Загрузите sitemap.xml

3. Bing Webmaster Tools:
   - https://www.bing.com/webmasters
   - Добавьте домен
```

### 2. Проверка производительности
```
1. Google PageSpeed Insights:
   https://pagespeed.web.dev/?url=https://guardian-ai.com

2. Lighthouse (встроен в Chrome DevTools)

3. GTmetrix:
   https://gtmetrix.com

Целевые метрики:
- Lighthouse Performance: > 80
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
```

### 3. Проверка безопасности
```
1. SecurityHeaders.com:
   https://securityheaders.com/?q=guardian-ai.com

2. SSL Labs:
   https://www.ssllabs.com/ssltest/

Должны быть:
- A или A+ оценка
- HSTS enabled
- Content Security Policy
```

### 4. Мониторинг аналитики
```
1. Проверьте Umami Dashboard:
   - Видны ли посещения?
   - Работает ли tracking?

2. Проверьте Vercel Logs:
   - Нет ошибок в API?
   - Нет 500 ошибок?

3. Настройте алерты:
   - Error rate > 1%
   - Uptime < 99.5%
```

### 5. Функциональное тестирование
```
1. Протестируйте все страницы:
   - Загружаются ли?
   - Отображается ли контент?
   - Работают ли видео?

2. Протестируйте контактную форму:
   - Отправляется ли данные?
   - Приходит ли email?

3. Протестируйте на мобильных:
   - Адаптивно ли?
   - Работает ли мобильное меню?
   - Видны ли видео?
```

---

## ⚠️ ПРОБЛЕМЫ И РЕШЕНИЯ

### Проблема: Vercel не находит Next.js проект
**Решение:**
- Убедитесь, что `package.json` в корневой папке
- Проверьте, что `next.config.js` существует

### Проблема: Variables не установлены
**Решение:**
- Зайдите в Vercel Dashboard → Settings → Environment Variables
- Добавьте `NEXT_PUBLIC_UMAMI_WEBSITE_ID`
- Перезапустите deploy

### Проблема: SSL certificate не выпущен
**Решение:**
- Дождитесь 10-15 минут
- Проверьте DNS настройки
- Свяжитесь с Vercel support

### Проблема: Images не загружаются
**Решение:**
- Проверьте, что files в `public/` папке
- Убедитесь в правильности пути
- Очистите Vercel кэш

---

## 📝 ДОКУМЕНТАЦИЯ

### Полезные ссылки:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment/vercel)
- [Google Search Console](https://search.google.com/search-console)
- [Umami Analytics](https://umami.is/)

### Команды для локального тестирования:
```bash
# Build production version locally
npm run build

# Run production version
npm start

# Check for TypeScript errors
npx tsc --noEmit

# Check for ESLint errors
npm run lint
```

---

## ✅ ГОТОВО К PRODUCTION!

**Дата подготовки:** 3 декабря 2024
**Версия:** 1.0
**Статус:** ✅ ГОТОВО

После выполнения всех пунктов из чеклиста, сайт готов к развёртыванию на Vercel.

---

*Последнее обновление: 3 декабря 2024*
