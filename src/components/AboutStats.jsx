import { animations } from "../data/animations";

function AboutStats() {
  const total = animations.length;
  const signatureCount = animations.filter(
    (a) => a.difficulty === "signature",
  ).length;

  return (
    <div className="px-8 py-14 max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="font-heading text-cc-text text-2xl font-bold mb-3">
          Why does this exist?
        </h2>
        <p className="font-body text-cc-muted text-sm leading-relaxed">
          Candymations is a small showcase of hand-written CSS and Tailwind
          animations, built as a way to sharpen my animation skills one effect
          at a time. Every piece here is written from scratch, from simple
          entrance effects to more elaborate signature pieces; meant to be both
          a reference and a little bit of fun to click through.{" "}
          <span className="text-cc-pink font-bold text-base">Enjoy!</span>
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-4 text-center shadow-md shadow-cc-blue/10">
          <p className="font-heading text-cc-pink text-2xl font-bold">
            {total}+
          </p>
          <p className="font-body text-xs text-cc-muted mt-1">Animations</p>
        </div>
        <div className="bg-white rounded-2xl p-4 text-center shadow-md shadow-cc-lilac/10">
          <p className="font-heading text-cc-pink text-2xl font-bold">
            {signatureCount}
          </p>
          <p className="font-body text-xs text-cc-muted mt-1">
            Signature Pieces
          </p>
        </div>
        <div className="bg-white rounded-2xl p-4 text-center shadow-md shadow-cc-blue/10">
          <p className="font-heading text-cc-pink text-2xl font-bold">100%</p>
          <p className="font-body text-xs text-cc-muted mt-1">CSS-driven</p>
        </div>
      </div>
    </div>
  );
}

export default AboutStats;
