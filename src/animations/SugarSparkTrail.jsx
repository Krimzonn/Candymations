import { useState, useRef } from "react";

function SugarSparkTrail() {
  const [sparkles, setSparkles] = useState([]);
  const idRef = useRef(0);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = idRef.current++;

    setSparkles((prev) => [...prev, { id, x, y }]);
    setTimeout(() => {
      setSparkles((prev) => prev.filter((s) => s.id !== id));
    }, 600);
  };

  return (
    <div
      className="relative w-full h-40 rounded-2xl bg-cc-lilac/10 overflow-hidden"
      onMouseMove={handleMove}
    >
      <p className="absolute inset-0 flex items-center justify-center font-body text-cc-muted text-sm">
        Move your cursor here
      </p>
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute sparkle-fade"
          style={{ left: s.x, top: s.y }}
        >
          ✦
        </div>
      ))}
    </div>
  );
}

export default SugarSparkTrail;
