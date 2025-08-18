"use client";

import { useEffect, useRef } from 'react';

type HeroSceneProps = {
  intensity?: number;
};

export default function HeroScene({ intensity = 0.4 }: HeroSceneProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerRef = useRef({ x: 0.5, y: 0.5 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctxMaybe = canvas.getContext('2d', { alpha: true });
    if (!ctxMaybe) return;
    const ctx = ctxMaybe as CanvasRenderingContext2D;

    let width = 0;
    let height = 0;
    let dpr = Math.max(1, window.devicePixelRatio || 1);

    function resize() {
      width = canvas.clientWidth | 0;
      height = canvas.clientHeight | 0;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    const stars = Array.from({ length: 160 }, () => ({
      x: Math.random(),
      y: Math.random(),
      z: Math.random() * 0.8 + 0.2,
      s: Math.random() * 1.2 + 0.3,
      tw: Math.random() * Math.PI * 2
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // soft vignette
      const grad = ctx.createRadialGradient(width * 0.5, height * 0.3, 0, width * 0.5, height * 0.3, Math.max(width, height));
      grad.addColorStop(0, 'rgba(255,255,255,0.04)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      const parallaxX = (pointerRef.current.x - 0.5) * intensity;
      const parallaxY = (pointerRef.current.y - 0.5) * intensity;

      // stars
      for (const star of stars) {
        const sx = (star.x + parallaxX * star.z) * width;
        const sy = (star.y + parallaxY * star.z) * height;
        const r = star.s * star.z + (Math.sin(star.tw) + 1) * 0.2;
        ctx.beginPath();
        ctx.arc(sx, sy, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.25 + star.z * 0.6})`;
        ctx.fill();
        star.tw += 0.02 + star.z * 0.02;
        star.x += (0.0003 + star.z * 0.0006);
        if (sx > width + 20) {
          star.x = -0.05;
          star.y = Math.random();
          star.z = Math.random() * 0.8 + 0.2;
          star.s = Math.random() * 1.2 + 0.3;
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    function onPointerMove(e: PointerEvent) {
      const rect = canvas.getBoundingClientRect();
      pointerRef.current.x = (e.clientX - rect.left) / rect.width;
      pointerRef.current.y = (e.clientY - rect.top) / rect.height;
    }

    resize();
    draw();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onPointerMove);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
    };
  }, [intensity]);

  return (
    <canvas ref={canvasRef} className="star-canvas" aria-hidden />
  );
}
