// const LatestProjects = () => {

//     const PROJECTS = [
//         {
//             id: 0, num: '01', year: '2024',
//             title: 'Pulse — Health\n& Habit Tracker',
//             desc: 'A cross-platform mobile app helping users build meaningful habits through adaptive streaks, smart reminders, and detailed progress analytics. Grew to 12,000+ active users within 6 months of launch.',
//             tags: ['React Native', 'TypeScript', 'Firebase', 'Mobile'],
//             meta: '12k users · 4.8 App Store · iOS & Android',
//             image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&q=80',
//             accent: '#c8ff57',
//         },
//         {
//             id: 1, num: '02', year: '2024',
//             title: 'Orbit — Analytics\nDashboard',
//             desc: 'Real-time SaaS analytics for e-commerce teams. Funnel visualisation, cohort analysis, and a drag-and-drop report builder non-technical stakeholders love. Reduced reporting time by 70% for clients.',
//             tags: ['Next.js', 'D3.js', 'PostgreSQL', 'SaaS'],
//             meta: 'SaaS · $40k ARR · B2B',
//             image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80',
//             accent: '#ff6b6b',
//         },
//         {
//             id: 2, num: '03', year: '2023',
//             title: 'Scribe — AI\nWriting Assistant',
//             desc: 'An intelligent writing tool using LLMs to suggest edits, restructure arguments, and match tone. Streaming API delivers near-instant feedback on long-form documents up to 50,000 words.',
//             tags: ['Python', 'FastAPI', 'OpenAI', 'AI'],
//             meta: 'Open source · 2.3k GitHub stars',
//             image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80',
//             accent: '#6baaff',
//         },
//         {
//             id: 3, num: '04', year: '2023',
//             title: 'Nest — Smart\nHome Controller',
//             desc: 'A unified smart-home dashboard connecting devices across ecosystems — lights, thermostats, sensors — into one interface with an automation rule builder and real-time energy monitoring.',
//             tags: ['Vue 3', 'Node.js', 'WebSockets', 'IoT'],
//             meta: 'Side project · Personal use',
//             image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80',
//             accent: '#ffb86b',
//         },
//     ];

//     const ArrowIcon = () => (
//         <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16" fill="none">
//             <path d="M8 3l5 5-5 5M3 8h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
//         </svg>
//     );
//     const GithubIcon = () => (
//         <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 16 16" fill="currentColor">
//             <path d="M8 1.5C4.41 1.5 1.5 4.41 1.5 8c0 2.87 1.86 5.3 4.44 6.16.32.06.44-.14.44-.3v-1.05c-1.8.39-2.18-.87-2.18-.87-.3-.75-.72-.95-.72-.95-.59-.4.04-.4.04-.4.65.05 1 .67 1 .67.58 1 1.53.71 1.9.54.06-.42.23-.71.41-.87-1.44-.16-2.95-.72-2.95-3.2 0-.71.25-1.29.67-1.74-.07-.16-.29-.82.06-1.71 0 0 .55-.18 1.8.67A6.3 6.3 0 018 5.78c.52.01 1.04.07 1.53.22 1.25-.85 1.8-.67 1.8-.67.35.89.13 1.55.06 1.71.42.45.67 1.03.67 1.74 0 2.49-1.52 3.04-2.96 3.2.23.2.44.6.44 1.2v1.79c0 .17.11.37.44.3C12.64 13.3 14.5 10.87 14.5 8c0-3.59-2.91-6.5-6.5-6.5z" />
//         </svg>
//     );
//     const ChevronDown = () => (
//         <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
//             <path d="M7 2v10M3 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//         </svg>
//     );

//     function Cursor() {
//         const dotRef = useRef(null);
//         const ringRef = useRef(null);
//         useEffect(() => {
//             let mx = 0, my = 0, rx = 0, ry = 0;
//             const mv = e => {
//                 mx = e.clientX; my = e.clientY;
//                 if (dotRef.current) { dotRef.current.style.left = mx + 'px'; dotRef.current.style.top = my + 'px'; }
//             };
//             document.addEventListener('mousemove', mv);
//             const loop = () => {
//                 rx += (mx - rx) * .12; ry += (my - ry) * .12;
//                 if (ringRef.current) { ringRef.current.style.left = rx + 'px'; ringRef.current.style.top = ry + 'px'; }
//                 requestAnimationFrame(loop);
//             };
//             loop();
//             return () => document.removeEventListener('mousemove', mv);
//         }, []);
//         return (
//             <>
//                 <div ref={dotRef} className="cursor" />
//                 <div ref={ringRef} className="cursor-ring" />
//             </>
//         );
//     }

//     return (
//         <div>

//         </div>
//     );
// };

// export default LatestProjects;



// < !DOCTYPE html >
//     <html lang="en">
//         <head>
//             <meta charset="UTF-8" />
//             <meta name="viewport" content="width=device-width,initial-scale=1.0" />
//             <title>Portfolio — Projects</title>
//             <script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"></script>
//             <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"></script>
//             <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.23.2/babel.min.js"></script>
//             <script src="https://cdn.tailwindcss.com"></script>
//             <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Manrope:wght@300;400;500;600&display=swap" rel="stylesheet" />
//             <script>
//                 tailwind.config = {
//                     theme: {
//                     extend: {
//                     fontFamily: {
//                     display: ['Syne', 'sans-serif'],
//                 body:    ['Manrope', 'sans-serif'],
//       },
//                 colors: {
//                     canvas:  '#0a0a0c',
//                 surface: '#131316',
//                 card:    '#1a1a1f',
//                 rim:     'rgba(255,255,255,0.07)',
//                 'rim-hi':'rgba(255,255,255,0.15)',
//                 ink:     '#ede9e3',
//                 muted:   '#6b6865',
//                 ghost:   '#2a2928',
//                 lime:    '#c8ff57',
//                 coral:   '#ff6b6b',
//                 sky:     '#6baaff',
//                 amber:   '#ffb86b',
//       },
//                 keyframes: {
//                     blink:  {'0%,100%':{opacity:'1',transform:'scale(1)'},  '50%':{opacity:'.3',transform:'scale(.6)'} },
//                 bob:    {'0%,100%':{transform:'translateY(0)'},          '50%':{transform:'translateY(8px)'} },
//                 fadein: {'0%':{opacity:'0',transform:'translateY(18px)'},'100%':{opacity:'1',transform:'translateY(0)'} },
//       },
//                 animation: {
//                     blink:  'blink 2s ease-in-out infinite',
//                 bob:    'bob 3s ease-in-out infinite',
//                 fadein: 'fadein .7s ease forwards',
//       },
//     }
//   }
// }
//             </script>
//             <style>
//                 html {scroll - behavior: smooth; }
//                 body {
//                     background: #0a0a0c;
//                 color: #ede9e3;
//                 font-family: 'Manrope', sans-serif;
//                 overflow-x: hidden;
//                 cursor: none;
//   }
//                 /* custom cursor */
//                 .cursor {
//                     position:fixed; width:9px; height:9px;
//                 background:#c8ff57; border-radius:50%;
//                 pointer-events:none; z-index:9999;
//                 transform:translate(-50%,-50%);
//                 transition: width .18s, height .18s;
//   }
//                 .cursor-ring {
//                     position:fixed; width:32px; height:32px;
//                 border:1px solid rgba(200,255,87,.35); border-radius:50%;
//                 pointer-events:none; z-index:9998;
//                 transform:translate(-50%,-50%);
//                 transition: width .22s, height .22s, border-color .22s;
//   }
//                 body:has(a:hover) .cursor      {width:14px; height:14px; }
//                 body:has(a:hover) .cursor-ring {width:46px; height:46px; border-color:rgba(200,255,87,.6); }

//                 /* progress bar */
//                 .prog {position:fixed; top:0; left:0; height:2px; background:#c8ff57; z-index:1000; transition:width .08s linear; }

//                 /* scrollbar */
//                 ::-webkit-scrollbar {width:4px; }
//                 ::-webkit-scrollbar-track {background:#0a0a0c; }
//                 ::-webkit-scrollbar-thumb {background:#2a2928; border-radius:2px; }

//                 /* card engine */
//                 .card-wrap {transform - origin: top center; will-change: transform, filter; }

//                 /* stroke text */
//                 .text-stroke {color:transparent; -webkit-text-stroke:1px rgba(237,233,227,.25); }

//                 @media(max-width:640px){
//                     body {cursor: auto; }
//                 .cursor, .cursor-ring {display: none; }
//   }
//             </style>
//         </head>
//         <body>

//             <script type="text/babel">
//                 const {useEffect, useRef, useState, useCallback} = React;


//                 {/* function ProgressBar() {
//   const barRef = useRef(null);
//   useEffect(() => {
//     const fn = () => {
//       const h = document.documentElement;
//                 const p = window.scrollY / (h.scrollHeight - h.clientHeight) * 100;
//                 if (barRef.current) barRef.current.style.width = p + '%';
//     };
//                 window.addEventListener('scroll', fn, {passive: true });
//     return () => window.removeEventListener('scroll', fn);
//   }, []);
//                 return <div ref={barRef} className="prog" />;
// } */}

//                 /* ═══════════════════════════════════════
//                    NAV
//                 ═══════════════════════════════════════ */
//                 {/* function Nav() {
//   return (
//                 <nav className="fixed top-0 left-0 right-0 z-[200] flex justify-between items-center px-8 py-5"
//                     style={{ background: 'linear-gradient(to bottom, #0a0a0c 0%, transparent 100%)' }}>
//                     <a href="#" className="font-display font-black text-lg tracking-tight text-ink">JD.</a>
//                     <ul className="hidden sm:flex gap-8 list-none m-0 p-0">
//                         {['Work', 'About', 'Writing', 'Contact'].map(link => (
//                             <li key={link}>
//                                 <a href="#"
//                                     className="text-[11px] text-muted tracking-widest uppercase hover:text-ink transition-colors duration-200">
//                                     {link}
//                                 </a>
//                             </li>
//                         ))}
//                     </ul>
//                 </nav>
//                 );
// } */}

//                 /* ═══════════════════════════════════════
//                    HERO
//                 ═══════════════════════════════════════ */
//                 function Hero() {
//   return (
//                 <section className="min-h-screen flex items-center justify-center px-6 pt-28 pb-20 relative overflow-hidden">
//                     {/* ambient glow */}
//                     <div className="absolute inset-0 pointer-events-none"
//                         style={{ background: 'radial-gradient(ellipse 65% 55% at 50% 50%, rgba(200,255,87,0.055) 0%, transparent 70%)' }} />
//                     {/* grain texture */}
//                     <div className="absolute inset-0 pointer-events-none opacity-30"
//                         style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")" }} />

//                     <div className="relative z-10 text-center max-w-4xl mx-auto animate-fadein">
//                         {/* badge */}
//                         <div className="inline-flex items-center gap-2 text-lime border border-lime/20 rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-widest uppercase mb-10">
//                             <span className="w-1.5 h-1.5 rounded-full bg-lime animate-blink" />
//                             Available for work
//                         </div>
//                         {/* headline */}
//                         <h1 className="font-display font-black leading-[.92] tracking-[-0.04em] mb-6"
//                             style={{ fontSize: 'clamp(52px, 9vw, 108px)' }}>
//                             Design &amp;<br />
//                             <span className="text-stroke">Engineering</span>
//                         </h1>
//                         <p className="text-muted font-light text-lg max-w-md mx-auto mb-12 leading-relaxed">
//                             I build products that feel as good as they look — from concept to code, with care for every detail.
//                         </p>
//                         {/* scroll hint */}
//                         <div className="flex items-center justify-center gap-2.5 text-ghost text-[11px] tracking-widest uppercase animate-bob">
//                             <ChevronDown />
//                             Scroll to explore
//                         </div>
//                     </div>
//                 </section>
//                 );
// }

//                 /* ═══════════════════════════════════════
//                    SECTION HEADER
//                 ═══════════════════════════════════════ */
//                 function SectionHeader() {
//   return (
//                 <div className="max-w-6xl mx-auto px-8 pt-20 pb-6 flex justify-between items-end">
//                     <h2 className="font-display font-bold tracking-[-0.03em] leading-tight text-ink"
//                         style={{ fontSize: 'clamp(26px, 3.5vw, 44px)' }}>
//                         Selected <span className="text-muted font-normal">projects</span><br />
//                         &amp; case studies
//                     </h2>
//                     <div className="font-display font-black text-ghost leading-none tracking-[-0.05em] select-none"
//                         style={{ fontSize: 'clamp(44px, 6vw, 80px)' }}>04</div>
//                 </div>
//                 );
// }

//                 /* ═══════════════════════════════════════
//                    PROJECT CARD COMPONENT
//                 ═══════════════════════════════════════ */
//                 const ProjectCard = React.forwardRef(({project, style}, ref) => {
//   return (
//                 <article
//                     ref={ref}
//                     className="card-wrap absolute left-0 right-0 overflow-hidden border"
//                     style={{
//                         background: '#1a1a1f',
//                         borderColor: 'rgba(255,255,255,0.07)',
//                         borderRadius: '20px',
//                         display: 'grid',
//                         gridTemplateColumns: 'minmax(0,5fr) minmax(0,6fr)',
//                         minHeight: '420px',
//                         transition: 'border-color .3s',
//                         ...style,
//                     }}
//                 >
//                     {/* ── IMAGE SIDE ── */}
//                     <div className="relative overflow-hidden" style={{ minHeight: '320px' }}>
//                         <img
//                             src={project.image}
//                             alt={project.title}
//                             className="w-full h-full object-cover"
//                             style={{
//                                 filter: 'brightness(0.72) saturate(0.82)',
//                                 transition: 'filter .5s ease, transform .6s ease',
//                             }}
//                             onMouseEnter={e => {
//                                 e.currentTarget.style.filter = 'brightness(0.88) saturate(1)';
//                                 e.currentTarget.style.transform = 'scale(1.04)';
//                             }}
//                             onMouseLeave={e => {
//                                 e.currentTarget.style.filter = 'brightness(0.72) saturate(0.82)';
//                                 e.currentTarget.style.transform = 'scale(1)';
//                             }}
//                             loading="lazy"
//                         />
//                         {/* gradient overlay */}
//                         <div className="absolute inset-0 pointer-events-none"
//                             style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.28) 0%, transparent 55%)' }} />
//                         {/* counter badge */}
//                         <span className="absolute top-4 left-4 font-display font-bold text-[10px] tracking-[.12em] uppercase
//                          text-white/60 backdrop-blur-sm rounded-full px-3 py-1.5"
//                             style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)' }}>
//                             {project.num} / 04
//                         </span>
//                         {/* year */}
//                         <span className="absolute bottom-4 left-4 text-[10px] tracking-wide"
//                             style={{ color: 'rgba(255,255,255,0.35)' }}>
//                             {project.year}
//                         </span>
//                         {/* accent stripe */}
//                         <div className="absolute bottom-0 left-0 right-0" style={{
//                             height: '3px',
//                             background: `linear-gradient(90deg, ${project.accent}, transparent)`
//                         }} />
//                     </div>

//                     {/* ── BODY SIDE ── */}
//                     <div className="flex flex-col justify-between p-9 gap-5">
//                         <div>
//                             {/* tags */}
//                             <div className="flex flex-wrap gap-1.5 mb-4">
//                                 {project.tags.map(tag => (
//                                     <span key={tag}
//                                         className="text-[9px] font-semibold tracking-[.08em] uppercase text-muted rounded-full px-2.5 py-1"
//                                         style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
//                                         {tag}
//                                     </span>
//                                 ))}
//                             </div>
//                             {/* title */}
//                             <h3 className="font-display font-bold tracking-[-0.03em] leading-[1.08] text-ink mb-3"
//                                 style={{ fontSize: 'clamp(20px, 2.2vw, 28px)', whiteSpace: 'pre-line' }}>
//                                 {project.title}
//                             </h3>
//                             {/* accent rule */}
//                             <div className="mb-4 opacity-40" style={{
//                                 height: '1px',
//                                 background: `linear-gradient(90deg, ${project.accent}, transparent)`
//                             }} />
//                             {/* description */}
//                             <p className="text-muted font-light text-sm leading-[1.78]">{project.desc}</p>
//                         </div>

//                         <div>
//                             {/* meta */}
//                             <p className="text-[10px] tracking-wide mb-3" style={{ color: '#2a2928' }}>{project.meta}</p>
//                             {/* CTA buttons */}
//                             <div className="flex gap-2.5 flex-wrap">
//                                 <a href="#" onClick={e => e.preventDefault()}
//                                     className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[9px] text-[12px] font-semibold
//                           transition-all duration-200 hover:opacity-90 hover:-translate-y-px"
//                                     style={{ background: project.accent, color: '#0a0a0c' }}>
//                                     <ArrowIcon /> Live demo
//                                 </a>
//                                 <a href="#" onClick={e => e.preventDefault()}
//                                     className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[9px] text-[12px] font-medium
//                           text-muted transition-all duration-200
//                           hover:text-ink hover:-translate-y-px"
//                                     style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.07)' }}
//                                     onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.16)'}
//                                     onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}>
//                                     <GithubIcon /> GitHub
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </article>
//                 );
// });

//                 /* ═══════════════════════════════════════
//                    SCROLL-STACK ENGINE
//                    ───────────────────────────────────────
//                    Architecture:
//                    • stack-outer  → tall scrollable div (height set by JS)
//                    • stack-stage  → sticky 100vh window, overflow:hidden
//                    • stack-scene  → relative wrapper, height = one card
//                    • cards        → absolute inside scene, animated via JS
                
//                    Behavior:
//                    • Card 0 starts at top:0 (visible at bottom of stage)
//                    • Cards 1–3 start at top = cardHeight (below viewport, hidden)
//                    • Each card slides up to its "rest" position (PEEK * index)
//                      as the user scrolls through its window (SCROLL_PER px each)
//                    • Buried cards scale down slightly and dim for depth
//                 ═══════════════════════════════════════ */
//                 const PEEK       = 54;   // px of each buried card peeking above the next
//                 const SCROLL_PER = 520;  // scroll px allocated per card reveal
//                 const SCALE_MAX  = 0.055;
//                 const DIM_MAX    = 0.28;

//                 function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

//                 function ScrollStack() {
//   const outerRef = useRef(null);
//                 const sceneRef = useRef(null);
//                 const cardRefs = useRef([]);
//                 const rafRef   = useRef(null);
//                 const N        = PROJECTS.length;

//                 // card inline styles driven by scroll
//                 const [styles, setStyles] = useState(
//     PROJECTS.map((_, i) => ({top: '0px', transform: 'scale(1)', filter: 'brightness(1)', zIndex: 10 + i * 10 }))
//                 );

//   const compute = useCallback(() => {
//     const outer = outerRef.current;
//                 const scene = sceneRef.current;
//                 const card0 = cardRefs.current[0];
//                 if (!outer || !scene || !card0) return;

//                 const cardH    = card0.offsetHeight;
//                 const outerTop = outer.getBoundingClientRect().top + window.scrollY;
//                 const scrolled = Math.max(0, window.scrollY - outerTop);

//                 // Set outer height once (safe to call every render; value is idempotent)
//                 outer.style.height = (window.innerHeight + (N - 1) * SCROLL_PER) + 'px';
//                 scene.style.height = cardH + 'px';

//     const next = PROJECTS.map((_, i) => {
//                     /* ── position ── */
//                     let topPx;
//                 if (i === 0) {
//                     topPx = 0; // card 0 always resting
//       } else {
//         const winStart = (i - 1) * SCROLL_PER;
//                 const winEnd   = i * SCROLL_PER;
//                 const prog     = Math.min(1, Math.max(0, (scrolled - winStart) / (winEnd - winStart)));
//                 const restTop  = PEEK * i;          // final resting y
//                 const startTop = cardH;             // starts fully below
//                 topPx = startTop - (startTop - restTop) * easeOutCubic(prog);
//       }

//                 /* ── depth (scale + dim for buried cards) ── */
//                 let scale = 1, bright = 1;
//       const arrivedAbove = PROJECTS.slice(i + 1).filter((_, j) => {
//         const li = i + 1 + j;
//         return Math.min(1, Math.max(0, (scrolled - (li-1)*SCROLL_PER) / SCROLL_PER)) > 0;
//       }).length;

//       if (arrivedAbove > 0) {
//         const topLi   = i + arrivedAbove;
//                 const topProg = Math.min(1, Math.max(0, (scrolled - (topLi-1)*SCROLL_PER) / SCROLL_PER));
//                 const depth   = (arrivedAbove - 1 + topProg) / (N - 1);
//                 scale  = 1 - depth * SCALE_MAX;
//                 bright = 1 - depth * DIM_MAX;
//       }

//                 return {
//                     top:       topPx.toFixed(2) + 'px',
//                 transform: `scale(${scale.toFixed(4)})`,
//                 filter:    `brightness(${bright.toFixed(4)})`,
//                 zIndex:    10 + i * 10,
//       };
//     });

//                 setStyles(next);
//   }, [N]);

//   const onScroll = useCallback(() => {
//     if (rafRef.current) cancelAnimationFrame(rafRef.current);
//                 rafRef.current = requestAnimationFrame(compute);
//   }, [compute]);

//   useEffect(() => {
//                     compute();
//                 window.addEventListener('scroll', onScroll, {passive: true });
//                 window.addEventListener('resize', compute);
//     return () => {
//                     window.removeEventListener('scroll', onScroll);
//                 window.removeEventListener('resize', compute);
//                 if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, [compute, onScroll]);

//                 return (
//                 /* outer: tall scrollable wrapper */
//                 <div ref={outerRef} className="relative max-w-6xl mx-auto px-8">

//                     {/* stage: sticky 100vh viewport */}
//                     <div className="sticky top-0 flex items-end overflow-hidden" style={{ height: '100vh' }}>

//                         {/* scene: clips overflow; one card tall */}
//                         <div ref={sceneRef} className="relative w-full">
//                             {PROJECTS.map((project, i) => (
//                                 <ProjectCard
//                                     key={project.id}
//                                     project={project}
//                                     ref={el => cardRefs.current[i] = el}
//                                     style={styles[i]}
//                                 />
//                             ))}
//                         </div>

//                     </div>
//                 </div>
//                 );
// }

//                 /* ═══════════════════════════════════════
//                    FOOTER CTA
//                 ═══════════════════════════════════════ */
//                 function FooterCTA() {
//   return (
//                 <div className="max-w-6xl mx-auto px-8 py-32 flex flex-col items-center text-center gap-6"
//                     style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
//                     <h3 className="font-display font-bold tracking-tight leading-tight"
//                         style={{ fontSize: 'clamp(30px, 4.5vw, 56px)' }}>
//                         Let's build<br />something together
//                     </h3>
//                     <p className="text-muted font-light text-base max-w-sm leading-relaxed">
//                         Have a project in mind? I'd love to hear about it and see how we can collaborate.
//                     </p>
//                     <a href="mailto:hello@example.com"
//                         className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm
//                     bg-lime text-canvas transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5">
//                         Get in touch <ArrowIcon />
//                     </a>
//                 </div>
//                 );
// }

//                 /* ═══════════════════════════════════════
//                    APP ROOT
//                 ═══════════════════════════════════════ */
//                 function App() {
//   return (
//                 <>
//                     <Cursor />
//                     <ProgressBar />
//                     <Nav />
//                     <Hero />
//                     <SectionHeader />
//                     <ScrollStack />
//                     <FooterCTA />
//                 </>
//                 );
// }

//                 ReactDOM.createRoot(document.getElementById('root')).render(<App />);
//             </script>
//         </body>
//     </html>












import React, { useCallback, useEffect, useRef, useState } from "react";
import SectionTitle from "./SectionTitle";

const PROJECTS = [
  {
    id: 0,
    num: "01",
    year: "2024",
    title: "Pulse — Health\n& Habit Tracker",
    desc: "A cross-platform mobile app helping users build meaningful habits through adaptive streaks, smart reminders, and detailed progress analytics.",
    tags: ["React Native", "TypeScript", "Firebase", "Mobile"],
    meta: "12k users · 4.8 App Store · iOS & Android",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&q=80",
    accent: "#c8ff57",
  },
  {
    id: 1,
    num: "02",
    year: "2024",
    title: "Orbit — Analytics\nDashboard",
    desc: "Real-time SaaS analytics for e-commerce teams with funnel visualisation and cohort analysis.",
    tags: ["Next.js", "D3.js", "PostgreSQL", "SaaS"],
    meta: "SaaS · $40k ARR · B2B",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
    accent: "#ff6b6b",
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
    accent: "#6baaff",
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
    accent: "#ffb86b",
  },
];

const PEEK = 55;
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
              <button
                style={{ background: project.accent }}
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-black transition hover:-translate-y-0.5"
              >
                <ArrowIcon />
                Live Demo
              </button>

              <button className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm text-zinc-300 transition hover:-translate-y-0.5 hover:border-white/20">
                <GithubIcon />
                Github
              </button>
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