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
  return (
    <div
      className="relative px-8 py-12 overflow-hidden max-w-6xl mx-auto"
      style={{ minHeight: CONTENT_HEIGHT }}
    >
      <SkyClouds />
      <River height={CONTENT_HEIGHT} />
      <GrassScenery count={animations.length} spacing={CARD_SPACING} />
      <SteppingStones count={animations.length} spacing={CARD_SPACING} />
      <TreeScenery count={animations.length} spacing={CARD_SPACING} />
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
