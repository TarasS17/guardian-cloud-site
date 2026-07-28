import Link from 'next/link';
import StatusBadge, { ModuleStatus } from './StatusBadge';

export interface ModuleCardProps {
  title: string;
  tagline: string;
  href: string;
  status: ModuleStatus;
  points?: string[];
}

/** Module tile on the Guardian Cloud hub. Mirrors the home-page card style. */
export default function ModuleCard({ title, tagline, href, status, points = [] }: ModuleCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-xl border border-cyan-500/40 bg-gradient-to-br from-cyan-900/30 to-gray-900/30 p-6 transition-all duration-300 hover:border-cyan-400 hover:from-cyan-900/50"
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <StatusBadge status={status} />
      </div>
      <p className="mb-4 text-white/70">{tagline}</p>
      {points.length > 0 && (
        <ul className="mb-5 list-disc space-y-1 pl-5 text-sm text-white/55">
          {points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      )}
      <span className="mt-auto inline-flex items-center gap-1 font-semibold text-cyan-400 transition-all group-hover:gap-2">
        Explore <span aria-hidden>→</span>
      </span>
    </Link>
  );
}
