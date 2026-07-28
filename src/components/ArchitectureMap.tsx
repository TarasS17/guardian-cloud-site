/** Rich, colorful system map for the Sysadmin module (SVG). English labels. */
export default function ArchitectureMap() {
  const Node = ({
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
  }) => {
    const x = cx - w / 2;
    const y = cy - h / 2;
    return (
      <g style={{ filter: `drop-shadow(0 4px 10px ${color}40) drop-shadow(0 0 10px ${color}55)` }}>
        <rect x={x} y={y} width={w} height={h} rx={14} fill={color} fillOpacity={big ? 0.2 : 0.14} />
        <rect x={x} y={y} width={w} height={h} rx={14} fill="url(#am-sheen)" />
        <rect x={x} y={y} width={w} height={h} rx={14} fill="none" stroke={color} strokeOpacity={0.95} strokeWidth={big ? 2 : 1.4} />
        <text x={cx} y={sub ? cy - 3 : cy + 5} textAnchor="middle" fill="#fff" fontSize={big ? 19 : 13.5} fontWeight={700}>
          {title}
        </text>
        {sub && (
          <text x={cx} y={cy + 15} textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize={11}>
            {sub}
          </text>
        )}
      </g>
    );
  };

  const Link = ({ d, color }: { d: string; color: string }) => (
    <path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeOpacity={0.55}
      strokeLinecap="round"
      style={{ filter: `drop-shadow(0 0 4px ${color}66)` }}
    />
  );

  const specs = [
    { cx: 120, color: '#4285F4', title: 'GCP Officer' },
    { cx: 300, color: '#FF9900', title: 'AWS Officer' },
    { cx: 480, color: '#38bdf8', title: 'Azure Officer' },
    { cx: 660, color: '#a855f7', title: 'All-Platform' },
  ];
  const modules = [
    { cy: 96, color: '#fb7185', title: 'ITDR Module' },
    { cy: 206, color: '#8b5cf6', title: 'AI Studio' },
    { cy: 316, color: '#f59e0b', title: 'Doctrine' },
    { cy: 426, color: '#22d3ee', title: 'Cloud AI' },
  ];
  const agentX = [130, 300, 470, 630];
  const agentsRow1 = ['Audit', 'Monitoring', 'Execution', 'Antivirus'];
  const agentsRow2 = ['Inventory', 'Forensics', 'Patch', 'Backup'];

  return (
    <div className="mb-12 overflow-x-auto rounded-2xl border border-cyan-500/25 bg-gray-950/60 p-4">
      <p className="mb-1 px-2 pt-2 text-center text-xs uppercase tracking-widest text-white/40">
        System map — officers · agents · connected modules
      </p>
      <svg viewBox="0 0 1000 540" className="h-auto w-full min-w-[760px]" role="img" aria-label="Sysadmin architecture map">
        <defs>
          <radialGradient id="am-bg" cx="38%" cy="26%" r="85%">
            <stop offset="0%" stopColor="#0d1626" />
            <stop offset="100%" stopColor="#070a12" />
          </radialGradient>
          <linearGradient id="am-sheen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.14" />
            <stop offset="45%" stopColor="#ffffff" stopOpacity="0.02" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="am-hub-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </radialGradient>
          <pattern id="am-dots" width="26" height="26" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="#ffffff" fillOpacity="0.04" />
          </pattern>
        </defs>

        <rect x="0" y="0" width="1000" height="540" rx="18" fill="url(#am-bg)" />
        <rect x="0" y="0" width="1000" height="540" rx="18" fill="url(#am-dots)" />

        {/* hub halo (gentle pulse) */}
        <ellipse cx="380" cy="150" rx="190" ry="120" fill="url(#am-hub-halo)">
          <animate attributeName="opacity" values="0.55;1;0.55" dur="3.4s" repeatCount="indefinite" />
        </ellipse>

        {/* links */}
        <Link d="M380 66 L380 116" color="#64748b" />
        {specs.map((s) => (
          <Link key={`l-${s.title}`} d={`M380 188 C380 228, ${s.cx} 222, ${s.cx} 254`} color={s.color} />
        ))}
        {specs.map((s) => (
          <Link key={`la-${s.title}`} d={`M${s.cx} 310 L${s.cx} 360`} color="#10b981" />
        ))}
        {modules.map((m) => (
          <Link key={`lm-${m.cy}`} d={`M500 150 C690 150, 730 ${m.cy}, 806 ${m.cy}`} color={m.color} />
        ))}

        {/* nodes */}
        <Node cx={380} cy={44} w={300} h={42} color="#64748b" title="Input: Audit · Incident · Your task" />
        <Node cx={380} cy={150} w={246} h={74} color="#22d3ee" title="Sysadmin Officer" sub="orchestrator" big />
        {specs.map((s) => (
          <Node key={s.title} cx={s.cx} cy={283} w={156} h={56} color={s.color} title={s.title} />
        ))}

        {/* agents container */}
        <rect x="36" y="362" width="688" height="150" rx="16" fill="#10b981" fillOpacity="0.06" stroke="#10b981" strokeOpacity="0.5" strokeWidth="1.2" strokeDasharray="5 5" />
        <text x="58" y="386" fill="rgba(255,255,255,0.5)" fontSize="11" fontWeight={700} letterSpacing="1.5">ON-SERVER AGENTS</text>
        {agentsRow1.map((a, i) => (
          <Node key={a} cx={agentX[i]} cy={420} w={132} h={36} color="#10b981" title={a} />
        ))}
        {agentsRow2.map((a, i) => (
          <Node key={a} cx={agentX[i]} cy={472} w={132} h={36} color="#10b981" title={a} />
        ))}

        {/* modules */}
        {modules.map((m) => (
          <Node key={m.title} cx={898} cy={m.cy} w={188} h={52} color={m.color} title={m.title} />
        ))}
      </svg>
    </div>
  );
}
