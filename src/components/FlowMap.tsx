const PALETTE = ['#22d3ee', '#38bdf8', '#818cf8', '#a855f7', '#e879f9', '#fb7185', '#34d399', '#f59e0b', '#fbbf24'];

/** A colorful sequential flow schema (SVG + HTML cards). English labels. */
export default function FlowMap({
  caption,
  items,
  colors,
}: {
  caption: string;
  items: string[];
  colors?: string[];
}) {
  const NW = 172;
  const NH = 96;
  const GAP = 46;
  const PAD = 14;
  const TOP = 46;
  const CY = TOP + NH / 2;
  const STEP = NW + GAP;
  const width = PAD * 2 + items.length * NW + (items.length - 1) * GAP;
  const height = TOP + NH + 16;

  const colorAt = (i: number) => colors?.[i] ?? PALETTE[i % PALETTE.length];

  return (
    <div className="mb-10 overflow-x-auto rounded-2xl border border-cyan-500/25 bg-gray-950/60 p-4">
      <p className="mb-1 px-2 pt-2 text-center text-xs uppercase tracking-widest text-white/40">{caption}</p>
      <svg viewBox={`0 0 ${width} ${height}`} className="h-auto w-full" style={{ minWidth: Math.min(width, 920) }} role="img" aria-label={caption}>
        {/* connectors */}
        {items.slice(0, -1).map((_, i) => {
          const x1 = PAD + i * STEP + NW;
          const x2 = PAD + (i + 1) * STEP;
          const c = colorAt(i + 1);
          return (
            <g key={`c-${i}`} style={{ filter: `drop-shadow(0 0 4px ${c}66)` }}>
              <line x1={x1} y1={CY} x2={x2 - 7} y2={CY} stroke={c} strokeWidth={2.4} strokeOpacity={0.7} strokeLinecap="round" />
              <path d={`M${x2 - 9} ${CY - 5} L${x2} ${CY} L${x2 - 9} ${CY + 5} Z`} fill={c} />
            </g>
          );
        })}

        {/* nodes */}
        {items.map((label, i) => {
          const x = PAD + i * STEP;
          const c = colorAt(i);
          return (
            <g key={`n-${i}`}>
              <foreignObject x={x} y={TOP} width={NW} height={NH}>
                <div
                  // @ts-expect-error xmlns is valid on the html root inside foreignObject
                  xmlns="http://www.w3.org/1999/xhtml"
                  style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '8px 12px',
                    borderRadius: 16,
                    border: `1.4px solid ${c}`,
                    background: `linear-gradient(180deg, ${c}26, ${c}0a)`,
                    boxShadow: `0 6px 16px ${c}33, 0 0 12px ${c}44`,
                    color: '#fff',
                    fontSize: 13,
                    fontWeight: 600,
                    lineHeight: 1.2,
                  }}
                >
                  {label}
                </div>
              </foreignObject>
              <circle cx={x + 18} cy={TOP - 2} r={12} fill={c} style={{ filter: `drop-shadow(0 0 5px ${c}88)` }} />
              <text x={x + 18} y={TOP + 2} textAnchor="middle" fill="#0b1220" fontSize={12} fontWeight={800}>
                {i + 1}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
