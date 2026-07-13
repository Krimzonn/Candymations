function CloudBlob({ color = "cc-lilac", size = 200, className = "" }) {
  const colorMap = {
    "cc-lilac": "#D4B3FF",
    "cc-blue": "#8FC7FF",
    "cc-pink": "#FF8FC7",
  };

  return (
    <div
      className={`absolute rounded-full blur-3xl opacity-60 pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: colorMap[color],
      }}
    ></div>
  );
}

export default CloudBlob;
