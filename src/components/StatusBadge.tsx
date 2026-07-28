export type ModuleStatus = 'live' | 'dev' | 'design';

const STATUS: Record<ModuleStatus, { label: string; dot: string; chip: string }> = {
  live: {
    label: 'Live · Validated',
    dot: 'bg-emerald-400',
    chip: 'border-emerald-400/40 bg-emerald-400/10 text-emerald-300',
  },
  dev: {
    label: 'In Development',
    dot: 'bg-amber-400',
    chip: 'border-amber-400/40 bg-amber-400/10 text-amber-300',
  },
  design: {
    label: 'In Design',
    dot: 'bg-slate-400',
    chip: 'border-slate-400/40 bg-slate-400/10 text-slate-300',
  },
};

/**
 * Maturity badge shown on every module card and page header.
 * It keeps the site honest: shipped+tested vs designed-but-not-yet-built
 * is never blurred — what a sophisticated reviewer expects to see.
 */
export default function StatusBadge({
  status,
  className = '',
}: {
  status: ModuleStatus;
  className?: string;
}) {
  const s = STATUS[status];
  return (
    <span
      className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-3 py-1 text-xs font-semibold ${s.chip} ${className}`}
    >
      <span className={`h-2 w-2 rounded-full ${s.dot}`} />
      {s.label}
    </span>
  );
}
