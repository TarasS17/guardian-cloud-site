'use client';

import { useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  videoSrc: string;
  children?: React.ReactNode;
  className?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  playbackRate?: number;
  /** Loop the clip. Set false to play once and freeze on the last frame. */
  loop?: boolean;
  /** How the video fills its box. 'contain' shows the whole frame (no crop). */
  objectFit?: 'cover' | 'contain';
  /** Horizontal scale of the video (1 = none). Used to widen a contained clip. */
  scaleX?: number;
}

export default function VideoBackground({
  videoSrc,
  children,
  className = '',
  overlay = true,
  overlayOpacity = 0.5,
  playbackRate = 1.0,
  loop = true,
  objectFit = 'cover',
  scaleX = 1,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        autoPlay
        loop={loop}
        muted
        playsInline
        className={`absolute top-0 left-0 w-full h-full ${
          objectFit === 'contain' ? 'object-cover md:object-contain' : 'object-cover'
        }`}
        style={{
          filter: 'brightness(0.75)',
          transform: scaleX !== 1 ? `scaleX(${scaleX})` : undefined,
        }}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {overlay && (
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
            opacity: overlayOpacity,
          }}
        />
      )}

      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}