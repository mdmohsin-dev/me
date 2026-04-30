import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mongodbIcon from "../assets/skills-icon/mongodb.png"
import reactIcon from "../assets/skills-icon/react.png"
import expressIcon from "../assets/skills-icon/express-js.jpg"

const items = [
  { text: "MERN Stack Developer", icon: mongodbIcon },
  { text: "Full Stack Developer", icon: expressIcon },
  { text: "Frontend Developer", icon: reactIcon },
];

const TYPING_SPEED = 80;
const DELETE_SPEED = 40;
const PAUSE_AFTER = 1400;
const PAUSE_ICON = 600;

function PenCursor() {
  return (
    <AnimatePresence>
      <motion.svg
        key="pen"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#BA00F5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="28"
        style={{ display: "inline-block", verticalAlign: "middle", }}
        initial={{ opacity: 0, rotate: 0, scale: 0.6 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        exit={{ opacity: 0, rotate: 0, scale: 0.6 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
        <path d="m15 5 4 4" />
      </motion.svg>
    </AnimatePresence>
  );
}

export default function AnimationTitle() {
  const [displayText, setDisplayText] = useState("");
  const [penVisible, setPenVisible] = useState(false);
  const [iconVisible, setIconVisible] = useState(false);
  const [currentIcon, setCurrentIcon] = useState("");

  const idx = useRef(0);
  const charIdx = useRef(0);
  const deleting = useRef(false);
  const iconShown = useRef(false);
  const timer = useRef(null);

  useEffect(() => {
    function tick() {
      const current = items[idx.current];

      // ── FORWARD TYPING ──
      if (!deleting.current && !iconShown.current) {
        if (charIdx.current < current.text.length) {
          setPenVisible(true);
          charIdx.current++;
          setDisplayText(current.text.slice(0, charIdx.current));
          timer.current = setTimeout(tick, TYPING_SPEED);
        } else {
          setPenVisible(false);
          setCurrentIcon(current.icon);
          setIconVisible(true);
          iconShown.current = true;
          timer.current = setTimeout(tick, PAUSE_AFTER);
        }
        return;
      }

      // ── START DELETE ──
      if (iconShown.current && !deleting.current) {
        setIconVisible(false);
        deleting.current = true;
        setPenVisible(false);
        timer.current = setTimeout(tick, PAUSE_ICON);
        return;
      }

      // ── REVERSE TYPING (DELETE) ──
      if (deleting.current) {
        if (charIdx.current > 0) {
          setPenVisible(false);
          charIdx.current--;
          setDisplayText(current.text.slice(0, charIdx.current));
          timer.current = setTimeout(tick, DELETE_SPEED);
        } else {
          setPenVisible(false);
          deleting.current = false;
          iconShown.current = false;
          idx.current = (idx.current + 1) % items.length;
          timer.current = setTimeout(tick, 300);
        }
      }
    }

    timer.current = setTimeout(tick, 500);
    return () => clearTimeout(timer.current);
  }, []);

  return (
    <div>
      <div className="flex items-center gap-3 pt-7 pb-2">
        <motion.span
          className="text-4xl font-medium text-white whitespace-nowrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >a
        </motion.span>

        <motion.span
          className="flex items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-3xl font-semibold text-violet-400 whitespace-nowrap">
            {displayText}
          </span>

          <AnimatePresence mode="wait">
            {penVisible && <PenCursor key="pen-cursor" />}
          </AnimatePresence>
        </motion.span>

        <AnimatePresence mode="wait">
          {iconVisible && (
            <motion.span
              key={currentIcon}
              className="inline-flex items-center justify-center text-2xl rounded-lg bg-[#1e1e1e] border border-[#333]"
              initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.4, rotate: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img src={currentIcon} alt="" className="w-9 h-9 rounded-lg" />
            </motion.span>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}