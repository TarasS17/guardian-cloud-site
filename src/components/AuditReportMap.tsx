import { DefsSheen, SvgNode, SvgLink } from '@/components/diagramParts';

/** Audit report structure schema (SVG). English labels. */
export default function AuditReportMap() {
  const fields = [
    { cx: 200, cy: 170, color: '#38bdf8', title: 'summary' },
    { cx: 500, cy: 170, color: '#fb7185', title: 'risk_level' },
    { cx: 800, cy: 170, color: '#34d399', title: 'working_well[]' },
    { cx: 200, cy: 256, color: '#f59e0b', title: 'issues[]' },
    { cx: 500, cy: 256, color: '#818cf8', title: 'optimizations[]' },
    { cx: 800, cy: 256, color: '#a855f7', title: 'plan[]', sub: 'action · effort · auto_approve' },
  ];
  return (
    <div className="mb-10 overflow-x-auto rounded-2xl border border-cyan-500/25 bg-gray-950/60 p-4">
      <p className="mb-1 px-2 pt-2 text-center text-xs uppercase tracking-widest text-white/40">Audit report — strict schema</p>
      <svg viewBox="0 0 1000 320" className="h-auto w-full min-w-[720px]" role="img" aria-label="Audit report structure">
        <DefsSheen />
        <rect x="0" y="0" width="1000" height="320" rx="16" fill="#070a12" />

        {/* links from the report node to each field */}
        {fields.map((f) => (
          <SvgLink key={`l-${f.title}`} d={`M500 74 C500 120, ${f.cx} 110, ${f.cx} ${f.cy - 24}`} color={f.color} />
        ))}

        {/* central report node */}
        <SvgNode cx={500} cy={46} w={236} h={56} color="#22d3ee" title="Audit report" sub="machine-actionable, schema-validated" big />

        {/* fields */}
        {fields.map((f) => (
          <SvgNode key={f.title} cx={f.cx} cy={f.cy} w={232} h={f.sub ? 50 : 44} color={f.color} title={f.title} sub={f.sub} />
        ))}
      </svg>
    </div>
  );
}
