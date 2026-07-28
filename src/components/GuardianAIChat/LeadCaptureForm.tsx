
import React, { useState } from 'react';
import { LanguageCode, LeadData } from './types';
import { translations } from './i18n';

interface LeadCaptureFormProps {
  language: LanguageCode;
  onSubmit: (data: LeadData) => void;
}

const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({ language, onSubmit }) => {
  const t = translations[language].form;
  const [formData, setFormData] = useState<LeadData>({
    firstName: '', lastName: '', country: '', city: '', state: '',
    businessSphere: '', otherSphere: '', companyName: '', position: '',
    website: '', email: '', phone: '',
  });
  const [consent, setConsent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (consent) {
      onSubmit(formData);
    }
  };

  const sphereOptions = t.businessSphereOptions;

  return (
    <div className="flex flex-col h-full bg-slate-800 text-white p-4 overflow-y-auto">
      <h2 className="text-xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Tell Us About Yourself</h2>
      <form onSubmit={handleSubmit} className="space-y-3 text-sm">
        <div className="grid grid-cols-2 gap-3">
          <input type="text" name="firstName" placeholder={t.firstName} value={formData.firstName} onChange={handleChange} className="bg-slate-700 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <input type="text" name="lastName" placeholder={t.lastName} value={formData.lastName} onChange={handleChange} className="bg-slate-700 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>
        <div className="grid grid-cols-3 gap-3">
          <input type="text" name="country" placeholder={t.country} value={formData.country} onChange={handleChange} className="bg-slate-700 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="text" name="city" placeholder={t.city} value={formData.city} onChange={handleChange} className="bg-slate-700 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="text" name="state" placeholder={t.state} value={formData.state} onChange={handleChange} className="bg-slate-700 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <select name="businessSphere" value={formData.businessSphere} onChange={handleChange} className="bg-slate-700 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">{t.businessSphere}</option>
          {Object.entries(sphereOptions).map(([key, value]) => <option key={key} value={key}>{value}</option>)}
        </select>
        {formData.businessSphere === 'other' && (
          <input type="text" name="otherSphere" placeholder={t.otherSpherePlaceholder} value={formData.otherSphere} onChange={handleChange} className="bg-slate-700 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
        )}
        <div className="grid grid-cols-2 gap-3">
          <input type="text" name="companyName" placeholder={t.companyName} value={formData.companyName} onChange={handleChange} className="bg-slate-700 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="text" name="position" placeholder={t.position} value={formData.position} onChange={handleChange} className="bg-slate-700 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <input type="url" name="website" placeholder={t.website} value={formData.website} onChange={handleChange} className="bg-slate-700 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <div className="grid grid-cols-2 gap-3">
          <input type="email" name="email" placeholder={t.email} value={formData.email} onChange={handleChange} className="bg-slate-700 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          <input type="tel" name="phone" placeholder={t.phone} value={formData.phone} onChange={handleChange} className="bg-slate-700 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="flex items-start space-x-2 pt-2">
          <input type="checkbox" id="consent" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
          <label htmlFor="consent" className="text-xs text-slate-400">{t.consent}</label>
        </div>
        <div className="pt-2">
          <button type="submit" disabled={!consent} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 px-4 rounded-lg transition-colors disabled:bg-slate-600 disabled:cursor-not-allowed">
            {t.continue}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LeadCaptureForm;
