import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function MagneticButton() {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.5);
    y.set(relY * 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      className="w-72 h-72 flex items-center justify-center"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <motion.button
        ref={ref}
        style={{ x: springX, y: springY }}
        className="bg-cc-pink hover:bg-cc-pink-hover text-white font-body font-semibold px-6 py-3 rounded-full"
      >
        Hover near me
      </motion.button>
    </div>
  );
}

export default MagneticButton;
