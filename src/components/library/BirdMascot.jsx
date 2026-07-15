import { useSpring, motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

function BirdMascot({ progress, totalHeight }) {
  const mouseX = useMotionValue(window.innerWidth / 2);
  const mouseY = useMotionValue(window.innerHeight * 0.25);

  const x = useSpring(mouseX, { stiffness: 40, damping: 12 });
  const y = useSpring(mouseY, { stiffness: 40, damping: 12 });

  useEffect(() => {
    const handleMove = (e) => {
      mouseX.set(e.clientX + 30);
      mouseY.set(e.clientY - 40);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed  pointer-events-none z-20"
      style={{ left: x, top: y, translateX: "-50%", translateY: "-50%" }}
    >
      <svg width="90" height="80" viewBox="0 0 90 80">
        <circle cx="40" cy="32" r="21" fill="#B8E8F0" />
        <circle cx="28" cy="18" r="13" fill="#B8E8F0" />
        <path d="M 15 13 L 3 18 L 15 23 Z" fill="#5FD4C7" />
        <circle cx="30" cy="17" r="4" fill="#1A1A2E" />

        <path
          d="M 32 18 L 64 20 L 50 46 Z"
          fill="#B8E8F0"
          className="wing-top"
          style={{ transformOrigin: "6px -6px" }}
        />
        <path
          d="M 40 42 L 66 48 L 60 20 Z"
          fill="#B8E8F0"
          className="wing-bottom"
          style={{ transformOrigin: "34px 28px" }}
        />
      </svg>
    </motion.div>
  );
}

export default BirdMascot;
