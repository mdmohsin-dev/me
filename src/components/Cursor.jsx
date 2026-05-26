import { useEffect, useRef } from "react";

const Cursor = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);

    useEffect(() => {
        let mouseX = 0;
        let mouseY = 0;

        let ringX = 0;
        let ringY = 0;

        const moveCursor = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            if (dotRef.current) {
                dotRef.current.style.left = `${mouseX}px`;
                dotRef.current.style.top = `${mouseY}px`;
            }

            const target = e.target;

            const isHovering =
                target.closest("button") ||
                target.closest("a") ||
                target.closest("[role='button']");

            if (ringRef.current) {
                if (isHovering) {
                    ringRef.current.classList.add("scale-[2]");
                    ringRef.current.classList.add("border-lime-300");
                } else {
                    ringRef.current.classList.remove("scale-[2]");
                    ringRef.current.classList.remove("border-lime-300");
                }
            }
        };

        document.addEventListener("mousemove", moveCursor);

        const animate = () => {
            ringX += (mouseX - ringX) * 0.12;
            ringY += (mouseY - ringY) * 0.12;

            if (ringRef.current) {
                ringRef.current.style.left = `${ringX}px`;
                ringRef.current.style.top = `${ringY}px`;
            }

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            document.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return (
        <>
            {/* Dot */}
            <div
                ref={dotRef}
                className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9999]
          h-[10px]
          w-[10px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-lime-300
          transition-all
          duration-75
        "
            />

            {/* Ring */}
            <div
                ref={ringRef}
                className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9998]
          h-9
          w-9
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-lime-300/40
          transition-all
          duration-75
        "
            />
        </>
    );
};

export default Cursor;