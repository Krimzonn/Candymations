import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { animations } from "../data/animations";
import { animationComponents } from "../animations";

function AnimationDetail() {
  const { slug } = useParams();
  const meta = animations.find((a) => a.slug === slug);
  const [replayKey, setReplayKey] = useState(0);

  if (!meta) {
    return (
      <div className="p-8 text-center">
        <p className="font-heading text-cc-text text-2xl mb-4">
          Animation not found
        </p>
        <Link to="/library" className="text-cc-pink">
          Back to Library
        </Link>
      </div>
    );
  }

  const AnimationComponent = animationComponents[slug];

  return (
    <div className="max-w-2xl mx-auto px-8 py-16 text-center">
      <div className="bg-white rounded-3xl shadow-lg shadow-cc-pink/10 p-10 min-8 min-h-[280px] flex items-center justify-center">
        {AnimationComponent ? (
          <AnimationComponent key={replayKey} />
        ) : (
          <p className="font-body text-cc-muted">Coming Soon!</p>
        )}
      </div>

      <h1 className="font-heading text-cc-text text-3xl font-bold mb-2">
        {meta.name}
      </h1>
      <p className="font-body text-cc-muted mb-6">{meta.description}</p>

      <div className="flex items-center justify-center gap-4">
        <button
          onClick={() => setReplayKey((k) => k + 1)}
          className="bg-cc-pink hover:bg-cc-pink-hover text-white font-body font-semibold px-6 py-3 rounded-full transition-colors"
        >
          Replay
        </button>
        <Link
          to="/library"
          className="font-body text-cc-text hover:text-cc-pink transition-colors"
        >
          Back to Library
        </Link>
      </div>
    </div>
  );
}

export default AnimationDetail;
