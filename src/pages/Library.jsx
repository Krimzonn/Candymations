import { animations } from "../data/animations";
import AnimationCard from "../components/AnimationCard";

function Library() {
  return (
    <div className="font-heading text-cc-text text-4xl font-bold mb-8">
      Animation Library
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {animations.map((anim) => (
          <AnimationCard key={anim.slug} {...anim} />
        ))}
      </div>
    </div>
  );
}

export default Library;
