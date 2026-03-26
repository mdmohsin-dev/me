import { useEffect, useRef } from "react";
import { FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa";
import avatar from "../assets/Avatar_250.jpg"

// Animated orbital rings component - SOLID borders with moving glowing dot
const AnimatedRings = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      const rings = [
        { rx: cx * 0.90, ry: cy * 0.90, color: "#cc00ff", speed: 0.5,  dotCount: 1, lineWidth: 1.5, alpha: 0.55 },
        { rx: cx * 0.76, ry: cy * 0.76, color: "#6600cc", speed: -0.35, dotCount: 1, lineWidth: 1.2, alpha: 0.45 },
        { rx: cx * 1.00, ry: cy * 1.00, color: "#ffffff", speed: 0.25,  dotCount: 2, lineWidth: 1.0, alpha: 0.20 },
      ];

      rings.forEach((ring) => {
        // --- Solid ring ---
        ctx.save();
        ctx.strokeStyle = ring.color;
        ctx.lineWidth = ring.lineWidth;
        ctx.globalAlpha = ring.alpha;
        ctx.setLineDash([]); // solid
        ctx.beginPath();
        ctx.ellipse(cx, cy, ring.rx, ring.ry, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();

        // --- Glowing dots travelling around the ring ---
        for (let i = 0; i < ring.dotCount; i++) {
          const angle = t * ring.speed + (i * Math.PI * 2) / ring.dotCount;
          const x = cx + Math.cos(angle) * ring.rx;
          const y = cy + Math.sin(angle) * ring.ry;

          // Outer soft glow
          const glow = ctx.createRadialGradient(x, y, 0, x, y, 14);
          glow.addColorStop(0, ring.color);
          glow.addColorStop(0.4, ring.color + "88");
          glow.addColorStop(1, "transparent");
          ctx.beginPath();
          ctx.arc(x, y, 14, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.globalAlpha = 0.9;
          ctx.fill();

          // Inner bright core
          ctx.beginPath();
          ctx.arc(x, y, 3.5, 0, Math.PI * 2);
          ctx.fillStyle = "#ffffff";
          ctx.globalAlpha = 1;
          ctx.fill();

          // Tiny trailing tail (arc behind the dot)
          const tailLen = Math.PI / 3;
          const tailDir = ring.speed > 0 ? -1 : 1;
          const tailGrad = ctx.createLinearGradient(
            cx + Math.cos(angle + tailDir * tailLen) * ring.rx,
            cy + Math.sin(angle + tailDir * tailLen) * ring.ry,
            x, y
          );
          tailGrad.addColorStop(0, "transparent");
          tailGrad.addColorStop(1, ring.color + "cc");
          ctx.beginPath();
          ctx.arc(cx, cy, ring.rx, angle + tailDir * tailLen, angle, ring.speed < 0);
          ctx.strokeStyle = tailGrad;
          ctx.lineWidth = 2.5;
          ctx.globalAlpha = 0.6;
          ctx.setLineDash([]);
          ctx.stroke();
        }
      });

      t += 0.013;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 2 }}
    />
  );
};

// Floating particles background
const ParticlesBg = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180,80,255,${p.alpha})`;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default function Portfolio() {

  return (
    <div className="mt-20" style={{ fontFamily: "'Sora', sans-serif" }}>
      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=Dancing+Script:wght@700&display=swap');
        .logo-font { font-family: 'Dancing Script', cursive; }
        .cursor-blink::after {
          content: '|';
          animation: blink 0.8s step-end infinite;
          color: #cc00ff;
        }
        @keyframes blink { 50% { opacity: 0 } }
        .nav-link {
          position: relative;
          letter-spacing: 0.12em;
          font-size: 0.75rem;
          font-weight: 600;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px; left: 0;
          width: 0; height: 2px;
          background: #cc00ff;
          transition: width 0.3s;
        }
        .nav-link:hover::after { width: 100%; }
        .glow-text {
          text-shadow: 0 0 30px rgba(153,0,255,0.6), 0 0 60px rgba(153,0,255,0.3);
        }
        .resume-btn {
          border: 1.5px solid #cc00ff;
          position: relative;
          overflow: hidden;
        }
        .resume-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #cc00ff22, transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .resume-btn:hover::before { opacity: 1; }
        
        @media (max-width: 768px) {
          
        }
        .profile-inner {
          position: absolute;
          inset: 15%;
          border-radius: 50%;
          overflow: hidden;
          background: radial-gradient(circle at 40% 40%, #2d0066, #0a0010);
          border: 2px solid rgba(153,0,255,0.4);
          z-index: 3;
        }
        .social-icon-wrap:hover svg { color: #cc00ff; }
      `}</style>

      {/* Particles background */}
      <ParticlesBg />

      {/* Subtle grid overlay */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(100,0,200,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(100,0,200,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          zIndex: 0,
        }}
      />


      {/* HERO */}
      <main className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between min-h-[calc(100vh-72px)] px-8 md:px-20 py-16 gap-12">
        {/* Left */}
        <div className="flex-1 flex flex-col gap-6 max-w-xl">
          {/* Subtle indicator */}
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-xs text-purple-400/60 tracking-[0.3em] uppercase">Available for work</span>
          </div>

          <div>
            <p className="text-white text-2xl mb-2">Hi! I'm,</p>
            <h1
              className="text-6xl md:text-8xl font-extrabold cursor-blink glow-text"
              style={{ background: "linear-gradient(135deg, #cc00ff 0%, #7700cc 50%, #aa00ff 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              Mohsin
            </h1>
          </div>

          <div className="space-y-1">
            <p className="text-white text-lg font-light">
              <span className="font-semibold text-white">Frontend Developer.</span>
            </p>
            <p className="text-white/80 text-lg font-light">
              I create{" "}
              <span
                className="font-semibold"
                style={{ background: "linear-gradient(90deg, #cc00ff, #ff66ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                Exciting Stuff
              </span>{" "}
              on the Internet.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-6 pt-2">
            <FaGithub size={34}></FaGithub>
            <FaLinkedin size={34}></FaLinkedin>
            <FaGoogle size={34}></FaGoogle>
          </div>
        </div>

        {/* Right - Animated avatar */}
        <div className="flex items-center justify-center">
          <div className="profile-img-container relative md:w-96 md:h-96 h-72 w-72">
            {/* Canvas rings animation */}
            <AnimatedRings />

            {/* Profile image area */}
            <div className="profile-inner flex items-center justify-center">
              {/* AI/tech face SVG placeholder */}
              <img className="w-full" src={avatar} alt="" />
            </div>

            {/* Outer glow */}
            {/* <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, transparent 55%, rgba(153,0,255,0.08) 100%)",
                zIndex: 1,
              }}
            /> */}
          </div>
        </div>
      </main>

    </div>
  );
}