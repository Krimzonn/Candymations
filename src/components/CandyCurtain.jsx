import { motion } from "framer-motion";

const COLORS = [
  "#FF8FC7",
  "#D4B3FF",
  "#8FC7FF",
  "#FFD873",
  "#D4B3FF",
  "#FF8FC7",
];
const MID = (COLORS.length - 1) / 2;

function CandyCurtain({ phase }) {
  return (
    <div className="fixed inset-0 z-50 flex pointer-events-none">
      {COLORS.map((color, i) => {
        const dist = Math.abs(i - MID);
        const delayIn = dist * 0.09;
        const delayOut = (MID - dist) * 0.09;

        return (
          <div key={i} className="relative flex-1 overflow-visible">
            <motion.div
              className="w-full h-full"
              style={{
                backgroundColor: color,
                transformOrigin: phase === "in" ? "top" : "bottom",
              }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: phase === "in" ? 1 : 0 }}
              transition={{
                duration: phase === "in" ? 0.5 : 0.45,
                delay: phase === "in" ? delayIn : delayOut,
                ease: phase === "in" ? [0.34, 1.2, 0.64, 1] : "easeIn",
              }}
            >
              <motion.div
                className="absolute left-1/2 bottom-0 rounded-full"
                style={{
                  width: 22,
                  height: 22,
                  backgroundColor: color,
                  translateX: "-50%",
                  translateY: "50%",
                }}
                initial={{ scale: 0 }}
                animate={{ scaleY: phase === "in" ? 1 : 0 }}
                transition={{
                  duration: phase === "in" ? 0.3 : 0.25,
                  delay: phase === "in" ? delayIn + 0.35 : delayOut,
                  ease: phase === "in" ? [0.34, 1.6, 0.64, 1] : "easeIn",
                }}
              ></motion.div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

export default CandyCurtain;
