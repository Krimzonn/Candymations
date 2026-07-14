import { getRiverX } from "../../utils/riverPath";

const RADIUS_VARIANTS = [
  "60% 40% 55% 45% / 50% 60% 40% 50%",
  "45% 55% 40% 60% / 55% 45% 60% 40%",
  "55% 45% 60% 40% / 40% 55% 45% 60%",
  "50% 50% 40% 60% / 60% 40% 55% 45%",
];

const STONE_COLORS = ["#B0ACB8", "#A6A1AE", "#BDB9C4"];

function SteppingStones({ count, spacing }) {
  const totalHeight = count * spacing;
  const stones = [];
  let y = 60;

  let seed = 42;
  const rand = () => {
    seed = (seed * 9301 + 49279) % 233280;
    return seed / 233280;
  };

  while (y < totalHeight) {
    const x = getRiverX(y, totalHeight);
    const xPercent = (x / 640) * 100;
    const clusterSize = 1 + Math.floor(rand() * 2);

    const clusterSide = rand() > 0.5 ? 1 : -1;
    const clusterOffset = clusterSide * (10 + rand() * 5);

    for (let c = 0; c < clusterSize; c++) {
      const withinCluster = clusterSide * c * 2.2;

      stones.push({
        top: y + rand() * 12 - 6 + c * 10,
        left: xPercent + clusterOffset + withinCluster,
        width: 22 + rand() * 16,
        height: 12 + rand() * 8,
        rotate: rand() * 40 - 20,
        radiusVariant:
          RADIUS_VARIANTS[Math.floor(rand() * RADIUS_VARIANTS.length)],
        color: STONE_COLORS[Math.floor(rand() * STONE_COLORS.length)],
      });
    }

    y += 20 + rand() * 25;
  }

  return (
    <div className="absolute inset-0 pointer-events-none">
      {stones.map((stone, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: stone.top,
            left: `${stone.left}%`,
            width: stone.width,
            height: stone.height,
            transform: `translateX(-50%) rotate(${stone.rotate}deg)`,
            borderRadius: stone.radiusVariant,
            backgroundColor: stone.color,
            boxShadow:
              "inset 0 -3px 4px rgba(58,52,80,0.15), 0 2px 4px rgba(58,52,80,0.12)",
          }}
        />
      ))}
    </div>
  );
}

export default SteppingStones;
