import { DefsSheen, SvgNode, SvgLink } from '@/components/diagramParts';

/** Deployment topology schema (SVG). English labels. */
export default function TopologyMap() {
  return (
    <div className="mb-12 overflow-x-auto rounded-2xl border border-cyan-500/25 bg-gray-950/60 p-4">
      <p className="mb-1 px-2 pt-2 text-center text-xs uppercase tracking-widest text-white/40">Deployment topology</p>
      <svg viewBox="0 0 1000 360" className="h-auto w-full min-w-[720px]" role="img" aria-label="Deployment topology">
        <DefsSheen />
        <rect x="0" y="0" width="1000" height="360" rx="16" fill="#070a12" />

        {/* links */}
        <SvgLink d="M252 150 L378 150" color="#22d3ee" />
        <text x="315" y="138" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="11">gRPC + HTTPS</text>
        <SvgLink d="M622 150 L738 150" color="#a855f7" />
        <SvgLink d="M500 198 L500 250" color="#f59e0b" dashed />

        {/* nodes */}
        <SvgNode cx={150} cy={150} w={204} h={84} color="#22d3ee" title="Your server" sub="lightweight agent" />
        <SvgNode cx={500} cy={150} w={244} h={96} color="#38bdf8" title="Control plane" sub="queue · officer · doctrine · monitoring · history" big />
        <SvgNode cx={850} cy={150} w={220} h={84} color="#a855f7" title="AI model fleet" sub="GPU · your region" />
        <SvgNode cx={500} cy={280} w={360} h={56} color="#f59e0b" title="GLM-5.2 — main brain & validator" sub="self-hosted · generates, validates, tests" />

        {/* chips */}
        <SvgNode cx={210} cy={326} w={180} h={32} color="#34d399" title="Multi-region" />
        <SvgNode cx={790} cy={326} w={300} h={32} color="#8b5cf6" title="On-prem / air-gapped (Enterprise)" />
      </svg>
    </div>
  );
}
