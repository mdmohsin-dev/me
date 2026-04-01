import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
// import avatar from "../assets/Avatar_250.jpg"
import me from "../assets/me.jpeg"
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";

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
        { rx: cx * 0.90, ry: cy * 0.90, color: "#cc00ff", speed: 0.5, dotCount: 1, lineWidth: 1.5, alpha: 0.55 },
        { rx: cx * 0.76, ry: cy * 0.76, color: "#6600cc", speed: -0.35, dotCount: 2, lineWidth: 1.2, alpha: 0.45 },
        { rx: cx * 1.00, ry: cy * 1.00, color: "#ffffff", speed: 0.25, dotCount: 2, lineWidth: 1.0, alpha: 0.20 },
      ];

      rings.forEach((ring) => {
        // --- Solid ring ---
        ctx.save();
        ctx.strokeStyle = ring.color;
        ctx.lineWidth = ring.lineWidth;
        ctx.globalAlpha = ring.alpha;
        // ctx.setLineDash([]); // solid
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
    <div className="lg:pt-10 pt-28 max-w-350 mx-auto px-5" id="home" style={{ fontFamily: "'Sora', sans-serif" }}>
      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=Dancing+Script:wght@700&display=swap');
        .logo-font { font-family: 'Dancing Script', cursive; }
        .cursor-blink::after {
          animation: blink 0.8s step-end infinite;
          color: #cc00ff;
        }
        @keyframes blink { 50% { opacity: 0 } }
        
        .resume-btn {
          border: 1.5px solid #cc00ff;
          position: relative;
          overflow: hidden;
        }
        
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
      <main className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between min-h-[calc(100vh-72px)] px-4 gap-12">
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
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-6 pt-2">
            <a href="https://github.com/mdmohsin-dev" target="_blank"><FaGithub size={34}></FaGithub></a>
            <a href="https://www.linkedin.com/in/mdmohsin-dev/" target="_blank"><FaLinkedin size={34}></FaLinkedin></a>
            <a href="mailto:mdmohosin.web@gmail.com"><SiGmail size={34}></SiGmail></a>
          </div>
        </div>

        {/* Right - Animated avatar */}
       <div>
         <div className="flex items-center justify-center">
          <div className="relative md:w-96 md:h-96 h-72 w-72">
            {/* Canvas rings animation */}
            <AnimatedRings />

            {/* Profile image area */}
            <div className="absolute inset-[15%] z-3 rounded-full overflow-hidden flex items-center justify-center border-2 border-[rgba(153,0,255,0.4)]">
              
              <motion.img initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{type:"spring",stiffness:100,delay:0.5}} className="w-full h-full" src={me} alt="" />
            </div>
          </div>
        </div>
       </div>
      </main>

    </div>
  );
}