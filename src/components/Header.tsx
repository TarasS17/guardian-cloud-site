'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe, Menu, X } from 'lucide-react';
import { useLocale } from '@/lib/i18n/LocaleContext';
import { locales, localeNames, Locale } from '@/lib/i18n/config';
import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const pathname = usePathname();
  const { locale, setLocale } = useLocale();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/sysadmin', label: 'Sysadmin' },
    { href: '/itdr', label: 'ITDR' },
    { href: '/ai-models', label: 'AI Models' },
    { href: '/doctrine', label: 'Doctrine' },
    { href: '/billing', label: 'Billing' },
    { href: '/referral', label: 'Partners' },
    { href: '/about', label: 'About Us' },
    { href: '/team', label: 'Team' },
    { href: '/contact', label: 'Contact' },
  ];

  // Закрытие языкового меню при клике вне
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (loc: Locale) => {
    setLocale(loc);
    setIsLangMenuOpen(false);
    setIsMobileMenuOpen(false); // Закрываем мобильное меню при смене языка
  };

  return (
    <>
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="https://alfa-can.com" className="group flex flex-col leading-none transition-colors">
            <span className="text-xl font-bold tracking-wide text-white group-hover:text-cyan-400 md:text-2xl">ALFACAN</span>
            <span className="mt-0.5 text-[9px] font-medium tracking-[0.32em] text-white/55 group-hover:text-white/80 md:text-[11px]">DEFENCE GROUP</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                  pathname === item.href ? 'text-cyan-400' : 'text-white/80'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="relative" ref={langMenuRef}>
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-2 text-white/80 hover:text-cyan-400 transition-colors"
                aria-label="Toggle language menu"
                aria-expanded={isLangMenuOpen}
              >
                <Globe size={20} aria-hidden="true" />
                <span className="text-sm font-medium">{localeNames[locale]}</span>
              </button>

              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-gray-900 border border-white/10 rounded-lg shadow-xl z-50">
                  {locales.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => handleLanguageChange(loc as Locale)}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                        locale === loc
                          ? 'bg-blue-600 text-white'
                          : 'text-white/80 hover:bg-gray-800'
                      }`}
                    >
                      {localeNames[loc as Locale]}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-lg font-medium transition-colors hover:text-cyan-400 ${
                    pathname === item.href ? 'text-cyan-400' : 'text-white/80'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Language Switcher for Mobile — inline buttons (no dropdown toggle) */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <div className="mb-3 flex items-center gap-2 text-white/80">
                <Globe size={18} aria-hidden="true" />
                <span className="text-sm">Language:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {locales.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => handleLanguageChange(loc as Locale)}
                    aria-pressed={locale === loc}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                      locale === loc
                        ? 'bg-cyan-500 text-gray-900'
                        : 'bg-white/5 text-white/80 hover:bg-white/10'
                    }`}
                  >
                    {localeNames[loc as Locale]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>

      {/* Overlay — sibling of <header> so the menu (inside the z-50 header) stays above it
          and receives taps; only the area outside the menu closes it. */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}