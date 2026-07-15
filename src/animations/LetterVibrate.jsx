const VIBRATE_COLORS = ["#FF8FC7", "#8FC7FF", "#D4B3FF", "#FFB84A", "#5FD4C7"];

function LetterVibrate() {
  const text = "Cotton Candy";

  return (
    <div className="font-heading text-5xl font-bold flex">
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="letter-vibrate inline-block text-cc-text"
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
