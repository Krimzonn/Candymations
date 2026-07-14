import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function PathCard({ slug, name, description, category }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-64"
    >
      <Link
        to={`/animations/${slug}`}
        className="block bg-white rounded-2xl p-5 shadow-lg shadow-cc-pink/15 hover:translate-y-1 transition-transform"
      >
        <h3 className="font-heading text-cc-text text-lg font-semibold mb-1">
          {name}
        </h3>
        <p className="font-body text-cc-muted text-sm mb-2">{description}</p>
        <span className="inline-block bg-cc-lilac/20 text-cc-text px-3 py-1 rounded-full">
          {category}
        </span>
      </Link>
    </motion.div>
  );
}

export default PathCard;
