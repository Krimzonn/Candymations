import { useState } from "react";

function BubblePop() {
  const [popped, setPopped] = useState(false);
  const particles = Array.from({ length: 10 }, (_, i) => i);

  return (
    <div
      className="relative w-34 h-34 flex items-center justify-center cursor-pointer"
      onClick={() => setPopped(true)}
    >
      {!popped && (
        <div className="w-25 h-25 bg-cc-pink/80 rounded-full bubble-pop-anim"></div>
      )}
      {popped &&
        particles.map((i) => (
          <div
            key={i}
            className="absolute w-3 h-2.5 bg-cc-pink rounded-full bubble-particle"
            style={{ "--angle": `${(360 / particles.length) * i}deg` }}
          ></div>
        ))}
    </div>
  );
}

export default BubblePop;
