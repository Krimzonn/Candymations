import { useMemo } from "react";

const SENTENCE = "HELLO";
const CONTAINER_WIDTH = 280;
const LETTER_SPACING = 32;
const RANDOM_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const RAIN_START_OFFSET = 3;

function LetterRain() {
  const sentenceStartX =
    (CONTAINER_WIDTH - SENTENCE.length * LETTER_SPACING) / 2;

  const fallingLetters = useMemo(() => {
    const drops = [];

    SENTENCE.split("").forEach((char, i) => {
      drops.push({
        id: `word-${i}`,
        char,
        x: sentenceStartX + i * LETTER_SPACING + 6,
        delay: RAIN_START_OFFSET + i * 0.15,
        isWord: true,
      });
    });

    for (let i = 0; i < 18; i++) {
      drops.push({
        id: `rand-${i}`,
        char: RANDOM_LETTERS[Math.floor(Math.random() * RANDOM_LETTERS.length)],
        x: Math.random() * CONTAINER_WIDTH,
        delay: Math.random() * 3,
        duration: 2 + Math.random() * 1.5,
        isWord: false,
      });
    }

    return drops;
  }, []);

  return (
    <div
      className="relative h-56 rounded-2xl bg-cc-text overflow-hidden"
      style={{ width: CONTAINER_WIDTH }}
    >
      {fallingLetters.map((letter) =>
        letter.isWord ? (
          <span
            key={letter.id}
            className="absolute top-1/2 font-heading font-bold text-2xl text-cc-pink letter-fall-to-word"
            style={{ left: letter.x, animationDelay: `${letter.delay}s` }}
          >
            {letter.char}
          </span>
        ) : (
          <span
            key={letter.id}
            className="absolute top-0 font-body text-sm text-white/30 letter-fall"
            style={{
              left: letter.x,
              animationDelay: `${letter.delay}s`,
              animationDuration: `${letter.duration}s`,
            }}
          >
            {letter.char}
          </span>
        ),
      )}
    </div>
  );
}

export default LetterRain;
