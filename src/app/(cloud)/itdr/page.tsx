import ItdrIntro from '@/components/ItdrIntro';
import WalkthroughVideo from '@/components/WalkthroughVideo';
import ItdrContourMap from '@/components/ItdrContourMap';
import ItdrValidation from '@/components/ItdrValidation';
import ItdrHowItWorks from '@/components/ItdrHowItWorks';
import ItdrAdvantages from '@/components/ItdrAdvantages';
import LaunchBanner from '@/components/LaunchBanner';

export const metadata = {
  title: 'Guardian Cloud — ITDR',
  description:
    'Intrusion-threat detection & response with malware defense: detection shields, an AI officer under strict rules of engagement, doctrine and a learning debrief loop — validated on live GPU models.',
};

export default function ItdrPage() {
  return (
    <div>
      <ItdrIntro />
      <WalkthroughVideo videoRu="fA_Eys6j52k" videoEn="tz7jrCNAkdA" docHref="/papers/guardian-cloud-paper-en.html" />
      <ItdrContourMap />
      <ItdrValidation />
      <ItdrHowItWorks />
      <ItdrAdvantages />
      <LaunchBanner />
    </div>
  );
}
