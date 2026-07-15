function SlideAndStagger() {
  const items = ["First", "Second", "Third", "Fourth"];

  return (
    <div className="flex flex-col gap-2 w-48">
      {items.map((item, i) => (
        <div
          key={item}
          className="bg-cc-lilac/50 rounded-xl px-4 py-2 shadow-md shadow-cc-pink/30 stagger-item"
          style={{ animationDelay: `${i * 0.12}s` }}
        >
          <p className="font-body text-cc-text text-sm">{item}</p>
        </div>
      ))}
    </div>
  );
}

export default SlideAndStagger;
