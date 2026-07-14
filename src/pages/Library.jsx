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

  return (
    <div
      ref={containerRef}
      className="relative px-8 py-12 overflow-hidden max-w-6xl mx-auto"
      style={{ minHeight: CONTENT_HEIGHT }}
    >
      <motion.div style={{ y: cloudY }}>
        <SkyClouds />
      </motion.div>
      <River height={CONTENT_HEIGHT} />
      <GrassScenery count={animations.length} spacing={CARD_SPACING} />
      <SteppingStones count={animations.length} spacing={CARD_SPACING} />

      <motion.div style={{ y: treeY }}>
        <TreeScenery count={animations.length} spacing={CARD_SPACING} />
      </motion.div>

      <Fireflies count={animations.length + 5} spacing={CARD_SPACING} />

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
    </div>
  );
}

export default Library;
