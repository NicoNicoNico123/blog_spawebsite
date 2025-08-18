"use client";
import { useEffect, useRef } from 'react';

export default function VerticalCarousel({ items, intervalMs = 1800 }: { items: string[]; intervalMs?: number }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const indexRef = useRef(0);
  useEffect(() => {
    const id = setInterval(() => {
      const el = containerRef.current;
      if (!el) return;
      indexRef.current = (indexRef.current + 1) % items.length;
      el.style.setProperty('--i', String(indexRef.current));
    }, intervalMs);
    return () => clearInterval(id);
  }, [items.length, intervalMs]);
  return (
    <div className="v-carousel">
      <div className="v-track" ref={containerRef}>
        {items.map((text, idx) => (
          <div key={idx} className="v-item">
            <h3>{text}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
