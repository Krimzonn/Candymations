function GrassBlade({ height, rotate, color }) {
  return (
    <svg
      width="14"
      height={height}
      viewBox={`0 0 14 ${height}`}
      style={{
        transform: `rotate(${rotate}deg)`,
        transformOrigin: "bottom center",
      }}
    >
      <path
        d={`M 7 ${height} Q ${rotate > 0 ? 2 : 12} ${height * 0.4} 7 0`}
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function GrassCluster({ top, left, seed }) {
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };

  const colors = ["#A8D9A0", "#93C98C", "#B5E0AE"];
  const blades = Array.from({ length: 4 + Math.floor(rand() * 3) }, () => ({
    height: 24 + rand() * 18,
    rotate: rand() * 30 - 15,
    color: colors[Math.floor(rand() * colors.length)],
  }));

  return (
    <div
      className="absolute flex items-end gap-[-2px]"
      style={{ top, left: `${left}%` }}
    >
      {blades.map((blade, i) => (
        <div key={i} style={{ margin: i === 0 ? 0 : -4 }}>
          <GrassBlade {...blade} />
        </div>
      ))}
    </div>
  );
}

function GrassScenery({ count, spacing }) {
  const totalHeight = count * spacing;
  let seed = 17;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  const clusterCount = Math.floor(totalHeight / 180);
  const clusters = Array.from({ length: clusterCount }, (_, i) => {
    const onLeft = rand() > 0.5;
    return {
      top: 40 + rand() * (totalHeight - 80),
      left: onLeft ? rand() * 6 : 94 + rand() * 6,
      seed: Math.floor(rand() * 10000),
    };
  });

  return (
    <div className="absolute inset-0 pointer-events-none hidden md:block">
      {clusters.map((cluster, i) => (
        <GrassCluster key={i} {...cluster} />
      ))}
    </div>
  );
}

export default GrassScenery;
