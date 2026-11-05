"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function ImageCarousel({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const count = images.length;

  if (count === 0) return null;

  const go = (next: number) => setIndex((next + count) % count);

  return (
    <div
      role="region"
      aria-roledescription="carrousel"
      aria-label={`Captures de ${title}`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(index - 1);
        if (e.key === "ArrowRight") go(index + 1);
      }}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(dx) > 40) go(dx < 0 ? index + 1 : index - 1);
        touchStartX.current = null;
      }}
      className="relative aspect-[1.9/1] overflow-hidden border-b border-neutral-700 bg-neutral-950 outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`Capture ${i + 1} sur ${count} de ${title}`}
          fill
          sizes="(min-width: 1024px) 1024px, 100vw"
          aria-hidden={i !== index}
          className={`object-cover object-top transition-opacity duration-500 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Capture précédente"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-neutral-950/70 p-2 text-white backdrop-blur transition-colors hover:bg-neutral-950 hover:text-accent"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Capture suivante"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-neutral-950/70 p-2 text-white backdrop-blur transition-colors hover:bg-neutral-950 hover:text-accent"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>

          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-neutral-950/60 px-3 py-2 backdrop-blur">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Aller à la capture ${i + 1}`}
                aria-current={i === index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === index ? "bg-accent" : "bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          <p className="sr-only" aria-live="polite">
            Capture {index + 1} sur {count}
          </p>
        </>
      )}
    </div>
  );
}