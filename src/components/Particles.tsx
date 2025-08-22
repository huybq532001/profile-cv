import { useEffect, useRef } from "react";

export default function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = canvasRef.current!;
    if (!c) return;
    const ctx = c.getContext("2d")!;
    if (!ctx) return;

    let raf = 0;
    const DPR = window.devicePixelRatio || 1;
    const H = 800; // vùng cao cho hero

    // 3 lớp sao: chậm / vừa / nhanh
    const layers = [
      { n: 90, speed: 0.08, size: [0.6, 1.2], color: "rgba(99,102,241,0.85)" },  // indigo
      { n: 70, speed: 0.16, size: [0.6, 1.6], color: "rgba(6,182,212,0.85)" },    // cyan
      { n: 50, speed: 0.28, size: [0.8, 2.0], color: "rgba(236,72,153,0.85)" }    // fuchsia
    ];

    const stars = layers.flatMap((L) =>
      Array.from({ length: L.n }).map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * H,
        r: Math.random() * (L.size[1] - L.size[0]) + L.size[0],
        s: L.speed,
        c: L.color,
        tw: Math.random() * 0.8 + 0.2, // twinkle
        t: Math.random() * Math.PI * 2,
      }))
    );

    function resize() {
      c.width = Math.floor(window.innerWidth * DPR);
      c.height = Math.floor(H * DPR);
    }

    function draw() {
      ctx.clearRect(0, 0, c.width, c.height);
      for (const p of stars) {
        p.y += p.s;
        if (p.y > H) p.y = 0;
        p.t += 0.05;
        const alpha = 0.5 + Math.sin(p.t) * 0.3 * p.tw;

        ctx.beginPath();
        ctx.fillStyle = p.c.replace("0.85", String(alpha));
        ctx.arc(p.x * DPR, p.y * DPR, p.r * DPR, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 w-full h-[800px]"
      aria-hidden
    />
  );
}
