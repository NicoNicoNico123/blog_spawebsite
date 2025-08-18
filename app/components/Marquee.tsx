"use client";
import { useEffect, useRef } from 'react';

export default function Marquee({ items }: { items: string[] }) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current!;
    el.style.setProperty('--w', `${el.scrollWidth}px`);
  }, []);
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track" ref={ref}>
        {[...items, ...items].map((t, i) => (
          <span className="marquee-item" key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}
