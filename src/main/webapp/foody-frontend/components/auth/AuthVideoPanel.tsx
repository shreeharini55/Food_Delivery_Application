"use client";

import { useEffect, useRef } from "react";

export function AuthVideoPanel() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const playPromise = video.play();
    if (playPromise) {
      playPromise.catch(() => {
        video.load();
        void video.play();
      });
    }
  }, []);

  return (
    <div className="relative hidden w-1/2 p-2 md:block">
      <div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-3xl">
        <video
          ref={videoRef}
          src="/videos/food-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          controls={false}
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          aria-hidden
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
      </div>
    </div>
  );
}
