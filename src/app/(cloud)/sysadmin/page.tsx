import SysadminIntro from '@/components/SysadminIntro';
import SysadminArchitecture from '@/components/SysadminArchitecture';
import WalkthroughVideo from '@/components/WalkthroughVideo';
import SysadminHowItWorks from '@/components/SysadminHowItWorks';
import SysadminValidation from '@/components/SysadminValidation';
import SysadminAdvantages from '@/components/SysadminAdvantages';
import LaunchBanner from '@/components/LaunchBanner';

export const metadata = {
  title: 'Guardian Cloud — Sysadmin Module',
  description:
    'AI system administration: a neural network of officers and agents — provisioning, initial AI audit, monitoring and risk-gated remediation, validated end-to-end on live infrastructure.',
};

export default function SysadminPage() {
  return (
    <div>
      <SysadminIntro />
      <SysadminArchitecture />
      <WalkthroughVideo videoRu="zIHrcZWk1rw" videoEn="xGlt227XtnI" docHref="/papers/guardian-cloud-paper-en.html" />
      <SysadminValidation />
      <SysadminHowItWorks />
      <SysadminAdvantages />
      <LaunchBanner />
    </div>
  );
}
