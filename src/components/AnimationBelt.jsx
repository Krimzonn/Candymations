import { Link } from "react-router-dom";
import { animations } from "../data/animations";

function AnimationBelt() {
  const beltItems = [...animations, ...animations];

  return (
    <div className="py-6 overflow-hidden">
      <p className="text-center font-body text-xs uppercase tracking-wide text-cc-muted mb-4">
        A peek inside
      </p>
      <div className="belt-track flex gap-4 w-max">
        {beltItems.map((anim, i) => (
          <Link
            to={`/animations/${anim.slug}`}
            key={`${anim.slug}-${i}`}
            className="bg-white rounded-2xl px-5 py-3 shadow-md shadow-cc-pink/10 min-w-[160px] shrink-0"
          >
            <p className="font-heading text-cc-text text-sm font-semibold">
              {anim.name}
            </p>
            <p className="font-body text-xs text-cc-muted mt-0.5">
              {anim.category}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AnimationBelt;
