/** Shared SVG diagram parts — glowing gradient nodes and colored links. */

export function DefsSheen() {
  return (
    <defs>
      <linearGradient id="dg-sheen" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.14" />
        <stop offset="45%" stopColor="#ffffff" stopOpacity="0.02" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </linearGradient>
    </defs>
  );
}

export function SvgNode({
  cx,
  cy,
  w,
  h,
  color,
  title,
  sub,
  big = false,
}: {
  cx: number;
  cy: number;
  w: number;
  h: number;
  color: string;
  title: string;
  sub?: string;
  big?: boolean;
}) {
  const x = cx - w / 2;
  const y = cy - h / 2;
  return (
    <g style={{ filter: `drop-shadow(0 4px 10px ${color}40) drop-shadow(0 0 10px ${color}55)` }}>
      <rect x={x} y={y} width={w} height={h} rx={14} fill={color} fillOpacity={big ? 0.2 : 0.14} />
      <rect x={x} y={y} width={w} height={h} rx={14} fill="url(#dg-sheen)" />
      <rect x={x} y={y} width={w} height={h} rx={14} fill="none" stroke={color} strokeOpacity={0.95} strokeWidth={big ? 2 : 1.4} />
      <text x={cx} y={sub ? cy - 3 : cy + 5} textAnchor="middle" fill="#fff" fontSize={big ? 17 : 13.5} fontWeight={700}>
        {title}
      </text>
      {sub && (
        <text x={cx} y={cy + 15} textAnchor="middle" fill="rgba(255,255,255,0.62)" fontSize={10.5}>
          {sub}
        </text>
      )}
    </g>
  );
}

export function SvgLink({ d, color, dashed = false }: { d: string; color: string; dashed?: boolean }) {
  return (
    <path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeOpacity={0.55}
      strokeLinecap="round"
      strokeDasharray={dashed ? '6 5' : undefined}
      style={{ filter: `drop-shadow(0 0 4px ${color}66)` }}
    />
  );
}
