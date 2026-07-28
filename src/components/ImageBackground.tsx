'use client';

interface ImageBackgroundProps {
  imageSrc: string;
  children?: React.ReactNode;
  className?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  /** Use eager loading for above-the-fold heroes (LCP). */
  priority?: boolean;
}

/**
 * Static-image background — a drop-in, lightweight replacement for VideoBackground.
 * Renders a poster image (a few hundred KB) instead of a multi-megabyte autoplaying
 * video, so the hero paints instantly and never blocks first interaction.
 */
export default function ImageBackground({
  imageSrc,
  children,
  className = '',
  overlay = true,
  overlayOpacity = 0.5,
  priority = false,
}: ImageBackgroundProps) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <img
        src={imageSrc}
        alt=""
        aria-hidden="true"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ filter: 'brightness(0.75)' }}
      />

      {overlay && (
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
            opacity: overlayOpacity,
          }}
        />
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
}
