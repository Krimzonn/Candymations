function LiquidFill() {
  return (
    <div className="relative w-32 h-40 rounded-3xl border-4 border-cc-lilac overflow-hidden bg-white">
      <div className="absolute inset-0 liquid-fill-anim">
        <svg
          viewBox="0 0 200 40"
          className="absolute top-0 left-0 w-[200%] h-10 liquid-wave-back"
          preserveAspectRatio="none"
        >
          <path
            d="M0 22 Q 25 8, 50 22 T 100 22 T 150 22 T 200 22 V40 H0 Z"
            fill="#B3DBFF"
          />
        </svg>
        <svg
          viewBox="0 0 200 40"
          className="absolute top-0 left-0 w-[200%] h-10 liquid-wave-front"
          preserveAspectRatio="none"
        >
          <path
            d="M0 20 Q 25 5, 50 20 T 100 20 T 150 20 T 200 20 V40 H0 Z"
            fill="#8FC7FF"
          />
        </svg>

        <div className="absolute inset-x-0 bottom-0 top-6 bg-cc-blue" />
      </div>
      <p className="absolute inset-0 flex items-center justify-center font-heading text-cc-text font-bold text-lg z-10">
        72%
      </p>
    </div>
  );
}

export default LiquidFill;
