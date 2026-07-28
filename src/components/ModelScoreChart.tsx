type Bar = { label: string; value: number | null; color: string; note?: string };

const BARS: Bar[] = [
  { label: 'All-Platform', value: 97, color: '#22c55e' },
  { label: 'Azure', value: 94, color: '#22c55e' },
  { label: 'GCP', value: 91, color: '#22c55e' },
  { label: 'Sysadmin Officer', value: 90.6, color: '#22c55e' },
  { label: 'AWS', value: null, color: '#f59e0b', note: 'retraining' },
];

/** Horizontal bar chart of per-model validation score (SVG). English labels. */
export default function ModelScoreChart() {
  const W = 520;
  const H = 300;
  const x0 = 132;
  const x1 = 492;
  const plotW = x1 - x0;
  const top = 18;
  const rowH = 46;
  const barH = 24;
  const ticks = [0, 20, 40, 60, 80, 100];
  const px = (v: number) => x0 + (v / 100) * plotW;

  return (
    <div className="rounded-2xl border border-cyan-500/25 bg-gray-950/60 p-4">
      <p className="mb-1 px-2 pt-1 text-center text-xs uppercase tracking-widest text-white/40">
        Validation score by model (%)
      </p>
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Validation score by model">
        {/* gridlines + axis */}
        {ticks.map((t) => (
          <g key={t}>
            <line x1={px(t)} y1={top - 4} x2={px(t)} y2={top + 5 * rowH} stroke="#ffffff" strokeOpacity="0.08" strokeDasharray="3 4" />
            <text x={px(t)} y={top + 5 * rowH + 16} textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="11">{t}</text>
          </g>
        ))}

        {BARS.map((b, i) => {
          const cy = top + i * rowH + rowH / 2;
          const y = cy - barH / 2;
          return (
            <g key={b.label}>
              <text x={x0 - 10} y={cy + 4} textAnchor="end" fill="rgba(255,255,255,0.85)" fontSize="13" fontWeight={600}>
                {b.label}
              </text>
              {b.value !== null ? (
                <g style={{ filter: `drop-shadow(0 0 6px ${b.color}66)` }}>
                  <rect x={x0} y={y} width={(b.value / 100) * plotW} height={barH} rx={6} fill={b.color} fillOpacity={0.9} />
                  <text x={px(b.value) + 8} y={cy + 4} fill="#fff" fontSize="12.5" fontWeight={700}>{b.value}%</text>
                </g>
              ) : (
                <g>
                  <rect x={x0} y={y} width={36} height={barH} rx={6} fill="none" stroke={b.color} strokeOpacity={0.8} strokeDasharray="4 4" />
                  <text x={x0 + 44} y={cy + 4} fill={b.color} fontSize="12.5" fontWeight={700}>{b.note}</text>
                </g>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
