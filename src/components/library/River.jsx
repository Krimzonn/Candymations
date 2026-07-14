import { buildRiverPath } from "../../utils/riverPath";

function River({ height = 2400 }) {
  const path = buildRiverPath(height);

  return (
    <svg
      className="absolute top-0 left-0 w-full pointer-events-none"
      viewBox={`0 0 640 ${height}`}
      preserveAspectRatio="none"
      style={{ height }}
    >
      <path
        d={path}
        stroke="#8FC7FF"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
        className="river-flow"
      />
    </svg>
  );
}

export default River;
