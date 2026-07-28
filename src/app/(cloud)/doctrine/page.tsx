import DoctrineIntro from '@/components/DoctrineIntro';
import DoctrineRetrieval from '@/components/DoctrineRetrieval';
import DoctrineGoverned from '@/components/DoctrineGoverned';
import DoctrineFeeds from '@/components/DoctrineFeeds';
import DoctrineValidation from '@/components/DoctrineValidation';

export const metadata = {
  title: 'Guardian Cloud — Doctrine',
  description:
    'A living, governed knowledge base the AI reasons with: two-stage semantic retrieval (Qwen3-VL-Embedding-8B + Reranker-2B), layered rules of engagement, open malware databases and a debrief loop — validated end-to-end.',
};

export default function DoctrinePage() {
  return (
    <div>
      <DoctrineIntro />
      <DoctrineRetrieval />
      <DoctrineGoverned />
      <DoctrineFeeds />
      <DoctrineValidation />
    </div>
  );
}
