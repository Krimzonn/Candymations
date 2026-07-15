import { useRef } from "react";
import { useScroll, useTransform, useSpring, motion } from "framer-motion";
import { animations } from "../data/animations";
import River from "../components/library/River";
import PathCard from "../components/library/PathCard";
import TreeScenery from "../components/library/TreeScenery";
import SteppingStones from "../components/library/SteppingStones";
import GrassScenery from "../components/library/GrassScenery";
import SkyClouds from "../components/library/SkyClouds";
import Fireflies from "../components/library/Fireflies";
import BirdMascot from "../components/library/BirdMascot";

const CARD_SPACING = 260;
const CONTENT_HEIGHT = animations.length * CARD_SPACING + 200;

function Library() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const treeY = useTransform(
    smoothProgress,
    [0, 1],
    [0, -CONTENT_HEIGHT * 0.08],
  );
  const cloudY = useTransform(
    smoothProgress,
    [0, 1],
    [0, -CONTENT_HEIGHT * 0.03],
  );

  const skyColor = useTransform(
    smoothProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["#FAF5FF", "#E8D9F5", "#FBE8D9", "#D9A9C4", "#2E2A4A"],
  );

  const cloudOpacity = useTransform(
    smoothProgress,
    [0, 0.6, 1],
    [1, 0.6, 0.15],
  );

  const fireflyOpacity = useTransform(
    smoothProgress,
    [0, 0.4, 1],
    [0.2, 0.6, 1],
  );

  return (
    <motion.div
      ref={containerRef}
      className="relative py-12 overflow-hidden max-w-8xl mx-auto"
      style={{ minHeight: CONTENT_HEIGHT, backgroundColor: skyColor }}
    >
      <motion.div style={{ y: cloudY, opacity: cloudOpacity }}>
        <SkyClouds />
      </motion.div>
      <River height={CONTENT_HEIGHT} />
      <GrassScenery count={animations.length} spacing={CARD_SPACING} />
      <SteppingStones count={animations.length} spacing={CARD_SPACING} />

      <motion.div style={{ y: treeY }}>
        <TreeScenery count={animations.length} spacing={CARD_SPACING} />
      </motion.div>

      <BirdMascot />

      <motion.div style={{ opacity: fireflyOpacity }}>
        <Fireflies count={animations.length + 5} spacing={CARD_SPACING} />
      </motion.div>

      <div className="relative max-w-2xl mx-auto">
        {animations.map((anim, i) => (
          <div
            key={anim.slug}
            className={`flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
            style={{ marginBottom: CARD_SPACING - 150 }}
          >
            <PathCard {...anim} />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Library;
