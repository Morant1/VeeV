const isInsideRectangle = (point, rect) =>
  point.x > rect.left &&
  point.x < rect.right &&
  point.y > rect.top &&
  point.y < rect.bottom;

const isInsideCircle = (point, { radius, cx, cy }) => {
  const distance = Math.sqrt((point.x - cx) ** 2 + (point.y - cy) ** 2);
  return distance < radius;
};

module.exports = {
  isInsideRectangle,
  isInsideCircle,
};
