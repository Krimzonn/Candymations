import { Link } from "react-router-dom";

function AnimationCard({ slug, name, description }) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg shadow-cc-pink/10 hover:translate-y-1 transition-transform">
      <h3 className="font-heading text-cc-text text-xl font-semibold mb-2">
        {name}
      </h3>
      <p className="font-body text-cc-muted text-sm mb-4">{description}</p>
      <Link
        to={`/animations/${slug}`}
        className="inline-block bg-cc-pink hover:bg-cc-pink-hover text-white font-body font-medium px-4 py-2 rounded-full transition-colors"
      >
        Play Animation
      </Link>
    </div>
  );
}

export default AnimationCard;
