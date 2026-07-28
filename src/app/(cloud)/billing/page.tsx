import BillingIntro from '@/components/BillingIntro';
import BillingModes from '@/components/BillingModes';
import BillingTariffs from '@/components/BillingTariffs';
import BillingAddons from '@/components/BillingAddons';
import BillingGate from '@/components/BillingGate';
import LaunchBanner from '@/components/LaunchBanner';

export const metadata = {
  title: 'Guardian Cloud — Tariffs & Billing',
  description:
    'Per-server subscription plans (Monitor / Server / Cluster / Platform / Enterprise) — every plan includes Cloud AI, ITDR, SIEM and RAG — with a hard, fully-audited connect-time billing gate.',
};

export default function BillingPage() {
  return (
    <div>
      <BillingIntro />
      <BillingModes />
      <BillingTariffs />
      <BillingAddons />
      <BillingGate />
      <LaunchBanner />
    </div>
  );
}
