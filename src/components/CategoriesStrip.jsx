const categories = [
  "Entrance",
  "Reveal",
  "Loading",
  "Attention",
  "Interaction",
  "Hover",
  "Signature",
  "Ambient",
];

function CategoriesStrip() {
  return (
    <div className="flex flex-wrap justify-center gap-3 px-8 py-10">
      {categories.map((cat) => (
        <span
          key={cat}
          className="bg-cc-lilac/20 text-cc-text font-body text-sm px-4 py-2 rounded-full"
        >
          {cat}
        </span>
      ))}
    </div>
  );
}

export default CategoriesStrip;
