import { DefsSheen, SvgNode, SvgLink } from '@/components/diagramParts';

/** ITDR deployment topology — air-gapped contour (SVG). English labels. */
export default function ItdrTopologyMap() {
  return (
    <div className="mb-12 overflow-x-auto rounded-2xl border border-cyan-500/25 bg-gray-950/60 p-4">
      <p className="mb-1 px-2 pt-2 text-center text-xs uppercase tracking-widest text-white/40">
        Deployment topology — air-gapped contour
      </p>
      <svg viewBox="0 0 1000 380" className="h-auto w-full min-w-[760px]" role="img" aria-label="ITDR deployment topology">
        <DefsSheen />
        <rect x="0" y="0" width="1000" height="380" rx="16" fill="#070a12" />

        {/* air-gap boundary around the in-region contour */}
        <rect x="300" y="40" width="320" height="300" rx="18" fill="#22d3ee" fillOpacity="0.04" stroke="#22d3ee" strokeOpacity="0.35" strokeDasharray="6 6" />
        <text x="460" y="62" textAnchor="middle" fill="rgba(34,211,238,0.75)" fontSize="12" fontWeight={700}>
          Air-gapped · your region
        </text>

        {/* links */}
        <SvgLink d="M236 190 L300 190" color="#22d3ee" />
        <text x="268" y="178" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="11">gRPC + HTTPS</text>
        <SvgLink d="M460 138 L460 168" color="#fb7185" />
        <SvgLink d="M460 250 L460 286" color="#38bdf8" dashed />
        {/* officer -> outbound, lawful reporting only */}
        <SvgLink d="M582 200 L726 200" color="#f59e0b" dashed />
        <text x="654" y="188" textAnchor="middle" fill="rgba(245,158,11,0.8)" fontSize="10.5">lawful reporting only</text>

        {/* nodes */}
        <SvgNode cx={135} cy={190} w={196} h={84} color="#22d3ee" title="Your server" sub="lightweight agent · streams signals" />
        <SvgNode cx={460} cy={110} w={210} h={56} color="#fb7185" title="Detection shields" sub="Qwen3-4B + LoRA ×3" />
        <SvgNode cx={460} cy={200} w={244} h={84} color="#22d3ee" title="ITDR Officer" sub="Gemma-4 · ROE doctrine" big />
        <SvgNode cx={460} cy={310} w={210} h={56} color="#38bdf8" title="Doctrine" sub="ROE · playbooks · intel" />
        <SvgNode cx={850} cy={200} w={250} h={84} color="#f59e0b" title="Lawful channels" sub="AbuseIPDB · OTX · ISP / CERT / LEO" />

        {/* chip */}
        <SvgNode cx={790} cy={346} w={300} h={30} color="#8b5cf6" title="On-prem / fully isolated (Enterprise)" />
      </svg>
    </div>
  );
}
