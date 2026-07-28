type Bar = { label: string; share: number; color: string; critical: boolean };

/** ROE decision domains — share of the 100-scenario officer suite. Every domain scored 100%. */
const BARS: Bar[] = [
  { label: 'Retaliation', share: 45, color: '#fb7185', critical: true },
  { label: 'Edge cases', share: 18, color: '#f59e0b', critical: true },
  { label: 'Incident response', share: 17, color: '#f97316', critical: true },
  { label: 'Forensics', share: 8, color: '#38bdf8', critical: false },
  { label: 'Escalation', share: 7, color: '#22d3ee', critical: false },
  { label: 'Debrief', share: 5, color: '#a855f7', critical: false },
];

/** Horizontal bar chart of the officer's ROE decision domains (SVG). English labels. */
export default function ItdrOfficerChart() {
  const W = 520;
  const x0 = 150;
  const x1 = 470;
  const plotW = x1 - x0;
  const top = 30;
  const rowH = 40;
  const barH = 22;
  const max = 50;
  const ticks = [0, 10, 20, 30, 40, 50];
  const px = (v: number) => x0 + (v / max) * plotW;
  const H = top + BARS.length * rowH + 26;

  return (
    <div className="rounded-2xl border border-cyan-500/25 bg-gray-950/60 p-4">
      <p className="mb-1 px-2 pt-1 text-center text-xs uppercase tracking-widest text-white/40">
        ROE decision domains — share of 100 scenarios
      </p>
      <p className="mb-2 px-2 text-center text-[11px] text-emerald-300/80">
        every domain scored 100%
      </p>
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Officer ROE decision domains">
        {ticks.map((t) => (
          <g key={t}>
            <line x1={px(t)} y1={top - 6} x2={px(t)} y2={top + BARS.length * rowH - rowH + barH + 8} stroke="#ffffff" strokeOpacity="0.08" strokeDasharray="3 4" />
            <text x={px(t)} y={top + BARS.length * rowH + 2} textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="11">{t}</text>
          </g>
        ))}

        {BARS.map((b, i) => {
          const cy = top + i * rowH + barH / 2;
          const y = cy - barH / 2;
          return (
            <g key={b.label}>
              <text x={x0 - 10} y={cy + 4} textAnchor="end" fill="rgba(255,255,255,0.85)" fontSize="12.5" fontWeight={600}>
                {b.label}
              </text>
              <g style={{ filter: `drop-shadow(0 0 6px ${b.color}66)` }}>
                <rect x={x0} y={y} width={(b.share / max) * plotW} height={barH} rx={6} fill={b.color} fillOpacity={0.9} />
                <text x={px(b.share) + 8} y={cy + 4} fill="#fff" fontSize="12" fontWeight={700}>
                  {b.share}% · 100
                </text>
              </g>
            </g>
          );
        })}
      </svg>
      <p className="px-2 pb-1 text-center text-[11px] text-white/40">
        weighted toward safety-critical domains (retaliation · edge · incident = 80%)
      </p>
    </div>
  );
}
