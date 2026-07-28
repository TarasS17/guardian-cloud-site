// Официальный Product Hunt «featured» бейдж (dark), для лончевого соц-пруфа Guardian Cloud.
export default function ProductHuntBadge() {
  return (
    <div className="flex justify-center bg-black py-6">
      <a
        href="https://www.producthunt.com/products/guardian-cloud?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-guardian-cloud"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Guardian Cloud on Product Hunt"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Guardian Cloud - AI that administers & protects your cloud 24/7 | Product Hunt"
          width={250}
          height={54}
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1172754&theme=dark"
        />
      </a>
    </div>
  );
}
