// src/components/StardustLight.tsx
import { useEffect, useRef } from "react";

type P = { className?: string };

export default function StardustLight({ className = "" }: P) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    const size = () => {
      const { clientWidth: w, clientHeight: h } = canvas;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    size();
    window.addEventListener("resize", size);

    // ===== PARTICLE FIELDS =====
    const stars: {
      x: number; y: number; r: number; vx: number; vy: number;
      alpha: number; tw: number; col: string;
    }[] = [];
    const bokeh: {
      x: number; y: number; r: number; vx: number; vy: number; alpha: number; col: string;
    }[] = [];

    const COLORS = [
      "rgba(99,102,241,1)",  // indigo
      "rgba(236,72,153,1)",  // fuchsia
      "rgba(34,211,238,1)",  // cyan
    ];

    const init = () => {
      stars.length = 0;
      bokeh.length = 0;

      const w = canvas.clientWidth, h = canvas.clientHeight;

      // ⭐ MẬT ĐỘ CAO HƠN (phủ đều 2 bên)
      const STAR_COUNT = Math.min(260, Math.floor((w * h) / 12000));
      const BOKEH_COUNT = Math.min(24, Math.floor((w * h) / 60000));

      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: 0.8 + Math.random() * 1.6,        // lớn hơn
          vx: (Math.random() * 0.35 + 0.05) * (Math.random() > 0.5 ? 1 : -1),
          vy: Math.random() * 0.28 + 0.06,
          alpha: 0.35 + Math.random() * 0.45,   // sáng hơn
          tw: 0.006 + Math.random() * 0.01,
          col: COLORS[(Math.random() * COLORS.length) | 0],
        });
      }

      for (let i = 0; i < BOKEH_COUNT; i++) {
        const sideBias = i % 2 === 0 ? 0.6 : 0.4; // hơi ưu tiên phía phải để cân ảnh
        bokeh.push({
          x: (Math.random() * 0.7 + sideBias - 0.35) * w, // 0..1 với bias
          y: Math.random() * h * 0.9,
          r: 60 + Math.random() * 120,
          vx: (Math.random() * 0.08 + 0.02) * (Math.random() > 0.5 ? 1 : -1),
          vy: Math.random() * 0.06 + 0.02,
          alpha: 0.10 + Math.random() * 0.12,
          col: COLORS[(Math.random() * COLORS.length) | 0],
        });
      }
    };
    init();

    // 🚀 COMET thi thoảng
    let comet:
      | { x: number; y: number; vx: number; vy: number; life: number; max: number }
      | null = null;
    let lastComet = 0;

    const spawnComet = (t: number, w: number, h: number) => {
      if (t - lastComet < 4000 + Math.random() * 3000 || comet) return;
      lastComet = t;
      const fromLeft = Math.random() < 0.5;
      comet = {
        x: fromLeft ? -80 : w + 80,
        y: h * (0.18 + Math.random() * 0.32),
        vx: fromLeft ? (1.6 + Math.random() * 0.7) : -(1.6 + Math.random() * 0.7),
        vy: 0.28 + Math.random() * 0.25,
        life: 0,
        max: 1300,
      };
    };

    const draw = (t: number) => {
      const w = canvas.clientWidth, h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);

      // Dùng blend mode để hạt nổi rõ trên nền sáng
      const prev = ctx.globalCompositeOperation;
      ctx.globalCompositeOperation = "lighter";

      // Bokeh (to, mờ) — vẽ trước
      for (const b of bokeh) {
        b.x += b.vx; b.y += b.vy;
        if (b.x < -150) b.x = w + 150;
        if (b.x > w + 150) b.x = -150;
        if (b.y > h + 150) b.y = -150;

        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        const c = b.col.replace(",1)", `,${b.alpha})`);
        g.addColorStop(0, c);
        g.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Stars (nhỏ, twinkle)
      for (const p of stars) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < -5) p.x = w + 5;
        if (p.x > w + 5) p.x = -5;
        if (p.y > h + 5) p.y = -5;
        p.alpha += Math.sin(t * p.tw) * 0.004;
        if (p.alpha < 0.20) p.alpha = 0.20;
        if (p.alpha > 0.95) p.alpha = 0.95;

        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3.2);
        const c = p.col.replace(",1)", `,${p.alpha})`);
        g.addColorStop(0, c);
        g.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 3.2, 0, Math.PI * 2);
        ctx.fill();
      }

      // Comet
      spawnComet(t, w, h);
      if (comet) {
        const c = comet;
        c.x += c.vx; c.y += c.vy; c.life += 16;
        const trail = 100;
        for (let i = 0; i < trail; i += 10) {
          const tt = i / trail;
          const tx = c.x - c.vx * i;
          const ty = c.y - c.vy * i * 0.85;
          const a = (1 - tt) * 0.22;
          const r = 2 + (1 - tt) * 2.6;
          const grad = ctx.createRadialGradient(tx, ty, 0, tx, ty, r * 3);
          grad.addColorStop(0, `rgba(99,102,241,${a})`);
          grad.addColorStop(0.5, `rgba(236,72,153,${a * 0.85})`);
          grad.addColorStop(1, "rgba(255,255,255,0)");
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(tx, ty, r * 3, 0, Math.PI * 2);
          ctx.fill();
        }
        if (c.life > c.max || c.x < -120 || c.x > w + 120 || c.y > h + 120) {
          comet = null;
        }
      }

      ctx.globalCompositeOperation = prev;
      raf.current = requestAnimationFrame(draw);
    };

    raf.current = requestAnimationFrame(draw);

    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", size);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={[
        "pointer-events-none absolute inset-0",
        // đặt cao hơn grid & aura để hạt không bị “chìm”
        "z-[1]",
        className,
      ].join(" ")}
    />
  );
}
