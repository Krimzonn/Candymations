function Cloud({ top, left, size, opacity }) {
  return (
    <div
      className="absolute rounded-full"
      style={{
        top,
        left: `${left}%`,
        width: size,
        height: size * 0.5,
        opacity,
        backgroundColor: "#D9C9FA",
        filter: "blur(5px)",
      }}
    ></div>
  );
}

function SkyClouds() {
  const clouds = [
    { top: 15, left: 2, size: 140, opacity: 0.9 },
    { top: 65, left: 70, size: 180, opacity: 0.85 },
    { top: 35, left: 50, size: 130, opacity: 0.8 },
    { top: 120, left: 8, size: 110, opacity: 0.8 },
    { top: 30, left: 88, size: 100, opacity: 0.85 },
  ];

  return (
    <div className="absolute top-0 left-0 w-full h-[500px] pointer-events-none overflow-hidden">
      {clouds.map((cloud, i) => (
        <Cloud key={i} {...cloud} />
      ))}
    </div>
  );
}

export default SkyClouds;
