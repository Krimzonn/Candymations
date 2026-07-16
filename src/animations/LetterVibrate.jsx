import { useState, useRef } from "react";

const VIBRATE_COLORS = ["#FF8FC7", "#8FC7FF", "#D4B3FF", "#FFB84A", "#5FD4C7"];

function LetterVibrate() {
  const text = "Cotton Candy";
  const [activeIndices, setActiveIndices] = useState(new Set());
  const timers = useRef({});

  const handleEnter = (i) => {
    if (timers.current[i]) {
      clearTimeout(timers.current[i]);
    }

    setActiveIndices((prev) => new Set(prev).add(i));
  };

  const handleLeave = (i) => {
    timers.current[i] = setTimeout(() => {
      setActiveIndices((prev) => {
        const next = new Set(prev);
        next.delete(i);
        return next;
      });
    }, 1000);
  };

  return (
    <div className="font-heading text-6xl font-bold flex">
      {text.split("").map((char, i) => (
        <span
          key={i}
          onMouseEnter={() => handleEnter(i)}
          onMouseLeave={() => handleLeave(i)}
          className={`letter-vibrate inline-block text-cc-text ${activeIndices.has(i) ? "letter-active" : ""}`}
          style={{
            "--vibrate-color": VIBRATE_COLORS[i % VIBRATE_COLORS.length],
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}

export default LetterVibrate;
