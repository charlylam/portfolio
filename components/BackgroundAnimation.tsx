"use client";

import { useEffect, useRef } from "react";

const GAP = 34;
const INDENTS = [0, 1, 1, 2, 2, 1, 0, 1, 2, 3, 2, 1, 0];

type Segment = { x: number; w: number; accent: boolean };
type Grain = { y: number; alpha: number; width: number; phase: number };
type Knot = { x: number; y: number; sx: number; sy: number; pull: number };
type Pore = { g: number; x: number; len: number };

function mulberry32(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hexToRgb(hex: string): [number, number, number] {
  let h = hex.trim().replace("#", "");
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  const n = parseInt(h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export default function BackgroundAnimation() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const accent =
      getComputedStyle(document.documentElement).getPropertyValue("--color-accent") ||
      "#b98a52";
    const [ar, ag, ab] = hexToRgb(accent);

    let w = 0;
    let h = 0;
    let lines: Segment[][] = [];
    let grains: Grain[] = [];
    let knots: Knot[] = [];
    let pores: Pore[] = [];
    let raf = 0;

    // Déformation d'une veine : ondulations douces, corrélées d'une veine
    // à l'autre, plus un écartement autour de chaque nœud
    function displace(x: number, y0: number, phase: number) {
      let dy =
        Math.sin(x * 0.0021 + y0 * 0.006 + phase * 0.3) * 16 +
        Math.sin(x * 0.0057 + y0 * 0.011 + 1.7) * 7 +
        Math.sin(x * 0.015 + y0 * 0.02 + phase) * 1.8;
      for (const k of knots) {
        const dx = (x - k.x) / k.sx;
        const dk = (y0 - k.y) / k.sy;
        dy += (y0 - k.y) * k.pull * Math.exp(-(dx * dx + dk * dk));
      }
      return dy;
    }

    function build() {
      const dpr = window.devicePixelRatio || 1;
      w = window.innerWidth;
      h = window.innerHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const rand = mulberry32(7);

      // Lignes de code
      const count = Math.ceil(h / GAP) + 1;
      lines = Array.from({ length: count }, (_, i) => {
        let x = w * 0.06 + INDENTS[i % INDENTS.length] * 34;
        const segments: Segment[] = [];
        const n = 1 + Math.floor(rand() * 3);
        for (let k = 0; k < n; k++) {
          const len = 40 + rand() * (k === 0 ? 80 : 200);
          if (x + len > w * 0.94) break;
          segments.push({ x, w: len, accent: k === 0 && rand() > 0.55 });
          x += len + 14;
        }
        return segments;
      });

      // Veines : espacement irrégulier (bois de printemps large, bois d'été serré)
      grains = [];
      let y = -20;
      while (y < h + 40) {
        const band = Math.max(0, Math.sin(y * 0.021 + 1.3) * Math.sin(y * 0.0063));
        y += 7 + rand() * 9 + band * 9;
        const dark = rand() < 0.18;
        grains.push({
          y,
          alpha: dark ? 1 : 0.35 + rand() * 0.4,
          width: dark ? 1.3 : 0.8,
          phase: rand() * 6.28,
        });
      }

      knots = [
        { x: w * 0.72, y: h * 0.34, sx: w * 0.1, sy: h * 0.075, pull: 0.9 },
        { x: w * 0.18, y: h * 0.74, sx: w * 0.08, sy: h * 0.06, pull: 0.7 },
      ];

      pores = Array.from({ length: 260 }, () => ({
        g: Math.floor(rand() * grains.length),
        x: rand() * w,
        len: 6 + rand() * 18,
      }));
    }

    function draw() {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = reduced ? 0.3 : max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      const lin = Math.min(1, Math.max(0, (p - 0.05) / 0.85));
      const t = lin * lin * (3 - 2 * lin);

      ctx!.clearRect(0, 0, w, h);

      // Bois : les veines se redressent et s'effacent
      if (t < 0.99) {
        const k = 1 - t;

        for (const g of grains) {
          ctx!.lineWidth = g.width;
          ctx!.strokeStyle = `rgba(${ar},${ag},${ab},${0.10 * g.alpha * k})`;
          ctx!.beginPath();
          for (let x = -10; x <= w + 10; x += 10) {
            const y = g.y + displace(x, g.y, g.phase) * k;
            if (x === -10) ctx!.moveTo(x, y);
            else ctx!.lineTo(x, y);
          }
          ctx!.stroke();
        }

        ctx!.lineWidth = 1;
        ctx!.strokeStyle = `rgba(${ar},${ag},${ab},${0.13 * k})`;
        ctx!.beginPath();
        for (const pore of pores) {
          const g = grains[pore.g];
          const y = g.y + displace(pore.x, g.y, g.phase) * k + 3;
          ctx!.moveTo(pore.x, y);
          ctx!.lineTo(pore.x + pore.len, y + 0.6);
        }
        ctx!.stroke();

        for (const kn of knots) {
          for (let j = 1; j <= 4; j++) {
            ctx!.strokeStyle = `rgba(${ar},${ag},${ab},${0.12 * k * (1 - j * 0.15)})`;
            ctx!.beginPath();
            ctx!.ellipse(kn.x, kn.y, kn.sx * 0.12 * j, kn.sy * 0.1 * j, 0, 0, Math.PI * 2);
            ctx!.stroke();
          }
        }
      }

      // Code : les lignes apparaissent comme tapées
      if (t > 0.01) {
        const grow = Math.min(1, t * 1.3);
        ctx!.lineWidth = 5;
        ctx!.lineCap = "round";
        for (let i = 0; i < lines.length; i++) {
          const y = i * GAP + GAP / 2;
          for (const s of lines[i]) {
            ctx!.strokeStyle = s.accent
              ? `rgba(${ar},${ag},${ab},${0.2 * t})`
              : `rgba(255,255,255,${0.09 * t})`;
            ctx!.beginPath();
            ctx!.moveTo(s.x, y);
            ctx!.lineTo(s.x + s.w * grow, y);
            ctx!.stroke();
          }
        }
      }
    }

    function schedule() {
      if (!raf) raf = requestAnimationFrame(draw);
    }

    function onResize() {
      build();
      schedule();
    }

    build();
    draw();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", onResize);
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", onResize);
      observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
}