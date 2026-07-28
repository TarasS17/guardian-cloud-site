'use client';

import Link from 'next/link';
import { useLocale } from '@/lib/i18n/LocaleContext';
import ModelScoreChart from '@/components/ModelScoreChart';

const HEAD: Record<string, { h: string; lead: string; train: string }> = {
  en: {
    h: 'The roster & test results',
    lead: 'Every model in the fleet is exercised on real GPUs before it touches a server. These are the documented numbers for the models we run today — nothing rounded up.',
    train: 'Every model in this fleet was trained by us on tens of thousands of high-quality instructions, and tested on hundreds of real work examples and incidents — each one for its own specialization.',
  },
  ru: {
    h: 'Состав парка и результаты тестов',
    lead: 'Каждая модель парка прогоняется на реальных GPU, прежде чем коснуться сервера. Это задокументированные цифры по тем моделям, что работают у нас сегодня — ничего не приукрашено.',
    train: 'Каждую модель этого парка мы обучили на десятках тысяч высококачественных инструкций и протестировали на сотнях реальных примеров работы и инцидентов — каждую именно под свою специализацию.',
  },
  zh: {
    h: '艦隊陣容與測試結果',
    lead: '艦隊中的每一個模型在接觸伺服器之前都會在真實 GPU 上實測。以下是我們目前運行模型的有據可查數據——絕無灌水。',
    train: '本艦隊中的每一個模型，皆由我們以數萬條高品質指令訓練，並針對其專屬領域，於數百個真實工作範例與事件上完成測試。',
  },
};

type Row = { model: string; role: string; result: string };

const ROWS: Row[] = [
  { model: 'Audit Officer · Qwen3-30B-A3B-Thinking-2507', role: 'Initial server audit', result: 'LOW / CRITICAL — correct' },
  { model: 'ITDR Officer · Gemma-4-26B-A4B', role: 'Intrusion verdict (ROE)', result: '100 / 100 · safety gate 100%' },
  { model: 'Cloud AI · Gemma-4-26B-A4B-it', role: 'Conversational interface', result: 'live' },
  { model: 'Detection shields · 3× Qwen3-4B-Instruct-2507', role: 'First-line detection', result: '3 / 3 in 726–952 ms' },
  { model: 'All-Platform specialist · Qwen3-Coder-30B-A3B-Instruct', role: 'Command generation', result: '97.0%' },
  { model: 'Azure specialist', role: 'Command generation', result: '94.0%' },
  { model: 'GCP specialist', role: 'Command generation', result: '91.0%' },
  { model: 'AWS specialist', role: 'Command generation', result: 'in retraining' },
  { model: 'Coding · Qwen3-Coder gen + Qwen3-Thinking review', role: 'Source-code changes', result: 'generate → security review' },
  { model: 'Doctrine embedder · Qwen3-VL-Embedding-8B', role: 'Knowledge retrieval', result: 'semantic read — PASS' },
  { model: 'GLM-5.2 · self-hosted', role: 'Main brain · validator · initial testing', result: 'in-contour · high-risk review' },
];

function resultClass(r: string) {
  return r === 'in retraining' ? 'text-amber-300' : 'text-emerald-300';
}

const DETAIL_H: Record<string, string> = {
  en: 'Cloud specialists — detailed',
  ru: 'Облачные специалисты — подробно',
  zh: '雲端專家模型 — 詳細數據',
};

type Detail = { model: string; overall: string; inDist: string; ood: string; json: string };

const SPEC_DETAIL: Detail[] = [
  { model: 'All-Platform specialist', overall: '97.0%', inDist: '49 / 50', ood: '48 / 50', json: '97.0%' },
  { model: 'Azure specialist', overall: '94.0%', inDist: '47 / 50', ood: '47 / 50', json: '94.0%' },
  { model: 'GCP specialist', overall: '91.0%', inDist: '45 / 50', ood: '46 / 50', json: '95.0%' },
  { model: 'AWS specialist', overall: 'in retraining', inDist: '—', ood: '—', json: '—' },
];

const VIEW_H: Record<string, string> = {
  en: 'Open the raw test files for review',
  ru: 'Открыть сырые файлы тестов для просмотра',
  zh: '開啟原始測試檔案以供檢視',
};

const FILES = [
  { label: 'All-Platform results', href: '/validation/spec-onprem.json' },
  { label: 'Azure results', href: '/validation/spec-azure.json' },
  { label: 'GCP results', href: '/validation/spec-gcp.json' },
  { label: 'AWS results', href: '/validation/spec-aws.json' },
  { label: 'ITDR Officer results', href: '/validation/itdr-officer-results.json' },
  { label: 'Sysadmin Officer results', href: '/validation/sysadmin-officer-results.json' },
  { label: 'Summary', href: '/validation/specs-summary.md' },
];

/** Block — AI Models fleet roster & validation. Prose localized; table + chart. */
export default function AiModelsValidation() {
  const { locale } = useLocale();
  const t = HEAD[locale] ?? HEAD.en;

  return (
    <section className="border-b border-white/5 py-16">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">{t.h}</h2>
        <p className="mb-8 max-w-3xl text-lg leading-relaxed text-white/75">{t.lead}</p>

        <div className="grid items-start gap-6 lg:grid-cols-2">
          {/* roster */}
          <div className="overflow-x-auto rounded-xl border border-emerald-500/20">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/5 text-white/70">
                  <th className="px-3 py-3 font-semibold">Model</th>
                  <th className="px-3 py-3 font-semibold">Role</th>
                  <th className="px-3 py-3 font-semibold">Result</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.model} className="border-b border-white/5 last:border-0">
                    <td className="px-3 py-3 font-medium text-white/90">{r.model}</td>
                    <td className="px-3 py-3 text-white/55">{r.role}</td>
                    <td className={`px-3 py-3 font-semibold ${resultClass(r.result)}`}>{r.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* chart */}
          <ModelScoreChart />
        </div>

        {/* training statement */}
        <p className="mt-8 max-w-3xl border-l-2 border-cyan-500/40 pl-4 text-lg leading-relaxed text-white/80">
          {t.train}
        </p>

        {/* detailed per-spec */}
        <h3 className="mb-4 mt-12 text-2xl font-bold text-white">{DETAIL_H[locale] ?? DETAIL_H.en}</h3>
        <div className="overflow-x-auto rounded-xl border border-emerald-500/20">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/5 text-white/70">
                <th className="px-3 py-3 font-semibold">Model</th>
                <th className="px-3 py-3 font-semibold">Overall</th>
                <th className="px-3 py-3 font-semibold">In-distribution</th>
                <th className="px-3 py-3 font-semibold">Out-of-distribution</th>
                <th className="px-3 py-3 font-semibold">JSON-valid</th>
              </tr>
            </thead>
            <tbody>
              {SPEC_DETAIL.map((r) => (
                <tr key={r.model} className="border-b border-white/5 last:border-0">
                  <td className="px-3 py-3 font-medium text-white/90">{r.model}</td>
                  <td className={`px-3 py-3 font-semibold ${resultClass(r.overall)}`}>{r.overall}</td>
                  <td className="px-3 py-3 text-white/70">{r.inDist}</td>
                  <td className="px-3 py-3 text-white/70">{r.ood}</td>
                  <td className="px-3 py-3 text-white/70">{r.json}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-white/45">100 tests per spec — 50 in-distribution + 50 out-of-distribution, AWQ on A100.</p>

        {/* view raw files */}
        <div className="mt-8">
          <p className="mb-3 text-sm font-semibold text-white/70">{VIEW_H[locale] ?? VIEW_H.en}</p>
          <div className="flex flex-wrap gap-2">
            {FILES.map((f) => (
              <a
                key={f.href}
                href={f.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-cyan-500/40 bg-cyan-500/5 px-3 py-1.5 text-xs font-medium text-cyan-200 transition-colors hover:bg-cyan-500/15"
              >
                {f.label} ↗
              </a>
            ))}
          </div>
        </div>

        <p className="mt-8 text-sm text-white/45">
          The AWS specialist is being retrained on a corrected dataset; its number lands here once
          measured. For closed, on-prem data centers, the{' '}
          <Link href="/billing" className="text-cyan-300 underline-offset-2 hover:underline">
            Enterprise tier
          </Link>{' '}
          runs a lightweight fleet entirely on local hardware — validated at 100% across 400 scenarios.
        </p>
      </div>
    </section>
  );
}
