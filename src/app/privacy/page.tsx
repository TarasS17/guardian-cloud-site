import fs from 'fs';
import path from 'path';
import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Policy | Guardian AI',
  description:
    'Privacy Policy for Guardian AI platform by Alfacan Defence Group Limited. Learn how we collect, use, and protect your personal data under UK GDPR.',
  alternates: { canonical: 'https://guardian.alfa-can.com/privacy' },
};

export default function PrivacyPolicyPage() {
  const filePath = path.join(process.cwd(), 'src/content/legal/privacy_policy.md');
  const content = fs.readFileSync(filePath, 'utf8');

  return <LegalPage content={content} />;
}
