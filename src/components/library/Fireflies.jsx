function Firefly({ top, left, size, delay, duration, driftX, driftY }) {
  return (
    <div
      className="absolute rounded-full firefly-glow"
      style={{
        top,
        left: `${left}%`,
        width: size,
        height: size,
        backgroundColor: "#FFD873",
        boxShadow: "0 0 8px 2px rgba(255, 216, 115, 0.8)",
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        "--drift-x": `${driftX}px`,
        "--drift-y": `${driftY}px`,
      }}
    ></div>
  );
}

function Fireflies({ count, spacing }) {
  const totalHeight = count * spacing;
  let seed = 91;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  const fireflyCount = Math.floor(totalHeight / 150);
  const flies = Array.from({ length: fireflyCount }, () => ({
    top: 40 + rand() * (totalHeight - 80),
    left: 10 + rand() * 80,
    size: 5 + rand() * 4,
    delay: rand() * 4,
    duration: 5 + rand() * 3,
    driftX: 20 + rand() * 40 * (rand() > 0.5 ? 1 : -1),
    driftY: 15 + rand() * 30 * (rand() > 0.5 ? 1 : -1),
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      {flies.map((fly, i) => (
        <Firefly key={i} {...fly} />
      ))}
    </div>
  );
}

export default Fireflies;
