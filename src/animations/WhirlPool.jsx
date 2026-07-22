function WhirlPool() {
  const rings = [
    { size: 150, color: "#FF8FC7", duration: "3.2s", offset: 0 },
    { size: 130, color: "#8FC7FF", duration: "2.8s", offset: 45 },
    { size: 110, color: "#D4B3FF", duration: "2.4s", offset: 90 },
    { size: 90, color: "#FFD873", duration: "2s", offset: 135 },
    { size: 70, color: "#5FD4C7", duration: "1.7s", offset: 180 },
    { size: 50, color: "#FF8FC7", duration: "1.4s", offset: 225 },
    { size: 32, color: "#8FC7FF", duration: "1.1s", offset: 270 },
  ];

  return (
    <div className="relative w-40 h-40 flex items-center justify-center">
      {rings.map((ring, i) => (
        <svg
          key={i}
          className="absolute whirlpool-ring"
          width={ring.size}
          height={ring.size}
          viewBox="0 0 100 100 "
          style={{
            animationDuration: ring.duration,
            transform: `rotate(${ring.offset}deg)`,
          }}
        >
          <path
            d="M 50 10 A 40 40 0 1 1 10 50"
            fill="none"
            stroke={ring.color}
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
      ))}
    </div>
  );
}

export default WhirlPool;
