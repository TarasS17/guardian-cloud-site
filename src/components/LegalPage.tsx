import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface LegalPageProps {
  content: string;
}

/**
 * Переиспользуемый компонент для рендера legal-страниц (privacy, terms, refund).
 * Использует dark theme + Inter font согласно глобальному стилю сайта.
 */
export default function LegalPage({ content }: LegalPageProps) {
  return (
    <main className="min-h-screen bg-gray-950 py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <article className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 md:p-12 rounded-xl border border-cyan-500/20">
          <div className="legal-content prose prose-invert max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </div>
        </article>
      </div>

      <style>{`
        .legal-content {
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.75;
          font-size: 0.95rem;
        }
        .legal-content h1 {
          color: #22d3ee;
          font-size: 2.25rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(34, 211, 238, 0.2);
        }
        .legal-content h2 {
          color: #67e8f9;
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
        }
        .legal-content h3 {
          color: #a5f3fc;
          font-size: 1.175rem;
          font-weight: 600;
          margin-top: 1.75rem;
          margin-bottom: 0.75rem;
        }
        .legal-content p {
          margin-bottom: 1rem;
          color: rgba(255, 255, 255, 0.75);
        }
        .legal-content strong {
          color: #ffffff;
          font-weight: 600;
        }
        .legal-content a {
          color: #22d3ee;
          text-decoration: underline;
          text-decoration-color: rgba(34, 211, 238, 0.4);
          transition: color 0.2s;
        }
        .legal-content a:hover {
          color: #67e8f9;
        }
        .legal-content ul, .legal-content ol {
          margin-left: 1.5rem;
          margin-bottom: 1rem;
          padding-left: 0.5rem;
        }
        .legal-content ul {
          list-style-type: disc;
        }
        .legal-content ol {
          list-style-type: decimal;
        }
        .legal-content li {
          margin-bottom: 0.5rem;
          color: rgba(255, 255, 255, 0.75);
        }
        .legal-content li::marker {
          color: #22d3ee;
        }
        .legal-content hr {
          border: 0;
          border-top: 1px solid rgba(34, 211, 238, 0.15);
          margin: 2rem 0;
        }
        .legal-content blockquote {
          border-left: 3px solid #22d3ee;
          padding-left: 1rem;
          margin: 1rem 0;
          color: rgba(255, 255, 255, 0.7);
          font-style: italic;
        }
        .legal-content code {
          background: rgba(34, 211, 238, 0.1);
          color: #67e8f9;
          padding: 0.125rem 0.375rem;
          border-radius: 0.25rem;
          font-size: 0.875em;
        }
        .legal-content pre {
          background: rgba(15, 23, 42, 0.6);
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin: 1rem 0;
          border: 1px solid rgba(34, 211, 238, 0.15);
        }
        .legal-content pre code {
          background: transparent;
          padding: 0;
          color: #e2e8f0;
        }
        .legal-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 1rem 0;
          font-size: 0.875rem;
        }
        .legal-content th, .legal-content td {
          padding: 0.75rem;
          border: 1px solid rgba(34, 211, 238, 0.15);
          text-align: left;
        }
        .legal-content th {
          background: rgba(34, 211, 238, 0.08);
          color: #67e8f9;
          font-weight: 600;
        }
      `}</style>
    </main>
  );
}
