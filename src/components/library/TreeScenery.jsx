function Tree({ top, side, color = "#8F8F8F", size = 70 }) {
  return (
    <div
      className={`absolute flex flex-col items-center ${side === "left" ? "left-4 md:left-10" : "right-4 md:right-10"}`}
      style={{ top }}
    >
      <div
        className="rounded-full"
        style={{ width: size, height: size, backgroundColor: color }}
      />
      <div
        className="bg-[#A8876B] rounded-b-sm"
        style={{ width: size * 0.18, height: size * 0.5 }}
      />
    </div>
  );
}

function TreeScenery({ count, spacing }) {
  const colors = ["#B3D9A8", "#8FBF8F", "#A8D9C7"];
  const trees = Array.from({ length: Math.ceil(count / 2) }, (_, i) => ({
    top: 60 + i * spacing * 2,
    side: i % 2 === 0 ? "right" : "left",
    color: colors[i % colors.length],
    size: 55 + (i % 3) * 10,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none hidden md:block">
      {trees.map((tree, i) => (
        <Tree key={i} {...tree} />
      ))}
    </div>
  );
}

export default TreeScenery;
