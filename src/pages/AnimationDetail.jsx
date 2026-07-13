import { useParams } from "react-router-dom";

function AnimationDetail() {
  const { slug } = useParams();

  return (
    <h1 className="font-heading text-cc-pink text-4xl p-8">
      Animation: {slug}
    </h1>
  );
}

export default AnimationDetail;
