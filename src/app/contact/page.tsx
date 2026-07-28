'use client';

import { useState } from 'react';
import { useLocale } from '@/lib/i18n/LocaleContext';
import { Mail, Phone, MapPin } from 'lucide-react';
import VisitorCounter from '@/components/VisitorCounter';

export default function ContactPage() {
  const { locale } = useLocale();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: 'Guardian Cloud',
    message: '',
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert(locale === 'ru' ? 'Спасибо! Мы свяжемся с вами в течение 24 часов.' : 'Thank you! We will contact you within 24 hours.');
        
        // Сброс формы
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          product: 'Guardian Cloud',
          message: '',
          consent: false,
        });

        // Дополнительный сброс DOM формы
        const form = e.target as HTMLFormElement;
        setTimeout(() => form.reset(), 0);
        
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert(locale === 'ru' ? 'Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.' : 'An error occurred while sending. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const getTitle = () => {
    if (locale === 'ru') return 'Свяжитесь с нами';
    if (locale === 'zh') return '联系我们';
    return 'Contact Us';
  };

  const getSubtitle = () => {
    if (locale === 'ru') return 'Готовы трансформировать ваш бизнес? Заполните форму, и наша команда свяжется с вами в течение 24 часов.';
    if (locale === 'zh') return '准备改变您的业务？填写表格，我们的团队将在24小时内与您联系。';
    return 'Ready to transform your business? Fill out the form and our team will contact you within 24 hours.';
  };

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="container">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">{getTitle()}</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">{getSubtitle()}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-cyan-500/20 text-center">
            <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4" aria-label="Email contact method">
              <Mail className="w-8 h-8 text-cyan-400" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <a href="mailto:info@guardian.alfa-can.com" className="text-cyan-400 hover:text-cyan-300 transition-colors" aria-label="Send email to info@guardian.alfa-can.com">
              info@guardian.alfa-can.com
            </a>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-cyan-500/20 text-center">
            <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4" aria-label="Phone contact method">
              <Phone className="w-8 h-8 text-cyan-400" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              {locale === 'ru' ? 'Телефон' : locale === 'zh' ? '电话' : 'Phone'}
            </h3>
            <a href="tel:+447520654958" className="text-cyan-400 hover:text-cyan-300 transition-colors" aria-label="Call us at +44 7520 654958">
              +44 7520 654958
            </a>
          </div>

          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-cyan-500/20 text-center">
            <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4" aria-label="Address contact method">
              <MapPin className="w-8 h-8 text-cyan-400" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              {locale === 'ru' ? 'Адрес' : locale === 'zh' ? '地址' : 'Address'}
            </h3>
            <p className="text-cyan-400">London, United Kingdom</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-cyan-500/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">
                  {locale === 'ru' ? 'Имя *' : locale === 'zh' ? '姓名 *' : 'Name *'}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={locale === 'ru' ? 'Иван Петров' : 'John Doe'}
                  className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={locale === 'ru' ? 'ivan@example.com' : 'john@example.com'}
                  className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="company" className="block text-white mb-2">
                  {locale === 'ru' ? 'Компания' : locale === 'zh' ? '公司' : 'Company'}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder={locale === 'ru' ? 'Название компании' : 'Company name'}
                  className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-white mb-2">
                  {locale === 'ru' ? 'Телефон' : locale === 'zh' ? '电话' : 'Phone'}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+30 xxxxxxxxxx"
                  className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="product" className="block text-white mb-2">
                {locale === 'ru' ? 'Интересующий продукт' : locale === 'zh' ? '感兴趣的产品' : 'Product of Interest'}
              </label>
              <select
                id="product"
                name="product"
                value={formData.product}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
              >
                <option value="Guardian Cloud">Guardian Cloud</option>
                <option value="ALFACAN Mercanon">ALFACAN Mercanon</option>
                <option value="Both">
                  {locale === 'ru' ? 'Оба продукта' : locale === 'zh' ? '两种产品' : 'Both Products'}
                </option>
                <option value="Referral">
                  {locale === 'ru' ? 'Реферальная программа' : locale === 'zh' ? '推荐计划' : 'Referral Program'}
                </option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-white mb-2">
                {locale === 'ru' ? 'Сообщение *' : locale === 'zh' ? '信息 *' : 'Message *'}
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder={locale === 'ru' ? 'Расскажите о вашей задаче или вопросе...' : 'Tell us about your task or question...'}
                className="w-full bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors resize-none"
              />
            </div>

            <div className="mb-6">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                  className="mt-1 w-5 h-5 text-cyan-500 bg-gray-800 border-gray-700 rounded focus:ring-cyan-500"
                />
                <span className="text-white/80 text-sm">
                  {locale === 'ru' 
                    ? 'Я согласен с условиями обработки персональных данных' 
                    : locale === 'zh'
                    ? '我同意个人数据处理条款'
                    : 'I agree to the terms of personal data processing'
                  }
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !formData.consent}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-4 px-8 rounded-lg transition-colors"
            >
              {isSubmitting 
                ? (locale === 'ru' ? 'Отправка...' : locale === 'zh' ? '发送中...' : 'Sending...')
                : (locale === 'ru' ? 'Отправить сообщение' : locale === 'zh' ? '发送消息' : 'Send Message')
              }
            </button>
          </form>
        </div>
      </div>
      <VisitorCounter />
    </div>
  );
}