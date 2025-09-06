// components/BoidsBackground.tsx
"use client";
import { useEffect, useRef } from "react";

type Boid = { x: number; y: number; vx: number; vy: number };

export default function BoidsBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const boidsRef = useRef<Boid[]>([]);

  // config (tweak to taste)
  const COUNT = 120;
  const MAX_SPEED = 2.0;
  const VIEW = 60;
  const SEP_FORCE = 0.035;
  const ALI_FORCE = 0.02;
  const COH_FORCE = 0.01;
  const EDGE_FORCE = 0.02;
  const EDGE_MARGIN = 60;

  const resize = () => {
    const c = canvasRef.current!;
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    c.width = Math.floor(c.clientWidth * dpr);
    c.height = Math.floor(c.clientHeight * dpr);
    const ctx = c.getContext("2d")!;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  useEffect(() => {
    const c = canvasRef.current!;
    const ctx = c.getContext("2d")!;

    resize();
    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    const { width, height } = c.getBoundingClientRect();
    const rand = (min: number, max: number) => Math.random() * (max - min) + min;
    boidsRef.current = Array.from({ length: COUNT }, () => ({
      x: rand(0, width),
      y: rand(0, height),
      vx: rand(-1, 1),
      vy: rand(-1, 1),
    }));

    const step = () => {
      const boids = boidsRef.current;
      const { width: W, height: H } = c.getBoundingClientRect();
      for (let i = 0; i < boids.length; i++) {
        const b = boids[i];
        let cx = 0, cy = 0, ax = 0, ay = 0, sx = 0, sy = 0, n = 0;

        for (let j = 0; j < boids.length; j++) {
          if (i === j) continue;
          const o = boids[j];
          const dx = o.x - b.x;
          const dy = o.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < VIEW * VIEW) {
            n++;
            cx += o.x; cy += o.y;       
            ax += o.vx; ay += o.vy;       
            if (d2 > 0) {                
              const inv = 1 / d2;
              sx -= dx * inv;
              sy -= dy * inv;
            }
          }
        }

        if (n > 0) {
          cx = cx / n - b.x; cy = cy / n - b.y;
          b.vx += cx * COH_FORCE; b.vy += cy * COH_FORCE;

          ax = ax / n - b.vx; ay = ay / n - b.vy;
          b.vx += ax * ALI_FORCE; b.vy += ay * ALI_FORCE;

          b.vx += sx * SEP_FORCE; b.vy += sy * SEP_FORCE;
        }

        if (b.x < EDGE_MARGIN) b.vx += EDGE_FORCE;
        if (b.x > W - EDGE_MARGIN) b.vx -= EDGE_FORCE;
        if (b.y < EDGE_MARGIN) b.vy += EDGE_FORCE;
        if (b.y > H - EDGE_MARGIN) b.vy -= EDGE_FORCE;

        // Clamp speed
        const sp = Math.hypot(b.vx, b.vy);
        if (sp > MAX_SPEED) {
          b.vx = (b.vx / sp) * MAX_SPEED;
          b.vy = (b.vy / sp) * MAX_SPEED;
        }

    
        b.x += b.vx; b.y += b.vy;
      }

      ctx.clearRect(0, 0, c.clientWidth, c.clientHeight);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(255,255,255,0.35)";
      ctx.fillStyle   = "rgba(255,255,255,0.95)";

      for (const b of boids) {
        const angle = Math.atan2(b.vy, b.vx);
        const size = 6;
        const x = b.x, y = b.y;

        ctx.beginPath();
        ctx.moveTo(x + Math.cos(angle) * size, y + Math.sin(angle) * size);
        ctx.lineTo(x + Math.cos(angle + 2.5) * size, y + Math.sin(angle + 2.5) * size);
        ctx.lineTo(x + Math.cos(angle - 2.5) * size, y + Math.sin(angle - 2.5) * size);
        ctx.closePath();
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 h-full w-full pointer-events-none"
      aria-hidden
    />
  );
}
