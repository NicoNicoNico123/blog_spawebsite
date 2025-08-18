"use client";
import { useEffect, useRef } from 'react';

type Logo = { src: string; alt: string; href?: string };

export default function LogosCarousel({ logos }: { logos: Logo[] }) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--speed', '35s');
  }, []);
  return (
    <div className="logos">
      <div className="logos-track" ref={ref}>
        {[...logos, ...logos].map((l, i) => (
          <div className="logo-item" key={i}>
            {l.href ? (
              <a href={l.href} target="_blank" rel="noreferrer noopener">
                <img src={l.src} alt={l.alt} />
              </a>
            ) : (
              <img src={l.src} alt={l.alt} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
