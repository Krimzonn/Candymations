import { useState } from "react";

const COLORS = ["#FF8FC7", "#8FC7FF", "#D4B3FF", "#FFD873", "#5FD4C7"];

function ConfettiBurst() {
  const [burstId, setBurstId] = useState(0);
  const [pieces, setPieces] = useState([]);

  const handleClick = () => {
    const newPieces = Array.from({ length: 40 }, (_, i) => ({
      id: `${burstId}-${i}`,
      angle: Math.random() * 360,
      distance: 60 + Math.random() * 60,
      size: 5 + Math.random() * 5,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rotate: Math.random() * 720 - 360,
      delay: Math.random() * 0.1,
    }));

    setPieces(newPieces);
    setBurstId((id) => id + 1);
  };

  return (
    <div className="relative flex items-center justify-center w-48 h-48">
      <button
        onClick={handleClick}
        className="relative z-10 bg-cc-pink hover:bg-cc-pink-hover text-white font-body font-semibold px-6 py-3 rounded-full transition-colors"
      >
        Celebrate
      </button>
      {pieces.map((p) => (
        <div
          key={p.id}
          className="absolute confetti-piece"
          style={{
            width: p.size,
            height: p.size * 0.4,
            backgroundColor: p.color,
            "--angle": `${p.angle}deg`,
            "--distance": `${p.distance}px`,
            "--rotate": `${p.rotate}deg`,
            animationDelay: `${p.delay}s`,
          }}
        ></div>
      ))}
    </div>
  );
}

export default ConfettiBurst;
