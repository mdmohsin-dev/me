import React, { useCallback, useEffect, useRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import swift from "../assets/swift.png";
import law from "../assets/lawyer.png";

const PROJECTS = [
  {
    id: 0,
    num: "01",
    year: "2024",
    title: "SwiftMove\n Courier management system",
    desc: "A full-stack courier management system for parcel delivery, rider management, and real-time delivery tracking.",
    tags: ["React", "JavaScript", "Express", "MongoDB"],
    image: swift,
    accent: "#c8ff57",
    liveLink: "https://swift-move-b007b.web.app/",
    githubLink: "https://github.com/mdmohsin-dev/swift-move-client"
  },
  {
    id: 1,
    num: "02",
    year: "2024",
    title: "Law.BD",
    desc: "Law BD is a modern legal service platform built with React and Tailwind CSS where users can explore available advocates, apply for appointments, and cancel applications dynamically.",
    tags: ["React", "Javascript", "Localstorage"],
    image: law,
    accent: "#c8ff57",
    liveLink: "https://lawyer-bd-silk.vercel.app/",
    githubLink: "https://github.com/mdmohsin-dev/lawyer-bd"
  },
  {
    id: 2,
    num: "03",
    year: "2023",
    title: "Scribe — AI\nWriting Assistant",
    desc: "An intelligent writing tool using LLMs to suggest edits and restructure arguments.",
    tags: ["Python", "FastAPI", "OpenAI", "AI"],
    meta: "Open source · 2.3k GitHub stars",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80",
    accent: "#c8ff57",
  },
  {
    id: 3,
    num: "04",
    year: "2023",
    title: "Nest — Smart\nHome Controller",
    desc: "A unified smart-home dashboard connecting devices across ecosystems.",
    tags: ["Vue 3", "Node.js", "WebSockets", "IoT"],
    meta: "Side project · Personal use",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
    accent: "#c8ff57",
  },
];

const PEEK = 60;
const SCROLL_PER = 520;
const SCALE_MAX = 0.055;
const DIM_MAX = 0.28;

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

const ArrowIcon = () => (
  <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 16 16" fill="none">
    <path
      d="M8 3l5 5-5 5M3 8h10"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GithubIcon = () => (
  <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 1.5C4.41 1.5 1.5 4.41 1.5 8c0 2.87 1.86 5.3 4.44 6.16.32.06.44-.14.44-.3v-1.05c-1.8.39-2.18-.87-2.18-.87-.3-.75-.72-.95-.72-.95-.59-.4.04-.4.04-.4.65.05 1 .67 1 .67.58 1 1.53.71 1.9.54.06-.42.23-.71.41-.87-1.44-.16-2.95-.72-2.95-3.2 0-.71.25-1.29.67-1.74-.07-.16-.29-.82.06-1.71 0 0 .55-.18 1.8.67A6.3 6.3 0 018 5.78c.52.01 1.04.07 1.53.22 1.25-.85 1.8-.67 1.8-.67.35.89.13 1.55.06 1.71.42.45.67 1.03.67 1.74 0 2.49-1.52 3.04-2.96 3.2.23.2.44.6.44 1.2v1.79c0 .17.11.37.44.3C12.64 13.3 14.5 10.87 14.5 8c0-3.59-2.91-6.5-6.5-6.5z" />
  </svg>
);

const ProjectCard = React.forwardRef(({ project, style }, ref) => {
  return (
    <article
      ref={ref}
      style={style}
      className="absolute h-screen mt-10 left-0 right-0 overflow-hidden rounded-lg"
    >
      <div className="grid md:grid-cols-[5fr_6fr] bg-black rounded-lg border border-[#C8FF57]">
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover brightness-75 transition duration-500 hover:scale-105 hover:brightness-90"
          />

          <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white/60 backdrop-blur-sm">
            {project.num} / 04
          </span>

          <span className="absolute bottom-4 left-4 text-[10px] text-white/40">
            {project.year}
          </span>

          <div
            className="absolute bottom-0 left-0 right-0 h-[3px]"
            style={{
              background: `linear-gradient(90deg, ${project.accent}, transparent)`,
            }}
          />
        </div>

        <div className="flex flex-col justify-between p-8">
          <div>
            <div className="mb-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.08em] text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="mb-4 whitespace-pre-line text-3xl font-bold leading-tight tracking-tight text-white">
              {project.title}
            </h3>

            <div
              className="mb-4 h-px opacity-40"
              style={{
                background: `linear-gradient(90deg, ${project.accent}, transparent)`,
              }}
            />

            <p className="text-sm leading-7 text-zinc-400">{project.desc}</p>
          </div>

          <div>
            <p className="mb-4 text-[10px] tracking-wide text-zinc-600">
              {project.meta}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: project.accent }}
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-black transition hover:-translate-y-0.5"
              >
                <ArrowIcon />
                Live Demo
              </a>

              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm text-zinc-300 transition hover:-translate-y-0.5 hover:border-white/20"
              >
                <GithubIcon />
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
});

ProjectCard.displayName = "ProjectCard";

const LatestProjects = () => {
  const outerRef = useRef(null);
  const sceneRef = useRef(null);
  const cardRefs = useRef([]);
  const rafRef = useRef(null);

  const [styles, setStyles] = useState(
    PROJECTS.map((_, i) => ({
      top: "0px",
      transform: "scale(1)",
      filter: "brightness(1)",
      zIndex: 10 + i * 10,
    }))
  );

  const compute = useCallback(() => {
    const outer = outerRef.current;
    const scene = sceneRef.current;
    const card0 = cardRefs.current[0];

    if (!outer || !scene || !card0) return;

    const cardH = card0.offsetHeight;
    const outerTop = outer.getBoundingClientRect().top + window.scrollY;
    const scrolled = Math.max(0, window.scrollY - outerTop);

    outer.style.height =
      window.innerHeight + (PROJECTS.length - 1) * SCROLL_PER + "px";

    scene.style.height = cardH + "px";

    const next = PROJECTS.map((_, i) => {
      let topPx;

      if (i === 0) {
        topPx = 0;
      } else {
        const winStart = (i - 1) * SCROLL_PER;
        const winEnd = i * SCROLL_PER;

        const prog = Math.min(
          1,
          Math.max(0, (scrolled - winStart) / (winEnd - winStart))
        );

        const restTop = PEEK * i;
        const startTop = cardH;

        topPx =
          startTop - (startTop - restTop) * easeOutCubic(prog);
      }

      let scale = 1;
      let bright = 1;

      const arrivedAbove = PROJECTS.slice(i + 1).filter((_, j) => {
        const li = i + 1 + j;

        return (
          Math.min(
            1,
            Math.max(
              0,
              (scrolled - (li - 1) * SCROLL_PER) / SCROLL_PER
            )
          ) > 0
        );
      }).length;

      if (arrivedAbove > 0) {
        const topLi = i + arrivedAbove;

        const topProg = Math.min(
          1,
          Math.max(
            0,
            (scrolled - (topLi - 1) * SCROLL_PER) / SCROLL_PER
          )
        );

        const depth =
          (arrivedAbove - 1 + topProg) / (PROJECTS.length - 1);

        scale = 1 - depth * SCALE_MAX;
        bright = 1 - depth * DIM_MAX;
      }

      return {
        top: `${topPx}px`,
        transform: `scale(${scale})`,
        filter: `brightness(${bright})`,
        zIndex: 10 + i * 10,
      };
    });

    setStyles(next);
  }, []);

  const onScroll = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(compute);
  }, [compute]);

  useEffect(() => {
    compute();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    window.addEventListener("resize", compute);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", compute);

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [compute, onScroll]);

  return (
    <section className="text-white scroll-mt-24 mt-40">
      <SectionTitle title={'latest projects'}></SectionTitle>
      <div ref={outerRef} className="relative mx-auto max-w-6xl px-6">
        <div className="sticky top-24 flex  items-end overflow-hidden">
          <div ref={sceneRef} className="relative w-full">
            {PROJECTS.map((project, i) => (
              <ProjectCard
                key={project.id}
                ref={(el) => (cardRefs.current[i] = el)}
                project={project}
                style={styles[i]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;