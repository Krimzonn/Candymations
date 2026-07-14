export function getRiverX(y, height) {
  const segmentHeight = 240;
  const segment = Math.floor(y / segmentHeight);
  const t = (y % segmentHeight) / segmentHeight;

  const swingOut = segment % 2 === 0 ? 460 : 180;
  const startX = 320;
  const endX = 320;

  const mt = 1 - t;
  const x =
    mt * mt * mt * startX +
    3 * mt * mt * t * swingOut +
    3 * mt * t * t * swingOut +
    t * t * t * endX;

  return x;
}

export function buildRiverPath(height) {
  const segments = Math.ceil(height / 240);
  let path = "M 320 40";

  for (let i = 0; i < segments; i++) {
    const y1 = 40 + i * 240 + 80;
    const y2 = 40 + i * 240 + 160;
    const yEnd = 40 + (i + 1) * 240;
    const swingOut = i % 2 === 0 ? 480 : 160;
    path += ` C ${swingOut} ${y1}, ${swingOut} ${y2}, 320 ${yEnd}`;
  }
  return path;
}
