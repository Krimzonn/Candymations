import { Link } from "react-router-dom";
import CloudBlob from "./CloudBlob";

function Hero() {
  return (
    <div className="relative overflow-hidden w-full px-8 py-16 text-center">
      <CloudBlob color="cc-lilac" size={250} className="top-24 -left-16" />
      <CloudBlob color="cc-blue" size={300} className="-bottom-20 -right-24" />

      <div className="relative z-10 max-w-xl mx-auto">
        <h1 className="font-heading text-cc-text text-4xl font-bold mb-4">
          A little library of constant motion
        </h1>
        <p className="font-body text-cc-muted text-base mb-8">
          Hand-crafted CSS and Tailwind animations, from playful basics to
          advanced signature effects.
        </p>
        <Link
          to="/library"
          className="inline-block bg-cc-pink hover:bg-cc-pink-hover text-white font-body font-semibold px-6 py-3 rounded-full transition-colors"
        >
          Explore the animation library
        </Link>
      </div>
    </div>
  );
}

export default Hero;
