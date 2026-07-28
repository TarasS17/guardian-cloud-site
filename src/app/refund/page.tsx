import fs from 'fs';
import path from 'path';
import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Refund Policy | Guardian AI',
  description:
    'Refund Policy for Guardian AI platform by Alfacan Defence Group Limited. Information on subscription cancellation, refund eligibility, and process.',
  alternates: { canonical: 'https://guardian.alfa-can.com/refund' },
};

export default function RefundPolicyPage() {
  const filePath = path.join(process.cwd(), 'src/content/legal/refund_policy.md');
  const content = fs.readFileSync(filePath, 'utf8');

  return <LegalPage content={content} />;
}
