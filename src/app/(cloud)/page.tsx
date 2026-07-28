import CloudHero from '@/components/CloudHero';
import CloudIntro from '@/components/CloudIntro';
import CloudModules from '@/components/CloudModules';
import ProductHuntBadge from '@/components/ProductHuntBadge';

export const metadata = {
  title: 'Guardian Cloud — Technical Modules',
  description:
    'Guardian Cloud is an autonomous AI operations and security team for your servers: audit, monitoring, remediation, intrusion response and malware defense — human in the loop.',
};

export default function GuardianCloudHub() {
  return (
    <div className="text-white">
      {/* Localized hub hero (en / ru / zh) */}
      <CloudHero />

      {/* Product Hunt launch badge (social proof) */}
      <ProductHuntBadge />

      {/* Owner narrative intro — blocks 1–6, localized (en / ru / zh) */}
      <CloudIntro />

      {/* Block 7 — platform modules grid, localized */}
      <CloudModules />
    </div>
  );
}
