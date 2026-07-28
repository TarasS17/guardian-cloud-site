'use client';

import Link from 'next/link';
import { useLocale } from '@/lib/i18n/LocaleContext';

export default function Footer() {
  const { locale } = useLocale();

  // Временные переводы прямо в компоненте
  const translations = {
    en: {
      company: "Company",
      companyDesc: "Leading AI solutions for cybersecurity and automation",
      products: "Products",
      guardianCloud: "Guardian Cloud",
      guardianOps: "ALFACAN Mercanon",
      aiStudio: "ALFACAN AI Studio",
      blackWings: "ALFACAN BlackWings",
      referralProgram: "Referral Program",
      about: "About",
      aboutUs: "About Us",
      team: "Our Team",
      contact: "Contact",
      socialMedia: "Follow us on social media",
      copyright: "© 2026 ALFACAN DEFENCE GROUP. All rights reserved.",
      privacyPolicy: "Privacy Policy",
      termsConditions: "Terms & Conditions",
      refundPolicy: "Refund Policy",
      companyLegal: "Alfacan Defence Group Limited | Company No. 17062207",
      registeredIn: "Registered in England and Wales"
    },
    ru: {
      company: "Компания",
      companyDesc: "Ведущие AI-решения для кибербезопасности и автоматизации",
      products: "Продукты",
      guardianCloud: "Guardian Cloud",
      guardianOps: "ALFACAN Mercanon",
      aiStudio: "ALFACAN AI Studio",
      blackWings: "ALFACAN BlackWings",
      referralProgram: "Партнёрская программа",
      about: "О нас",
      aboutUs: "О компании",
      team: "Наша команда",
      contact: "Контакты",
      socialMedia: "Мы в соцсетях",
      copyright: "© 2026 ALFACAN DEFENCE GROUP. Все права защищены.",
      privacyPolicy: "Политика конфиденциальности",
      termsConditions: "Условия использования",
      refundPolicy: "Политика возврата",
      companyLegal: "Alfacan Defence Group Limited | Company No. 17062207",
      registeredIn: "Зарегистрировано в Англии и Уэльсе"
    },
    zh: {
      company: "公司",
      companyDesc: "领先的网络安全和自动化AI解决方案",
      products: "产品",
      guardianCloud: "Guardian Cloud",
      guardianOps: "ALFACAN Mercanon",
      aiStudio: "ALFACAN AI Studio",
      blackWings: "ALFACAN BlackWings",
      referralProgram: "推荐计划",
      about: "关于我们",
      aboutUs: "关于公司",
      team: "我们的团队",
      contact: "联系方式",
      socialMedia: "社交媒体",
      copyright: "© 2026 ALFACAN DEFENCE GROUP。保留所有权利。",
      privacyPolicy: "隐私政策",
      termsConditions: "服务条款",
      refundPolicy: "退款政策",
      companyLegal: "Alfacan Defence Group Limited | 公司编号 17062207",
      registeredIn: "注册于英格兰和威尔士"
    }
  };

  const t = translations[locale] || translations.en;

  return (
    <footer className="bg-gray-900 border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">{t.company}</h3>
            <p className="text-white/80 text-sm font-semibold">ALFACAN DEFENCE GROUP LIMITED</p>
            <p className="text-white/60 text-sm leading-relaxed mt-2">
              66 Paul Street<br />
              London EC2A 4NA<br />
              United Kingdom
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">{t.products}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sysadmin" className="text-white/60 hover:text-cyan-400 text-sm transition-colors">
                  Sysadmin
                </Link>
              </li>
              <li>
                <Link href="/itdr" className="text-white/60 hover:text-cyan-400 text-sm transition-colors">
                  ITDR
                </Link>
              </li>
              <li>
                <Link href="/ai-models" className="text-white/60 hover:text-cyan-400 text-sm transition-colors">
                  AI Models
                </Link>
              </li>
              <li>
                <Link href="/doctrine" className="text-white/60 hover:text-cyan-400 text-sm transition-colors">
                  Doctrine
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">{t.about}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/60 hover:text-cyan-400 text-sm transition-colors">
                  {t.aboutUs}
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-white/60 hover:text-cyan-400 text-sm transition-colors">
                  {t.team}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-cyan-400 text-sm transition-colors">
                  {t.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mb-8">
          <p className="text-white/60 text-sm mb-4">{t.socialMedia}</p>
          <div className="flex space-x-6">
            {/* LinkedIn - уже был */}
            <a
              href="https://www.linkedin.com/showcase/110323953/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-cyan-400 transition-colors"
              aria-label="Visit ALFACAN DEFENCE GROUP on LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* Facebook - добавляем */}
            <a
              href="https://facebook.com/profile.php?id=61586759378082" // Замените на реальный URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-cyan-400 transition-colors"
              aria-label="Visit ALFACAN DEFENCE GROUP on Facebook"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>

            {/* Reddit - добавляем */}
            <a
              href="https://reddit.com/r/AlfaCan17" // Замените на реальный URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-cyan-400 transition-colors"
              aria-label="Visit ALFACAN DEFENCE GROUP on Reddit"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.25a1.25 1.25 0 0 1-2.5.001c0-.689.562-1.251 1.25-1.251zm-9.997 0c.688 0 1.25.561 1.25 1.25a1.25 1.25 0 1 1-2.5 0c0-.689.561-1.251 1.25-1.251zm8.106 4.058c1.05 0 1.9.85 1.9 1.9 0 .405-.132.778-.355 1.085.54.588.872 1.377.872 2.247 0 1.772-1.441 3.21-3.213 3.21-1.772 0-3.213-1.438-3.213-3.21 0-.871.332-1.66.872-2.247a1.896 1.896 0 0 1-.355-1.085c0-1.05.85-1.9 1.9-1.9 1.05 0 1.9.85 1.9 1.9 0 .405-.132.778-.355 1.085.54.588.872 1.377.872 2.247 0 1.772-1.441 3.21-3.213 3.21-1.772 0-3.213-1.438-3.213-3.21 0-.871.332-1.66.872-2.247a1.896 1.896 0 0 1-.355-1.085c0-1.05.85-1.9 1.9-1.9zm-.001 1.9c-.524 0-.95.426-.95.95 0 .524.426.95.95.95.524 0 .95-.426.95-.95 0-.524-.426-.95-.95-.95zm-2.248 3.81c0 .647.525 1.172 1.172 1.172.647 0 1.172-.525 1.172-1.172 0-.647-.525-1.172-1.172-1.172-.647 0-1.172.525-1.172 1.172z"/>
              </svg>
            </a>

            {/* X (Twitter) - добавляем */}
            <a
              href="https://x.com/AlfacanG" // Замените на реальный URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-cyan-400 transition-colors"
              aria-label="Visit ALFACAN DEFENCE GROUP on X (Twitter)"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/@guardian-ai-r7x"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-cyan-400 transition-colors"
              aria-label="Visit ALFACAN DEFENCE GROUP on YouTube"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-white/40 text-sm space-y-3">
          {/* Legal links row */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs sm:text-sm">
            <Link href="/privacy" className="text-white/60 hover:text-cyan-400 transition-colors">
              {t.privacyPolicy}
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/terms" className="text-white/60 hover:text-cyan-400 transition-colors">
              {t.termsConditions}
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/refund" className="text-white/60 hover:text-cyan-400 transition-colors">
              {t.refundPolicy}
            </Link>
          </div>

          {/* Copyright */}
          <p>{t.copyright}</p>

          {/* Company legal details */}
          <div className="text-white/40 text-xs space-y-1">
            <p>{t.companyLegal}</p>
            <p>{t.registeredIn}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}