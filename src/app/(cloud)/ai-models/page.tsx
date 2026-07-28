import AiModelsIntro from '@/components/AiModelsIntro';
import AiModelsFleetMap from '@/components/AiModelsFleetMap';
import AiModelsValidation from '@/components/AiModelsValidation';
import AiModelsWhyFleet from '@/components/AiModelsWhyFleet';
import LaunchBanner from '@/components/LaunchBanner';
import ModelCredits from '@/components/ModelCredits';

export const metadata = {
  title: 'Guardian Cloud — AI Models',
  description:
    'The fleet of specialised AI models behind Guardian Cloud: audit and ITDR officers, detection shields, cloud specialists, coding models and the doctrine embedder — self-hosted on GPU, validated on live infrastructure.',
};

export default function AiModelsPage() {
  return (
    <div>
      <AiModelsIntro />
      <AiModelsFleetMap />
      <AiModelsValidation />
      <AiModelsWhyFleet />
      <LaunchBanner />
      <ModelCredits />
    </div>
  );
}
