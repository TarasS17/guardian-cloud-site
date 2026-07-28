import fs from 'fs';
import path from 'path';
import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Guardian AI',
  description:
    'Terms and Conditions for Guardian AI platform by Alfacan Defence Group Limited. Review our service terms, user obligations, and legal provisions.',
  alternates: { canonical: 'https://guardian.alfa-can.com/terms' },
};

export default function TermsPage() {
  const filePath = path.join(process.cwd(), 'src/content/legal/terms_and_conditions.md');
  const content = fs.readFileSync(filePath, 'utf8');

  return <LegalPage content={content} />;
}
